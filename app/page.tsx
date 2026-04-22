import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Hero from '@/components/Hero';
import OurServices from '@/components/OurServices';
import AstrologerProfile from '@/components/AstrologerProfile';
import AstroMall from '@/components/AstroMall';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-background">
      <CosmicBackground />
      <Header />
      <Hero />
      <OurServices />
      <AstrologerProfile />
      <AstroMall />
      <Testimonials />
      <CTABanner />
      <section id="contact-form" className="py-12">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
