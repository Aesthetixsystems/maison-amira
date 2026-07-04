# Maison Amira

A modest-wear storefront — **"Timeless Modesty"**. Built with Next.js (App Router) + Tailwind CSS.

Warm, luxury, feminine aesthetic: cream / beige / tan / gold palette, Cormorant Garamond serif headings, Jost sans-serif body.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding products

This is a dropshipping storefront, so the catalog is intentionally data-driven.
Edit **[`lib/products.ts`](lib/products.ts)** — it holds a plain `products` array
(and a `categories` array). Each product looks like:

```ts
{
  id: "embellished-kaftan",
  name: "Embellished Kaftan",
  price: 49.99,          // GBP
  image: "https://…",    // photo URL, or "" for a soft placeholder tile
  category: "Kaftans",
  badge: "New",          // optional pill (e.g. "New", "Bestseller")
}
```

Add, edit, or remove entries and the **New Arrivals** grid updates automatically.
Later this file can be swapped for a CMS / Shopify / JSON API without touching
the components. Leaving `image` empty renders a branded placeholder so the layout
holds its shape before real photos arrive.

## Structure

- `app/` — layout, global styles, and the home page
- `components/` — Header, Hero, Categories, EidBanner, NewArrivals, TrustBadges, Footer, icons
- `lib/products.ts` — product & category data (the part you'll edit most)
- `tailwind.config.ts` — brand colour palette and fonts
