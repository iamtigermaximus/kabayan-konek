// import { NextConfig } from 'next';
// import path from 'path';

// const nextConfig: NextConfig = {
//   output: 'standalone',
//   env: {
//     // OPENAI_API_KEY: process.env.OPENAI_API_KEY,
//     // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
//     // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
//     // NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//     // GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//     DATABASE_URL: process.env.DATABASE_URL,
//     // NEXTAUTH_URL: process.env.NEXTAUTH_URL,
//   },
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
//   images: {
//     domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'], // Add Cloudinary to allowed domains
//   },
//   webpack: (config, { isServer }) => {
//     // Add the yjs alias to webpack configuration
//     if (!isServer) {
//       config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs');
//     }
//     return config;
//   },
// };

// // Combine your existing configuration with next-intl
// export default nextConfig;

// import { NextConfig } from 'next';
// import path from 'path';

// const nextConfig: NextConfig = {
//   output: 'standalone',
//   env: {
//     DATABASE_URL: process.env.DATABASE_URL,
//   },
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//     reactRemoveProperties: true,
//     // reactRemoveProperties:
//     //   process.env.NODE_ENV === 'production'
//     //     ? {
//     //         properties: ['^data-locator-hook-', '^cz-'],
//     //       }
//     //     : false,
//   },
//   images: {
//     domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs');
//     }
//     return config;
//   },
//   async headers() {
//     return [
//       {
//         source: '/api/server-sitemap',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=3600, stale-while-revalidate=1800',
//           },
//           {
//             key: 'Content-Type',
//             value: 'application/xml; charset=utf-8',
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;

import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs');
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/api/server-sitemap',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=1800',
          },
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
        ],
      },
      // Add these to handle legacy sitemaps
      // {
      //   source: '/sitemap-0.xml',
      //   headers: [
      //     {
      //       key: 'Cache-Control',
      //       value: 'no-cache, no-store, must-revalidate',
      //     },
      //     { key: 'Content-Type', value: 'text/plain' },
      //   ],
      // },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
        ],
      },
    ];
  },
  // Add this to automatically rewrite old sitemap URLs
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/sitemap-0.xml',
          destination: '/404',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
