import { Home, Info, Route, Sparkles, Heart, Users, TrendingUp, CreditCard, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "how-it-works", label: "How It Works", icon: Route },
    { id: "features", label: "Features", icon: Sparkles },
    { id: "testimonials", label: "Stories of Hope", icon: Heart },
    { id: "comforters", label: "Comforters", icon: Users },
    { id: "investor-highlights", label: "Investor Highlights", icon: TrendingUp },
    { id: "subscription", label: "Subscription Plans", icon: CreditCard },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 glass border-r border-border overflow-y-auto z-50 hidden lg:block">
      <div className="p-6">
        <div className="mb-8 animate-gentle-float">
          <h1 className="text-2xl font-bold text-primary mb-1">SorrowGo</h1>
          <p className="text-sm text-muted-foreground">The Ride of the Unheard</p>
        </div>
        
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/80 glass-hover font-medium"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
