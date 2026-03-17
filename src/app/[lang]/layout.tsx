import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { PageTransition } from '@/components/providers/PageTransition';
import { TranslationProvider } from '@/components/providers/TranslationProvider';

import type { Culture } from '@/lib/TranslationContext';
import { getDefaultCulture, getTranslations, isValidCulture } from '@/lib/translations.server';

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  // Validate and normalize language
  const isValid = isValidCulture(lang);
  const culture = isValid ? (lang as Culture) : getDefaultCulture();

  // Load translations server-side
  const translations = getTranslations(culture);
  return (
    <>
      <TranslationProvider culture={culture} translations={translations}>
        <Navbar />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </TranslationProvider>
    </>
  );
}
