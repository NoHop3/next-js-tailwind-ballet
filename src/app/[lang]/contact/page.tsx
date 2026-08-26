import type { Metadata } from 'next';

import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Контакти',
  description:
    'Свържете се с балетна школа Па-па-па де труа. Пишете ни на имейл, обадете се или посетете студията ни в Смолян.',
  openGraph: {
    title: 'Контакти | Па-па-па де труа',
    description: 'Свържете се с балетна школа Па-па-па де труа в Смолян.',
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
