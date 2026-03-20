'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Crown, Sparkles, Star, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

const pricingPlans = [
  {
    id: 'starter',
    nameKey: 'pricing.starter',
    descriptionKey: 'pricing.starterDesc',
    price: '19',
    icon: Star,
    gradient: 'from-pink-500 to-fuchsia-500',
    bgGradient: 'from-pink-500/5 to-fuchsia-500/5',
    featureKeys: [
      'pricing.starter.feature1',
      'pricing.starter.feature2',
      'pricing.starter.feature3',
    ],
    popular: false,
  },
  {
    id: 'professional',
    nameKey: 'pricing.professional',
    descriptionKey: 'pricing.professionalDesc',
    price: '39',
    icon: Crown,
    gradient: 'from-fuchsia-500 to-purple-500',
    bgGradient: 'from-fuchsia-500/10 to-purple-500/10',
    featureKeys: [
      'pricing.professional.feature1',
      'pricing.professional.feature2',
      'pricing.professional.feature3',
      'pricing.professional.feature4',
      'pricing.professional.feature5',
      'pricing.professional.feature6',
    ],
    popular: true,
  },
  {
    id: 'elite',
    nameKey: 'pricing.elite',
    descriptionKey: 'pricing.eliteDesc',
    price: '59',
    icon: Zap,
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-500/5 to-violet-500/5',
    featureKeys: [
      'pricing.elite.feature1',
      'pricing.elite.feature2',
      'pricing.elite.feature3',
      'pricing.elite.feature4',
      'pricing.elite.feature5',
      'pricing.elite.feature6',
      'pricing.elite.feature7',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  const { translate, culture } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Sticky depth background - creates the "going under" effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />

      {/* Parallax decorative elements */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            {translate('pricing.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('pricing.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translate('pricing.subtitle')}
          </p>
        </ScrollReveal>

        {/* Pricing cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
          staggerDelay={0.1}
        >
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            return (
              <StaggerItem key={plan.id} variants={fadeInUp}>
                <Card
                  className={`relative h-full overflow-hidden border-border/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-violet-500/10 border-primary/30 shadow-2xl shadow-pink-500/20 scale-105 z-10'
                      : `bg-gradient-to-br ${plan.bgGradient} hover:shadow-xl hover:shadow-pink-500/10`
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className={`h-1 bg-gradient-to-r ${plan.gradient}`} />
                      <div className="flex justify-center -mt-px">
                        <span
                          className={`px-4 py-1 bg-gradient-to-r ${plan.gradient} rounded-b-lg text-white text-xs font-semibold uppercase tracking-wide`}
                        >
                          {translate('pricing.mostPopular')}
                        </span>
                      </div>
                    </div>
                  )}

                  <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    {/* Plan header */}
                    <div className="text-center mb-8">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                        {translate(plan.nameKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {translate(plan.descriptionKey)}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl font-semibold text-muted-foreground">€</span>
                        <span
                          className={`text-6xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                        >
                          {plan.price}
                        </span>
                      </div>
                      <span className="text-muted-foreground">
                        /{translate('pricing.perMonth')}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.featureKeys.map((featureKey, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}
                          >
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-foreground">{translate(featureKey)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      asChild
                      className={`w-full h-12 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-pink-500/30 text-white border-0`
                          : 'bg-secondary hover:bg-secondary/80 text-foreground'
                      }`}
                    >
                      <a href={`/${culture}/contact`}>{translate('pricing.getStarted')}</a>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom note */}
        <ScrollReveal className="text-center mt-16" delay={0.4}>
          <p className="text-muted-foreground">
            {translate('pricing.bottomNote')}{' '}
            <a href="#" className="text-primary hover:underline">
              {translate('pricing.viewComparison')}
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
