/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["assets.wuiltsite.com","images.unsplash.com","res.cloudinary.com"],
  },
};

module.exports = nextConfig;
