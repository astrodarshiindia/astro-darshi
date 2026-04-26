import SEOLayout from '@/components/SEOLayout';
import { Metadata } from 'next';
import BusinessGrowthPageClient from './BusinessGrowthPageClient';

export const metadata: Metadata = {
  title: 'Business Growth Astrology - Astro Darshi',
  description: 'Grow your business with expert astrology guidance. Analyze your business kundli, dashas, and get practical solutions for growth and loss recovery.',
  keywords: 'business astrology, business growth, startup astrology, financial astrology, vastu for business, business remedies',
};

export default function BusinessGrowth() {
  return <BusinessGrowthPageClient />;
}
