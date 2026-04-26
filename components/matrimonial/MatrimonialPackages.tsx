'use client';

import { Check, Heart, Star, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/LanguageContext';

export default function MatrimonialPackages() {
  const { t } = useLanguage();

  const packages = [
    {
      name: "Basic Registration",
      price: "FREE",
      description: "Get started with your profile on our platform.",
      features: [
        "Profile Creation",
        "Basic Kundli Matching",
        "Visible to Verified Members",
        "Email Notifications"
      ],
      cta: "Register Free",
      popular: false,
      color: "bg-slate-50"
    },
    {
      name: "Premium Matchmaking",
      price: "Paid",
      description: "Personalized assistance to find your perfect match.",
      features: [
        "Priority Profile Listing",
        "Detailed Gun Milan Report",
        "Dedicated Relationship Manager",
        "Direct Astrology Consultation",
        "Background Verification Support"
      ],
      cta: "Enquire Now",
      popular: true,
      color: "bg-primary/5"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Matchmaking <span className="text-primary italic">Services</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-slate-600 text-lg">
            Choose the right level of support for your journey to finding a life partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <div 
              key={i}
              className={`relative p-8 md:p-12 rounded-[2.5rem] border ${pkg.popular ? 'border-primary shadow-xl shadow-primary/10' : 'border-slate-100 shadow-sm'} flex flex-col h-full transition-all hover:shadow-2xl duration-500 ${pkg.color}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-primary text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  <Star size={14} className="fill-white" />
                  Most Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold text-primary">{pkg.price}</span>
                  {pkg.price !== "FREE" && <span className="text-slate-500">/service</span>}
                </div>
                <p className="text-slate-500 mt-4">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.popular ? "default" : "outline"}
                className={`w-full h-14 rounded-2xl text-lg font-bold transition-all ${pkg.popular ? 'bg-primary shadow-lg shadow-primary/20 hover:scale-105' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
              <MessageCircle size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Have questions about our services?</h4>
              <p className="text-slate-400">Our relationship managers are here to help you.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/919999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button className="w-full md:w-auto h-14 px-10 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold transition-all">
              Chat With Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
