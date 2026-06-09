import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurServices from '@/components/OurServices';
import HowItWorks from '@/components/HowItWorks';
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
      <WhyChooseUs />
      <HowItWorks />
      <AstroMall />
      <Testimonials />
      <CTABanner />
      <ContactForm />
      <Footer />
    </main>
  );
}
