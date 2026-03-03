import type { Metadata } from 'next';

import AboutSection from '@/components/sections/AboutSection';
import GallerySection from '@/components/sections/GallerySection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about our ballet studio, our expert instructors, and our passion for classical dance. Founded in 2014, we have been nurturing dancers of all levels.',
  openGraph: {
    title: 'About Us | Ballet Studio',
    description:
      'Learn about our ballet studio, our expert instructors, and our passion for classical dance.',
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
