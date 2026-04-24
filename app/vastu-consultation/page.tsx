import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VastuHero from '@/components/vastu/VastuHero';
import VastuProblems from '@/components/vastu/VastuProblems';
import VastuProcess from '@/components/vastu/VastuProcess';
import VastuConsultationTypes from '@/components/vastu/VastuConsultationTypes';
import VastuBookingForm from '@/components/vastu/VastuBookingForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vastu Consultation for Home & Office - Astro Darshi',
  description: 'Traditional Vastu Shastra consultation for a harmonious home and prosperous business. Expert Vastu advice and simple remedies without demolition.',
  keywords: 'vastu consultation, vastu shastra for home, vastu for office, vastu dosha remedies, directions and elements, vastu in lucknow',
};

export default function VastuConsultationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Vastu Page Sections */}
      <VastuHero />
      <VastuProblems />
      <VastuProcess />
      <VastuConsultationTypes />
      <VastuBookingForm />
      
      <Footer />
    </main>
  );
}
