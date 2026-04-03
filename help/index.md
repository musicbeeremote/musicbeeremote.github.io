---
outline: deep
---

<script setup>
import { onMounted, ref } from 'vue'

const version = ref(null)
const docsVersion = ref('1.6')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const v = params.get('version')
  if (v) {
    version.value = v
    const [major, minor] = v.split('.').map(Number)
    // Versions before 1.6.0 use the 1.5 (legacy) docs
    if (major < 1 || (major === 1 && minor < 6)) {
      docsVersion.value = '1.5'
    }
  }
})
</script>

# User Guide

Here you can learn how to get started with MusicBee Remote.

<div v-if="version" class="custom-block tip">
  <p class="custom-block-title">App version {{ version }}</p>
  <p v-if="docsVersion === '1.5'">
    You are using an older version of the app. The documentation below matches your version.
    <a href="/help/1.6/">View the latest documentation</a> for the newest features.
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
  <a href="/help/1.6/" class="guide-card guide-card-featured">
    <span class="guide-card-badge">Latest</span>
    <span class="guide-card-icon">📱</span>
    <span class="guide-card-title">App Guide (v1.6)</span>
    <span class="guide-card-desc">Full documentation for the new Compose UI with all features.</span>
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
