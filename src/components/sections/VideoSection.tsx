'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

import { ScrollReveal } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

export default function VideoSection() {
  const { translate } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background"
    >
      {/* Parallax background elements */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Play className="w-4 h-4" />
            {translate('video.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('video.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translate('video.subtitle')}
          </p>
        </ScrollReveal>

        {/* Video container with parallax */}
        <motion.div
          style={{ opacity, scale }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20"
        >
          <div className="aspect-video relative bg-black">
            <iframe
              src="https://www.youtube.com/embed/WQ5pd9NlYQ0?start=10&end=98&cc_load_policy=3"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

              allowFullScreen
              title={translate('video.showcaseTitle')}
            />
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-white/20 rounded-tl-2xl pointer-events-none z-10" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-white/20 rounded-br-2xl pointer-events-none z-10" />
        </motion.div>

        {/* Video features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          {[
            {
              titleKey: 'video.professionalRecording',
              descKey: 'video.professionalRecordingDesc',
            },
            {
              titleKey: 'video.studentPerformances',
              descKey: 'video.studentPerformancesDesc',
            },
            {
              titleKey: 'video.behindScenes',
              descKey: 'video.behindScenesDesc',
            },
          ].map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors">
                <h4 className="font-semibold text-foreground mb-2">
                  {translate(feature.titleKey)}
                </h4>
                <p className="text-sm text-muted-foreground">{translate(feature.descKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
