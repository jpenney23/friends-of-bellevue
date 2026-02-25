import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ImpactStats from "@/components/home/ImpactStats";
import MissionSection from "@/components/home/MissionSection";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import PhotoGallery from "@/components/home/PhotoGallery";
import CharitiesSection from "@/components/home/CharitiesSection";
import SponsorsSection from "@/components/home/SponsorsSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import LocationSection from "@/components/home/LocationSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ImpactStats />
        <MissionSection />
        <UpcomingEvents />
        <PhotoGallery />
        <CharitiesSection />
        <SponsorsSection />
        <LeadershipSection />
        <LocationSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
