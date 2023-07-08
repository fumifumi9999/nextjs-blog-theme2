// const isProd = process.env.NODE_ENV === 'production';

// module.exports = {
//   assetPrefix: isProd ? '' : '',
//   trailingSlash: true
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/index.html',
        destination: '/'
      }
    ]
  }
}

module.exports = nextConfig