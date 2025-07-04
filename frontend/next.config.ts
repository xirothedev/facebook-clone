import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [new URL('https://static.xx.fbcdn.net/**')],
  },
};

export default nextConfig;
