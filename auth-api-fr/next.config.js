/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'ko', 'zh'],
  },
};

module.exports = nextConfig;
