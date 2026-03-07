import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { ConditionPage } from '@/components/sections/condition-page'

const dict = t('en')

export const metadata = createMetadata({
  title: dict.conditionPages.dyscalculia.meta.title,
  description: dict.conditionPages.dyscalculia.meta.description,
  path: '/dyscalculia',
  locale: 'en',
})

export default function DyscalculiaPage() {
  return <ConditionPage dict={dict} locale="en" condition="dyscalculia" />
}
