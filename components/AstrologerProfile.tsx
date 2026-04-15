'use client';

import { Star, ShieldCheck, Award } from 'lucide-react';

export default function AstrologerProfile() {
  return (
    <section className="py-24 md:py-32 relative bg-muted/20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl text-foreground leading-tight">
                Meet <span className="text-primary italic">Darshini</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                A dedicated Vedic Astrologer and Tarot Reader with over a decade of experience in guiding 
                seekers through life's cosmic journey. Darshini combines ancient Vedic wisdom with intuitive 
                spiritual guidance to provide transformative readings tailored to your unique path.
              </p>
            </div>

            {/* Credential Grid */}
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="p-8 rounded-3xl bg-card border border-border space-y-4 hover:border-primary/20 transition-all duration-300">
                <ShieldCheck className="text-primary" size={28} />
                <h3 className="text-xl font-medium">Vedic Specialist</h3>
                <p className="text-muted-foreground font-light">Expert in Sidereal calculations and planetary periods (Dashas).</p>
              </div>
              <div className="p-8 rounded-3xl bg-card border border-border space-y-4 hover:border-primary/20 transition-all duration-300">
                <Award className="text-primary" size={28} />
                <h3 className="text-xl font-medium">Certified Master</h3>
                <p className="text-muted-foreground font-light">Deeply trained in classical tarot symbolism and intuitive spreads.</p>
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-8 pt-8">
              <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-primary">Core Expertise</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Career Guidance',
                  'Relationship Insights',
                  'Life Purpose',
                  'Spiritual Growth',
                  'Energy Alignment',
                ].map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-2.5 rounded-full bg-accent border border-border text-foreground/70 text-sm font-medium tracking-wide hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
