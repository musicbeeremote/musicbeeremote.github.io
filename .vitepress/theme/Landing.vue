<script setup lang="ts">
import { useData } from 'vitepress';
import LandingDownload from './LandingDownload.vue';
import LandingFeatures from './LandingFeatures.vue';
import LandingGallery from './LandingGallery.vue';
import LandingHero from './LandingHero.vue';
import LandingOpenSource from './LandingOpenSource.vue';

const { frontmatter } = useData();
</script>

<template>
  <div class="announcement-bar">
    <a href="/news/2026-04-03-v1-6-0-preview">
      <span class="announcement-badge">New</span>
      v1.6.0 coming soon <span class="announcement-arrow">&rarr;</span>
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
