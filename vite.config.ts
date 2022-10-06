import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('echarts')) return 'echarts'
          if (id.includes('vant')) return 'vant'
          if (id.includes('node_modules')) return 'vendor'
        }
      }
    }
  },
  plugins: [
    vue(),
    vueJSX({
      transformOn: true,
      mergeProps: true
    }),
    svgstore()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
  // base: '/'
})
