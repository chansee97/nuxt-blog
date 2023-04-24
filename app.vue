<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import '@/assets/styles/theme.css'
import '@/assets/styles/markdown.scss'
import '@/assets/styles/global.css'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#3EEAB9" :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>
