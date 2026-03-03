'use client';

import { Calendar, Clock, GraduationCap, Sparkles, Timer, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  fadeInUp,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/motion';
import { useTranslation } from '@/lib/TranslationContext';

const classes = [
  {
    name: 'Beginner Ballet',
    level: 'Beginner',
    time: 'Mon & Wed 4:00 PM',
    duration: '60 min',
    age: '6-10 years',
    gradient: 'from-pink-500 via-pink-400 to-rose-400',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    icon: Sparkles,
  },
  {
    name: 'Intermediate Ballet',
    level: 'Intermediate',
    time: 'Tue & Thu 5:30 PM',
    duration: '75 min',
    age: '11-16 years',
    gradient: 'from-fuchsia-500 via-fuchsia-400 to-pink-400',
    bgGradient: 'from-fuchsia-500/10 to-pink-500/10',
    icon: GraduationCap,
  },
  {
    name: 'Advanced Ballet',
    level: 'Advanced',
    time: 'Mon & Wed 6:30 PM',
    duration: '90 min',
    age: '17+ years',
    gradient: 'from-purple-500 via-purple-400 to-fuchsia-400',
    bgGradient: 'from-purple-500/10 to-fuchsia-500/10',
    icon: GraduationCap,
  },
  {
    name: 'Adult Ballet',
    level: 'All Levels',
    time: 'Sat 10:00 AM',
    duration: '60 min',
    age: '18+ years',
    gradient: 'from-violet-500 via-violet-400 to-purple-400',
    bgGradient: 'from-violet-500/10 to-purple-500/10',
    icon: User,
  },
  {
    name: 'Contemporary Fusion',
    level: 'Intermediate+',
    time: 'Fri 6:00 PM',
    duration: '75 min',
    age: '14+ years',
    gradient: 'from-indigo-500 via-indigo-400 to-violet-400',
    bgGradient: 'from-indigo-500/10 to-violet-500/10',
    icon: Sparkles,
  },
  {
    name: 'Private Lessons',
    level: 'Custom',
    time: 'By Appointment',
    duration: '45 min',
    age: 'All ages',
    gradient: 'from-rose-500 via-rose-400 to-pink-400',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
    icon: User,
  },
];

export default function ClassesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Calendar className="w-4 h-4" />
            Weekly Schedule
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {t('classes.title', 'Our Classes')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('classes.subtitle', 'Find the perfect class for your skill level and schedule')}
          </p>
        </ScrollReveal>

        {/* Classes Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {classes.map((classItem, index) => {
            const Icon = classItem.icon;
            return (
              <StaggerItem key={index} variants={fadeInUp}>
                <Card
                  className={`group relative overflow-hidden border-border/50 hover:border-primary/30 bg-gradient-to-br ${classItem.bgGradient} backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2 h-full`}
                >
                {/* Gradient bar at top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${classItem.gradient}`}></div>

                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${classItem.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-foreground mb-2">{classItem.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${classItem.gradient} text-white`}>
                        {classItem.level}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{classItem.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Timer className="w-4 h-4 text-primary" />
                      <span className="text-sm">{classItem.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <User className="w-4 h-4 text-primary" />
                      <span className="text-sm">{classItem.age}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary/20 hover:border-primary hover:bg-primary/5 text-foreground group-hover:border-primary transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
