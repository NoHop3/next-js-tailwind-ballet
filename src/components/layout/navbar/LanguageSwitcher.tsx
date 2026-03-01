'use client';

import { Culture, useTranslation } from '@/lib/TranslationContext';

const languages: { code: Culture; name: string }[] = [
  { code: 'en-GB', name: '🇬🇧 English' },
  { code: 'ru-RU', name: '🇷🇺 Русский' },
  { code: 'uk-UK', name: '🇺🇦 Українська' },
  { code: 'bg-BG', name: '🇧🇬 Български' },
];

export function LanguageSwitcher() {
  const { culture, setCulture } = useTranslation();

  return (
    <div className="flex items-center">
      <select
        value={culture}
        onChange={(e) => setCulture(e.target.value as Culture)}
        className="px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 hover:border-pink-500 focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 text-sm font-medium cursor-pointer"
        aria-label="Select language">
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
