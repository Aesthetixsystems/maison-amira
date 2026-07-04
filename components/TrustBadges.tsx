import { ReturnIcon, ShieldIcon, TruckIcon, GemIcon } from "./icons";

const badges = [
  { Icon: TruckIcon, title: "Free Shipping", text: "On orders over £80" },
  { Icon: GemIcon, title: "Premium Quality", text: "Carefully sourced" },
  { Icon: ReturnIcon, title: "Easy Returns", text: "14 days return" },
  { Icon: ShieldIcon, title: "Secure Payments", text: "100% protected" },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-beige bg-sand py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {badges.map(({ Icon, title, text }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <Icon className="h-8 w-8 text-tan" />
            <h4 className="mt-3 font-sans text-[0.7rem] uppercase tracking-widest2 text-cocoa">
              {title}
            </h4>
            <p className="mt-1 font-sans text-xs font-light text-mocha">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
