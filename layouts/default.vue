<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Avatar from './components/Avatar.vue'
</script>

<template>
  <div class="bg-container min-h-screen flex flex-col h-full c-primary font-sans font-mono">
    <header class="flex justify-end items-center p-4xl w-full text-lg">
      <Avatar />
      <NavBar />
    </header>
    <main class="flex-1 px-7 py-10 w-100%">
      <div class="max-w-65ch m-auto">
        <slot />
      </div>
    </main>
    <Footer class=" m-auto" />
  </div>
</template>
