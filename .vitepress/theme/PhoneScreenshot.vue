<script setup lang="ts">
import { withBase } from 'vitepress';

const { src, alt } = defineProps<{
  src: string;
  alt?: string;
}>();
</script>

<template>
  <figure class="m-0 inline-flex flex-col items-center">
    <div class="max-w-[260px] rounded-[24px] bg-[#1a1a1a] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
      <div class="mx-auto mt-0.5 mb-1.5 h-1 w-[60px] rounded-[2px] bg-[#333]" />
      <img
        :src="withBase(src)"
        :alt="alt || ''"
        class="block h-auto w-full rounded-[16px]"
      />
    </div>
    <figcaption
      v-if="alt"
      class="mt-2 text-center text-[0.8rem] text-[#888]"
    >
      {{ alt }}
    </figcaption>
  </figure>
</template>
