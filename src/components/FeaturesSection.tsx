import { Brain, MessageCircle, Car, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Mood Tracker",
      description: "Select your current mood and see curated calming activities or AI companion suggestions."
    },
    {
      icon: MessageCircle,
      title: "AI Comforter Demo",
      description: "Chat with a simulated empathetic listener to experience SorrowGo before booking."
    },
    {
      icon: Car,
      title: "Book a Ride Prototype",
      description: "Try our simple front-end ride booking experience to understand the flow."
    },
    {
      icon: Heart,
      title: "Stories of Hope",
      description: "Read real or fictional healing journeys to feel inspired and connected."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Interactive Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-white/60 backdrop-blur-sm border-border hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
