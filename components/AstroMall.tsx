'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useSelectedService } from '@/lib/SelectedServiceContext';
import { useMemo } from 'react';
import { useProducts } from '@/hooks/useProducts';
import MallShowcaseCard, { MallShowcaseSkeleton } from './products/MallShowcaseCard';

const TRUST_PILLS = [
  { icon: ShieldCheck, label: 'Lab certified' },
  { icon: Sparkles, label: 'Energized stones' },
  { icon: Zap, label: 'Kundli-matched advice' },
];

export default function AstroMall() {
  const { t } = useLanguage();
  const { selectedService } = useSelectedService();
  const { products, loading, error } = useProducts();

  const filteredProducts = useMemo(() => {
    if (!selectedService || selectedService === 'matrimonial') return products;

    if (selectedService === 'gemstone') {
      const gemstoneKeywords = [
        'sapphire', 'ruby', 'emerald', 'diamond', 'pearl', 'coral', 'eye',
        'hessonite', 'stone', 'gemstone', 'panna', 'manak', 'pukhraj', 'neelam', 'moti', 'ring',
      ];
      return products.filter(
        (p) =>
          gemstoneKeywords.some((kw) => p.name.toLowerCase().includes(kw)) ||
          (p.description && gemstoneKeywords.some((kw) => p.description!.toLowerCase().includes(kw)))
      );
    }

    if (selectedService === 'vastu') {
      return products.filter(
        (p) =>
          p.name.toLowerCase().includes('vastu') ||
          (p.description && p.description.toLowerCase().includes('vastu'))
      );
    }

    return products;
  }, [products, selectedService]);

  const heroProduct = filteredProducts[0];
  const sideProducts = filteredProducts.slice(1, 3);
  const moreProducts = filteredProducts.slice(3);

  return (
    <section
      id="astro-mall"
      className="relative overflow-hidden bg-[#06080f] py-16 text-white md:py-24"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="section-container relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(260px,340px)_1fr] lg:gap-14 xl:gap-20">
          {/* Editorial panel */}
          <div className="flex flex-col lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-[2rem] leading-[1.08] sm:text-4xl md:text-[2.75rem]">
              {t('mall.title')}{' '}
              <span className="italic text-amber-300">{t('mall.title.highlight')}</span>{' '}
              {t('mall.mall')}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              {t('mall.subtitle')}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {TRUST_PILLS.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] text-slate-300"
                >
                  <pill.icon size={13} className="text-amber-400/90" />
                  {pill.label}
                </span>
              ))}
            </div>

            {!loading && filteredProducts.length > 0 && (
              <Link
                href="/astromall"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-100 transition-all hover:bg-amber-400 hover:text-slate-900"
              >
                Explore full collection
                <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {/* Product vitrine */}
          <div>
            {loading ? (
              <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5">
                <MallShowcaseSkeleton hero />
                <MallShowcaseSkeleton />
                <MallShowcaseSkeleton />
              </div>
            ) : error ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
                <p className="text-slate-400">{error}</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-20 text-center">
                <Sparkles className="mx-auto mb-4 text-amber-400/50" size={28} />
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {selectedService ? 'No products for this service' : t('mall.coming_soon')}
                </p>
                <Link
                  href="/astromall"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-300 hover:underline"
                >
                  Visit Astro Mall
                  <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <div className="space-y-4 md:space-y-5">
                {/* Bento vitrine — hero + stack */}
                <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5 md:min-h-[520px]">
                  {heroProduct && (
                    <div className="md:row-span-2">
                      <MallShowcaseCard product={heroProduct} size="hero" />
                    </div>
                  )}
                  {sideProducts.map((product) => (
                    <MallShowcaseCard
                      key={product.id}
                      product={product}
                      size="standard"
                    />
                  ))}
                  {filteredProducts.length === 1 && (
                    <div className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center md:row-span-2">
                      <p className="font-serif text-lg text-slate-400">More pieces arriving soon</p>
                      <Link
                        href="/astromall"
                        className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 hover:underline"
                      >
                        View mall
                      </Link>
                    </div>
                  )}
                  {filteredProducts.length === 2 && (
                    <div className="flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center">
                      <p className="text-sm text-slate-500">New arrivals coming</p>
                    </div>
                  )}
                </div>

                {/* Additional products row */}
                {moreProducts.length > 0 && (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                    {moreProducts.map((product) => (
                      <MallShowcaseCard
                        key={product.id}
                        product={product}
                        size="standard"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
