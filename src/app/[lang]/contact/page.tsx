import type { Metadata } from 'next';

import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ballet Studio. Contact us via email, phone, or visit our studio. We are here to answer your questions about our classes.',
  openGraph: {
    title: 'Contact Us | Ballet Studio',
    description:
      'Get in touch with Ballet Studio. Contact us via email, phone, or visit our studio.',
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
