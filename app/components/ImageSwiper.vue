<template>
  <div class="image-swiper-placeholder">
    <slot />
  </div>
</template>

<script setup lang="ts">
// Placeholder component retained to satisfy project structure.
</script>

<style scoped>
.image-swiper-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  border: 1px dashed rgba(148, 163, 184, 0.6);
  border-radius: 1rem;
  color: rgba(100, 116, 139, 0.8);
  font-size: 0.875rem;
}
</style>
