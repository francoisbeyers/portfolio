'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getServiceBySlug, services } from '@/data/services';
import { getProjectsByService } from '@/data/projects';
import { notFound } from 'next/navigation';
import { Card, CardBody, CardHeader, Button, Chip } from '@heroui/react';

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
            <Button
              as={Link}
              href="/services"
              variant="light"
              startContent={<span>←</span>}
              className="mb-6"
            >
              Back to Services
            </Button>

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
              <Card>
                <CardBody className="p-8">
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
                </CardBody>
              </Card>
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
                      <Card
                        key={project.id}
                        isPressable
                        as={Link}
                        href={project.link}
                        className="hover:scale-[1.02] transition-transform"
                        classNames={{
                          base: projectColors[idx % projectColors.length],
                        }}
                      >
                        <CardBody className="p-6">
                          <h3 className="text-2xl font-bold text-charcoal mb-2">
                            {project.title}
                          </h3>
                          <p className="text-charcoal/70 text-lg">{project.type}</p>
                          <Chip size="sm" className="mt-2" variant="flat">
                            {project.year}
                          </Chip>
                        </CardBody>
                      </Card>
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
                  <Card key={item.step}>
                    <CardBody className="flex flex-row gap-6 p-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-xl">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                        <p className="text-charcoal/70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
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
            <Card className="sticky top-24">
              <CardBody className="p-8 gap-4">
                <h3 className="text-2xl font-bold text-charcoal">Ready to Get Started?</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Let's discuss how I can help with your {service.title.toLowerCase()} needs.
                </p>
                <Button
                  as={Link}
                  href={service.cta.link}
                  color="primary"
                  size="lg"
                  radius="full"
                  className="w-full"
                >
                  {service.cta.text}
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  variant="bordered"
                  size="lg"
                  radius="full"
                  className="w-full"
                >
                  Schedule a Call
                </Button>

                {/* Pricing */}
                {service.pricing && (
                  <div className="mt-4 pt-8 border-t border-charcoal/10">
                    <Chip size="sm" variant="flat" className="mb-2">
                      {service.pricing.type}
                    </Chip>
                    <p className="text-3xl font-bold text-charcoal">
                      {service.pricing.starting}
                    </p>
                  </div>
                )}

                {/* Other Services */}
                <div className="mt-4 pt-8 border-t border-charcoal/10">
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
              </CardBody>
            </Card>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}

// Note: Static params not needed for client components with dynamic routing
