<script setup lang="ts">
import { computed } from 'vue';
import { useData, useRoute } from 'vitepress';
import Date from './Date.vue';
import Author from './Author.vue';
import { data as news } from './news.data.js';

const { frontmatter: data } = useData();

const route = useRoute();

function findCurrentIndex() {
  return news.findIndex(p => p.url === route.path);
}

// use the customData date which contains pre-resolved date info
const date = computed(() => news[findCurrentIndex()].date);
const nextPost = computed(() => news[findCurrentIndex() - 1]);
const prevPost = computed(() => news[findCurrentIndex() + 1]);
</script>

<template>
  <article class="xl:divide-y xl:divide-gray-200 dark:xl:divide-slate-200/5">
    <header class="pt-6 xl:pb-10 space-y-1 text-center">
      <Date :date="date" />
      <h1
        class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
      >
        {{ data.title }}
      </h1>

      <div>
        {{ data.subtitle }}
      </div>
    </header>

    <div class="divide-y xl:divide-y-0 divide-gray-200 dark:divide-slate-200/5 xl:grid xl:grid-cols-4 xl:gap-x-10 pb-16 xl:pb-20 grid-rows-auto-1fr">
      <Author />
      <div
        class="divide-y divide-gray-200 dark:divide-slate-200/5 xl:pb-0 xl:col-span-3 xl:row-span-2"
      >
        <Content
          class="prose dark:prose-invert max-w-none pt-10 pb-8"
          :class="$style.content"
        />
      </div>

      <footer
        class="text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-slate-200/5 xl:col-start-1 xl:row-start-2"
      >
        <div
          v-if="nextPost"
          class="py-8"
        >
          <h2
            class="text-xs tracking-wide uppercase text-gray-500 dark:text-white"
          >
            Next
          </h2>
          <div class="link">
            <a :href="nextPost.url">{{ nextPost.title }}</a>
          </div>
        </div>
        <div
          v-if="prevPost"
          class="py-8"
        >
          <h2
            class="text-xs tracking-wide uppercase text-gray-500 dark:text-white"
          >
            Previous
          </h2>
          <div class="link">
            <a :href="prevPost.url">{{ prevPost.title }}</a>
          </div>
        </div>
        <div class="pt-8">
          <a
            class="link"
            href="/news/"
          >
            ← Back to the news
          </a>
        </div>
      </footer>
    </div>
  </article>
</template>

<style module>
.content p {
  @apply py-3;
}
</style>
