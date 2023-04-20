import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import presetChinese from 'unocss-preset-chinese'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    'text-primary': 'c-blue-400 dark:c-gray-200',
    'hover': 'op-50 hover:op-100',
    'container': 'bg-white dark:bg-#1f1f1f',
    'color-fade': 'c-gray-900:50 dark:c-gray-300:50',
  },
  theme: {
    colors: {
      'primary': '#1677ff',
      'primary-border': '#1677ff',
      'text': 'rgba(0, 0, 0, 0.88)',
      'container': '#ffffff',
      'border': '#d9d9d9',
    },
  },
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetChinese(),
    presetAttributify (),
    presetIcons({
      collections: {
        'icon-park-outline': () => import('@iconify-json/icon-park-outline/icons.json').then(i => i.default),
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
      ::selection {
        background-color: #10B981;
        color:white;
      }
    `,
    },
  ],
})
