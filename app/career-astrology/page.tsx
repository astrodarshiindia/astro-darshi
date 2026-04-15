import SEOLayout from '@/components/SEOLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Astrology & Business Success - Astro Darshi',
  description: 'Expert career astrology and business guidance. Find the right path for your success based on your birth chart and planetary periods.',
  keywords: 'career astrology, business success, vocational astrology, career path, career guidance, zodiac career',
};

export default function CareerAstrology() {
  return (
    <SEOLayout
      title="Cosmic Career Guidance"
      description="Unlock the potential for professional success by aligning your career choices with your unique astrological blueprint."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Your Success, Written in the Stars</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your birth chart reveals the fields in which you are most likely to excel and the times when your professional life will be at its peak. By understanding these patterns, you can make informed decisions about your career path and business ventures.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Our Career Services</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer comprehensive analysis and guidance for your professional journey:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">✨ Career Path Identification</li>
              <li className="flex items-center gap-3">✨ Timing for New Beginnings</li>
              <li className="flex items-center gap-3">✨ Business Partnership Analysis</li>
              <li className="flex items-center gap-3">✨ Remedies for Career Growth</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Prosperity and Fulfillment</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're starting a new job, launching a business, or seeking a promotion, our career astrology services provide the insights you need to move forward with confidence and achieve your highest potential.
            </p>
          </section>
        </div>
      }
    />
  );
}
