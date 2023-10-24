/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
            port: '',
            pathname: '/featured/**',
          },
          {
            protocol: 'http',
            hostname: '**',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
