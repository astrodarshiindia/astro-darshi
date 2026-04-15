'use client';

import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="relative p-12 md:p-20 rounded-[3rem] bg-card border border-border overflow-hidden text-center max-w-5xl mx-auto">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-primary">Your Journey Awaits</span>
              <h2 className="text-4xl md:text-6xl text-foreground leading-tight font-serif">
                Illuminate Your <span className="text-primary italic">Cosmic</span> Path
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Take the first step towards clarity. Whether you seek Vedic wisdom or Tarot intuition, we are here to guide your evolution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/20"
              >
                Book Consultation
              </Link>
              
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-12 py-5 border border-border text-foreground rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-accent transition-all duration-300"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>

            <p className="text-muted-foreground/50 text-xs tracking-widest uppercase">
              Trusted by 500+ seekers worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
