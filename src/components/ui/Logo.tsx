import Image from 'next/image';

type LogoVariant = 'wordmark' | 'full';

const sources: Record<LogoVariant, { light: string; dark: string; width: number; height: number }> =
  {
    // Short horizontal lockup — fits tight rows like the navbar.
    wordmark: {
      light: '/assets/logo-wordmark.png',
      dark: '/assets/logo-wordmark-light.png',
      width: 758,
      height: 172,
    },
    // Full crest with the three ballerinas.
    full: {
      light: '/assets/logo-full.png',
      dark: '/assets/logo-full-light.png',
      width: 864,
      height: 640,
    },
  };

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
  alt?: string;
}

/**
 * The artwork is dark ink on transparency, so the dark theme gets a light-ink
 * copy rather than a CSS filter — filters wash out the thin line work.
 */
export function Logo({
  variant = 'wordmark',
  className = '',
  priority = false,
  alt = 'па-па-... pas de trois',
}: LogoProps) {
  const { light, dark, width, height } = sources[variant];

  return (
    <>
      <Image
        src={light}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`${className} dark:hidden`}
      />
      <Image
        src={dark}
        alt=""
        aria-hidden
        width={width}
        height={height}
        priority={priority}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
