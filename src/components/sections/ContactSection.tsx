'use client';

import { useState } from 'react';

import { useTranslation } from '@/lib/TranslationContext';

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-4">
            <span className="gradient-text">{t('contact.title', 'Contact Us')}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('contact.subtitle', 'Get in touch with us')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="card">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-semibold mb-2 font-playfair">Email</h3>
              <p className="text-slate-600 mb-2">Get in touch via email</p>
              <a href="mailto:info@balletstudio.com" className="text-pink-600 font-semibold hover:text-pink-700">
                info@balletstudio.com
              </a>
            </div>

            {/* Phone */}
            <div className="card">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-semibold mb-2 font-playfair">Phone</h3>
              <p className="text-slate-600 mb-2">Call us during business hours</p>
              <a href="tel:+15551234567" className="text-pink-600 font-semibold hover:text-pink-700">
                +1 (555) 123-4567
              </a>
            </div>

            {/* Location */}
            <div className="card">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-semibold mb-2 font-playfair">Location</h3>
              <p className="text-slate-600">
                123 Dance Street<br />
                City, State 12345<br />
                United States
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-50 to-pink-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-bold mb-6">Send us a Message</h3>

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/30"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
