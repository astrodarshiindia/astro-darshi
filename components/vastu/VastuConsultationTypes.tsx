'use client';

import { Video, MapPin, Check, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function VastuConsultationTypes() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">{t('vastu.types.title')}</h2>
          <p className="text-slate-400 text-lg">
            {t('vastu.types.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Online Consultation */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] hover:bg-white/10 transition-all duration-500 group flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <Video size={32} />
              </div>
              <span className="px-4 py-1 rounded-full bg-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap">{t('vastu.types.online.badge')}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif mb-4">{t('vastu.types.online.title')}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
              {t('vastu.types.online.desc')}
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                t('vastu.types.online.f1'),
                t('vastu.types.online.f2'),
                t('vastu.types.online.f3'),
                t('vastu.types.online.f4')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link href="#booking-form" className="w-full mt-auto">
              <Button className="w-full rounded-full h-12 sm:h-14 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-sm sm:text-base">
                {t('vastu.types.online.btn')}
              </Button>
            </Link>
          </div>

          {/* Physical Visit */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] hover:bg-white/10 transition-all duration-500 flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                <MapPin size={32} />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif mb-4">{t('vastu.types.visit.title')}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
              {t('vastu.types.visit.desc')}
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                t('vastu.types.visit.f1'),
                t('vastu.types.visit.f2'),
                t('vastu.types.visit.f3'),
                t('vastu.types.visit.f4')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link href="#booking-form" className="w-full mt-auto">
              <Button className="w-full rounded-full h-12 sm:h-14 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold uppercase tracking-wider text-sm sm:text-base">
                {t('vastu.types.visit.btn')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
