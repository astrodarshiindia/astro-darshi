import SEOLayout from '@/components/SEOLayout';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Kundli Matching for Happy Marriage',
  description:
    'Online Kundli Matching for a successful marriage. Get accurate horoscope matching, Guna Milan, and compatibility analysis by expert astrologers.',
  path: '/kundli-matching',
  keywords: [
    'kundli matching',
    'horoscope matching for marriage',
    'guna milan',
    'astrology compatibility',
    'happy marriage',
  ],
});

export default function KundliMatching() {
  return (
    <SEOLayout
      title="Perfect Match for Happy Marriage"
      description="Ensure a harmonious life journey with precise horoscope matching and deep compatibility analysis."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">The Importance of Guna Milan</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In Vedic Astrology, Kundli Matching or Guna Milan is a critical step before marriage. It helps in understanding the spiritual, mental, and physical compatibility between two individuals, ensuring a stable and prosperous union.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Our Matching Process</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our expert astrologers go beyond simple point-based matching to provide a comprehensive analysis of:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">✨ Ashtakoot Milan (36 Gunas)</li>
              <li className="flex items-center gap-3">✨ Manglik Dosha Analysis</li>
              <li className="flex items-center gap-3">✨ Bhakoot and Nadi Analysis</li>
              <li className="flex items-center gap-3">✨ Planetary Strength Matching</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">A Balanced Union</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Marriage is a sacred bond. By analyzing the cosmic alignments of both partners, we provide remedies for any potential challenges, helping you build a foundation of mutual understanding and lasting love.
            </p>
          </section>
        </div>
      }
    />
  );
}
