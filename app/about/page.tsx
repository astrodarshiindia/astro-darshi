'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { title: t('about.values.1.title'), desc: t('about.values.1.desc') },
    { title: t('about.values.2.title'), desc: t('about.values.2.desc') },
    { title: t('about.values.3.title'), desc: t('about.values.3.desc') },
  ];

  const pillars = [
    { value: '10+', label: t('about.pillar1.label') },
    { value: '500+', label: t('about.pillar2.label') },
    { value: 'Lucknow', label: t('about.pillar3.label') },
  ];

  const cards = [
    { title: t('about.card1.title'), desc: t('about.card1.desc') },
    { title: t('about.card2.title'), desc: t('about.card2.desc') },
    { title: t('about.card3.title'), desc: t('about.card3.desc') },
  ];

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <Header />

      <section className="border-b border-stone-200/80 bg-white pt-[110px] pb-16 md:pb-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[2.35rem] leading-[1.08] tracking-tight sm:text-5xl md:text-[3.25rem]">
              {t('about.hero.title')}{' '}
              <span className="font-serif italic text-amber-800">{t('about.hero.highlight')}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              {t('about.hero.subtitle')}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200/80 pt-10 md:max-w-xl">
            {pillars.map((item) => (
              <div key={item.label}>
                <p className="font-serif text-2xl text-amber-800 md:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs text-stone-500 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {t('about.story.title')}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-stone-500">
                <MapPin size={16} className="text-amber-700" />
                {t('about.story.location')}
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200/80 bg-white p-8 shadow-sm sm:rounded-3xl sm:p-10">
              <h3 className="text-lg font-semibold">{t('about.values.title')}</h3>
              <ul className="mt-6 space-y-6">
                {values.map((item) => (
                  <li key={item.title} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                    <p className="font-medium text-stone-900">{item.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/80 bg-[#f5f0e8] py-14 md:py-20">
        <div className="section-container">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-xl leading-relaxed text-stone-800 md:text-2xl">
              &ldquo;{t('about.quote')}&rdquo;
            </p>
            <footer className="mt-6 text-sm text-stone-500">{t('about.quote.author')}</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 h-1 w-8 rounded-full bg-amber-600" />
                <h4 className="font-semibold text-stone-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200/80 bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-stone-200/80 bg-stone-50 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">{t('about.cta.title')}</h2>
              <p className="mt-2 text-sm text-stone-600">{t('about.cta.subtitle')}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
            >
              {t('about.cta.button')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
