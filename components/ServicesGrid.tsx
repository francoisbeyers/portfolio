'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const ServicesGrid = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Link href={`/services/${service.slug}`} className="group block">
                <div className="border border-black/10 p-8 hover:border-black/30 transition-colors h-full">
                  <div className="mb-6">
                    <h3 className="font-medium text-xl text-black group-hover:opacity-60 transition-opacity mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {service.pricing && (
                    <div className="pt-6 border-t border-black/10">
                      <p className="text-xs text-black/40 uppercase tracking-wider mb-1">
                        {service.pricing.type}
                      </p>
                      <p className="text-lg font-medium text-black">
                        {service.pricing.starting}
                      </p>
                    </div>
                  )}
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-black/60 mb-8">
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors text-sm"
          >
            Let's Talk About Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
