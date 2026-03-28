'use client';
import { useEffect, useState } from 'react';

import { CalendarDays, GraduationCap, Home, Info, Mail } from 'lucide-react';

import { DesktopContent } from '@/components/layout/navbar/DesktopContent';
import { MobileContent } from '@/components/layout/navbar/MobileContent';
import { NavItem } from '@/components/layout/navbar/types';
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
  const { translate } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(1024);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = windowWidth < 960;

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
          {/* Logo and Title */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-lg">🩰</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent font-playfair">
              {translate('main.title')}
            </h1>
          </div>

          {isMobile ? (
            <MobileContent navItems={navItems} />
          ) : (
            <DesktopContent navItems={navItems} />
          )}
        </div>
      </div>
    </nav>
  );
}
