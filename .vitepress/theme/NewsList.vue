<script setup lang="ts">
import type { News } from './news.data.js';
import Date from './Date.vue';

defineProps<{ news: News[] }>();
</script>

<template>
  <ul class="m-0 list-none p-0">
    <li
      v-for="{ title, url, subtitle, date, excerpt } of news"
      :key="url"
      class="border-b border-[var(--vp-c-divider)] py-8 first:pt-10 last:border-b-0"
    >
      <article class="flex flex-col gap-2 sm:flex-row sm:gap-8">
        <Date
          :date="date"
          class="shrink-0 sm:min-w-[140px] sm:pt-1"
        />
        <div>
          <h2 class="m-0 text-2xl font-bold leading-[1.3]">
            <a
              :href="url"
              class="text-[var(--vp-c-text-1)] no-underline transition-colors duration-200 hover:text-[var(--vp-c-brand-1)]"
            >
              {{ title }}
            </a>
          </h2>
          <p
            v-if="subtitle"
            class="mt-1 mb-0 text-base text-[var(--vp-c-text-2)]"
          >
            {{ subtitle }}
          </p>
          <div
            v-if="excerpt"
            class="mt-3 text-[0.9375rem] leading-[1.7] text-[var(--vp-c-text-2)] [&_p]:m-0"
            v-html="excerpt"
          />
          <a
            class="mt-3 inline-block text-[0.9375rem] font-semibold text-[var(--vp-c-brand-1)] no-underline transition-colors duration-200 hover:text-[var(--vp-c-brand-2)]"
            :href="url"
          >
            Read more &rarr;
          </a>
        </div>
      </article>
    </li>
  </ul>
</template>
