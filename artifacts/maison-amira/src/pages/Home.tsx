import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import EidBanner from "@/components/EidBanner";
import NewArrivals from "@/components/NewArrivals";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Hero />
      <main>
        <Categories />
        <EidBanner />
        <NewArrivals />
      </main>
      <Footer />
    </>
  );
}
