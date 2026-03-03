'use client';

import { NavItem } from '@/components/layout/navbar/types';
import { useTranslation } from '@/lib/TranslationContext';

import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export const DesktopContent = ({ navItems }: { navItems: NavItem[] }) => {
  const { t, culture } = useTranslation();

  const buildHref = (href: string) => {
    if (href === '/') {
      return `/${culture}`;
    }
    return `/${culture}${href}`;
  };

  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={buildHref(item.href)}
          className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 font-medium relative group">
          <span className="text-lg">{item.icon}</span>
          <span>{t(item.label)}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
        </a>
      ))}
      <div className="ml-4 pl-4 border-l border-slate-300 dark:border-slate-600 flex items-center gap-4">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
