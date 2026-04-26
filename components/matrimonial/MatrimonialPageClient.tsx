'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrimonialHero from './MatrimonialHero';
import MatrimonialHowItWorks from './MatrimonialHowItWorks';
import MatrimonialFeatures from './MatrimonialFeatures';
import MatrimonialPackages from './MatrimonialPackages';
import MatrimonialFormModal from './MatrimonialFormModal';

export default function MatrimonialPageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <MatrimonialHero onRegisterClick={() => setIsModalOpen(true)} />
      <MatrimonialHowItWorks />
      <MatrimonialFeatures onRegisterClick={() => setIsModalOpen(true)} />
      <MatrimonialPackages />
      
      <MatrimonialFormModal 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
      
      <Footer />
    </main>
  );
}
