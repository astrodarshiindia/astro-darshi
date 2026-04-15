'use client';

import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
      text: t('testimonials.1.text'),
    },
    {
      id: 2,
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
      text: t('testimonials.2.text'),
    },
    {
      id: 3,
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
      text: t('testimonials.3.text'),
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-muted/20">
      <div className="section-container relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl text-foreground">
            {t('testimonials.title')} <span className="text-primary italic">{t('testimonials.title.highlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="relative p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 transition-all duration-500 group"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/70 font-light italic leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-border">
                <p className="text-foreground font-medium">{testimonial.name}</p>
                <p className="text-muted-foreground/50 text-xs tracking-widest uppercase mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
