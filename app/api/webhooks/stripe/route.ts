import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

// Stripe calls this URL after a payment. It verifies the event, then saves the
// paid order (items, colour, size, customer + shipping address) to Supabase so
// you have everything you need to place it with your supplier.
//
// Stripe itself emails you on every successful payment (enable "Successful
// payments" notifications in the Stripe dashboard), which covers "notify me".
export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || !webhookSecret) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const stripe = new Stripe(secret);
  const signature = req.headers.get("stripe-signature");
  const raw = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, signature ?? "", webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    try {
      const session = await stripe.checkout.sessions.retrieve(
        (event.data.object as Stripe.Checkout.Session).id,
        { expand: ["line_items"] },
      );
      await saveOrder(session);
    } catch (err) {
      console.error("Failed to save order:", err);
      // Return 200 anyway so Stripe doesn't retry forever; the payment
      // already succeeded and is visible in the Stripe dashboard.
    }
  }

  return NextResponse.json({ received: true });
}

async function saveOrder(session: Stripe.Checkout.Session) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  const supabase = createClient(url, key);

  const items = (session.line_items?.data ?? []).map((li) => ({
    description: li.description,
    quantity: li.quantity,
    amount_total: li.amount_total,
  }));

  // `shipping_details` field naming varies by Stripe API version.
  const s = session as unknown as {
    shipping_details?: { name?: string; address?: Record<string, unknown> };
  };
  const shipping = s.shipping_details;

  await supabase.from("orders").insert({
    stripe_session_id: session.id,
    email: session.customer_details?.email ?? null,
    customer_name: session.customer_details?.name ?? null,
    phone: session.customer_details?.phone ?? null,
    amount_total: session.amount_total,
    currency: session.currency,
    items,
    shipping_name: shipping?.name ?? session.customer_details?.name ?? null,
    shipping_address:
      shipping?.address ?? session.customer_details?.address ?? null,
    status: "paid",
  });
}
