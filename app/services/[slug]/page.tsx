'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getServiceBySlug, services } from '@/data/services';
import { getProjectsByService } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = getProjectsByService(service.id);

  return (
    <div className="py-10 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16"
      >
        <Link
          href="/#services"
          className="inline-block mb-6 text-gray-600 hover:text-dark-grey transition-colors"
        >
          ← Back to Services
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl md:text-8xl">{service.icon}</span>
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-clash text-dark-grey">
              {service.title}
            </h1>
            {service.pricing && (
              <p className="text-lg md:text-xl text-gray-600 mt-2">
                Starting at {service.pricing.starting}
              </p>
            )}
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
          {service.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-clash mb-6">
              What's Included
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-2xl">✓</span>
                  <span className="text-lg text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-clash mb-6">
                Related Projects
              </h2>
              <div className="space-y-4">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={project.link}
                    className="block border border-dark-grey p-6 hover:border-orange hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-2xl font-clash mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.type}</p>
                    <p className="text-sm text-gray-500 mt-2">{project.year}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Process */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-clash mb-6">
              How It Works
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-grey text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery Call</h3>
                  <p className="text-gray-600">
                    We'll discuss your goals, challenges, and requirements to ensure we're the right fit.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-grey text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy & Proposal</h3>
                  <p className="text-gray-600">
                    I'll create a detailed plan outlining the approach, timeline, and deliverables.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-grey text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation</h3>
                  <p className="text-gray-600">
                    I'll execute the plan with regular updates and opportunities for feedback.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-grey text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                  <p className="text-gray-600">
                    We'll launch your project and I'll provide ongoing support to ensure success.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1"
        >
          {/* CTA Card */}
          <div className="sticky top-24 bg-stone-100 border-2 border-dark-grey p-8">
            <h3 className="text-2xl font-clash mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help with your {service.title.toLowerCase()} needs.
            </p>
            <Link
              href={service.cta.link}
              className="block w-full text-center px-6 py-4 bg-dark-grey text-white hover:bg-orange transition-colors duration-300 font-medium mb-4"
            >
              {service.cta.text}
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-4 border-2 border-dark-grey hover:border-orange transition-colors duration-300 font-medium"
            >
              Schedule a Call
            </Link>

            {/* Pricing */}
            {service.pricing && (
              <div className="mt-8 pt-8 border-t border-gray-300">
                <p className="text-sm text-gray-500 mb-1">
                  {service.pricing.type}
                </p>
                <p className="text-3xl font-bold text-dark-grey">
                  {service.pricing.starting}
                </p>
              </div>
            )}

            {/* Other Services */}
            <div className="mt-8 pt-8 border-t border-gray-300">
              <h4 className="text-lg font-bold mb-4">Other Services</h4>
              <ul className="space-y-2">
                {services
                  .filter((s) => s.id !== service.id)
                  .slice(0, 3)
                  .map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-gray-600 hover:text-dark-grey transition-colors"
                      >
                        {s.icon} {s.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

// Note: Static params not needed for client components with dynamic routing
