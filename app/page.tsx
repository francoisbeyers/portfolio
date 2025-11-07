"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-container py-section bg-gradient-to-br from-pink via-lavender to-light-blue">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-7xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="text-display-xl font-display font-bold mb-8 text-charcoal"
          >
            Francois Beyers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
            className="text-display-sm font-display font-bold text-charcoal mb-12"
          >
            Full-Stack Developer<br/>
            SEO Expert · AI Automation
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.3 }}
            className="text-body-lg text-charcoal/80 mb-16 max-w-3xl mx-auto"
          >
            Crafting digital experiences that blend modern technology with thoughtful design.
            Let's build something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="btn-klarna-primary"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="btn-klarna-secondary bg-off-white"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-section px-container bg-off-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md font-display font-bold text-charcoal mb-6">
              What I Do
            </h2>
            <p className="text-body-lg text-charcoal/70 max-w-2xl mx-auto">
              Specialized services to elevate your digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap">
            {[
              {
                title: "SEO & Digital Marketing",
                desc: "Data-driven strategies to boost your rankings and drive organic traffic",
                color: "bg-pink",
              },
              {
                title: "WordPress Development",
                desc: "Custom themes and plugins that make your site stand out",
                color: "bg-cyan",
              },
              {
                title: "AI Content Generation",
                desc: "Scale your content creation while maintaining your brand voice",
                color: "bg-yellow",
              },
              {
                title: "AI Automation",
                desc: "Intelligent workflows that save time and increase efficiency",
                color: "bg-lavender",
              },
              {
                title: "Web Development",
                desc: "Modern, fast, and scalable applications built with latest tech",
                color: "bg-peach",
              },
              {
                title: "Consulting & Training",
                desc: "Expert guidance and team training for technical excellence",
                color: "bg-mint",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className={`${service.color} p-container rounded-klarna transition-all duration-klarna cursor-pointer group`}
              >
                <h3 className="text-display-sm font-display font-bold text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-body-md text-charcoal/80">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="btn-klarna-primary inline-block"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-section px-container bg-off-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md font-display font-bold text-charcoal mb-6">
              Featured Work
            </h2>
            <p className="text-body-lg text-charcoal/70 max-w-2xl mx-auto">
              Recent projects that showcase my expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gap">
            {[
              { title: "Câr Y Môr", type: "Design · Development · SEO", year: 2022, color: "bg-light-blue" },
              { title: "BMT Connect", type: "Full-Stack Development", year: 2021, color: "bg-peach" },
              { title: "Rasa Festival", type: "Design · Development · SEO", year: 2020, color: "bg-mint" },
              { title: "Baker Charles", type: "Design", year: 2020, color: "bg-lavender" },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className={`${project.color} p-container rounded-klarna transition-all duration-klarna cursor-pointer group`}
              >
                <div className="text-body-sm font-bold text-charcoal/60 mb-3">{project.year}</div>
                <h3 className="text-display-sm font-display font-bold text-charcoal mb-4">
                  {project.title}
                </h3>
                <p className="text-body-md text-charcoal/80 mb-8">{project.type}</p>
                <div className="btn-klarna-primary inline-block">
                  View Case Study
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.2 }}
            className="text-center mt-16"
          >
            <Link
              href="/projects"
              className="btn-klarna-primary inline-block"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section px-container bg-gradient-to-br from-pink via-yellow to-cyan">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <h2 className="text-display-md font-display font-bold text-charcoal mb-8">
            Let's Work Together
          </h2>
          <p className="text-body-lg text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Ready to bring your project to life? Let's chat about how I can help.
          </p>
          <Link
            href="/contact"
            className="btn-klarna-primary inline-block"
          >
            Start a Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
