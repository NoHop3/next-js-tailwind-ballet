'use client';
import { useEffect, useState } from 'react';

import { CalendarDays, GraduationCap, Home, Info, Mail } from 'lucide-react';

import { DesktopContent } from '@/components/layout/navbar/DesktopContent';
import { MobileContent } from '@/components/layout/navbar/MobileContent';
import { NavItem } from '@/components/layout/navbar/types';
import { Logo } from '@/components/ui/Logo';
import { useTranslation } from '@/lib/TranslationContext';

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'nav.home',
    icon: <Home className="w-4 h-4" />,
    href: '/',
  },
  {
    id: 'classes',
    label: 'nav.classes',
    icon: <GraduationCap className="w-4 h-4" />,
    href: '/classes',
  },
  {
    id: 'events',
    label: 'nav.events',
    icon: <CalendarDays className="w-4 h-4" />,
    href: '/events',
  },
  {
    id: 'about',
    label: 'nav.about',
    icon: <Info className="w-4 h-4" />,
    href: '/about',
  },
  {
    id: 'contact',
    label: 'nav.contact',
    icon: <Mail className="w-4 h-4" />,
    href: '/contact',
  },
];

export default function Navbar() {
  const { translate, culture } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-lg shadow-pink-500/5'
          : 'backdrop-blur-md bg-background/60 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href={`/${culture}`}
            className="group flex items-center transition-opacity duration-300 hover:opacity-80"
          >
            <Logo
              variant="wordmark"
              priority
              alt={translate('main.title')}
              className="h-10 w-auto sm:h-12"
            />
          </a>

          <div className="lg:hidden">
            <MobileContent navItems={navItems} />
          </div>
          <div className="hidden lg:block">
            <DesktopContent navItems={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
