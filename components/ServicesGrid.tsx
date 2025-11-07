'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const ServicesGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const serviceColors = [
    'bg-pink',
    'bg-cyan',
    'bg-yellow',
    'bg-lavender',
    'bg-peach',
    'bg-mint',
  ];

  return (
    <section className="py-20 px-4 bg-off-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={item}
              className="group"
            >
              <Link href={`/services/${service.slug}`}>
                <div className={`${serviceColors[index % serviceColors.length]} p-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer h-full flex flex-col`}>
                  {/* Icon */}
                  <div className="text-5xl mb-4">{service.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal/80 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  {service.pricing && (
                    <div className="mb-6">
                      <p className="text-sm text-charcoal/60">{service.pricing.type}</p>
                      <p className="text-xl font-bold text-charcoal">
                        {service.pricing.starting}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="inline-block px-6 py-3 bg-charcoal text-white rounded-full font-bold group-hover:scale-105 transition-transform w-fit">
                    Learn More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-charcoal/70 mb-6">
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-charcoal text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-soft"
          >
            Let's Talk About Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
