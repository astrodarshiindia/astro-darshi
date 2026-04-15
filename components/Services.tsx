'use client';

import Link from 'next/link';
import { Star, Wand2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const NorthIndianChartVector = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="0.5">
    {/* Outer Frame */}
    <rect x="5" y="5" width="90" height="90" />
    {/* Diagonals */}
    <line x1="5" y1="5" x2="95" y2="95" />
    <line x1="95" y1="5" x2="5" y2="95" />
    {/* Central Diamond */}
    <path d="M50 5 L95 50 L50 95 L5 50 Z" />
    {/* House Numbers or symbols placeholders (Optional subtle dots) */}
    <circle cx="50" cy="20" r="0.5" />
    <circle cx="27" cy="27" r="0.5" />
    <circle cx="20" cy="50" r="0.5" />
    <circle cx="27" cy="73" r="0.5" />
    <circle cx="50" cy="80" r="0.5" />
    <circle cx="73" cy="73" r="0.5" />
    <circle cx="80" cy="50" r="0.5" />
    <circle cx="73" cy="27" r="0.5" />
  </svg>
);

const TarotCardVector = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="0.5">
    {/* Main Card */}
    <rect x="25" y="10" width="50" height="80" rx="4" transform="rotate(-5 50 50)" />
    {/* Second Card */}
    <rect x="30" y="15" width="50" height="80" rx="4" transform="rotate(5 50 50)" />
    {/* Third (Center) Card */}
    <rect x="25" y="10" width="50" height="80" rx="4" className="fill-card/40" />
    {/* Symbol on center card */}
    <circle cx="50" cy="35" r="8" strokeWidth="0.3" />
    <path d="M50 22 L50 48 M37 35 L63 35" strokeWidth="0.2" opacity="0.5" />
    <path d="M42 27 L58 43 M58 27 L42 43" strokeWidth="0.2" opacity="0.5" />
    {/* Lower card details */}
    <rect x="32" y="65" width="36" height="15" rx="1" strokeWidth="0.2" opacity="0.4" />
    <line x1="35" y1="70" x2="65" y2="70" strokeWidth="0.1" opacity="0.3" />
    <line x1="35" y1="73" x2="65" y2="73" strokeWidth="0.1" opacity="0.3" />
    <line x1="35" y1="76" x2="65" y2="76" strokeWidth="0.1" opacity="0.3" />
  </svg>
);

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('service.vedic.title'),
      description: t('service.vedic.desc'),
      icon: Star,
      vector: NorthIndianChartVector,
      color: 'primary',
      features: [
        t('service.vedic.f1'),
        t('service.vedic.f2'),
        t('service.vedic.f3'),
        t('service.vedic.f4')
      ],
    },
    {
      id: 2,
      title: t('service.tarot.title'),
      description: t('service.tarot.desc'),
      icon: Wand2,
      vector: TarotCardVector,
      color: 'accent',
      features: [
        t('service.tarot.f1'),
        t('service.tarot.f2'),
        t('service.tarot.f3'),
        t('service.tarot.f4')
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">{t('services.our_services')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl mb-8 font-serif">
              {t('services.title')} <span className="text-primary italic">{t('services.title.highlight')}</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
              {t('services.subtitle')}
            </p>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-primary hover:text-foreground transition-all"
          >
            <span>{t('services.explore_all')}</span>
            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            const VectorComponent = service.vector;
            return (
              <div 
                key={service.id}
                className="group relative overflow-hidden p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-md border border-white/10 hover:border-primary/20 transition-all duration-500 shadow-2xl shadow-black/5"
              >
                {/* Inner Decorative Border */}
                <div className="absolute inset-4 rounded-[1.8rem] border border-primary/5 pointer-events-none" />
                
                {/* Background Vector */}
                <div className="absolute top-[-5%] right-[-5%] w-[16rem] md:w-[24rem] h-[16rem] md:h-[24rem] text-primary/[0.12] leading-none select-none pointer-events-none transform rotate-6">
                  <VectorComponent />
                </div>

                {/* Floating Cosmic Accents */}
                <div className="absolute top-12 right-12 w-1 h-1 rounded-full bg-primary/40" />
                <div className="absolute top-24 right-20 w-0.5 h-0.5 rounded-full bg-primary/20" />
                <div className="absolute bottom-20 left-12 w-1 h-1 rounded-full bg-primary/30" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-50" />
                      <div className="relative w-12 h-12 rounded-2xl bg-background border border-primary/20 flex items-center justify-center text-primary shadow-inner">
                        <IconComponent size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-serif text-foreground tracking-tight">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 mb-10 font-light leading-relaxed text-base md:text-lg max-w-md border-l-2 border-primary/20 pl-5 italic">
                    "{service.description}"
                  </p>

                  <div className="flex flex-wrap gap-2 mb-12">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] md:text-[11px] font-bold tracking-wider text-foreground/80 uppercase whitespace-nowrap group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href="/contact" 
                    className="group/btn inline-flex items-center justify-between gap-6 px-10 py-5 rounded-2xl bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition-all duration-500 w-full sm:w-auto overflow-hidden relative shadow-lg shadow-primary/20"
                  >
                    <span className="relative z-10">{t('services.begin_journey')}</span>
                    <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>

                {/* Decorative Corner Mandala Piece */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-15 pointer-events-none">
                   <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-none stroke-current stroke-[0.8]">
                      <circle cx="100" cy="100" r="80" />
                      <circle cx="100" cy="100" r="60" />
                      <circle cx="100" cy="100" r="40" />
                      {[...Array(12)].map((_, i) => (
                        <line 
                          key={i} 
                          x1="100" y1="100" 
                          x2={(100 + 80 * Math.cos(i * Math.PI / 6)).toFixed(3)} 
                          y2={(100 + 80 * Math.sin(i * Math.PI / 6)).toFixed(3)} 
                        />
                      ))}
                   </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
