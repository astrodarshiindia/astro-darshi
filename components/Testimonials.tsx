'use client';

import { Star } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const AVATAR_COLORS = [
  'bg-rose-100 text-rose-700',
  'bg-sky-100 text-sky-700',
  'bg-emerald-100 text-emerald-700',
  'bg-violet-100 text-violet-700',
  'bg-amber-100 text-amber-800',
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul',
    location: 'Lucknow',
    text: 'Aap ki guidance se meri job problem solve hui, 2 mahine me result mila.',
    featured: true,
  },
  {
    id: 2,
    name: 'Neha',
    location: 'Delhi',
    text: 'Marriage delay issue clear hua, bahut accurate prediction tha.',
    featured: false,
  },
  {
    id: 3,
    name: 'Amit',
    location: 'Mumbai',
    text: 'Life was stuck, but your remedies worked like magic. Highly recommended!',
    featured: false,
  },
  {
    id: 4,
    name: 'Priya',
    location: 'Bangalore',
    text: 'Career transition was smooth after your consultation. Thank you!',
    featured: false,
  },
  {
    id: 5,
    name: 'Vikram',
    location: 'Jaipur',
    text: 'Accurate and very professional service. The best in the field.',
    featured: false,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} fill="currentColor" />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
  large = false,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
  large?: boolean;
}) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <article
      className={`flex flex-col rounded-2xl border border-border/70 bg-card p-6 transition-shadow hover:shadow-lg ${
        large ? 'md:p-8' : ''
      }`}
    >
      <Stars />
      <p
        className={`mt-4 flex-grow leading-relaxed text-foreground/85 ${
          large ? 'font-serif text-xl md:text-2xl md:leading-snug' : 'text-sm md:text-base'
        }`}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className={`mt-6 flex items-center gap-3 border-t border-border/50 pt-5`}>
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold ${color}`}
        >
          {testimonial.name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const featured = TESTIMONIALS.find((t) => t.featured) || TESTIMONIALS[0];
  const rest = TESTIMONIALS.filter((t) => t.id !== featured.id);

  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-16 md:py-28 dark:bg-[#080b12]">
      <div className="section-container">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              Stories from <span className="italic text-primary">real people</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground md:text-right">
            Hindi & English consultations. Names shortened for privacy.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TestimonialCard testimonial={featured} index={0} large />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.slice(0, 2).map((item, i) => (
              <TestimonialCard key={item.id} testimonial={item} index={i + 1} />
            ))}
          </div>
          {rest.slice(2).map((item, i) => (
            <div key={item.id} className="md:col-span-1 lg:col-span-4">
              <TestimonialCard testimonial={item} index={i + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
