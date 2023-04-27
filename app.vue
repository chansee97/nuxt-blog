<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#3EEAB9" :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(1em);
}
</style>
