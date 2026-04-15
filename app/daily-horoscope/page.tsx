import SEOLayout from '@/components/SEOLayout';
import { Metadata } from 'metadata';

export const metadata: Metadata = {
  title: 'Daily Horoscope & Zodiac Predictions - Astro Darshini',
  description: 'Your daily horoscope for all 12 zodiac signs. Get personalized insights into your day based on planetary movements and cosmic energy.',
  keywords: 'daily horoscope, zodiac predictions, personalized astrology, star signs, today horoscope',
};

export default function DailyHoroscope() {
  return (
    <SEOLayout
      title="Your Daily Horoscope"
      description="Navigate your day with the wisdom of the stars and align your energy with the cosmic flow."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">A Glimpse Into Your Day</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every day, the planetary positions shift, influencing the energy we experience. Our daily horoscope provides a roadmap, helping you make informed decisions in love, career, and personal growth.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Understand the Zodiac Signs</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're an ambitious Aries, a grounded Taurus, or a creative Gemini, our horoscopes are tailored to the unique traits of each sign:
            </p>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">♈ Aries</li>
              <li className="flex items-center gap-3">♉ Taurus</li>
              <li className="flex items-center gap-3">♊ Gemini</li>
              <li className="flex items-center gap-3">♋ Cancer</li>
              <li className="flex items-center gap-3">♌ Leo</li>
              <li className="flex items-center gap-3">♍ Virgo</li>
              <li className="flex items-center gap-3">♎ Libra</li>
              <li className="flex items-center gap-3">♏ Scorpio</li>
              <li className="flex items-center gap-3">♐ Sagittarius</li>
              <li className="flex items-center gap-3">♑ Capricorn</li>
              <li className="flex items-center gap-3">♒ Aquarius</li>
              <li className="flex items-center gap-3">♓ Pisces</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Clarity and Insight</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              By understanding the daily planetary influences, you can choose the best times for new beginnings, handle challenges with grace, and find opportunities in every moment.
            </p>
          </section>
        </div>
      }
    />
  );
}
