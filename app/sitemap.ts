import type { MetadataRoute } from 'next';
import { getPublishedBlogPosts } from '@/lib/blogServer';
import { getActiveProducts } from '@/lib/productServer';
import { PUBLIC_STATIC_ROUTES, absoluteUrl, formatSitemapLastMod } from '@/lib/seo';

function staticSitemapEntries(now: Date): MetadataRoute.Sitemap {
  const lastModified = formatSitemapLastMod(now, now);

  return PUBLIC_STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
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
      lastModified: formatSitemapLastMod(
        post.updated_at ?? post.published_at ?? post.created_at,
        now
      ),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
      url: absoluteUrl(`/product/${product.id}`),
      lastModified: formatSitemapLastMod(product.updated_at ?? product.created_at, now),
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
