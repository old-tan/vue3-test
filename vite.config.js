import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import visualizer from 'rollup-plugin-visualizer'

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 将node_modules中的依赖单独打包出来
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0]
          }
          if (id.includes('element-plus')) {
            return 'element-plus'
          }
        }
      }
    }
  },

  plugins: [
    vue(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: 'stats.html',
      open: false
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      // include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
      include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
