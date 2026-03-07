import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { TestPageContent } from '@/components/pages/test'

const dict = t('ru')

export const metadata = createMetadata({
  title: dict.test.heading,
  description: dict.test.description,
  path: '/test',
  locale: 'ru',
})

export default function TestPage() {
  return <TestPageContent locale="ru" />
}