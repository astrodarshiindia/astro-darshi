import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/astromall/Hero';
import WhyGemstones from '@/components/astromall/WhyGemstones';
import TrustSection from '@/components/astromall/TrustSection';
import GemstoneGrid from '@/components/astromall/GemstoneGrid';
import Features from '@/components/astromall/Features';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astromall - Premium Vedic Gemstones | Astro Darshi',
  description: 'Discover authentic, lab-certified, and energized gemstones recommended based on your Kundli. Transform your life with Vedic remedies.',
};
  
export default function AstromallPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Sections */}
      <Hero />
      <GemstoneGrid />
      <WhyGemstones />
      <TrustSection />
      <Features />
      
      <Footer />
    </main>
  );
}
