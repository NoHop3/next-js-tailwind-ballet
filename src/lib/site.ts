/**
 * Canonical origin for absolute metadata URLs. Set NEXT_PUBLIC_SITE_URL in the
 * deployment to override; the fallback must stay the real production domain or
 * social scrapers resolve og:image against a host we do not control.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://papapasdetrois.com';

/**
 * Every page re-declares `openGraph`, and Next replaces the parent object rather
 * than merging it — so the image has to be spread into each one explicitly.
 */
export const ogImages = [
  {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Балетна школа Па-па-па де труа | Смолян',
  },
];
