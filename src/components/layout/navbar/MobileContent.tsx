'use client';

import { useState } from 'react';

import { NavItem } from '@/components/layout/navbar/types';
import { useTranslation } from '@/lib/TranslationContext';

import { LanguageSwitcher } from './LanguageSwitcher';

export const MobileContent = ({ navItems }: { navItems: NavItem[] }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {/* Burger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}>
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-800 shadow-xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white font-playfair">Menu</h2>
          <button
            onClick={closeDrawer}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
            aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeDrawer}
                className="flex items-center gap-3 px-6 py-4 text-slate-700 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-700 hover:text-pink-600 dark:hover:text-pink-400 transition-colors border-b border-slate-200 dark:border-slate-700 font-medium">
                <span className="text-xl">{item.icon}</span>
                <span>{t(item.label)}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Language Switcher at Bottom */}
        <div className="border-t border-slate-200 dark:border-slate-700 p-6">
          <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Language</div>
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
};
