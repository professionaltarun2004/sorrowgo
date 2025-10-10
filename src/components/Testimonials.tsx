import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav, 22",
      text: "I never thought a drive could change my mindset. My comforter didn't try to fix me — they just listened. That was enough."
    },
    {
      name: "Meera, 19",
      text: "For once, someone treated my silence as strength, not weakness. This ride gave me the courage to talk to my parents again."
    },
    {
      name: "Rohit, 28",
      text: "SorrowGo is not therapy. It's humanity on the road — one heart at a time."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--warm-pink))] to-[hsl(var(--soft-sky))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Stories of Healing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:scale-105"
              >
                <Quote className="w-12 h-12 text-primary mb-4" />
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-foreground">— {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;