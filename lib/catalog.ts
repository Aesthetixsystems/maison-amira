// ─────────────────────────────────────────────────────────────
//  Maison Amira — full product catalog (with variants)
//
//  Each product here gets its own page at /products/<slug>.
//  Add a product by copying a block below; add a colourway by
//  adding an entry to `variants` (each with its own image list).
//  Drop the photos in /public/products/<slug>/ and reference them.
// ─────────────────────────────────────────────────────────────

export type Variant = {
  id: string; // url-safe, e.g. "mint"
  name: string; // shown to shoppers, e.g. "Mint"
  swatch: string; // hex colour for the selector dot
  images: string[]; // gallery photos for this colourway
};

export type CatalogProduct = {
  slug: string;
  name: string;
  price: number; // GBP
  category: string;
  description: string;
  details: string[];
  variants: Variant[];
  sizes?: string[]; // falls back to DEFAULT_SIZES
};

// Standard size run for the store.
export const DEFAULT_SIZES = ["S", "M", "L", "XL", "XXL"];

export const catalog: CatalogProduct[] = [
  {
    slug: "zaria-kaftan",
    name: "Zaria Kaftan",
    price: 54.99,
    category: "Kaftans",
    description:
      "The Zaria Kaftan is our signature silhouette — a flowing, floor-length kaftan hand-finished with intricate tonal embroidery and a soft shimmer. Cut for effortless movement and quiet luxury, it drapes beautifully for Eid, evening gatherings, or any moment that calls for timeless modesty.",
    details: [
      "Relaxed full-length kaftan fit",
      "Tonal embroidery with a subtle shimmer",
      "Mandarin collar with keyhole neckline",
      "Model is 5'8\" and wears a size S",
      "Composition & care details to follow",
    ],
    variants: [
      {
        id: "mint",
        name: "Mint",
        swatch: "#cdd9d0",
        images: [
          "/products/zaria-kaftan/mint-1.jpg",
          "/products/zaria-kaftan/mint-2.jpg",
          "/products/zaria-kaftan/mint-3.jpg",
        ],
      },
      {
        id: "champagne",
        name: "Champagne",
        swatch: "#e6d6bb",
        images: [
          "/products/zaria-kaftan/champagne-1.jpg",
          "/products/zaria-kaftan/champagne-2.jpg",
          "/products/zaria-kaftan/champagne-3.jpg",
        ],
      },
      {
        id: "yellow",
        name: "Yellow",
        swatch: "#e7ce78",
        images: [
          "/products/zaria-kaftan/yellow-1.jpg",
          "/products/zaria-kaftan/yellow-2.jpg",
          "/products/zaria-kaftan/yellow-3.jpg",
        ],
      },
    ],
  },
];

export function getProduct(slug: string): CatalogProduct | undefined {
  return catalog.find((p) => p.slug === slug);
}
