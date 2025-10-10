import Hero from "@/components/Hero";
import CauseSection from "@/components/CauseSection";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import ImpactSection from "@/components/ImpactSection";
import FeaturesSection from "@/components/FeaturesSection";
import InvestorHighlights from "@/components/InvestorHighlights";
import InvestorPitch from "@/components/InvestorPitch";
import FeaturedComforters from "@/components/FeaturedComforters";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import CTAProgressBar from "@/components/CTAProgressBar";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <CauseSection />
      <AboutSection />
      <HowItWorks />
      <ImpactSection />
      <FeaturesSection />
      <InvestorHighlights />
      <InvestorPitch />
      <FeaturedComforters />
      <Testimonials />
      <TeamSection />
      <CTAProgressBar />
      <JoinSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;