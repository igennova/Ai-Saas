/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"],
  },
  eslint: {
    ignoreDuringBuilds: true,  // Add this line here
  },
};

export default nextConfig;
