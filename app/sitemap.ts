import type { MetadataRoute } from 'next';
import { getPublishedBlogPosts } from '@/lib/blogServer';
import { getActiveProducts } from '@/lib/productServer';
import { PUBLIC_STATIC_ROUTES, absoluteUrl } from '@/lib/seo';

function staticSitemapEntries(now: Date): MetadataRoute.Sitemap {
  return PUBLIC_STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  try {
    const staticEntries = staticSitemapEntries(now);

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

    return [...staticEntries, ...blogEntries, ...productEntries].sort(
      (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
    );
  } catch (error) {
    console.error('Sitemap generation failed, returning static routes only:', error);
    return staticSitemapEntries(now);
  }
}

export const revalidate = 3600;
