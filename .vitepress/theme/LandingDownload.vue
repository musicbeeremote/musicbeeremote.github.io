<script setup lang="ts">
interface Download {
  name: string;
  description: string;
  link: string;
  icon: string;
}

interface LandingDownloadProps {
  downloads: Download[];
}

defineProps<LandingDownloadProps>();
</script>

<template>
  <section class="download-section">
    <div class="download-container">
      <h2 class="download-title">
        Get Started
      </h2>
      <p class="download-subtitle">
        Download both the Android app and the MusicBee plugin to get started.
      </p>
      <div class="download-grid">
        <a
          v-for="item in downloads"
          :key="item.link"
          class="download-card"
          :href="item.link"
        >
          <div
            class="download-icon"
            v-html="item.icon"
          />
          <h3 class="download-name">
            {{ item.name }}
          </h3>
          <p class="download-description">
            {{ item.description }}
          </p>
          <span class="download-link">
            Download &rarr;
          </span>
        </a>
      </div>
      <p class="download-note">
        Requires Android 6.0+ and MusicBee 3.0+. Both devices must be on the same network.
      </p>
    </div>
  </section>
</template>

<style scoped>
.download-section {
  padding: 5rem 1.5rem;
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, var(--vp-c-brand-soft) 100%);
}

.download-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.download-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
}

.download-subtitle {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.download-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.download-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(230, 81, 0, 0.1);
  transform: translateY(-2px);
}

.download-icon {
  width: 48px;
  height: 48px;
  color: var(--vp-c-brand-1);
  margin-bottom: 1rem;
}

.download-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.download-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.download-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.download-note {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

@media (max-width: 600px) {
  .download-grid {
    grid-template-columns: 1fr;
  }
}
</style>
