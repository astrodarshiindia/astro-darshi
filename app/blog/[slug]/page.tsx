'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { BlogPost } from '@/lib/blog';
import { formatBlogDate } from '@/lib/blog';
import { ArrowLeft } from 'lucide-react';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const load = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (res.status === 404) {
          setNotFound(true);
          return;
        }
        const data = await res.json();
        if (res.ok && data.post) {
          setPost(data.post);
          fetch(`/api/blog/${slug}`, { method: 'POST' }).catch(() => {});
        }
      } catch (e) {
        console.error(e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [slug]);

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <Header />

      <article className="pt-[110px] pb-16 md:pb-24">
        <div className="section-container max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-stone-900"
          >
            <ArrowLeft size={16} /> All articles
          </Link>

          {loading ? (
            <div className="py-20 text-center text-sm text-stone-500">Loading…</div>
          ) : notFound || !post ? (
            <div className="py-20 text-center">
              <h1 className="text-2xl font-semibold">Article not found</h1>
              <p className="mt-2 text-sm text-stone-500">This post may have been removed or is not published.</p>
            </div>
          ) : (
            <>
              {post.image_url && (
                <div className="mb-8 overflow-hidden rounded-2xl">
                  <img src={post.image_url} alt="" className="aspect-[2/1] w-full object-cover" />
                </div>
              )}

              <header>
                {post.category && (
                  <p className="text-xs font-medium uppercase tracking-wider text-amber-700">{post.category}</p>
                )}
                <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
                  {post.title}
                </h1>
                <p className="mt-4 text-sm text-stone-500">
                  {post.author} · {formatBlogDate(post.published_at || post.created_at)}
                </p>
              </header>

              <div className="prose prose-stone mt-10 max-w-none">
                {post.content.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4 text-base leading-[1.8] text-stone-700">
                    {para}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
