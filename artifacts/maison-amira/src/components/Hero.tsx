import Header from "./Header";
import TrustBadges from "./TrustBadges";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-2.5rem)] flex-col overflow-hidden">
      {/* Campaign image — replace /public/hero.jpg to swap the banner */}
      <img
        src="/hero.jpg"
        alt="Three women in embellished modest dresses"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
      />

      {/* Warm cream wash over the top-left so the nav + copy stay readable
          while the airy, light feel of the photo shows through on the right */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/90 via-cream/35 to-transparent" />

      {/* Overlaid navigation */}
      <Header overlay />

      {/* Hero copy */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
          <div className="max-w-lg text-cocoa">
            <p className="text-[0.72rem] font-sans uppercase tracking-widest2 text-tan">
              New Collection
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] text-espresso sm:text-6xl lg:text-7xl">
              Timeless elegance.
              <br />
              Made for every beautiful moment.
            </h1>
            <p className="mt-5 max-w-sm font-sans text-sm font-light leading-relaxed text-mocha">
              Modest. Sophisticated. Effortlessly you.
            </p>
            <a
              href="#new-arrivals"
              className="mt-9 inline-block bg-tan px-10 py-4 text-[0.72rem] font-sans uppercase tracking-widest2 text-cream transition-colors hover:bg-mocha"
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
