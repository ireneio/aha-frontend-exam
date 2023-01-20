/** @type {import('next').NextConfig} */
module.exports = {
  target: 'serverless',
  reactStrictMode: true,
  images: {
    domains: ['cdn.fakercloud.com', 'via.placeholder.com'],
  },
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};
