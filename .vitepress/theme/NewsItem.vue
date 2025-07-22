<script setup lang="ts">
import { useData } from 'vitepress';
import Article from './Article.vue';
import Home from './News.vue';
import NotFound from './NotFound.vue';

const { page, frontmatter } = useData();
</script>

<template>
  <div class="antialiased dark:bg-slate-900">
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
