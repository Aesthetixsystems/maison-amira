import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClearCartOnMount from "@/components/ClearCartOnMount";
import { Ornament } from "@/components/icons";

export const metadata: Metadata = {
  title: "Order Confirmed — Maison Amira",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  return (
    <>
      <AnnouncementBar />
      <Header />
      <ClearCartOnMount />
      <main className="bg-cream">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <Ornament className="mx-auto h-3 w-12 text-goldsoft" />
          <h1 className="mt-6 font-serif text-4xl font-semibold text-espresso sm:text-5xl">
            Thank you for your order
          </h1>
          <p className="mt-5 font-sans text-sm font-light leading-relaxed text-mocha">
            Your payment was successful and your order is confirmed. A receipt is
            on its way to your inbox, and we&rsquo;ll email you again as soon as
            your pieces are on their way.
          </p>
          {session_id && (
            <p className="mt-4 font-sans text-xs uppercase tracking-widest text-taupe">
              Order reference: {session_id.slice(-10)}
            </p>
          )}
          <Link
            href="/"
            className="mt-9 inline-block bg-tan px-9 py-3.5 text-[0.7rem] font-sans uppercase tracking-widest2 text-cream transition-colors hover:bg-mocha"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
