import { User } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturedComforters = () => {
  const comforters = [
    {
      name: "Ananya",
      bio: "Certified listener, skilled in empathetic conversation."
    },
    {
      name: "Rohan",
      bio: "Volunteer comforter, specializes in stress and loneliness support."
    },
    {
      name: "Simran",
      bio: "Trained in calming techniques and mindful listening."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Meet Our Comforters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {comforters.map((comforter, index) => (
              <Card
                key={index}
                className="p-8 bg-white/60 backdrop-blur-sm border-border text-center hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[hsl(var(--healing-blue))] to-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {comforter.name}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {comforter.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedComforters;
