import { createMetadata } from '@/app/lib/metadata';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Service Comparison - Web Development, SEO, AI',
  description: 'Compare our digital services to find the perfect fit for your project. See features, pricing, and project types at a glance.',
  openGraph: {
    title: 'Service Comparison',
    description: 'A detailed comparison of all available services.',
    url: 'https://beyers.tech/services/comparison',
  },
});

export default function ServiceComparisonPage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Comparison' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-5xl px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-4">Service Comparison</h1>
        <p className="text-lg text-black/60 mb-12">
          Find the right solution for your needs by comparing our services side-by-side.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-black/10 font-medium">Service</th>
                <th className="p-4 border-b border-black/10 font-medium">Starting Price</th>
                <th className="p-4 border-b border-black/10 font-medium">Project Type</th>
                <th className="p-4 border-b border-black/10 font-medium">Best For</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id} className="hover:bg-black/5">
                  <td className="p-4 border-b border-black/5">
                    <Link href={`/services/${service.slug}`} className="font-bold hover:underline">
                      {service.title}
                    </Link>
                  </td>
                  <td className="p-4 border-b border-black/5">{service.pricing?.starting || 'Contact Us'}</td>
                  <td className="p-4 border-b border-black/5">{service.pricing?.type || 'Custom'}</td>
                  <td className="p-4 border-b border-black/5">{service.description.substring(0, 50)}...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
            <Link href="/contact" className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm">
              Get a Custom Quote
            </Link>
        </div>
      </div>
    </div>
  );
}
