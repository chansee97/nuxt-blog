<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Avatar from './components/Avatar.vue'
</script>

<template>
  <header class="flex justify-end items-center p-2em text-lg">
    <Avatar />
    <NavBar />
  </header>
  <main class="flex-1 px-7 py-10 w-100%">
    <div class="max-w-65ch m-auto">
      <slot />
    </div>
    <Footer class=" m-auto" />
  </main>
</template>
