import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import EidBanner from "@/components/EidBanner";
import NewArrivals from "@/components/NewArrivals";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <EidBanner />
        <NewArrivals />
        <TrustBadges />
      </main>
      <Footer />
    </>
  );
}
