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
};

export const products: Product[] = [
  {
    id: "embellished-kaftan",
    name: "Embellished Kaftan",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    category: "Kaftans",
    badge: "New",
  },
  {
    id: "gold-foil-open-abaya",
    name: "Gold Foil Open Abaya",
    price: 52.99,
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80",
    category: "Abayas",
  },
  {
    id: "floral-embroidered-abaya",
    name: "Floral Embroidered Abaya",
    price: 48.99,
    image:
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=800&q=80",
    category: "Abayas",
  },
  {
    id: "luxe-embellished-abaya",
    name: "Luxe Embellished Abaya",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    category: "Abayas",
    badge: "Bestseller",
  },
];

export const categories: { name: string; image: string }[] = [
  {
    name: "Abayas",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kaftans",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Evening Wear",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80",
  },
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
