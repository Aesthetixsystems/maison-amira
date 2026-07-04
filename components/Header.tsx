import {
  BagIcon,
  HeartIcon,
  MenuIcon,
  Ornament,
  SearchIcon,
  UserIcon,
} from "./icons";

const navLinks = [
  "New In",
  "Abayas",
  "Kaftans",
  "Sets",
  "Evening Wear",
  "Accessories",
];

// `overlay` renders the header transparently over the hero image (as in the
// desktop mockup); otherwise it's a solid sticky bar.
export default function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? "relative z-30 w-full bg-transparent"
          : "sticky top-0 z-40 border-b border-beige bg-cream/95 backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-cocoa sm:px-8">
        {/* Left — hamburger (mobile) / nav links (desktop) */}
        <div className="flex flex-1 items-center">
          <button
            aria-label="Open menu"
            className="p-1 transition-colors hover:text-tan lg:hidden"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <nav className="hidden items-center gap-x-6 lg:flex xl:gap-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="whitespace-nowrap font-sans text-[0.7rem] uppercase tracking-widest transition-colors hover:text-tan"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Center — wordmark */}
        <div className="flex flex-col items-center leading-none">
          <Ornament className="mb-1 h-3 w-10 text-goldsoft" />
          <span className="font-serif text-xl font-semibold tracking-[0.2em] text-cocoa sm:text-3xl">
            MAISON AMIRA
          </span>
          <span className="mt-1.5 text-[0.55rem] font-sans uppercase tracking-widest2 text-gold sm:text-[0.62rem]">
            Timeless Modesty
          </span>
        </div>

        {/* Right — actions */}
        <div className="flex flex-1 items-center justify-end gap-3.5 sm:gap-5">
          <button aria-label="Search" className="p-1 transition-colors hover:text-tan">
            <SearchIcon className="h-[1.35rem] w-[1.35rem]" />
          </button>
          <button
            aria-label="Account"
            className="hidden p-1 transition-colors hover:text-tan lg:block"
          >
            <UserIcon className="h-[1.35rem] w-[1.35rem]" />
          </button>
          <button
            aria-label="Wishlist"
            className="hidden p-1 transition-colors hover:text-tan sm:block"
          >
            <HeartIcon className="h-[1.35rem] w-[1.35rem]" />
          </button>
          <button
            aria-label="Shopping bag"
            className="flex items-center gap-2 p-1 transition-colors hover:text-tan"
          >
            <span className="relative">
              <BagIcon className="h-[1.35rem] w-[1.35rem]" />
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-tan text-[0.6rem] font-medium text-cream lg:hidden">
                0
              </span>
            </span>
            <span className="hidden font-sans text-[0.7rem] uppercase tracking-widest lg:inline">
              Bag (0)
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
