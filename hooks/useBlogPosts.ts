'use client';

import { useEffect, useState } from 'react';
import type { BlogPost } from '@/lib/blog';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to load');
        if (!cancelled) setPosts(data.posts || []);
      } catch (err) {
        if (!cancelled) {
          console.error('Failed to fetch blog posts:', err);
          setError('Unable to load articles right now.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading, error };
}
