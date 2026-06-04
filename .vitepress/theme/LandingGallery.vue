<script setup lang="ts">
import { withBase } from 'vitepress';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Image from './Image.vue';

interface GalleryImage {
  src: string;
  alt: string;
}

const { images } = defineProps<{ images: GalleryImage[] }>();

const visibleIndex = ref<number>();
const selection = ref<GalleryImage>();
let touchStartX = 0;
let touchStartY = 0;

function openImage(image: GalleryImage) {
  selection.value = image;
  visibleIndex.value = images.indexOf(image);
  document.body.style.overflow = 'hidden';
}

function closeImage() {
  selection.value = undefined;
  visibleIndex.value = undefined;
  document.body.style.overflow = '';
}

function nextImage() {
  if (visibleIndex.value !== undefined && visibleIndex.value < images.length - 1) {
    visibleIndex.value++;
    selection.value = images[visibleIndex.value];
  }
}

function prevImage() {
  if (visibleIndex.value !== undefined && visibleIndex.value > 0) {
    visibleIndex.value--;
    selection.value = images[visibleIndex.value];
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

function handleTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
    if (dx < 0) {
      nextImage();
    }
    else {
      prevImage();
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-[1080px] text-center">
      <h2 class="mb-3 text-4xl font-bold tracking-tight text-[var(--vp-c-text-1)]">
        Screenshots
      </h2>
      <p class="mb-16 text-lg text-[var(--vp-c-text-2)]">
        See MusicBee Remote in action.
      </p>

      <div class="mx-auto grid max-w-[280px] grid-cols-1 gap-6 min-[480px]:max-w-[900px] min-[480px]:grid-cols-2 md:grid-cols-3">
        <div
          v-for="(item, index) in images"
          :key="index"
          class="cursor-pointer rounded-[20px] bg-[#1a1a1a] p-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
          @click="openImage(item)"
        >
          <Image
            :image="item"
            class="block h-auto w-full rounded-xl"
          />
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-90"
      leave-to-class="opacity-0 scale-90"
    >
      <div
        v-if="visibleIndex !== undefined"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
        @click.self="closeImage()"
        @touchstart.passive="handleTouchStart($event)"
        @touchend.passive="handleTouchEnd($event)"
      >
        <button
          type="button"
          class="absolute right-6 top-4 z-[51] cursor-pointer border-none bg-transparent text-[2rem] font-bold text-white"
          @click="closeImage()"
        >
          &times;
        </button>

        <button
          v-if="visibleIndex > 0"
          type="button"
          class="absolute left-4 top-1/2 z-[51] -translate-y-1/2 cursor-pointer border-none bg-transparent p-4 text-[3rem] font-bold text-white"
          @click="prevImage()"
        >
          &lsaquo;
        </button>

        <div class="flex flex-col items-center gap-3">
          <div class="max-h-[80vh] rounded-[32px] bg-[#1a1a1a] p-[10px] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div class="mx-auto mb-1.5 mt-0.5 h-[5px] w-20 rounded-[3px] bg-[#333]" />
            <img
              v-if="selection"
              :src="withBase(selection.src)"
              :alt="selection.alt"
              class="block max-h-[calc(80vh-40px)] w-auto rounded-[22px]"
            />
          </div>
          <div class="text-sm font-medium tracking-[0.05em] text-white/70">
            {{ visibleIndex + 1 }} / {{ images.length }}
          </div>
          <div
            v-if="selection"
            class="text-[0.8125rem] text-white/50"
          >
            {{ selection.alt }}
          </div>
        </div>

        <button
          v-if="visibleIndex < images.length - 1"
          type="button"
          class="absolute right-4 top-1/2 z-[51] -translate-y-1/2 cursor-pointer border-none bg-transparent p-4 text-[3rem] font-bold text-white"
          @click="nextImage()"
        >
          &rsaquo;
        </button>
      </div>
    </Transition>
  </section>
</template>
