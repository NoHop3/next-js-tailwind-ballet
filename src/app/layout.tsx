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
    default: 'Балетна школа Па-па-па де труа | Смолян',
    template: '%s | Па-па-па де труа',
  },
  description:
    'Преоткрийте изкуството на класическия балет в нашата школа. Квалифицирани преподаватели, класове за всички нива и приветлива общност от страстни танцьори.',
  keywords: [
    'балет',
    'танц',
    'балетни класове',
    'танцово студио',
    'класически балет',
    'балетни уроци',
    'танцова школа',
    'Смолян',
    'Чепеларе',
    'ballet',
    'dance',
  ],
  authors: [{ name: 'Па-па-па де труа' }],
  creator: 'Па-па-па де труа',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: siteUrl,
    siteName: 'Па-па-па де труа',
    title: 'Балетна школа Па-па-па де труа | Смолян',
    description:
      'Преоткрийте изкуството на класическия балет в нашата школа. Квалифицирани преподаватели, класове за всички нива.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Балетна школа Па-па-па де труа',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Балетна школа Па-па-па де труа | Смолян',
    description: 'Преоткрийте изкуството на класическия балет в нашата школа.',
    images: ['/og-image.jpg'],
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
    icon: [
      { url: '/assets/Logo-mobile.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/Logo-mobile.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/assets/Logo-mobile.png',
    shortcut: '/assets/Logo-mobile.png',
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
    <html lang="bg" suppressHydrationWarning>
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
