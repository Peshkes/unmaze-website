import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { getBlogPost, getAllBlogSlugs } from '@/lib/content'
import { BlogArticleContent } from '@/components/pages/blog-article'

export function generateStaticParams() {
  return getAllBlogSlugs('ru').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug, 'ru')
  if (!post) return {}

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    locale: 'ru',
    type: 'article',
  })
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug, 'ru')
  if (!post) notFound()

  return <BlogArticleContent locale="ru" post={post} />
}