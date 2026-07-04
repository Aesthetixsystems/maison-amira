// ─────────────────────────────────────────────────────────────
//  Maison Amira — product data
//
//  This is the single source of truth for the storefront product
//  cards. Add / edit / remove products here (or wire this up to a
//  CMS, Shopify, or a JSON API later) and the grid updates itself.
//
//  `image` can be any URL. Leave it empty ("") to render a soft
//  placeholder tile instead — handy before real product photos
//  are dropped in.
// ─────────────────────────────────────────────────────────────

export type Product = {
  id: string;
  name: string;
  price: number;          // in GBP
  image: string;          // photo URL, or "" for a placeholder
  category?: string;
  badge?: string;         // e.g. "New", "Bestseller"
  objectPosition?: string; // optional CSS object-position to frame the photo
};

// NOTE: the four cards below reuse the campaign shoot (/hero.jpg), framed on a
// different look via `objectPosition`, so the demo stays on-brand. Swap each
// `image` for your real product photo (and drop the objectPosition) as you add
// the catalog.
export const products: Product[] = [
  {
    id: "embellished-kaftan",
    name: "Embellished Kaftan",
    price: 49.99,
    image: "/hero.jpg",
    objectPosition: "22% 18%",
    category: "Kaftans",
    badge: "New",
  },
  {
    id: "gold-foil-open-abaya",
    name: "Gold Foil Open Abaya",
    price: 52.99,
    image: "/hero.jpg",
    objectPosition: "76% 18%",
    category: "Abayas",
  },
  {
    id: "floral-embroidered-abaya",
    name: "Floral Embroidered Abaya",
    price: 48.99,
    image: "/hero.jpg",
    objectPosition: "48% 16%",
    category: "Abayas",
  },
  {
    id: "luxe-embellished-abaya",
    name: "Luxe Embellished Abaya",
    price: 54.99,
    image: "/hero.jpg",
    objectPosition: "62% 20%",
    category: "Abayas",
    badge: "Bestseller",
  },
];

export const categories: {
  name: string;
  image: string;
  objectPosition?: string;
}[] = [
  { name: "Abayas", image: "/hero.jpg", objectPosition: "48% 24%" },
  { name: "Kaftans", image: "/hero.jpg", objectPosition: "22% 24%" },
  { name: "Evening Wear", image: "/hero.jpg", objectPosition: "76% 24%" },
  {
    name: "Sets",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=400&q=80",
  },
];

export function formatPrice(value: number): string {
  return `£${value.toFixed(2)}`;
}
