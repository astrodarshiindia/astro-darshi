'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, Sparkles, ArrowUp, MessageCircle, Phone } from 'lucide-react';
import ZodiacWheel from './ZodiacWheel';
import { TarotMoonIcon } from './TarotMoonIcon';
import { TarotStarIcon } from './TarotStarIcon';
import { TarotWheelIcon } from './TarotWheelIcon';
import { TarotTowerIcon } from './TarotTowerIcon';

// Tarot Icons
const TarotMoon = TarotMoonIcon;
const TarotStar = TarotStarIcon;
const TarotWheel = TarotWheelIcon;
const TarotTower = TarotTowerIcon;

// Cosmic Particles
const CosmicParticle = ({ className, style }: { className: string, style: React.CSSProperties }) => (
  <div
    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r from-white/20 to-sky-400/20 backdrop-blur-sm animate-particle-float ${className}`}
    style={style}
  />
);

export default function Hero() {
  const [showTopBtn, setShowTopBtn] = useState(false);

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

  // Inline Planet Components
  const MercurySymbol = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="11" r="4" />
      <path d="M12 15v5M10 18h4" />
      <path d="M8 5a4 4 0 0 1 8 0" />
    </svg>
  );

  const VenusSymbol = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="9" r="5" />
      <path d="M12 14v7M9 18h6" />
    </svg>
  );

  const MarsSymbol = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="10" cy="14" r="5" />
      <path d="M14 10l5-5M13 5h6v6" />
    </svg>
  );

  const JupiterSymbol = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 4v16M8 12h8M8 8c2 0 4 2 4 4" />
      <path d="M7 17h6" />
    </svg>
  );

  const SaturnSymbol = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 4v12M12 16c-3 0-5 2-5 4s2 4 5 4M7 8h10" />
    </svg>
  );

  const symbols = [
    { Icon: MercurySymbol, label: 'Mercury', className: 'top-[10%] left-[5%] text-white/30', style: { animationDelay: '0.1s' } as React.CSSProperties },
    { Icon: VenusSymbol, label: 'Venus', className: 'top-[45%] left-[2%] text-white/25', style: { animationDelay: '0.5s' } as React.CSSProperties },
    { Icon: MarsSymbol, label: 'Mars', className: 'bottom-[15%] left-[12%] text-white/35', style: { animationDelay: '0.9s' } as React.CSSProperties },
    { Icon: JupiterSymbol, label: 'Jupiter', className: 'top-[20%] right-[10%] text-white/30', style: { animationDelay: '1.3s' } as React.CSSProperties },
    { Icon: SaturnSymbol, label: 'Saturn', className: 'bottom-[30%] right-[6%] text-white/30', style: { animationDelay: '1.8s' } as React.CSSProperties },
  ];

  const tarotSymbols = [
    { Icon: TarotMoon, label: 'The Moon', className: 'top-[35%] left-[20%] text-white/25 w-10 h-10', style: { animationDelay: '0.3s' } as React.CSSProperties },
    { Icon: TarotStar, label: 'The Star', className: 'top-[5%] right-[15%] text-white/30 w-10 h-10', style: { animationDelay: '0.7s' } as React.CSSProperties },
    { Icon: TarotWheel, label: 'Wheel of Fortune', className: 'bottom-[25%] right-[20%] text-white/25 w-10 h-10', style: { animationDelay: '1.1s' } as React.CSSProperties },
    { Icon: TarotTower, label: 'The Tower', className: 'bottom-[5%] left-[25%] text-white/30 w-10 h-10', style: { animationDelay: '1.5s' } as React.CSSProperties },
  ];

  const particles = [
    { className: 'top-[15%] left-[30%]', style: { '--orbit': '8s', animationDelay: '0.2s' } as React.CSSProperties },
    { className: 'top-[60%] right-[35%]', style: { '--orbit': '10s', animationDelay: '0.4s' } as React.CSSProperties },
    { className: 'bottom-[20%] left-[45%]', style: { '--orbit': '7s', animationDelay: '0.6s' } as React.CSSProperties },
    { className: 'top-[50%] right-[25%]', style: { '--orbit': '9s', animationDelay: '0.8s' } as React.CSSProperties },
  ];

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center pt-20 md:pt-24 overflow-hidden bg-slate-900">
      {/* Nebula Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,.08),transparent_50%)],radial-gradient(circle_at_80%_20%,rgba(255,255,255,.06),transparent_50%)" />

      {/* Zodiac */}
      <div className="absolute inset-0 opacity-[0.015]">
        <ZodiacWheel />
      </div>

      {/* Planets */}
      {symbols.map(({ Icon, label, className, style }, index) => (
        <div key={index} className={`absolute w-12 h-12 md:w-14 md:h-14 ${className} animate-float-slow hover:scale-125`} style={style} title={label}>
          <Icon />
        </div>
      ))}

      {/* Tarot */}
      {tarotSymbols.map(({ Icon, label, className, style }, index) => (
        <div key={index} className={`absolute ${className} animate-float-medium hover:scale-130`} style={style} title={label}>
          <Icon />
        </div>
      ))}

      {/* Particles */}
      {particles.map(({ className, style }, index) => (
        <CosmicParticle key={index} className={className} style={style} />
      ))}

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto space-y-8 md:space-y-10">
        {/* Om */}
        <div className="text-6xl md:text-8xl font-serif opacity-95 drop-shadow-2xl">
          ॐ
        </div>

        {/* Darshini */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <span className="text-sm md:text-base font-bold tracking-widest uppercase text-white/90">
            दर्शिनी
          </span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent via-white/60 to-transparent" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
          <span className="bg-gradient-to-r from-white via-sky-200/90 to-white text-transparent bg-clip-text drop-shadow-2xl">Astro</span>
          <span className="text-white drop-shadow-2xl">Darshini</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-xl">
          Ancient Vedic Astrology & Sacred Tarot
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services">
            <Button size="lg" className="px-10 py-8 text-lg font-semibold bg-white text-slate-900 hover:bg-white/90 shadow-2xl hover:shadow-white/50 hover:-translate-y-1 min-w-[200px]">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" className="px-10 py-8 text-lg font-semibold border-2 border-white/50 bg-transparent hover:bg-white/10 backdrop-blur-sm text-white hover:border-white shadow-2xl hover:shadow-white/20 hover:-translate-y-1 min-w-[200px]">
              <Star className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-xl">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Call/Chat Buttons - Pure 50/50, UNTOUCHED */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-[99] flex w-[90vw] max-w-sm">
        <a
          href="tel:+919999999999"
          className="flex-1 flex items-center justify-center h-16 bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-2xl hover:shadow-blue-400/50 hover:scale-105 transition-all duration-300 rounded-l-2xl backdrop-blur-md border border-white/20 font-semibold text-sm"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 mr-1" /> Call
        </a>
        <a
          href="https://wa.me/919999999999?text=Hi%20AstroDarshini!%20I'd%20like%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center h-16 bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-2xl hover:shadow-green-400/50 hover:scale-105 transition-all duration-300 rounded-r-2xl backdrop-blur-md border border-white/20 font-semibold text-sm"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 mr-1" /> Chat
        </a>
      </div>

      {/* Move to Top - SEPARATE small button BOTTOM-right */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-6 z-[100] w-14 h-14 bg-gradient-to-br from-slate-200/90 to-slate-300 text-slate-900 shadow-2xl hover:shadow-slate-400/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 rounded-2xl backdrop-blur-md border border-slate-300/50 flex items-center justify-center"
          aria-label="Scroll to Top"
          title="Move to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </section>
  );
}

