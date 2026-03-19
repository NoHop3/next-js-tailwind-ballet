import type { Metadata } from 'next';

import ClassesSection from '@/components/sections/ClassesSection';

export const metadata: Metadata = {
  title: 'Класове',
  description:
    'Разгледайте нашите балетни класове за всички нива. От балет за начинаещи деца до класове за възрастни - намерете перфектния клас за вас.',
  openGraph: {
    title: 'Класове | Па-па-па де труа',
    description: 'Разгледайте нашите балетни класове за всички нива в Смолян и Чепеларе.',
  },
};

export default function ClassesPage() {
  return <ClassesSection />;
}
