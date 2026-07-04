import { Ornament } from "./icons";

const columns = [
  {
    title: "Shop",
    links: ["Abayas", "Kaftans", "Evening Wear", "Sets"],
  },
  {
    title: "Help",
    links: ["Contact Us", "Shipping", "Returns", "Size Guide", "FAQ"],
  },
  {
    title: "About",
    links: ["Our Story", "Sustainability", "Journal", "Careers"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Brand + newsletter */}
        <div className="flex flex-col items-center text-center">
          <Ornament className="mb-2 h-3 w-10 text-goldsoft" />
          <p className="font-serif text-2xl font-semibold tracking-[0.18em]">
            MAISON AMIRA
          </p>
          <p className="mt-1 text-[0.6rem] font-sans uppercase tracking-widest2 text-goldsoft">
            Timeless Modesty
          </p>

          <form className="mt-8 flex w-full max-w-sm items-center border-b border-cream/30 pb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent font-sans text-sm text-cream placeholder:text-cream/50 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-3 whitespace-nowrap font-sans text-[0.65rem] uppercase tracking-widest2 text-goldsoft transition-colors hover:text-cream"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h5 className="font-sans text-[0.7rem] uppercase tracking-widest2 text-goldsoft">
                {column.title}
              </h5>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm font-light text-cream/70 transition-colors hover:text-cream"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-cream/15 pt-6 text-center">
          <p className="font-sans text-[0.7rem] font-light tracking-wide text-cream/50">
            © {new Date().getFullYear()} Maison Amira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
