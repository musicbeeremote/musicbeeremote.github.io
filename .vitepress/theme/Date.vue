<script setup lang="ts">
import type { News } from './news.data.js';

const props = defineProps<{ date: News['date'] }>();

function getDateTime() {
  return new Date(props.date.time).toISOString();
}
</script>

<template>
  <dl>
    <dt class="sr-only">
      Published on
    </dt>
    <dd class="text-base leading-6 font-medium text-gray-500 dark:text-gray-300">
      <time :datetime="getDateTime()">{{ date.string }}</time>
    </dd>
  </dl>
</template>
