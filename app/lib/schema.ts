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

export const generateAggregateRatingSchema = (reviews: Array<{ rating: number }>) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }
  const reviewCount = reviews.length;
  const ratingValue = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviewCount).toFixed(1);

  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating: '5',
    worstRating: '1',
  };
};

export const generateBlogPostingSchema = (post: {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  image: post.image ? `https://francoisbeyers.com${post.image}` : undefined,
  datePublished: post.publishedAt,
  dateModified: post.updatedAt || post.publishedAt,
  author: {
    '@type': 'Person',
    name: post.author,
    url: 'https://francoisbeyers.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Francois Beyers',
    logo: {
      '@type': 'ImageObject',
      url: 'https://francoisbeyers.com/logo.png',
    },
  },
});
