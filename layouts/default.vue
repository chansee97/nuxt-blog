<script lang="ts" setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container min-h-screen flex flex-col h-full text-primary">
    <header class="flex justify-between items-center py-2em text-18px w-660px m-auto">
      <span>Chansee97</span>
      <NavBar />
    </header>
    <main class="flex-1 w-660px m-auto">
      <slot />
    </main>
    <Footer class="w-660px m-auto" />
  </div>
</template>

<style>
body{
  height: 100%;
}
</style>
