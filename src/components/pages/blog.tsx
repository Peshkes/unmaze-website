import Link from 'next/link'
import { t, getLocalePrefix } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { generateItemListJsonLd } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { getAllBlogPosts } from '@/lib/content'

interface BlogPageContentProps {
  locale: Locale
}

export function BlogPageContent({ locale }: BlogPageContentProps) {
  const dict = t(locale)
  const prefix = getLocalePrefix(locale)
  const posts = getAllBlogPosts(locale)

  return (
    <main className="px-4 pt-24 pb-16 md:px-8 md:pt-32">
      <JsonLd
        data={generateItemListJsonLd(
          posts.map((p) => ({
            name: p.title,
            url: `https://unmaze.app${prefix}/blog/${p.slug}`,
          }))
        )}
      />
      <div className="mx-auto max-w-[var(--max-width)]">
        <h1 className="mb-10 text-2xl font-normal md:mb-16 md:text-4xl lg:text-6xl">
          {dict.blog.heading}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`${prefix}/blog/${post.slug}`}
              className="group rounded-2xl bg-bg-light p-6 transition-colors duration-300 hover:bg-black hover:text-white"
            >
              <time className="text-sm text-text-muted group-hover:text-white/60">
                {new Date(post.date).toLocaleDateString(locale)}
              </time>
              <h2 className="mt-2 mb-2 text-lg font-semibold">{post.title}</h2>
              <p className="text-sm text-text-body group-hover:text-white/80">
                {post.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium underline">
                {dict.blog.readMore}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}