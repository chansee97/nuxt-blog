import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import presetChinese from 'unocss-preset-chinese'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    'text-primary': 'c-primary dark:c-primary-dark',
    'hover': 'op-50 hover:op-100 cursor-pointer',
    'container': 'bg-container dark:bg-container-dark',
    'bd': 'border-gray-500 border-1',
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#343a40',
        dark: '#dee2e6',
      },
      container: {
        DEFAULT: '#f8f9fa',
        dark: '#212529',
      },
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
