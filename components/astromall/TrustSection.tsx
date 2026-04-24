'use client';

import { CheckCircle2, ShieldCheck, Award, Zap } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <div className="aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white shadow-xl">
                  <img src="https://images.unsplash.com/photo-1576188973526-0e5d742240ad?auto=format&fit=crop&q=80&w=600" alt="Gemstone Inspection" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden border border-white shadow-xl bg-primary flex flex-col items-center justify-center p-4 md:p-8 text-center text-white">
                  <Award size={32} className="mb-2 md:mb-4 md:w-12 md:h-12" />
                  <div className="text-base md:text-xl font-serif">Lab Certified</div>
                  <div className="text-[8px] md:text-xs tracking-widest uppercase opacity-70">GIA • GRS • IGI</div>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden border border-white shadow-xl bg-slate-900 flex flex-col items-center justify-center p-4 md:p-8 text-center text-white">
                  <Zap size={32} className="mb-2 md:mb-4 text-amber-400 md:w-12 md:h-12" />
                  <div className="text-base md:text-xl font-serif">Abhimantrit</div>
                  <div className="text-[8px] md:text-xs tracking-widest uppercase opacity-70">Energization Process</div>
                </div>
                <div className="aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white shadow-xl">
                  <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80&w=600" alt="Vedic Ritual" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-amber-400/5 rounded-full blur-3xl" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Authenticity Guaranteed</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                Purity That <span className="text-primary italic">Transforms</span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Every stone at Astromall undergoes a rigorous dual-verification process. 
              First, scientific validation through world-renowned gemological laboratories, 
              and second, spiritual sanctification through Vedic Abhimantrit rituals.
            </p>

            <div className="space-y-6 pt-4">
              {[
                { title: "Standard Certification", desc: "Verifiable reports from GIA, IGI, or GRS ensuring 100% natural origin.", icon: ShieldCheck },
                { title: "Vedic Energization", desc: "Customized ritual (Pooja) performed in the wearer's name to activate the stone.", icon: Zap },
                { title: "Ethical Sourcing", desc: "Conflict-free gemstones sourced directly from mines across Sri Lanka, Burma, and Zambia.", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h5 className="text-lg font-serif text-slate-900 mb-1">{item.title}</h5>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
