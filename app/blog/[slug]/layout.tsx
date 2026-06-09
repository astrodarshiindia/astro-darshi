import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { getBlogPostBySlug } from '@/lib/blogServer';
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  SITE_DESCRIPTION,
} from '@/lib/seo';

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt || SITE_DESCRIPTION,
    path: `/blog/${slug}`,
    keywords: post.category ? [post.category, 'astrology blog', 'vedic astrology'] : undefined,
    image: post.image_url,
    imageAlt: post.title,
    type: 'article',
    publishedTime: post.published_at,
    modifiedTime: post.updated_at,
    author: post.author,
  });
}

export default async function BlogPostLayout({
  children,
  params,
}: BlogPostLayoutProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return (
    <>
      {post ? (
        <JsonLd
          data={[
            articleJsonLd(post),
            breadcrumbJsonLd([
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: `/blog/${slug}` },
            ]),
          ]}
        />
      ) : null}
      {children}
    </>
  );
}
