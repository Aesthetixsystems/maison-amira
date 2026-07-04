import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

export default function NewArrivals() {
  return (
    <section id="new-arrivals" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>New Arrivals</SectionHeading>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block border-b border-gold pb-1 font-sans text-xs uppercase tracking-widest2 text-gold transition-colors hover:text-mocha"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
