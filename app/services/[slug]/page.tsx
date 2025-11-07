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

  const serviceColors = [
    'from-pink to-lavender',
    'from-cyan to-light-blue',
    'from-yellow to-peach',
    'from-lavender to-pink',
    'from-peach to-mint',
    'from-mint to-cyan',
  ];

  const serviceIndex = services.findIndex(s => s.id === service.id);
  const gradientClass = serviceColors[serviceIndex % serviceColors.length];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className={`py-20 px-4 bg-gradient-to-br ${gradientClass}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-block mb-6 text-charcoal/70 hover:text-charcoal transition-colors font-medium"
            >
              ← Back to Services
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <span className="text-6xl md:text-8xl">{service.icon}</span>
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-3">
                  {service.title}
                </h1>
                {service.pricing && (
                  <p className="text-lg md:text-xl text-charcoal/70 font-medium">
                    Starting at {service.pricing.starting}
                  </p>
                )}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-4xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Features */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                What's Included
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-soft">
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-2xl text-charcoal">✓</span>
                      <span className="text-lg text-charcoal/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                  Related Projects
                </h2>
                <div className="space-y-4">
                  {relatedProjects.map((project, idx) => {
                    const projectColors = ['bg-light-blue', 'bg-peach', 'bg-mint', 'bg-lavender'];
                    return (
                      <Link
                        key={project.id}
                        href={project.link}
                        className={`block ${projectColors[idx % projectColors.length]} p-8 rounded-3xl hover:scale-[1.02] transition-transform`}
                      >
                        <h3 className="text-2xl font-bold text-charcoal mb-2">
                          {project.title}
                        </h3>
                        <p className="text-charcoal/70 text-lg">{project.type}</p>
                        <p className="text-sm text-charcoal/60 mt-2 font-medium">{project.year}</p>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Process */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                How It Works
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Discovery Call',
                    desc: "We'll discuss your goals, challenges, and requirements to ensure we're the right fit."
                  },
                  {
                    step: 2,
                    title: 'Strategy & Proposal',
                    desc: "I'll create a detailed plan outlining the approach, timeline, and deliverables."
                  },
                  {
                    step: 3,
                    title: 'Implementation',
                    desc: "I'll execute the plan with regular updates and opportunities for feedback."
                  },
                  {
                    step: 4,
                    title: 'Launch & Support',
                    desc: "We'll launch your project and I'll provide ongoing support to ensure success."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 bg-white rounded-3xl p-6 shadow-soft">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            {/* CTA Card */}
            <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Get Started?</h3>
              <p className="text-charcoal/70 mb-6 leading-relaxed">
                Let's discuss how I can help with your {service.title.toLowerCase()} needs.
              </p>
              <Link
                href={service.cta.link}
                className="block w-full text-center px-6 py-4 bg-charcoal text-white rounded-full hover:scale-105 transition-transform font-bold mb-4"
              >
                {service.cta.text}
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 border-2 border-charcoal rounded-full hover:scale-105 transition-transform font-bold text-charcoal"
              >
                Schedule a Call
              </Link>

              {/* Pricing */}
              {service.pricing && (
                <div className="mt-8 pt-8 border-t border-charcoal/10">
                  <p className="text-sm text-charcoal/60 mb-1 font-medium">
                    {service.pricing.type}
                  </p>
                  <p className="text-3xl font-bold text-charcoal">
                    {service.pricing.starting}
                  </p>
                </div>
              )}

              {/* Other Services */}
              <div className="mt-8 pt-8 border-t border-charcoal/10">
                <h4 className="text-lg font-bold text-charcoal mb-4">Other Services</h4>
                <ul className="space-y-3">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 3)
                    .map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-charcoal/70 hover:text-charcoal transition-colors flex items-center gap-2"
                        >
                          <span>{s.icon}</span>
                          <span>{s.title}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}

// Note: Static params not needed for client components with dynamic routing
