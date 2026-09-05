import type { Metadata } from 'next';

import ClassesSection from '@/components/sections/ClassesSection';

import { ogImages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'График',
  description:
    'Разгледайте седмичния ни график. Занятия в Смолян - намерете перфектния час за вас.',
  openGraph: {
    title: 'График | Па-па-па де труа',
    description: 'Разгледайте седмичния ни график за балетни занятия в Смолян.',
    images: ogImages,
  },
};

export default function ClassesPage() {
  return <ClassesSection />;
}
