<script setup lang="ts">
import { computed } from 'vue';
import { data as releases } from './releases.data.js';

interface Download {
  name: string;
  description: string;
  link: string;
  icon: string;
}

const { downloads } = defineProps<{ downloads: Download[] }>();

function formatSize(bytes: number): string {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

const appApk = computed(() =>
  releases.app?.assets.find(a => a.name.includes('github') && a.name.endsWith('.apk')),
);

const pluginExe = computed(() =>
  releases.plugin?.assets.find(a => a.name.endsWith('.exe') && !a.name.endsWith('.sha512')),
);

const pluginZip = computed(() =>
  releases.plugin?.assets.find(a => a.name.endsWith('.zip') && !a.name.endsWith('.sha512')),
);
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
        <!-- App card -->
        <div class="download-card">
          <div
            class="download-icon"
            v-html="downloads[0].icon"
          />
          <h3 class="download-name">
            {{ downloads[0].name }}
          </h3>
          <p class="download-description">
            {{ downloads[0].description }}
          </p>
          <div
            v-if="releases.app"
            class="download-meta"
          >
            <span class="download-version">{{ releases.app.version }}</span>
            <span class="download-date">{{ releases.app.date }}</span>
          </div>
          <div class="download-actions">
            <div class="download-buttons-row">
              <a
                v-if="appApk"
                class="download-button"
                :href="appApk.url"
              >
                Download APK
                <span class="download-size">({{ formatSize(appApk.size) }})</span>
              </a>
              <a
                class="download-play-badge"
                href="https://play.google.com/store/apps/details?id=com.kelsos.mbrc"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/img/google-play-badge.svg"
                  alt="Get it on Google Play"
                >
              </a>
            </div>
            <div class="download-links">
              <a
                class="download-fallback"
                :href="downloads[0].link"
              >
                All releases &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- Plugin card -->
        <div class="download-card">
          <div
            class="download-icon"
            v-html="downloads[1].icon"
          />
          <h3 class="download-name">
            {{ downloads[1].name }}
          </h3>
          <p class="download-description">
            {{ downloads[1].description }}
          </p>
          <div
            v-if="releases.plugin"
            class="download-meta"
          >
            <span class="download-version">{{ releases.plugin.version }}</span>
            <span class="download-date">{{ releases.plugin.date }}</span>
          </div>
          <div class="download-actions">
            <a
              v-if="pluginExe"
              class="download-button"
              :href="pluginExe.url"
            >
              Download Installer
              <span class="download-size">({{ formatSize(pluginExe.size) }})</span>
            </a>
            <div class="download-links">
              <a
                v-if="pluginZip"
                class="download-fallback"
                :href="pluginZip.url"
              >
                ZIP archive
              </a>
              <span
                v-if="pluginZip"
                class="download-separator"
              >
                &middot;
              </span>
              <a
                class="download-fallback"
                :href="downloads[1].link"
              >
                All releases &rarr;
              </a>
            </div>
          </div>
        </div>
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
  max-width: 960px;
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

.download-meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1rem;
}

.download-version {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
}

.download-date {
  font-size: 0.8125rem;
  color: var(--vp-c-text-3);
}

.download-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
}

.download-buttons-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: var(--vp-c-brand-3);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.download-button:hover {
  background: var(--vp-c-brand-2);
}

.download-size {
  font-weight: 400;
  opacity: 0.8;
}

.download-play-badge {
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.download-play-badge img {
  height: 40px;
  width: auto;
  display: block;
}

.download-play-badge:hover {
  transform: translateY(-1px);
}

.download-fallback {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.download-fallback:hover {
  text-decoration: underline;
}

.download-links {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
}

.download-separator {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
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
