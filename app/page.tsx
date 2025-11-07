"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-pink via-lavender to-light-blue">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-charcoal leading-none"
          >
            Francois Beyers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-8 leading-tight"
          >
            Full-Stack Developer<br/>
            SEO Expert · AI Automation
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-charcoal/80 mb-12 max-w-2xl mx-auto"
          >
            Crafting digital experiences that blend modern technology with thoughtful design.
            Let's build something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-charcoal text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-soft"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white text-charcoal rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-soft"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-off-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-charcoal mb-4">
              What I Do
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Specialized services to elevate your digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SEO & Digital Marketing",
                desc: "Data-driven strategies to boost your rankings and drive organic traffic",
                color: "bg-pink",
                icon: "🎯"
              },
              {
                title: "WordPress Development",
                desc: "Custom themes and plugins that make your site stand out",
                color: "bg-cyan",
                icon: "💻"
              },
              {
                title: "AI Content Generation",
                desc: "Scale your content creation while maintaining your brand voice",
                color: "bg-yellow",
                icon: "✍️"
              },
              {
                title: "AI Automation",
                desc: "Intelligent workflows that save time and increase efficiency",
                color: "bg-lavender",
                icon: "🤖"
              },
              {
                title: "Web Development",
                desc: "Modern, fast, and scalable applications built with latest tech",
                color: "bg-peach",
                icon: "🚀"
              },
              {
                title: "Consulting & Training",
                desc: "Expert guidance and team training for technical excellence",
                color: "bg-mint",
                icon: "📚"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${service.color} p-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer group`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-charcoal text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-soft"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-charcoal mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Recent projects that showcase my expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Câr Y Môr", type: "Design · Development · SEO", year: 2022, color: "bg-light-blue" },
              { title: "BMT Connect", type: "Full-Stack Development", year: 2021, color: "bg-peach" },
              { title: "Rasa Festival", type: "Design · Development · SEO", year: 2020, color: "bg-mint" },
              { title: "Baker Charles", type: "Design", year: 2020, color: "bg-lavender" },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${project.color} p-8 md:p-12 rounded-3xl hover:scale-[1.02] transition-transform cursor-pointer group`}
              >
                <div className="text-sm font-bold text-charcoal/60 mb-2">{project.year}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
                  {project.title}
                </h3>
                <p className="text-charcoal/80 text-lg mb-6">{project.type}</p>
                <div className="inline-block px-6 py-3 bg-charcoal text-white rounded-full font-bold group-hover:scale-105 transition-transform">
                  View Case Study →
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-charcoal text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-soft"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink via-yellow to-cyan">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-charcoal mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl text-charcoal/80 mb-12">
            Ready to bring your project to life? Let's chat about how I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-charcoal text-white rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-soft"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
