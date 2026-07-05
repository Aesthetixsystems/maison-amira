import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartView from "@/components/CartView";

export const metadata: Metadata = {
  title: "Shopping Bag — Maison Amira",
};

export default function CartPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="bg-cream">
        <CartView />
      </main>
      <Footer />
    </>
  );
}
