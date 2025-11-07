'use client';

import { motion } from 'framer-motion';
import ServicesGrid from '@/components/ServicesGrid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="py-section px-container bg-gradient-to-br from-lavender via-peach to-mint">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="container mx-auto max-w-6xl text-center"
        >
          <h1 className="text-display-lg font-display font-bold text-charcoal mb-8">
            Services That Scale
          </h1>
          <p className="text-body-lg text-charcoal/80 max-w-4xl mx-auto">
            From SEO and web development to AI automation and content generation,
            I offer comprehensive digital solutions to help your business thrive online.
          </p>
        </motion.div>
      </section>

      <ServicesGrid />
    </div>
  );
}
