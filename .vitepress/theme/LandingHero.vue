<script setup lang="ts">
import Image from './Image.vue';

interface Actions {
  text: string;
  link: string;
}

interface Image {
  alt: string;
  src: string;
}

interface Hero {
  name: string;
  text: string;
  tagline: string;
  actions: Actions[];
  image: Image;
}

interface LandingHeroProps {
  hero: Hero;
}

defineProps<LandingHeroProps>();
</script>

<template>
  <section class="text-gray-600 body-font py-16">
    <div class="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center"
      >
        <h1 class="sm:text-6xl text-5xl items-center xl:w-2/2 text-gray-900 font-bold">
          {{ hero.name }}
        </h1>
        <div class="text-gray-500 mb-5 text-lg">
          {{ hero.text }}
        </div>
        <p class="mb-4 xl:w-3/4 text-gray-600 text-lg">
          {{ hero.tagline }}
        </p>
        <div class="flex justify-center gap-4 mt-2">
          <a
            v-for="button in hero.actions"
            :key="button.link"
            class="inline-block px-6 py-3 text-white bg-blue-600 font-medium text-lg rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
            :href="button.link"
          >
            <span class="h-full flex items-center font-medium"> {{ button.text }}</span>
          </a>
        </div>
      </div>
      <div class="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
        <Image
          class="w-80 md:ml-1 ml-24"
          :image="hero.image"
        />
      </div>
    </div>
  </section>
</template>
