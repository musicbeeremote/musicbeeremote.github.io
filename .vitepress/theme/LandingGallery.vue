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

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <section class="gallery-section">
    <div class="gallery-container">
      <h2 class="gallery-title">
        Screenshots
      </h2>
      <p class="gallery-subtitle">
        See MusicBee Remote in action.
      </p>

      <div class="gallery-grid">
        <div
          v-for="(item, index) in images"
          :key="index"
          class="gallery-item"
          @click="openImage(item)"
        >
          <Image
            :image="item"
            class="gallery-thumb"
          />
        </div>
      </div>
    </div>

    <Transition name="fade-zoom">
      <div
        v-if="visibleIndex !== undefined"
        class="lightbox-overlay"
        @click.self="closeImage()"
      >
        <button
          type="button"
          class="lightbox-close"
          @click="closeImage()"
        >
          &times;
        </button>

        <button
          v-if="visibleIndex > 0"
          type="button"
          class="lightbox-nav lightbox-prev"
          @click="prevImage()"
        >
          &lsaquo;
        </button>

        <div class="lightbox-phone-frame">
          <div class="lightbox-phone-notch" />
          <img
            v-if="selection"
            :src="withBase(selection.src)"
            :alt="selection.alt"
            class="lightbox-image"
          />
        </div>

        <button
          v-if="visibleIndex < images.length - 1"
          type="button"
          class="lightbox-nav lightbox-next"
          @click="nextImage()"
        >
          &rsaquo;
        </button>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 5rem 1.5rem;
  background: #fafafa;
}

.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.gallery-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.gallery-subtitle {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    max-width: 280px;
  }
}

.gallery-item {
  cursor: pointer;
  background: #1a1a1a;
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.gallery-thumb {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  z-index: 50;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 51;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  z-index: 51;
}

.lightbox-prev {
  left: 1rem;
}

.lightbox-next {
  right: 1rem;
}

.lightbox-phone-frame {
  background: #1a1a1a;
  border-radius: 32px;
  padding: 10px;
  max-height: 85vh;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
}

.lightbox-phone-notch {
  width: 80px;
  height: 5px;
  background: #333;
  border-radius: 3px;
  margin: 2px auto 6px;
}

.lightbox-image {
  max-height: calc(85vh - 40px);
  width: auto;
  display: block;
  border-radius: 22px;
}

/* Transitions */
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.3s ease-out;
}

.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.fade-zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}

.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
