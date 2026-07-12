import type { NextConfig } from 'next'

const assetHost = 'https://ameland-audiotours-website-jmndstc7u-wadnverhaals-projects.vercel.app'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: `${assetHost}/images/:path*`,
      },
    ]
  },
}

export default nextConfig
