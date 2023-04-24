<script setup lang="ts">
import { siteConfig } from '@/site.config'

const router = useRouter()
function backRoot() {
  router.push('/')
}
</script>

<template>
  <a class="flex items-center gap-1em w-3em h-3em cursor-pointer absolute lg:fixed top-0 left-0 m-1em" @click="backRoot()">
    <img class="h-full rd-full" src="https://avatars.githubusercontent.com/u/90271994" :alt="siteConfig.author">
    <div class="hidden md:block">{{ siteConfig.author }}</div>
  </a>
</template>
