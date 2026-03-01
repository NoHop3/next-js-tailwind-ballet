'use client';
import { useEffect, useState } from 'react';

import { DesktopContent } from '@/components/layout/navbar/DesktopContent';
import { MobileContent } from '@/components/layout/navbar/MobileContent';
import { NavItem } from '@/components/layout/navbar/types';


const navItems: NavItem[] = [
  { id: 'home', label: 'nav.home', icon: '🏠', href: '/' },
  { id: 'classes', label: 'nav.classes', icon: '💃', href: '/classes' },
  { id: 'about', label: 'nav.about', icon: 'ℹ️', href: '/about' },
  { id: 'contact', label: 'nav.contact', icon: '✉️', href: '/contact' },
];

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handler = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const isMobile = windowWidth < 960;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="text-2xl group-hover:scale-110 transition-transform duration-300">🩰</div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent font-playfair">
              Ballet Studio
            </h1>
          </div>

          {isMobile ? <MobileContent navItems={navItems} /> : <DesktopContent navItems={navItems} />}
          </div>
      </div>
    </nav>
  );
}
