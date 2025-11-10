"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium mb-12 text-black"
            style={{ wordSpacing: '0.25em' }}
          >
            I craft websites with{' '}
            <span className="text-rusty-red italic">great attention</span>
            {' '}to details
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-black/60 mb-16 max-w-2xl mx-auto"
          >
            Full-Stack Developer · SEO Expert · AI Automation Specialist
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-6 py-3 border border-black hover:bg-rusty-red hover:text-white hover:border-rusty-red transition-all duration-500 text-sm"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 text-sm hover:text-rusty-red transition-colors duration-500"
            >
              View Projects →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-white border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
              Services
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Specialized services to elevate your digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SEO & Digital Marketing",
                desc: "Data-driven strategies to boost your rankings and drive organic traffic",
              },
              {
                title: "WordPress Development",
                desc: "Custom themes and plugins that make your site stand out",
              },
              {
                title: "AI Content Generation",
                desc: "Scale your content creation while maintaining your brand voice",
              },
              {
                title: "AI Automation",
                desc: "Intelligent workflows that save time and increase efficiency",
              },
              {
                title: "Web Development",
                desc: "Modern, fast, and scalable applications built with latest tech",
              },
              {
                title: "Consulting & Training",
                desc: "Expert guidance and team training for technical excellence",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="border border-black/10 p-6 hover:border-rusty-red/50 transition-all duration-500 h-full group">
                  <h3 className="font-medium text-lg mb-3 text-black group-hover:text-rusty-red transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black/60">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center text-sm hover:text-rusty-red transition-colors duration-500"
            >
              View All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6 bg-white border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
              Projects
            </h2>
            <p className="text-lg text-black/60 max-w-2xl">
              Recent projects that showcase my expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.slice(0, 4).map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={project.link} className="group block">
                    <div className="aspect-[4/3] bg-black/5 mb-4 overflow-hidden">
                      {/* Placeholder for project image */}
                      <div className="w-full h-full flex items-center justify-center text-black/20 group-hover:text-black/40 transition-colors">
                        <span className="text-6xl">{project.title.charAt(0).toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-medium text-xl text-black group-hover:opacity-60 transition-opacity">
                          {project.title}
                        </h3>
                        <span className="text-sm text-black/40">{project.year}</span>
                      </div>
                      <p className="text-sm text-black/60">{project.type}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-sm hover:opacity-60 transition-opacity"
            >
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white border-t border-black/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-8">
            Let's Work Together
          </h2>
          <p className="text-lg text-black/60 mb-12 max-w-2xl mx-auto">
            Ready to bring your project to life? Let's chat about how I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors text-sm"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
