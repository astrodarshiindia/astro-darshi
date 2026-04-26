'use client';

import { Users, Star, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function MatrimonialHowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { step: "01", key: "matrimonial.how.step1", icon: Users, color: "bg-blue-50 text-blue-600" },
    { step: "02", key: "matrimonial.how.step2", icon: Star, color: "bg-amber-50 text-amber-600" },
    { step: "03", key: "matrimonial.how.step3", icon: CheckCircle2, color: "bg-green-50 text-green-600" },
    { step: "04", key: "matrimonial.how.step4", icon: ShieldCheck, color: "bg-rose-50 text-rose-600" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">{t('matrimonial.how.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 text-lg">
            Our traditional approach combined with modern convenience helps you find the perfect partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-6 right-8 text-5xl font-serif text-slate-100 font-bold group-hover:text-primary/5 transition-colors">
                {item.step}
              </div>
              
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t(item.key).split(' ').slice(0, 2).join(' ')}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {t(item.key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
