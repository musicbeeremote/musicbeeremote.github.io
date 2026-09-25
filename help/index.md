---
outline: deep
---

<script setup>
import { onMounted, ref } from 'vue'

const LATEST = '1.7'
const GUIDE_LINKS = {
  '1.5': '/help/1.5/application',
  '1.6': '/help/1.6/',
  '1.7': '/help/1.7/',
}

const version = ref(null)
const docsVersion = ref(LATEST)

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const v = params.get('version')
  if (v) {
    version.value = v
    const [major, minor] = v.split('.').map(Number)
    if (major < 1 || (major === 1 && minor < 6)) {
      docsVersion.value = '1.5'
    }
    else if (major === 1 && minor === 6) {
      docsVersion.value = '1.6'
    }
  }
})
</script>

# User Guide

Here you can learn how to get started with MusicBee Remote.

<div v-if="version" class="custom-block tip">
  <p class="custom-block-title">App version {{ version }}</p>
  <p v-if="docsVersion !== LATEST">
    You are using an older version of the app.
    <a :href="GUIDE_LINKS[docsVersion]">The v{{ docsVersion }} guide</a> matches what you see in the app.
    The latest guide below covers features added since.
  </p>
  <p v-else>
    You are viewing the documentation for the latest version of MusicBee Remote.
  </p>
</div>

<div class="guide-cards">
  <a href="/help/plugin/" class="guide-card">
    <span class="guide-card-icon">🔌</span>
    <span class="guide-card-title">Plugin Setup</span>
    <span class="guide-card-desc">Download, install, and configure the MusicBee plugin on your PC.</span>
  </a>
  <a href="/help/1.7/" class="guide-card guide-card-featured">
    <span class="guide-card-badge">Latest</span>
    <span class="guide-card-icon">📱</span>
    <span class="guide-card-title">App Guide (v1.7)</span>
    <span class="guide-card-desc">Full documentation for the current app, including Android 17 support.</span>
  </a>
  <a href="/help/1.6/" class="guide-card">
    <span class="guide-card-icon">📱</span>
    <span class="guide-card-title">App Guide (v1.6)</span>
    <span class="guide-card-desc">Documentation for v1.6.x, the first release with the Compose UI.</span>
  </a>
  <a href="/help/1.5/application" class="guide-card">
    <span class="guide-card-icon">📄</span>
    <span class="guide-card-title">App Guide (v1.5)</span>
    <span class="guide-card-desc">Legacy documentation for the original View-based interface.</span>
  </a>
</div>

<style>
.guide-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.guide-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none !important;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.guide-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(230, 81, 0, 0.08);
  text-decoration: none !important;
}

.guide-card-featured {
  border-color: var(--vp-c-brand-soft);
  background: rgba(230, 81, 0, 0.03);
}

.guide-card-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 8px;
}

.guide-card-icon {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.guide-card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.guide-card-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>
