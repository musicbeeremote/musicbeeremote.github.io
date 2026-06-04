<script setup lang="ts">
import Image from './Image.vue';

interface Actions {
  text: string;
  link: string;
}

interface HeroImage {
  alt: string;
  src: string;
}

interface Hero {
  name: string;
  text: string;
  tagline: string;
  actions: Actions[];
  image: HeroImage;
}

interface LandingHeroProps {
  hero: Hero;
}

defineProps<LandingHeroProps>();
</script>

<template>
  <section class="px-6 py-24 md:py-32">
    <div class="mx-auto flex max-w-[1080px] flex-col items-center gap-16 text-center md:flex-row md:gap-20 md:text-left">
      <div class="flex-1">
        <h1 class="text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-[var(--vp-c-text-1)] md:text-[3.5rem]">
          {{ hero.name }}
          <span class="block text-[var(--vp-c-brand-1)]">{{ hero.text }}</span>
        </h1>
        <p class="mx-auto mt-6 max-w-[520px] text-lg leading-[1.7] text-[var(--vp-c-text-2)] md:mx-0">
          {{ hero.tagline }}
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <template
            v-for="(button, index) in hero.actions"
            :key="button.link"
          >
            <a
              v-if="button.link.includes('play.google.com')"
              class="inline-flex items-center"
              :href="button.link"
              :aria-label="button.text"
            >
              <img
                src="/img/google-play-badge.svg"
                alt="Get it on Google Play"
                class="block h-[52px] w-auto"
              />
            </a>
            <a
              v-else
              class="inline-flex items-center rounded-lg px-6 py-3 text-base font-semibold no-underline transition-colors duration-200"
              :class="index === 1
                ? 'bg-[var(--vp-c-brand-3)] text-white hover:bg-[var(--vp-c-brand-2)]'
                : 'border border-[var(--vp-c-brand-1)] text-[var(--vp-c-brand-1)] hover:bg-[var(--vp-c-brand-soft)]'"
              :href="button.link"
            >
              {{ button.text }}
            </a>
          </template>
        </div>
      </div>
      <div class="shrink-0">
        <div class="w-[240px] rounded-[36px] bg-[#1a1a1a] p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] md:w-[300px]">
          <div class="mx-auto mt-1 mb-2 h-1.5 w-[100px] rounded-[3px] bg-[#333]" />
          <div class="overflow-hidden rounded-[24px] bg-black">
            <Image
              :image="hero.image"
              class="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
