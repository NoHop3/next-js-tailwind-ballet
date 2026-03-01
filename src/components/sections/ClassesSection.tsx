'use client';

import { useTranslation } from '@/lib/TranslationContext';

const classes = [
  {
    name: 'Beginner Ballet',
    level: 'Beginner',
    time: 'Mon & Wed 4:00 PM',
    duration: '60 min',
    age: '6-10 years',
    color: 'from-pink-500 to-pink-600'
  },
  {
    name: 'Intermediate Ballet',
    level: 'Intermediate',
    time: 'Tue & Thu 5:30 PM',
    duration: '75 min',
    age: '11-16 years',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Advanced Ballet',
    level: 'Advanced',
    time: 'Mon & Wed 6:30 PM',
    duration: '90 min',
    age: '17+ years',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Adult Ballet',
    level: 'All Levels',
    time: 'Sat 10:00 AM',
    duration: '60 min',
    age: '18+ years',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Contemporary Fusion',
    level: 'Intermediate+',
    time: 'Fri 6:00 PM',
    duration: '75 min',
    age: '14+ years',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Private Lessons',
    level: 'Custom',
    time: 'By Appointment',
    duration: '45 min',
    age: 'All ages',
    color: 'from-indigo-500 to-indigo-600'
  },
];

export default function ClassesSection() {
  const { t } = useTranslation();

  return (
    <section className="section bg-gradient-to-b from-white to-slate-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-4">
            <span className="gradient-text">{t('classes.title', 'Our Classes')}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('classes.subtitle', 'Find the perfect class for you')}
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${classItem.color} rounded-2xl p-8 h-full text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold mb-2">{classItem.name}</h3>
                    <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold">
                      {classItem.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <span>🕐</span>
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>⏱️</span>
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👤</span>
                    <span>{classItem.age}</span>
                  </div>
                </div>

                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 rounded-lg transition-all duration-300 backdrop-blur-md border border-white/20">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
