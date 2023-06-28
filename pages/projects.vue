<script setup lang="ts">
import { projectList } from '@/site.config'
</script>

<template>
  <div>
    <h1 class="text-title mb-2em font-bold text-center">
      Projects
    </h1>
    <article v-for="(series, index) in projectList" :key="index" slide-enter :style="{ '--stagger': index + 1 }">
      <div class="text-center mt-2em mb-1em text-gray-700:60" font-bold text-lg>
        {{ series.name }}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-1em">
        <a
          v-for="(project) in series.content" :key="project.path" :title="project.name" :href="project.path"
          target="_blank" class="flex items-center py-0.5em px-1em rounded-sm hover:bg-gray-400:10"
        >
          <div class="hover w-full">
            <div class="text-lg">{{ project.name }} <span class="text-sm op-50 i-icon-park-outline-efferent-three" />
            </div>
            <div class="text-sm op-70">{{ project.desc }}</div>
          </div>

        </a>
      </div>
    </article>
  </div>
</template>
