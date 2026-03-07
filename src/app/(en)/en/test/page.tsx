import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { TestPageContent } from '@/components/pages/test'

const dict = t('en')

export const metadata = createMetadata({
  title: dict.test.heading,
  description: dict.test.description,
  path: '/test',
  locale: 'en',
})

export default function TestPage() {
  return <TestPageContent locale="en" />
}