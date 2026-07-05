import { NextResponse } from "next/server";
import Stripe from "stripe";
import { catalog } from "@/lib/catalog";

export const runtime = "nodejs";

const FREE_SHIPPING_THRESHOLD = 80; // GBP
const STANDARD_SHIPPING = 499; // pence
const EXPRESS_SHIPPING = 999; // pence

// Countries we currently ship to — edit as you expand.
const SHIP_TO: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] =
  [
    "GB", "IE", "FR", "DE", "ES", "IT", "NL", "BE", "SE", "DK", "NO",
    "US", "CA", "AU", "AE", "SA", "QA", "KW", "BH", "OM",
  ];

export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      {
        error:
          "Payments aren't switched on yet. Add your Stripe keys to enable checkout.",
      },
      { status: 503 },
    );
  }

  const stripe = new Stripe(secret);

  let body: { items?: { key: string; qty: number }[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const items = body.items;
  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Your bag is empty." }, { status: 400 });
  }

  // Rebuild the order server-side from the catalog — never trust prices
  // sent by the browser.
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let subtotal = 0;

  for (const it of items) {
    const [slug, variantId, size] = String(it.key).split("|");
    const product = catalog.find((p) => p.slug === slug);
    if (!product) continue;
    const variant =
      product.variants.find((v) => v.id === variantId) ?? product.variants[0];
    const qty = Math.max(1, Math.min(20, Number(it.qty) || 1));
    subtotal += product.price * qty;

    line_items.push({
      quantity: qty,
      price_data: {
        currency: "gbp",
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: `${product.name} — ${variant.name}, Size ${size}`,
          metadata: { slug, variant: variantId, size },
        },
      },
    });
  }

  if (line_items.length === 0) {
    return NextResponse.json(
      { error: "Those items are no longer available." },
      { status: 400 },
    );
  }

  const standardAmount =
    subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;

  const origin =
    req.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    new URL(req.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      phone_number_collection: { enabled: true },
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: SHIP_TO },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name:
              standardAmount === 0 ? "Free Standard Shipping" : "Standard Shipping",
            fixed_amount: { amount: standardAmount, currency: "gbp" },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Express Shipping",
            fixed_amount: { amount: EXPRESS_SHIPPING, currency: "gbp" },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 1 },
              maximum: { unit: "business_day", value: 3 },
            },
          },
        },
      ],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("Stripe checkout error:", e);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 },
    );
  }
}
