<script setup lang="ts">
import { siteConfig } from '@/site.config'
</script>

<template>
  <footer class="pt-5em text-center w-full op-50">
    <div>
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" class="link">
        CC BY-NC-SA 4.0
      </a> Copyright © 2023-Present {{ siteConfig.author }}
    </div>
  </footer>
</template>
