import { t } from '@/lib/i18n'
import { createMetadata } from '@/lib/metadata'
import { HomePageContent } from '@/components/pages/home'

const dict = t('en')

export const metadata = createMetadata({
  title: dict.meta.title,
  description: dict.meta.description,
  locale: 'en',
})

export default function HomePage() {
  return <HomePageContent locale="en" />
}
