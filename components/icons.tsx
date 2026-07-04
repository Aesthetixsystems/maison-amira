// Lightweight inline SVG icons — no icon library dependency.
// Each accepts a className so callers control size / stroke colour.

type IconProps = { className?: string };

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20.5s-7.5-4.6-7.5-9.7a4.2 4.2 0 0 1 7.5-2.6 4.2 4.2 0 0 1 7.5 2.6c0 5.1-7.5 9.7-7.5 9.7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BagIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8h12l-1 12H7L6 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 7h11v8H3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M14 10h4l3 3v2h-7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="7" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.5" cy="17.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function GemIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 4h12l3 5-9 11L3 9l3-5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M3 9h18M9 4 7 9l5 11 5-11-2-5" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}

export function ReturnIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 9a8 8 0 1 1-1.5 4.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4 4v5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 5 6v5c0 4.3 3 7.6 7 9 4-1.4 7-4.7 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Small decorative diamond ornament used above the wordmark.
export function Ornament({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 12" fill="none" aria-hidden>
      <path d="M0 6h13" stroke="currentColor" strokeWidth="1" />
      <path d="M27 6h13" stroke="currentColor" strokeWidth="1" />
      <path d="M20 2.5 23.5 6 20 9.5 16.5 6 20 2.5Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}
