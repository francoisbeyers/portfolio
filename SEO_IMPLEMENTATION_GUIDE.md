# SEO Implementation Guide - Code Examples & Step-by-Step

This guide provides ready-to-implement code snippets for the SEO recommendations.

---

## Implementation Priority Matrix

| Priority | Task | Effort | Impact | Files |
|----------|------|--------|--------|-------|
| P0 | Add Organization + Service schemas | 1 hour | Very High | `app/lib/schema.ts`, `app/layout.tsx`, `app/services/[slug]/page.tsx` |
| P0 | Implement dynamic meta tags | 2 hours | Very High | `app/lib/metadata.ts`, all pages |
| P0 | Add page-specific descriptions | 30 min | High | All `.tsx` page files |
| P1 | Add BreadcrumbList schema | 30 min | High | `app/services/[slug]/page.tsx` |
| P1 | Add HowTo schema | 30 min | High | `app/services/[slug]/page.tsx` |
| P1 | Create project detail pages | 2 hours | High | `app/projects/[slug]/page.tsx` |
| P2 | Add FAQ sections | 1 hour | Medium | `app/services/[slug]/page.tsx` |
| P2 | Add testimonials structure | 1 hour | Medium | `data/services.ts`, schema markup |
| P3 | Create blog section | 4 hours | Medium | `app/blog/*` |
| P3 | Add internal linking | 1 hour | Medium | Various files |

---

## Step 1: Create Schema Markup Utility

Create `app/lib/schema.ts`:

```typescript
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Francois Beyers',
  'url': 'https://francoisbeyers.com',
  'logo': 'https://francoisbeyers.com/logo.png',
  'description': 'Full-Stack Developer, SEO Expert, and AI Automation Specialist',
  'sameAs': [
    'https://www.linkedin.com/in/francois-beyers/',
    'https://github.com/francoisbeyers',
    'https://twitter.com/BeyersFrancois'
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Customer Service',
    'email': 'francois@beyers.tech'
  },
  'location': {
    '@type': 'Place',
    'name': 'Remote',
    'address': 'Available Worldwide'
  }
});

export const generateServiceSchema = (service: {
  title: string;
  description: string;
  pricing?: { starting: string };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': service.title,
  'description': service.description,
  'provider': {
    '@type': 'Organization',
    'name': 'Francois Beyers',
    'url': 'https://francoisbeyers.com'
  },
  'areaServed': 'GB',
  'offers': service.pricing ? {
    '@type': 'Offer',
    'priceCurrency': 'GBP',
    'price': service.pricing.starting.match(/[\d,]+/)?.[0]?.replace(',', '') || 'Contact for pricing'
  } : undefined
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{
  name: string;
  url: string;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': crumb.name,
    'item': crumb.url
  }))
});

export const generateHowToSchema = (
  title: string,
  steps: Array<{
    name: string;
    text: string;
  }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': title,
  'step': steps.map((step, index) => ({
    '@type': 'HowToStep',
    'position': index + 1,
    'name': step.name,
    'text': step.text
  }))
});

export const generateFAQSchema = (faqs: Array<{
  question: string;
  answer: string;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
});

export const generatePersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Francois Beyers',
  'jobTitle': 'Full-Stack Developer, SEO Expert',
  'url': 'https://francoisbeyers.com',
  'email': 'francois@beyers.tech',
  'sameAs': [
    'https://www.linkedin.com/in/francois-beyers/',
    'https://github.com/francoisbeyers',
    'https://twitter.com/BeyersFrancois'
  ],
  'knowsAbout': [
    'Full-Stack Development',
    'Search Engine Optimization',
    'AI Automation',
    'React',
    'Next.js',
    'WordPress Development',
    'Web Design'
  ]
});

export const generateCreativeWorkSchema = (project: {
  title: string;
  description?: string;
  year: number;
  url?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  'name': project.title,
  'description': project.description,
  'creator': {
    '@type': 'Person',
    'name': 'Francois Beyers',
    'url': 'https://francoisbeyers.com'
  },
  'datePublished': `${project.year}-01-01`,
  'url': project.url
});
```

---

## Step 2: Create Schema Component

Create `app/components/SchemaMarkup.tsx`:

```typescript
'use client';

interface SchemaMarkupProps {
  schema: Record<string, any>;
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
      suppressHydrationWarning
    />
  );
}
```

---

## Step 3: Create Metadata Configuration

Create `app/lib/metadata.ts`:

```typescript
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
    description: 'Explore comprehensive digital services: SEO optimization, WordPress development, AI content generation, automation, and more. From strategy to implementation.',
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
```

