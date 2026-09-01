'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Loader2, Pencil, Plus, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';

import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal, StaggerContainer, StaggerItem, fadeInUp } from '@/components/ui/motion';

import { useTranslation } from '@/lib/TranslationContext';
import { Event, deleteEvent, getEvents, getSession } from '@/lib/supabase';

import { AddEventDialog } from './AddEventDialog';
import { AuthModal } from './AuthModal';
import { EditEventDialog } from './EditEventDialog';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default function EventsSection() {
  const { translate } = useTranslation();
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const isBrowser = typeof document !== 'undefined';
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!selectedEvent) return;
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [selectedEvent]);

  // Focus management + Escape / tab-trap for modal
  useEffect(() => {
    if (!selectedEvent) {
      triggerRef.current?.focus();
      return;
    }
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setSelectedEvent(null); return; }
      if (e.key !== 'Tab' || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  const fetchEvents = async () => {
    setIsLoading(true);
    const { data } = await getEvents();
    if (data) setEvents(data);
    setIsLoading(false);
  };

  const checkAuth = async () => {
    const { session } = await getSession();
    setIsAuthenticated(!!session);
  };

  useEffect(() => {
    const init = async () => {
      await fetchEvents();
      await checkAuth();
    };
    init();
  }, []);

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

  const handleEventUpdated = (updated: Event) => {
    setEvents((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
    if (selectedEvent?.id === updated.id) setSelectedEvent(updated);
    setEditingEvent(null);
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm(translate('events.deleteConfirm'))) return;
    setDeletingId(id);
    const { error } = await deleteEvent(id);
    if (!error) {
      setEvents(events.filter((e) => e.id !== id));
      if (selectedEvent?.id === id) setSelectedEvent(null);
    } else {
      toast.error(translate('events.deleteError'));
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
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
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
                <Card
                  onClick={(e) => {
                    triggerRef.current = e.currentTarget as HTMLElement;
                    setSelectedEvent(event);
                  }}
                  className="group relative overflow-hidden border-border/50 hover:border-primary/30 bg-gradient-to-br from-card/50 to-secondary/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2 h-full cursor-pointer"
                >
                  {/* Gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500" />

                  {/* Admin buttons */}
                  {isAuthenticated && (
                    <div className="absolute top-4 right-4 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => { e.stopPropagation(); setEditingEvent(event); }}
                        className="w-8 h-8 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center text-white"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDeleteEvent(event.id); }}
                        disabled={deletingId === event.id}
                        className="w-8 h-8 rounded-full bg-destructive/80 hover:bg-destructive flex items-center justify-center text-white"
                      >
                        {deletingId === event.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  )}

                  <CardContent className={`p-6 ${event.image_url ? 'pt-4' : 'pt-8'}`}>
                    {event.event_date && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{formatDate(event.event_date)}</span>
                      </div>
                    )}

                    <h3 className="text-xl font-playfair font-bold text-foreground mb-3">
                      {event.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {event.link && (
                      <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                        {translate('events.learnMore')}
                        <ExternalLink className="w-3 h-3" />
                      </span>
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
            <p className="text-muted-foreground">{translate('events.noEvents')}</p>
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

      {/* Edit Event Dialog */}
      {editingEvent && (
        <EditEventDialog
          event={editingEvent}
          isOpen={true}
          onClose={() => setEditingEvent(null)}
          onSuccess={handleEventUpdated}
        />
      )}

      {/* Event Detail Modal */}
      {isBrowser &&
        selectedEvent &&
        createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-[60] flex items-stretch lg:items-center justify-center bg-black/50 backdrop-blur-sm p-0 lg:p-4 cursor-pointer"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="event-modal-title"
              className="relative w-screen h-screen lg:w-full lg:max-w-2xl lg:max-h-[90vh] overflow-y-auto overscroll-contain bg-card/95 backdrop-blur-xl rounded-none lg:rounded-2xl shadow-2xl border-0 lg:border border-border/50 cursor-default"
            >
              {/* Gradient bar */}
              <div className="h-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500" />

              {/* Close + admin actions */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 bg-gradient-to-b from-card/95 to-transparent">
                <div className="flex gap-2">
                  {isAuthenticated && (
                    <>
                      <button
                        onClick={() => { setSelectedEvent(null); setEditingEvent(selectedEvent); }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        {translate('events.edit.title')}
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(selectedEvent.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-destructive/10 hover:bg-destructive/20 text-destructive text-sm font-medium transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
                <button
                  ref={closeButtonRef}
                  aria-label="Close"
                  onClick={() => setSelectedEvent(null)}
                  className="p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image */}
              {selectedEvent.image_url && (
                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src={selectedEvent.image_url}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Date */}
                {selectedEvent.event_date && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{formatDate(selectedEvent.event_date)}</span>
                  </div>
                )}

                {/* Title */}
                <h2
                  id="event-modal-title"
                  className="text-3xl font-playfair font-bold text-foreground mb-4"
                >
                  {selectedEvent.title}
                </h2>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap mb-6">
                  {selectedEvent.description}
                </p>

                {/* Link */}
                {selectedEvent.link && (
                  <a
                    href={selectedEvent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                  >
                    {translate('events.learnMore')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
    </section>
  );
}
