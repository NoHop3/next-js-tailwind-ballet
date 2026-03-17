'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import { Calendar, ImagePlus, Loader2, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useTranslation } from '@/lib/TranslationContext';
import { createEvent, uploadImage } from '@/lib/supabase';

interface AddEventDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AddEventDialog({ isOpen, onClose, onSuccess }: AddEventDialogProps) {
  const { translate } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let image_url: string | null = null;

      // Upload image if selected
      if (imageFile) {
        const fileName = `${Date.now()}-${imageFile.name.replace(/\s/g, '-')}`;
        const { url, error: uploadError } = await uploadImage(imageFile, fileName);
        if (uploadError) {
          throw new Error(translate('events.add.imageError'));
        }
        image_url = url;
      }

      // Create event
      const { error: createError } = await createEvent({
        title,
        description,
        link: link || null,
        event_date: eventDate || null,
        image_url,
      });

      if (createError) {
        throw new Error(translate('events.add.error'));
      }

      // Reset form
      setTitle('');
      setDescription('');
      setLink('');
      setEventDate('');
      setImageFile(null);
      setImagePreview(null);

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : translate('events.add.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm overflow-y-auto py-8"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-lg mx-4 bg-card border border-border rounded-2xl shadow-2xl shadow-pink-500/10 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {/* Title */}
          <h2 className="text-2xl font-playfair font-bold mb-6">{translate('events.add.title')}</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {translate('events.add.image')}
              </label>
              {imagePreview ? (
                <div className="relative w-full h-48 rounded-xl overflow-hidden group">
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-destructive/80 hover:bg-destructive flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-32 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary/60 bg-muted/30 flex flex-col items-center justify-center gap-3 transition-colors"
                >
                  <ImagePlus className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {translate('events.add.uploadImage')}
                  </span>
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {translate('events.add.eventTitle')} *
              </label>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder={translate('events.add.eventTitlePlaceholder')}
                className="w-full bg-muted/50 border-border focus:border-primary"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {translate('events.add.description')} *
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder={translate('events.add.descriptionPlaceholder')}
                rows={3}
                className="w-full bg-muted/50 border-border focus:border-primary resize-none"
              />
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                <Calendar className="w-4 h-4 inline-block mr-1" />
                {translate('events.add.date')}
              </label>
              <Input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-muted/50 border-border focus:border-primary"
              />
            </div>

            {/* Link */}
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                {translate('events.add.link')}
              </label>
              <Input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://..."
                className="w-full bg-muted/50 border-border focus:border-primary"
              />
            </div>

            {error && <p className="text-sm text-destructive text-center">{error}</p>}

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                {translate('events.add.cancel')}
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 hover:from-pink-600 hover:via-fuchsia-600 hover:to-purple-600 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {translate('events.add.creating')}
                  </>
                ) : (
                  translate('events.add.create')
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
