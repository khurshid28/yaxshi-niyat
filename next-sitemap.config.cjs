const SITE_URL = 'https://yaxshiniyat.uz';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  outDir: './public',
  generateIndexSitemap: false,
  priority: 0.7,
  
  // Исключаемые пути
  exclude: [
    '/admin/*',
    '/api/*',
    '/404',
    '/500',
    '/_error',
    '/_document',
    '/_app',
    '/private/*',
    '/dashboard/*'
  ],
  
  // Настройки robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/dashboard/',
          '/_next/',
          '/static/',
          '/auth/',
          '/login/',
          '/signin/',
          '/account/',
          '/user/',
          '/profile/'
        ],
      },
      // Блокировка AI-ботов
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: ['/'],
      },
      {
        userAgent: 'ClaudeBot',
        disallow: ['/'],
      },
      {
        userAgent: 'FacebookBot',
        disallow: ['/'],
      },
      // Googlebot
      {
        userAgent: 'Googlebot',
        allow: '/',
        allow: ['/*.js$', '/*.css$'],
        disallow: ['/admin/', '/api/'],
        crawlDelay: 5,
      },
      // Yandex
      {
        userAgent: 'Yandex',
        allow: '/',
        allow: ['/*.js$', '/*.css$'],
        disallow: ['/admin/', '/api/'],
        crawlDelay: 5,
        cleanParam: 'utm_source&utm_medium&utm_campaign&utm_term&utm_content&yclid&gclid&fbclid',
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/sitemap.xml`
    ]
  },
  additionalPaths: async () => {
    const locales = ['ru', 'uz']; // add more if needed
    const pages = [
      { path: '', changefreq: 'daily', priority: 1.0 },
      { path: 'blog', changefreq: 'weekly', priority: 0.8 },
      { path: 'about', changefreq: 'monthly', priority: 0.7 },
      { path: 'contacts', changefreq: 'monthly', priority: 0.7 },
      { path: 'faq', changefreq: 'monthly', priority: 0.6 },

      // продукты
      { path: 'products/pod-zalog', changefreq: 'weekly', priority: 0.8 },
      { path: 'products/bez-zaloga', changefreq: 'weekly', priority: 0.8 },
      { path: 'products/avtokredit', changefreq: 'weekly', priority: 0.8 },

      // блог статьи
      { path: 'blog/vygodnee-chem-v-lombarde', changefreq: 'weekly', priority: 0.7 },
    ];

    const lastmod = new Date().toISOString();

    return locales.flatMap((locale) =>
        pages.map((page) => ({
          loc: `${SITE_URL}/${locale}${page.path ? '/' + page.path : ''}`,
          lastmod,
          changefreq: page.changefreq,
          priority: page.priority,
        })
    ));    
  }
};