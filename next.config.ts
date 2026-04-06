import type { NextConfig } from 'next'

const config: NextConfig = {
  basePath: '/NNF-HUB',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: '**' },
    ],
  },
}

export default config
