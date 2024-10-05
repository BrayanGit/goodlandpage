import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/goodlandpage/', // El nombre del repositorio va aquí
  plugins: [react()],
  server: {
    port:3081,
  },
})
