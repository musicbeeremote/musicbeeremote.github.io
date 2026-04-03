<script setup lang="ts">
import { withBase } from 'vitepress';

const { src, alt } = defineProps<{
  src: string;
  alt?: string;
}>();
</script>

<template>
  <figure class="phone-frame">
    <div class="phone-body">
      <div class="phone-notch" />
      <img
        :src="withBase(src)"
        :alt="alt || ''"
        class="phone-screen"
      />
    </div>
    <figcaption v-if="alt">
      {{ alt }}
    </figcaption>
  </figure>
</template>

<style scoped>
.phone-frame {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}

.phone-body {
  background: #1a1a1a;
  border-radius: 24px;
  padding: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  max-width: 260px;
}

.phone-notch {
  width: 60px;
  height: 4px;
  background: #333;
  border-radius: 2px;
  margin: 2px auto 6px;
}

.phone-screen {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
}

figcaption {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #888;
  text-align: center;
}
</style>
