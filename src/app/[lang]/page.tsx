import type { Metadata } from 'next';
import Script from 'next/script';

import HomeSection from '@/components/sections/HomeSection';
import PricingSection from '@/components/sections/PricingSection';
import TeamSection from '@/components/sections/TeamSection';
import VideoSection from '@/components/sections/VideoSection';
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

      {/* Hero section with sticky behavior */}
      <div className="relative z-10">
        <HomeSection />
      </div>

      {/* Video section slides over the hero */}
      <div className="relative z-20">
        <VideoSection />
      </div>

      {/* Team section with depth effect */}
      <div className="relative z-30">
        <TeamSection />
      </div>

      {/* Pricing section slides over team */}
      <div className="relative z-40">
        <PricingSection />
      </div>
    </>
  );
}
