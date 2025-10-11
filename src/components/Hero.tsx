import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Floating heart particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
          <Heart className="w-full h-full text-primary animate-float" />
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 opacity-10" style={{ animationDelay: "2s" }}>
          <Heart className="w-full h-full text-primary animate-float" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 opacity-10" style={{ animationDelay: "4s" }}>
          <Heart className="w-full h-full text-primary animate-float" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-foreground/90">
            <Heart className="w-4 h-4 text-primary" />
            <span>A Movement of Empathy & Healing</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            SorrowGo
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-muted-foreground">
              The Ride of the Unheard
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl font-light">
            Because everyone deserves to be heard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("how-it-works")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium animate-pulse-glow transition-all duration-300 hover:scale-105"
            >
              Book a Healing Ride
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("join-us")}
              className="glass-hover border-2 border-primary/30 text-foreground rounded-full px-8 py-6 text-lg font-medium"
            >
              Join as a Comfort Rider
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="0.5"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;