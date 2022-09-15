import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue/macros', 'vue-router', '@vueuse/core'],
      dts: true,
      dirs: ['./src/composables'],
      vueTemplate: true,
    }),
  ],
})
