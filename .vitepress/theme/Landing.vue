<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import LandingDownload from './LandingDownload.vue';
import LandingFeatures from './LandingFeatures.vue';
import LandingGallery from './LandingGallery.vue';
import LandingHero from './LandingHero.vue';
import LandingOpenSource from './LandingOpenSource.vue';
import { data as news } from './news.data';

const { frontmatter } = useData();

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

const latestAnnouncement = computed(() => {
  const latest = news[0];
  if (!latest) return null;
  if (Date.now() - latest.date.time > THIRTY_DAYS_MS) return null;
  return latest;
});
</script>

<template>
  <div v-if="latestAnnouncement" class="announcement-bar">
    <a :href="latestAnnouncement.url">
      <span class="announcement-badge">New</span>
      {{ latestAnnouncement.title }} <span class="announcement-arrow">&rarr;</span>
    </a>
  </div>
  <LandingHero :hero="frontmatter.hero" />
  <LandingFeatures
    :features="frontmatter.features"
    :extras="frontmatter.extras"
  />
  <LandingOpenSource />
  <LandingGallery :images="frontmatter.gallery" />
  <LandingDownload :downloads="frontmatter.downloads" />
</template>

<style scoped>
.announcement-bar {
  text-align: center;
  padding: 0.55rem 1rem;
  background: var(--vp-c-brand-soft);
}

.announcement-bar a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.announcement-bar a:hover {
  color: var(--vp-c-brand-1);
}

.announcement-badge {
  display: inline-block;
  padding: 0.1rem 0.45rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  background: var(--vp-c-brand-3);
  border-radius: 4px;
}

.announcement-arrow {
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
}
</style>
