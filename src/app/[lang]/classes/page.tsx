import type { Metadata } from 'next';

import ClassesSection from '@/components/sections/ClassesSection';

export const metadata: Metadata = {
  title: 'Classes',
  description:
    'Explore our ballet classes for all skill levels. From beginner ballet for children to advanced classes for adults, find the perfect class for you.',
  openGraph: {
    title: 'Classes | Ballet Studio',
    description:
      'Explore our ballet classes for all skill levels. From beginner to advanced, find the perfect class for you.',
  },
};

export default function ClassesPage() {
  return <ClassesSection />;
}
