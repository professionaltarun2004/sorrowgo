import { Progress } from "@/components/ui/progress";

const CTAProgressBar = () => {
  const metrics = [
    { label: "Rides Completed", percentage: 68 },
    { label: "Comforters Trained", percentage: 54 },
    { label: "Users Impacted", percentage: 72 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--warm-pink))] to-[hsl(var(--soft-sky))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Join the Movement
          </h2>
          
          <div className="space-y-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-foreground">
                    {metric.label}
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {metric.percentage}%
                  </span>
                </div>
                <Progress value={metric.percentage} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAProgressBar;
