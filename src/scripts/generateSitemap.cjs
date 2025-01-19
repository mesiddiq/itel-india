const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://itel-india.com' // Replace with your website's URL

// Define your routes here
const routes = [
    '/loading',
    '/smartphones',
    '/featurephones',
    '/support',
    '/support/1-time-screen-replacement',
    '/support/e-waste-management',
    '/support/100-days-service-promise',
    '/corporate-social-responsibility-csr',
    '/about-us-itel-mobile-india',
    '/contact-us',
    '/support/service-center-locator',
    '/support/faqs',
    '/investor',
    '/coming-soon',
    '/thankyou',
    '/blog/:id',
    '/blogs',
    '/privacy-policy-itel-mobile-india',
    '/terms-of-use-itel-mobile-india',
    '/store-locator',
    '/zeno',
    '/product/s23',
    '/product/s23-plus',
    '/product/s24',
    '/smartphones/color-series/color-pro-5g',
    '/product/p55-5g',
    '/product/p55',
    '/product/p55-plus',
    '/product/p55t',
    '/product/a05',
    '/product/a05-i',
    '/product/a50-c',
    '/product/a50',
    '/product/a70',
    '/product/a23-s',
    '/product/a80',
    '/product/color-pro-5g',
    '/product/super-guru-4g',
    '/product/super-guru-400',
    '/product/super-guru-600',
    '/product/circle-1',
    '/product/it2175p',
    '/product/it5262',
    '/product/it5027',
    '/product/it5330',
    '/product/power-120',
    '/product/power-450',
    '/product/ace-2-power',
    '/product/flip-one',
    '/*'
];


const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
            .map((route) => {
                return `
        <url>
          <loc>${BASE_URL}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `
            })
            .join('')}
    </urlset>
  `

    fs.writeFileSync(path.resolve(__dirname, '../../public/sitemap.xml'), sitemap)
    console.log('Sitemap generated successfully!')
}

generateSitemap()

