<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div>
    <div>=== RuntimeConfig.public ===</div>
    <div>{{ config.public.GITHUB_REPO }}</div>
    <div>{{ config.public.GITHUB_PREFIX }}</div>
    <div>{{ config.public.GITHUB_BRANCH }}</div>
  </div>
</template>
