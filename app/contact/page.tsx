'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input, Textarea, Button, Card, CardBody } from '@heroui/react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            Let's Work Together
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <div className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h2 className="text-xl font-medium text-black mb-8">
              Contact Info
            </h2>

            <div className="space-y-8 text-sm">
              <div>
                <h3 className="font-medium text-black mb-2">Email</h3>
                <a
                  href="mailto:francois@beyers.tech"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  francois@beyers.tech
                </a>
              </div>

              <div>
                <h3 className="font-medium text-black mb-2">Location</h3>
                <p className="text-black/60">Remote · Available Worldwide</p>
              </div>

              <div>
                <h3 className="font-medium text-black mb-2">Response Time</h3>
                <p className="text-black/60">Usually within 24 hours</p>
              </div>

              <div>
                <h3 className="font-medium text-black mb-3">Connect</h3>
                <div className="space-y-2">
                  <a
                    href="https://www.linkedin.com/in/francois-beyers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-black/60 hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/francoisbeyers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-black/60 hover:text-black transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com/BeyersFrancois"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-black/60 hover:text-black transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h2 className="text-xl font-medium text-black mb-8">Send a Message</h2>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8 p-4 border border-black/10 bg-black/5"
              >
                <p className="text-sm text-black/80">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black/10 focus:border-black focus:outline-none transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black/10 focus:border-black focus:outline-none transition-colors text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-black/10 focus:border-black focus:outline-none transition-colors text-sm"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-black/10 focus:border-black focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 border border-black bg-black text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
