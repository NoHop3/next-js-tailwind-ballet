'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Instagram, Star } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  fadeInUp,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/motion';
import { useTranslation } from '@/lib/TranslationContext';

const teamMembers = [
  {
    name: 'Elena Petrova',
    role: 'Artistic Director',
    bio: '20+ years of professional experience. Former principal dancer at the National Ballet.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    instagram: '@elena_ballet',
    gradient: 'from-pink-500 to-fuchsia-500',
    achievements: ['Principal Dancer', 'Choreographer', 'Master Teacher'],
  },
  {
    name: 'Maria Ivanova',
    role: 'Senior Instructor',
    bio: 'Specializes in classical technique and pointe work. Royal Academy certified.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    instagram: '@maria_dance',
    gradient: 'from-fuchsia-500 to-purple-500',
    achievements: ['RAD Certified', 'Competition Coach', '10+ Years'],
  },
  {
    name: 'Sofia Dimitrova',
    role: 'Contemporary & Ballet',
    bio: 'Brings a fresh perspective blending classical ballet with contemporary movement.',
    image:
      'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    instagram: '@sofia_moves',
    gradient: 'from-purple-500 to-violet-500',
    achievements: ['Contemporary Fusion', 'Youth Specialist', 'Performer'],
  },
  {
    name: 'Anna Kovacs',
    role: 'Junior Ballet Instructor',
    bio: 'Patient and nurturing approach perfect for our youngest dancers aged 4-10.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    instagram: '@anna_teaches',
    gradient: 'from-violet-500 to-pink-500',
    achievements: ['Early Childhood', 'Creative Movement', 'Certified'],
  },
];

export default function TeamSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-fuchsia-500/5 to-violet-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Star className="w-4 h-4" />
            Our Instructors
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Meet the Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class instructors dedicated to nurturing your passion for
            dance
          </p>
        </ScrollReveal>

        {/* Team grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerDelay={0.1}>
          {teamMembers.map((member, index) => (
            <StaggerItem key={index} variants={fadeInUp}>
              <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2">
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
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Instagram badge */}
                    <a
                      href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white text-xs font-medium shadow-lg hover:scale-105 transition-transform">
                      <Instagram className="w-3 h-3" />
                      {member.instagram}
                    </a>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-playfair font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Achievements */}
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {member.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground">
                          <Award className="w-3 h-3 text-primary" />
                          {achievement}
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
          <p className="text-muted-foreground mb-4">
            {t(
              'team.joinCta',
              'Want to join our team of passionate instructors?',
            )}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            {t('team.getInTouch', 'Get in touch with us')}
            <span>&rarr;</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
