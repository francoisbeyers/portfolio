import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    slug: 'seo-digital-marketing',
    description: 'Boost your online visibility and drive organic traffic with data-driven SEO strategies and digital marketing campaigns.',
    icon: '🎯',
    features: [
      'Technical SEO audits and optimization',
      'Keyword research and content strategy',
      'On-page and off-page SEO',
      'Local SEO optimization',
      'Google Analytics and Search Console setup',
      'Monthly performance reporting',
      'Link building campaigns',
      'Competitor analysis'
    ],
    pricing: {
      starting: '£500/month',
      type: 'Monthly retainer'
    },
    cta: {
      text: 'Improve Your Rankings',
      link: '/contact?service=seo'
    }
  },
  {
    id: 'frontend-wordpress',
    title: 'WordPress Development',
    slug: 'wordpress-development',
    description: 'Custom WordPress sites with stunning frontends, optimized for performance, SEO, and user experience.',
    icon: '💻',
    features: [
      'Custom theme development',
      'WooCommerce integration',
      'Page builder customization (Elementor, Gutenberg)',
      'Performance optimization',
      'Mobile-responsive design',
      'SEO-friendly structure',
      'Plugin development and integration',
      'Ongoing maintenance and support'
    ],
    pricing: {
      starting: '£2,000',
      type: 'Per project'
    },
    cta: {
      text: 'Start Your Project',
      link: '/contact?service=wordpress'
    }
  },
  {
    id: 'content-generation',
    title: 'AI Content Generation',
    slug: 'content-generation',
    description: 'Scale your content creation with AI-powered tools that maintain your brand voice and drive engagement.',
    icon: '✍️',
    features: [
      'SEO-optimized blog posts and articles',
      'Product descriptions at scale',
      'Social media content calendars',
      'Email marketing campaigns',
      'Landing page copy',
      'Brand voice training',
      'Content strategy consulting',
      'Multi-language content'
    ],
    pricing: {
      starting: '£300',
      type: 'Per content package'
    },
    cta: {
      text: 'Scale Your Content',
      link: '/contact?service=content'
    }
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    slug: 'ai-automation',
    description: 'Automate repetitive tasks and workflows with custom AI solutions that save time and increase efficiency.',
    icon: '🤖',
    features: [
      'Custom AI workflow automation',
      'Chatbot development and integration',
      'Document processing automation',
      'Email response automation',
      'Data entry and extraction',
      'Customer support automation',
      'API integrations',
      'Training and handover'
    ],
    pricing: {
      starting: '£1,500',
      type: 'Per automation project'
    },
    cta: {
      text: 'Automate Your Business',
      link: '/contact?service=automation'
    }
  },
  {
    id: 'web-development',
    title: 'Web & Mobile Development',
    slug: 'web-mobile-development',
    description: 'Modern, fast, and scalable web and mobile applications built with the latest technologies.',
    icon: '🚀',
    features: [
      'React/Next.js development',
      'Progressive Web Apps (PWA)',
      'E-commerce solutions',
      'Custom web applications',
      'API development and integration',
      'Database design and optimization',
      'Cloud deployment (Vercel, AWS)',
      'Mobile-first responsive design'
    ],
    pricing: {
      starting: '£3,000',
      type: 'Per project'
    },
    cta: {
      text: 'Build Your App',
      link: '/contact?service=web-dev'
    }
  },
  {
    id: 'consulting',
    title: 'Consulting & Training',
    slug: 'consulting-training',
    description: 'Expert guidance on web development, SEO strategy, AI implementation, and team training.',
    icon: '📚',
    features: [
      'Technical architecture consulting',
      'SEO strategy development',
      'AI implementation roadmaps',
      'Code reviews and audits',
      'Team training workshops',
      'Performance optimization consulting',
      'Technology stack selection',
      'Best practices guidance'
    ],
    pricing: {
      starting: '£100/hour',
      type: 'Hourly rate'
    },
    cta: {
      text: 'Book a Consultation',
      link: '/contact?service=consulting'
    }
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
