'use client';

import { BookOpen, ExternalLink, Newspaper, Quote } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

const pressItems = [
  {
    id: 1,
    titleKey: 'press.article1.title',
    sourceKey: 'press.article1.source',
    excerptKey: 'press.article1.excerpt',
    dateKey: 'press.article1.date',
  },
  {
    id: 2,
    titleKey: 'press.article2.title',
    sourceKey: 'press.article2.source',
    excerptKey: 'press.article2.excerpt',
    dateKey: 'press.article2.date',
  },
  {
    id: 3,
    titleKey: 'press.article3.title',
    sourceKey: 'press.article3.source',
    excerptKey: 'press.article3.excerpt',
    dateKey: 'press.article3.date',
  },
];

export default function PressSection() {
  const { translate } = useTranslation();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
      <div className="absolute top-16 left-8 w-72 h-72 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-8 w-80 h-80 bg-gradient-to-br from-fuchsia-500/5 to-violet-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Newspaper className="w-4 h-4" />
            {translate('press.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('press.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {translate('press.subtitle')}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {pressItems.map((item) => (
            <StaggerItem key={item.id} variants={fadeInUp}>
              <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wide">
                      <BookOpen className="w-4 h-4" />
                      {translate(item.sourceKey)}
                    </div>
                    <span className="text-xs text-muted-foreground">{translate(item.dateKey)}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground leading-snug mb-3">
                    {translate(item.titleKey)}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    <Quote className="inline w-4 h-4 text-primary/70 mr-1" />
                    {translate(item.excerptKey)}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-primary font-medium">
                    <ExternalLink className="w-4 h-4" />
                    {translate('press.moreSoon')}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
