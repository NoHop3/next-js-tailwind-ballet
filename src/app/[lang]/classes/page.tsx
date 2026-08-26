import type { Metadata } from 'next';

import ClassesSection from '@/components/sections/ClassesSection';

export const metadata: Metadata = {
  title: 'График',
  description:
    'Разгледайте седмичния ни график. Занятия в Смолян - намерете перфектния час за вас.',
  openGraph: {
    title: 'График | Па-па-па де труа',
    description: 'Разгледайте седмичния ни график за балетни занятия в Смолян.',
  },
};

export default function ClassesPage() {
  return <ClassesSection />;
}
