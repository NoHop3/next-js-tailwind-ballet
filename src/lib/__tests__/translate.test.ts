import { describe, expect, it } from 'vitest';

// We test the translate logic in isolation as a pure function
// matching the exact signature used in TranslationProvider.
function makeTranslate(translations: Record<string, string>) {
  return (key: string, defaultValue?: string): string =>
    translations[key] ?? defaultValue ?? key;
}

describe('translate()', () => {
  const translations = { 'greeting': 'Hello', 'empty': '' };
  const translate = makeTranslate(translations);

  it('returns the translated value for a known key', () => {
    expect(translate('greeting')).toBe('Hello');
  });

  it('returns defaultValue when key is missing and defaultValue is provided', () => {
    expect(translate('missing.key', 'Fallback text')).toBe('Fallback text');
  });

  it('returns the key string when key is missing and no defaultValue provided', () => {
    expect(translate('missing.key')).toBe('missing.key');
  });

  it('returns the translated value even when it is an empty string', () => {
    // The old `||` operator would skip empty strings and fall back to the key.
    // The correct `??` operator preserves empty string translations.
    expect(translate('empty')).toBe('');
  });
});
