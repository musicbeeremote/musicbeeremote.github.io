import { createHash } from 'node:crypto';
import fs, { copyFileSync, readFileSync } from 'node:fs';
import path from 'node:path';
import * as process from 'node:process';
import { Feed } from 'feed';
import { createContentLoader, defineConfig, type HeadConfig, type PageData, type SiteConfig } from 'vitepress';

const TAG_ID = 'UA-34909088-2';
const HOSTNAME = 'https://mbrc.kelsos.net';

interface HashedImage {
  imagePath: string;
  targetImagePath: string;
}

const redirectPaths: [string, string][] = [];
const hashedImages: HashedImage[] = [];

function writeRedirects([redirectPath, redirectFile]: [string, string]) {
  const redirectContent = `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0; url=/${redirectPath}" />
  <link rel="canonical" href="/${redirectPath}" />
</head>
<body>
  <p>If you are not redirected automatically, follow this <a href="/${redirectPath}">link</a>.</p>
</body>
</html>`;

  // Ensure the directory exists, then write the file
  fs.mkdirSync(path.dirname(redirectFile), { recursive: true });
  fs.writeFileSync(redirectFile, redirectContent);
}

function createNewsRedirect(page: PageData, outDir: string): void {
  if (page.relativePath.includes('news/')) {
    // Check if this is an "old-style" news URL
    const match = page.relativePath.match(/^news\/(\d{4})-(\d{2})-(\d{2})-(.*)/);

    if (match) {
      const [, year, month, day, slug] = match;
      if (parseInt(year) >= 2024)
        return;

      const redirectPath = `news/${year}-${month}-${day}-${slug}`.replace('.md', '');
      const oldPath = `news/${year}/${month}/${day}/${slug}`.replace('.md', '');

      // Generate a redirect file dynamically
      const redirectFile = path.resolve(
        outDir,
        `${oldPath}.html`,
      );

      redirectPaths.push([redirectPath, redirectFile]);
    }
  }
}

function getHash(path: string): string {
  return createHash('sha256')
    .update(readFileSync(path))
    .digest('hex')
    .slice(0, 8);
}

function generateHashedImageName(ctx: TransformPageContext, relativePath: string): string {
  const imagePath = path.join(ctx.siteConfig.srcDir, 'public', relativePath);
  const imageExtension = path.extname(imagePath);
  const fileNameWithoutExt = path.basename(imagePath, imageExtension);
  const assetsOutputPath = path.join(ctx.siteConfig.outDir, ctx.siteConfig.assetsDir);
  const imageHash = getHash(imagePath);
  const hashedImageName = `${fileNameWithoutExt}.${imageHash}${imageExtension}`;
  const targetImagePath = path.join(assetsOutputPath, hashedImageName);
  hashedImages.push({ imagePath, targetImagePath });

  return path.join(ctx.siteConfig.assetsDir, hashedImageName);
}

function pageCanonicalUrl(relativePath: string): string {
  let urlPath = relativePath.replace(/\.md$/, '');
  if (urlPath === 'index')
    urlPath = '';
  else if (urlPath.endsWith('/index'))
    urlPath = urlPath.slice(0, -'index'.length);
  return `${HOSTNAME}/${urlPath}`;
}

