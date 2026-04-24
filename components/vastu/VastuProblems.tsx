'use client';

import { AlertCircle, Home, TrendingDown, HeartPulse, Store } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function VastuProblems() {
  const { t } = useLanguage();
  
  const problems = [
    {
      icon: Home,
      title: t('vastu.problems.1.title'),
      description: t('vastu.problems.1.desc')
    },
    {
      icon: TrendingDown,
      title: t('vastu.problems.2.title'),
      description: t('vastu.problems.2.desc')
    },
    {
      icon: HeartPulse,
      title: t('vastu.problems.3.title'),
      description: t('vastu.problems.3.desc')
    },
    {
      icon: Store,
      title: t('vastu.problems.4.title'),
      description: t('vastu.problems.4.desc')
    }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-4">
            <AlertCircle size={16} />
            <span>{t('vastu.problems.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
            {t('vastu.problems.title')}
          </h2>
          <p className="text-slate-600 text-lg">
            {t('vastu.problems.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <problem.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
