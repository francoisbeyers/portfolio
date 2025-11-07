'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-peach via-pink to-lavender">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-5xl text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-tight">
            Let's Work Together
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-cyan p-6 rounded-3xl">
                <h3 className="text-xl font-bold text-charcoal mb-2">Email</h3>
                <a
                  href="mailto:francois@beyers.tech"
                  className="text-charcoal/80 hover:text-charcoal transition-colors"
                >
                  francois@beyers.tech
                </a>
              </div>

              <div className="bg-mint p-6 rounded-3xl">
                <h3 className="text-xl font-bold text-charcoal mb-2">Location</h3>
                <p className="text-charcoal/80">Remote · Available Worldwide</p>
              </div>

              <div className="bg-light-blue p-6 rounded-3xl">
                <h3 className="text-xl font-bold text-charcoal mb-2">Response Time</h3>
                <p className="text-charcoal/80">Usually within 24 hours</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-charcoal mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/francois-beyers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  <span className="text-2xl">💼</span>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/francoisbeyers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  <span className="text-2xl">💻</span>
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://twitter.com/BeyersFrancois"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-charcoal/70 hover:text-charcoal transition-colors"
                >
                  <span className="text-2xl">🐦</span>
                  <span className="font-medium">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Send a Message</h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-mint rounded-2xl"
                >
                  <p className="text-charcoal font-medium">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-charcoal font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-charcoal/10 focus:border-charcoal focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-charcoal font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-charcoal/10 focus:border-charcoal focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-charcoal font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-charcoal/10 focus:border-charcoal focus:outline-none transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-charcoal/10 focus:border-charcoal focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-charcoal text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-soft disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
