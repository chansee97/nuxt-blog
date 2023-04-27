import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'
import { navLinks } from './site.config'

const safeNavIcon = navLinks.map(link => link.icon)

export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'hover': 'op-70 hover:op-100 cursor-pointer transition-opacity',
    'deep-hover': 'op-20 hover:op-70 cursor-pointer transition-opacity',
    'bd': 'border-gray-500 border-1',
    'text-deep': 'c-black dark:c-white',
  },
  theme: {
    colors: {
      primary: 'var(--primary)',
      container: 'var(--c-bg)',
    },
    extend: {
      borderRadius: {
        common: 'var(--common-rd)',
      },
    },
  },
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Poppins', 'Noto Sans Simplified Chinese'],
        mono: ['Source Code Pro:400,700'],
      },
    }),
    presetAttributify (),
    presetIcons({
      collections: {
        'icon-park-outline': () => import('@iconify-json/icon-park-outline/icons.json').then(i => i.default),
      },
    }),
  ],
  safelist: [...safeNavIcon],
  transformers: [
    transformerVariantGroup(),
  ],
})
