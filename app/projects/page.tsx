import projects from '@/data/projects';
import { pageMetadata } from '@/app/lib/metadata';
import { Metadata } from 'next';
import ProjectGrid from './ProjectGrid';

export const metadata: Metadata = pageMetadata.projects();

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-white">
        <div
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-medium text-black mb-8">
            Projects
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Real-world solutions that combine design, development, and strategy
          </p>
        </div>
      </section>

      <ProjectGrid projects={projects} />
    </div>
  );
}
