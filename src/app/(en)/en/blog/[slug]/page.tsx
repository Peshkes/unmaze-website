import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { getBlogPost, getAllBlogSlugs } from '@/lib/content'
import { BlogArticleContent } from '@/components/pages/blog-article'

export function generateStaticParams() {
  return getAllBlogSlugs('en').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug, 'en')
  if (!post) return {}

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    locale: 'en',
    type: 'article',
  })
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug, 'en')
  if (!post) notFound()

  return <BlogArticleContent locale="en" post={post} />
}
