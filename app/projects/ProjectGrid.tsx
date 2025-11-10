'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/types';
import { useState } from 'react';

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-32">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {projects.map((project, index) => {
          const isHovered = hoveredId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={project.link} className="group block">
                <div className="relative aspect-[4/3] bg-black/5 mb-4 overflow-hidden border border-black/10 group-hover:border-rusty-red transition-all duration-500">
                  {/* Scrolling text effect on hover */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{
                        x: isHovered ? '-100%' : '100%',
                      }}
                      transition={{
                        duration: 3,
                        ease: "linear",
                        repeat: isHovered ? Infinity : 0,
                      }}
                      className="whitespace-nowrap text-6xl md:text-8xl font-medium text-rusty-red/10 select-none pointer-events-none"
                    >
                      {project.title} • {project.title} • {project.title} •
                    </motion.div>
                  </div>

                  {/* Static letter in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-6xl font-medium transition-all duration-500"
                      animate={{
                        color: isHovered ? 'rgb(213, 41, 65)' : 'rgba(0, 0, 0, 0.2)',
                        scale: isHovered ? 1.1 : 1,
                      }}
                    >
                      {project.title.charAt(0).toUpperCase()}
                    </motion.span>
                  </div>

                  {/* Subtle gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.05 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: 'linear-gradient(135deg, rgb(213, 41, 65) 0%, transparent 100%)'
                    }}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <h2 className="font-medium text-xl text-black group-hover:text-rusty-red transition-colors duration-500">
                      {project.title}
                    </h2>
                    <span className="text-sm text-black/40 group-hover:text-rusty-red/60 transition-colors duration-500">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-black/60">{project.type}</p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs text-black/40 px-2 py-1 border border-black/10 group-hover:border-rusty-red/30 transition-colors duration-500"
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
            className="px-6 py-3 border border-black hover:bg-rusty-red hover:text-white hover:border-rusty-red transition-all duration-500 text-sm"
          >
            Get In Touch
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 text-sm hover:text-rusty-red transition-colors duration-500"
          >
            View Services →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
