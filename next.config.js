/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['cdn-crownx.winmart.vn'],
},
}
