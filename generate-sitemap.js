// generate-sitemap.js
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.example.com';
const pages = [
    '/index.html',
    '/about.html',
    '/contact.html'
    // Add paths to other pages
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
    <url>
        <loc>${baseUrl + page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
    </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapContent, 'utf8');
console.log('Sitemap generated successfully.');
