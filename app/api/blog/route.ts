import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServer';

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('id, title, slug, excerpt, category, image_url, author, published_at, view_count, created_at')
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json({ posts: data || [] });
  } catch (error) {
    console.error('Public blog GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
