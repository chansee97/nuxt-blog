import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import presetChinese from 'unocss-preset-chinese'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    hover: 'op-70 hover:op-100 cursor-pointer transition-opacity',
    bd: 'border-gray-500 border-1',
  },
  theme: {
    colors: {
      primary: 'var(--primary)',
      container: 'var(--c-bg)',
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
