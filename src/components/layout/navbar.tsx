'use client';
import { useState } from 'react';

import { DesktopContent } from '@/components/layout/navbar/desktop-content';
import { MobileContent } from '@/components/layout/navbar/mobile-content';
import { NavItem } from '@/components/layout/navbar/types';


const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: '🏠', href: '/' },
  { id: 'classes', label: 'Classes', icon: '💃', href: '/classes' },
  { id: 'about', label: 'About', icon: 'ℹ️', href: '/about' },
  { id: 'contact', label: 'Contact', icon: '✉️', href: '/contact' },
];

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(1024);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }

  const isMobile = windowWidth < 960;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="text-2xl">🩰</div>
            <h1 className="text-xl font-bold text-gray-800">Ballet Studio</h1>
          </div>

          {isMobile ? <DesktopContent navItems={navItems} /> : <MobileContent navItems={navItems} />}
          </div>
      </div>
    </nav>
  );
}
