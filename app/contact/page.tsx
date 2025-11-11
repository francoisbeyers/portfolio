import { Metadata } from 'next';
import { pageMetadata } from '@/app/lib/metadata';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = pageMetadata.contact();

export default function ContactPage() {
  return <ContactPageClient />;
}
