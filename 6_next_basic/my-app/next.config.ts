import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://upload.wikimedia.org/**/**'),
      new URL('https://computing.psu.ac.th/**/**')],
    dangerouslyAllowLocalIP: true
  },

};

export default nextConfig;