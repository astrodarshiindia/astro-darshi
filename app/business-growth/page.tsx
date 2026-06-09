import SEOLayout from '@/components/SEOLayout';
import type { Metadata } from 'next';
import BusinessGrowthPageClient from './BusinessGrowthPageClient';

import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Business Growth Astrology',
  description:
    'Grow your business with expert astrology guidance. Analyze your business kundli, dashas, and get practical solutions for growth and loss recovery.',
  path: '/business-growth',
  keywords: [
    'business astrology',
    'business growth',
    'startup astrology',
    'financial astrology',
    'vastu for business',
  ],
});

export default function BusinessGrowth() {
  return <BusinessGrowthPageClient />;
}
