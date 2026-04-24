'use client';

import { Home, Briefcase, Building2, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function VastuHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <Sparkles size={14} />
              <span>{t('vastu.hero.badge')}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-slate-900 leading-[1.2] md:leading-[1.1]">
              {t('vastu.hero.title')} <br />
              <span className="text-primary italic">{t('vastu.hero.highlight')}</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl font-light max-w-xl leading-relaxed">
              {t('vastu.hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
              {[
                { icon: Home, text: t('vastu.hero.home') },
                { icon: Briefcase, text: t('vastu.hero.business') },
                { icon: Building2, text: t('vastu.hero.office') }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm font-medium">
                  <item.icon size={18} className="text-primary/60" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#booking-form" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base font-bold tracking-wider uppercase transition-all hover:scale-105 bg-primary shadow-lg shadow-primary/20">
                  {t('vastu.hero.book')}
                </Button>
              </Link>
              <a 
                href="https://wa.me/919999999999?text=Hi, I want to book a Vastu consultation." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base font-bold tracking-wider uppercase border-2 border-slate-200 text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  <MessageCircle size={20} className="text-green-500" />
                  {t('vastu.hero.whatsapp')}
                </Button>
              </a>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000 mt-8 lg:mt-0">
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Balanced Home Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating element */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles size={20} className="sm:size-24" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-serif text-base sm:text-lg">{t('vastu.hero.success')}</div>
                    <div className="text-slate-500 text-[10px] sm:text-xs tracking-widest uppercase font-bold">{t('vastu.hero.success.desc')}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Compass element */}
            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl border border-slate-100 p-2 sm:p-4 animate-spin-slow flex items-center justify-center">
              <div className="relative w-full h-full border-2 border-primary/20 rounded-full flex items-center justify-center">
                <span className="absolute top-1 text-[8px] sm:text-[10px] font-bold text-slate-400">N</span>
                <span className="absolute bottom-1 text-[8px] sm:text-[10px] font-bold text-slate-400">S</span>
                <span className="absolute left-1 text-[8px] sm:text-[10px] font-bold text-slate-400">W</span>
                <span className="absolute right-1 text-[8px] sm:text-[10px] font-bold text-slate-400">E</span>
                <div className="w-1 h-8 sm:h-12 bg-primary/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
