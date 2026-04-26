import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatchmakingHero from '@/components/matchmaking/MatchmakingHero';
import MatchmakingBenefits from '@/components/matchmaking/MatchmakingBenefits';
import MatchmakingForm from '@/components/matchmaking/MatchmakingForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matchmaking Page - Scientific & Astrological Compatibility | Astro Darshi',
  description: 'Get a complete life compatibility analysis beyond just Gun Milan. Analyze Manglik Dosha, future stability, and more with our expert astrologers.',
  keywords: 'matchmaking, kundli matching, guna milan, astrology compatibility, marriage compatibility, manglik dosha',
};

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
