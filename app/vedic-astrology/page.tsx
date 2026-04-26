import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VedicAstrology from '@/components/VedicAstrology';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Vedic Astrology - Accurate Life Guidance | Astro Darshi',
  description: 'Experience authentic Vedic Astrology analysis combining Janm Kundli, Prashna Kundli, and Gochar for crystal clear life guidance.',
};

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
