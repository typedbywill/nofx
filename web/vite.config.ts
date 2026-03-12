import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': [
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-slot',
            'lucide-react',
            'framer-motion',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
            'sonner'
          ],
          'vendor-charts': ['recharts', 'lightweight-charts'],
          'vendor-utils': ['axios', 'date-fns', 'zustand', 'swr', 'katex']
        }
      }
    }
  }
})
