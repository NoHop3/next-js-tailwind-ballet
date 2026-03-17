'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { Culture, useTranslation } from '@/lib/TranslationContext';

interface Language {
  code: Culture;
  flag: string;
  name: string;
  shortName: string;
}

const languages: Language[] = [
  { code: 'en-GB', flag: '🇬🇧', name: 'English', shortName: 'EN' },
  { code: 'ru-RU', flag: '🇷🇺', name: 'Русский', shortName: 'RU' },
  { code: 'uk-UA', flag: '🇺🇦', name: 'Українська', shortName: 'UA' },
  { code: 'bg-BG', flag: '🇧🇬', name: 'Български', shortName: 'BG' },
];

interface LanguageSwitcherProps {
  variant?: 'compact' | 'full';
}

export function LanguageSwitcher({ variant = 'compact' }: LanguageSwitcherProps) {
  const { culture, setCulture } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((lang) => lang.code === culture) || languages[0];

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
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setCulture(lang.code)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              culture === lang.code
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-secondary'
            }`}
            aria-pressed={culture === lang.code}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-medium">{lang.name}</span>
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
        className="flex items-center justify-center gap-1.5 h-9 px-2.5 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors duration-200"
        aria-label="Select language"
        aria-expanded={isOpen}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-base">{currentLang.flag}</span>
        <span className="text-xs font-medium hidden sm:inline">{currentLang.shortName}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 p-1.5 bg-popover border border-border rounded-xl shadow-xl z-50 min-w-[140px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCulture(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  culture === lang.code
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
