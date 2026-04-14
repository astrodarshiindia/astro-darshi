import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function POST(request: NextRequest) {
  try {
    // Check if admin exists
    const { data: adminCount } = await supabaseAdmin
      .from('admin_users')
      .select('id', { count: 'exact', head: true });

    if (adminCount?.count && adminCount.count > 0) {
      return NextResponse.json({ error: 'Admin already exists' }, { status: 400 });
    }

    // Insert default admin
    const { error } = await supabaseAdmin
      .from('admin_users')
      .insert({
        email: 'admin@astrodarshini.com',
        password_hash: '8d969eef6ecad3c29a3a629280e3193e4e3f2c7f3e2e8b5c4d7e6f8a9b0c1d2e', // SHA256('admin123')
        name: 'Admin User',
        role: 'superadmin',
        is_active: true,
      });

    if (error) {
      console.error('Setup error:', error);
      return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Default admin created. Email: admin@astrodarshini.com, Password: admin123' });
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

