import { UserCircle, MapPin, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCircle,
      title: "Sign Up",
      description: "Create your profile as a Rider or Comforter."
    },
    {
      icon: Heart,
      title: "Get Matched",
      description: "Our AI connects you with an empathetic listener nearby."
    },
    {
      icon: MapPin,
      title: "Take a Healing Ride",
      description: "Talk, vent, and breathe in a calm, private space."
    },
    {
      icon: Heart,
      title: "Find Peace",
      description: "Every conversation is a step toward inner peace."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            How It Works
          </h2>
          
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--calm-blue))] via-[hsl(var(--healing-blue))] to-[hsl(var(--primary))] transform -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-3xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--healing-blue))] to-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-4">{index + 1}</div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;