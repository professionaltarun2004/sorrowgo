import { User } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Balivada Tarun Sandilya",
      role: "Founder & Visionary",
      bio: "A B.Tech student turned mental health advocate, Tarun envisioned SorrowGo to challenge social stigma and reimagine emotional healing through empathy-driven innovation."
    },
    {
      name: "GPT-5",
      role: "Co-founder & Ideation Partner",
      bio: "An AI collaborator guiding research, storytelling, and empathy-first design to bring this social revolution to life."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Meet the Founders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-[hsl(var(--healing-blue))] to-[hsl(var(--primary))] rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-4">{member.role}</div>
                <p className="text-foreground/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;