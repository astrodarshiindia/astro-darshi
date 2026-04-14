'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Wand2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Vedic Astrology',
      description: 'Explore your cosmic blueprint through ancient vedic astrology principles',
      icon: Star,
      features: [
        'Birth Chart Analysis',
        'Planetary Positioning',
        'Life Path Predictions',
        'Career Guidance',
        'Relationship Insights',
      ],
      color: 'from-primary to-primary/50',
    },
    {
      id: 2,
      title: 'Tarot Card Reading',
      description: 'Gain spiritual clarity and intuitive guidance through tarot wisdom',
      icon: Wand2,
      features: [
        'Personal Guidance',
        'Love & Relationship',
        'Career Questions',
        'Spiritual Journey',
        'Energy Healing Insights',
      ],
      color: 'from-secondary to-secondary/50',
    },
  ];

  return (
    <section className="relative py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Sacred Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the celestial wisdom tailored to illuminate your life's journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="cosmic-border glass-effect hover:border-primary hover:shadow-lg transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2"
                style={{
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <CardHeader className="space-y-4">
                  <div className={`inline-flex w-fit p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                    <IconComponent size={28} className="text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="btn-gold w-full group-hover:glow-effect">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-20 p-8 cosmic-border glass-effect rounded-lg max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-muted-foreground mb-6">
            Whether you seek clarity through vedic astrology or intuitive guidance through tarot, 
            Astro Darshini is here to light your path with cosmic wisdom.
          </p>
          <Link href="/contact">
            <Button className="btn-gold px-8 py-6">Schedule Your Session</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
