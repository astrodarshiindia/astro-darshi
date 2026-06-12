'use client';

import { Fingerprint, HandHeart, Lock, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const stats = [
    { value: '10+', label: t('why.stat1.label') },
    { value: '500+', label: t('why.stat2.label') },
    { value: '100%', label: t('why.stat3.label') },
  ];

  const features = [
    {
      icon: Sparkles,
      title: t('why.feature1.title'),
      desc: t('why.feature1.desc'),
    },
    {
      icon: Fingerprint,
      title: t('why.feature2.title'),
      desc: t('why.feature2.desc'),
    },
    {
      icon: Lock,
      title: t('why.feature3.title'),
      desc: t('why.feature3.desc'),
    },
    {
      icon: HandHeart,
      title: t('why.feature4.title'),
      desc: t('why.feature4.desc'),
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-amber-200/60 bg-[#faf6ef] py-16 md:py-28 dark:border-amber-900/30 dark:bg-[#0f0d0a]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-12deg, transparent, transparent 28px, rgba(180,120,40,0.06) 28px, rgba(180,120,40,0.06) 29px)',
        }}
      />

      <div className="section-container relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-md text-[2.35rem] leading-[1.08] tracking-tight text-stone-900 sm:text-5xl md:text-[3.25rem] dark:text-stone-50">
              {t('why.title')}{' '}
              <span className="italic text-amber-700 dark:text-amber-400">
                {t('why.title.highlight')}
              </span>
              {t('why.title.suffix')}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone-600 dark:text-stone-400">
              {t('why.subtitle')}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-amber-900/10 pt-8 dark:border-amber-100/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-amber-800 dark:text-amber-300 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-stone-500 dark:text-stone-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-5 rounded-2xl border border-amber-900/8 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-700/20 hover:shadow-[0_12px_40px_rgba(120,80,20,0.08)] sm:p-6 dark:border-white/8 dark:bg-white/[0.03] dark:hover:border-amber-500/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  <feature.icon size={20} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
