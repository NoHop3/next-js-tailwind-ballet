'use client';

import { Award, GraduationCap, Heart, Sparkles, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

const features = [
  {
    icon: GraduationCap,
    title: 'about.expertInstructors',
    description: 'about.expertInstructorsDesc',
    gradient: 'from-pink-500 to-fuchsia-500',
  },
  {
    icon: Award,
    title: 'about.awardWinning',
    description: 'about.awardWinningDesc',
    gradient: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Sparkles,
    title: 'about.modernTechniques',
    description: 'about.modernTechniquesDesc',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Users,
    title: 'about.supportiveCommunity',
    description: 'about.supportiveCommunityDesc',
    gradient: 'from-violet-500 to-pink-500',
  },
];

export default function AboutSection() {
  const { translate } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Heart className="w-4 h-4" />
            {translate('about.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('about.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translate('about.subtitle')}
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={index} variants={fadeInUp}>
                <Card className="group hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 font-playfair text-foreground">
                      {translate(feature.title)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {translate(feature.description)}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Story Section */}
        <ScrollReveal delay={0.2}>
          <Card className="bg-gradient-to-br from-pink-500/5 via-fuchsia-500/5 to-purple-500/5 border-primary/10 overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-playfair font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {translate('about.ourStory')}
                </h3>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground leading-8">
                <p>{translate('about.storyP1')}</p>
                <p>{translate('about.storyP2')}</p>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
