import { getServiceBySlug } from '@/data/services';
import { getProjectsByService } from '@/data/projects';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { pageMetadata } from '@/app/lib/metadata';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateFAQSchema,
  generateAggregateRatingSchema,
} from '@/app/lib/schema';
import ServiceDetail from './ServiceDetail';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return notFound();
  }
  return pageMetadata.service(service.title, service.description);
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = getProjectsByService(service.id);

  const breadcrumbsForSchema = [
    { name: 'Home', url: 'https://francoisbeyers.com' },
    { name: 'Services', url: 'https://francoisbeyers.com/services' },
    { name: service.title, url: `https://francoisbeyers.com/services/${service.slug}` },
  ];

  const howToSteps = [
    { name: 'Discovery Call', text: "We'll discuss your goals, challenges, and requirements to ensure we're the right fit." },
    { name: 'Strategy & Proposal', text: "I'll create a detailed plan outlining the approach, timeline, and deliverables." },
    { name: 'Implementation', text: "I'll execute the plan with regular updates and opportunities for feedback." },
    { name: 'Launch & Support', text: "We'll launch your project and I'll provide ongoing support to ensure success." },
  ];

  const aggregateRatingSchema = service.reviews ? generateAggregateRatingSchema(service.reviews) : null;

  return (
    <>
      {/* Schema Markup - rendered on server */}
      <SchemaMarkup schema={generateServiceSchema(service)} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbsForSchema)} />
      <SchemaMarkup schema={generateHowToSchema(`How to Get Started with ${service.title}`, howToSteps)} />
      {service.faqs && <SchemaMarkup schema={generateFAQSchema(service.faqs)} />}
      {aggregateRatingSchema && <SchemaMarkup schema={aggregateRatingSchema} />}

      <ServiceDetail service={service} relatedProjects={relatedProjects} />
    </>
  );
}