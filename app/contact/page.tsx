import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MessageCircle, MapPin, Clock, ChevronDown } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Book a Vedic astrology or tarot consultation with Astro Darshi in Lucknow. Call, WhatsApp or send an enquiry — we respond within 24 hours.',
  path: '/contact',
  keywords: [
    'contact astrologer lucknow',
    'book astrology consultation',
    'whatsapp astrologer',
  ],
});

const CHANNELS = [
  {
    icon: Phone,
    label: 'Call',
    value: '+91 99999 99999',
    href: 'tel:+919999999999',
    note: 'Mon–Sun, 10am–8pm IST',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 99999 99999',
    href: 'https://wa.me/919999999999',
    note: 'Quick queries and instant support',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@astroDarshi.com',
    href: 'mailto:hello@astroDarshi.com',
    note: 'Response within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lucknow, India',
    note: 'Online consultations worldwide',
  },
];

const FAQS = [
  {
    q: 'What is the best time to consult?',
    a: 'You can consult anytime. Morning hours are traditionally considered auspicious for spiritual consultations.',
  },
  {
    q: 'How long does a session take?',
    a: 'Sessions typically range from 45 to 75 minutes depending on the service. See our Services page for details.',
  },
  {
    q: 'Can I reschedule my appointment?',
    a: 'Yes — up to 24 hours before your appointment. Contact us by phone or WhatsApp.',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <Header />

      {/* Hero */}
      <section className="border-b border-stone-200/80 bg-white pt-[110px] pb-12 md:pb-16">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-[2.35rem] leading-[1.08] tracking-tight sm:text-5xl">
              Get in <span className="font-serif italic text-amber-800">touch</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Tell us what you need — we&apos;ll respond within 24 hours with next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Form + channels */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div className="min-w-0">
              <ContactForm embedded />
            </div>

            <aside className="relative z-0 space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div>
                <h2 className="text-lg font-semibold">Reach us directly</h2>
                <p className="mt-1 text-sm text-stone-500">Pick the channel that works best for you.</p>
              </div>

              <div className="space-y-3">
                {CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const inner = (
                    <div className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 transition-colors hover:border-stone-300 hover:bg-stone-50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                          {channel.label}
                        </p>
                        <p className="mt-0.5 font-medium text-stone-900">{channel.value}</p>
                        <p className="mt-0.5 text-xs text-stone-500">{channel.note}</p>
                      </div>
                    </div>
                  );

                  if (channel.href) {
                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target={channel.external ? '_blank' : undefined}
                        rel={channel.external ? 'noopener noreferrer' : undefined}
                      >
                        {inner}
                      </a>
                    );
                  }
                  return <div key={channel.label}>{inner}</div>;
                })}
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/60 px-4 py-3">
                <Clock size={16} className="shrink-0 text-amber-700" />
                <p className="text-xs leading-relaxed text-amber-900">
                  We aim to reply to all enquiries within one business day.
                </p>
              </div>

              {/* FAQ */}
              <div className="border-t border-stone-200/80 pt-8">
                <h3 className="text-sm font-semibold text-stone-900">Common questions</h3>
                <div className="mt-4 space-y-2">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.q}
                      className="group rounded-xl border border-stone-200/80 bg-white"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-stone-800 [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <ChevronDown
                          size={16}
                          className="shrink-0 text-stone-400 transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <p className="border-t border-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-600">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
