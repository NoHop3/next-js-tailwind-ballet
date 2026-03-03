'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { NavItem } from '@/components/layout/navbar/types';
import { useTranslation } from '@/lib/TranslationContext';

import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export const MobileContent = ({ navItems }: { navItems: NavItem[] }) => {
  const { t, culture } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  const buildHref = (href: string) => {
    if (href === '/') {
      return `/${culture}`;
    }
    return `/${culture}${href}`;
  };

  return (
    <>
      {/* Burger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 rounded-xl flex items-center justify-center text-foreground hover:bg-primary/10 transition-all duration-300"
        aria-label="Toggle menu"
        aria-expanded={isOpen}>
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-card/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 z-50 transform transition-transform duration-300 ease-out flex flex-col border-l border-border/50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 flex items-center justify-center shadow-lg">
              <span className="text-white">🩰</span>
            </div>
            <h2 className="text-lg font-semibold font-playfair bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Menu</h2>
          </div>
          <button
            onClick={closeDrawer}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
            aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="flex flex-col px-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={buildHref(item.href)}
                onClick={closeDrawer}
                className="flex items-center gap-4 px-4 py-4 rounded-xl text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-all duration-300 font-medium">
                <span className="text-primary">{item.icon}</span>
                <span>{t(item.label)}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Settings at Bottom */}
        <div className="border-t border-border/50 p-6 space-y-6">
          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Theme</div>
            <ThemeToggle variant="full" />
          </div>
          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Language</div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};
