'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUp, MessageCircle, Phone, Sparkles, Briefcase, Heart, Coins, Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import { useIsMobile } from '@/hooks/use-mobile';

const slides = [
  {
    title: 'hero.title',
    highlight: 'hero.title.highlight',
    subtitle: 'hero.subtitle',
    bg: 'bg-[#E3F2FD]',
    accent: 'text-[#0D47A1]',
    highlightColor: 'text-[#1976D2]',
    btnBg: 'bg-[#1976D2]',
    icon: <Sparkles className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/marriage.gif', // Using marriage for general destiny
  },
  {
    title: 'hero.career.title',
    highlight: 'hero.career.title.highlight',
    subtitle: 'hero.career.subtitle',
    bg: 'bg-[#FFF3E0]',
    accent: 'text-[#E65100]',
    highlightColor: 'text-[#F57C00]',
    btnBg: 'bg-[#F57C00]',
    icon: <Briefcase className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/career.gif',
  },
  {
    title: 'hero.love.title',
    highlight: 'hero.love.title.highlight',
    subtitle: 'hero.love.subtitle',
    bg: 'bg-[#FCE4EC]',
    accent: 'text-[#880E4F]',
    highlightColor: 'text-[#C2185B]',
    btnBg: 'bg-[#C2185B]',
    icon: <Heart className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/love.gif',
  },
  {
    title: 'hero.wealth.title',
    highlight: 'hero.wealth.title.highlight',
    subtitle: 'hero.wealth.subtitle',
    bg: 'bg-[#E8F5E9]',
    accent: 'text-[#1B5E20]',
    highlightColor: 'text-[#388E3C]',
    btnBg: 'bg-[#388E3C]',
    icon: <Coins className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/finance.gif',
  },
  {
    title: 'hero.health.title',
    highlight: 'hero.health.title.highlight',
    subtitle: 'hero.health.subtitle',
    bg: 'bg-[#F3E5F5]',
    accent: 'text-[#4A148C]',
    highlightColor: 'text-[#7B1FA2]',
    btnBg: 'bg-[#7B1FA2]',
    icon: <Activity className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/health.gif',
  },
];

export default function Hero() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(intervalId);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className={`relative h-[650px] md:h-[850px] flex items-center justify-center overflow-hidden transition-colors duration-1000 ${slides[selectedIndex].bg}`}>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-1000" />

      {/* Semi-circle Icons above ab.png */}
      <div className="absolute bottom-48 md:bottom-72 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 z-10 flex justify-center items-center pointer-events-none">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const total = slides.length;
            
            // Dynamic radius based on viewport to keep icons in view
            const iconSize = isMobile ? 48 : 80;
            const zoomedIconSize = iconSize * 1.2; // Reduced zoom scale
            const padding = 20;
            const containerBottom = isMobile ? 192 : 288; // Adjusted bottom-48 (192px) and bottom-72 (288px)
            const containerCenterY = containerBottom + 64; // h-32 center is 64px from top/bottom

            const maxRadiusX = (dimensions.width / 2) - (zoomedIconSize / 2 + padding * 2);
            const maxRadiusY = dimensions.height - containerCenterY - (zoomedIconSize / 2 + padding * 2);
            
            // Maintain the perfect arc shape while ensuring it fits in viewport
            const radius = Math.min(isMobile ? 180 : 440, maxRadiusX, maxRadiusY);
            
            const angle = (0.05 + (index / (total - 1)) * 0.9) * Math.PI; 
            const x = Math.cos(angle + Math.PI) * radius; 
            const y = -Math.sin(angle) * radius; 

            return (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 flex flex-col items-center gap-2`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  opacity: index <= selectedIndex ? 1 : 0.2,
                  scale: index === selectedIndex ? '1.2' : '0.95',
                }}
              >
                <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-500 ${index === selectedIndex ? `border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]` : 'border-white/20'}`}>
                  <img src={slide.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Zodiac Circle - Background Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[650px] md:h-[650px] border border-black/5 rounded-full animate-slow-rotate pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-lg transition-colors duration-1000 ${slides[selectedIndex].btnBg}`} />
      </div>

      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center relative px-4">
              <div className="max-w-4xl mx-auto text-center z-10 -mt-56 md:-mt-80">
                {/* Main Heading */}
                <div className="space-y-1 mb-6">
                  <h1 className={`text-3xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight transition-all duration-700 ${index === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slide.accent}`}>
                    {t(slide.title)} <br />
                    <span className={`${slide.highlightColor} italic`}>{t(slide.highlight)}</span>
                  </h1>

                  <p className={`text-base md:text-xl text-black/60 font-light tracking-wide max-w-2xl mx-auto transition-all duration-700 delay-200 ${index === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {t(slide.subtitle)}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className={`flex flex-row items-center justify-center gap-3 md:gap-4 transition-all duration-700 delay-400 ${index === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link
                    href="/services"
                    className={`group relative px-5 py-2.5 md:px-8 md:py-3 ${slide.btnBg} text-white rounded-full text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl whitespace-nowrap`}
                  >
                    <span className="relative z-10">{t('hero.cta.services')}</span>
                    <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>

                  <Link
                    href="/contact"
                    className={`px-5 py-2.5 md:px-8 md:py-3 border border-black/10 text-black/70 rounded-full text-[10px] md:text-sm font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase hover:bg-black/5 transition-all duration-300 whitespace-nowrap`}
                  >
                    {t('hero.cta.book')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ab.png at the very bottom center */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0">
        <img src="/ab.png" alt="Bottom Background" className="w-full max-w-3xl md:max-w-4xl object-contain opacity-40 translate-y-1/4" />
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <button 
        onClick={scrollPrev}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all z-20"
      >
        <ChevronLeft className="text-black/50" />
      </button>
      <button 
        onClick={scrollNext}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all z-20"
      >
        <ChevronRight className="text-black/50" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === selectedIndex ? `w-8 ${slides[index].btnBg}` : 'w-2 bg-black/20'}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className={`w-[1px] h-12 bg-gradient-to-b from-black/50 to-transparent`} />
      </div>

      {/* Floating Call/Chat - Premium Version */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-1 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full shadow-2xl">
        <a
          href="tel:+919999999999"
          className={`flex items-center gap-3 px-6 py-3 ${slides[selectedIndex].btnBg} text-white rounded-full hover:opacity-90 transition-all font-medium text-sm shadow-md`}
        >
          <Phone size={16} className="shrink-0" /> {t('hero.call')}
        </a>
        <a
          href="https://wa.me/919999999999?text=Hi%20AstroDarshi!%20I'd%20like%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-full hover:opacity-90 transition-all font-medium text-sm shadow-md"
        >
          <MessageCircle size={16} className="shrink-0" /> {t('hero.chat')}
        </a>
      </div>

      {/* Back to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-50 w-12 h-12 bg-white border border-black/5 text-black/70 rounded-full shadow-2xl flex items-center justify-center hover:bg-black/5 transition-all"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </section>
  );
}
