import { supabaseAdmin } from '@/lib/supabaseServer';
import type { BlogPost } from '@/lib/blog';

export async function getPublishedBlogPosts(): Promise<
  Pick<BlogPost, 'slug' | 'published_at' | 'updated_at' | 'created_at'>[]
> {
  try {
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('slug, published_at, updated_at, created_at')
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('getPublishedBlogPosts error:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) return null;
    return data as BlogPost;
  } catch (error) {
    console.error('getBlogPostBySlug error:', error);
    return null;
  }
}
