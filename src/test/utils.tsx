import { ReactNode } from 'react';

import { render } from '@testing-library/react';

import { TranslationContext, TranslationContextType } from '@/lib/TranslationContext';

const defaultTranslations: Record<string, string> = {
  'contact.form.title': 'Send us a Message',
  'contact.form.name': 'Full Name',
  'contact.form.namePlaceholder': 'Enter your name',
  'contact.form.email': 'Email Address',
  'contact.form.emailPlaceholder': 'Enter your email',
  'contact.form.message': 'Message',
  'contact.form.messagePlaceholder': 'Type your message here...',
  'contact.form.submit': 'Send Message',
  'contact.form.sending': 'Sending...',
  'contact.form.success': 'Message sent successfully!',
  'contact.form.successDescription': "We'll get back to you soon.",
  'contact.form.error': 'Failed to send message. Please try again.',
  'contact.form.captchaRequired': 'Please complete the captcha before sending.',
  'contact.subtitle': 'Get in Touch',
  'contact.title': 'Contact Us',
  'contact.badge': 'We would love to hear from you',
  'contact.info.email': 'Email',
  'contact.info.emailDescription': 'Send us an email',
  'contact.info.phone': 'Phone',
  'contact.info.phoneDescription': 'Call us',
  'contact.info.location': 'Location',
  'contact.info.address': 'Smolyan, Bulgaria',
};

export function renderWithTranslations(
  ui: ReactNode,
  translations: Record<string, string> = defaultTranslations
) {
  const contextValue: TranslationContextType = {
    culture: 'en-GB',
    setCulture: () => {},
    translations,
    translate: (key: string, defaultValue?: string) =>
      translations[key] ?? defaultValue ?? key,
  };

  return render(
    <TranslationContext.Provider value={contextValue}>
      {ui}
    </TranslationContext.Provider>
  );
}
