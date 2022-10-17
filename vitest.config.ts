/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue'
      ],
      dts: false
    }),
    Components({
      dirs: ['components'],
      dts: false
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.')
    }
  }
})
