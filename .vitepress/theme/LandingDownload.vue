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
  <section class="bg-[var(--mbrc-c-surface)] px-6 py-24">
    <div class="mx-auto max-w-[960px] text-center">
      <h2 class="mb-3 text-4xl font-bold tracking-tight text-[var(--vp-c-text-1)]">
        Get Started
      </h2>
      <p class="mb-16 text-lg text-[var(--vp-c-text-2)]">
        Download both the Android app and the MusicBee plugin to get started.
      </p>
      <div class="mb-8 grid grid-cols-1 gap-8 min-[600px]:grid-cols-2">
        <!-- App card -->
        <div class="flex flex-col items-center rounded-2xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg)] px-8 py-10 transition-colors duration-200 hover:border-[var(--vp-c-brand-1)]">
          <div
            class="mb-4 h-12 w-12 text-[var(--vp-c-brand-1)]"
            v-html="downloads[0].icon"
          />
          <h3 class="mb-2 text-xl font-semibold text-[var(--vp-c-text-1)]">
            {{ downloads[0].name }}
          </h3>
          <p class="mb-4 text-base leading-[1.7] text-[var(--vp-c-text-2)]">
            {{ downloads[0].description }}
          </p>
          <div
            v-if="releases.app"
            class="mb-4 flex items-center gap-3"
          >
            <span class="rounded bg-[var(--vp-c-brand-soft)] px-2 py-[0.1rem] text-[0.8125rem] font-semibold text-[var(--vp-c-brand-1)]">{{ releases.app.version }}</span>
            <span class="text-[0.8125rem] text-[var(--vp-c-text-3)]">{{ releases.app.date }}</span>
          </div>
          <div class="flex flex-col items-center justify-center gap-3">
            <div class="flex flex-wrap items-center justify-center gap-2">
              <a
                v-if="appApk"
                class="inline-flex items-center gap-1 rounded-lg bg-[var(--vp-c-brand-3)] px-4 py-2 text-sm font-semibold text-white no-underline transition-colors duration-200 hover:bg-[var(--vp-c-brand-2)]"
                :href="appApk.url"
              >
                Download APK
                <span class="font-normal opacity-80">({{ formatSize(appApk.size) }})</span>
              </a>
              <a
                class="inline-flex items-center transition-transform duration-200 hover:-translate-y-px"
                href="https://play.google.com/store/apps/details?id=com.kelsos.mbrc"
                aria-label="Get it on Google Play"
              >
                <img
                  src="/img/google-play-badge.svg"
                  alt="Get it on Google Play"
                  class="block h-10 w-auto"
                />
              </a>
            </div>
            <div class="flex items-center justify-center gap-[0.4rem]">
              <a
                class="text-[0.8125rem] font-medium text-[var(--vp-c-brand-1)] no-underline hover:underline"
                :href="downloads[0].link"
              >
                All releases &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- Plugin card -->
        <div class="flex flex-col items-center rounded-2xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg)] px-8 py-10 transition-colors duration-200 hover:border-[var(--vp-c-brand-1)]">
          <div
            class="mb-4 h-12 w-12 text-[var(--vp-c-brand-1)]"
            v-html="downloads[1].icon"
          />
          <h3 class="mb-2 text-xl font-semibold text-[var(--vp-c-text-1)]">
            {{ downloads[1].name }}
          </h3>
          <p class="mb-4 text-base leading-[1.7] text-[var(--vp-c-text-2)]">
            {{ downloads[1].description }}
          </p>
          <div
            v-if="releases.plugin"
            class="mb-4 flex items-center gap-3"
          >
            <span class="rounded bg-[var(--vp-c-brand-soft)] px-2 py-[0.1rem] text-[0.8125rem] font-semibold text-[var(--vp-c-brand-1)]">{{ releases.plugin.version }}</span>
            <span class="text-[0.8125rem] text-[var(--vp-c-text-3)]">{{ releases.plugin.date }}</span>
          </div>
          <div class="flex flex-col items-center justify-center gap-3">
            <a
              v-if="pluginExe"
              class="inline-flex items-center gap-1 rounded-lg bg-[var(--vp-c-brand-3)] px-4 py-2 text-sm font-semibold text-white no-underline transition-colors duration-200 hover:bg-[var(--vp-c-brand-2)]"
              :href="pluginExe.url"
            >
              Download Installer
              <span class="font-normal opacity-80">({{ formatSize(pluginExe.size) }})</span>
            </a>
            <div class="flex items-center justify-center gap-[0.4rem]">
              <a
                v-if="pluginZip"
                class="text-[0.8125rem] font-medium text-[var(--vp-c-brand-1)] no-underline hover:underline"
                :href="pluginZip.url"
              >
                ZIP archive
              </a>
              <span
                v-if="pluginZip"
                class="text-xs text-[var(--vp-c-text-3)]"
              >
                &middot;
              </span>
              <a
                class="text-[0.8125rem] font-medium text-[var(--vp-c-brand-1)] no-underline hover:underline"
                :href="downloads[1].link"
              >
                All releases &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <p class="text-[0.8rem] text-[var(--vp-c-text-3)]">
        Requires Android 6.0+ and MusicBee 3.0+. Both devices must be on the same network.
      </p>
    </div>
  </section>
</template>
