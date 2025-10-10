import { TrendingUp, Users, Heart, Globe } from "lucide-react";

const ImpactSection = () => {
  const stats = [
    { icon: Users, value: "1 in 4", label: "Young adults face mental health challenges" },
    { icon: TrendingUp, value: "Rising", label: "Demand for accessible emotional support" },
    { icon: Heart, value: "Human", label: "Connection reduces isolation" },
    { icon: Globe, value: "Society", label: "Building a more compassionate world" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--healing-blue))] to-[hsl(var(--calm-blue))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
            Why SorrowGo?
          </h2>
          
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Mental health challenges are real and rising, especially among youth facing social, academic, and familial pressures. SorrowGo transforms empathy into a service — blending human connection and comfort mobility to reduce isolation and stigma.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
            <p className="text-2xl font-medium text-white">
              Our rides are a movement toward a more compassionate society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;