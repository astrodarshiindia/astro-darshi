'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="cosmic-border glass-effect rounded-lg p-8 md:p-16 text-center space-y-8 max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center">
            <Sparkles size={48} className="text-primary animate-spin" style={{ animationDuration: '4s' }} />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Illuminate Your Cosmic Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you seek clarity through vedic astrology or intuitive guidance through tarot, 
              take the first step on your transformative journey today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="btn-gold px-8 py-6 text-lg hover:glow-effect">
                Book Your Consultation
              </Button>
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="btn-outline-gold px-8 py-6 text-lg"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust message */}
          <p className="text-sm text-muted-foreground pt-4">
            Join 500+ seekers who have found clarity and direction
          </p>
        </div>
      </div>
    </section>
  );
}
