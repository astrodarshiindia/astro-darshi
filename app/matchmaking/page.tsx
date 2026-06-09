import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatchmakingHero from '@/components/matchmaking/MatchmakingHero';
import MatchmakingBenefits from '@/components/matchmaking/MatchmakingBenefits';
import MatchmakingForm from '@/components/matchmaking/MatchmakingForm';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Matchmaking — Astrological Compatibility',
  description:
    'Get a complete life compatibility analysis beyond Gun Milan. Analyze Manglik Dosha, future stability, and more with our expert astrologers.',
  path: '/matchmaking',
  keywords: [
    'matchmaking',
    'kundli matching',
    'guna milan',
    'marriage compatibility',
    'manglik dosha',
  ],
});

export default function MatchmakingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <MatchmakingHero />
      <MatchmakingBenefits />
      <MatchmakingForm />
      
      <Footer />
    </main>
  );
}
