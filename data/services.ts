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
    },
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'Most clients see initial improvements within 3-6 months. Significant ranking growth typically happens over 6-12 months. Results vary by industry competitiveness and current website status.'
      },
      {
        question: 'What\'s the difference between SEO and SEM?',
        answer: 'SEO (organic search) generates free long-term traffic through optimization. SEM (search engine marketing) includes paid ads. A combined strategy is most effective for rapid growth.'
      },
      {
        question: 'Do you guarantee first-page rankings?',
        answer: 'No reputable SEO professional can guarantee rankings, as Google algorithms change constantly. I focus on sustainable, white-hat practices that follow Google guidelines.'
      },
      {
        question: 'What tools do you use for SEO analysis?',
        answer: 'I use industry-leading tools including Semrush, Ahrefs, Google Search Console, Google Analytics 4, and Screaming Frog for comprehensive analysis and reporting.'
      },
      {
        question: 'Can you help with local SEO?',
        answer: 'Yes, I specialize in local SEO including Google Business Profile optimization, local citations, and location-specific keyword strategies.'
      }
    ],
    reviews: [
      {
        author: "Jane Doe",
        company: "Tech Solutions Ltd.",
        rating: 5,
        text: "Our organic traffic increased by 150% in just 6 months. The results speak for themselves. Highly recommended!",
      }
    ]
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
    },
    faqs: [
      {
        question: 'What makes your WordPress sites different?',
        answer: 'I build custom, performance-optimized WordPress sites with clean code, excellent SEO, and stunning design. I avoid bloated plugins and focus on speed and security.'
      },
      {
        question: 'Can you migrate my existing site to WordPress?',
        answer: 'Yes, I handle complete WordPress migrations including preserving SEO rankings, redirecting old URLs, and ensuring zero downtime.'
      },
      {
        question: 'Do you provide ongoing support?',
        answer: 'Yes, I offer maintenance packages including updates, backups, performance monitoring, and technical support.'
      }
    ],
    reviews: [
      {
        author: "John Smith",
        company: "Creative Minds Inc.",
        rating: 5,
        text: "The new WordPress site is not only beautiful but also incredibly fast. The team was a pleasure to work with.",
      }
    ]
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
    },
    faqs: [
      {
        question: 'Is AI-generated content unique and original?',
        answer: 'Yes, AI content is generated specifically for your project. I train the AI on your brand voice and guidelines to ensure consistency and originality.'
      },
      {
        question: 'How do you maintain my brand voice?',
        answer: 'I analyze your existing content, guidelines, and tone, then train the AI model to generate content that matches your brand perfectly.'
      },
      {
        question: 'Can you optimize content for SEO?',
        answer: 'Absolutely. All AI-generated content is optimized for target keywords, includes proper formatting, and follows SEO best practices.'
      }
    ]
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
    },
    faqs: [
      {
        question: 'How much time and money can I save with automation?',
        answer: 'Depending on the process, you can typically save 10-20 hours per week and reduce operational costs by 30-50%. Most automations pay for themselves within 2-3 months.'
      },
      {
        question: 'Do I need coding knowledge to use the automation?',
        answer: 'No, I build user-friendly interfaces and provide comprehensive training so your team can manage everything without coding knowledge.'
      },
      {
        question: 'What happens if something breaks?',
        answer: 'I provide ongoing support, error monitoring, and quick fixes. Most issues are resolved within 24 hours.'
      }
    ]
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
    },
    faqs: [
      {
        question: 'What technologies do you use?',
        answer: 'I specialize in React, Next.js, Node.js, TypeScript, and modern cloud platforms. I choose the best tech stack for each project\'s specific needs.'
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Projects typically take 4-12 weeks depending on complexity. I provide detailed timelines after the discovery phase.'
      },
      {
        question: 'Can you handle complex integrations?',
        answer: 'Yes, I can integrate with virtually any third-party API or service. Common integrations include payment processors, CRMs, analytics, and cloud services.'
      }
    ]
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
    },
    faqs: [
      {
        question: 'What topics can we consult on?',
        answer: 'I provide guidance on web development strategy, SEO and digital marketing, AI and automation, technical architecture, and team training.'
      },
      {
        question: 'Can you conduct team training?',
        answer: 'Yes, I offer tailored workshops for teams on topics like React, SEO, AI tools, and modern development practices.'
      },
      {
        question: 'How many hours should I book?',
        answer: 'Initial consultations are typically 1-2 hours. For ongoing strategy work, I recommend 5-10 hours per month.'
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};