import { TrendingUp, Target, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const InvestorHighlights = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Social Impact",
      content: "Millions of youth struggling with mental health find a safe space to be heard. Each ride equals a direct emotional connection."
    },
    {
      icon: TrendingUp,
      title: "Market Potential",
      content: "India's mental wellness industry projected to cross $10B by 2030. SorrowGo scales as the first mobility-based empathy service."
    },
    {
      icon: Rocket,
      title: "Scalability",
      content: "Expanding across cities with comforter networks, corporate wellness tie-ups, and premium rides."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--soft-sky))] to-[hsl(var(--calm-blue))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Why Invest in SorrowGo?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-8 bg-white/70 backdrop-blur-sm border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105"
              >
                <highlight.icon className="w-16 h-16 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  {highlight.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-center">
                  {highlight.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default InvestorHighlights;
