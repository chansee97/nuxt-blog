<script setup lang="ts">
const projectList = [
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
  {
    name: 'lint-config',
    desc: 'My config with eslint, stylelint, commentslint',
    path: 'https://github.com/chansee97/lint-config',
  },
  {
    name: 'Vue-Starter',
    desc: 'My simply vue starter',
    path: 'https://github.com/chansee97/Vue-Starter',
  },
  {
    name: 'Weapp-Starter',
    desc: 'My simply weapp starter',
    path: 'https://github.com/chansee97/wx-template',
  },
]
</script>

<template>
  <div>
    <h1 class="text-title mb-2em font-bold text-center">
      Projects
    </h1>
    <article class="grid grid-cols-1 md:grid-cols-2 gap-1em">
      <a
        v-for="(project, index) in projectList" :key="index"
        :title="project.name" :href="project.path" target="_blank"
        class="flex items-center p-0.5em hover rounded-sm hover:bg-gray-400:10"
        slide-enter
        :style="{'--stagger': index + 1}"
      >
        <div >
          <div class="text-lg">{{ project.name }} <span class="text-sm i-icon-park-outline-efferent-three" /></div>
          <div class="text-sm op-70">{{ project.desc }}</div>
        </div>

      </a>
    </article>
  </div>
</template>
