'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';
import { getWeeklySchedule } from '@/lib/schedule';

const gradients = [
  'from-pink-500 via-pink-400 to-rose-400',
  'from-purple-500 via-purple-400 to-fuchsia-400',
  'from-indigo-500 via-indigo-400 to-violet-400',
  'from-rose-500 via-rose-400 to-pink-400',
];

const bgGradients = [
  'from-pink-500/10 to-rose-500/10',
  'from-purple-500/10 to-fuchsia-500/10',
  'from-indigo-500/10 to-violet-500/10',
  'from-rose-500/10 to-pink-500/10',
];

export default function ClassesSection() {
  const { translate, culture } = useTranslation();
  const weeklyProgramByDay = getWeeklySchedule(culture);

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

        {/* Day Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.08}
        >
          {weeklyProgramByDay.map((item, index) => (
            <StaggerItem key={item.day} variants={fadeInUp}>
              <Card
                className={`group relative overflow-hidden border-border/50 hover:border-primary/30 bg-gradient-to-br ${bgGradients[index % bgGradients.length]} backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2 h-full`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index % gradients.length]}`}
                />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-foreground">{item.day}</h3>
                  </div>

                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {item.location}
                  </p>

                  {/* Each time slot as its own pill so the hours stand out */}
                  <ul className="flex flex-col gap-2.5">
                    {item.slots.map((slot) => (
                      <li
                        key={`${slot.time}-${slot.group}`}
                        className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-border/50 bg-background/60 px-4 py-2.5 backdrop-blur-sm"
                      >
                        <span className="inline-flex items-center gap-1.5 font-semibold tabular-nums text-foreground">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {slot.time}
                        </span>
                        <span
                          className={`rounded-full bg-gradient-to-r ${gradients[index % gradients.length]} px-3 py-0.5 text-xs font-medium text-white shadow-sm`}
                        >
                          {slot.group}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {item.note && (
                    <p className="mt-4 text-sm italic text-muted-foreground">{item.note}</p>
                  )}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
