'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';
import Image, { ImageProps } from 'next/image';

import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: React.ReactNode;
  showLoadingState?: boolean;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto';
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  auto: '',
};

export function OptimizedImage({
  className,
  fallback,
  showLoadingState = true,
  aspectRatio = 'auto',
  alt,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted rounded-lg',
          aspectRatioClasses[aspectRatio],
          className
        )}
      >
        {fallback || (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageOff className="w-8 h-8" />
            <span className="text-sm">Failed to load image</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', aspectRatioClasses[aspectRatio], className)}>
      {/* Loading skeleton */}
      {showLoadingState && isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-muted via-muted-foreground/10 to-muted animate-pulse rounded-lg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Actual image */}
      <Image
        {...props}
        alt={alt}
        className={cn(
          'transition-opacity duration-500',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

// Hero image component with blur placeholder
interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

export function HeroImage({
  src,
  alt,
  priority = true,
  className,
  overlayClassName,
  children,
}: HeroImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Loading shimmer */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-fuchsia-500/20 animate-pulse" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          'object-cover transition-all duration-700',
          isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'
        )}
        onLoad={() => setIsLoading(false)}
      />

      {/* Gradient overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent',
          overlayClassName
        )}
      />

      {/* Content overlay */}
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

// Avatar/profile image component
interface AvatarImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

const sizePx = {
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
};

export function AvatarImage({ src, alt, size = 'md', className }: AvatarImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          'rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-semibold',
          sizeClasses[size],
          className
        )}
      >
        {alt.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <div className={cn('relative rounded-full overflow-hidden', sizeClasses[size], className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        width={sizePx[size]}
        height={sizePx[size]}
        className={cn(
          'object-cover transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
