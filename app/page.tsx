import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AstrologerProfile from '@/components/AstrologerProfile';
import AstroMall from '@/components/AstroMall';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <CosmicBackground />
      <Header />
      <Hero />
      <section data-scroll-delay="100" className="[&>*]:animate-[slideIn_0.8s_ease-out_forwards] [&>*]:[animation-delay:0.2s]">
        <Services />
      </section>
      <section data-scroll-delay="200" className="[&>*]:animate-[slideIn_0.9s_ease-out_forwards] [&>*]:[animation-delay:0.4s]">
        <AstrologerProfile />
      </section>
      <section data-scroll-delay="300" className="[&>*]:animate-[slideIn_1s_ease-out_forwards] [&>*]:[animation-delay:0.6s]">
        <AstroMall />
      </section>
      <section data-scroll-delay="400" className="[&>*]:animate-[slideIn_0.8s_ease-out_forwards] [&>*]:[animation-delay:0.3s]">
        <CTABanner />
      </section>
      <Footer />
    </main>
  );
}
