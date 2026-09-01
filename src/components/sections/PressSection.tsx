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
    url: 'https://www.etv.bg/news/reportage/219411/edinstvenata-baletna-skola-v-smolian-shhe-predstavi-spektakiela-razxodka-v-rodopa-s-arfa-i-balet',
  },
  {
    id: 2,
    titleKey: 'press.article2.title',
    sourceKey: 'press.article2.source',
    excerptKey: 'press.article2.excerpt',
    dateKey: 'press.article2.date',
    url: 'https://www.smolyaninfo.com/2023/09/14/baletna-shkola-otvarya-vrati-v-smolyan/',
  },
  {
    id: 3,
    titleKey: 'press.article3.title',
    sourceKey: 'press.article3.source',
    excerptKey: 'press.article3.excerpt',
    dateKey: 'press.article3.date',
    url: 'https://www.haskovo.net/news/619407/primabalerinata-vesa-tonova-shte-gostuva-v-edinstvenata-detska-baletna-shkola-v-smolyan',
  },
  {
    id: 4,
    titleKey: 'press.article4.title',
    sourceKey: 'press.article4.source',
    excerptKey: 'press.article4.excerpt',
    dateKey: 'press.article4.date',
    url: 'https://www.marica.bg/region/smolqn/rodopite-pregrashtat-baleta-ot-zvuka-na-kaba-gaydata-do-stapkite-na-palci-snimki/amp',
  },
  {
    id: 5,
    titleKey: 'press.article5.title',
    sourceKey: 'press.article5.source',
    excerptKey: 'press.article5.excerpt',
    dateKey: 'press.article5.date',
    url: 'https://otzvuk.bg/vazhisthenie-i-priznanie-poluchi-shkolata-po-balet-na-borimira-dyakonova-v-smolyan/?amp=1',
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
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wide">
                        <BookOpen className="w-4 h-4" />
                        {translate(item.sourceKey)}
                      </div>
                      <span className="text-xs text-muted-foreground">{translate(item.dateKey)}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground leading-snug mb-3 flex-1">
                      {translate(item.excerptKey) ? (
                        <>
                          {translate(item.titleKey)}
                          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                            <Quote className="inline w-4 h-4 text-primary/70 mr-1" />
                            {translate(item.excerptKey)}
                          </p>
                        </>
                      ) : (
                        translate(item.titleKey)
                      )}
                    </h3>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm text-primary font-medium">
                      <ExternalLink className="w-4 h-4" />
                      {translate('press.readArticle')}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
