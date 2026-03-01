'use client';

import Link from 'next/link';

import { useTranslation } from '@/lib/TranslationContext';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🩰</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent font-playfair">
                Ballet Studio
              </h3>
            </div>
            <p className="text-slate-400 text-sm">
              Discover the art of classical ballet with our modern studio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-pink-400 transition-colors">Home</Link></li>
              <li><Link href="/classes" className="text-slate-400 hover:text-pink-400 transition-colors">Classes</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-pink-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <p className="text-slate-400 text-sm mb-2">
              📧 info@balletstudio.com
            </p>
            <p className="text-slate-400 text-sm">
              📱 +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>{t('footer.text', `© ${currentYear} Ballet Studio. All rights reserved.`)}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
