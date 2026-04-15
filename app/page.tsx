import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AstrologerProfile from '@/components/AstrologerProfile';
import AstroMall from '@/components/AstroMall';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-background">
      <CosmicBackground />
      <Header />
      <Hero />
      <Services />
      <AstrologerProfile />
      <AstroMall />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
