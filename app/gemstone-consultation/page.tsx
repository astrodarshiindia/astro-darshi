import SEOLayout from '@/components/SEOLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gemstone Consultation Online - Astro Darshi',
  description: 'Expert gemstone consultation for spiritual and material well-being. Find your lucky stone based on your birth chart and planetary periods.',
  keywords: 'gemstone consultation, birthstone analysis, lucky gemstones, vedic gemology, ruby, sapphire, emerald',
};

export default function GemstoneConsultation() {
  return (
    <SEOLayout
      title="Sacred Gemstone Wisdom"
      description="Harness the vibrational power of gemstones to strengthen planetary energies and bring balance to your life."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">The Energy of the Earth</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Gemstones are conduits for planetary energy. Each stone resonates with a specific planet, and when chosen correctly, can enhance a planet's positive influence or mitigate its challenges.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Personalized Gem Selection</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our gemstone recommendation process is based on deep astrological analysis, ensuring the stone you wear is in perfect harmony with your energy:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">✨ Analysis of Weak Planets</li>
              <li className="flex items-center gap-3">✨ Identification of Benefic Planets</li>
              <li className="flex items-center gap-3">✨ Weight and Purity Consultation</li>
              <li className="flex items-center gap-3">✨ Prana Pratishtha and Wearing Rituals</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">A Natural Path to Success</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From the vibrant Ruby for vitality to the calming Blue Sapphire for discipline, each gemstone has a unique role. Our goal is to help you find the stone that serves your highest good and supports your life journey.
            </p>
          </section>
        </div>
      }
    />
  );
}
