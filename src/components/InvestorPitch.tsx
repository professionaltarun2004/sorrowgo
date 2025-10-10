import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Download, Target, Lightbulb, TrendingUp, DollarSign, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InvestorPitch = () => {
  const [openSlide, setOpenSlide] = useState<number | null>(null);

  const slides = [
    {
      icon: Target,
      title: "The Problem",
      content: "1 in 4 young adults in India struggles with mental health issues. Most never seek help due to stigma, cost, or lack of privacy. Loneliness and pressure are silent killers — yet emotional companionship remains unaddressed."
    },
    {
      icon: Lightbulb,
      title: "Our Solution",
      content: "SorrowGo offers an innovative blend of empathy and accessibility. A mobile-first platform that connects emotionally distressed individuals with trained comforters who provide human companionship during therapeutic rides."
    },
    {
      icon: TrendingUp,
      title: "Market Potential",
      content: "India's mental health and wellness industry is projected to cross $10B by 2030. With increasing openness and demand for non-clinical emotional support, SorrowGo can scale as a new-age wellness service — the 'Uber of Emotional Healing.'"
    },
    {
      icon: DollarSign,
      title: "Business Model",
      content: "Freemium model with paid premium comforter sessions, corporate wellness partnerships, and city-level franchise opportunities. Subscription for regular healing rides and B2B collaborations with therapy networks."
    },
    {
      icon: Heart,
      title: "Impact Vision",
      content: "To normalize emotional expression, reduce loneliness, and make empathy scalable. Every ride becomes a safe space — and every comforter becomes a change agent. Together, we redefine how India listens."
    }
  ];

  const toggleSlide = (index: number) => {
    setOpenSlide(openSlide === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
            Investor Pitch Deck
          </h2>
          
          <p className="text-xl text-center text-foreground/70 mb-12">
            Building the future of emotional wellness in India
          </p>
          
          <div className="space-y-4 mb-8">
            {slides.map((slide, index) => {
              const Icon = slide.icon;
              const isOpen = openSlide === index;
              
              return (
                <Card key={index} className="overflow-hidden border-2 border-border hover:border-primary transition-colors">
                  <button
                    onClick={() => toggleSlide(index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Slide {index + 1}</div>
                        <h3 className="text-xl font-semibold text-foreground">{slide.title}</h3>
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-muted-foreground" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <CardContent className="p-6 pt-0 animate-fade-in">
                      <p className="text-lg text-foreground/80 leading-relaxed">{slide.content}</p>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-medium shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              Request Full Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorPitch;