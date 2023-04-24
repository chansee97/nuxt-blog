<script setup lang="ts">
import { siteConfig } from '@/site.config'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="pt-5em pb-2em text-center w-full op-50">
    <div>
      Copyright © {{ currentYear }} - {{ siteConfig.author }}
    </div>
  </footer>
</template>