async function generateNewsFeed(siteConfig: SiteConfig): Promise<void> {
  const feed = new Feed({
    title: 'MusicBee Remote — News',
    description: 'Release notes and updates for MusicBee Remote',
    id: `${HOSTNAME}/news/`,
    link: `${HOSTNAME}/news/`,
    language: 'en',
    image: `${HOSTNAME}/android-chrome-512x512.png`,
    favicon: `${HOSTNAME}/favicon.ico`,
    copyright: `Copyright © 2017-${new Date().getFullYear()} Konstantinos Paparas`,
    feedLinks: {
      rss: `${HOSTNAME}/news/feed.xml`,
      atom: `${HOSTNAME}/news/atom.xml`,
      json: `${HOSTNAME}/news/feed.json`,
    },
  });

  const posts = await createContentLoader('news/!(index).md', {
    excerpt: true,
    render: true,
  }).load();

  posts
    .filter(post => post.frontmatter.date)
    .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
    .forEach((post) => {
      const link = `${HOSTNAME}${post.url}`;
      feed.addItem({
        title: post.frontmatter.title,
        id: link,
        link,
        description: post.frontmatter.subtitle ?? post.excerpt,
        content: post.html,
        date: new Date(post.frontmatter.date),
        author: post.frontmatter.author
          ? [{ name: post.frontmatter.author }]
          : undefined,
        category: Array.isArray(post.frontmatter.categories)
          ? post.frontmatter.categories.map((name: string) => ({ name }))
          : undefined,
      });
    });

  const newsOutDir = path.join(siteConfig.outDir, 'news');
  fs.mkdirSync(newsOutDir, { recursive: true });
  fs.writeFileSync(path.join(newsOutDir, 'feed.xml'), feed.rss2());
  fs.writeFileSync(path.join(newsOutDir, 'atom.xml'), feed.atom1());
  fs.writeFileSync(path.join(newsOutDir, 'feed.json'), feed.json1());
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MusicBee Remote',
  description: 'A remote control application that allows you to control MusicBee from your Android device',
  cleanUrls: true,

  head: [
    [
      'script',
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${TAG_ID}` },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${TAG_ID}');`,
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'MusicBee Remote — News',
        href: `${HOSTNAME}/news/feed.xml`,
      },
    ],
  ],

  sitemap: {
    hostname: HOSTNAME,
  },

  appearance: true,

  transformPageData: (page, ctx) => {
    const frontmatter = page.frontmatter;
    if (page.relativePath === 'index.md' && process.env.NODE_ENV === 'production') {
      const gallery = frontmatter.gallery;
      for (const element of gallery) {
        element.src = generateHashedImageName(ctx, element.src);
      }
      const features = frontmatter.features;
      for (const feature of features) {
        if (feature.image)
          feature.image = generateHashedImageName(ctx, feature.image);
      }
      frontmatter.hero.image.src = generateHashedImageName(ctx, frontmatter.hero.image.src);
    }
    createNewsRedirect(page, ctx.siteConfig.outDir);

    // Derive a per-page meta description from the frontmatter subtitle so the
    // built-in <meta name="description"> is page-specific instead of the global default.
    // pageData.description is resolved before this hook, so set it directly.
    if (!frontmatter.description && frontmatter.subtitle)
      page.description = frontmatter.subtitle;

    if (frontmatter.sidebar != null)
      return page;
    frontmatter.sidebar = frontmatter.layout !== 'landing';
    return page;
  },

  transformHead: ({ pageData, title, description }) => {
    const frontmatter = pageData.frontmatter;
    if (!pageData.relativePath || pageData.relativePath === '404.md')
      return; // skip the 404 page

    const url = pageCanonicalUrl(pageData.relativePath);
    const ogImage = `${HOSTNAME}/og-image.png`;
    const isNewsPost = pageData.relativePath.startsWith('news/')
      && pageData.relativePath !== 'news/index.md';

    const head: HeadConfig[] = [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: isNewsPost ? 'article' : 'website' }],
      ['meta', { property: 'og:site_name', content: 'MusicBee Remote' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: ogImage }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: ogImage }],
    ];

    if (pageData.relativePath === 'index.md') {
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'MusicBee Remote',
        'operatingSystem': 'Android',
        'applicationCategory': 'MultimediaApplication',
        'url': HOSTNAME,
        'description': description,
        'image': ogImage,
        'downloadUrl': 'https://github.com/musicbeeremote/mbrc/releases/latest',
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
      })]);
    }
    else if (isNewsPost) {
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': frontmatter.title,
        'description': description,
        'datePublished': frontmatter.date ? new Date(frontmatter.date).toISOString() : undefined,
        'author': frontmatter.author ? { '@type': 'Person', 'name': frontmatter.author } : undefined,
        'image': ogImage,
        'url': url,
        'mainEntityOfPage': url,
        'publisher': {
          '@type': 'Organization',
          'name': 'MusicBee Remote',
          'logo': { '@type': 'ImageObject', 'url': `${HOSTNAME}/android-chrome-512x512.png` },
        },
      })]);
    }

    return head;
  },

  async buildEnd(siteConfig) {
    redirectPaths.forEach(writeRedirects);
    hashedImages.forEach(({ imagePath, targetImagePath }) => {
      copyFileSync(imagePath, targetImagePath);
    });
    await generateNewsFeed(siteConfig);
  },

  srcExclude: ['**/README.md', '**/TODO.md'],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.png', width: 24, height: 24 },
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        items: [
          { text: 'App Guide (v1.6)', link: '/help/1.6/' },
          { text: 'App Guide (v1.5)', link: '/help/1.5/application' },
          { text: 'Plugin Setup', link: '/help/plugin/' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
      { text: 'News', link: '/news/' },
      { text: 'About', link: '/about' },
      {
        text: 'Download',
        link: 'https://github.com/musicbeeremote/mbrc/releases/latest',
      },
    ],

    footer: {
      message: '<a href="/privacy-policy">Privacy Policy</a> · <a href="/faq">FAQ</a> · <a href="https://github.com/musicbeeremote/mbrc/issues">Report a Bug</a>',
      copyright: 'Copyright © 2017-present Konstantinos Paparas',
    },

    search: {
      provider: 'local',
    },

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/musicbeeremote', ariaLabel: 'GitHub' },
      { icon: 'discord', link: 'https://discord.gg/rceTb57', ariaLabel: 'Discord' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.574 6.27.698 2.211 3.2 2.967 5.478 2.674-3.808.634-4.755 2.736-2.532 4.532 4.43 3.576 7.03-1.017 7.888-3.08.63-1.51.617-2.09.592-2.09-.025 0-.038.58.592 2.09.858 2.063 3.458 6.656 7.888 3.08 2.223-1.796 1.276-3.898-2.532-4.532 2.278.293 4.78-.463 5.478-2.674.196-.62.574-5.58.574-6.27 0-.688-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>',
        },
        link: 'https://bsky.app/profile/musicbeeremote.bsky.social',
        ariaLabel: 'Bluesky',
      },
    ],
  },
});
