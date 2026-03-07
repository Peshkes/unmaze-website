import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { t, getLocalePrefix } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { generateBlogPostingJsonLd } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import type { BlogPostMeta } from '@/lib/content'

interface BlogArticleContentProps {
  locale: Locale
  post: BlogPostMeta & { content: string }
}

export function BlogArticleContent({ locale, post }: BlogArticleContentProps) {
  const dict = t(locale)
  const prefix = getLocalePrefix(locale)

  return (
    <main className="px-4 pt-24 pb-16 md:px-8 md:pt-32">
      <JsonLd
        data={generateBlogPostingJsonLd({
          title: post.title,
          description: post.description,
          url: `https://unmaze.app${prefix}/blog/${post.slug}`,
          datePublished: post.date,
        })}
      />
      <article className="mx-auto max-w-3xl">
        <Link
          href={`${prefix}/blog`}
          className="mb-6 inline-block text-sm text-text-muted transition-colors hover:text-text"
        >
          &larr; {dict.blog.heading}
        </Link>
        <time className="block text-sm text-text-muted">
          {new Date(post.date).toLocaleDateString(locale)}
        </time>
        <h1 className="mt-2 mb-8 text-2xl font-normal md:text-4xl">{post.title}</h1>
        <div className="prose prose-neutral max-w-none md:prose-lg">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  )
}