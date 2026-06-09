import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TarotReading from '@/components/TarotReading';
import ContactForm from '@/components/ContactForm';

import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tarot Card Reading — Instant Guidance',
  description:
    'Experience simple and effective Tarot card readings for clarity on love, career, and life. Get instant guidance for your problems.',
  path: '/tarot-reading',
  keywords: ['tarot reading', 'tarot card reading lucknow', 'love tarot', 'career tarot'],
});

export default function TarotReadingPage() {
  return (
    <main className="relative bg-background font-google [&_*]:!font-google">
      <Header />
      <TarotReading />
      <section id="contact-form" className="py-20 bg-muted/30 border-t border-border/40">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
