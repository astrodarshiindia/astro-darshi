import ServicesPageClient from './ServicesPageClient';

export default function ServicesPage({ searchParams }: { searchParams: { service?: string } }) {
  return <ServicesPageClient initialService={searchParams?.service} />;
}
