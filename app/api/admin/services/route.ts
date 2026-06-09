import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminRequest } from '@/lib/adminRequest';
import { supabaseAdmin } from '@/lib/supabaseServer';
import { slugify } from '@/lib/slug';
import { parseFeatures } from '@/lib/services';

export async function GET(request: NextRequest) {
  const auth = await verifyAdminRequest(request);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('services')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) throw error;

    const services = (data || []).map((s) => ({
      ...s,
      features: parseFeatures(s.features),
    }));

    const active = services.filter((s) => s.is_active).length;

    return NextResponse.json({ services, stats: { total: services.length, active } });
  } catch (error) {
    console.error('Admin services GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const auth = await verifyAdminRequest(request);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const body = await request.json();
    const {
      title,
      slug,
      description,
      long_description,
      price,
      duration,
      features,
      image_url,
      is_active,
      order_index,
    } = body;

    if (!title?.trim() || !description?.trim()) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const featureList = Array.isArray(features)
      ? features
      : typeof features === 'string'
        ? features.split('\n').map((s: string) => s.trim()).filter(Boolean)
        : [];

    const { data, error } = await supabaseAdmin
      .from('services')
      .insert({
        title: title.trim(),
        slug: slug?.trim() || slugify(title),
        description: description.trim(),
        long_description: long_description?.trim() || null,
        price: price != null && price !== '' ? parseFloat(price) : null,
        duration: duration?.trim() || null,
        features: featureList,
        image_url: image_url?.trim() || null,
        is_active: is_active !== false,
        order_index: order_index ?? 0,
      })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ service: data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create service';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const auth = await verifyAdminRequest(request);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const body = await request.json();
    const { id, ...rest } = body;

    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (rest.title !== undefined) updates.title = rest.title.trim();
    if (rest.slug !== undefined) updates.slug = rest.slug.trim();
    if (rest.description !== undefined) updates.description = rest.description.trim();
    if (rest.long_description !== undefined) updates.long_description = rest.long_description?.trim() || null;
    if (rest.price !== undefined) updates.price = rest.price !== '' && rest.price != null ? parseFloat(rest.price) : null;
    if (rest.duration !== undefined) updates.duration = rest.duration?.trim() || null;
    if (rest.image_url !== undefined) updates.image_url = rest.image_url?.trim() || null;
    if (rest.is_active !== undefined) updates.is_active = Boolean(rest.is_active);
    if (rest.order_index !== undefined) updates.order_index = rest.order_index;
    if (rest.features !== undefined) {
      updates.features = Array.isArray(rest.features)
        ? rest.features
        : typeof rest.features === 'string'
          ? rest.features.split('\n').map((s: string) => s.trim()).filter(Boolean)
          : [];
    }

    const { data, error } = await supabaseAdmin
      .from('services')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ service: data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to update service';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const auth = await verifyAdminRequest(request);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from('services').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Admin services DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
