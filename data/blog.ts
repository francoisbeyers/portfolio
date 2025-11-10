import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 SEO Mistakes Small Businesses Make',
    slug: 'top-5-seo-mistakes-small-businesses-make',
    excerpt: 'Are you making these common SEO mistakes? Find out how to avoid them and improve your search engine rankings.',
    content: `
<p>Search Engine Optimization (SEO) is crucial for any business looking to succeed online. However, many small businesses make common mistakes that can hurt their rankings. Here are the top 5 SEO mistakes to avoid:</p>

<h3 class="text-2xl font-bold mt-8 mb-4">1. Neglecting Keyword Research</h3>
<p>Many businesses guess what their customers are searching for. Proper keyword research is the foundation of any successful SEO strategy. Use tools like Google Keyword Planner, Ahrefs, or Semrush to find what your customers are actually searching for.</p>

<h3 class="text-2xl font-bold mt-8 mb-4">2. Ignoring On-Page SEO</h3>
<p>On-page SEO involves optimizing individual web pages to rank higher and earn more relevant traffic. This includes optimizing your title tags, meta descriptions, headers, and images. Make sure every page has a unique title and meta description that includes your target keyword.</p>

<h3 class="text-2xl font-bold mt-8 mb-4">3. Lack of Quality Content</h3>
<p>Content is king in the world of SEO. Your website needs to have high-quality, informative content that answers your customers' questions. A blog is a great way to consistently create fresh content and target a wide range of keywords.</p>

<h3 class="text-2xl font-bold mt-8 mb-4">4. Forgetting About Mobile</h3>
<p>More than half of all web traffic now comes from mobile devices. If your website is not mobile-friendly, you're providing a poor user experience and likely hurting your rankings. Google uses mobile-first indexing, which means it primarily uses the mobile version of the content for indexing and ranking.</p>

<h3 class="text-2xl font-bold mt-8 mb-4">5. Ignoring Local SEO</h3>
<p>If you're a local business, local SEO is essential. This involves optimizing your website for a specific geographic area. Claim your Google Business Profile, build local citations, and create content that is relevant to your local audience.</p>

<p class="mt-8">By avoiding these common mistakes, you can significantly improve your website's SEO performance and attract more customers.</p>
`,
    publishedAt: '2025-11-10',
    author: 'Francois Beyers',
    category: 'SEO',
    tags: ['SEO', 'Small Business', 'Digital Marketing'],
    coverImage: '/blog/seo-mistakes.jpg', // Placeholder image
  },
];

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
