import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.amelandaudiotours.nl',
        pathname: '/images/**',
      },
    ],
  },
}

export default nextConfig;
