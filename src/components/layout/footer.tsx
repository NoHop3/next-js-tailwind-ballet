'use client';

import Link from 'next/link';

import { Facebook, Heart, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';

import { useTranslation } from '@/lib/TranslationContext';

export default function Footer() {
  const { translate, culture } = useTranslation();

  const buildHref = (href: string) => {
    if (href === '/') {
      return `/${culture}`;
    }
    return `/${culture}${href}`;
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border/50 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                <span className="text-white text-xl">🩰</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent font-playfair">
                Ballet School
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Pa-pa-pas de trois Ballet School - Smolyan, Bulgaria
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1C4afyqUTQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground font-playfair text-lg">
              {translate('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={buildHref('/')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                >
                  {translate('footer.home')}
                </Link>
              </li>
              <li>
                <Link
                  href={buildHref('/classes')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                >
                  {translate('footer.classesLink')}
                </Link>
              </li>
              <li>
                <Link
                  href={buildHref('/about')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                >
                  {translate('footer.about')}
                </Link>
              </li>
              <li>
                <Link
                  href={buildHref('/contact')}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                >
                  {translate('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground font-playfair text-lg">
              {translate('footer.classes')}
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground text-sm">
                  {translate('footer.beginnerBallet')}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  {translate('footer.intermediateBallet')}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  {translate('footer.advancedBallet')}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  {translate('footer.privateLessons')}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground font-playfair text-lg">
              {translate('footer.contactUs')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="mailto:info@balletstudio.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@balletstudio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm">
                  123 Dance Street
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              {translate('footer.text')}
              <span className="mx-2">•</span>
              {translate('footer.madeWith')}{' '}
              <Heart className="w-4 h-4 text-primary inline mx-1" fill="currentColor" />{' '}
              {translate('footer.forDance')}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {translate('footer.privacy')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {translate('footer.terms')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {translate('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
