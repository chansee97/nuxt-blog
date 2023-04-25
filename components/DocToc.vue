<script setup lang="ts">
const props = defineProps(['toc'])
</script>

<template>
  <nav class="hidden xl:block op-0 hover:op-70 transition-opacity duration-400 fixed  top-50% right-2em -translate-y-1/2 text-0.9em">
    <ul class="w-25ch">
      <li v-for="(h2, h2Index) in props.toc.links" :key="h2Index">
        <a :href="`#${h2.id}`">{{ h2.text }}</a>
        <template v-if="h2.children && h2.children.length > 0">
          <ul v-for="(h3, h3Index) in h2.children" :key="h3Index">
            <li>
              <a :href="`#${h3.id}`">{{ h3.text }}</a>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </nav>
</template>
