import { BagIcon, HeartIcon, MenuIcon, Ornament, SearchIcon } from "./icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-beige">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left — menu */}
        <button
          aria-label="Open menu"
          className="p-1 text-cocoa transition-colors hover:text-tan"
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        {/* Center — wordmark */}
        <div className="flex flex-col items-center leading-none">
          <Ornament className="mb-1 h-3 w-10 text-goldsoft" />
          <span className="font-serif text-xl font-semibold tracking-[0.18em] text-cocoa sm:text-2xl">
            MAISON AMIRA
          </span>
          <span className="mt-1 text-[0.55rem] font-sans uppercase tracking-widest2 text-gold sm:text-[0.6rem]">
            Timeless Modesty
          </span>
        </div>

        {/* Right — actions */}
        <div className="flex items-center gap-3 text-cocoa sm:gap-4">
          <button aria-label="Search" className="p-1 transition-colors hover:text-tan">
            <SearchIcon className="h-[1.35rem] w-[1.35rem]" />
          </button>
          <button aria-label="Wishlist" className="hidden p-1 transition-colors hover:text-tan sm:block">
            <HeartIcon className="h-[1.35rem] w-[1.35rem]" />
          </button>
          <button aria-label="Shopping bag" className="relative p-1 transition-colors hover:text-tan">
            <BagIcon className="h-[1.35rem] w-[1.35rem]" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-tan text-[0.6rem] font-medium text-cream">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
