import { Metadata } from 'next';
import { pageMetadata } from '@/app/lib/metadata';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = pageMetadata.services();

export default function ServicesPage() {
  return <ServicesPageClient />;
}
