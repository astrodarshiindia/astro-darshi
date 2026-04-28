'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  Sparkles, 
  Compass, 
  MessageCircle, 
  Heart,
  HelpCircle,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
  Target,
  Brain,
  Layers,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import CosmicBackground from './CosmicBackground';

export default function TarotReading() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSpreads = () => {
    document.getElementById('tarot-spreads')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in a Tarot Reading session.");
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  const spreads = [
    { title: 'One Card Pull', desc: 'Quick daily guidance or yes/no answers.' },
    { title: 'Past, Present, Future', desc: 'Understanding the flow of your situation.' },
    { title: 'Celtic Cross', desc: 'Deep dive into complex life situations.' },
    { title: 'Relationship Spread', desc: 'Insights into connections and compatibility.' },
  ];

  const processSteps = [
    {
      id: 'step1',
      title: t('tarot.process.1'),
      icon: Layers,
      color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
    },
    {
      id: 'step2',
      title: t('tarot.process.2'),
      icon: Search,
      color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
    },
    {
      id: 'step3',
      title: t('tarot.process.3'),
      icon: Brain,
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
    }
  ];

  const bestFor = [
    { key: 'love', icon: Heart, label: t('tarot.best_for.1') },
    { key: 'decision', icon: HelpCircle, label: t('tarot.best_for.2') },
    { key: 'outcome', icon: Target, label: t('tarot.best_for.3') },
    { key: 'clarity', icon: Sparkles, label: t('tarot.best_for.4') },
    { key: 'future', icon: Compass, label: t('tarot.best_for.5') },
  ];

  return (
    <section className="bg-transparent text-foreground min-h-screen font-google selection:bg-purple-500/30 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <CosmicBackground />
        {/* Animated Nebula Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 z-20">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8 animate-fade-in uppercase tracking-[0.2em]">
              <Sparkles size={14} className="text-amber-600 dark:text-amber-400" />
              <span>{t('tarot.hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-google text-foreground mb-6 leading-tight tracking-tight">
              {t('tarot.hero.title')}
              <span className="block text-2xl md:text-3xl font-google text-amber-600 dark:text-amber-400 mt-4 font-normal italic">
                {t('tarot.hero.subtitle')}
              </span>
            </h1>

            <div className="relative max-w-2xl mx-auto my-12 group">
               <div className="absolute -left-8 top-0 text-4xl text-amber-400/40 font-google group-hover:scale-110 transition-transform">✨</div>
               <div className="space-y-4">
                 <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed italic">
                   {t('tarot.intro')}
                 </p>
                 <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                   {t('tarot.effective')}
                 </p>
               </div>
               <div className="absolute -right-8 bottom-0 text-4xl text-amber-400/40 font-google group-hover:scale-110 transition-transform">✨</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <Button 
                onClick={scrollToContact}
                className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-7 text-lg rounded-full font-medium transition-all duration-300 shadow-xl shadow-purple-900/40 group border-none"
              >
                {t('tarot.cta.book')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                onClick={openWhatsApp}
                variant="outline" className="border-purple-500/30 text-purple-700 dark:text-purple-300 hover:bg-purple-500/10 px-10 py-7 text-lg rounded-full font-medium transition-all duration-300"
              >
                {t('tarot.cta.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Process Methodology */}
      <div className="py-20 bg-muted/30 border-y border-border/40 relative z-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-4">
               <div className="h-px w-12 bg-amber-500/30 dark:bg-amber-400/30 self-center"></div>
               <span className="px-4 text-amber-600 dark:text-amber-400 font-google italic text-2xl">{t('tarot.process.title')}</span>
               <div className="h-px w-12 bg-amber-500/30 dark:bg-amber-400/30 self-center"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div 
                key={item.id}
                className="group p-8 rounded-3xl bg-card border border-border backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 text-center shadow-sm"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-foreground leading-relaxed">
                  {item.title}
                </h3>
                <div className="mt-4 text-amber-600/40 dark:text-amber-400/40 text-sm font-google">0{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best For Section */}
      <div className="py-24 relative z-20">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-google text-foreground mb-10 leading-tight">
                {t('tarot.best_for.title')}
              </h2>
              <div className="space-y-4">
                {bestFor.map((sol) => (
                  <div 
                    key={sol.key}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-muted/30 border border-border hover:border-amber-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors border border-border">
                      <sol.icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="text-lg font-medium text-foreground">{sol.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative p-8 md:p-12 overflow-hidden">
                <div className="absolute inset-0 bg-muted/30 rounded-[4rem] rotate-3 -z-10 border border-border"></div>
                <div className="absolute inset-0 bg-card backdrop-blur-xl border border-border rounded-[4rem] -z-10 shadow-xl"></div>
                
                <div className="text-center relative">
                  <div className="flex justify-center gap-4 mb-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-20 h-32 rounded-lg border-2 border-amber-500/20 bg-gradient-to-br from-card to-muted flex items-center justify-center rotate-[-5deg] hover:rotate-0 transition-transform cursor-pointer group shadow-md">
                        <Sparkles className="text-amber-500/20 group-hover:text-amber-500/60 transition-colors" />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-google text-foreground mb-6 italic">
                    Seek Your Answers
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    The cards reflect what is hidden in plain sight. Let us illuminate your path together.
                  </p>
                  <Button 
                    onClick={scrollToSpreads}
                    variant="ghost" className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-500/10"
                  >
                    Learn about Spreads <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spreads Section */}
      <div id="tarot-spreads" className="py-24 bg-muted/20 relative z-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-google text-foreground mb-4">Sacred Tarot Spreads</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Different situations require different perspectives. We use specific spreads to uncover the most relevant insights for your journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spreads.map((spread, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card border border-border hover:border-amber-500/30 transition-all group shadow-sm">
                <h3 className="text-xl font-google text-amber-600 dark:text-amber-400 mb-3 group-hover:translate-x-1 transition-transform">{spread.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{spread.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="py-24 relative overflow-hidden z-20">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-purple-900 to-indigo-950 dark:from-[#1a0f2e] dark:to-[#0a0614] text-white shadow-2xl relative overflow-hidden border border-purple-800/30">
            
            <h2 className="text-4xl md:text-5xl font-google mb-8 leading-tight">
              Unlock Your <br />
              <span className="text-amber-400">Cosmic Narrative</span>
            </h2>
            <p className="text-xl text-purple-100 mb-12 font-light leading-relaxed">
              Experience a reading that goes beyond predictions, offering deep insights into your energy and life's flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToContact}
                className="bg-amber-400 hover:bg-amber-500 text-purple-950 px-10 py-8 text-xl rounded-full font-bold transition-all duration-300 shadow-lg shadow-amber-500/20"
              >
                {t('tarot.cta.book')}
              </Button>
              <Button 
                onClick={openWhatsApp}
                variant="ghost" className="text-amber-400 hover:bg-white/5 px-10 py-8 text-xl flex items-center gap-2 group"
              >
                {t('tarot.cta.whatsapp')}
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-google {
          font-family: var(--font-google), serif;
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
