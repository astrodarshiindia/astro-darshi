import { supabaseAdmin } from '@/lib/supabaseServer';
import type { AstroProduct } from '@/lib/products';

export async function getActiveProducts(): Promise<
  { id: string; updated_at?: string; created_at?: string }[]
> {
  try {
    const { data, error } = await supabaseAdmin
      .from('astro_products')
      .select('id, updated_at, created_at')
      .eq('is_active', true)
      .order('order_index', { ascending: true });

    if (error) throw error;
    return (data || []).map((row) => ({
      id: row.id as string,
      updated_at: (row.updated_at as string | null) ?? undefined,
      created_at: (row.created_at as string | null) ?? undefined,
    }));
  } catch (error) {
    console.error('getActiveProducts error:', error);
    return [];
  }
}

export async function getProductById(id: string): Promise<AstroProduct | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('astro_products')
      .select('*')
      .eq('id', id)
      .eq('is_active', true)
      .single();

    if (error || !data) return null;
    return data as AstroProduct;
  } catch (error) {
    console.error('getProductById error:', error);
    return null;
  }
}
