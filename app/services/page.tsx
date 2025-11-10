'use client';

import { motion } from 'framer-motion';
import ServicesGrid from '@/components/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-medium text-black mb-8">
            Services <span className="text-rusty-red">•</span>
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            From <span className="text-rusty-red font-medium">SEO and web development</span> to AI automation and content generation,
            I offer comprehensive digital solutions to help your business thrive online.
          </p>
        </motion.div>
      </section>

      <ServicesGrid />
    </div>
  );
}
