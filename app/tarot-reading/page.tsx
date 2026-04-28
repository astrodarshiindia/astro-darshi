import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TarotReading from '@/components/TarotReading';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Tarot Card Reading - Instant Guidance | Astro Darshi',
  description: 'Experience deep intuitive Tarot card readings for clarity on love, career, and life situations. Get instant guidance through sacred esoteric wisdom.',
};

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
