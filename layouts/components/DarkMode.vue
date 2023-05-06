<script setup lang="ts">
/**
 * 检查浏览器是否支持“视图转换”动画
 * @returns {boolean} 是否支持
 */
function supportsViewTransition() {
  return (typeof document.startViewTransition === 'function')
}

let isDark: boolean

function toggleThemeClass() {
  const root = document.documentElement
  isDark = root.classList.contains('dark')
  root.classList.remove(isDark ? 'dark' : 'light')
  root.classList.add(isDark ? 'light' : 'dark')
}
function toggleViewTransition(event: MouseEvent) {
  const transition = document.startViewTransition(() => {
    toggleThemeClass()
  })

  transition.ready.then(() => {
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
    document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 500,
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
  <a title="Toggle Color Scheme" class="dark:i-icon-park-outline-moon i-icon-park-outline-sun hover" @click="toogleTheme" />
</template>
