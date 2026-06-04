<script setup lang="ts">
import { useData } from 'vitepress';
import { data as news } from './news.data.js';
import NewsList from './NewsList.vue';

const { frontmatter } = useData();
</script>

<template>
  <div class="w-full">
    <div class="border-b border-[var(--vp-c-divider)] px-6 pt-16 pb-8 text-center md:px-8 md:pt-20 md:pb-10">
      <h1 class="m-0 text-4xl font-extrabold tracking-[-0.02em] text-[var(--vp-c-text-1)]">
        {{ frontmatter.title }}
      </h1>
      <p class="mt-2 mb-0 text-lg text-[var(--vp-c-text-2)]">
        {{ frontmatter.subtitle }}
      </p>
    </div>
    <div class="mx-auto max-w-[800px] px-6 pb-16 md:px-8 md:pb-24">
      <NewsList :news="news" />
    </div>
  </div>
</template>
