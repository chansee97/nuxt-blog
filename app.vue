<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import '@/assets/styles/markdown.scss'
</script>

<template>
  <NuxtLayout>
    <NuxtPage class="prose" />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  filter: blur(1rem);
  opacity: 0;
}
</style>
