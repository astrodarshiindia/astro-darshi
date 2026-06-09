import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/astromall/Hero';
import WhyGemstones from '@/components/astromall/WhyGemstones';
import TrustSection from '@/components/astromall/TrustSection';
import GemstoneGrid from '@/components/astromall/GemstoneGrid';
import Features from '@/components/astromall/Features';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Astromall — Premium Vedic Gemstones',
  description:
    'Discover authentic, lab-certified, and energized gemstones recommended based on your Kundli. Transform your life with Vedic remedies.',
  path: '/astromall',
  keywords: ['vedic gemstones', 'lucky stone', 'ruby', 'emerald', 'yellow sapphire', 'astromall'],
});
  
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
