<script setup lang="ts">
import type { News } from './news.data.js';
import Date from './Date.vue';

defineProps<{ news: News[] }>();
</script>

<template>
  <ul class="divide-y divide-gray-200 dark:divide-slate-200/5">
    <li
      v-for="{ title, url, subtitle, date, excerpt } of news"
      :key="url"
      class="py-12"
    >
      <article
        class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
      >
        <Date :date="date" />
        <div class="space-y-5 xl:col-span-3">
          <div class="space-y-6">
            <h2 class="text-2xl leading-8 font-bold tracking-tight">
              <a
                class="text-gray-900 dark:text-white"
                :href="url"
              >
                {{ title }}
              </a>
            </h2>
            <div>{{ subtitle }}</div>
            <div
              v-if="excerpt"
              class="prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-300"
              v-html="excerpt"
            />
          </div>
          <div class="text-base leading-6 font-medium">
            <a
              class="link"
              aria-label="read more"
              :href="url"
            >
              Read more →
            </a>
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>
