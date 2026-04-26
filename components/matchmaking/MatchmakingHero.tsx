'use client';

import React from 'react';
import { CheckCircle2, Sparkles, Heart } from 'lucide-react';

export default function MatchmakingHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-primary/5 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
              <Sparkles size={14} className="fill-primary/20" />
              <span>Scientific & Astrological Matchmaking</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-tight">
                MATCHMAKING <span className="text-primary italic">PAGE</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">
                सिर्फ Gun Milan नहीं — complete life compatibility analysis
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <div className="w-8 h-px bg-primary" />
                हम क्या check करते हैं:
              </h3>
              <ul className="grid gap-4">
                {[
                  "Gun Milan (Ashta Koot)",
                  "Manglik / Dosha Analysis",
                  "Birth Chart and Dasha Compatibility (future stability)",
                  "Nature & mindset matching",
                  "Marriage longevity & risk factors"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200" 
                alt="Matchmaking" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Heart size={24} className="fill-primary" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-serif text-xl">Life Compatibility</div>
                    <div className="text-slate-500 text-xs tracking-widest uppercase font-bold">Scientific Analysis</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
