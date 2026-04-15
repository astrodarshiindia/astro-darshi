import SEOLayout from '@/components/SEOLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marriage Astrology & Relationship Guidance - Astro Darshini',
  description: 'Expert marriage astrology and relationship guidance. Find harmony in your love life based on your birth chart and planetary periods.',
  keywords: 'marriage astrology, relationship guidance, love astrology, marriage matching, zodiac love, partnership analysis',
};

export default function MarriageAstrology() {
  return (
    <SEOLayout
      title="Sacred Marriage Wisdom"
      description="Ensure a lifetime of happiness and mutual understanding by aligning your relationship with the cosmic flow."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">The Sacred Bond</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Marriage is more than just a legal agreement. It's a spiritual union that requires harmony and understanding. By analyzing the planetary influences on your relationship, we can provide insights into your partnership and help you build a strong foundation of love.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Our Marriage Services</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer comprehensive analysis and guidance for your romantic journey:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">✨ Marriage Timing and Muhurta</li>
              <li className="flex items-center gap-3">✨ Relationship Compatibility Analysis</li>
              <li className="flex items-center gap-3">✨ Remedies for Relationship Harmony</li>
              <li className="flex items-center gap-3">✨ Guidance for Pre-marital Concerns</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Harmony and Fulfillment</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're looking for love, planning a marriage, or seeking to strengthen your bond, our marriage astrology services provide the wisdom you need to create a life of shared joy and mutual support.
            </p>
          </section>
        </div>
      }
    />
  );
}
