'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { AstroProduct } from '@/lib/products';

export function useProducts() {
  const [products, setProducts] = useState<AstroProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchProducts = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('astro_products')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (fetchError) throw fetchError;
        if (!cancelled && data) {
          setProducts(data as AstroProduct[]);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Failed to fetch products:', err);
          setError('Unable to load products right now.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading, error };
}
