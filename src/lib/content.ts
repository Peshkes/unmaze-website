import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Locale } from './i18n'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface BlogPostMeta {
  title: string
  slug: string
  date: string
  description: string
  image: string
}

interface ParsedContent {
  meta: BlogPostMeta
  content: string
}

function getMdxFiles(dir: string): ParsedContent[] {
  const fullDir = path.join(CONTENT_DIR, dir)
  if (!fs.existsSync(fullDir)) return []
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(fullDir, f), 'utf-8')
      const { data, content } = matter(raw)
      return { meta: data as BlogPostMeta, content }
    })
}

export function getAllBlogPosts(locale: Locale): (BlogPostMeta & { content: string })[] {
  return getMdxFiles(`blog/${locale}`)
    .map(({ meta, content }) => ({ ...meta, content }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string, locale: Locale) {
  return getAllBlogPosts(locale).find((p) => p.slug === slug)
}

export function getAllBlogSlugs(locale: Locale): string[] {
  return getAllBlogPosts(locale).map((p) => p.slug)
}