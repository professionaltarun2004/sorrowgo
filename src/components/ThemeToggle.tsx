import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="glass-hover rounded-full w-10 h-10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-primary transition-transform duration-300 rotate-0 hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 text-primary transition-transform duration-300 rotate-0 hover:rotate-180" />
      )}
    </Button>
  );
};

export default ThemeToggle;
