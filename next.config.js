/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  images: {
    domains: ['i.imgur.com'],
  },
}

module.exports = nextConfig
