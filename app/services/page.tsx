import type { Metadata } from 'next';
import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Astro Darshi',
  description: 'Explore vedic astrology and tarot card reading services tailored for your cosmic journey.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Birth Chart Analysis',
      description: 'Deep analysis of your natal chart to understand your personality, strengths, and life path.',
      details: [
        'Planetary positions at birth',
        'House analysis and meanings',
        'Zodiac sign interpretations',
        'Aspect analysis for relationships',
        'Dasha predictions',
      ],
      duration: '60 minutes',
    },
    {
      id: 2,
      title: 'Planetary Predictions',
      description: 'Get insights into upcoming planetary transits and their influence on your life.',
      details: [
        'Current planetary movements',
        'Upcoming opportunities',
        'Challenges and solutions',
        'Timing for important decisions',
        'Remedial measures (Upayes)',
      ],
      duration: '45 minutes',
    },
    {
      id: 3,
      title: 'Career Guidance',
      description: 'Vedic insights to help you find your ideal career path and professional growth.',
      details: [
        '10th house analysis',
        'Career compatibility',
        'Best time for career changes',
        'Business opportunities',
        'Success indicators',
      ],
      duration: '50 minutes',
    },
    {
      id: 4,
      title: 'Relationship Insights',
      description: 'Understand your relationship patterns and compatibility with your partner.',
      details: [
        'Synastry analysis',
        'Compatibility report',
        'Timing for commitments',
        'Family harmony insights',
        'Guidance for challenges',
      ],
      duration: '60 minutes',
    },
    {
      id: 5,
      title: 'Tarot Card Reading',
      description: 'Intuitive guidance through tarot to illuminate your current situation and future path.',
      details: [
        'Three-card spread',
        'Detailed card interpretations',
        'Life advice and guidance',
        'Energy clearing insights',
        'Spiritual messages',
      ],
      duration: '45 minutes',
    },
    {
      id: 6,
      title: 'Life Purpose Session',
      description: 'Discover your soul\'s purpose and life mission through vedic wisdom.',
      details: [
        'Nodal axis analysis',
        'Soul karmic lessons',
        'Life purpose indicators',
        'Spiritual growth path',
        'Fulfillment strategies',
      ],
      duration: '75 minutes',
    },
  ];

  return (
    <main className="relative">
      <CosmicBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-18 pb-10 md:pb-12">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text pt-6">Our Sacred Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive vedic astrology and tarot card readings designed to illuminate your cosmic path
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="cosmic-border glass-effect hover:border-primary transition-all duration-300"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-primary">
                      {service.id % 2 === 0 ? (
                        <Sparkles size={24} />
                      ) : (
                        <Star size={24} />
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="text-sm">
                      <span className="text-primary font-semibold">Duration:</span>{' '}
                      <span className="text-muted-foreground">{service.duration}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="section-container">
          <Card className="cosmic-border glass-effect max-w-2xl mx-auto text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-muted-foreground mb-6">
              Choose the service that resonates with your soul and let cosmic wisdom guide you.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 btn-gold rounded-lg font-semibold"
            >
              Book Your Session
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
