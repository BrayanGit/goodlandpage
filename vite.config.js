import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/goodlandpage/', // El nombre del repositorio va aquí
  server: {
    port:3081,
  },
})
