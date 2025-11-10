'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import projects from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-medium text-black mb-8">
            Projects
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Real-world solutions that combine design, development, and strategy
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-32">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link href={project.link} className="group block">
                  <div className="aspect-[4/3] bg-black/5 mb-4 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-black/20 group-hover:text-black/40 transition-colors">
                      <span className="text-6xl">{project.title.charAt(0).toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-3">
                      <h2 className="font-medium text-xl text-black group-hover:opacity-60 transition-opacity">
                        {project.title}
                      </h2>
                      <span className="text-sm text-black/40">{project.year}</span>
                    </div>
                    <p className="text-sm text-black/60">{project.type}</p>

                    {project.tags && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs text-black/40 px-2 py-1 border border-black/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-black/10 pt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-medium text-black mb-6">
            Want to See Your Project Here?
          </h3>
          <p className="text-lg text-black/60 mb-12 max-w-2xl mx-auto">
            Let's build something awesome together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 text-sm hover:opacity-60 transition-opacity"
            >
              View Services →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
