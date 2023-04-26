<script setup lang="ts">
const config = useRuntimeConfig()
const envData = process.env
</script>

<template>
  <div>
    <div>=== RuntimeConfig.public ===</div>
    <div>{{ config.public.apiBase }}</div>
    <div>{{ config.public.sourcesBase }}</div>
    <div>=== process.env ===</div>
    <div v-for="(value, key, index) in envData" :key="index">
      {{ key }} : {{ value }}
    </div>
  </div>
</template>
