import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service_type, message } = await request.json();

    // Validation
    if (!name || !email || !phone || !service_type || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Insert into contact_responses table
    const { data, error } = await supabase
      .from('contact_responses')
      .insert({
        name,
        email,
        phone,
        service_type,
        message,
        status: 'new',
        created_at: new Date().toISOString(),
      })
      .select();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. We will respond within 24 hours.',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
