'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    const isDark = resolvedTheme === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Get button position for the animation origin
    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      document.documentElement.style.setProperty('--transition-x', `${x}px`);
      document.documentElement.style.setProperty('--transition-y', `${y}px`);
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
      className="absolute right-3 top-3 z-50"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
