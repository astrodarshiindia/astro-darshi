import SEOLayout from '@/components/SEOLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Astrologers in Lucknow - Astro Darshi',
  description: 'Connect with the best astrologers in Lucknow for all your cosmic and spiritual needs. From Vedic Astrology to Tarot, we offer comprehensive consultations.',
  keywords: 'best astrologers in lucknow, astrologer lucknow, spiritual consultation, cosmic guidance',
};

export default function BestAstrologersLucknow() {
  return (
    <SEOLayout
      title="Best Astrologers in Lucknow"
      description="Your premier destination for cosmic wisdom and spiritual guidance in Lucknow. Our collective expertise encompasses Vedic Astrology, Tarot, and Gemology."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">A Hub of Cosmic Wisdom in Lucknow</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Lucknow has always been a center for learning and spirituality. We continue that tradition by bringing the highest quality of astrological services to the city.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Comprehensive Spiritual Services</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer a wide range of services to cater to every aspect of your spiritual and material life. Our consultations are confidential and insightful.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">✨ Expert Vedic Astrology</li>
              <li className="flex items-center gap-3">✨ Intuitive Tarot Spreads</li>
              <li className="flex items-center gap-3">✨ Sacred Gemstone Consultation</li>
              <li className="flex items-center gap-3">✨ Holistic Life Coaching</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Trust and Authenticity</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join the countless individuals in Lucknow who have found clarity and purpose through our services. Your cosmic journey is unique, and we are here to guide you every step of the way.
            </p>
          </section>
        </div>
      }
    />
  );
}
