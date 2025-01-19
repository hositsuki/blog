import { Metadata } from 'next'

interface SeoOptions {
  title?: string
  description?: string
  openGraph?: {
    type?: 'website' | 'article' | 'book' | 'profile'
    url?: string
    images?: string[]
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'player' | 'app'
    creator?: string
    images?: string[]
  }
  type?: 'website' | 'article' | 'book' | 'profile'
}

export function generateSeoMetadata({
  title,
  description,
  openGraph,
  twitter,
  type,
}: SeoOptions = {}): Metadata {
  const defaultTitle = '雪桜さゆ'
  const defaultDescription = '程序员，热爱技术与文学。专注于法律、金融和技术领域的学习与探索。'

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription

  return {
    title: finalTitle,
    description: finalDescription,
    metadataBase: new URL('https://yume.ink'),
    authors: [{ name: '雪桜さゆ' }],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      type: openGraph?.type || type || 'website',
      url: openGraph?.url || 'https://yume.ink',
      siteName: defaultTitle,
      locale: 'zh_CN',
      images: openGraph?.images || ['/og-image.png'],
    },
    twitter: {
      card: twitter?.card || 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      creator: twitter?.creator || '@DawnSayu',
      images: twitter?.images || ['/og-image.png'],
    },
    alternates: {
      canonical: 'https://yume.ink',
      types: {
        'application/rss+xml': 'https://yume.ink/rss.xml',
        'application/atom+xml': 'https://yume.ink/atom.xml',
        'application/feed+json': 'https://yume.ink/feed.json',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}
