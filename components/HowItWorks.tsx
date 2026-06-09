'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  {
    num: '01',
    title: 'Pick your service',
    desc: 'Kundli, matchmaking, tarot, vastu, or gemstones — choose what fits your question.',
  },
  {
    num: '02',
    title: 'Share birth details',
    desc: 'Date, time, place of birth — or your specific concern if it is a prashna reading.',
  },
  {
    num: '03',
    title: 'Receive guidance',
    desc: 'Get your reading on call, WhatsApp, or as a detailed written report with remedies.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#0c1222] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[80px]" />

      <div className="section-container relative">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl tracking-tight sm:text-4xl md:text-5xl">
              How it <span className="italic text-blue-400">works</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-base">
            No confusing packages. Three clear steps from question to clarity.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-0">
          {STEPS.map((step, index) => (
            <div key={step.num} className="relative px-8 first:pl-0 last:pr-0">
              {index < STEPS.length - 1 && (
                <div className="absolute right-0 top-8 flex items-center gap-1 text-slate-600">
                  <div className="h-px w-full min-w-[60px] bg-gradient-to-r from-slate-600 to-transparent" />
                  <ArrowRight size={14} />
                </div>
              )}
              <p className="font-serif text-6xl leading-none text-white/[0.07]">{step.num}</p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical rail */}
        <div className="space-y-0 md:hidden">
          {STEPS.map((step, index) => (
            <div key={step.num} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 font-mono text-xs text-blue-300">
                  {step.num}
                </div>
                {index < STEPS.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-blue-400/40 to-transparent" />
                )}
              </div>
              <div className="pt-1.5">
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Most consultations begin within 24 hours.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-transform hover:scale-[1.02]"
          >
            Start now
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
