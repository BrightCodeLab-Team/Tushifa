/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "d1f59xuafeit1ham.public.blob.vercel-storage.com",
        port: "",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
