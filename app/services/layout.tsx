import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Astro Darshi',
  description: 'Explore vedic astrology and tarot card reading services tailored for your cosmic journey.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
