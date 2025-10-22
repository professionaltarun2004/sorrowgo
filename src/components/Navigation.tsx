import { Home, Info, Route, Sparkles, Heart, Users, TrendingUp, CreditCard, Mail, LogIn, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import ThemeToggle from "./ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";

const Navigation = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Sign out failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Signed out",
        description: "You've been successfully signed out.",
      });
    }
  };

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

        {/* Theme Toggle & Auth */}
        <div className="mt-8 pt-8 border-t border-border space-y-3">
          <div className="flex items-center justify-between px-4">
            <span className="text-sm font-medium text-foreground/70">Theme</span>
            <ThemeToggle />
          </div>

          {user ? (
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10">
                <User className="w-5 h-5 text-primary" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {user.user_metadata?.name || user.email}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleSignOut}
                variant="ghost"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/80 glass-hover font-medium justify-start"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/80 glass-hover font-medium">
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
