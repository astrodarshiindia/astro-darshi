'use client';

import { Search, Compass, Hammer, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function VastuProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('vastu.process.1.title'),
      description: t('vastu.process.1.desc')
    },
    {
      icon: Compass,
      title: t('vastu.process.2.title'),
      description: t('vastu.process.2.desc')
    },
    {
      icon: Hammer,
      title: t('vastu.process.3.title'),
      description: t('vastu.process.3.desc')
    },
    {
      icon: Zap,
      title: t('vastu.process.4.title'),
      description: t('vastu.process.4.desc')
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px]" />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
              <Zap size={16} />
              <span>{t('vastu.process.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              {t('vastu.process.title')} <br />
              <span className="text-primary italic">{t('vastu.process.highlight')}</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('vastu.process.subtitle')}
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                t('vastu.process.f1'),
                t('vastu.process.f2'),
                t('vastu.process.f3'),
                t('vastu.process.f4')
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
