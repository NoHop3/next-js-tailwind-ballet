'use client';

import { useTranslation } from '@/lib/TranslationContext';

const features = [
  {
    icon: '👩‍🏫',
    title: 'Expert Instructors',
    description: 'Learn from professional ballet dancers with decades of experience.'
  },
  {
    icon: '🏆',
    title: 'Award Winning',
    description: 'Our studio has produced champions and performing artists.'
  },
  {
    icon: '🎭',
    title: 'Modern Techniques',
    description: 'We combine classical tradition with contemporary methods.'
  },
  {
    icon: '👥',
    title: 'Community',
    description: 'Join a supportive community of passionate dancers.'
  },
];

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="section bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-4">
            <span className="gradient-text">{t('about.title', 'About Us')}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('about.subtitle', 'Learn about our studio and instructors')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-2xl">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 font-playfair">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-slate-100 to-pink-50 rounded-2xl p-12">
          <h3 className="text-3xl font-playfair font-bold mb-6">Our Story</h3>
          <p className="text-lg text-slate-700 leading-8 mb-4">
            Founded in 2014, our ballet studio has been dedicated to nurturing the next generation of dancers. 
            We believe that ballet is not just about perfect technique — it&apos;s about expressing emotion, 
            building confidence, and creating lasting friendships.
          </p>
          <p className="text-lg text-slate-700 leading-8">
            Our instructors are passionate professionals who bring both expertise and warmth to every class. 
            We maintain a welcoming environment where dancers of all levels can grow and flourish.
          </p>
        </div>
      </div>
    </section>
  );
}
