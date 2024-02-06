<script setup lang="ts">
import { useData } from 'vitepress';
import Date from './Date.vue';
import { data as news } from './news.data.js';

const { frontmatter } = useData();
</script>

<template>
  <div
    class="doc has-sidebar"
  >
    <div class="container">
      <div class="content">
        <div class="content-container">
          <main class="main">
            <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
              <div>
                <h1>
                  {{ frontmatter.title }}
                </h1>
                <p>
                  {{ frontmatter.subtitle }}
                </p>
              </div>
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
                            {{
                              title
                            }}
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
            </div>
          </main>
        </div>
      </div>
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

.content-container {
  margin: 0 auto;
}

main {
  padding: 0 48px;
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
