import { createMetadata } from '@/app/lib/metadata';
import { getBlogPosts } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = createMetadata({
  title: 'Blog - SEO, Web Development, and AI',
  description: 'Explore articles on SEO, web development, AI automation, and more. Stay up-to-date with the latest trends and best practices.',
  openGraph: {
    title: 'Blog - Francois Beyers',
    description: 'Articles and insights on modern web technologies.',
    url: 'https://francoisbeyers.com/blog',
  },
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-4">Blog</h1>
        <p className="text-lg text-black/60 mb-12">
          Articles and insights on SEO, web development, and AI.
        </p>

        <div className="space-y-12">
          {posts.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={`${post.title} cover image`}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover aspect-[4/3]"
                    />
                  )}
                </div>
                <div className="md:col-span-3">
                  <p className="text-sm text-black/50 mb-2">{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <h2 className="text-2xl font-bold text-charcoal group-hover:text-black transition-colors mb-2">{post.title}</h2>
                  <p className="text-black/70 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs text-black/40 px-2 py-1 border border-black/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
