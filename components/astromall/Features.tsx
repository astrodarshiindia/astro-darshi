'use client';

import { PhoneCall, FileUp, Settings2, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Features() {
  const items = [
    {
      icon: PhoneCall,
      title: "Consult Before Buy",
      description: "Speak with our certified Vedic astrologers to ensure the gemstone truly aligns with your current Dasha and planetary positions."
    },
    {
      icon: FileUp,
      title: "Upload Your Kundli",
      description: "Already have a chart? Upload it directly and our experts will suggest the most potent gemstone for your specific life goals."
    },
    {
      icon: Settings2,
      title: "Bespoke Customization",
      description: "Our master craftsmen can set your stone in premium gold or silver rings and pendants, following exact Vedic placement rules."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Flexible payment options including Cash on Delivery (COD), EMI, and all major prepaid cards with insured global shipping."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-4">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Seamless Experience</h4>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                Designed for Your <br className="hidden md:block" />
                <span className="text-primary italic">Spiritual Journey</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
              {items.map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon size={20} className="md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-serif">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="p-6 md:p-12 rounded-3xl md:rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl relative z-10 shadow-2xl">
              <div className="space-y-6 md:space-y-8 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mx-auto">
                  <PhoneCall size={28} className="md:w-8 md:h-8 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-serif">Still Unsure?</h3>
                  <p className="text-slate-400 text-sm md:text-base font-light">Get a professional 15-minute consultation for free.</p>
                </div>
                
                <div className="space-y-4 pt-2 md:pt-4">
                  <Link href="/contact" className="block w-full">
                    <Button size="lg" className="w-full rounded-full h-14 bg-primary hover:bg-primary/90 text-sm md:text-base font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]">
                      Book Free Consultation <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <p className="text-[9px] md:text-[10px] text-slate-500 tracking-[0.2em] uppercase">No Purchase Obligation</p>
                </div>

                <div className="pt-6 md:pt-8 flex items-center justify-center gap-6 md:gap-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-serif text-amber-400">15k+</div>
                    <div className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest">Happy Clients</div>
                  </div>
                  <div className="w-[1px] h-6 md:h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-serif text-amber-400">4.9/5</div>
                    <div className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest">Avg. Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots grid */}
            <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 opacity-20 pointer-events-none">
              <div className="grid grid-cols-6 gap-3 md:gap-4">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
