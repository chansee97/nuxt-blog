<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div>
    <div>=== RuntimeConfig.public ===</div>
    <div>{{ config.public.apiBase }}</div>
    <div>{{ config.public.sourcesBase }}</div>
  </div>
</template>
