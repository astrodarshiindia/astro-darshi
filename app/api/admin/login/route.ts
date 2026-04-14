import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, verifyPassword } from '@/lib/supabaseServer';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  console.log('=== ADMIN LOGIN API HIT ===');
  try {
    const { email, password } = await request.json();
    console.log('Login attempt:', { email });

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Get admin user from database
    console.log('Querying admin_users for:', email);
    const { data: adminUser, error: fetchError } = await supabaseAdmin
      .from('admin_users')
      .select('id, email, password_hash, name, role')
      .eq('email', email)
      .eq('is_active', true)
      .single();

    if (fetchError) {
      console.error('Supabase fetch error:', fetchError.message, fetchError.code, fetchError.details);
      return NextResponse.json(
        { error: `Database error: ${fetchError.message}` },
        { status: 500 }
      );
    }

    if (!adminUser) {
      console.log('No active admin user found for:', email);
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const passwordMatch = verifyPassword(password, adminUser.password_hash);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    // Store session
    console.log('Creating session for user:', adminUser.id);
    const { error: sessionError } = await supabaseAdmin
      .from('admin_sessions')
      .insert({
        user_id: adminUser.id,
        token,
        expires_at: expiresAt,
      });

    if (sessionError) {
      return NextResponse.json(
        { error: 'Failed to create session' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      token,
      user: {
        id: adminUser.id,
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
      },
    });
  } catch (error) {
    console.error('LOGIN ERROR:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
console.log('Login API completed');
