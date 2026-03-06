'use client';

import { Loader2, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  fadeInLeft,
  fadeInRight,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/motion';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from '@/lib/TranslationContext';

export default function ContactSection() {
  const { translate } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(translate('contact.form.success'), {
      description: translate('contact.form.successDescription'),
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <MessageSquare className="w-4 h-4" />
            {translate('contact.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translate('contact.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {/* Email */}
            <StaggerItem variants={fadeInLeft}>
              <Card className="group hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 font-playfair text-foreground">
                        {translate('contact.info.email')}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {translate('contact.info.emailDescription')}
                      </p>
                      <a
                        href="mailto:info@balletstudio.com"
                        className="text-primary font-semibold hover:underline">
                        info@balletstudio.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Phone */}
            <StaggerItem variants={fadeInLeft}>
              <Card className="group hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 font-playfair text-foreground">
                        {translate('contact.info.phone')}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {translate('contact.info.phoneDescription')}
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="text-primary font-semibold hover:underline">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Location */}
            <StaggerItem variants={fadeInLeft}>
              <Card className="group hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 font-playfair text-foreground">
                        {translate('contact.info.location')}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Dance Street
                        <br />
                        City, State 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Contact Form */}
          <ScrollReveal variants={fadeInRight} delay={0.2}>
            <Card className="relative bg-gradient-to-br from-card via-pink-500/5 to-purple-500/5 border-primary/10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"></div>
              <CardContent className="p-8 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {translate('contact.form.title')}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-foreground font-medium">
                      {translate('contact.form.name')}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={translate('contact.form.namePlaceholder')}
                      required
                      disabled={isSubmitting}
                      className="h-12 bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-foreground font-medium">
                      {translate('contact.form.email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={translate('contact.form.emailPlaceholder')}
                      required
                      disabled={isSubmitting}
                      className="h-12 bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-foreground font-medium">
                      {translate('contact.form.message')}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={translate('contact.form.messagePlaceholder')}
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="resize-none bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 hover:from-pink-600 hover:via-fuchsia-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        {translate('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {translate('contact.form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
