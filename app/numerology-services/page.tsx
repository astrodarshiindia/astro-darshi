import SEOLayout from '@/components/SEOLayout';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Numerology Services Online',
  description:
    'Unlock the power of your numbers with numerology services. From name numerology to birth number analysis, get deep insights into your life.',
  path: '/numerology-services',
  keywords: [
    'numerology services',
    'name numerology',
    'birth number analysis',
    'life path number',
    'numerology consultation',
  ],
});

export default function NumerologyServices() {
  return (
    <SEOLayout
      title="The Magic of Numbers"
      description="Unlock the vibrational code within your name and birth date to understand your life's purpose and destiny."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Decoding Your Destiny</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Numbers are more than just mathematical symbols. They are cosmic energies that influence our personality, career, and relationships. Through numerology, we can understand the hidden patterns of our lives.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Comprehensive Numerology Analysis</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our numerology services provide a deep dive into your unique number vibration:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">✨ Life Path Number Analysis</li>
              <li className="flex items-center gap-3">✨ Name Numerology Corrections</li>
              <li className="flex items-center gap-3">✨ Destiny and Soul Numbers</li>
              <li className="flex items-center gap-3">✨ Personal Year Predictions</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Aligning with Your Numbers</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When your name and life numbers are in harmony, success and happiness follow naturally. We help you make small but powerful adjustments to your name's vibration, opening doors to new opportunities and spiritual growth.
            </p>
          </section>
        </div>
      }
    />
  );
}
