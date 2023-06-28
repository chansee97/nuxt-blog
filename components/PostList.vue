<script setup lang="ts">
const { posts } = defineProps(['posts'])
</script>

<template>
  <ul>
    <template v-for="(article, index) in posts" :key="article._path">
      <div
        v-if="article.isMarked" class="relative pointer-events-none select-none h-20"
        slide-enter :style="{ '--stagger': index + 1 }"
      >
        <span
          class="text-8em font-bold op-15 absolute -top-0.2em -left-0.3em color-transparent text-stroke-2 text-stroke-hex-aaa"
        >{{ article.year }}</span>
      </div>
      <Cell v-else :article="article" slide-enter :style="{ '--stagger': index + 1 }" />
    </template>
  </ul>
</template>
