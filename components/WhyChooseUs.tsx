'use client';

import { Fingerprint, HandHeart, Lock, Sparkles } from 'lucide-react';

const STATS = [
  { value: '10+', label: 'Years guiding seekers' },
  { value: '500+', label: 'Consultations delivered' },
  { value: '100%', label: 'Confidential sessions' },
];

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Qualified expert team',
    desc: 'Readings led by trained Vedic astrologers — not automated software output.',
  },
  {
    icon: Fingerprint,
    title: 'Truly personalised',
    desc: 'Every chart is studied manually with context from your life situation.',
  },
  {
    icon: Lock,
    title: 'Private & discreet',
    desc: 'Your birth details and concerns stay between you and your consultant.',
  },
  {
    icon: HandHeart,
    title: 'Remedies with follow-through',
    desc: 'Practical, tested remedies with guidance on how and when to apply them.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-y border-amber-200/60 bg-[#faf6ef] py-16 md:py-28 dark:border-amber-900/30 dark:bg-[#0f0d0a]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-12deg, transparent, transparent 28px, rgba(180,120,40,0.06) 28px, rgba(180,120,40,0.06) 29px)',
        }}
      />

      <div className="section-container relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left — manifesto + stats */}
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-md text-[2.35rem] leading-[1.08] tracking-tight text-stone-900 sm:text-5xl md:text-[3.25rem] dark:text-stone-50">
              Guidance that feels{' '}
              <span className="italic text-amber-700 dark:text-amber-400">human</span>, not generated.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone-600 dark:text-stone-400">
              Ancient Jyotish logic, explained in plain language — with care, clarity, and remedies you can actually use.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-amber-900/10 pt-8 dark:border-amber-100/10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-amber-800 dark:text-amber-300 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-stone-500 dark:text-stone-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature stack */}
          <div className="space-y-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-5 rounded-2xl border border-amber-900/8 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-700/20 hover:shadow-[0_12px_40px_rgba(120,80,20,0.08)] sm:p-6 dark:border-white/8 dark:bg-white/[0.03] dark:hover:border-amber-500/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  <feature.icon size={20} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
