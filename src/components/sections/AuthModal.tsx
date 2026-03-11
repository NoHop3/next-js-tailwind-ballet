'use client';

import { Loader2, Lock, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/lib/TranslationContext';
import { signIn } from '@/lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const { translate } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      setError(translate('events.auth.error'));
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    onSuccess();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md mx-4 bg-card border border-border rounded-2xl shadow-2xl shadow-pink-500/10 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-playfair font-bold text-center mb-2">
            {translate('events.auth.title')}
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            {translate('events.auth.subtitle')}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder={translate('events.auth.email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder={translate('events.auth.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-muted/50 border-border focus:border-primary"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 hover:from-pink-600 hover:via-fuchsia-600 hover:to-purple-600 text-white font-medium py-2.5"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {translate('events.auth.signing')}
                </>
              ) : (
                translate('events.auth.signIn')
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
