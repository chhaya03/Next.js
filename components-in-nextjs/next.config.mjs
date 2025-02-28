/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.wowslider.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
