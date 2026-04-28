'use client';

import { Star, ShieldCheck, Award } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function AstrologerProfile() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-32 relative bg-muted/50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl text-foreground leading-tight">
                {t('profile.title')} <span className="text-primary italic">{t('profile.title.highlight')}</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                {t('profile.description')}
              </p>
            </div>

            {/* Credential Grid */}
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="p-8 rounded-3xl bg-card border border-border space-y-4 hover:border-primary/20 transition-all duration-300">
                <ShieldCheck className="text-primary" size={28} />
                <h3 className="text-xl font-medium">{t('profile.cred1.title')}</h3>
                <p className="text-muted-foreground font-light">{t('profile.cred1.desc')}</p>
              </div>
              <div className="p-8 rounded-3xl bg-card border border-border space-y-4 hover:border-primary/20 transition-all duration-300">
                <Award className="text-primary" size={28} />
                <h3 className="text-xl font-medium">{t('profile.cred2.title')}</h3>
                <p className="text-muted-foreground font-light">{t('profile.cred2.desc')}</p>
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-8 pt-8">
              <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-primary">{t('profile.expertise.title')}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  t('profile.expertise.1'),
                  t('profile.expertise.2'),
                  t('profile.expertise.3'),
                  t('profile.expertise.4'),
                  t('profile.expertise.5'),
                ].map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-2.5 rounded-full bg-accent border border-border text-foreground/70 text-sm font-medium tracking-wide hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
