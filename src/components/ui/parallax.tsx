'use client';

import { ReactNode, useRef } from 'react';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = moves up on scroll, positive = moves down
  direction?: 'vertical' | 'horizontal';
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  direction = 'vertical',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const x = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={direction === 'vertical' ? { y } : { x }} className={className}>
      {children}
    </motion.div>
  );
}

// Depth section - creates the "going under" illusion
interface DepthSectionProps {
  children: ReactNode;
  className?: string;
  depth?: 'shallow' | 'medium' | 'deep';
}

const depthStyles = {
  shallow: {
    shadow: 'shadow-xl',
    scale: [1, 1.02],
    opacity: [1, 0.95],
  },
  medium: {
    shadow: 'shadow-2xl',
    scale: [0.98, 1.02],
    opacity: [0.9, 1],
  },
  deep: {
    shadow: 'shadow-2xl shadow-black/20',
    scale: [0.95, 1.05],
    opacity: [0.85, 1],
  },
};

export function DepthSection({ children, className = '', depth = 'medium' }: DepthSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const config = depthStyles[depth];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [config.scale[0], 1, config.scale[1]]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [config.opacity[0], 1, 1, config.opacity[1]]
  );

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={`${className} ${config.shadow}`}>
      {children}
    </motion.div>
  );
}

// Sticky reveal section - content sticks while scrolling
interface StickyRevealProps {
  children: ReactNode;
  className?: string;
  height?: string;
}

export function StickyReveal({ children, className = '', height = '200vh' }: StickyRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} style={{ height }} className={`relative ${className}`}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
}

// Hook for using scroll progress in child components
export function useParallaxProgress(): {
  ref: React.RefObject<HTMLDivElement | null>;
  progress: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return { ref, progress: scrollYProgress };
}

// Layered parallax background
interface ParallaxLayerProps {
  children?: ReactNode;
  className?: string;
  speed?: number;
  zIndex?: number;
}

export function ParallaxLayer({
  children,
  className = '',
  speed = 0.5,
  zIndex = 0,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y, zIndex }} className={`absolute inset-0 ${className}`}>
      {children}
    </motion.div>
  );
}

// Scroll-triggered reveal with depth
interface ScrollRevealDepthProps {
  children: ReactNode;
  className?: string;
  fromBelow?: boolean;
}

export function ScrollRevealDepth({
  children,
  className = '',
  fromBelow = true,
}: ScrollRevealDepthProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const y = useTransform(scrollYProgress, [0, 1], fromBelow ? [100, 0] : [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
}
