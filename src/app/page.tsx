import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import SystemsSection from "@/components/sections/SystemsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <IntroSection />
    
      <SystemsSection />
      
      {/* Other sections will be added here */}
    </main>
  );
}
