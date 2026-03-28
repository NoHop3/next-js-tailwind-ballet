'use client';

import { Calendar, Clock, GraduationCap, Sparkles, Timer, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

const classes = [
  {
    id: 'beginner',
    nameKey: 'classes.beginner.name',
    levelKey: 'classes.beginner.level',
    timeKey: 'classes.beginner.time',
    durationKey: 'classes.beginner.duration',
    ageKey: 'classes.beginner.age',
    descriptionKey: 'classes.beginner.description',
    gradient: 'from-pink-500 via-pink-400 to-rose-400',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    icon: Sparkles,
  },
  {
    id: 'intermediate',
    nameKey: 'classes.intermediate.name',
    levelKey: 'classes.intermediate.level',
    timeKey: 'classes.intermediate.time',
    durationKey: 'classes.intermediate.duration',
    ageKey: 'classes.intermediate.age',
    descriptionKey: 'classes.intermediate.description',
    gradient: 'from-fuchsia-500 via-fuchsia-400 to-pink-400',
    bgGradient: 'from-fuchsia-500/10 to-pink-500/10',
    icon: GraduationCap,
  },
  {
    id: 'advanced',
    nameKey: 'classes.advanced.name',
    levelKey: 'classes.advanced.level',
    timeKey: 'classes.advanced.time',
    durationKey: 'classes.advanced.duration',
    ageKey: 'classes.advanced.age',
    descriptionKey: 'classes.advanced.description',
    gradient: 'from-purple-500 via-purple-400 to-fuchsia-400',
    bgGradient: 'from-purple-500/10 to-fuchsia-500/10',
    icon: GraduationCap,
  },
  {
    id: 'adult',
    nameKey: 'classes.adult.name',
    levelKey: 'classes.adult.level',
    timeKey: 'classes.adult.time',
    durationKey: 'classes.adult.duration',
    ageKey: 'classes.adult.age',
    descriptionKey: 'classes.adult.description',
    gradient: 'from-violet-500 via-violet-400 to-purple-400',
    bgGradient: 'from-violet-500/10 to-purple-500/10',
    icon: User,
  },
  {
    id: 'contemporary',
    nameKey: 'classes.contemporary.name',
    levelKey: 'classes.contemporary.level',
    timeKey: 'classes.contemporary.time',
    durationKey: 'classes.contemporary.duration',
    ageKey: 'classes.contemporary.age',
    descriptionKey: 'classes.contemporary.description',
    gradient: 'from-indigo-500 via-indigo-400 to-violet-400',
    bgGradient: 'from-indigo-500/10 to-violet-500/10',
    icon: Sparkles,
  },
  {
    id: 'private',
    nameKey: 'classes.private.name',
    levelKey: 'classes.private.level',
    timeKey: 'classes.private.time',
    durationKey: 'classes.private.duration',
    ageKey: 'classes.private.age',
    descriptionKey: 'classes.private.description',
    gradient: 'from-rose-500 via-rose-400 to-pink-400',
    bgGradient: 'from-rose-500/10 to-pink-500/10',
    icon: User,
  },
];

export default function ClassesSection() {
  const { translate } = useTranslation();

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
            {translate('classes.weeklySchedule')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('classes.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translate('classes.subtitle')}
          </p>

          <div className="mt-8 text-left max-w-4xl mx-auto rounded-2xl border border-border/60 bg-card/40 p-5 sm:p-6">
            <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
              {translate('classes.scheduleNotes')}
            </p>
          </div>
        </ScrollReveal>

        {/* Classes Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {classes.map((classItem) => {
            const Icon = classItem.icon;
            return (
              <StaggerItem key={classItem.id} variants={fadeInUp}>
                <Card
                  className={`group relative overflow-hidden border-border/50 hover:border-primary/30 bg-gradient-to-br ${classItem.bgGradient} backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2 h-full`}
                >
                  {/* Gradient bar at top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${classItem.gradient}`}
                  ></div>

                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${classItem.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                          {translate(classItem.nameKey)}
                        </h3>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${classItem.gradient} text-white`}
                        >
                          {translate(classItem.levelKey)}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{translate(classItem.timeKey)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Timer className="w-4 h-4 text-primary" />
                        <span className="text-sm">{translate(classItem.durationKey)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <User className="w-4 h-4 text-primary" />
                        <span className="text-sm">{translate(classItem.ageKey)}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 mb-6">
                      {translate(classItem.descriptionKey)}
                    </p>

                    <Button
                      variant="outline"
                      className="w-full border-primary/20 hover:border-primary hover:bg-primary/5 text-foreground group-hover:border-primary transition-colors"
                    >
                      {translate('classes.learnMore')}
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal className="mt-12">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 sm:p-6">
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
              {translate('classes.scheduleDetailsTitle')}
            </h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
              {translate('classes.weeklyProgram')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
