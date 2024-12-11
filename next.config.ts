import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    // OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    // GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    DATABASE_URL: process.env.DATABASE_URL,
    // NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'], // Add Cloudinary to allowed domains
  },
  webpack: (config, { isServer }) => {
    // Add the yjs alias to webpack configuration
    if (!isServer) {
      config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs');
    }
    return config;
  },
};

// Combine your existing configuration with next-intl
export default nextConfig;
