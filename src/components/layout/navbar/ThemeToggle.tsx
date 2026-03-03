'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Monitor, Moon, Sun } from 'lucide-react';

import { Theme, useTheme } from '@/lib/ThemeContext';

interface ThemeOption {
  value: Theme;
  icon: React.ReactNode;
  label: string;
}

const themeOptions: ThemeOption[] = [
    { value: 'light', icon: <Sun className="w-4 h-4" />, label: 'Light' },
    { value: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Dark' },
    { value: 'system', icon: <Monitor className="w-4 h-4" />, label: 'System' },
];

interface ThemeToggleProps {
  variant?: 'compact' | 'full';
}

export function ThemeToggle({ variant = 'compact' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentOption = themeOptions.find((opt) => opt.value === theme) || themeOptions[0];

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on Escape
    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') setIsOpen(false);
        }
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

  if (variant === 'full') {
    return (
      <div className="flex flex-col gap-2">
        {themeOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              theme === option.value
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-secondary'
            }`}
            aria-pressed={theme === option.value}
          >
            {option.icon}
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    );
  }

    // Compact expandable variant
  return (
      <div ref={containerRef} className="relative">
          <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors duration-200"
              aria-label="Toggle theme"
              aria-expanded={isOpen}
              whileTap={{ scale: 0.95 }}
          >
              {currentOption.icon}
          </motion.button>

          <AnimatePresence>
              {isOpen && (
                  <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-2 p-1.5 bg-popover border border-border rounded-xl shadow-xl z-50 min-w-[120px]"
                  >
                      {themeOptions.map((option) => (
                          <button
                              key={option.value}
                    onClick={() => {
                        setTheme(option.value);
                        setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${theme === option.value
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                >
                    {option.icon}
                    <span>{option.label}</span>
                </button>
            ))}
                  </motion.div>
              )}
          </AnimatePresence>
    </div>
  );
}
