import MatrimonialPageClient from '@/components/matrimonial/MatrimonialPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find Your Perfect Soulmate - Premium Matrimonial Services | Astro Darshi',
  description: 'Connect with verified profiles based on traditional values and astrological compatibility. Join Astro Darshini Matrimonial for meaningful connections.',
  keywords: 'matrimonial services, kundli matching, happy marriage, perfect partner, lucknow matrimonial, brahmin matrimonial, verified profiles',
};

export default function MatrimonialPage() {
  return <MatrimonialPageClient />;
}
