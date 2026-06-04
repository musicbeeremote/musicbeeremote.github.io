<script setup lang="ts">
import type { News } from './news.data.js';

const { date } = defineProps<{ date: News['date'] }>();

function getDateTime() {
  return new Date(date.time).toISOString();
}
</script>

<template>
  <dl class="m-0">
    <dt class="sr-only">
      Published on
    </dt>
    <dd class="m-0 text-sm font-medium text-[var(--vp-c-text-3)]">
      <time :datetime="getDateTime()">{{ date.string }}</time>
    </dd>
  </dl>
</template>
