import { Button } from "@/components/ui/button";
import { Heart, Users, Award } from "lucide-react";

const JoinSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    { icon: Heart, text: "Make a real difference in people's lives" },
    { icon: Users, text: "Join a community of empathy warriors" },
    { icon: Award, text: "Training and certification provided" }
  ];

  return (
    <section id="join-us" className="py-20 bg-gradient-to-br from-[hsl(var(--calm-blue))] to-[hsl(var(--healing-blue))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Become a Comforter
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join our growing network of empathy warriors — people who can lend an ear, share a ride, and spread warmth. Training provided. Certification optional.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-white mx-auto mb-4" />
                  <p className="text-white font-medium">{benefit.text}</p>
                </div>
              );
            })}
          </div>
          
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white hover:bg-white/90 text-primary rounded-full px-8 py-6 text-lg font-medium shadow-[var(--shadow-float)] hover:scale-105 transition-all duration-300"
          >
            Sign Up as Comforter
          </Button>
          
          <div className="mt-16 pt-16 border-t border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">Partner With Us</h3>
            <p className="text-xl text-white/90 mb-8">
              Invest in emotional wellness. Support a new-age startup redefining connection and care in India. We're looking for partners who believe in empathy as the next revolution.
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-white bg-transparent hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;