'use client';

import { Sparkles, Heart, ShieldCheck, Search, Users, HandHeart } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';

export default function MatrimonialFeatures({ onRegisterClick }: { onRegisterClick: () => void }) {
  const { t } = useLanguage();

  const features = [1, 2, 3, 4].map(num => ({
    title: t(`matrimonial.features.${num}` as any).split(':')[0] || "Premium Feature",
    desc: t(`matrimonial.features.${num}` as any).split(':')[1] || t(`matrimonial.features.${num}` as any)
  }));

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-rose-50 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
              <Sparkles size={14} />
              <span>{t('matrimonial.features.title')}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Designed for <span className="text-primary italic">Meaningful</span> Connections
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              We understand that marriage is a sacred union. Our platform is built on trust, 
              tradition, and the science of astrology to help you find your soulmate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl border border-slate-50 hover:border-primary/10 hover:bg-slate-50 transition-all">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart size={16} className="text-primary fill-primary/20" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden shadow-2xl">
              {/* Abstract pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-primary/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={40} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif">{t('matrimonial.privacy.title')}</h3>
                  <div className="space-y-4">
                    <p className="text-xl font-medium text-primary">
                      “{t('matrimonial.privacy.text1')}”
                    </p>
                    <p className="text-slate-300 text-lg italic leading-relaxed">
                      {t('matrimonial.privacy.text2')}
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={onRegisterClick}
                    className="w-full py-8 text-lg rounded-2xl bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/40 group"
                  >
                    <span>{t('matrimonial.cta.register')}</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-6 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-green-500" />
                    <span>Safe & Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-blue-500" />
                    <span>Verified Users</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
