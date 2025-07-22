import { createHash } from 'node:crypto';
import fs, { copyFileSync, readFileSync } from 'node:fs';
import path from 'node:path';
import * as process from 'node:process';
import { defineConfig, type PageData } from 'vitepress';

const TAG_ID = 'UA-34909088-2';

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
  const imagePath = path.join(ctx.siteConfig.srcDir, relativePath);
  const imageExtension = path.extname(imagePath);
  const fileNameWithoutExt = path.basename(imagePath, imageExtension);
  const assetsOutputPath = path.join(ctx.siteConfig.outDir, ctx.siteConfig.assetsDir);
  const imageHash = getHash(imagePath);
  const hashedImageName = `${fileNameWithoutExt}.${imageHash}${imageExtension}`;
  const targetImagePath = path.join(assetsOutputPath, hashedImageName);
  hashedImages.push({ imagePath, targetImagePath });

  return path.join(ctx.siteConfig.assetsDir, hashedImageName);
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
  ],

  sitemap: {
    hostname: 'https://mbrc.kelsos.net',
  },

  appearance: false,

  transformPageData: (page, ctx) => {
    const frontmatter = page.frontmatter;
    if (page.relativePath === 'index.md' && process.env.NODE_ENV === 'production') {
      const gallery = frontmatter.gallery;
      for (const element of gallery) {
        element.src = generateHashedImageName(ctx, element.src);
      }
      frontmatter.hero.image.src = generateHashedImageName(ctx, frontmatter.hero.image.src);
    }
    createNewsRedirect(page, ctx.siteConfig.outDir);

    if (frontmatter.sidebar != null)
      return page;
    frontmatter.sidebar = frontmatter.layout !== 'landing';
    return page;
  },

  buildEnd() {
    redirectPaths.forEach(writeRedirects);
    hashedImages.forEach(({ imagePath, targetImagePath }) => {
      copyFileSync(imagePath, targetImagePath);
    });
  },

  srcExclude: ['**/README.md', '**/TODO.md'],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.png', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'News', link: '/news/' },
      { text: 'Help', link: '/help' },
      { text: 'FAQ', link: '/faq' },
      { text: 'About', link: '/about' },
    ],

    footer: {
      copyright: 'Copyright © 2017-present Konstantinos Paparas',
    },

    search: {
      provider: 'local',
    },

    sidebar: [
      {
        items: [
          { text: 'Home', link: '/' },
          { text: 'News', link: '/news/' },
          {
            text: 'Help',
            items: [
              {
                text: 'Plugin',
                link: '/help/plugin',
              },
              {
                text: 'Application',
                link: '/help/application',
              },
            ],
          },
          { text: 'FAQ', link: '/faq' },
          { text: 'About', link: '/about' },
          { text: 'Privacy Policy', link: '/privacy-policy' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/musicbeeremote', ariaLabel: 'GitHub' },
      { icon: 'twitter', link: 'https://twitter.com/musicbeeremote', ariaLabel: 'Twitter' },
      { icon: 'facebook', link: 'https://facebook.com/MusicbeeRemote', ariaLabel: 'Facebook' },
      {
        icon: 'discord',
        link: 'https://discord.gg/rceTb57',
        ariaLabel: 'Discord',
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg>',
        },
        link: 'mailto:kelsos@kelsos.net',
        ariaLabel: 'Email',
      },
    ],
  },
});
