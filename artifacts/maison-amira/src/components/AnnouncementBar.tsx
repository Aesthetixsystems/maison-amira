function Sparkle() {
  return (
    <svg className="h-2.5 w-2.5 text-cream/70" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 0c.4 2.6 2 4.2 4.6 4.6C8 5 6.4 6.6 6 9.2 5.6 6.6 4 5 1.4 4.6 4 4.2 5.6 2.6 6 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="bg-mocha text-cream">
      <p className="flex items-center justify-center gap-3 py-2.5 text-[0.62rem] font-sans uppercase tracking-widest2">
        <Sparkle />
        Free Shipping on Orders Over £80
        <Sparkle />
      </p>
    </div>
  );
}
