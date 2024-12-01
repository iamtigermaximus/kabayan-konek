module.exports = {
  siteUrl: 'https://kabayankonek.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/*', '/admin'] },
    ],
  },
};
