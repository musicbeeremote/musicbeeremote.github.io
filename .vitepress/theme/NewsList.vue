<script setup lang="ts">
import type { News } from './news.data.js';
import Date from './Date.vue';

defineProps<{ news: News[] }>();
</script>

<template>
  <ul class="news-list">
    <li
      v-for="{ title, url, subtitle, date, excerpt } of news"
      :key="url"
      class="news-item"
    >
      <article class="news-article">
        <Date
          :date="date"
          class="news-date"
        />
        <div class="news-body">
          <h2 class="news-article-title">
            <a :href="url">
              {{ title }}
            </a>
          </h2>
          <p
            v-if="subtitle"
            class="news-article-subtitle"
          >
            {{ subtitle }}
          </p>
          <div
            v-if="excerpt"
            class="news-excerpt"
            v-html="excerpt"
          />
          <a
            class="news-read-more"
            :href="url"
          >
            Read more &rarr;
          </a>
        </div>
      </article>
    </li>
  </ul>
</template>

<style scoped>
.news-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.news-item {
  padding: 2rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.news-item:first-child {
  padding-top: 2.5rem;
}

.news-item:last-child {
  border-bottom: none;
}

.news-article {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.news-date {
  flex-shrink: 0;
}

.news-article-title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
}

.news-article-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.news-article-title a:hover {
  color: var(--vp-c-brand-1);
}

.news-article-subtitle {
  color: var(--vp-c-text-2);
  font-size: 1rem;
  margin: 0.25rem 0 0;
}

.news-excerpt {
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
  line-height: 1.7;
  margin-top: 0.75rem;
}

.news-excerpt :deep(p) {
  margin: 0;
}

.news-read-more {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.news-read-more:hover {
  color: var(--vp-c-brand-2);
}

@media (min-width: 640px) {
  .news-article {
    flex-direction: row;
    gap: 2rem;
  }

  .news-date {
    min-width: 140px;
    padding-top: 0.25rem;
  }
}
</style>
