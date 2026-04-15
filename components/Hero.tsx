'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-3">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Zodiac Circle - Enhanced Visibility */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[650px] md:h-[650px] border border-primary/40 rounded-full animate-slow-rotate pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_25px_rgba(59,130,246,0.8)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/60 rounded-full" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[550px] md:h-[550px] border border-primary/20 rounded-full animate-slow-rotate-reverse pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        {/* Sanskrit Text - Artistic */}


        {/* Main Heading */}
        <div className="max-w-4xl mx-auto mb-10 space-y-1">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground leading-tight tracking-tight animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
            Decode Your <br />
            <span className="blue-gradient-text font-italic">Destiny's Blueprint</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 font-light tracking-wide max-w-2xl mx-auto animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
            Stop wondering about your future. Gain crystal-clear clarity on your career, relationships, and life purpose with India's most trusted cosmic guides.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.6s]">
          <Link
            href="/services"
            className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-full text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            href="/contact"
            className="px-10 py-4 border border-foreground/20 text-foreground rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-foreground/5 transition-all duration-300 hover:border-foreground/40"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground to-transparent" />
      </div>

      {/* Floating Call/Chat - Premium Version */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-1 p-1 bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-full shadow-2xl">
        <a
          href="tel:+919999999999"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all font-medium text-sm"
        >
          <Phone size={16} /> Call
        </a>
        <a
          href="https://wa.me/919999999999?text=Hi%20AstroDarshini!%20I'd%20like%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:opacity-90 transition-all font-medium text-sm"
        >
          <MessageCircle size={16} /> Chat
        </a>
      </div>

      {/* Back to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-50 w-12 h-12 bg-card border border-foreground/10 text-foreground rounded-full shadow-2xl flex items-center justify-center hover:bg-foreground/10 transition-all"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </section>
  );
}