---

## Step 4: Update Layout to Use New Metadata

Update `app/layout.tsx`:

```typescript
import { createMetadata } from '@/lib/metadata';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { generateOrganizationSchema, generatePersonSchema } from '@/lib/schema';

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup schema={generateOrganizationSchema()} />
        <SchemaMarkup schema={generatePersonSchema()} />
        <link rel="canonical" href="https://francoisbeyers.com" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body>
        {/* Your existing content */}
        {children}
      </body>
    </html>
  );
}
```

---

## Step 5: Update Service Detail Page with Schemas & FAQs

Update `app/services/[slug]/page.tsx`:

```typescript
'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getServiceBySlug, services } from '@/data/services';
import { getProjectsByService } from '@/data/projects';
import { notFound } from 'next/navigation';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateFAQSchema,
} from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return pageMetadata.service(service.title, service.description);
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = getProjectsByService(service.id);

  // Prepare schema data
  const breadcrumbs = [
    { name: 'Home', url: 'https://francoisbeyers.com' },
    { name: 'Services', url: 'https://francoisbeyers.com/services' },
    { name: service.title, url: `https://francoisbeyers.com/services/${service.slug}` },
  ];

  const howToSteps = [
    { name: 'Discovery Call', text: 'We\'ll discuss your goals, challenges, and requirements to ensure we\'re the right fit.' },
    { name: 'Strategy & Proposal', text: 'I\'ll create a detailed plan outlining the approach, timeline, and deliverables.' },
    { name: 'Implementation', text: 'I\'ll execute the plan with regular updates and opportunities for feedback.' },
    { name: 'Launch & Support', text: 'We\'ll launch your project and I\'ll provide ongoing support to ensure success.' },
  ];

  const serviceColors = [
    'from-pink to-lavender',
    'from-cyan to-light-blue',
    'from-yellow to-peach',
    'from-lavender to-pink',
    'from-peach to-mint',
    'from-mint to-cyan',
  ];

  const serviceIndex = services.findIndex(s => s.id === service.id);
  const gradientClass = serviceColors[serviceIndex % serviceColors.length];

  return (
    <div className="min-h-screen bg-off-white">
      <head>
        <SchemaMarkup schema={generateServiceSchema(service)} />
        <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
        <SchemaMarkup schema={generateHowToSchema(`How to Get Started with ${service.title}`, howToSteps)} />
        {service.faqs && <SchemaMarkup schema={generateFAQSchema(service.faqs)} />}
      </head>

      {/* Hero Section */}
      <section className={`py-20 px-4 bg-gradient-to-br ${gradientClass}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb Navigation */}
            <nav className="mb-8 text-sm text-charcoal/60">
              <ol className="flex items-center gap-2">
                {breadcrumbs.map((crumb, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {idx > 0 && <span className="text-charcoal/40">/</span>}
                    {idx === breadcrumbs.length - 1 ? (
                      <span className="text-charcoal font-medium">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.url} className="hover:text-charcoal transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Back button */}
            <Link
              href="/services"
              className="inline-flex items-center text-charcoal/70 hover:text-charcoal transition-colors mb-6"
            >
              ← Back to Services
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <span className="text-6xl md:text-8xl">{service.icon}</span>
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-3">
                  {service.title}
                </h1>
                {service.pricing && (
                  <p className="text-lg md:text-xl text-charcoal/70 font-medium">
                    Starting at {service.pricing.starting}
                  </p>
                )}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed max-w-4xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Features */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                What's Included
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg text-charcoal/80">
                    <span className="text-2xl text-charcoal flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                  Related Projects
                </h2>
                <div className="space-y-4">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.id}
                      href={project.link}
                      className="block p-6 border border-charcoal/10 hover:border-charcoal/50 transition-colors"
                    >
                      <h3 className="text-2xl font-bold text-charcoal mb-2">
                        {project.title}
                      </h3>
                      <p className="text-charcoal/70 text-lg">{project.type}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                How It Works
              </h2>
              <ol className="space-y-6">
                {howToSteps.map((step, idx) => (
                  <li key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-xl">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">{step.name}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ Section - NEW */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <details key={idx} className="border border-charcoal/10 p-6 cursor-pointer group">
                      <summary className="font-bold text-charcoal text-lg group-open:mb-4">
                        {faq.question}
                      </summary>
                      <p className="text-charcoal/80 leading-relaxed">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Related Services */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                Pair with Other Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services
                  .filter(s => s.id !== service.id)
                  .slice(0, 2)
                  .map(relatedService => (
                    <Link
                      key={relatedService.id}
                      href={`/services/${relatedService.slug}`}
                      className="p-6 border border-charcoal/10 hover:border-charcoal/50 transition-colors group"
                    >
                      <span className="text-3xl block mb-3">{relatedService.icon}</span>
                      <h3 className="font-bold text-lg text-charcoal mb-2 group-hover:opacity-80 transition-opacity">
                        {relatedService.title}
                      </h3>
                      <p className="text-sm text-charcoal/70">{relatedService.description.substring(0, 100)}...</p>
                    </Link>
                  ))}
              </div>
            </section>
          </motion.div>

          {/* Sidebar CTA */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 p-8 bg-charcoal text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-white/80 leading-relaxed">
                Let's discuss how I can help with your {service.title.toLowerCase()} needs.
              </p>
              <Link
                href={service.cta.link}
                className="block w-full p-4 bg-white text-charcoal font-bold text-center hover:bg-white/90 transition-colors mb-3"
              >
                {service.cta.text}
              </Link>
              <Link
                href="/contact"
                className="block w-full p-4 border border-white text-white font-bold text-center hover:bg-white/10 transition-colors"
              >
                Schedule a Call
              </Link>

              {service.pricing && (
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/60 text-sm mb-2">{service.pricing.type}</p>
                  <p className="text-3xl font-bold">{service.pricing.starting}</p>
                </div>
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
```

---

## Step 6: Update Services Data with FAQs

Update `data/services.ts`:

```typescript
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
```

---

## Step 7: Update Type Definitions

Update `types/index.ts` to include FAQ:

```typescript
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    starting: string;
    type: string;
  };
  cta: {
    text: string;
    link: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  year: number;
  link: string;
  url?: string;
  tags?: string[];
  services?: string[];
  description?: string;
  imagePath?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  service?: string;
}
```

---

## Step 8: Add robots.txt

Create `public/robots.txt`:

```
# Allow all crawlers
User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin
Disallow: /api
Disallow: /admin-panel

# Specify sitemap
Sitemap: https://francoisbeyers.com/sitemap.xml
Sitemap: https://francoisbeyers.com/sitemap-0.xml

# Crawl delay (optional - be nice to servers)
Crawl-delay: 1
```

---

## Step 9: Create Breadcrumb Component (Optional Visual Enhancement)

Create `app/components/Breadcrumbs.tsx`:

```typescript
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-8 text-sm text-charcoal/60">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
        </li>

        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-charcoal/40">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-charcoal transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-charcoal font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

---

## Implementation Checklist

- [ ] Create `app/lib/schema.ts`
- [ ] Create `app/components/SchemaMarkup.tsx`
- [ ] Create `app/lib/metadata.ts`
- [ ] Update `app/layout.tsx` with metadata and schemas
- [ ] Update `app/services/[slug]/page.tsx` with breadcrumbs, schemas, FAQs
- [ ] Update `data/services.ts` with FAQ data
- [ ] Update `types/index.ts` with FAQ interface
- [ ] Create `public/robots.txt`
- [ ] Update `app/services/page.tsx` with page metadata
- [ ] Update `app/projects/page.tsx` with page metadata
- [ ] Update `app/contact/page.tsx` with page metadata
- [ ] Create project detail pages (`app/projects/[slug]/page.tsx`)
- [ ] Test schemas with Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor search performance in GSC

---

## Testing

### Test Schemas
1. Go to https://schema.org/validator/
2. Paste your page HTML
3. Verify all schemas render correctly

### Test Rich Results
1. Go to https://search.google.com/test/rich-results
2. Test each page URL
3. Verify FAQPage, HowTo, Service schemas appear

### Test Meta Tags
1. Use https://www.seobility.net/en/seocheck/
2. Verify title, description, og:image on each page

### Monitor Performance
1. Set up Google Search Console
2. Monitor clicks, impressions, CTR
3. Track keyword rankings
4. Review Core Web Vitals monthly

---

## Expected Results Timeline

**Week 1-2:** Schema markup implementation
- Expected: Google starts recognizing rich results
- Traffic impact: Minimal (+5-10% CTR improvement)

**Week 3-4:** Meta tags + project pages
- Expected: Better SERP appearance, project page indexing
- Traffic impact: +10-20% organic traffic

**Month 2:** Content expansion (FAQs, blog)
- Expected: More featured snippets, increased visibility
- Traffic impact: +20-40% organic traffic

**Month 3+:** Full SEO strategy
- Expected: Authority building, top rankings for target keywords
- Traffic impact: +50-100% organic traffic potential

