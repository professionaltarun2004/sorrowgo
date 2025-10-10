import { useState } from "react";
import { Smartphone, MessageCircle, Heart, Calendar, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MobileAppDemo = () => {
  const [activeScreen, setActiveScreen] = useState("home");

  const screens = {
    home: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-[hsl(var(--healing-blue))] to-[hsl(var(--primary))] p-6 rounded-2xl text-white">
          <h3 className="text-xl font-bold mb-2">Welcome back</h3>
          <p className="text-white/80">How are you feeling today?</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 cursor-pointer hover:scale-105 transition-transform" onClick={() => setActiveScreen("mood")}>
            <Heart className="w-8 h-8 text-primary mb-2" />
            <p className="font-semibold text-sm">Mood Tracker</p>
          </Card>
          <Card className="p-4 cursor-pointer hover:scale-105 transition-transform" onClick={() => setActiveScreen("book")}>
            <Calendar className="w-8 h-8 text-primary mb-2" />
            <p className="font-semibold text-sm">Book a Ride</p>
          </Card>
          <Card className="p-4 cursor-pointer hover:scale-105 transition-transform" onClick={() => setActiveScreen("ai")}>
            <MessageCircle className="w-8 h-8 text-primary mb-2" />
            <p className="font-semibold text-sm">AI Comforter</p>
          </Card>
          <Card className="p-4 cursor-pointer hover:scale-105 transition-transform" onClick={() => setActiveScreen("comforters")}>
            <User className="w-8 h-8 text-primary mb-2" />
            <p className="font-semibold text-sm">Comforters</p>
          </Card>
        </div>
      </div>
    ),
    mood: (
      <div className="space-y-4 animate-fade-in">
        <h3 className="text-lg font-bold text-foreground">How are you feeling?</h3>
        <div className="grid grid-cols-3 gap-3">
          {["😊", "😐", "😔", "😢", "😰", "😡"].map((emoji) => (
            <Button key={emoji} variant="outline" className="text-3xl h-16 hover:scale-110 transition-transform">
              {emoji}
            </Button>
          ))}
        </div>
        <Card className="p-4 bg-gradient-to-br from-[hsl(var(--warm-pink))] to-[hsl(var(--soft-sky))]">
          <p className="text-sm text-foreground/80">Based on your mood, we recommend a calming ride through the city's peaceful routes.</p>
        </Card>
        <Button onClick={() => setActiveScreen("home")} variant="secondary" className="w-full">Back</Button>
      </div>
    ),
    book: (
      <div className="space-y-4 animate-fade-in">
        <h3 className="text-lg font-bold text-foreground">Book Your Comfort Ride</h3>
        <div className="space-y-3">
          <div className="p-3 border border-border rounded-xl">
            <label className="text-sm text-foreground/70">Pick-up Location</label>
            <p className="font-medium">Current Location</p>
          </div>
          <div className="p-3 border border-border rounded-xl">
            <label className="text-sm text-foreground/70">Destination</label>
            <p className="font-medium">Peaceful Park Route</p>
          </div>
          <div className="p-3 border border-border rounded-xl">
            <label className="text-sm text-foreground/70">Select Comforter</label>
            <p className="font-medium">Ananya - Available Now</p>
          </div>
        </div>
        <Button className="w-full bg-gradient-to-r from-[hsl(var(--healing-blue))] to-[hsl(var(--primary))]">
          Confirm Booking - ₹299
        </Button>
        <Button onClick={() => setActiveScreen("home")} variant="secondary" className="w-full">Back</Button>
      </div>
    ),
    ai: (
      <div className="space-y-4 animate-fade-in">
        <h3 className="text-lg font-bold text-foreground">Chat with AI Comforter</h3>
        <div className="space-y-3 h-64 overflow-y-auto">
          <div className="bg-secondary/50 p-3 rounded-xl">
            <p className="text-sm">Hi! I'm here to listen. How are you feeling today?</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-xl ml-8">
            <p className="text-sm">I've been feeling overwhelmed with studies...</p>
          </div>
          <div className="bg-secondary/50 p-3 rounded-xl">
            <p className="text-sm">I understand. It's completely normal to feel that way. Would you like to talk about what's been most challenging?</p>
          </div>
        </div>
        <Button onClick={() => setActiveScreen("home")} variant="secondary" className="w-full">Back</Button>
      </div>
    ),
    comforters: (
      <div className="space-y-4 animate-fade-in">
        <h3 className="text-lg font-bold text-foreground">Select a Comforter</h3>
        <div className="space-y-3">
          {["Ananya", "Rohan", "Simran"].map((name) => (
            <Card key={name} className="p-4 cursor-pointer hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--healing-blue))] to-[hsl(var(--primary))] rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-foreground/70">Available Now</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Button onClick={() => setActiveScreen("home")} variant="secondary" className="w-full">Back</Button>
      </div>
    ),
  };

  return (
    <div className="sticky top-8 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-float)]">
      <div className="flex items-center justify-center mb-6">
        <Smartphone className="w-6 h-6 text-primary mr-2" />
        <h3 className="text-xl font-bold text-foreground">Try SorrowGo App</h3>
      </div>
      
      <div className="bg-gradient-to-br from-[hsl(var(--soft-sky))] to-[hsl(var(--warm-pink))] rounded-3xl p-6 shadow-xl mx-auto max-w-sm">
        <div className="bg-white rounded-2xl p-6 min-h-[500px]">
          {screens[activeScreen as keyof typeof screens]}
        </div>
      </div>
      
      <p className="text-center text-sm text-foreground/70 mt-4">
        Interactive demo - Click to explore features
      </p>
    </div>
  );
};

export default MobileAppDemo;
