'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import projects from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="py-section px-container bg-gradient-to-br from-cyan via-light-blue to-mint">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="container mx-auto max-w-6xl text-center"
        >
          <h1 className="text-display-lg font-display font-bold text-charcoal mb-8">
            Featured Projects
          </h1>
          <p className="text-body-lg text-charcoal/80 max-w-4xl mx-auto">
            Real-world solutions that combine design, development, and strategy
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-container py-section max-w-7xl">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gap mb-16">
          {projects.map((project, index) => {
            const projectColors = ['bg-light-blue', 'bg-peach', 'bg-mint', 'bg-lavender', 'bg-pink', 'bg-yellow'];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="group"
              >
                <Link href={project.link}>
                  <div className={`${projectColors[index % projectColors.length]} p-container rounded-klarna transition-all duration-klarna cursor-pointer h-full flex flex-col`}>
                    {/* Year Badge */}
                    <div className="text-body-sm font-bold text-charcoal/60 mb-3">
                      {project.year}
                    </div>

                    {/* Title */}
                    <h2 className="text-display-sm font-display font-bold text-charcoal mb-4">
                      {project.title}
                    </h2>

                    {/* Type */}
                    <p className="text-body-md text-charcoal/70 mb-6">
                      {project.type}
                    </p>

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-charcoal/10 text-charcoal px-4 py-2 rounded-klarna text-body-sm font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <div className="btn-klarna-primary">
                        View Case Study
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="btn-klarna-secondary bg-off-white"
                        >
                          Live Site
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.2 }}
          className="bg-off-white border-2 border-charcoal rounded-klarna p-container text-center mb-16"
        >
          <h3 className="text-display-sm font-display font-bold text-charcoal mb-12">
            Project Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gap">
            <div>
              <div className="text-display-md font-display font-bold text-charcoal mb-2">{projects.length}</div>
              <div className="text-body-md text-charcoal/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-display-md font-display font-bold text-charcoal mb-2">
                {new Date().getFullYear() - 2020}+
              </div>
              <div className="text-body-md text-charcoal/70">Years Experience</div>
            </div>
            <div>
              <div className="text-display-md font-display font-bold text-charcoal mb-2">100%</div>
              <div className="text-body-md text-charcoal/70">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.3 }}
          className="text-center bg-gradient-to-br from-pink via-yellow to-cyan p-container rounded-klarna"
        >
          <h3 className="text-display-sm font-display font-bold text-charcoal mb-8">
            Want to See Your Project Here?
          </h3>
          <p className="text-body-lg text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let's build something awesome together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-klarna-primary"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="btn-klarna-secondary bg-off-white"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
