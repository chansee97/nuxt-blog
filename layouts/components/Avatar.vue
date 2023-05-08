<script setup lang="ts">
import { siteConfig } from '@/site.config'

const router = useRouter()
function backRoot() {
  router.push('/')
}
</script>

<template>
  <a class="flex items-center gap-1em cursor-pointer top-0 left-0" @click="backRoot()">
    <img width="50" height="50" class="rd-full" src="https://avatars.githubusercontent.com/u/90271994" :alt="siteConfig.author">

  </a>
</template>
