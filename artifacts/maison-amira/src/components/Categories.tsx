import { categories } from "@/lib/products";
import SectionHeading from "./SectionHeading";

export default function Categories() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading>Shop by Category</SectionHeading>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-10">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group flex w-24 flex-col items-center sm:w-28"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-goldsoft/60 p-1 transition-colors group-hover:border-gold sm:h-28 sm:w-28">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-beige">
                  <img
                    src={category.image}
                    alt={category.name}
                    style={{ objectPosition: category.objectPosition }}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <span className="mt-3 text-center font-sans text-xs uppercase tracking-widest text-mocha">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
