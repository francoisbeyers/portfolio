'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { useState } from 'react';

const ServicesGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative border border-black/10 p-8 hover:border-rusty-red transition-all duration-500 h-full flex flex-col overflow-hidden">
                    {/* Subtle background effect on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 0.03 : 0 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        background: 'linear-gradient(135deg, rgb(213, 41, 65) 0%, transparent 100%)'
                      }}
                    />

                    <div className="mb-6 relative z-10 flex-grow">
                      <motion.h3
                        className="font-medium text-xl mb-3 transition-colors duration-500"
                        animate={{
                          color: isHovered ? 'rgb(213, 41, 65)' : '#000000',
                        }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-sm text-black/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {service.pricing && (
                      <div className="pt-6 border-t border-black/10 relative z-10">
                        <p className="text-xs text-black/40 uppercase tracking-wider mb-1 group-hover:text-rusty-red/60 transition-colors duration-500">
                          {service.pricing.type}
                        </p>
                        <motion.p
                          className="text-lg font-medium transition-colors duration-500"
                          animate={{
                            color: isHovered ? 'rgb(213, 41, 65)' : '#000000',
                          }}
                        >
                          {service.pricing.starting}
                        </motion.p>
                      </div>
                    )}

                    {/* Decorative corner accent on hover */}
                    <motion.div
                      className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: isHovered ? 0.1 : 0,
                        scale: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: 'rgb(213, 41, 65)',
                        clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-black/60 mb-8">
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 border border-black hover:bg-rusty-red hover:text-white hover:border-rusty-red transition-all duration-500 text-sm"
          >
            Let's Talk About Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
