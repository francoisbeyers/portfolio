import { getServiceBySlug } from '@/data/services';
import { getProjectsByService } from '@/data/projects';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { pageMetadata } from '@/app/lib/metadata';
import ServiceDetail from './ServiceDetail';
import { use } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return notFound();
  }
  return pageMetadata.service(service.title, service.description);
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = getProjectsByService(service.id);

  return <ServiceDetail service={service} relatedProjects={relatedProjects} />;
}