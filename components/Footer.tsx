'use client';

import Link from 'next/link';
import { Phone, Mail, MessageCircle, Instagram, Youtube, Facebook, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const FOOTER_LINKS = {
    explore: [
      { name: t('link.home'), href: '/' },
      { name: t('link.services'), href: '/services' },
      { name: t('link.contact'), href: '/contact' },
      { name: t('link.horoscope'), href: '/daily-horoscope' },
    ],
    services: [
      { name: t('link.career'), href: '/career-astrology' },
      { name: t('link.marriage'), href: '/marriage-astrology' },
      { name: t('link.kundli'), href: '/kundli-matching' },
      { name: t('link.vastu'), href: '/vastu-consultation' },
      { name: t('link.numerology'), href: '/numerology-services' },
      { name: t('link.gemstone'), href: '/gemstone-consultation' },
    ],
    guides: [
      { name: t('link.guide1'), href: '/best-vedic-astrologer-in-lucknow' },
      { name: t('link.guide2'), href: '/best-tarot-readers-in-lucknow' },
      { name: t('link.guide3'), href: '/best-astrologers-in-lucknow' },
      { name: t('link.guide4'), href: '/best-astrologers' },
    ],
    legal: [
      { name: t('link.privacy'), href: '/privacy-policy' },
      { name: t('link.terms'), href: '/terms-of-service' },
    ]
  };

  return (
    <footer className="relative border-t border-border bg-slate-50 pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-y-1/2" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-serif font-bold tracking-tighter text-foreground">
                ASTRO <span className="text-primary group-hover:text-primary/80 transition-colors">DARSHINI</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-base font-light leading-relaxed max-w-md">
              {t('footer.description')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-light">{t('footer.address')}</span>
              </div>
              <div className="flex gap-4">
                {[
                  { icon: Phone, href: 'tel:+919999999999', label: t('hero.call') },
                  { icon: Mail, href: 'mailto:hello@astrodarshini.com', label: 'Email' },
                  { icon: MessageCircle, href: 'https://wa.me/919999999999', label: 'WhatsApp' }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    aria-label={item.label}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-primary">{t('footer.navigation')}</h4>
            <nav className="flex flex-col gap-4">
              {FOOTER_LINKS.explore.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-light text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-primary">{t('footer.services')}</h4>
            <nav className="flex flex-col gap-4">
              {FOOTER_LINKS.services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-light text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Expert Guides */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-primary">{t('footer.guides')}</h4>
            <nav className="flex flex-col gap-4">
              {FOOTER_LINKS.guides.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 font-light text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect & Legal */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-primary">{t('footer.connect')}</h4>
              <div className="flex gap-4">
                {[Instagram, Youtube, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-sans font-bold tracking-[0.2m] uppercase text-primary">{t('footer.legal')}</h4>
              <nav className="flex flex-col gap-4">
                {FOOTER_LINKS.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-light text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-muted-foreground/60 text-[10px] tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} {t('footer.rights')}
            </p>
            <div className="hidden md:block w-1 h-1 bg-muted-foreground/20 rounded-full" />
            <p className="text-muted-foreground/60 text-[10px] tracking-[0.2em] uppercase">
              {t('footer.crafted')}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground/60 text-[10px] tracking-widest uppercase group">
              <span>{t('footer.made_with')}</span>
              <span className="text-primary group-hover:scale-125 transition-transform">✨</span>
              <span>{t('footer.by_team')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
