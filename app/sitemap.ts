import type { MetadataRoute } from 'next';
import { getPublishedBlogPosts } from '@/lib/blogServer';
import { getActiveProducts } from '@/lib/productServer';
import { PUBLIC_STATIC_ROUTES, absoluteUrl } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = PUBLIC_STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const [posts, products] = await Promise.all([
    getPublishedBlogPosts(),
    getActiveProducts(),
  ]);

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updated_at || post.published_at || now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: absoluteUrl(`/product/${product.id}`),
    lastModified: product.updated_at || now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...productEntries];
}
