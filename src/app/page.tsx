import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import SystemsSection from "@/components/sections/SystemsSection";
import HomeMethodTimelineSection from "@/components/sections/HomeMethodTimelineSection";
import HomeIntegrationHighlightSection from "@/components/sections/HomeIntegrationHighlightSection";
import HomeQualityStickySection from "@/components/sections/HomeQualityStickySection";
import SplitContactCtaSection from "@/components/sections/SplitContactCtaSection";
import InterlocutorsSliderSection from "@/components/sections/InterlocutorsSliderSection";
import PositioningStatementSection from "@/components/sections/PositioningStatementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <IntroSection />
    
      <SystemsSection />
      <HomeMethodTimelineSection />
      <HomeIntegrationHighlightSection />
      <HomeQualityStickySection />
      <PositioningStatementSection />
      <InterlocutorsSliderSection />
      <SplitContactCtaSection
        title="Échanger sur un périmètre technique"
        body="Pour toute demande relative à un projet multi-systèmes ou à une exigence technique spécifique."
        actionLabel="Nous contacter"
        actionHref="/contact"
        imageSrc="/images/home_page/home_pics/10.webp"
        imageAlt="Espace de direction et échange technique"
      />
      
      {/* Other sections will be added here */}
    </main>
  );
}
