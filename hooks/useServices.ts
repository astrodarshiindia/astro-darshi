'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { DbService } from '@/lib/services';
import { parseFeatures } from '@/lib/services';

export function useServices(activeOnly = true) {
  const [services, setServices] = useState<DbService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchServices = async () => {
      try {
        let query = supabase.from('services').select('*').order('order_index', { ascending: true });
        if (activeOnly) query = query.eq('is_active', true);

        const { data, error: fetchError } = await query;
        if (fetchError) throw fetchError;

        if (!cancelled && data) {
          setServices(
            data.map((s) => ({
              ...s,
              features: parseFeatures(s.features),
            })) as DbService[]
          );
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Failed to fetch services:', err);
          setError('Unable to load services right now.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchServices();
    return () => {
      cancelled = true;
    };
  }, [activeOnly]);

  return { services, loading, error };
}
