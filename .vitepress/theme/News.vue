<script setup lang="ts">
import { useData } from 'vitepress';
import { data as news } from './news.data.js';
import NewsList from './NewsList.vue';

const { frontmatter } = useData();
</script>

<template>
  <div class="doc has-sidebar">
    <div class="container">
      <main class="content">
        <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
          <div>
            <h1>
              {{ frontmatter.title }}
            </h1>
            <p>
              {{ frontmatter.subtitle }}
            </p>
          </div>
          <NewsList :news="news" />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="css">
.doc {
  padding: 32px 24px 96px;
  width: 100%;
}

@media (min-width: 768px) {
  .doc {
    padding: 48px 32px 128px;
  }
}

@media (min-width: 960px) {
  .doc {
    padding: 48px 32px 0;
  }

  .doc:not(.has-sidebar) .container {
    display: flex;
    justify-content: center;
    max-width: 992px;
  }

  .doc:not(.has-sidebar) .content {
    max-width: 752px;
  }
}

@media (min-width: 1280px) {
  .doc .container {
    display: flex;
    justify-content: center;
  }

  .doc .aside {
    display: block;
  }
}

@media (min-width: 1440px) {
  .doc:not(.has-sidebar) .content {
    max-width: 784px;
  }

  .doc:not(.has-sidebar) .container {
    max-width: 1104px;
  }
}

.container {
  margin: 0 auto;
  width: 100%;
}

.content {
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 0 48px;
}

@media (min-width: 960px) {
  .content {
    padding: 0 32px 128px;
  }
}

@media (min-width: 1280px) {
  .content {
    order: 1;
    margin: 0;
    min-width: 640px;
  }
}

.doc h1 {
  position: relative;
  font-weight: 600;
  outline: none;
  letter-spacing: -0.02em;
  line-height: 40px;
  font-size: 28px;
}

.doc h1:hover .header-anchor,
.doc h1 .header-anchor:focus {
  opacity: 1;
}

.doc .header-anchor {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -0.87em;
  font-weight: 500;
  user-select: none;
  opacity: 0;
  text-decoration: none;
  transition:
    color 0.25s,
    opacity 0.25s;
}

.doc .header-anchor:before {
  content: var(--vp-header-anchor-symbol);
}

.doc p {
  line-height: 28px;
  margin: 16px 0;
}

@media (min-width: 768px) {
  .doc h1 {
    letter-spacing: -0.02em;
    line-height: 40px;
    font-size: 32px;
  }
}
</style>
