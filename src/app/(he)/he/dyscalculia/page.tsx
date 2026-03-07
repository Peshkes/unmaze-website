import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { ConditionPage } from '@/components/sections/condition-page'

const dict = t('he')

export const metadata = createMetadata({
  title: dict.conditionPages.dyscalculia.meta.title,
  description: dict.conditionPages.dyscalculia.meta.description,
  path: '/dyscalculia',
  locale: 'he',
})

export default function DyscalculiaPage() {
  return <ConditionPage dict={dict} locale="he" condition="dyscalculia" />
}
