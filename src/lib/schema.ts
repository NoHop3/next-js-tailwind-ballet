import type { Organization, LocalBusiness, WithContext } from 'schema-dts';

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ballet Studio',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://balletstudio.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://balletstudio.com'}/logo.png`,
    sameAs: [
      'https://instagram.com/balletstudio',
      'https://twitter.com/balletstudio',
      'https://youtube.com/balletstudio',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@balletstudio.com',
    },
  };
}

export function generateLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': process.env.NEXT_PUBLIC_SITE_URL || 'https://balletstudio.com',
    name: 'Ballet Studio',
    description: 'Award-winning ballet studio offering classical dance classes for all levels',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://balletstudio.com',
    telephone: '+1-555-123-4567',
    email: 'info@balletstudio.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Dance Street',
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://balletstudio.com'}/og-image.jpg`,
  };
}
