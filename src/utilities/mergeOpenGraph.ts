import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Кредит на любые цели микрозаймом',
  images: [
    {
      url: `${getServerSideURL()}/og-image.jpg`,
    },
  ],
  siteName: 'Yaxshi Niyat',
  title: 'Yaxshi Niyat',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
