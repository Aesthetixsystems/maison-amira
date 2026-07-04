import Image from "next/image";

export default function EidBanner() {
  return (
    <section className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-sm shadow-sm md:grid-cols-2">
          {/* Left — copy card */}
          <div className="flex flex-col justify-center bg-cream px-8 py-14 text-center sm:px-12 md:text-left">
            <p className="text-[0.7rem] font-sans uppercase tracking-widest2 text-gold">
              Eid Collection
            </p>
            <h3 className="mt-4 font-serif text-4xl font-semibold leading-tight text-cocoa sm:text-5xl">
              Celebrate in Timeless Style
            </h3>
            <p className="mt-4 font-sans text-sm font-light leading-relaxed text-mocha">
              Elegant pieces to make your moments unforgettable.
            </p>
            <div className="mt-8 md:self-start">
              <a
                href="#new-arrivals"
                className="inline-block bg-tan px-9 py-3.5 text-[0.7rem] font-sans uppercase tracking-widest2 text-cream transition-colors hover:bg-mocha"
              >
                Shop Eid 2025
              </a>
            </div>
          </div>

          {/* Right — lifestyle photo */}
          <div className="relative min-h-[320px] bg-beige">
            <Image
              src="https://images.unsplash.com/photo-1596993100471-c3905dafa78e?auto=format&fit=crop&w=900&q=80"
              alt="Woman in an embellished evening dress"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
