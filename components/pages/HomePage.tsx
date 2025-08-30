import HeroSection from "../home-page-components/HeroSection";
import Features from "../home-page-components/Features";
import Showcase from "../home-page-components/Showcase";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <Features />

      <Showcase />
    </div>
  );
}
