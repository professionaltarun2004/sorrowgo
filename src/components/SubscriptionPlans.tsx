import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basic Ride",
      price: "₹299",
      period: "per ride",
      benefits: [
        "1 ride per month",
        "Access to AI Comforter Demo",
        "Mood Tracker access"
      ],
      highlighted: false
    },
    {
      name: "Premium Comfort",
      price: "₹799",
      period: "per month",
      benefits: [
        "Unlimited rides",
        "Priority comforters",
        "Access to Stories of Hope",
        "Monthly virtual support session"
      ],
      highlighted: true
    },
    {
      name: "Therapy Partner",
      price: "Custom",
      period: "pricing",
      benefits: [
        "Pay at partner therapist hospitals",
        "Corporate wellness tie-ups",
        "Dedicated comforters"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="subscription" className="py-20 bg-gradient-to-br from-[hsl(var(--warm-pink))] to-[hsl(var(--soft-sky))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            SorrowGo Subscription & Payment Options
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Choose your comfort journey. Pay per ride, subscribe for unlimited support, or connect directly with therapy partners.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 bg-white/70 backdrop-blur-sm border-border hover:shadow-[var(--shadow-float)] transition-all duration-500 hover:scale-105 animate-fade-in-up ${
                  plan.highlighted ? "ring-2 ring-primary shadow-[var(--shadow-float)]" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-[hsl(var(--healing-blue))] to-[hsl(var(--primary))] text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-foreground/70 ml-2">/ {plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[hsl(var(--healing-blue))] to-[hsl(var(--primary))]"
                      : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.name === "Therapy Partner" ? "Contact Us" : "Get Started"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
