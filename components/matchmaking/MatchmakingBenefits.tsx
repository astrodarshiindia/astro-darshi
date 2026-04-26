'use client';

import React from 'react';
import { ShieldCheck, AlertCircle, Search } from 'lucide-react';

export default function MatchmakingBenefits() {
  const benefits = [
    {
      icon: AlertCircle,
      title: "Future conflicts avoid करने के लिए",
      description: "Understand potential areas of disagreement and resolve them beforehand.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: ShieldCheck,
      title: "Divorce / separation risk समझने के लिए",
      description: "Analyze the long-term stability and longevity of the marital bond.",
      color: "bg-rose-100 text-rose-600"
    },
    {
      icon: Search,
      title: "सही partner selection के लिए",
      description: "Ensure the partner's nature and mindset align with yours for a happy life.",
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900">
            💡 क्यों जरूरी है?
          </h2>
          <p className="text-slate-600 text-lg">
            Astrological matchmaking provides a deep insight into your future relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
