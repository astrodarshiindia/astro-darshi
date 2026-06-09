import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function verifyAdminRequest(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    return { error: 'Unauthorized', status: 401 as const };
  }

  const { data: session, error: sessionError } = await supabaseAdmin
    .from('admin_sessions')
    .select('user_id, expires_at')
    .eq('token', token)
    .single();

  if (sessionError || !session) {
    return { error: 'Invalid token', status: 401 as const };
  }

  if (new Date(session.expires_at) < new Date()) {
    return { error: 'Token expired', status: 401 as const };
  }

  return { userId: session.user_id };
}
