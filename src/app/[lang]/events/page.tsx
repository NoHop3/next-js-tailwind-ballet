import type { Metadata } from 'next';

import EventsSection from '@/components/sections/EventsSection';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Discover upcoming performances, recitals, workshops, and special events at our ballet studio. Join us for inspiring dance experiences.',
  openGraph: {
    title: 'Events | Ballet Studio',
    description:
      'Discover upcoming performances, recitals, workshops, and special events at our ballet studio.',
  },
};

export default function EventsPage() {
  return <EventsSection />;
}
