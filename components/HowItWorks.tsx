'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t('how.step1.title'),
      desc: t('how.step1.desc'),
    },
    {
      num: '02',
      title: t('how.step2.title'),
      desc: t('how.step2.desc'),
    },
    {
      num: '03',
      title: t('how.step3.title'),
      desc: t('how.step3.desc'),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0c1222] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[80px]" />

      <div className="section-container relative">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl tracking-tight sm:text-4xl md:text-5xl">
              {t('how.title')}{' '}
              <span className="italic text-blue-400">{t('how.title.highlight')}</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
            {t('how.subtitle')}
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.num} className="relative px-8 first:pl-0 last:pr-0">
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 flex items-center gap-1 text-slate-600">
                  <div className="h-px w-full min-w-[60px] bg-gradient-to-r from-slate-600 to-transparent" />
                  <ArrowRight size={14} />
                </div>
              )}
              <p className="font-serif text-6xl leading-none text-white/[0.07]">{step.num}</p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-0 md:hidden">
          {steps.map((step, index) => (
            <div key={step.num} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 font-mono text-xs text-blue-300">
                  {step.num}
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-blue-400/40 to-transparent" />
                )}
              </div>
              <div className="pt-1.5">
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">{t('how.note')}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-transform hover:scale-[1.02]"
          >
            {t('how.cta')}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
