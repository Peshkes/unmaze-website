import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { ConditionPage } from '@/components/sections/condition-page'

const dict = t('en')

export const metadata = createMetadata({
  title: dict.conditionPages.adhd.meta.title,
  description: dict.conditionPages.adhd.meta.description,
  path: '/adhd',
  locale: 'en',
})

export default function AdhdPage() {
  return <ConditionPage dict={dict} locale="en" condition="adhd" />
}
