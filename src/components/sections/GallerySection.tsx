'use client';

import { Camera, Sparkles } from 'lucide-react';

import { ImageCarousel, ImageGallery } from '@/components/ui/ImageGallery';
import { ScrollReveal } from '@/components/ui/motion';

// Sample gallery images using Unsplash - replace with actual images in production
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=800&fit=crop',
    alt: 'Ballet dancer performing arabesque',
    title: 'Elegant Arabesque',
  },
  {
    src: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=800&fit=crop',
    alt: 'Ballet class in progress',
    title: 'Group Class Session',
  },
  {
    src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=800&fit=crop',
    alt: 'Young dancers practicing',
    title: 'Junior Ballet',
  },
  {
    src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&h=800&fit=crop',
    alt: 'Dance studio interior',
    title: 'Our Studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=800&fit=crop',
    alt: 'Performance on stage',
    title: 'Annual Recital',
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=800&fit=crop',
    alt: 'Ballet shoes close-up',
    title: 'The Art of Dance',
  },
  {
    src: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&h=800&fit=crop',
    alt: 'Dancer stretching',
    title: 'Flexibility Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=800&h=800&fit=crop',
    alt: 'Dance performance',
    title: 'Artistic Expression',
  },
];

const featuredImages = galleryImages.slice(0, 4);

interface GallerySectionProps {
  showCarousel?: boolean;
  showGrid?: boolean;
}

export default function GallerySection({
  showCarousel = true,
  showGrid = true,
}: GallerySectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Camera className="w-4 h-4" />
            Our Gallery
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Moments of Grace
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing the beauty and elegance of ballet at our studio
          </p>
        </ScrollReveal>

        {/* Featured Carousel */}
        {showCarousel && (
          <ScrollReveal className="mb-16" delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-foreground">
                Featured Moments
              </h3>
            </div>
            <ImageCarousel images={featuredImages} />
          </ScrollReveal>
        )}

        {/* Full Gallery Grid */}
        {showGrid && (
          <ScrollReveal delay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-foreground">
                Photo Gallery
              </h3>
            </div>
            <ImageGallery images={galleryImages} />
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
