import { Metadata } from 'next';

export const createMetadata = (overrides: Partial<Metadata> = {}): Metadata => {
  const baseUrl = 'https://francoisbeyers.com';

  return {
    title: {
      default: 'Francois Beyers - Full-Stack Developer, SEO Expert, AI Automation',
      template: '%s | Francois Beyers',
    },
    description: 'Full-stack developer, SEO expert, and AI automation specialist. Building digital solutions that drive results.',
    keywords: [
      'full-stack developer',
      'SEO expert',
      'AI automation',
      'WordPress developer',
      'React developer',
      'Next.js development',
      'web development UK',
      'digital solutions',
      'web applications',
      'custom development'
    ],
    authors: [{ name: 'Francois Beyers' }],
    creator: 'Francois Beyers',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: baseUrl,
      siteName: 'Francois Beyers',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Francois Beyers - Full-Stack Developer, SEO Expert',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@BeyersFrancois',
      site: '@BeyersFrancois',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    ...overrides,
  };
};

// Page-specific metadata
export const pageMetadata = {
  services: (): Metadata => createMetadata({
    title: 'Services - Web Development, SEO, AI Automation',
    description: 'Explore comprehensive digital services: SEO optimization, WordPress development, AI automation, and more. From strategy to implementation.',
    keywords: 'SEO services, WordPress development, AI automation, web development services, digital marketing, AI content generation',
    openGraph: {
      type: 'website',
      title: 'Services - Web Development, SEO, AI Automation',
      description: 'Digital services designed to elevate your business online.',
      url: 'https://francoisbeyers.com/services',
    },
  }),

  projects: (): Metadata => createMetadata({
    title: 'Portfolio Projects - Web Development & Digital Solutions',
    description: 'Real-world projects showcasing design, development, and SEO expertise. Case studies in web development, WordPress, and digital transformation.',
    keywords: 'portfolio projects, web development case studies, design projects, SEO case studies, web design portfolio, client work',
    openGraph: {
      type: 'website',
      title: 'Portfolio - Real-World Projects',
      description: 'Explore our portfolio of successful projects and digital solutions.',
      url: 'https://francoisbeyers.com/projects',
    },
  }),

  contact: (): Metadata => createMetadata({
    title: 'Contact - Let\'s Work Together',
    description: 'Get in touch to discuss your project. Available for web development, SEO consulting, AI automation, and more. Quick response times, available worldwide.',
    keywords: 'contact, hire developer, web development inquiry, SEO consultation, project consultation',
    openGraph: {
      type: 'website',
      title: 'Contact - Start Your Project',
      description: 'Let\'s discuss how I can help with your digital needs.',
      url: 'https://francoisbeyers.com/contact',
    },
  }),

  service: (serviceTitle: string, serviceDescription: string): Metadata => createMetadata({
    title: `${serviceTitle} - Professional Services by Francois Beyers`,
    description: serviceDescription,
    keywords: [
      serviceTitle.toLowerCase(),
      'professional services',
      'web development',
      'SEO services',
      'digital solutions'
    ],
    openGraph: {
      type: 'website',
      title: serviceTitle,
      description: serviceDescription,
    },
  }),
};
