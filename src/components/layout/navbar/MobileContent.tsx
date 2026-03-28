'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import { Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';

import { NavItem } from '@/components/layout/navbar/types';

import { useTranslation } from '@/lib/TranslationContext';

import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export const MobileContent = ({ navItems }: { navItems: NavItem[] }) => {
  const { translate, culture } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  // 🔥 Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const closeDrawer = () => setIsOpen(false);

  const buildHref = (href: string) => {
    if (href === '/') return `/${culture}`;
    return `/${culture}${href}`;
  };

  return (
    <>
      {/* Burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 rounded-xl flex items-center justify-center text-foreground hover:bg-primary/10 transition-all duration-300"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {mounted &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              onClick={closeDrawer}
              className={`fixed inset-0 z-[999] transition-all duration-300 ${
                isOpen
                  ? 'bg-black/80 backdrop-blur-md opacity-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            />

            {/* Drawer */}
            <div
              className={`fixed top-0 right-0 h-[100dvh] w-80 sm:w-96 z-[1000]
                transform transition-transform duration-300 ease-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                
                bg-background shadow-[0_0_40px_rgba(0,0,0,0.6)]
                border-l border-border
                
                flex flex-col`}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-5 border-b border-border shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white">🩰</span>
                  </div>
                  <h2 className="text-lg font-semibold">{translate('nav.menu')}</h2>
                </div>

                <button onClick={closeDrawer}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 min-h-0 flex flex-col justify-between px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                {/* Nav */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={buildHref(item.href)}
                      onClick={closeDrawer}
                      className="flex items-center gap-4 px-4 py-4 rounded-xl 
                                 text-foreground hover:text-primary 
                                 hover:bg-primary/10 transition-all"
                    >
                      <span>{item.icon}</span>
                      <span>{translate(item.label)}</span>
                    </a>
                  ))}
                </nav>

                {/* Bottom */}
                <div className="border-t border-border pt-4 space-y-4">
                  <div>
                    <div className="text-xs mb-2">{translate('nav.theme')}</div>
                    <ThemeToggle variant="full" />
                  </div>

                  <div>
                    <div className="text-xs mb-2">{translate('nav.language')}</div>
                    <LanguageSwitcher variant="full" />
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};
