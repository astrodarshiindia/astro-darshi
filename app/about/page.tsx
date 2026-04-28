'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="relative bg-background text-foreground">
      <Header />

      <section className="section-container pt-[110px] pb-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">About Astro Darshi</p>
            <h1 className="max-w-3xl mx-auto text-4xl md:text-5xl font-serif font-bold tracking-tight">We combine ancient wisdom with modern clarity to guide your life journey.</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-base leading-8">At Astro Darshi, we believe astrology and tarot are tools for empowerment. Our mission is to bring grounded, compassionate guidance that helps you make confident choices for relationships, career, health, and home harmony.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] items-start">
            <div className="space-y-8">
              <div className="rounded-3xl border border-border bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold">Our Story</h2>
                <p className="mt-4 text-muted-foreground leading-8">Founded in Lucknow, Astro Darshi was born from a desire to make spiritual insight accessible and practical for the modern seeker. We blend Vedic astrology, numerology, tarot, and Vastu guidance into a holistic experience designed to help people move forward with confidence.</p>
              </div>

              <div className="rounded-3xl border border-border bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <h2 className="text-2xl font-semibold">What We Stand For</h2>
                <ul className="mt-4 space-y-4 text-muted-foreground leading-7 list-disc list-inside">
                  <li><span className="font-semibold text-foreground">Clarity over confusion:</span> We provide honest guidance, not vague promises.</li>
                  <li><span className="font-semibold text-foreground">Rooted in tradition:</span> Our approach honors authentic Indian wisdom and modern context.</li>
                  <li><span className="font-semibold text-foreground">Warmth with professionalism:</span> Every session is compassionate, respectful, and tailored to your needs.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] bg-primary/5 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Why clients trust us</p>
                <h3 className="mt-4 text-3xl font-semibold">Reliable guidance for every life chapter</h3>
                <p className="mt-3 text-muted-foreground leading-7">From relationships and marriage to career growth and health, our experts deliver insight that feels both intuitive and actionable.</p>
              </div>

              <div className="rounded-3xl border border-border bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <h3 className="text-2xl font-semibold">Our promise</h3>
                <p className="mt-4 text-muted-foreground leading-7">We honor your journey with care, guided by the cycles of the cosmos and the timeless wisdom of Vedic traditions. Every reading is designed to help you feel seen, supported, and empowered.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Authentic Wisdom', description: 'Traditional astrology, tarot, and Vastu insight grounded in real-life solutions.' },
              { title: 'Personal Care', description: 'One-on-one guidance tailored to your unique chart and current chapter.' },
              { title: 'Indian Roots', description: 'Proudly based in India and built to serve seekers everywhere.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-white/80 p-6 text-center shadow-sm">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-muted-foreground leading-7">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-white/90 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Ready for a clearer path?</p>
            <h2 className="mt-4 text-3xl font-semibold">Book a consultation and move forward with confidence.</h2>
            <Link href="/contact" className="inline-flex mt-6 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
