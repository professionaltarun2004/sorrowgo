import { Heart, Users, MessageCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--soft-sky))] to-[hsl(var(--warm-pink))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Our Mission
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Empathy First</h3>
              <p className="text-foreground/70">Every ride is built on genuine human connection and understanding</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Safe Space</h3>
              <p className="text-foreground/70">Judgment-free zone where you can be yourself without fear</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Active Listening</h3>
              <p className="text-foreground/70">Trained comforters who understand the art of truly hearing you</p>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-foreground/80 leading-relaxed">
              SorrowGo is a mental-wellness platform reimagining emotional support through companionship on wheels. In a world drowning in judgment, noise, and isolation, we aim to offer a safe, private, and soulful space for individuals to express, reflect, and heal — one ride at a time.
            </p>
            <p className="text-lg font-medium text-primary mt-6">
              We believe empathy can be as accessible as a cab — and as healing as a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;