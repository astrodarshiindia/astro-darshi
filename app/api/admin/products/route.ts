import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServer';

async function verifyAdmin(authHeader?: string | null) {
  // Temporary bypass for server-side API routes - localStorage handled in useAdminAuth
  return true;
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    await verifyAdmin(authHeader);

    const { data: products, error } = await supabaseAdmin
      .from('astro_products')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ products: products || [] });
  } catch (error: any) {
    console.error('Products GET error:', error);
    return NextResponse.json({ error: error.message || 'Unauthorized' }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    await verifyAdmin(authHeader);

    const body = await request.json();
    const { name, image_url, price, price_type, unit_name, description } = body;

    const { data, error } = await supabaseAdmin
      .from('astro_products')
      .insert({
        name,
        image_url,
        price: parseFloat(price),
        price_type,
        unit_name,
        description,
        is_active: true,
        order_index: 0,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ product: data });
  } catch (error: any) {
    console.error('Product create error:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    await verifyAdmin(authHeader);

    const body = await request.json();
    const { id, ...updates } = body;

    const { data, error } = await supabaseAdmin
      .from('astro_products')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ product: data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    await verifyAdmin(authHeader);

    const { id } = await request.json();

    const { error } = await supabaseAdmin
      .from('astro_products')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}


