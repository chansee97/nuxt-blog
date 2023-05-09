<script setup lang="ts">
import { siteConfig, socialLinks } from '@/site.config'
</script>

<template>
  <div class="hidden xl:flex fixed z-1 bottom-2em items-end">
    <div class="px-2em flex justify-end flex-col gap-1em border-r-2 h-60%">
      <a v-for="link in socialLinks" :key="link.title" :title="link.title" :href="link.path" class="hover" target="_blank">
        <div :class="link.icon" />
      </a>
    </div>
    <div
      class="text-7xl pointer-events-none op-10 text-end lh-2em select-none font-hand"
      style=" writing-mode: vertical-rl;"
    >
      {{ siteConfig.author }}
    </div>
  </div>
</template>
