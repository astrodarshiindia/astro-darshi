'use client';

import React from 'react';
import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Footer from '@/components/Footer';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Star, 
  Sparkles, 
  FileText, 
  Search, 
  Home, 
  Gem, 
  Heart, 
  Users, 
  TrendingUp, 
  Wand2,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 'kundli',
      title: t('service.kundli.title'),
      description: t('service.kundli.desc'),
      details: t('service.kundli.details'),
      icon: FileText,
      btnText: t('service.kundli.btn'),
      href: '/#contact-form',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 'prashna',
      title: t('service.prashna.title'),
      description: t('service.prashna.desc'),
      details: t('service.prashna.details'),
      icon: Search,
      btnText: t('service.prashna.btn'),
      href: '/#services',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      id: 'tarot',
      title: t('service.tarot.title'),
      description: t('service.tarot.desc'),
      details: t('service.tarot.details'),
      icon: Wand2,
      btnText: t('service.tarot.btn'),
      href: '/tarot-reading',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10'
    },
    {
      id: 'vastu',
      title: t('service.vastu.title'),
      description: t('service.vastu.desc'),
      details: t('service.vastu.details'),
      icon: Home,
      btnText: t('service.vastu.btn'),
      href: '/#contact-form',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10'
    },
    {
      id: 'gemstone',
      title: t('service.gemstone.title'),
      description: t('service.gemstone.desc'),
      details: t('service.gemstone.details'),
      icon: Gem,
      btnText: t('service.gemstone.btn'),
      href: '/#astro-mall',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10'
    },
    {
      id: 'matchmaking',
      title: t('service.matchmaking.title'),
      description: t('service.matchmaking.desc'),
      details: t('service.matchmaking.details'),
      icon: Heart,
      btnText: t('service.matchmaking.btn'),
      href: '/#services',
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10'
    },
    {
      id: 'matrimonial',
      title: t('service.matrimonial.title'),
      description: t('service.matrimonial.desc'),
      details: t('service.matrimonial.details'),
      icon: Users,
      btnText: t('service.matrimonial.btn'),
      href: '/matrimonial',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10'
    },
    {
      id: 'business',
      title: t('service.business.title'),
      description: t('service.business.desc'),
      details: t('service.business.details'),
      icon: TrendingUp,
      btnText: t('service.business.btn'),
      href: '/business-growth',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <main className="relative min-h-screen">
      <CosmicBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            {t('services.title')} <span className="text-primary italic">{t('services.title.highlight')}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Row-wise Detailed Services */}
      <section className="relative pb-32">
        <div className="section-container max-w-5xl">
          <Accordion type="single" collapsible className="space-y-6">
            {services.map((service, index) => (
              <AccordionItem 
                key={service.id} 
                value={service.id}
                className="group border border-white/5 rounded-[2rem] bg-card/30 backdrop-blur-xl overflow-hidden hover:border-primary/20 transition-all duration-500 px-4 md:px-8"
              >
                <AccordionTrigger className="hover:no-underline py-8">
                  <div className="flex items-center gap-6 text-left w-full">
                    <div className={`hidden sm:flex w-14 h-14 rounded-2xl ${service.bgColor} ${service.color} items-center justify-center shrink-0`}>
                      <service.icon size={28} />
                    </div>
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-primary/40 font-serif text-lg">0{index + 1}</span>
                        <h3 className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-light text-sm md:text-base line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start pt-4 border-t border-white/5">
                    <div className="flex-1 space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-primary font-bold tracking-widest text-[10px] uppercase">Detailed Insights</h4>
                        <p className="text-lg font-light leading-relaxed text-foreground/80 italic">
                          "{service.details}"
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 pt-4">
                        <Link href={service.href} className="w-full sm:w-auto">
                          <Button className="w-full sm:w-auto px-8 py-6 rounded-2xl flex items-center justify-between gap-4 group/btn">
                            <span>{service.btnText}</span>
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                          <Button variant="outline" className="w-full sm:w-auto px-8 py-6 rounded-2xl border-primary/20 hover:bg-primary/5">
                            Expert Consultation
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className={`hidden lg:flex w-48 h-48 rounded-[2rem] ${service.bgColor} items-center justify-center ${service.color} opacity-20 rotate-12 shrink-0`}>
                       <service.icon size={80} strokeWidth={1} />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Journey CTA */}
      <section className="relative py-24 bg-primary/5 border-t border-primary/10">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-2">
               <Sparkles className="text-primary" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              {t('services.ready')}
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              {t('services.ready.subtitle')}
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button className="px-12 py-8 rounded-2xl text-lg font-serif shadow-xl shadow-primary/20">
                  {t('services.book')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
