import Navigation from "@/components/Navigation";
import MobileAppDemo from "@/components/MobileAppDemo";
import Hero from "@/components/Hero";
import EmpathyAI from "@/components/EmpathyAI";
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
import SubscriptionPlans from "@/components/SubscriptionPlans";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Two-pane layout */}
      <div className="lg:ml-64">
        {/* Hero section with two-pane layout */}
        <div className="flex flex-col xl:flex-row">
          {/* Left pane - Hero content */}
          <div className="flex-1" id="home">
            <Hero />
          </div>
          
          {/* Right pane - Video demo */}
          <div className="xl:w-[45%] xl:min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-transparent">
            <MobileAppDemo />
          </div>
        </div>
        
        {/* Main content area */}
        <main className="min-h-screen">
          <CauseSection />
          <div id="about">
            <AboutSection />
          </div>
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <ImpactSection />
          <div id="features">
            <FeaturesSection />
          </div>
          <div id="investor-highlights">
            <InvestorHighlights />
          </div>
          <InvestorPitch />
          <div id="comforters">
            <FeaturedComforters />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <TeamSection />
          <CTAProgressBar />
          <SubscriptionPlans />
          <JoinSection />
          <div id="contact">
            <ContactSection />
          </div>
          <Footer />
        </main>
      </div>

      {/* AI Chatbot */}
      <EmpathyAI />
    </div>
  );
};

export default Index;