import { getProjectBySlug } from '@/data/projects';
import { getServiceById } from '@/data/services';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { createMetadata } from '@/app/lib/metadata';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { generateCreativeWorkSchema } from '@/app/lib/schema';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return notFound();
  }
  return createMetadata({
    title: `${project.title} - Project Case Study`,
    description: project.description || `A case study about the ${project.title} project.`,
    openGraph: {
      title: `${project.title} - Project Case Study`,
      description: project.description || `A case study about the ${project.title} project.`,
      url: `https://francoisbeyers.com/projects/${slug}`,
      images: project.image ? [{
        url: `https://francoisbeyers.com${project.image}`,
        width: 1200,
        height: 630,
        alt: `${project.title} mockup`,
      }] : [],
    }
  });
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Projects', href: '/projects' },
    { name: project.title },
  ];

  return (
    <>
      {/* Schema Markup - rendered on server */}
      <SchemaMarkup schema={generateCreativeWorkSchema(project)} />

      <div className="min-h-screen bg-off-white">

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags?.map(tag => (
            <span key={tag} className="text-xs text-black/40 px-2 py-1 border border-black/10">
              {tag}
            </span>
          ))}
        </div>

        {project.image && (
          <div className="mb-8">
            <Image
              src={project.image}
              alt={`${project.title} project mockup`}
              width={1200}
              height={630}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="prose lg:prose-xl max-w-none">
          <p className="lead">{project.description}</p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4">About the project</h2>
          <p>
            This project, completed in {project.year}, involved {project.type}. 
            It showcases expertise in several areas, delivering a high-quality product for the client.
          </p>
          
          {project.url && (
            <p>
              You can view the live project <Link href={project.url} target="_blank" rel="noopener noreferrer">here</Link>.
            </p>
          )}

          <h3 className="text-xl font-bold mt-8 mb-4">Services Provided</h3>
          <ul>
            {project.services?.map(serviceId => {
                const service = getServiceById(serviceId);
                if (!service) return null;
                return <li key={serviceId}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>
            })}
          </ul>
        </div>

        <div className="mt-16 text-center">
            <Link href="/projects" className="text-sm hover:opacity-60 transition-opacity">
                ← Back to all projects
            </Link>
        </div>
      </div>
      </div>
    </>
  );
}
