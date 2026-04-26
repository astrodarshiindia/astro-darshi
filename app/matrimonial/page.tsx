import MatrimonialPageClient from '@/components/matrimonial/MatrimonialPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vedic Matrimonial Services - Find Your Cosmic Match | Astro Darshi',
  description: 'Connect with verified profiles based on traditional Vedic values and astrological compatibility. Join Astro Darshini Matrimonial for meaningful connections.',
  keywords: 'matrimonial services, kundli matching, vedic marriage, astro matrimonial, lucknow matrimonial, brahmin matrimonial, verified profiles',
};

export default function MatrimonialPage() {
  return <MatrimonialPageClient />;
}
