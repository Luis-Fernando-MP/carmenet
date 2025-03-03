import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://carmenet.vercel.app'),
  title: 'Carmenet',
  description:
    'Carmenet Reserve es una colección de vinos finos inspirados en Francia con un toque californiano. Cultivados en nuestro viñedo familiar Forest Lake en Lodi, CA, desde 1983, nuestros vinos equilibrados y elegantes ofrecen lujo asequible. Descubre nuestra selección y brinda por nuevos descubrimientos.',
  keywords: [
    'Carmenet',
    'vinos californianos',
    'vinos finos',
    'vinícola',
    'enología',
    'vino tinto',
    'vino blanco',
    'degustación',
    'vino artesanal',
    'vino premium',
    'lujo asequible',
    'Forest Lake Vineyard'
  ],
  authors: [{ name: 'Luis MP', url: 'luisjp.vercel.app' }],
  creator: 'Luis MP',
  publisher: 'SHUN',
  icons: {
    icon: '/logo.svg'
  },
  openGraph: {
    title: 'Carmenet Reserve Wines - Vinos de Carácter Distintivo',
    description:
      'Carmenet Reserve es una colección de vinos finos inspirados en Francia con un toque californiano. Cultivados en nuestro viñedo familiar Forest Lake en Lodi, CA, desde 1983, nuestros vinos equilibrados y elegantes ofrecen lujo asequible. Descubre nuestra selección y brinda por nuevos descubrimientos.',
    url: 'https://carmenet.vercel.app',
    siteName: 'Carmenet Reserve Wines',
    images: [
      {
        url: '/opengraph.png',
        alt: 'Carmenet Reserve Wines Logo',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carmenet Reserve Wines - Vinos de Carácter Distintivo',
    description:
      'Carmenet Reserve es una colección de vinos finos inspirados en Francia con un toque californiano. Cultivados en nuestro viñedo familiar Forest Lake en Lodi, CA, desde 1983, nuestros vinos equilibrados y elegantes ofrecen lujo asequible. Descubre nuestra selección y brinda por nuevos descubrimientos.',
    images: [
      {
        url: '/opengraph.png',
        alt: 'Carmenet Reserve Wines Logo'
      }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}
