import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Event {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  link: string | null;
  event_date: string | null;
  created_at: string;
}

// Auth helpers
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { session: data.session, error };
};

// Events helpers
export const getEvents = async () => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: false });
  return { data: data as Event[] | null, error };
};

export const createEvent = async (event: Omit<Event, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('events')
    .insert([event])
    .select()
    .single();
  return { data: data as Event | null, error };
};

export const deleteEvent = async (id: string) => {
  const { error } = await supabase.from('events').delete().eq('id', id);
  return { error };
};

// Image upload helper
export const uploadImage = async (file: File, fileName: string) => {
  const { data, error } = await supabase.storage
    .from('event-images')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) return { url: null, error };

  const {
    data: { publicUrl },
  } = supabase.storage.from('event-images').getPublicUrl(data.path);

  return { url: publicUrl, error: null };
};
