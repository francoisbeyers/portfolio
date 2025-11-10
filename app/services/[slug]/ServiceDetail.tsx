'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateFAQSchema,
  generateAggregateRatingSchema,
} from '@/app/lib/schema';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Service, Project } from '@/types';
import { services } from '@/data/services';

interface ServiceDetailProps {
  service: Service;
  relatedProjects: Project[];
}

export default function ServiceDetail({ service, relatedProjects }: ServiceDetailProps) {
  const breadcrumbsForSchema = [
    { name: 'Home', url: 'https://beyers.tech' },
    { name: 'Services', url: 'https://beyers.tech/services' },
    { name: service.title, url: `https://beyers.tech/services/${service.slug}` },
  ];

  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: service.title },
  ];

  const howToSteps = [
    { name: 'Discovery Call', text: "We'll discuss your goals, challenges, and requirements to ensure we're the right fit." },
    { name: 'Strategy & Proposal', text: "I'll create a detailed plan outlining the approach, timeline, and deliverables." },
    { name: 'Implementation', text: "I'll execute the plan with regular updates and opportunities for feedback." },
    { name: 'Launch & Support', text: "We'll launch your project and I'll provide ongoing support to ensure success." },
  ];

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
  const aggregateRatingSchema = service.reviews ? generateAggregateRatingSchema(service.reviews) : null;

  return (
    <div className="min-h-screen bg-off-white">
      <head>
        <SchemaMarkup schema={generateServiceSchema(service)} />
        <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbsForSchema)} />
        <SchemaMarkup schema={generateHowToSchema(`How to Get Started with ${service.title}`, howToSteps)} />
        {service.faqs && <SchemaMarkup schema={generateFAQSchema(service.faqs)} />}
        {aggregateRatingSchema && <SchemaMarkup schema={aggregateRatingSchema} />}
      </head>

      {/* Hero Section */}
      <section className={`py-20 px-4 bg-gradient-to-br ${gradientClass}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumbs items={breadcrumbItems} />

            {/* Back button */}
            <Link
              href="/services"
              className="inline-flex items-center text-charcoal/70 hover:text-charcoal transition-colors mb-6"
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
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg text-charcoal/80">
                    <span className="text-2xl text-charcoal flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                  Related Projects
                </h2>
                <div className="space-y-4">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.id}
                      href={project.link}
                      className="block p-6 border border-charcoal/10 hover:border-charcoal/50 transition-colors"
                    >
                      <h3 className="text-2xl font-bold text-charcoal mb-2">
                        {project.title}
                      </h3>
                      <p className="text-charcoal/70 text-lg">{project.type}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonials */}
            {service.reviews && service.reviews.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                  What Our Clients Say
                </h2>
                <div className="space-y-8">
                  {service.reviews.map((review, idx) => (
                    <blockquote key={idx} className="border-l-4 border-charcoal/20 pl-6">
                      <p className="text-xl italic text-charcoal/80 mb-4">"{review.text}"</p>
                      <footer className="text-charcoal/60">
                        <span className="font-bold">{review.author}</span>, {review.company}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                How It Works
              </h2>
              <ol className="space-y-6">
                {howToSteps.map((step, idx) => (
                  <li key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-xl">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">{step.name}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ Section - NEW */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <details key={idx} className="border border-charcoal/10 p-6 cursor-pointer group">
                      <summary className="font-bold text-charcoal text-lg group-open:mb-4">
                        {faq.question}
                      </summary>
                      <p className="text-charcoal/80 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Related Services */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                Pair with Other Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services
                  .filter(s => s.id !== service.id)
                  .slice(0, 2)
                  .map(relatedService => (
                    <Link
                      key={relatedService.id}
                      href={`/services/${relatedService.slug}`}
                      className="p-6 border border-charcoal/10 hover:border-charcoal/50 transition-colors group"
                    >
                      <span className="text-3xl block mb-3">{relatedService.icon}</span>
                      <h3 className="font-bold text-lg text-charcoal mb-2 group-hover:opacity-80 transition-opacity">
                        {relatedService.title}
                      </h3>
                      <p className="text-sm text-charcoal/70">{relatedService.description.substring(0, 100)}...</p>
                    </Link>
                  ))}
              </div>
            </section>
          </motion.div>

          {/* Sidebar CTA */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 p-8 bg-charcoal text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-white/80 leading-relaxed">
                Let's discuss how I can help with your {service.title.toLowerCase()} needs.
              </p>
              <Link
                href={service.cta.link}
                className="block w-full p-4 bg-white text-charcoal font-bold text-center hover:bg-white/90 transition-colors mb-3"
              >
                {service.cta.text}
              </Link>
              <Link
                href="/contact"
                className="block w-full p-4 border border-white text-white font-bold text-center hover:bg-white/10 transition-colors"
              >
                Schedule a Call
              </Link>

              {service.pricing && (
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/60 text-sm mb-2">{service.pricing.type}</p>
                  <p className="text-3xl font-bold">{service.pricing.starting}</p>
                </div>
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
