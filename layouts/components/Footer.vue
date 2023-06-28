<script setup lang="ts">
import { siteConfig } from '@/site.config'
</script>

<template>
  <footer class="pt-5em">
    <div class="flex items-center flex-col md:flex-row gap-1em">
      <span class="op-50 text-sm">
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" class="link">
          CC BY-NC-SA 4.0
        </a>
        2023-PRESENT © {{ siteConfig.author }}
      </span>
    </div>
  </footer>
</template>
