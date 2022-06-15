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
      ],
      dirs: [
        './src/composables',
      ],
      // vue specific
      vueTemplate: true,
    }),
    UnoCSS(
      {
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons(),
        ],
      },
    ),
  ],

})
