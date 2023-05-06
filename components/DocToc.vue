<script setup lang="ts">
const props = defineProps(['toc'])
</script>

<template>
  <div class="absolute top-0 left-full h-full pl-2em hidden xl:block">
    <nav class="sticky top-14 text-0.9em w-25em">
      <ul>
        <li v-for="(h2, h2Index) in props.toc.links" :key="h2Index" class="list-none">
          <a :href="`#${h2.id}`">{{ h2.text }}</a>
          <template v-if="h2.children && h2.children.length > 0">
            <ul v-for="(h3, h3Index) in h2.children" :key="h3Index">
              <li class="list-none">
                <a :href="`#${h3.id}`">{{ h3.text }}</a>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>
