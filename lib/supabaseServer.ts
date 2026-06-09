import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || '';

const keyStatus = !!supabaseServiceRoleKey ? 'OK' : 'MISSING - Add SUPABASE_SERVICE_ROLE_KEY to .env.local';
console.log('Supabase admin client:', { url: !!supabaseUrl, serviceKey: keyStatus });

if (!supabaseServiceRoleKey) {
  console.error('🚨 SUPABASE_SERVICE_ROLE_KEY missing! Admin operations will fail.');
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
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
