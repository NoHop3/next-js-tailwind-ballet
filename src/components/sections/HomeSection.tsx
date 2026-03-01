'use client';

import { useTranslation } from '@/lib/TranslationContext';

export default function HomeSection() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Badge */}
          <div className="inline-block">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold">
              ✨ Welcome to Excellence in Dance
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl font-playfair font-bold leading-tight">
            <span className="bg-gradient-to-r from-pink-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              Dance with Grace
            </span>
            <br />
            <span className="text-white">Master the Art</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('home.subtitle', 'Discover the art of classical ballet')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href="/classes" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 hover:-translate-y-1 active:scale-95">
              Explore Classes
            </a>
            <a href="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300">
              Get Started
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-400">15+</div>
              <div className="text-sm text-slate-400">Classes</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-400">50+</div>
              <div className="text-sm text-slate-400">Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-400">10+</div>
              <div className="text-sm text-slate-400">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white/50 text-center">
          <div className="text-sm mb-2">Scroll to explore</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

