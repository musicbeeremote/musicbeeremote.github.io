<script setup lang="ts">
import type { News } from './news.data.js';

const { date } = defineProps<{ date: News['date'] }>();

function getDateTime() {
  return new Date(date.time).toISOString();
}
</script>

<template>
  <dl class="date-wrapper">
    <dt class="sr-only">
      Published on
    </dt>
    <dd class="date-text">
      <time :datetime="getDateTime()">{{ date.string }}</time>
    </dd>
  </dl>
</template>

<style scoped>
.date-wrapper {
  margin: 0;
}

.date-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
  margin: 0;
}
</style>
