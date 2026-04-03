<script setup lang="ts">
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<template>
  <div
    v-if="frontmatter.author"
    class="author"
  >
    <img
      v-if="frontmatter.gravatar"
      :src="`https://gravatar.com/avatar/${frontmatter.gravatar}`"
      alt="author image"
      class="author-avatar"
    />
    <img
      v-else-if="frontmatter.avatar"
      :src="frontmatter.avatar"
      alt="author image"
      class="author-avatar"
    />
    <div class="author-info">
      <span class="author-name">{{ frontmatter.author }}</span>
      <a
        v-if="frontmatter.bsky"
        :href="`https://bsky.app/profile/${frontmatter.bsky}`"
        target="_blank"
        rel="noopener noreferrer"
        class="author-handle"
      >
        @{{ frontmatter.bsky }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.author-handle {
  font-size: 0.8125rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.2s ease;
}

.author-handle:hover {
  color: var(--vp-c-brand-2);
}
</style>
