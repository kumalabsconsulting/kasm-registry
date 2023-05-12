/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kuma Labs Workspaces',
    description: 'The official store for Kuma Labs Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/kumalabsconsulting/kasm-registry/',
    contactUrl: 'https://github.com/kumalabsconsulting/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
