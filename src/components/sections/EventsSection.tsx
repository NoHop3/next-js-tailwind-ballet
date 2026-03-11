'use client';

import { useCallback, useEffect, useState } from 'react';
import { Calendar, ExternalLink, Loader2, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
    fadeInUp,
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
} from '@/components/ui/motion';
import {
    deleteEvent,
    Event,
    getEvents,
    getSession,
} from '@/lib/supabase';
import { useTranslation } from '@/lib/TranslationContext';

import { AddEventDialog } from './AddEventDialog';
import { AuthModal } from './AuthModal';

export default function EventsSection() {
  const { translate } = useTranslation();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setIsLoading(true);
    const { data } = await getEvents();
    if (data) {
      setEvents(data);
    }
    setIsLoading(false);
  }, []);

  const checkAuth = useCallback(async () => {
    const { session } = await getSession();
    setIsAuthenticated(!!session);
  }, []);

  useEffect(() => {
    fetchEvents();
    checkAuth();
  }, [fetchEvents, checkAuth]);

  const handleAddClick = () => {
    if (isAuthenticated) {
      setShowAddDialog(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setShowAddDialog(true);
  };

  const handleEventAdded = () => {
    setShowAddDialog(false);
    fetchEvents();
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm(translate('events.deleteConfirm'))) return;
    
    setDeletingId(id);
    const { error } = await deleteEvent(id);
    if (!error) {
      setEvents(events.filter((e) => e.id !== id));
    }
    setDeletingId(null);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            <Calendar className="w-4 h-4" />
            {translate('events.badge')}
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              {translate('events.title')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {translate('events.subtitle')}
          </p>
        </ScrollReveal>

        {/* Events Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {events.map((event) => (
              <StaggerItem key={event.id} variants={fadeInUp}>
                <Card className="group relative overflow-hidden border-border/50 hover:border-primary/30 bg-gradient-to-br from-card/50 to-secondary/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Gradient bar at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"></div>

                  {/* Delete button for authenticated users */}
                  {isAuthenticated && (
                    <button
                      onClick={() => handleDeleteEvent(event.id)}
                      disabled={deletingId === event.id}
                      className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-destructive/80 hover:bg-destructive flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {deletingId === event.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  {/* Event Image */}
                  {event.image_url && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={event.image_url}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </div>
                  )}

                  <CardContent className={`p-6 ${event.image_url ? 'pt-4' : 'pt-8'}`}>
                    {/* Date */}
                    {event.event_date && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{formatDate(event.event_date)}</span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-3">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Link */}
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                      >
                        {translate('events.learnMore')}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}

            {/* Add Event Button */}
            <StaggerItem variants={fadeInUp}>
              <button
                onClick={handleAddClick}
                className="w-full h-full min-h-[200px] rounded-xl border-2 border-dashed border-primary/30 hover:border-primary/60 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 flex items-center justify-center transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/20">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                    {translate('events.addEvent')}
                  </span>
                </div>
              </button>
            </StaggerItem>
          </StaggerContainer>
        )}

        {/* Empty state */}
        {!isLoading && events.length === 0 && (
          <ScrollReveal className="text-center py-10">
            <p className="text-muted-foreground">
              {translate('events.noEvents')}
            </p>
          </ScrollReveal>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* Add Event Dialog */}
      <AddEventDialog
        isOpen={showAddDialog}
        onClose={() => setShowAddDialog(false)}
        onSuccess={handleEventAdded}
      />
    </section>
  );
}
