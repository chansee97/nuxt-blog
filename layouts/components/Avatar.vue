<script setup lang="ts">
import { siteConfig } from '@/site.config'

const router = useRouter()
function backRoot() {
  router.push('/')
}
</script>

<template>
  <a class="flex items-center gap-1em cursor-pointer absolute lg:fixed top-0 left-0 m-2xl" @click="backRoot()">
    <img width="50" height="50" class="rd-full" src="https://avatars.githubusercontent.com/u/90271994" :alt="siteConfig.author">
    <div class="hidden sm:block">{{ siteConfig.author }}</div>
  </a>
</template>
