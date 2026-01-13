import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Force rebuild - fixing 404 errors
export default defineConfig({
  plugins: [react()],
  base: './',
  css: {
    localsConvention: "camelCase "
  }
})
