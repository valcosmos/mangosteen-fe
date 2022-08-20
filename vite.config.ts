import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
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
