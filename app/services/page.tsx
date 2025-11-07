'use client';

import { motion } from 'framer-motion';
import ServicesGrid from '@/components/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-clash text-dark-grey mb-6">
          Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From SEO and web development to AI automation and content generation,
          I offer comprehensive digital solutions to help your business thrive online.
        </p>
      </motion.div>

      <ServicesGrid />
    </div>
  );
}
