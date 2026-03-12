import { NextApiRequest, NextApiResponse } from 'next'

const SITE_URL = 'https://yaxshiniyat.uz'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Основные страницы -->
      <url>
        <loc>${SITE_URL}/ru</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/ru/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/ru/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/ru#products</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/ru/contacts</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/ru/faq</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
      
      <!-- Продукты -->
      <url>
        <loc>${SITE_URL}/ru/products/pod-zalog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/ru/products/bez-zaloga</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/ru/products/avtokredit</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <!-- Статьи блога -->
      <url>
        <loc>${SITE_URL}/ru/blog/vygodnee-chem-v-lombarde</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${SITE_URL}/uz</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/uz/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/uz/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/uz#products</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/uz/contacts</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/uz/faq</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
      
      <!-- Продукты -->
      <url>
        <loc>${SITE_URL}/uz/products/pod-zalog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/uz/products/bez-zaloga</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <url>
        <loc>${SITE_URL}/uz/products/avtokredit</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      
      <!-- Статьи блога -->
      <url>
        <loc>${SITE_URL}/uz/blog/vygodnee-chem-v-lombarde</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
      
      <!-- Добавьте другие статьи блога по аналогии -->
      ${(await getBlogPosts()).map(post => `
        <url>
          <loc>${SITE_URL}/ru/blog/${post.slug}</loc>
          <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
        <url>
          <loc>${SITE_URL}/uz/blog/${post.slug}</loc>
          <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}

async function getBlogPosts() {
  // Ваша логика получения статей блога
  return [
    { slug: 'kak-vybrat-zalog', updatedAt: '2023-12-01T10:00:00Z' },
    { slug: 'preimushchestva-kreditov', updatedAt: '2023-12-02T11:00:00Z' },
    // ... другие статьи
  ]
}