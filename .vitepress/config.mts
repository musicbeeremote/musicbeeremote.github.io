import { defineConfig } from 'vitepress';

const TAG_ID = 'UA-34909088-2';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MusicBeee Remote',
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

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: './public/logo.png', width: 24, height: 24 },
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
          { text: 'Help', link: '/help' },
          { text: 'FAQ', link: '/faq' },
          { text: 'About', link: '/about' },
          { text: 'Privacy Policy', link: '/privacy-policy' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/musicbeeremote' },
      { icon: 'twitter', link: 'https://twitter.com/musicbeeremote' },
      { icon: 'facebook', link: 'https://facebook.com/MusicbeeRemote' },
      {},
    ],
  },
});
