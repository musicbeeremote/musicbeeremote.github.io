<script setup lang="ts">
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
  <div
    v-if="frontmatter.author"
    class="flex items-center gap-3"
  >
    <img
      v-if="frontmatter.gravatar"
      :src="`https://gravatar.com/avatar/${frontmatter.gravatar}`"
      alt="author image"
      class="h-10 w-10 rounded-full"
    />
    <img
      v-else-if="frontmatter.avatar"
      :src="frontmatter.avatar"
      alt="author image"
      class="h-10 w-10 rounded-full"
    />
    <div class="flex flex-col">
      <span class="text-sm font-semibold text-[var(--vp-c-text-1)]">{{ frontmatter.author }}</span>
      <a
        v-if="frontmatter.bsky"
        :href="`https://bsky.app/profile/${frontmatter.bsky}`"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[0.8125rem] text-[var(--vp-c-brand-1)] no-underline transition-colors duration-200 hover:text-[var(--vp-c-brand-2)]"
      >
        @{{ frontmatter.bsky }}
      </a>
    </div>
  </div>
</template>
