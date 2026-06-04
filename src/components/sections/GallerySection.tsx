'use client';

import { Camera, Sparkles } from 'lucide-react';

import { ImageCarousel, ImageGallery } from '@/components/ui/ImageGallery';
import { ScrollReveal } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

const galleryImages = [
  { src: '/assets/валсът падьом.jpg', alt: 'Students performing a waltz with battement tendu' },
  { src: '/assets/детски танц 2 група.jpg', alt: 'Young students in group two performing a children\'s dance' },
  { src: '/assets/детски танц колона.jpg', alt: 'Children dancing in column formation on stage' },
  { src: '/assets/детски танц кукли.jpg', alt: 'Children performing the Dolls dance in costume' },
  { src: '/assets/детски танц падьом.jpg', alt: 'Young dancers performing battement tendu in children\'s dance' },
  { src: '/assets/диана фея драже.jpg', alt: 'Diana performing as the Sugarplum Fairy' },
  { src: '/assets/Ели, Лили.jpg', alt: 'Eli and Lili performing together on stage' },
  { src: '/assets/кари, пипи.jpg', alt: 'Kari and Pipi performing a duet on stage' },
  { src: '/assets/кукли шпагат.jpg', alt: 'Dancer performing a split during the Dolls dance' },
  { src: '/assets/кърпички 6.jpg', alt: 'Six young dancers performing the Handkerchief dance' },
  { src: '/assets/кърпички.jpg', alt: 'Students performing the Handkerchief dance in costume' },
  { src: '/assets/малчугани лешник.jpg', alt: 'Young children performing in The Nutcracker' },
  { src: '/assets/Ники Медора.jpg', alt: 'Niki performing as Medora' },
  { src: '/assets/никол и яна.jpg', alt: 'Nikol and Yana performing a duet on stage' },
  { src: '/assets/павилионът на армида.jpg', alt: 'Students performing The Pavilion of Armida ballet' },
  { src: '/assets/перлички 2.jpg', alt: 'Second group of dancers performing the Pearls dance' },
  { src: '/assets/перлички поклон.jpg', alt: 'Dancers taking a bow after the Pearls dance' },
  { src: '/assets/Пипи Ели .jpg', alt: 'Pipi and Eli performing together on stage' },
  { src: '/assets/пипи колона.jpg', alt: 'Dancers in column formation during the Pipi dance' },
  { src: '/assets/Пипи Кръгче.jpg', alt: 'Dancers forming a circle during the Pipi dance' },
  { src: '/assets/пицикато 5 п..jpg', alt: 'Five dancers performing the Pizzicato piece on pointe' },
  { src: '/assets/пицикато диди и ники.jpg', alt: 'Didi and Niki performing the Pizzicato duet' },
  { src: '/assets/пицикато падьоми.jpg', alt: 'Dancers performing battements during the Pizzicato piece' },
  { src: '/assets/пицикато, кроазе.jpg', alt: 'Dancers performing croisé during the Pizzicato piece' },
  { src: '/assets/поклон руски.jpg', alt: 'Dancers performing a traditional Russian bow on stage' },
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
