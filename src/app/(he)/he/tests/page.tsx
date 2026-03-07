import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { TestsPageContent } from '@/components/pages/tests'

const dict = t('he')

export const metadata = createMetadata({
  title: dict.tests.heading,
  description: dict.tests.description,
  path: '/tests',
  locale: 'he',
})

export default function TestsPage() {
  return <TestsPageContent locale="he" />
}