/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yume.ink',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/admin'],
      },
    ],
    additionalSitemaps: [
      'https://yume.ink/sitemap.xml',
    ],
  },
}
