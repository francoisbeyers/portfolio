import { getBlogPostBySlug, getBlogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { createMetadata } from '@/app/lib/metadata';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { generateBlogPostingSchema } from '@/app/lib/schema';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Image from 'next/image';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return notFound();
  }
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://francoisbeyers.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.coverImage ? [{
        url: `https://francoisbeyers.com${post.coverImage}`,
        width: 1200,
        height: 630,
        alt: `${post.title} cover image`,
      }] : [],
    }
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Blog', href: '/blog' },
    { name: post.title },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <SchemaMarkup schema={generateBlogPostingSchema({
        title: post.title,
        description: post.excerpt,
        image: post.coverImage,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        author: post.author,
      })} />

      <div className="container mx-auto max-w-3xl px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal my-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-sm text-black/60 mb-8">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        {post.coverImage && (
          <div className="mb-8">
            <Image
              src={post.coverImage}
              alt={`${post.title} cover image`}
              width={1200}
              height={630}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs text-black/40 px-2 py-1 border border-black/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
