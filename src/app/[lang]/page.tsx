import type { Metadata } from 'next';
import Script from 'next/script';

import HomeSection from '@/components/sections/HomeSection';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Home | Ballet Studio',
  description:
    'Discover the art of classical ballet at our award-winning studio. Expert instructors, classes for all levels, and a welcoming community of passionate dancers.',
  openGraph: {
    title: 'Ballet Studio | Classical Dance Excellence',
    description:
      'Discover the art of classical ballet at our award-winning studio.',
  },
};

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <HomeSection />
    </>
  );
}
