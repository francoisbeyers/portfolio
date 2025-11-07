'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const ServicesGrid = () => {
  const serviceColors = [
    'bg-pink',
    'bg-cyan',
    'bg-yellow',
    'bg-lavender',
    'bg-peach',
    'bg-mint',
  ];

  return (
    <section className="py-section px-container bg-off-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gap">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="group"
            >
              <Link href={`/services/${service.slug}`}>
                <div className={`${serviceColors[index % serviceColors.length]} p-container rounded-klarna transition-all duration-klarna cursor-pointer h-full flex flex-col`}>
                  {/* Title */}
                  <h3 className="text-display-sm font-display font-bold text-charcoal mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body-md text-charcoal/80 mb-8 flex-grow">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  {service.pricing && (
                    <div className="mb-8">
                      <p className="text-body-sm text-charcoal/60">{service.pricing.type}</p>
                      <p className="text-body-lg font-bold text-charcoal">
                        {service.pricing.starting}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="btn-klarna-primary inline-block w-fit">
                    Learn More
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-body-lg text-charcoal/70 mb-8">
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            className="btn-klarna-primary inline-block"
          >
            Let's Talk About Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
