<script setup lang="ts">
const projectList = [
  {
    name: 'Recent Projects',
    content: [
      {
        name: 'Zeal UI',
        desc: 'components store, base on Vue3 and Ts',
        path: 'https://github.com/chansee97/zeal-ui',
      },
    ]
  },
  {
    name: 'Projects',
    content: [
      {
        name: 'Nuxt Blog',
        desc: 'My blog site, base on Nuxt',
        path: 'https://github.com/chansee97/nuxt-blog',
      },
      {
        name: 'Ench Admin',
        desc: 'a complete admin template',
        path: 'https://github.com/chansee97/Ench-admin',
      },
    ]
  },
  {
    name: 'Configuration',
    content: [
      {
        name: 'lint-config',
        desc: 'My configuration with eslint, stylelint, commentslint',
        path: 'https://github.com/chansee97/lint-config',
      },
      {
        name: 'dotfiles',
        desc: 'My personal development configuration',
        path: 'https://github.com/chansee97/dotfiles',
      },
    ]
  },
  {
    name: 'Starter',
    content: [
      {
        name: 'Vue-Starter',
        desc: 'My simply vue starter',
        path: 'https://github.com/chansee97/Vue-Starter',
      },
    ]
  }

]
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
        <a v-for="(project, index) in series.content" :key="index" :title="project.name" :href="project.path"
          target="_blank"  class="flex items-center py-0.5em px-1em rounded-sm hover:bg-gray-400:10"
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
