'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Business Owner',
      text: 'Astro Darshini\'s vedic astrology reading gave me the clarity I needed during a challenging career transition. The insights were remarkably accurate and transformative.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Anjali Verma',
      role: 'Healthcare Professional',
      text: 'The tarot readings have been incredibly helpful in understanding my relationships and personal growth. Darshini\'s intuition is truly exceptional.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Neha Patel',
      role: 'Creative Professional',
      text: 'The birth chart analysis provided me with a deeper understanding of my strengths and potential. I\'ve never felt more aligned with my purpose.',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Celestial Blessings</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from those whose lives have been transformed by cosmic wisdom
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="cosmic-border glass-effect hover:border-primary transition-all duration-500 hover:shadow-lg hover:scale-105"
              style={{
                animation: `slideIn 0.6s ease-out ${0.3 + index * 0.1}s both`
              }}
            >
              <CardContent className="pt-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Trusted by seekers of cosmic wisdom</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground">Readings Given</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
