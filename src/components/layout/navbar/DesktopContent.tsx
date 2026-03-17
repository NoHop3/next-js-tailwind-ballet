'use client';

import { NavItem } from '@/components/layout/navbar/types';

import { useTranslation } from '@/lib/TranslationContext';

import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export const DesktopContent = ({ navItems }: { navItems: NavItem[] }) => {
  const { translate, culture } = useTranslation();

  const buildHref = (href: string) => {
    if (href === '/') {
      return `/${culture}`;
    }
    return `/${culture}${href}`;
  };

  return (
    <div className="flex items-center gap-2">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={buildHref(item.href)}
          className="group flex items-center gap-2 px-4 py-2 rounded-xl text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all duration-300 font-medium"
        >
          <span className="text-primary/70 group-hover:text-primary transition-colors">
            {item.icon}
          </span>
          <span>{translate(item.label)}</span>
        </a>
      ))}
      <div className="ml-4 pl-4 border-l border-border flex items-center gap-3">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
