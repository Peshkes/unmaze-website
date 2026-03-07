import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { ConditionPage } from '@/components/sections/condition-page'

const dict = t('he')

export const metadata = createMetadata({
  title: dict.conditionPages.dyslexia.meta.title,
  description: dict.conditionPages.dyslexia.meta.description,
  path: '/dyslexia',
  locale: 'he',
})

export default function DyslexiaPage() {
  return <ConditionPage dict={dict} locale="he" condition="dyslexia" />
}
