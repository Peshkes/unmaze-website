import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/i18n'
import { getLocalePrefix } from '@/lib/i18n'
import { getAllBlogPosts } from '@/lib/content'

interface ArticlesPreviewProps {
  dict: Dictionary
  locale: Locale
}

export function ArticlesPreview({ dict, locale }: ArticlesPreviewProps) {
  const prefix = getLocalePrefix(locale)
  const posts = getAllBlogPosts(locale)

  return (
    <section className="wrapper">
      <h2 className="reveal">{dict.blog.previewHeading}</h2>
      <div className="reveal-group">
        {posts.map((post, i) => (
          <div key={post.slug}>
            <Link
              href={`${prefix}/blog/${post.slug}`}
              className="clickable group flex items-baseline justify-between border-b border-border py-5 no-underline transition-transform duration-500 ease-in-out hover:translate-x-3 md:py-7"
            >
              <div className="flex items-baseline gap-4 pe-4 md:gap-6">
                <span className="shrink-0 text-[length:var(--text-small)] text-text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="m-0 text-[length:var(--text-body)] font-medium leading-snug text-text md:text-[length:var(--text-subheading)] md:font-normal">
                  {post.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden text-[length:var(--text-small)] text-text-muted md:inline">
                  {new Date(post.date).toLocaleDateString(locale, {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-text-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  &rarr;
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}