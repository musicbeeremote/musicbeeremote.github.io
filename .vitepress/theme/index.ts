// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import NotFound from './NotFound.vue';
import News from './News.vue';
import Author from './Author.vue';
import Date from './Date.vue';
import Article from './Article.vue';
import NewsItem from './NewsItem.vue';
import Landing from './Landing.vue';
import Image from './Image.vue';
import type { Theme } from 'vitepress';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    // https://vitepress.dev/guide/extending-default-theme#layout-slots
  }),
  enhanceApp({ app }) {
    app.component('NewsItem', NewsItem);
    app.component('NotFound', NotFound);
    app.component('News', News);
    app.component('Date', Date);
    app.component('Author', Author);
    app.component('Article', Article);
    app.component('landing', Landing);
    app.component('Image', Image);
  },
} satisfies Theme;
