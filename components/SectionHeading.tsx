import { Ornament } from "./icons";

// Centered small-caps section heading with a subtle ornament divider,
// used above "Shop by Category", "New Arrivals", etc.
export default function SectionHeading({ children }: { children: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="font-sans text-sm uppercase tracking-widest2 text-cocoa">
        {children}
      </h2>
      <Ornament className="mt-3 h-3 w-10 text-goldsoft" />
    </div>
  );
}
