'use client';

import { Binary, Waves, Microscope } from 'lucide-react';

export default function WhyGemstones() {
  const points = [
    {
      icon: Waves,
      title: "Frequency & Resonance",
      description: "Every gemstone vibrates at a specific frequency that aligns with planetary energies, influencing your body's subtle electromagnetic field."
    },
    {
      icon: Binary,
      title: "Crystalline Structure",
      description: "The unique geometric lattice of natural stones acts as a prism, filtering and magnifying beneficial cosmic radiation."
    },
    {
      icon: Microscope,
      title: "Mineral Composition",
      description: "Trace minerals within gemstones interact with human skin through absorption, providing therapeutic benefits beyond aesthetics."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Beyond Fashion: <span className="text-primary italic">The Science of Soul</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed px-4">
            Gemstones are not just ornaments; they are natural storage batteries of cosmic energy. 
            When worn correctly based on your Kundli, they bridge the gap between planetary movements and your personal destiny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {points.map((point, index) => (
            <div key={index} className="group p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                <point.icon size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">{point.title}</h3>
              <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Quote */}
        <div className="mt-16 md:mt-20 p-8 md:p-12 rounded-2xl md:rounded-[3rem] bg-slate-950 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/sacred-geometry.png')]" />
          <p className="text-xl md:text-3xl font-serif text-amber-100 relative z-10 max-w-3xl mx-auto italic leading-relaxed">
            "Gemstones are the solid representations of light frequencies emitted by the stars."
          </p>
        </div>
      </div>
    </section>
  );
}
