"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/products";
import type { CatalogProduct } from "@/lib/catalog";
import { HeartIcon } from "./icons";

export default function ProductDetail({ product }: { product: CatalogProduct }) {
  const [variantIdx, setVariantIdx] = useState(0);
  const [imageIdx, setImageIdx] = useState(0);

  const variant = product.variants[variantIdx];
  const images = variant.images;
  const mainImage = images[Math.min(imageIdx, images.length - 1)];

  function selectVariant(i: number) {
    setVariantIdx(i);
    setImageIdx(0);
  }

  return (
    <section className="bg-cream py-6 sm:py-10">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-10 lg:px-16">
        {/* Breadcrumb */}
        <nav className="font-sans text-[0.68rem] uppercase tracking-widest text-mocha">
          <Link href="/" className="transition-colors hover:text-tan">
            Home
          </Link>
          <span className="mx-2 text-taupe">/</span>
          <span className="text-taupe">{product.category}</span>
          <span className="mx-2 text-taupe">/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>

        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:gap-20">
          {/* Gallery */}
          <div className="flex flex-col gap-4 sm:flex-row-reverse sm:items-start">
            {/* Main image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-beige">
              <Image
                src={mainImage}
                alt={`${product.name} — ${variant.name}`}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 55vw"
                className="object-cover object-top"
              />
            </div>
            {/* Thumbnails: row on mobile, column on desktop */}
            <div className="flex gap-3 sm:flex-col">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setImageIdx(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`relative aspect-[4/5] w-16 shrink-0 cursor-pointer overflow-hidden rounded-sm bg-beige transition-all sm:w-20 ${
                    i === imageIdx
                      ? "ring-2 ring-tan"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info — sticks in view while the gallery scrolls on desktop */}
          <div className="lg:sticky lg:top-28 lg:self-start lg:pt-2">
            <p className="font-sans text-[0.7rem] uppercase tracking-widest2 text-gold">
              {product.category}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-espresso sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 font-sans text-lg text-tan">
              {formatPrice(product.price)}
            </p>

            {/* Colour selector */}
            <div className="mt-8">
              <p className="font-sans text-[0.7rem] uppercase tracking-widest text-mocha">
                Colour — <span className="text-cocoa">{variant.name}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => selectVariant(i)}
                    aria-label={v.name}
                    title={v.name}
                    className={`h-9 w-9 cursor-pointer rounded-full border transition-all ${
                      i === variantIdx
                        ? "border-tan ring-2 ring-tan ring-offset-2 ring-offset-cream"
                        : "border-beige hover:border-taupe"
                    }`}
                    style={{ backgroundColor: v.swatch }}
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                className="flex-1 cursor-pointer bg-tan px-8 py-4 text-[0.72rem] font-sans uppercase tracking-widest2 text-cream transition-colors hover:bg-mocha"
              >
                Add to Bag
              </button>
              <button
                type="button"
                aria-label="Add to wishlist"
                className="flex h-[3.4rem] w-[3.4rem] shrink-0 cursor-pointer items-center justify-center border border-beige text-cocoa transition-colors hover:border-tan hover:text-tan"
              >
                <HeartIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-prose font-sans text-sm font-light leading-relaxed text-mocha">
              {product.description}
            </p>

            {/* Details */}
            <ul className="mt-6 space-y-2 border-t border-beige pt-6">
              {product.details.map((d) => (
                <li
                  key={d}
                  className="flex gap-2 font-sans text-sm font-light text-mocha"
                >
                  <span className="text-goldsoft">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
