import { createContext, useContext } from 'react';

export type Culture = 'en-GB' | 'ru-RU' | 'uk-UK' | 'bg-BG';

export interface TranslationContextType {
  culture: Culture;
  setCulture: (culture: Culture) => void;
  translations: Record<string, string>;
  t: (key: string, defaultValue?: string) => string;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
