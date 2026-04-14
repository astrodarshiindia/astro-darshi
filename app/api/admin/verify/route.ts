import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function GET(request: NextRequest) {
  console.log('=== ADMIN VERIFY API HIT ===');
  try {
    const authHeader = request.headers.get('authorization');
    console.log('Auth header present:', !!authHeader);
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    // Verify token in database
    console.log('Verifying token:', token ? token.slice(0, 10) + '...' : 'missing');
    const { data: session, error: sessionError } = await supabaseAdmin
      .from('admin_sessions')
      .select('user_id, expires_at')
      .eq('token', token)
      .single();

    if (sessionError || !session) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Check if token is expired
    if (new Date(session.expires_at) < new Date()) {
      return NextResponse.json(
        { error: 'Token expired' },
        { status: 401 }
      );
    }

    // Get user info
    const { data: user, error: userError } = await supabaseAdmin
      .from('admin_users')
      .select('id, email, name, role')
      .eq('id', session.user_id)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
