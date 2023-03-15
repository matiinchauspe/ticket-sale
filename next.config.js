/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomwordgenerator.com',
        pathname: '/img/picture-generator/**'
      }
    ]
  }
}

module.exports = nextConfig
