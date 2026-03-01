import { Culture } from './TranslationContext';
import translations from './translations.json';

export function getTranslations(culture: Culture): Record<string, string> {
  return translations[culture as keyof typeof translations] || translations['en-GB'] || {};
}

export const validCultures: Culture[] = ['en-GB', 'ru-RU', 'uk-UA', 'bg-BG'];

export function isValidCulture(culture: string): culture is Culture {
  return validCultures.includes(culture as Culture);
}

export function getDefaultCulture(): Culture {
  return 'en-GB';
}
