import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VedicAstrology from '@/components/VedicAstrology';
import ContactForm from '@/components/ContactForm';

import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Vedic Astrology — Accurate Life Guidance',
  description:
    'Experience authentic Vedic Astrology analysis combining Janm Kundli, Prashna Kundli, and Gochar for crystal clear life guidance.',
  path: '/vedic-astrology',
  keywords: ['vedic astrology', 'janm kundli', 'birth chart', 'gochar', 'prashna kundli'],
});

export default function VedicAstrologyPage() {
  return (
    <main className="relative bg-[#1a0f0f]">
      <Header />
      <VedicAstrology />
      <section id="contact-form" className="py-20 bg-black/30">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
