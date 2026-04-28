'use client';

import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      id: 1,
      name: "Rahul",
      location: "Lucknow",
      text: "Aap ki guidance se meri job problem solve hui, 2 mahine me result mila.",
    },
    {
      id: 2,
      name: "Neha",
      location: "Delhi",
      text: "Marriage delay issue clear hua, bahut accurate prediction tha.",
    },
    {
      id: 3,
      name: "Amit",
      location: "Mumbai",
      text: "Life was stuck, but your remedies worked like magic. Highly recommended!",
    },
    {
      id: 4,
      name: "Priya",
      location: "Bangalore",
      text: "Career transition was smooth after your consultation. Thank you!",
    },
    {
      id: 5,
      name: "Vikram",
      location: "Jaipur",
      text: "Accurate and very professional service. The best in the field.",
    },
  ];

  return (
    <section className="py-12 md:py-32 relative bg-muted/50 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-google text-foreground mb-4">
            Our <span className="text-primary italic">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg font-google max-w-2xl mx-auto">
            Real stories from people who found clarity and success through our guidance.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 group flex flex-col min-w-[300px] md:min-w-[380px] snap-center"
            >
              <Quote className="text-primary/10 mb-6" size={28} />
              
              <p className="text-foreground/80 font-google text-base md:text-lg leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-border/50">
                <p className="text-foreground font-semibold font-google">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm font-google mt-0.5">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
