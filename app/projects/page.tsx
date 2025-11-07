'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import projects from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-purple via-win95-blue to-retro-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-rainbow">
            🚀 MY PROJECTS 🚀
          </h1>
          <div className="inline-block bg-retro-cyan text-retro-black px-6 py-3 border-4 border-retro-blue shadow-retro">
            <p className="text-xl md:text-2xl font-bold">
              STUFF I'VE BUILT · SITES I'VE LAUNCHED · MAGIC I'VE MADE ✨
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={project.link}>
                <div className="bg-retro-black border-4 border-retro-cyan p-6 hover:border-retro-magenta hover:shadow-retro-hover transition-all cursor-pointer group h-full">
                  {/* Project Number Badge */}
                  <div className="inline-block bg-retro-yellow text-retro-black px-4 py-2 border-2 border-retro-black mb-4 font-bold">
                    PROJECT #{project.id}
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-retro-cyan group-hover:text-retro-magenta transition-colors">
                    {project.title}
                  </h2>

                  {/* Type */}
                  <div className="mb-4">
                    <span className="bg-retro-purple text-white px-3 py-1 border-2 border-retro-magenta text-sm font-bold">
                      {project.type}
                    </span>
                  </div>

                  {/* Year */}
                  <p className="text-retro-gray text-lg mb-4">
                    📅 Year: <span className="text-retro-yellow font-bold">{project.year}</span>
                  </p>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-retro-darkgray text-retro-lime px-2 py-1 border border-retro-gray text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex gap-4 mt-6">
                    <div className="bg-retro-lime text-retro-black px-4 py-2 border-2 border-retro-cyan font-bold group-hover:bg-retro-yellow transition-colors">
                      VIEW CASE STUDY →
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-retro-magenta text-white px-4 py-2 border-2 border-retro-purple font-bold hover:bg-retro-purple transition-colors"
                      >
                        LIVE SITE ↗
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-retro-darkgray border-4 border-retro-yellow p-8 text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-retro-yellow mb-6">
            ⚡ PROJECT STATS ⚡
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-retro-black border-2 border-retro-cyan p-4">
              <div className="text-5xl font-bold text-retro-cyan mb-2">{projects.length}</div>
              <div className="text-retro-gray">PROJECTS COMPLETED</div>
            </div>
            <div className="bg-retro-black border-2 border-retro-magenta p-4">
              <div className="text-5xl font-bold text-retro-magenta mb-2">
                {new Date().getFullYear() - 2020}+
              </div>
              <div className="text-retro-gray">YEARS EXPERIENCE</div>
            </div>
            <div className="bg-retro-black border-2 border-retro-lime p-4">
              <div className="text-5xl font-bold text-retro-lime mb-2">100%</div>
              <div className="text-retro-gray">CLIENT SATISFACTION</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-gradient-to-r from-retro-cyan to-retro-magenta p-8 md:p-12 border-4 border-retro-yellow shadow-retro-hover"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-retro-black mb-4 animate-pulse">
            🌟 WANT TO SEE YOUR PROJECT HERE? 🌟
          </h3>
          <p className="text-xl md:text-2xl text-retro-black mb-6 font-bold">
            Let's build something awesome together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-retro-black text-retro-yellow px-8 py-4 border-4 border-retro-black hover:bg-retro-darkgray transition-all font-bold text-xl"
            >
              ✉️ GET IN TOUCH
            </Link>
            <Link
              href="/services"
              className="bg-retro-yellow text-retro-black px-8 py-4 border-4 border-retro-black hover:bg-retro-lime transition-all font-bold text-xl"
            >
              📋 VIEW SERVICES
            </Link>
          </div>
        </motion.div>

        {/* Retro Badge */}
        <div className="fixed bottom-4 left-4 animate-float">
          <div className="bg-retro-red text-white px-4 py-2 border-4 border-retro-yellow shadow-retro transform -rotate-6">
            <p className="font-bold text-sm">⭐ PORTFOLIO</p>
            <p className="text-xs">Est. 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}
