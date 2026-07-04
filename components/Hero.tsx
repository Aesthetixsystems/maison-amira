import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[74vh] min-h-[520px] w-full">
        {/* Background photo — swap the src for your own campaign image */}
        <Image
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=80"
          alt="Women in flowing modest dresses"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Warm wash so the text stays readable over any photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/55 via-espresso/25 to-transparent" />

        {/* Overlay copy */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
            <div className="max-w-md text-cream">
              <p className="text-[0.7rem] font-sans uppercase tracking-widest2 text-goldsoft">
                New Collection
              </p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] sm:text-6xl">
                Grace in Every Thread
              </h1>
              <p className="mt-4 max-w-sm font-sans text-sm font-light leading-relaxed text-cream/90">
                Modest. Elegant. Timeless. Designed for every occasion.
              </p>
              <a
                href="#new-arrivals"
                className="mt-8 inline-block bg-tan px-9 py-3.5 text-[0.7rem] font-sans uppercase tracking-widest2 text-cream transition-colors hover:bg-mocha"
              >
                Shop New In
              </a>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          <span className="h-1.5 w-6 rounded-full bg-cream" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-cream/50" />
        </div>
      </div>
    </section>
  );
}
