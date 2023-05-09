<script setup lang="ts">
function supportsViewTransition() {
  // @ts-expect-error: Transition API
  return document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

let isDark: boolean

function toggleThemeClass() {
  const root = document.documentElement
  isDark = root.classList.contains('dark')
  root.classList.remove(isDark ? 'dark' : 'light')
  root.classList.add(isDark ? 'light' : 'dark')
}
function toggleViewTransition(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
  ]
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(() => {
    toggleThemeClass()
  })

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}

function toogleTheme(event: MouseEvent) {
  const isSupport = supportsViewTransition()
  if (isSupport)
    toggleViewTransition(event)
  else
    toggleThemeClass()
}
</script>

<template>
  <div title="Toggle Color Scheme" class="dark:i-icon-park-outline-moon i-icon-park-outline-sun hover" @click="toogleTheme" />
</template>
