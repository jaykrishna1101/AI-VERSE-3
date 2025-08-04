import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, // optional
  },
  build: {
    chunkSizeWarningLimit: 1500 // increases the limit from 500 KB to 1000 KB
  }
})