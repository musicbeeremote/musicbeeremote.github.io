<script setup lang="ts">
import { withBase } from 'vitepress';

interface Feature {
  title: string;
  details: string;
  image?: string;
}

interface ExtraFeature {
  icon: string;
  title: string;
  details: string;
}

const { features, extras } = defineProps<{
  features: Feature[];
  extras: ExtraFeature[];
}>();
</script>

<template>
  <!-- Main features with screenshots -->
  <section class="px-6 py-24">
    <div class="mx-auto max-w-[1080px]">
      <h2 class="mb-20 text-center text-4xl font-bold tracking-tight text-[var(--vp-c-text-1)]">
        What you can do
      </h2>

      <div
        v-for="(feature, index) in features"
        :key="feature.title"
        class="mb-24 flex flex-col items-center gap-10 text-center last:mb-0 md:gap-20 md:text-left"
        :class="index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'"
      >
        <div class="flex-1">
          <h3 class="mb-4 text-2xl font-semibold tracking-tight text-[var(--vp-c-text-1)]">
            {{ feature.title }}
          </h3>
          <p class="text-base leading-[1.7] text-[var(--vp-c-text-2)]">
            {{ feature.details }}
          </p>
        </div>
        <div
          v-if="feature.image"
          class="shrink-0"
        >
          <div class="w-[200px] rounded-[28px] bg-[#1a1a1a] p-2 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.15)] md:w-[240px]">
            <img
              :src="withBase(feature.image)"
              :alt="feature.title"
              class="block h-auto w-full rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Extra features grid -->
  <section class="bg-[var(--mbrc-c-surface)] px-6 py-24">
    <div class="mx-auto max-w-[1080px]">
      <h2 class="mb-16 text-center text-4xl font-bold tracking-tight text-[var(--vp-c-text-1)]">
        And more
      </h2>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="extra in extras"
          :key="extra.title"
          class="rounded-2xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg)] px-8 py-10 text-center transition-colors duration-200 hover:border-[var(--vp-c-brand-1)]"
        >
          <div
            class="mx-auto mb-4 h-10 w-10 text-[var(--vp-c-brand-1)]"
            v-html="extra.icon"
          />
          <h3 class="mb-2 text-xl font-semibold text-[var(--vp-c-text-1)]">
            {{ extra.title }}
          </h3>
          <p class="text-base leading-[1.7] text-[var(--vp-c-text-2)]">
            {{ extra.details }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
