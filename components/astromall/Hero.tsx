'use client';

import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-20 overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent z-10" />

      <div className="section-container relative z-20 pb-12 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles size={14} />
              <span>Authentic Vedic Remedies</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-tight">
              Get Right Gemstone <br />
              <span className="text-primary italic">Based on Your Kundli</span>
            </h1>

            <p className="text-slate-400 text-base md:text-xl font-light max-w-xl leading-relaxed">
              Unlock your cosmic potential with lab-certified, ethically sourced gemstones, 
              energized through ancient Vedic rituals specifically for your planetary alignment.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-2">
              {[
                { icon: ShieldCheck, text: "Lab Certified Stones" },
                { icon: Zap, text: "Proper Recommendation" },
                { icon: Sparkles, text: "Energization Process" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-medium">
                  <item.icon size={18} className="text-primary shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-bold tracking-wider uppercase transition-all hover:scale-105 bg-primary hover:bg-primary/90">
                  Consult Astrologer
                </Button>
              </Link>
              <Link href="#gemstone-grid" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-bold tracking-wider uppercase border-2 border-white/20 text-white hover:bg-white/10 transition-all bg-transparent">
                  View Collection
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-video lg:aspect-auto lg:h-[600px] animate-in fade-in slide-in-from-right duration-1000 mt-8 lg:mt-0">
            {/* Main Visual Placeholder */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 group bg-slate-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=1200" 
                alt="Premium Gemstones" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
              </div>
              
              {/* Floating Element - Label */}
              <div className="absolute bottom-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-white font-serif text-lg">100% Authentic</div>
                    <div className="text-slate-400 text-xs tracking-widest uppercase">Certified Origins</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-[40px]" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
