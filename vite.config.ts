import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@/features': '/src/features',
      '@/pages': '/src/pages',
      '@/hooks': '/src/hooks',
      '@/utils': '/src/utils',
      '@/data': '/src/data',
      '@/shared': '/src/shared',
      '@/styles': '/src/styles',
      '@/assets': '/src/assets',
    },
  },
})
