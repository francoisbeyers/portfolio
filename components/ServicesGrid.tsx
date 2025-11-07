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

  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-clash mb-4"
        >
          Services I Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          From SEO to AI automation, I help businesses grow their online presence and streamline operations
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
            className="group relative bg-white border border-dark-grey p-6 md:p-8 hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-5xl md:text-6xl mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-clash mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Pricing */}
            {service.pricing && (
              <div className="mb-6">
                <p className="text-sm text-gray-500">{service.pricing.type}</p>
                <p className="text-xl font-bold text-dark-grey">
                  {service.pricing.starting}
                </p>
              </div>
            )}

            {/* CTA */}
            <Link
              href={`/services/${service.slug}`}
              className="inline-block border-b-2 border-dark-grey pb-1 group-hover:border-orange transition-colors duration-300"
            >
              <span className="text-sm md:text-base font-medium uppercase tracking-wide">
                Learn More →
              </span>
            </Link>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 border-2 border-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
        <p className="text-lg mb-6 text-gray-600">
          Not sure which service you need?
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-dark-grey text-white hover:bg-orange transition-colors duration-300 text-lg font-medium"
        >
          Let's Talk About Your Project
        </Link>
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
