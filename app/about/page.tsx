'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

const VALUES = [
  {
    title: 'Clarity over confusion',
    desc: 'Honest guidance grounded in your chart — not vague promises or fear-based readings.',
  },
  {
    title: 'Rooted in tradition',
    desc: 'Authentic Vedic Jyotish, numerology, tarot and Vastu — explained for modern life.',
  },
  {
    title: 'Warmth with professionalism',
    desc: 'Every session is compassionate, respectful, and tailored to where you are right now.',
  },
];

const PILLARS = [
  { value: '10+', label: 'Years of practice' },
  { value: '500+', label: 'Consultations' },
  { value: 'Lucknow', label: 'Based in India' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <Header />

      {/* Hero */}
      <section className="border-b border-stone-200/80 bg-white pt-[110px] pb-16 md:pb-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[2.35rem] leading-[1.08] tracking-tight sm:text-5xl md:text-[3.25rem]">
              Ancient wisdom,{' '}
              <span className="font-serif italic text-amber-800">explained clearly.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              Astro Darshi was founded in Lucknow to make Vedic astrology and spiritual guidance
              accessible, practical, and genuinely useful — for relationships, career, health, and home.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200/80 pt-10 md:max-w-xl">
            {PILLARS.map((item) => (
              <div key={item.label}>
                <p className="font-serif text-2xl text-amber-800 md:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs text-stone-500 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Our story</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
                <p>
                  We started with a simple belief: astrology should empower you to make better
                  decisions, not leave you more confused. Too many seekers were getting generic
                  readings or automated reports — we wanted something different.
                </p>
                <p>
                  Today, Astro Darshi blends Vedic astrology, numerology, tarot, and Vastu into a
                  holistic practice. Every consultation is handled by a trained expert who studies
                  your chart manually and speaks in language you can act on.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-stone-500">
                <MapPin size={16} className="text-amber-700" />
                Lucknow, India — serving clients online worldwide
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200/80 bg-white p-8 shadow-sm sm:rounded-3xl sm:p-10">
              <h3 className="text-lg font-semibold">What we stand for</h3>
              <ul className="mt-6 space-y-6">
                {VALUES.map((item) => (
                  <li key={item.title} className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                    <p className="font-medium text-stone-900">{item.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Promise strip */}
      <section className="border-y border-stone-200/80 bg-[#f5f0e8] py-14 md:py-20">
        <div className="section-container">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-xl leading-relaxed text-stone-800 md:text-2xl">
              &ldquo;We honour your journey with care — guided by the cycles of the cosmos and the
              timeless logic of Vedic traditions. Every reading is designed to help you feel seen,
              supported, and able to move forward.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-stone-500">— The Astro Darshi team</footer>
          </blockquote>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Authentic wisdom',
                desc: 'Traditional astrology, tarot, and Vastu insight tied to real-life solutions.',
              },
              {
                title: 'Personal care',
                desc: 'One-on-one guidance tailored to your unique chart and current chapter.',
              },
              {
                title: 'Indian roots',
                desc: 'Proudly based in India, built to serve seekers everywhere.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 h-1 w-8 rounded-full bg-amber-600" />
                <h4 className="font-semibold text-stone-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200/80 bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-stone-200/80 bg-stone-50 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">Ready for a clearer path?</h2>
              <p className="mt-2 text-sm text-stone-600">
                Book a consultation and move forward with confidence.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
            >
              Contact us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
