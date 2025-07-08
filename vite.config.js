import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import env from 'dotenv'

env.config();
// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': process.env.ROUTE,
    }
  },
  plugins: [react(), tailwindcss()],
})