'use client';

import { useCallback, useEffect, useSyncExternalStore } from 'react';

import { Theme, ThemeContext } from '@/lib/ThemeContext';

const THEME_STORAGE_KEY = 'ballet-studio-theme';

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

function applyThemeToDocument(newTheme: Theme): 'light' | 'dark' {
  const resolved = newTheme === 'system' ? getSystemTheme() : newTheme;
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(resolved);
  return resolved;
}

// Custom store for theme state
let themeListeners: Array<() => void> = [];
let currentTheme: Theme = 'system';

function subscribeToTheme(callback: () => void) {
  themeListeners.push(callback);
  return () => {
    themeListeners = themeListeners.filter((l) => l !== callback);
  };
}

function getThemeSnapshot(): Theme {
  return currentTheme;
}

function getServerThemeSnapshot(): Theme {
  return 'system';
}

function setThemeValue(newTheme: Theme) {
  currentTheme = newTheme;
  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  applyThemeToDocument(newTheme);
  themeListeners.forEach((listener) => listener());
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeValue(newTheme);
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    const stored = getStoredTheme();
    currentTheme = stored;
    applyThemeToDocument(stored);
    themeListeners.forEach((listener) => listener());
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      if (currentTheme === 'system') {
        applyThemeToDocument('system');
        themeListeners.forEach((listener) => listener());
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
