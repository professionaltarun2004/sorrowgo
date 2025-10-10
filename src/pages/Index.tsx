import Hero from "@/components/Hero";
import CauseSection from "@/components/CauseSection";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import ImpactSection from "@/components/ImpactSection";
import InvestorPitch from "@/components/InvestorPitch";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
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
      <InvestorPitch />
      <Testimonials />
      <TeamSection />
      <JoinSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;