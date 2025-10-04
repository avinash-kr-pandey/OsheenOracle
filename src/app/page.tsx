import Achievements from "@/components/Home/Achievements";
import Blog from "@/components/Home/Blog";
import Catalogue from "@/components/Home/Catalogue";
import Discover from "@/components/Home/Discover";
import HeroSection from "@/components/Home/HeroSection";
import MediaSpotlight from "@/components/Home/MediaSpotlight";
import MEMBER from "@/components/Home/MEMBER";
import WelcomeOsheenOracle from "@/components/Home/WelcomeOsheenOracle";
import WhyChooseUs from "@/components/Home/WhyChooseUs";


export default function Home() {
  return (
    <>
      <header className="w-full min-h-screen bg-gradient-to-b from-pink-200 to-blue-200 relative overflow-hidden">
        <HeroSection />
      </header>
      <WelcomeOsheenOracle />
      <WhyChooseUs />
      <Discover />
      <Achievements />
      <MediaSpotlight />
      <Catalogue />
      <MEMBER />
      <Blog />
    </>
  );
}
