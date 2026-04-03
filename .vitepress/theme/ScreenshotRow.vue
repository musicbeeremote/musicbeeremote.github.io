<template>
  <div class="screenshot-row">
    <slot />
  </div>
</template>

<style scoped>
.screenshot-row {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}
</style>
