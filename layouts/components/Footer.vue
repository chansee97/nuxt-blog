<script setup lang="ts">
import { siteConfig } from '@/site.config'
</script>

<template>
  <footer class="pt-5em">
    <div class="flex items-center flex-col md:flex-row gap-1em">
      <span class="op-50">
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" class="link">
          CC BY-NC-SA 4.0
        </a>
        Copyright © 2023-Present {{ siteConfig.author }}
      </span>

      <img href="https://codetime.dev" alt="Custom badge" src="https://img.shields.io/endpoint?style=social&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D17109%26project%3D%26in%3D0">
    </div>
  </footer>
</template>
