/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://hedrize.com',
    generateRobotsTxt: false, // We already have a custom robots.txt
    generateIndexSitemap: false, // Not needed for small sites
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/api/*', '/_next/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
    },
}
