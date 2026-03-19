import type { Metadata } from 'next';

import AboutSection from '@/components/sections/AboutSection';
import GallerySection from '@/components/sections/GallerySection';

export const metadata: Metadata = {
  title: 'За нас',
  description:
    'Научете повече за балетната школа Па-па-па де труа, нашите квалифицирани преподаватели и страстта ни към класическия танц. Основана през 2023 г.',
  openGraph: {
    title: 'За нас | Па-па-па де труа',
    description: 'Научете повече за балетната школа Па-па-па де труа и нашите преподаватели.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <GallerySection showCarousel={true} showGrid={true} />
    </>
  );
}
