'use client';

import { ArrowDown, ChevronRight, Sparkles, Star, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  StaggerContainer,
  StaggerItem,
  fadeIn,
  fadeInUp,
  motion,
  scaleIn,
} from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

export default function HomeSection() {
  const { translate, culture } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-fuchsia-900 to-purple-900 text-white relative">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/40 to-purple-500/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-fuchsia-500/30 to-violet-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-rose-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Hero Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-medium shadow-lg shadow-purple-500/10"
          >
            <Sparkles className="w-4 h-4 text-pink-300" />
            <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              {translate('home.badge')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-playfair font-bold leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-pink-200 via-fuchsia-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
              {translate('home.heroTitle1')}
            </span>
            <br />
            <span className="text-white/90 text-4xl sm:text-5xl lg:text-6xl">
              {translate('home.heroTitle2')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-purple-100/80 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {translate('home.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 hover:from-pink-600 hover:via-fuchsia-600 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-1 border-0"
            >
              <a href={`/${culture}/classes`}>
                {translate('home.exploreClasses')}
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              <a href={`/${culture}/contact`}>{translate('home.getStarted')}</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <StaggerContainer
            className="grid grid-cols-3 gap-6 sm:gap-12 pt-16 max-w-3xl mx-auto"
            delay={1}
            staggerDelay={0.15}
          >
            <StaggerItem
              variants={scaleIn}
              className="group text-center space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/20 mb-2 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-pink-300" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-sm text-purple-200/70 font-medium">
                {translate('home.classesWeekly')}
              </div>
            </StaggerItem>
            <StaggerItem
              variants={scaleIn}
              className="group text-center space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/20 mb-2 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-fuchsia-300" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-purple-200/70 font-medium">
                {translate('home.happyStudents')}
              </div>
            </StaggerItem>
            <StaggerItem
              variants={scaleIn}
              className="group text-center space-y-3 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-400/20 mb-2 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-purple-300" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm text-purple-200/70 font-medium">
                {translate('home.yearsExcellence')}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Scroll indicator - positioned with higher z-index to stay above other sections */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ zIndex: 100 }}
      >
        <div className="flex flex-col items-center gap-2 text-purple-200/50">
          <span className="text-sm font-medium">{translate('home.scrollToExplore')}</span>
          <div className="w-10 h-10 rounded-full border border-purple-300/30 flex items-center justify-center bg-purple-950/80 backdrop-blur-sm shadow-lg">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
