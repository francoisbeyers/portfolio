'use client';

import { motion } from 'framer-motion';
import ServicesGrid from '@/components/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-lavender via-peach to-mint">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-tight">
            Services That Scale
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            From SEO and web development to AI automation and content generation,
            I offer comprehensive digital solutions to help your business thrive online.
          </p>
        </motion.div>
      </section>

      <ServicesGrid />
    </div>
  );
}
