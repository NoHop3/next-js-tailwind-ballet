import { NavItem } from '@/components/ui/navbar/types';
import React from 'react';

export const DesktopContent = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <div className="flex gap-8">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
};
