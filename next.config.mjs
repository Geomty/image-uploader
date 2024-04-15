/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p5yx5sgorpu8liwy.public.blob.vercel-storage.com"
      }
    ]
  }
};

export default nextConfig;
