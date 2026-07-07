import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  sassOptions: {
    includePaths: ['./components/_setup'],
  },
}

export default nextConfig
