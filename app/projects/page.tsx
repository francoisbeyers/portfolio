'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import projects from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan via-light-blue to-mint">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-tight">
            Featured Projects
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Real-world solutions that combine design, development, and strategy
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-20 max-w-7xl">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => {
            const projectColors = ['bg-light-blue', 'bg-peach', 'bg-mint', 'bg-lavender', 'bg-pink', 'bg-yellow'];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={project.link}>
                  <div className={`${projectColors[index % projectColors.length]} p-8 md:p-10 rounded-3xl hover:scale-[1.02] transition-transform cursor-pointer h-full flex flex-col`}>
                    {/* Year Badge */}
                    <div className="text-sm font-bold text-charcoal/60 mb-3">
                      {project.year}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                      {project.title}
                    </h2>

                    {/* Type */}
                    <p className="text-charcoal/70 text-lg mb-6">
                      {project.type}
                    </p>

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-charcoal/10 text-charcoal px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <div className="px-6 py-3 bg-charcoal text-white rounded-full font-bold group-hover:scale-105 transition-transform">
                        View Case Study →
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-6 py-3 bg-white text-charcoal rounded-full font-bold hover:scale-105 transition-transform shadow-soft"
                        >
                          Live Site ↗
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 text-center mb-20 shadow-soft"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-12">
            Project Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-charcoal mb-2">{projects.length}</div>
              <div className="text-charcoal/70 text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-charcoal mb-2">
                {new Date().getFullYear() - 2020}+
              </div>
              <div className="text-charcoal/70 text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-charcoal mb-2">100%</div>
              <div className="text-charcoal/70 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center bg-gradient-to-br from-pink via-yellow to-cyan p-12 md:p-16 rounded-3xl"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Want to See Your Project Here?
          </h3>
          <p className="text-xl md:text-2xl text-charcoal/80 mb-8">
            Let's build something awesome together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-charcoal text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-soft"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-charcoal rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-soft"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
