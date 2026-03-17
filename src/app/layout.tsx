import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/providers/ThemeProvider';

import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://balletstudio.com';

export const metadata: Metadata = {
  title: {
    default: 'Ballet Studio | Classical Dance Excellence',
    template: '%s | Ballet Studio',
  },
  description:
    'Discover the art of classical ballet at our award-winning studio. Expert instructors, classes for all levels, and a welcoming community of passionate dancers.',
  keywords: [
    'ballet',
    'dance',
    'ballet classes',
    'dance studio',
    'classical ballet',
    'ballet lessons',
    'dance school',
  ],
  authors: [{ name: 'Ballet Studio' }],
  creator: 'Ballet Studio',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Ballet Studio',
    title: 'Ballet Studio | Classical Dance Excellence',
    description:
      'Discover the art of classical ballet at our award-winning studio. Expert instructors, classes for all levels, and a welcoming community.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ballet Studio - Classical Dance Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ballet Studio | Classical Dance Excellence',
    description: 'Discover the art of classical ballet at our award-winning studio.',
    images: ['/og-image.jpg'],
    creator: '@balletstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 flex flex-col min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
