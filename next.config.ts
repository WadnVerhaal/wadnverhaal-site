import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ameland-audiotours-website-r1gbm5k5z-wadnverhaals-projects.vercel.app',
      },
    ],
  },
}

export default nextConfig;
