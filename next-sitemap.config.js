// module.exports = {
//   siteUrl: 'https://kabayankonek.com',
//   generateRobotsTxt: true,
//   robotsTxtOptions: {
//     policies: [
//       { userAgent: '*', allow: '/' },
//       { userAgent: '*', disallow: ['/api/*', '/admin'] },
//     ],
//   },
// };

// module.exports = {
//   siteUrl: 'https://kabayankonek.com',
//   generateRobotsTxt: true,
//   exclude: ['/api/*', '/admin', '/api/server-sitemap'],
//   robotsTxtOptions: {
//     policies: [
//       { userAgent: '*', allow: '/' },
//       { userAgent: '*', disallow: ['/api/*', '/admin'] },
//     ],
//     additionalSitemaps: ['https://kabayankonek.com/api/server-sitemap'],
//   },
//   transform: async (config, path) => {
//     // Custom priority for main pages
//     const priorityMap = {
//       '/lifestyle': 1.0,
//       '/profile': 0.9,
//       '/trends': 0.9,
//       '/events': 0.8,
//       '/marketplace': 0.7,
//       '/advertisement': 0.6,
//     };

//     return {
//       loc: path,
//       changefreq: config.changefreq,
//       priority: priorityMap[path] || config.priority,
//       lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
//     };
//   },
// };

module.exports = {
  siteUrl: 'https://kabayankonek.com',
  generateRobotsTxt: true,
  exclude: [
    '/server-sitemap.xml', // Remove if not using
    '/api/*',
    '/admin*',
    '/login',
    '/signup',
    '/profile/me', // Example of user-specific pages to exclude
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/server-sitemap.xml', // Remove if not using
        ],
      },
    ],
    additionalSitemaps: ['https://kabayankonek.com/api/server-sitemap'],
  },
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/lifestyle': 0.9,
      '/profile': 0.8,
      '/trends': 0.9,
      '/events': 0.8,
      '/marketplace': 0.7,
      '/advertisement': 0.6,
      '/about': 0.5,
      '/terms-and-conditions': 0.3,
      '/privacy-policy': 0.3,
    };

    return {
      loc: path,
      changefreq: path in priorityMap ? 'weekly' : 'daily',
      priority: priorityMap[path] || 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
