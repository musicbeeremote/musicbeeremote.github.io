<script setup lang="ts">
import { withBase } from 'vitepress';
import { onBeforeMount, onMounted, ref } from 'vue';
import Image from './Image.vue';

interface Image {
  src: string;
  alt: string;
}

interface LandingGalleryProps {
  images: Image[];
}

const props = defineProps<LandingGalleryProps>();

const visibleIndex = ref<number>();
const selection = ref<Image>();

function openImage(image: Image) {
  selection.value = image;
  visibleIndex.value = props.images.indexOf(image);
  document.body.style.overflow = 'hidden';
}

function closeImage() {
  selection.value = undefined;
  visibleIndex.value = undefined;
  document.body.style.overflow = '';
}

function nextImage() {
  if (visibleIndex.value !== undefined && visibleIndex.value < props.images.length - 1) {
    visibleIndex.value++;
    selection.value = props.images[visibleIndex.value];
  }
}

function prevImage() {
  if (visibleIndex.value !== undefined && visibleIndex.value > 0) {
    visibleIndex.value--;
    selection.value = props.images[visibleIndex.value];
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (visibleIndex.value === undefined) {
    return;
  }

  if (e.key === 'ArrowRight') {
    nextImage();
  }
  else if (e.key === 'ArrowLeft') {
    prevImage();
  }
  else if (e.key === 'Escape') {
    closeImage();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeMount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <section class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Image Gallery
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          See MusicBee Remote in action.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(item, index) in images"
          :key="index"
          class="overflow-hidden rounded-lg shadow"
          @click="openImage(item)"
        >
          <Image
            :image="item"
            class="object-cover w-full h-60"
          />
        </div>
      </div>
    </div>

    <Transition
      name="fade-zoom"
      @after-leave="closeImage()"
    >
      <div
        v-if="visibleIndex !== undefined"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      >
        <button
          class="absolute top-4 right-4 text-white text-2xl font-bold"
          @click="closeImage()"
        >
          &times;
        </button>

        <button
          v-if="visibleIndex > 0"
          class="absolute left-4 text-white text-4xl font-bold focus:outline-none"
          @click="prevImage()"
        >
          ‹
        </button>

        <img
          v-if="selection"
          :src="withBase(selection.src)"
          :alt="selection.alt"
          class="max-w-full max-h-full rounded-lg shadow-lg"
        />

        <button
          v-if="visibleIndex < props.images.length - 1"
          class="absolute right-4 text-white text-4xl font-bold focus:outline-none"
          @click="nextImage()"
        >
          ›
        </button>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  @apply transition duration-300 ease-out;
}

.fade-zoom-enter-from {
  @apply opacity-0 scale-50;
}

.fade-zoom-enter-to {
  @apply opacity-100 scale-100;
}

.fade-zoom-leave-from {
  @apply opacity-100 scale-100;
}

.fade-zoom-leave-to {
  @apply opacity-0 scale-50;
}
</style>
