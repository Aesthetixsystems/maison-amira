import { ReturnIcon, ShieldIcon, TruckIcon, GemIcon } from "./icons";

const badges = [
  { Icon: TruckIcon, title: "Free Shipping", text: "On orders over £80" },
  { Icon: GemIcon, title: "Premium Quality", text: "Carefully sourced" },
  { Icon: ReturnIcon, title: "Easy Returns", text: "14 days return" },
  { Icon: ShieldIcon, title: "Secure Payments", text: "100% protected" },
];

// Docked cream bar sitting at the bottom of the hero (as in the mockup).
export default function TrustBadges() {
  return (
    <div className="relative z-10 mt-auto bg-cream/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-6 py-6 sm:px-10 md:grid-cols-4">
        {badges.map(({ Icon, title, text }) => (
          <div key={title} className="flex items-center gap-3.5">
            <Icon className="h-8 w-8 shrink-0 text-tan" />
            <div>
              <h4 className="font-sans text-[0.7rem] uppercase tracking-widest text-cocoa">
                {title}
              </h4>
              <p className="mt-0.5 font-sans text-xs font-light text-mocha">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
