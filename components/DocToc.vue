<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

const props = defineProps(['toc'])
const currentId = ref()

onMounted(() => {
  function handleScroll() {
    const headings = document.querySelectorAll('h2, h3')
    for (let i = 0; i < headings.length; i++) {
      const top = headings[i].getBoundingClientRect().top
      if (top >= 0 && top <= 100)
        currentId.value = headings[i].id
    }
  }
  useEventListener(document, 'scroll', handleScroll)
})
</script>

<template>
  <div class="absolute top-0 left-full h-full pl-2em hidden xl:block">
    <nav class="sticky top-14 w-25em">
      <ul>
        <li v-for="(h2, h2Index) in props.toc.links" :key="h2Index" class="list-none relative  ">
          <span class="flex items-center">
            <span v-if="h2.id === currentId" class="text-1em absolute right-full i-icon-park-outline-right-small " />
            <a :href="`#${h2.id}`">  {{ h2.text }}</a>
          </span>
          <template v-if="h2.children && h2.children.length > 0">
            <ul v-for="(h3, h3Index) in h2.children" :key="h3Index">
              <li class="list-none relative flex items-center">
                <div v-if="h3.id === currentId" class="absolute right-full i-icon-park-outline-right-small" />
                <a :href="`#${h3.id}`">
                  {{ h3.text }}</a>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>
