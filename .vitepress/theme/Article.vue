<script setup lang="ts">
import Giscus from '@giscus/vue';
import { useData, useRoute } from 'vitepress';
import { computed } from 'vue';
import Author from './Author.vue';
import Date from './Date.vue';
import { data as news } from './news.data.js';

const { frontmatter: data, isDark } = useData();

const route = useRoute();

function findCurrentIndex() {
  return news.findIndex(p => p.url === route.path);
}

const date = computed(() => news[findCurrentIndex()].date);
const nextPost = computed(() => news[findCurrentIndex() - 1]);
const prevPost = computed(() => news[findCurrentIndex() + 1]);
const giscusTheme = computed(() => isDark.value ? 'dark' : 'light');
</script>

<template>
  <article class="article-page">
    <header class="article-header">
      <Date
        :date="date"
        class="article-date"
      />
      <h1 class="article-title">
        {{ data.title }}
      </h1>
      <p
        v-if="data.subtitle"
        class="article-subtitle"
      >
        {{ data.subtitle }}
      </p>
    </header>

    <div class="article-layout">
      <aside class="article-sidebar">
        <Author />
      </aside>

      <div class="article-content">
        <Content class="article-body" />
      </div>
    </div>

    <div class="article-comments">
      <Giscus
        repo="musicbeeremote/musicbeeremote.github.io"
        repo-id="R_kgDOH7Ql_Q"
        category="Comments"
        category-id="DIC_kwDOH7Ql_c4C5-8b"
        mapping="pathname"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        :theme="giscusTheme"
        lang="en"
        loading="lazy"
      />
    </div>

    <footer class="article-footer">
      <nav class="article-nav">
        <a
          v-if="nextPost"
          :href="nextPost.url"
          class="article-nav-link"
        >
          <span class="article-nav-label">Next</span>
          <span class="article-nav-title">{{ nextPost.title }}</span>
        </a>
        <a
          v-if="prevPost"
          :href="prevPost.url"
          class="article-nav-link"
        >
          <span class="article-nav-label">Previous</span>
          <span class="article-nav-title">{{ prevPost.title }}</span>
        </a>
      </nav>
      <a
        class="article-back"
        href="/news/"
      >
        &larr; Back to news
      </a>
    </footer>
  </article>
</template>

<style scoped>
.article-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

@media (min-width: 768px) {
  .article-page {
    padding: 3rem 2rem 6rem;
  }
}

.article-header {
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.article-date {
  margin-bottom: 0.75rem;
}

.article-title {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  line-height: 1.2;
  margin: 0;
}

@media (min-width: 640px) {
  .article-title {
    font-size: 2.5rem;
  }
}

.article-subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.125rem;
  margin: 0.75rem 0 0;
}

.article-layout {
  padding-top: 2rem;
}

.article-sidebar {
  margin-bottom: 1.5rem;
}

.article-body {
  line-height: 1.8;
  color: var(--vp-c-text-1);
}

.article-body :deep(p) {
  margin: 1rem 0;
}

.article-body :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.article-body :deep(a:hover) {
  text-decoration: underline;
}

.article-body :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.article-body :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  color: var(--vp-c-text-1);
}

.article-body :deep(ul),
.article-body :deep(ol) {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.article-body :deep(li) {
  margin: 0.25rem 0;
}

.article-body :deep(code) {
  background: var(--vp-c-default-soft);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.875em;
}

.article-comments {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.article-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.article-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.article-nav-link {
  display: block;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.article-nav-link:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 8px rgba(230, 81, 0, 0.08);
}

.article-nav-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
  margin-bottom: 0.25rem;
}

.article-nav-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.article-back {
  display: inline-block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.article-back:hover {
  color: var(--vp-c-brand-2);
}
</style>
