'use client';

import { Camera, Sparkles } from 'lucide-react';

import { ImageCarousel, ImageGallery } from '@/components/ui/ImageGallery';
import { ScrollReveal } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

const galleryImages = [
  { src: '/assets/валсът падьом.jpg', alt: 'Ballet school photo 1' },
  { src: '/assets/детски танц 2 група.jpg', alt: 'Ballet school photo 2' },
  { src: '/assets/детски танц колона.jpg', alt: 'Ballet school photo 3' },
  { src: '/assets/детски танц кукли.jpg', alt: 'Ballet school photo 4' },
  { src: '/assets/детски танц падьом.jpg', alt: 'Ballet school photo 5' },
  { src: '/assets/диана фея драже.jpg', alt: 'Ballet school photo 6' },
  { src: '/assets/Ели, Лили.jpg', alt: 'Ballet school photo 7' },
  { src: '/assets/кари, пипи.jpg', alt: 'Ballet school photo 8' },
  { src: '/assets/кукли шпагат.jpg', alt: 'Ballet school photo 9' },
  { src: '/assets/кърпички 6.jpg', alt: 'Ballet school photo 10' },
  { src: '/assets/кърпички.jpg', alt: 'Ballet school photo 11' },
  { src: '/assets/малчугани лешник.jpg', alt: 'Ballet school photo 12' },
  { src: '/assets/Ники Медора.jpg', alt: 'Ballet school photo 13' },
  { src: '/assets/никол и яна.jpg', alt: 'Ballet school photo 14' },
  { src: '/assets/павилионът на армида.jpg', alt: 'Ballet school photo 15' },
  { src: '/assets/перлички 2.jpg', alt: 'Ballet school photo 16' },
  { src: '/assets/перлички поклон.jpg', alt: 'Ballet school photo 17' },
  { src: '/assets/Пипи Ели .jpg', alt: 'Ballet school photo 18' },
  { src: '/assets/пипи колона.jpg', alt: 'Ballet school photo 19' },
  { src: '/assets/Пипи Кръгче.jpg', alt: 'Ballet school photo 20' },
  { src: '/assets/пицикато 5 п..jpg', alt: 'Ballet school photo 21' },
  { src: '/assets/пицикато диди и ники.jpg', alt: 'Ballet school photo 22' },
  { src: '/assets/пицикато падьоми.jpg', alt: 'Ballet school photo 23' },
  { src: '/assets/пицикато, кроазе.jpg', alt: 'Ballet school photo 24' },
  { src: '/assets/поклон руски.jpg', alt: 'Ballet school photo 25' },
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
  const { translate } = useTranslation();

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
            {translate('gallery.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('gallery.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translate('gallery.subtitle')}
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
                {translate('gallery.featured')}
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
                {translate('gallery.photoGallery')}
              </h3>
            </div>
            <ImageGallery images={galleryImages} />
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
