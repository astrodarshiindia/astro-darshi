'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  Sparkles, 
  Search, 
  Compass, 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  ShieldCheck, 
  Lightbulb,
  Briefcase,
  Heart,
  TrendingUp,
  Activity,
  ArrowRight,
  CheckCircle2,
  Users,
  Eye,
  Zap,
  LayoutGrid
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import VedicMandala from './VedicMandala';

export default function VedicAstrology() {
  const { t, language } = useLanguage();

  const methodology = [
    {
      id: 'janm',
      title: t('vedic.pillars.janm.title'),
      sub: t('vedic.pillars.janm.sub'),
      desc: t('vedic.pillars.janm.desc'),
      icon: Compass,
      color: 'bg-orange-500/10 text-orange-600'
    },
    {
      id: 'prashna',
      title: t('vedic.pillars.prashna.title'),
      sub: t('vedic.pillars.prashna.sub'),
      desc: t('vedic.pillars.prashna.desc'),
      icon: MessageCircle,
      color: 'bg-amber-500/10 text-amber-600'
    },
    {
      id: 'gochar',
      title: t('vedic.pillars.gochar.title'),
      sub: t('vedic.pillars.gochar.sub'),
      desc: t('vedic.pillars.gochar.desc'),
      icon: Calendar,
      color: 'bg-yellow-600/10 text-yellow-700'
    },
    {
      id: 'combined',
      title: t('vedic.combined.title'),
      sub: '(Integrated Wisdom)',
      desc: t('vedic.combined.desc'),
      icon: LayoutGrid,
      color: 'bg-red-600/10 text-red-700'
    }
  ];

  const solutions = [
    { key: 'career', icon: Briefcase, label: t('vedic.solutions.career') },
    { key: 'marriage', icon: Heart, label: t('vedic.solutions.marriage') },
    { key: 'business', icon: TrendingUp, label: t('vedic.solutions.business') },
    { key: 'health', icon: Activity, label: t('vedic.solutions.health') },
    { key: 'direction', icon: Compass, label: t('vedic.solutions.direction') },
  ];

  const deliverables = [
    { icon: Eye, text: t('vedic.deliverables.1') },
    { icon: Zap, text: t('vedic.deliverables.2') },
    { icon: Sparkles, text: t('vedic.deliverables.3') },
    { icon: Users, text: t('vedic.deliverables.4') },
  ];

  return (
    <section className="bg-[#fffcf5] text-[#2c1810] min-h-screen font-sans selection:bg-[#FF9933]/30 overflow-hidden">
      {/* Traditional Border/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-40 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
      
      {/* Decorative Corner Elements */}
      <div className="fixed top-0 left-0 w-32 h-32 opacity-10 pointer-events-none rotate-0">
        <VedicMandala />
      </div>
      <div className="fixed bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none rotate-180">
        <VedicMandala />
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF9933]/10 border border-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-8 animate-fade-in uppercase tracking-[0.2em]">
              <Sparkles size={14} />
              <span>{t('vedic.hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1a0f0f] mb-6 leading-tight tracking-tight">
              {t('vedic.hero.title')}
              <span className="block text-2xl md:text-3xl font-heading text-[#b45309] mt-4 font-normal italic opacity-90">
                {t('vedic.hero.subtitle')}
              </span>
            </h1>

            <div className="relative max-w-2xl mx-auto my-12">
               <div className="absolute -left-4 top-0 text-4xl text-[#FF9933]/30 font-serif">👉</div>
               <p className="text-xl md:text-2xl text-[#4a3728] font-light leading-relaxed italic">
                 {t('vedic.intro')}
               </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button className="bg-[#d97706] hover:bg-[#b45309] text-white px-10 py-7 text-lg rounded-full font-medium transition-all duration-300 shadow-xl shadow-orange-900/10 group">
                {t('vedic.cta.book')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button variant="outline" className="border-[#b45309]/30 text-[#b45309] hover:bg-orange-50 px-10 py-7 text-lg rounded-full font-medium transition-all duration-300">
                {t('vedic.cta.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Methodology */}
      <div className="py-20 bg-orange-50/50 border-y border-orange-100 relative">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-4">
               <div className="h-px w-12 bg-[#b45309]/30 self-center"></div>
               <span className="px-4 text-[#b45309] font-serif italic text-lg">{t('vedic.analyze.title')}</span>
               <div className="h-px w-12 bg-[#b45309]/30 self-center"></div>
            </div>
            <p className="text-lg text-[#4a3728]/80 italic">
               👉 {t('vedic.methodology')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((item) => (
              <div 
                key={item.id}
                className="group p-8 rounded-3xl bg-white border border-orange-100 shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-[#1a0f0f] mb-1">{item.title}</h3>
                <span className="block text-sm text-[#b45309] font-medium mb-4 italic">{item.sub}</span>
                <p className="text-[#4a3728]/80 leading-relaxed font-light text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Targeted Audience */}
      <div className="py-24">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a0f0f] mb-10 leading-tight">
                {t('vedic.solutions.title')}
              </h2>
              <div className="space-y-4">
                {solutions.map((sol) => (
                  <div 
                    key={sol.key}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-orange-50 hover:border-orange-200 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-colors">
                      <sol.icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-lg font-medium text-[#2c1810]">{sol.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative p-8 md:p-12">
                <div className="absolute inset-0 bg-orange-100/50 rounded-[4rem] rotate-3 -z-10"></div>
                <div className="absolute inset-0 bg-white border border-orange-100 rounded-[4rem] -z-10 shadow-inner"></div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-[#1a0f0f] mb-12">
                    {t('vedic.deliverables.title')}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                    {deliverables.map((item, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="mt-1">
                           <CheckCircle2 className="text-green-600" size={20} />
                        </div>
                        <p className="text-[#4a3728] font-medium leading-snug group-hover:text-[#1a0f0f] transition-colors">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="py-24 relative overflow-hidden">
        <div className="section-container text-center relative z-10">
          <div className="max-w-3xl mx-auto p-12 md:p-20 rounded-[3rem] bg-[#1a0f0f] text-white shadow-2xl relative overflow-hidden">
            {/* Background Mandala Decor */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-10 pointer-events-none">
              <VedicMandala />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Illuminate Your Life with <br />
              <span className="text-[#fbbf24]">Ancient Cosmic Wisdom</span>
            </h2>
            <p className="text-xl text-orange-50/70 mb-12 font-light leading-relaxed">
              Connect with your birth chart and discover the divine path meant specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1a0f0f] px-10 py-8 text-xl rounded-full font-bold transition-all duration-300 shadow-lg shadow-yellow-500/20">
                {t('vedic.cta.book')}
              </Button>
              <Button variant="ghost" className="text-[#fbbf24] hover:bg-white/5 px-10 py-8 text-xl flex items-center gap-2 group">
                {t('vedic.cta.whatsapp')}
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-heading {
          font-family: var(--font-serif), serif;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
