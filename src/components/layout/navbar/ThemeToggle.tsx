'use client';

import { Theme, useTheme } from '@/lib/ThemeContext';

interface ThemeOption {
  value: Theme;
  icon: React.ReactNode;
  label: string;
}

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SystemIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const themeOptions: ThemeOption[] = [
  { value: 'light', icon: <SunIcon />, label: 'Light' },
  { value: 'dark', icon: <MoonIcon />, label: 'Dark' },
  { value: 'system', icon: <SystemIcon />, label: 'System' },
];

interface ThemeToggleProps {
  variant?: 'compact' | 'full';
}

export function ThemeToggle({ variant = 'compact' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  if (variant === 'full') {
    return (
      <div className="flex flex-col gap-2">
        {themeOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
              theme === option.value
                ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
            aria-pressed={theme === option.value}
          >
            {option.icon}
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    );
  }

  // Compact variant - segmented control
  return (
    <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1">
      {themeOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === option.value
              ? 'bg-white dark:bg-slate-700 text-pink-600 dark:text-pink-400 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          }`}
          aria-label={`Set theme to ${option.label}`}
          aria-pressed={theme === option.value}
          title={option.label}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
}
