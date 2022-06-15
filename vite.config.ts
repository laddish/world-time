import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components(),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      dirs: [
        './src/composables',
      ],
      // vue specific
      vueTemplate: true,
    }),
    UnoCSS(
      {
        shortcuts: {
          'border-base': 'border-truegray/20 dark:border-truegray/15',
          'bg-base': 'bg-white dark:bg-truegray-900',
          'bg-canvas': 'bg-gray:15 dark:bg-truegray-800',
        },
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons(),
        ],
      },
    ),
  ],

})
