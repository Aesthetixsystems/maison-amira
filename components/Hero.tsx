import Image from "next/image";
import TrustBadges from "./TrustBadges";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-6.5rem)] flex-col overflow-hidden lg:min-h-[calc(100svh-8.5rem)]">
      {/* Mobile portrait banner — replace /public/hero-mobile.jpg to swap it */}
      <Image
        src="/hero-mobile.jpg"
        alt="Three women in embellished modest dresses"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top sm:hidden"
      />
      {/* Desktop landscape banner — replace /public/hero.jpg to swap it */}
      <Image
        src="/hero.jpg"
        alt="Three women in embellished modest dresses"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[center_top] sm:block"
      />

      {/* Editorial scrim: rich warm shadow on the left for the copy,
          fading to reveal the models on the right. Keeps text legible. */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/45 to-transparent sm:via-espresso/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent sm:from-espresso/20" />

      {/* Hero copy */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="w-full px-6 sm:px-12 lg:px-20">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-sans uppercase tracking-widest2 text-goldsoft">
              New Collection
            </p>
            <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.02] text-cream drop-shadow-sm sm:text-6xl lg:text-7xl">
              Timeless elegance.
              <br />
              Made for every
              <br className="hidden sm:block" /> beautiful moment.
            </h1>
            <p className="mt-6 max-w-md font-sans text-base font-light leading-relaxed text-cream/85">
              Modest. Sophisticated. Effortlessly you.
            </p>
            <a
              href="#new-arrivals"
              className="mt-9 inline-block bg-cream px-10 py-4 text-[0.72rem] font-sans uppercase tracking-widest2 text-espresso transition-colors hover:bg-white"
            >
              Shop New In
            </a>
          </div>
        </div>
      </div>

      {/* Trust badges docked at the bottom of the hero */}
      <TrustBadges />
    </section>
  );
}
