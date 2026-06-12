'use client';

import SEOLayout from '@/components/SEOLayout';
import { 
  TrendingUp, 
  Calendar, 
  Users2, 
  Wallet, 
  RotateCcw, 
  Zap, 
  CheckCircle2, 
  Building2, 
  Rocket, 
  Briefcase, 
  Handshake,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';
import { useSiteSettings } from '@/lib/SiteSettingsContext';
import { whatsappHref as buildWhatsappHref } from '@/lib/siteSettings';
import ContactForm from '@/components/ContactForm';

export default function BusinessGrowthPageClient() {
  const { t } = useLanguage();
  const { settings } = useSiteSettings();

  const analysisPoints = [
    {
      title: t('business.analyze.point1.title'),
      subtitle: t('business.analyze.point1.sub'),
      icon: Building2,
      desc: t('business.analyze.point1.desc')
    },
    {
      title: t('business.analyze.point2.title'),
      icon: Zap,
      desc: t('business.analyze.point2.desc')
    },
    {
      title: t('business.analyze.point3.title'),
      subtitle: t('business.analyze.point3.sub'),
      icon: Calendar,
      desc: t('business.analyze.point3.desc')
    },
    {
      title: t('business.analyze.point4.title'),
      icon: Handshake,
      desc: t('business.analyze.point4.desc')
    },
    {
      title: t('business.analyze.point5.title'),
      icon: Wallet,
      desc: t('business.analyze.point5.desc')
    }
  ];

  const solutions = [
    {
      title: t('business.solutions.point1.title'),
      icon: RotateCcw,
      desc: t('business.solutions.point1.desc')
    },
    {
      title: t('business.solutions.point2.title'),
      icon: CheckCircle2,
      desc: t('business.solutions.point2.desc')
    },
    {
      title: t('business.solutions.point3.title'),
      subtitle: t('business.solutions.point3.sub'),
      icon: TrendingUp,
      desc: t('business.solutions.point3.desc')
    },
    {
      title: t('business.solutions.point4.title'),
      icon: Rocket,
      desc: t('business.solutions.point4.desc')
    }
  ];

  const idealFor = [
    { title: t('business.ideal.point1'), icon: Building2 },
    { title: t('business.ideal.point2'), icon: Rocket },
    { title: t('business.ideal.point3'), icon: Briefcase },
    { title: t('business.ideal.point4'), icon: Users2 }
  ];

  return (
    <SEOLayout
      title={t('business.hero.subtitle')}
      description={t('business.hero.desc')}
      content={
        <div className="space-y-24 mb-20">
          {/* Analysis Section */}
          <section className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif">{t('business.analyze.title')}</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analysisPoints.map((point, index) => (
                <div key={index} className="group p-8 rounded-[2rem] bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <point.icon size={28} />
                  </div>
                  <h3 className="text-xl font-serif mb-2">
                    {point.title}
                    {point.subtitle && <span className="block text-sm text-muted-foreground font-sans mt-1">{point.subtitle}</span>}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions Section */}
          <section className="space-y-12 bg-primary/5 -mx-4 px-4 py-20 md:-mx-12 md:px-12 rounded-[3rem] border border-primary/10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-5xl font-serif">{t('business.solutions.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t('business.solutions.subtitle')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                    <solution.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif">
                      {solution.title}
                      {solution.subtitle && <span className="block text-sm text-muted-foreground font-sans mt-1">{solution.subtitle}</span>}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {solution.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Special Feature Section */}
          <section className="relative overflow-hidden p-12 md:p-20 rounded-[3rem] bg-foreground text-background">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-8 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase">
                <Sparkles size={14} /> {t('business.feature.badge')}
              </div>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                {t('business.feature.title')}
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-background/80">
                {t('business.feature.point')}
              </p>
              <p className="text-lg text-background/60 leading-relaxed">
                {t('business.feature.desc')}
              </p>
            </div>
          </section>

          {/* Ideal For Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif">{t('business.ideal.title')}</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {idealFor.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:bg-primary/5 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary mb-4">
                    <item.icon size={32} />
                  </div>
                  <span className="font-serif text-lg">{item.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Custom CTA Section */}
          <section className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
            <Button 
              size="lg"
              className="w-full sm:w-auto px-12 py-8 bg-primary text-primary-foreground rounded-full text-lg font-bold tracking-[0.1em] hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/20 font-serif"
              onClick={() => {
                const element = document.getElementById('contact-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('business.cta.book')}
            </Button>

            <a
              href={buildWhatsappHref(settings.phone, t('business.whatsapp.message'))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-8 border-2 border-primary text-foreground rounded-full text-lg font-bold tracking-[0.1em] hover:bg-primary/5 transition-all duration-300 font-serif"
            >
              <MessageCircle size={24} /> {t('business.cta.whatsapp')}
            </a>
          </section>

          {/* Contact Form Section */}
          <section id="contact-form" className="pt-24 border-t border-border/50">
            <ContactForm />
          </section>
        </div>
      }
    />
  );
}
