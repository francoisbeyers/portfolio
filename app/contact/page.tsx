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
      <section className="py-section px-container bg-gradient-to-br from-peach via-pink to-lavender">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="container mx-auto max-w-6xl text-center"
        >
          <h1 className="text-display-lg font-display font-bold text-charcoal mb-8">
            Let's Work Together
          </h1>
          <p className="text-body-lg text-charcoal/80 max-w-4xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-container py-section max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gap">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            <h2 className="text-display-sm font-display font-bold text-charcoal mb-8">
              Get In Touch
            </h2>

            <div className="space-y-gap mb-12">
              <div className="bg-cyan p-container rounded-klarna">
                <h3 className="text-body-lg font-bold text-charcoal mb-2">Email</h3>
                <a
                  href="mailto:francois@beyers.tech"
                  className="text-body-md text-charcoal/80 hover:text-charcoal transition-klarna duration-klarna"
                >
                  francois@beyers.tech
                </a>
              </div>

              <div className="bg-mint p-container rounded-klarna">
                <h3 className="text-body-lg font-bold text-charcoal mb-2">Location</h3>
                <p className="text-body-md text-charcoal/80">Remote · Available Worldwide</p>
              </div>

              <div className="bg-light-blue p-container rounded-klarna">
                <h3 className="text-body-lg font-bold text-charcoal mb-2">Response Time</h3>
                <p className="text-body-md text-charcoal/80">Usually within 24 hours</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-off-white border-2 border-charcoal rounded-klarna p-container">
              <h3 className="text-body-lg font-bold text-charcoal mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/francois-beyers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-md flex items-center gap-3 text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna font-bold"
                >
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/francoisbeyers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-md flex items-center gap-3 text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna font-bold"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href="https://twitter.com/BeyersFrancois"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-md flex items-center gap-3 text-charcoal/70 hover:text-charcoal transition-klarna duration-klarna font-bold"
                >
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.2 }}
          >
            <div className="bg-off-white border-2 border-charcoal rounded-klarna p-container">
              <h2 className="text-display-sm font-display font-bold text-charcoal mb-8">Send a Message</h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 p-4 bg-mint rounded-klarna"
                >
                  <p className="text-body-md text-charcoal font-bold">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-body-md text-charcoal font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-klarna border-2 border-charcoal bg-off-white focus:border-charcoal focus:outline-none transition-klarna duration-klarna text-body-md"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-body-md text-charcoal font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-klarna border-2 border-charcoal bg-off-white focus:border-charcoal focus:outline-none transition-klarna duration-klarna text-body-md"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-body-md text-charcoal font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-klarna border-2 border-charcoal bg-off-white focus:border-charcoal focus:outline-none transition-klarna duration-klarna text-body-md"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-md text-charcoal font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-klarna border-2 border-charcoal bg-off-white focus:border-charcoal focus:outline-none transition-klarna duration-klarna resize-none text-body-md"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-klarna-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
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
