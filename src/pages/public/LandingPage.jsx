import Accountability from "@/components/landing/Accountability";
import CtaSection from "@/components/landing/CtaSection";
import FeaturedNeeds from "@/components/landing/FeaturedNeeds";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import ImpactSection from "@/components/landing/ImpactSection";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingHeader from "@/components/landing/LandingHeader";
import WhoWeServe from "@/components/landing/WhoWeServe";
import useLandingTheme from "@/hooks/useLandingTheme";
import { cn } from "@/lib/cn";

/** Public home page. Light / dark applies to this page only (the dashboards stay light). */
export default function LandingPage() {
  const { isDark, toggle } = useLandingTheme();

  return (
    <div className={cn(isDark && "dark")}>
      <div className="bg-white text-ink dark:bg-black dark:text-white">
        <LandingHeader isDark={isDark} onToggleTheme={toggle} />
        <main>
          <Hero />
          <HowItWorks />
          <FeaturedNeeds />
          <WhoWeServe />
          <Accountability />
          <ImpactSection />
          <CtaSection />
        </main>
        <LandingFooter />
      </div>
    </div>
  );
}