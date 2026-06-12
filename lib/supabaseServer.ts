import 'server-only';

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';

function getServiceRoleKey(): string {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || '';
}

let adminClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (adminClient) return adminClient;

  const serviceKey = getServiceRoleKey();
  if (!serviceKey) {
    throw new Error(
      'SUPABASE_SERVICE_ROLE_KEY is missing. Add it to .env.local (dev) or Vercel env vars (production).'
    );
  }

  if (!supabaseUrl) {
    throw new Error('SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL is missing.');
  }

  adminClient = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });

  return adminClient;
}

/** @deprecated Use getSupabaseAdmin() — kept for existing API routes */
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    return Reflect.get(getSupabaseAdmin(), prop, receiver);
  },
});

export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password, 'utf8').digest('hex');
}

export function verifyPassword(password: string, hash: string): boolean {
  if (!hash) {
    return false;
  }

  // Allow existing plain-text password entries for backward compatibility.
  if (password === hash) {
    return true;
  }

  return hashPassword(password) === hash;
}
