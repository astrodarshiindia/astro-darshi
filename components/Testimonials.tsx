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
  name,
  location,
  text,
  index,
  large = false,
}: {
  name: string;
  location: string;
  text: string;
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
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold ${color}`}
        >
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [1, 2, 3, 4, 5].map((id) => ({
    id,
    name: t(`testimonials.item.${id}.name`),
    location: t(`testimonials.item.${id}.location`),
    text: t(`testimonials.item.${id}.text`),
    featured: id === 1,
  }));

  const featured = testimonials.find((item) => item.featured) || testimonials[0];
  const rest = testimonials.filter((item) => item.id !== featured.id);

  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-16 md:py-28 dark:bg-[#080b12]">
      <div className="section-container">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              {t('testimonials.heading')}{' '}
              <span className="italic text-primary">{t('testimonials.heading.highlight')}</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground md:text-right">
            {t('testimonials.note')}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TestimonialCard
              name={featured.name}
              location={featured.location}
              text={featured.text}
              index={0}
              large
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.slice(0, 2).map((item, i) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                location={item.location}
                text={item.text}
                index={i + 1}
              />
            ))}
          </div>
          {rest.slice(2).map((item, i) => (
            <div key={item.id} className="md:col-span-1 lg:col-span-4">
              <TestimonialCard
                name={item.name}
                location={item.location}
                text={item.text}
                index={i + 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
