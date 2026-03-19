import type { Metadata } from 'next';

import EventsSection from '@/components/sections/EventsSection';

export const metadata: Metadata = {
  title: 'Събития',
  description:
    'Открийте предстоящи спектакли, концерти, работилници и специални събития в балетна школа Па-па-па де труа.',
  openGraph: {
    title: 'Събития | Па-па-па де труа',
    description: 'Открийте предстоящи спектакли и събития в балетна школа Па-па-па де труа.',
  },
};

export default function EventsPage() {
  return <EventsSection />;
}
