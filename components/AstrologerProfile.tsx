'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export default function AstrologerProfile() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/10 to-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500 blur-xl"></div>
            <div className="relative aspect-square cosmic-border glass-effect rounded-lg flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-4">
                <div className="text-6xl">✨</div>
                <p className="text-muted-foreground">Professional Photo Coming Soon</p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Meet Darshini</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A dedicated vedic astrologer and tarot reader with over a decade of experience in guiding 
                seekers through life's cosmic journey. Darshini combines ancient vedic wisdom with intuitive 
                spiritual guidance to provide transformative readings.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-primary">Expertise & Credentials</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Star size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Vedic Astrology Specialist</p>
                    <p className="text-sm text-muted-foreground">Expert in birth chart analysis and planetary predictions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Tarot Master Reader</p>
                    <p className="text-sm text-muted-foreground">Certified in classical and intuitive tarot interpretations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Spiritual Counselor</p>
                    <p className="text-sm text-muted-foreground">Providing holistic guidance for life's challenges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-primary">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Birth Chart Analysis',
                  'Career Guidance',
                  'Relationship Insights',
                  'Life Purpose',
                  'Planetary Transits',
                  'Tarot Readings',
                  'Spiritual Growth',
                  'Energy Healing',
                ].map((spec, idx) => (
                  <Badge
                    key={idx}
                    className="bg-primary/20 text-primary hover:bg-primary/30 border-primary/30"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
