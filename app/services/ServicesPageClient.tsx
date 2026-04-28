'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Sparkles, FileText, Search, Home, Gem, Heart, Users, TrendingUp, Wand2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const validServiceIds = ['kundli', 'prashna', 'tarot', 'vastu', 'gemstone', 'matchmaking', 'matrimonial', 'business'] as const;

type ServiceId = (typeof validServiceIds)[number];

interface ServicesPageClientProps {
  initialService?: string;
}

export default function ServicesPageClient({ initialService }: ServicesPageClientProps) {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | undefined>(
    validServiceIds.includes(initialService as ServiceId) ? initialService : undefined
  );

  useEffect(() => {
    if (!initialService) {
      setActiveService(undefined);
      return;
    }

    const valid = validServiceIds.includes(initialService as ServiceId);
    if (!valid) {
      setActiveService(undefined);
      return;
    }

    setActiveService(initialService);
    const element = document.getElementById(initialService);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [initialService]);

  const services = [
    {
      id: 'kundli',
      title: t('service.kundli.title'),
      description: t('service.kundli.desc'),
      details: t('service.kundli.details'),
      icon: FileText,
      btnText: t('service.kundli.btn'),
      href: '/contact',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      highlights: [
        'Personalized Janm Kundli analysis with planetary positions and birth chart insights',
        'Career, marriage, health and wealth timing through Dasha and house predictions',
        'Remedies and predictions designed for the next 12–24 months'
      ]
    },
    {
      id: 'prashna',
      title: t('service.prashna.title'),
      description: t('service.prashna.desc'),
      details: t('service.prashna.details'),
      icon: Search,
      btnText: t('service.prashna.btn'),
      href: '/contact',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      highlights: [
        'Quick horary answers for urgent life and relationship questions',
        'No birth chart required — answers come from planetary timing at the moment of asking',
        'Ideal for fast decision-making on travel, job offers, finance and relationships'
      ]
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
      bgColor: 'bg-indigo-500/10',
      highlights: [
        'Deep tarot spreads for current energy, obstacles, and future possibilities',
        'Clarity on relationships, career transitions, and soul purpose',
        'Practical next steps and spiritual guidance for your current situation'
      ]
    },
    {
      id: 'vastu',
      title: t('service.vastu.title'),
      description: t('service.vastu.desc'),
      details: t('service.vastu.details'),
      icon: Home,
      btnText: t('service.vastu.btn'),
      href: '/vastu-consultation',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      highlights: [
        'Practical home and office Vastu changes without demolition',
        'Remedies for better health, wealth and family harmony',
        'Auspicious layout optimization for doors, rooms and workplace energy flow'
      ]
    },
    {
      id: 'gemstone',
      title: t('service.gemstone.title'),
      description: t('service.gemstone.desc'),
      details: t('service.gemstone.details'),
      icon: Gem,
      btnText: t('service.gemstone.btn'),
      href: '/astromall',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      highlights: [
        'Verified, lab-certified gemstones chosen for your chart',
        'Remedies to enhance confidence, career and relationships',
        'Gemstone guidance based on your unique planetary strengths'
      ]
    },
    {
      id: 'matchmaking',
      title: t('service.matchmaking.title'),
      description: t('service.matchmaking.desc'),
      details: t('service.matchmaking.details'),
      icon: Heart,
      btnText: t('service.matchmaking.btn'),
      href: '/matchmaking',
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      highlights: [
        'Full Kundli matching with Guna Milan and Manglik checks',
        'Partner compatibility evaluation for long-term marriage success',
        'Advice on remedies, timing and relationship stability'
      ]
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
      bgColor: 'bg-cyan-500/10',
      highlights: [
        'Astrology-backed matrimonial profiling and partner matching',
        'Verified profile discovery with family values and compatibility',
        'Submit your profile, receive matches and connect safely'
      ]
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
      bgColor: 'bg-orange-500/10',
      highlights: [
        'Business chart analysis for growth, partnerships and recovery',
        'Timing guidance for launches, investments and contract decisions',
        'Practical astrology remedies for financial and operational stability'
      ]
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
          <Accordion type="single" collapsible value={activeService} onValueChange={(value) => setActiveService(value || undefined)} className="space-y-6">
            {services.map((service, index) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                id={service.id}
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
                        {service.highlights && (
                          <ul className="grid gap-2 text-foreground/75 text-sm md:text-base list-disc list-inside">
                            {service.highlights.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
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
