import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import externalGlobals from 'rollup-plugin-external-globals'

export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    AutoImport({
      imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core'],
      dts: true,
      dirs: ['./src/composables'],
      vueTemplate: true,
    }),
  ],
  build: {
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        'axios',
        'vue-demi',
        'pinia',
      ],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios',
          'vue-demi': 'VueDemi',
          pinia: 'Pinia',
        }),
      ],
    },
  },
})
