'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { formatBlogDate } from '@/lib/blog';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const { posts, loading, error } = useBlogPosts();

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <Header />

      <section className="border-b border-stone-200/80 bg-white pt-[110px] pb-12 md:pb-16">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-[2.35rem] leading-[1.08] tracking-tight sm:text-5xl">
              Vedic <span className="font-serif italic text-amber-800">Wisdom</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Articles on astrology, remedies, and living with greater clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-container max-w-5xl">
          {loading ? (
            <div className="py-20 text-center text-sm text-slate-500">Loading articles…</div>
          ) : error ? (
            <div className="py-20 text-center text-sm text-red-600">{error}</div>
          ) : posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-stone-200 bg-white py-20 text-center">
              <BookOpen className="mx-auto mb-4 text-stone-300" size={36} />
              <p className="text-sm font-medium text-stone-900">Articles coming soon</p>
              <p className="mt-1 text-sm text-stone-500">Check back shortly for new posts.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {post.image_url ? (
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={post.image_url}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100">
                      <BookOpen className="text-amber-300" size={40} />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    {post.category && (
                      <p className="text-[11px] font-medium uppercase tracking-wider text-amber-700">
                        {post.category}
                      </p>
                    )}
                    <h2 className="mt-2 text-lg font-semibold leading-snug text-stone-900 group-hover:text-amber-900">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    {post.excerpt && (
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-between text-xs text-stone-500">
                      <span>{formatBlogDate(post.published_at || post.created_at)}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 font-medium text-stone-800 hover:text-amber-800"
                      >
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
