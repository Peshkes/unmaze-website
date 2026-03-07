import type { Metadata } from 'next'
import type { Locale } from './i18n'

const SITE_URL = 'https://unmaze.app'
const SITE_NAME = 'Unmaze'

interface CreateMetadataParams {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  locale?: Locale
}

export function createMetadata({
  title,
  description,
  path = '',
  image,
  type = 'website',
  locale = 'ru',
}: CreateMetadataParams): Metadata {
  const canonicalUrl = `${SITE_URL}/${locale}${path}`

  const ruUrl = `${SITE_URL}/ru${path}`
  const enUrl = `${SITE_URL}/en${path}`
  const heUrl = `${SITE_URL}/he${path}`

  const ogImage = image || `${SITE_URL}/images/logo147black.webp`
  const ogLocale = locale === 'ru' ? 'ru_RU' : locale === 'en' ? 'en_US' : 'he_IL'

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ru: ruUrl,
        en: enUrl,
        he: heUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type,
      locale: ogLocale,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo147black.webp`,
    description:
      'Educational gaming platform for children with learning differences.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'manager@unmaze.ru',
      contactType: 'customer service',
    },
  }
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function generateWebPageJsonLd({
  title,
  description,
  url,
  breadcrumb,
}: {
  title: string
  description: string
  url: string
  breadcrumb?: BreadcrumbItem[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: { '@type': 'WebSite', url: SITE_URL, name: SITE_NAME },
    ...(breadcrumb
      ? {
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumb.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: item.name,
              item: item.url,
            })),
          },
        }
      : {}),
  }
}

export function generateFAQJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function generateBlogPostingJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    image: image || `${SITE_URL}/images/logo147black.webp`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo147black.webp`,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateItemListJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  }
}
