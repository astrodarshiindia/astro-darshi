import SEOLayout from '@/components/SEOLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Tarot Readers in Lucknow - Astro Darshini',
  description: 'Connect with the best Tarot Readers in Lucknow. Gain intuitive insights and spiritual guidance through sacred spreads.',
  keywords: 'best tarot readers in lucknow, tarot card reading lucknow, intuitive tarot guidance, spiritual growth',
};

export default function BestTarotReadersLucknow() {
  return (
    <SEOLayout
      title="Best Tarot Readers in Lucknow"
      description="Connect with the intuitive energies of the universe through our sacred Tarot spreads. Experience the clarity and spiritual alignment you've been seeking."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Intuitive Guidance Through Tarot</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tarot is more than just card reading; it's a mirror reflecting your inner self and the energies surrounding you. It provides a visual language for the subconscious to communicate.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Experience the Magic of Tarot</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our Tarot sessions in Lucknow are designed to bring profound clarity to your most pressing questions. We use various esoteric spreads to explore:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">✨ Personal Spiritual Growth</li>
              <li className="flex items-center gap-3">✨ Love and Relationship Dynamics</li>
              <li className="flex items-center gap-3">✨ Decision Making and Clarity</li>
              <li className="flex items-center gap-3">✨ Energy Alignment and Balance</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Guided by Symbolism and Intuition</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every card pulled is a stepping stone toward understanding your path better. Let the symbols and archetypes of the Tarot illuminate your journey.
            </p>
          </section>
        </div>
      }
    />
  );
}
