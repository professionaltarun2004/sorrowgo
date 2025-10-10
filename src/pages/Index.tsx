import Navigation from "@/components/Navigation";
import MobileAppDemo from "@/components/MobileAppDemo";
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
import SubscriptionPlans from "@/components/SubscriptionPlans";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Two-pane layout */}
      <div className="lg:ml-64 flex">
        {/* Main content area */}
        <main className="flex-1 min-h-screen">
          <div id="home">
            <Hero />
          </div>
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
        
        {/* Right pane - Interactive demo (hidden on mobile) */}
        <aside className="hidden xl:block w-96 p-8">
          <MobileAppDemo />
        </aside>
      </div>
    </div>
  );
};

export default Index;