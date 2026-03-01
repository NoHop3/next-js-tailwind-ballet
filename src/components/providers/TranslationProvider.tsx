'use client';

import { ReactNode, useEffect, useState } from 'react';

import {
    Culture,
    TranslationContext,
    TranslationContextType,
} from '@/lib/TranslationContext';

interface TranslationsData {
  [culture: string]: Record<string, string>;
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [culture, setCultureState] = useState<Culture>('en-GB');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load translations on mount
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch('/translations.json');
        const data: TranslationsData = await response.json();
        
        // Get saved culture from localStorage if available
        const savedCulture = localStorage.getItem('culture') as Culture | null;
        const initialCulture = (savedCulture && Object.keys(data).includes(savedCulture))
          ? savedCulture
          : 'en-GB';
        
        setCultureState(initialCulture);
        setTranslations(data[initialCulture] || {});
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
        setIsLoaded(true);
      }
    };

    loadTranslations();
  }, []);

  const setCulture = (newCulture: Culture) => {
    setCultureState(newCulture);
    localStorage.setItem('culture', newCulture);
    
    // Load translations for the new culture
    const loadNewCulture = async () => {
      try {
        const response = await fetch('/translations.json');
        const data: TranslationsData = await response.json();
        setTranslations(data[newCulture] || {});
      } catch (error) {
        console.error('Failed to load culture translations:', error);
      }
    };
    
    loadNewCulture();
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
