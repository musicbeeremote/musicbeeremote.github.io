<script setup lang="ts">
import { useData } from 'vitepress';
import { data as news } from './news.data.js';
import NewsList from './NewsList.vue';

const { frontmatter } = useData();
</script>

<template>
  <div class="news-page">
    <div class="news-header">
      <h1 class="news-title">
        {{ frontmatter.title }}
      </h1>
      <p class="news-subtitle">
        {{ frontmatter.subtitle }}
      </p>
    </div>
    <div class="news-container">
      <NewsList :news="news" />
    </div>
  </div>
</template>

<style scoped>
.news-page {
  width: 100%;
}

.news-header {
  padding: 4rem 1.5rem 2rem;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
}

.news-title {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0;
}

.news-subtitle {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  margin: 0.5rem 0 0;
}

.news-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

@media (min-width: 768px) {
  .news-header {
    padding: 5rem 2rem 2.5rem;
  }

  .news-container {
    padding: 0 2rem 6rem;
  }
}
</style>
