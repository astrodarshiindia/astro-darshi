'use client';

import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    "Qualified Experts team.",
    "Personalised Predictions (No software-based reading)",
    "100% Confidential Consultation",
    "Practical Remedies with full support (Tested & Effective)"
  ];

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-muted/50">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl md:text-5xl font-google text-foreground tracking-tight leading-tight">
                Why <span className="text-primary">Choose Us</span>
              </h2>
              <p className="text-muted-foreground text-lg font-google max-w-xl mx-auto">
                We combine ancient wisdom with modern precision to provide you with the most accurate and helpful guidance for your life journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/20 transition-all">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg font-google text-foreground/80 group-hover:text-foreground transition-colors">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
