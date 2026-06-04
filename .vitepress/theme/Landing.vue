<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
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
  if (!latest)
    return null;
  if (Date.now() - latest.date.time > THIRTY_DAYS_MS)
    return null;
  return latest;
});
</script>

<template>
  <div
    v-if="latestAnnouncement"
    class="border-b border-[var(--vp-c-divider)] bg-[var(--mbrc-c-surface)] px-4 py-3 text-center"
  >
    <a
      :href="latestAnnouncement.url"
      class="inline-flex items-center gap-2.5 text-sm font-medium text-[var(--vp-c-text-2)] no-underline transition-colors hover:text-[var(--vp-c-brand-1)]"
    >
      <span class="inline-block rounded bg-[var(--vp-c-brand-3)] px-2 py-0.5 text-[0.7rem] font-bold tracking-[0.04em] text-white uppercase">New</span>
      {{ latestAnnouncement.title }} <span class="text-[var(--vp-c-brand-1)]">&rarr;</span>
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
