import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { TestsPageContent } from '@/components/pages/tests'

const dict = t('en')

export const metadata = createMetadata({
  title: dict.tests.heading,
  description: dict.tests.description,
  path: '/tests',
  locale: 'en',
})

export default function TestsPage() {
  return <TestsPageContent locale="en" />
}