<script setup lang="ts">
import { useData } from 'vitepress';
import LandingDownload from './LandingDownload.vue';
import LandingFeatures from './LandingFeatures.vue';
import LandingGallery from './LandingGallery.vue';
import LandingHero from './LandingHero.vue';

const { frontmatter } = useData();
</script>

<template>
  <LandingHero :hero="frontmatter.hero" />
  <LandingFeatures :features="frontmatter.features" />
  <LandingGallery :images="frontmatter.gallery" />
  <LandingDownload :downloads="frontmatter.downloads" />
</template>
