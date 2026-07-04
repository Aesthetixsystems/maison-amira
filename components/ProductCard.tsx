import Image from "next/image";
import { formatPrice, type Product } from "@/lib/products";
import { HeartIcon } from "./icons";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-beige">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            style={{ objectPosition: product.objectPosition }}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Placeholder tile shown until a real photo URL is added
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-beige to-sand">
            <span className="font-serif text-sm italic text-taupe">
              Maison Amira
            </span>
          </div>
        )}

        {product.badge && (
          <span className="absolute left-3 top-3 bg-cream/90 px-2.5 py-1 text-[0.55rem] font-sans uppercase tracking-widest text-mocha">
            {product.badge}
          </span>
        )}

        <button
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-cocoa shadow-sm transition-colors hover:bg-cream hover:text-tan"
        >
          <HeartIcon className="h-4 w-4" />
        </button>
      </div>

      <h3 className="mt-3 font-serif text-lg leading-snug text-cocoa">
        {product.name}
      </h3>
      <p className="mt-0.5 font-sans text-sm text-tan">
        {formatPrice(product.price)}
      </p>
    </div>
  );
}
