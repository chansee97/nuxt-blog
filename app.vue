<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import '@/assets/styles/markdown.scss'
import '@/assets/styles/global.css'
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform:translateX(1em);
}
</style>
