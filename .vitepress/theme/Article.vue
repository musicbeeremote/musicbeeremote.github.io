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
  <article class="mx-auto max-w-[800px] px-6 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12">
    <header class="border-b border-[var(--vp-c-divider)] pb-8 text-center">
      <Date
        :date="date"
        class="mb-3"
      />
      <h1 class="m-0 text-[2rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-[var(--vp-c-text-1)] sm:text-[2.5rem]">
        {{ data.title }}
      </h1>
      <p
        v-if="data.subtitle"
        class="mt-3 text-lg text-[var(--vp-c-text-2)]"
      >
        {{ data.subtitle }}
      </p>
    </header>

    <div class="pt-8">
      <aside class="mb-6">
        <Author />
      </aside>

      <div>
        <Content class="vp-doc" />
      </div>
    </div>

    <div class="mt-12 border-t border-[var(--vp-c-divider)] pt-8">
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

    <footer class="mt-12 border-t border-[var(--vp-c-divider)] pt-8">
      <nav class="mb-6 flex flex-col gap-4">
        <a
          v-if="nextPost"
          :href="nextPost.url"
          class="block rounded-[10px] border border-[var(--vp-c-divider)] p-4 no-underline transition-[border-color,box-shadow] duration-200 hover:border-[var(--vp-c-brand-1)] hover:shadow-[0_2px_8px_rgba(230,81,0,0.08)]"
        >
          <span class="mb-1 block text-xs font-bold uppercase tracking-[0.04em] text-[var(--vp-c-text-3)]">Next</span>
          <span class="text-[0.9375rem] font-semibold text-[var(--vp-c-brand-1)]">{{ nextPost.title }}</span>
        </a>
        <a
          v-if="prevPost"
          :href="prevPost.url"
          class="block rounded-[10px] border border-[var(--vp-c-divider)] p-4 no-underline transition-[border-color,box-shadow] duration-200 hover:border-[var(--vp-c-brand-1)] hover:shadow-[0_2px_8px_rgba(230,81,0,0.08)]"
        >
          <span class="mb-1 block text-xs font-bold uppercase tracking-[0.04em] text-[var(--vp-c-text-3)]">Previous</span>
          <span class="text-[0.9375rem] font-semibold text-[var(--vp-c-brand-1)]">{{ prevPost.title }}</span>
        </a>
      </nav>
      <a
        class="inline-block text-[0.9375rem] font-semibold text-[var(--vp-c-brand-1)] no-underline transition-colors duration-200 hover:text-[var(--vp-c-brand-2)]"
        href="/news/"
      >
        &larr; Back to news
      </a>
    </footer>
  </article>
</template>
