import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-gradient-to-r from-muted via-muted-foreground/5 to-muted',
        className
      )}
    />
  );
}

// Card skeleton
export function CardSkeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6',
        className
      )}
    >
      <Skeleton className="h-14 w-14 rounded-2xl mb-4" />
      <Skeleton className="h-6 w-2/3 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}

// Section header skeleton
export function SectionHeaderSkeleton() {
  return (
    <div className="text-center mb-16">
      <Skeleton className="h-8 w-32 mx-auto rounded-full mb-4" />
      <Skeleton className="h-12 w-64 mx-auto mb-4" />
      <Skeleton className="h-6 w-96 mx-auto" />
    </div>
  );
}

// Grid skeleton
interface GridSkeletonProps {
  count?: number;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function GridSkeleton({ count = 6, columns = 3, className }: GridSkeletonProps) {
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <div className={cn(`grid gap-6 ${columnClasses[columns]}`, className)}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

// Image skeleton
interface ImageSkeletonProps extends SkeletonProps {
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
};

export function ImageSkeleton({ aspectRatio = 'square', className }: ImageSkeletonProps) {
  return (
    <Skeleton
      className={cn(
        'w-full rounded-xl',
        aspectRatioClasses[aspectRatio],
        className
      )}
    />
  );
}

// Text skeleton
interface TextSkeletonProps {
  lines?: number;
  className?: string;
}

export function TextSkeleton({ lines = 3, className }: TextSkeletonProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-4', i === lines - 1 ? 'w-3/4' : 'w-full')}
        />
      ))}
    </div>
  );
}

// Form field skeleton
export function FormFieldSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  );
}

// Contact form skeleton
export function ContactFormSkeleton() {
  return (
    <div className="space-y-6 p-8 rounded-2xl border border-border/50 bg-card/50">
      <div className="flex items-center gap-3 mb-6">
        <Skeleton className="h-12 w-12 rounded-2xl" />
        <Skeleton className="h-8 w-48" />
      </div>
      <FormFieldSkeleton />
      <FormFieldSkeleton />
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  );
}

// Gallery skeleton
export function GallerySkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <ImageSkeleton key={i} aspectRatio="square" />
      ))}
    </div>
  );
}

// Stats skeleton
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-3xl mx-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="text-center space-y-3 p-4">
          <Skeleton className="h-14 w-14 rounded-2xl mx-auto" />
          <Skeleton className="h-10 w-16 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      ))}
    </div>
  );
}
