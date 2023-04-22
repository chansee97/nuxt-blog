<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container min-h-screen flex flex-col h-full text-primary">
    <header class="flex justify-between items-center p-2em m-auto w-full">
      <span>Chansee97</span>
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

<style>
body{
  height: 100%;
}
</style>
