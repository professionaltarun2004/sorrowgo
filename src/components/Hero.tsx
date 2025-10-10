import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--soft-sky))] via-[hsl(var(--calm-blue))] to-[hsl(var(--healing-blue))]">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-foreground/90">
            <Heart className="w-4 h-4" />
            <span>A Movement of Empathy & Healing</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            SorrowGo
            <span className="block text-3xl md:text-4xl font-normal mt-4 text-foreground/80">
              The Ride of the Unheard
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto font-light">
            Reimagining emotional wellness, one ride at a time
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("how-it-works")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105"
            >
              Book a Comfort Ride
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("join-us")}
              className="border-2 border-foreground/20 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-foreground rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Join as a Comforter
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="hsl(var(--background))"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;