'use client';

import { ReactNode } from 'react';

import {
    Culture,
    TranslationContext,
    TranslationContextType,
} from '@/lib/TranslationContext';

interface TranslationProviderProps {
  children: ReactNode;
  culture: Culture;
  translations: Record<string, string>;
}

export function TranslationProvider({
  children,
  culture,
  translations,
}: TranslationProviderProps) {
  const setCulture = (newCulture: Culture) => {
    // Navigate to the new language route
    window.location.href = `/${newCulture}`;
  };

  const t = (key: string, defaultValue?: string): string => {
    return translations[key] || defaultValue || key;
  };

  const contextValue: TranslationContextType = {
    culture,
    setCulture,
    translations,
    t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}
