import type { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/content'
import type { Locale } from '@/lib/i18n'

export const dynamic = 'force-static'

const BASE_URL = 'https://unmaze.app'
const LAST_UPDATED = new Date('2026-03-07')

const locales: Locale[] = ['ru', 'en', 'he']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/test', '/blog', '/dyslexia', '/dyscalculia', '/adhd']

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: path === '/test' ? 'monthly' : 'weekly',
      priority: path === '' ? 1.0 : path === '/blog' ? 0.7 : 0.8,
    }))
  )

  const articlePages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getAllBlogPosts(locale).map((post) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticPages, ...articlePages]
}