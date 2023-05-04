<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { navLinks } from '@/site.config'

const isDark = useDark({
  storageKey: 'blog-theme-mode',
})
const toogleTheme = useToggle(isDark)
</script>

<template>
  <nav class="flex items-center gap-1.5em">
    <span v-for="link in navLinks" :key="link.path" :class="[link.mobileShow ? '' : 'hidden md:block']">
      <NuxtLink v-if="link.path.startsWith('/')" :title="link.title" :to="link.path" class="hover">
        <span class="hidden md:inline">{{ link.title }}</span>
        <div :class="link.icon" class="md:hidden" />
      </NuxtLink>
      <a v-else :title="link.title" :href="link.path" class="hover" target="_blank">
        <div :class="[link.icon]" />
      </a>
    </span>

    <a title="Toggle Color Scheme" class="dark:i-icon-park-outline-moon i-icon-park-outline-sun hover" @click="toogleTheme()" />
  </nav>
</template>
