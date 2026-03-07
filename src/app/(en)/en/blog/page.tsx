import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { BlogPageContent } from '@/components/pages/blog'

const dict = t('en')

export const metadata = createMetadata({
  title: dict.blog.heading,
  description: dict.blog.description,
  path: '/blog',
  locale: 'en',
})

export default function BlogPage() {
  return <BlogPageContent locale="en" />
}