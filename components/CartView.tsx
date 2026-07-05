"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

const FREE_SHIPPING_THRESHOLD = 80;

export default function CartView() {
  const { items, setQty, remove, subtotal, count, ready } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ key: i.key, qty: i.qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      if (data.url) window.location.href = data.url;
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Something went wrong. Please try again.",
      );
      setLoading(false);
    }
  }

  if (!ready) {
    return <div className="min-h-[40vh]" />;
  }

  if (count === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl font-semibold text-espresso">
          Your bag is empty
        </h1>
        <p className="mt-4 font-sans text-sm font-light text-mocha">
          Discover our latest arrivals and timeless staples.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-tan px-9 py-3.5 text-[0.7rem] font-sans uppercase tracking-widest2 text-cream transition-colors hover:bg-mocha"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-10">
      <h1 className="font-serif text-4xl font-semibold text-espresso sm:text-5xl">
        Shopping Bag
      </h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        {/* Line items */}
        <ul className="divide-y divide-beige border-y border-beige">
          {items.map((item) => (
            <li key={item.key} className="flex gap-4 py-6">
              <Link
                href={`/products/${item.slug}`}
                className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-sm bg-beige sm:w-28"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-serif text-lg text-cocoa hover:text-tan"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 font-sans text-xs uppercase tracking-widest text-mocha">
                      {item.variantName} · Size {item.size}
                    </p>
                  </div>
                  <p className="font-sans text-sm text-tan">
                    {formatPrice(item.price * item.qty)}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  {/* Qty stepper */}
                  <div className="flex items-center border border-beige">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(item.key, item.qty - 1)}
                      className="px-3 py-1.5 text-cocoa transition-colors hover:text-tan"
                    >
                      −
                    </button>
                    <span className="min-w-[2rem] text-center font-sans text-sm text-cocoa">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty(item.key, item.qty + 1)}
                      className="px-3 py-1.5 text-cocoa transition-colors hover:text-tan"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(item.key)}
                    className="font-sans text-[0.65rem] uppercase tracking-widest text-mocha underline-offset-2 transition-colors hover:text-tan hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="bg-sand p-7">
            <h2 className="font-serif text-2xl text-espresso">Order Summary</h2>

            <div className="mt-5 space-y-3 border-b border-beige pb-5 font-sans text-sm">
              <div className="flex justify-between text-mocha">
                <span>Subtotal</span>
                <span className="text-cocoa">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-mocha">
                <span>Shipping</span>
                <span className="text-cocoa">
                  {subtotal >= FREE_SHIPPING_THRESHOLD
                    ? "Free"
                    : "Calculated at checkout"}
                </span>
              </div>
            </div>

            <div className="flex justify-between pt-5 font-sans">
              <span className="text-sm uppercase tracking-widest text-cocoa">
                Total
              </span>
              <span className="font-serif text-xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>

            {remaining > 0 && (
              <p className="mt-4 font-sans text-xs font-light text-mocha">
                Add {formatPrice(remaining)} more for free shipping.
              </p>
            )}

            <button
              type="button"
              onClick={checkout}
              disabled={loading}
              className="mt-6 w-full cursor-pointer bg-tan px-8 py-4 text-[0.72rem] font-sans uppercase tracking-widest2 text-cream transition-colors hover:bg-mocha disabled:opacity-60"
            >
              {loading ? "Redirecting…" : "Proceed to Checkout"}
            </button>

            {error && (
              <p className="mt-3 font-sans text-xs text-tan">{error}</p>
            )}

            <Link
              href="/"
              className="mt-4 block text-center font-sans text-[0.65rem] uppercase tracking-widest text-mocha underline-offset-2 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
