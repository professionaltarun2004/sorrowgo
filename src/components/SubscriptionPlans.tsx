import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Peace Starter",
      price: "₹199",
      period: "month",
      benefits: [
        "2 rides/month",
        "Listener matching",
        "Confidential sessions"
      ],
      highlighted: false
    },
    {
      name: "Mind Balance",
      price: "₹499",
      period: "month",
      benefits: [
        "5 rides/month",
        "Priority listeners",
        "Location flexibility"
      ],
      highlighted: true
    },
    {
      name: "Serenity Pro",
      price: "₹999",
      period: "month",
      benefits: [
        "Unlimited rides",
        "24x7 comfort support",
        "Free partner therapy add-ons"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="subscription" className="py-20 bg-gradient-to-br from-[hsl(var(--warm-pink))] to-[hsl(var(--soft-sky))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Subscription Plans
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Choose the plan that fits your healing journey
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
                  Get Started
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
