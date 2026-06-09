'use client';

import { Quote } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function AstrologerProfile() {
  const { t } = useLanguage();

  const expertise = [
    t('profile.expertise.1'),
    t('profile.expertise.2'),
    t('profile.expertise.3'),
    t('profile.expertise.4'),
    t('profile.expertise.5'),
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-28">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[340px_1fr] lg:gap-16 xl:grid-cols-[380px_1fr]">
          {/* Portrait column */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full border border-primary/15" />
                  <div className="absolute -inset-16 rounded-full border border-dashed border-primary/10" />
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 font-serif text-6xl text-primary">
                    D
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6 pt-20">
                <p className="font-serif text-2xl text-white">Darshi</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  Vedic Astrologer & Tarot Reader
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-card px-4 py-3 text-center">
                <p className="font-serif text-2xl text-primary">10+</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Years</p>
              </div>
              <div className="rounded-2xl border border-border bg-card px-4 py-3 text-center">
                <p className="font-serif text-2xl text-primary">5.0</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-primary/80">
              Your guide
            </p>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              {t('profile.title')}{' '}
              <span className="italic text-primary">{t('profile.title.highlight')}</span>
            </h2>

            <div className="relative mt-8 border-l-2 border-primary/30 pl-6">
              <Quote
                size={20}
                className="absolute -left-3 -top-1 text-primary/40"
                fill="currentColor"
              />
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {t('profile.description')}
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/80 bg-muted/30 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  Credential
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold">
                  {t('profile.cred1.title')}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{t('profile.cred1.desc')}</p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-muted/30 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  Credential
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold">
                  {t('profile.cred2.title')}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{t('profile.cred2.desc')}</p>
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
                {t('profile.expertise.title')}
              </p>
              <ul className="flex flex-wrap gap-2">
                {expertise.map((spec, idx) => (
                  <li
                    key={idx}
                    className="rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground/80"
                  >
                    <span className="mr-2 font-mono text-[10px] text-primary/60">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
