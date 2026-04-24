'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  {
    name: "Pukhraj",
    english: "Yellow Sapphire",
    planet: "Jupiter",
    image: "https://images.unsplash.com/photo-1598560863917-45a77e3df29c?auto=format&fit=crop&q=80&w=400",
    color: "bg-amber-500/10",
    textColor: "text-amber-600"
  },
  {
    name: "Neelam",
    english: "Blue Sapphire",
    planet: "Saturn",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400",
    color: "bg-blue-500/10",
    textColor: "text-blue-600"
  },
  {
    name: "Manik",
    english: "Ruby",
    planet: "Sun",
    image: "https://images.unsplash.com/photo-1551301772-005047b864a6?auto=format&fit=crop&q=80&w=400",
    color: "bg-rose-500/10",
    textColor: "text-rose-600"
  },
  {
    name: "Panna",
    english: "Emerald",
    planet: "Mercury",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=400",
    color: "bg-emerald-500/10",
    textColor: "text-emerald-600"
  },
  {
    name: "Moti",
    english: "Pearl",
    planet: "Moon",
    image: "https://images.unsplash.com/photo-1535633302704-c02fbc71a694?auto=format&fit=crop&q=80&w=400",
    color: "bg-slate-200/50",
    textColor: "text-slate-600"
  },
  {
    name: "Moonga",
    english: "Red Coral",
    planet: "Mars",
    image: "https://images.unsplash.com/photo-1533109721025-d1ae2ee8c1eb?auto=format&fit=crop&q=80&w=400",
    color: "bg-red-500/10",
    textColor: "text-red-600"
  }
];

export default function ProductCategories() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs">The Navratna Collection</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
              Find Your <span className="text-primary italic">Planetary Ally</span>
            </h2>
          </div>
          <Link href="/services" className="group flex items-center gap-2 text-slate-900 font-bold tracking-widest uppercase text-xs hover:text-primary transition-colors">
            Free Recommendation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 cursor-pointer">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-1">
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${cat.color} ${cat.textColor} mb-2`}>
                    Planet: {cat.planet}
                  </div>
                  <h3 className="text-3xl font-serif text-white">{cat.name}</h3>
                  <p className="text-slate-300 font-light text-sm italic">{cat.english}</p>
                </div>
                
                <div className="flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Explore Collection <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
