import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL, 'https://test.yaxshiniyat.uz', 'https://yaxshiniyat.uz'].map(
        (item) => {
          const url = new URL(item)

          return {
            hostname: url.hostname,
            protocol: url.protocol.replace(':', ''),
          }
        },
      ),
    ],
  },

  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  output: 'standalone',
  sassOptions: {
    implementation: 'sass-embedded',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // async rewrites() {
  //     return [
  //       {
  //         source: '/((?!admin|api)):path*',
  //         destination: '/:tenantDomain/:path*',
  //         has: [
  //           {
  //             type: 'host',
  //             value: '(?<tenantDomain>.*)',
  //           },
  //         ],
  //       },
  //     ];
  //   }
}

export default withPayload(withNextIntl(nextConfig))
