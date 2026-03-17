'use client';

import { ReactNode } from 'react';

import { Culture, TranslationContext, TranslationContextType } from '@/lib/TranslationContext';

interface TranslationProviderProps {
  children: ReactNode;
  culture: Culture;
  translations: Record<string, string>;
}

export function TranslationProvider({ children, culture, translations }: TranslationProviderProps) {
  const setCulture = (newCulture: Culture) => {
    // Navigate to the new language route while preserving current path
    const currentPath = window.location.pathname;
    // Remove the current culture prefix and add the new one
    const pathWithoutCulture = currentPath.replace(/^\/(en-GB|ru-RU|uk-UA|bg-BG)/, '');
    const newPath = `/${newCulture}${pathWithoutCulture || ''}`;
    window.location.href = newPath;
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  const contextValue: TranslationContextType = {
    culture,
    setCulture,
    translations,
    translate: t,
  };

  return <TranslationContext.Provider value={contextValue}>{children}</TranslationContext.Provider>;
}
