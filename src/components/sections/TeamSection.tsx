'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Instagram, Star, X } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';

const teamMembers = [
  {
    name: 'team.name1',
    role: 'team.role1',
    bio: 'team.bio1',
    image: '/assets/bori.jpg',
    instagram: '@borimira.dyakonova',
    gradient: 'from-pink-500 to-fuchsia-500',
    achievements: [
      'team.achievement.principalDancer',
      'team.achievement.choreographer',
      'team.achievement.masterTeacher',
    ],
  },
  {
    name: 'team.name2',
    role: 'team.role2',
    bio: 'team.bio2',
    image: '/assets/elica.jpg',
    instagram: '@elitza.kalova',
    gradient: 'from-fuchsia-500 to-purple-500',
    achievements: [
      'team.achievement.radCertified',
      'team.achievement.competitionCoach',
      'team.achievement.yearsOfExperience',
    ],
  },
  {
    name: 'team.name3',
    role: 'team.role3',
    bio: 'team.bio3',
    image: '/assets/vesa.jpg',
    instagram: '@vesa.tonova',
    gradient: 'from-purple-500 to-violet-500',
    achievements: [
      'team.achievement.contemporaryFusion',
      'team.achievement.youthSpecialist',
      'team.achievement.performer',
    ],
  },
];

export default function TeamSection() {
  const { translate } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/20"
    >
      {/* Parallax background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-fuchsia-500/5 to-violet-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Star className="w-4 h-4" />
            {translate('team.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('team.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translate('team.subtitle')}
          </p>
        </ScrollReveal>

        {/* Team grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {teamMembers.map((member, index) => (
            <StaggerItem key={index} variants={fadeInUp}>
              <Card
                onClick={() => setSelectedMember(index)}
                className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${member.gradient}`} />

                <CardContent className="p-6">
                  {/* Profile image */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                    />
                    <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
                      <Image
                        src={member.image}
                        alt={translate(member.name)}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Instagram badge */}
                    <a
                      href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white text-xs font-medium shadow-lg hover:scale-105 transition-transform"
                    >
                      <Instagram className="w-3 h-3" />
                      {member.instagram}
                    </a>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-playfair font-bold text-foreground">
                      {translate(member.name)}
                    </h3>
                    <p
                      className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                    >
                      {translate(member.role)}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {translate(member.bio)}
                    </p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMember(index);
                      }}
                      className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                      {translate('team.readMore')}
                    </button>

                    {/* Achievements */}
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {member.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground"
                        >
                          <Award className="w-3 h-3 text-primary" />
                          {translate(achievement)}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-16" delay={0.4}>
          <p className="text-muted-foreground mb-4">{translate('team.joinCta')}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            {translate('team.getInTouch')}
            <span>&rarr;</span>
          </a>
        </ScrollReveal>

        {/* Team Member Detail Modal */}
        {selectedMember !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-[60] flex items-stretch lg:items-center justify-center bg-black/50 backdrop-blur-sm p-0 lg:p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-screen h-screen lg:w-full lg:max-w-2xl lg:max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl rounded-none lg:rounded-2xl shadow-2xl border-0 lg:border border-border/50 cursor-default"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-4 z-20 p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${teamMembers[selectedMember].gradient}`} />

              <div className="p-6 sm:p-8">
                {/* Header with image and basic info */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-border/50 shadow-lg">
                      <Image
                        src={teamMembers[selectedMember].image}
                        alt={translate(teamMembers[selectedMember].name)}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl font-playfair font-bold mb-2 text-foreground">
                      {translate(teamMembers[selectedMember].name)}
                    </h2>
                    <p
                      className={`text-lg font-semibold bg-gradient-to-r ${teamMembers[selectedMember].gradient} bg-clip-text text-transparent mb-4`}
                    >
                      {translate(teamMembers[selectedMember].role)}
                    </p>
                    <a
                      href={`https://instagram.com/${teamMembers[selectedMember].instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white text-sm font-medium hover:scale-105 transition-transform"
                    >
                      <Instagram className="w-4 h-4" />
                      {teamMembers[selectedMember].instagram}
                    </a>
                  </div>
                </div>

                {/* Full bio */}
                <div className="mb-8 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {translate('team.biography')}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                    {translate(teamMembers[selectedMember].bio)}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {translate('team.achievements')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[selectedMember].achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/50 hover:bg-secondary rounded-full text-sm text-foreground transition-colors"
                      >
                        <Award className="w-4 h-4 text-primary" />
                        {translate(achievement)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
