<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div>
    {{ config.public.apiBase }}
  </div>
</template>
