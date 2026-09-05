import { siteUrl } from './site';

import type { LocalBusiness, Organization, WithContext } from 'schema-dts';

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Балетна школа Па-па-па де труа',
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    sameAs: [
      'https://www.facebook.com/share/1C4afyqUTQ/',
      'https://www.instagram.com/papapasdetrois?igsh=MW5hejVjbndtcnR4dg==&igsi=MW5hejVjbndtcnR4dg==',
      'https://youtube.com/@borimiradyakonova1290?si=CVUSKMdcTPOgJw8v',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+359876389077',
      contactType: 'customer service',
      email: 'papapasdetrois@gmail.com',
    },
  };
}

export function generateLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteUrl,
    name: 'Балетна школа Па-па-па де труа',
    description:
      'Балетна школа в Смолян, предлагаща класически балет за деца и възрастни на всички нива.',
    url: siteUrl,
    telephone: '+359876389077',
    email: 'papapasdetrois@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ЖК Нов център, бул. България 6',
      addressLocality: 'Смолян',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.5771,
      longitude: 24.7107,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    image: `${siteUrl}/icon-512.png`,
  };
}
