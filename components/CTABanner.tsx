'use client';

import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useSiteSettings } from '@/lib/SiteSettingsContext';

function KundliGrid() {
  const houses = Array.from({ length: 12 });
  return (
    <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-px bg-white/10 p-px">
      {houses.map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center bg-[#0a0f1e]/80 text-[9px] font-mono text-white/20"
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default function CTABanner() {
  const { t } = useLanguage();
  const { whatsappHref } = useSiteSettings();

  return (
    <section className="relative overflow-hidden py-0">
      <div className="relative bg-[#060a14] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(37,99,235,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(99,102,241,0.12),transparent_50%)]" />

        <div className="section-container relative grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:py-28">
          {/* Copy */}
          <div className="relative z-10">
            <h2 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {t('cta.title')}{' '}
              <span className="italic text-blue-400">{t('cta.title.highlight')}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg">
              {t('cta.subtitle')}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]"
              >
                {t('cta.button.book')}
                <ArrowRight size={14} />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-white/30 hover:bg-white/5"
              >
                <MessageCircle size={16} />
                {t('cta.button.whatsapp')}
              </a>
            </div>
          </div>

          {/* Kundli visual */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-blue-900/30">
              <KundliGrid />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border border-blue-400/30 bg-[#060a14]/90 px-6 py-4 text-center backdrop-blur-sm">
                  <p className="font-serif text-lg text-blue-200">{t('cta.chart.title')}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {t('cta.chart.subtitle')}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur md:block">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                {t('cta.response.label')}
              </p>
              <p className="font-serif text-xl text-white">{t('cta.response.value')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
