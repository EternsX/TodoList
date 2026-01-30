import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,   // use Render's assigned port
    host: '0.0.0.0',                  // bind to all interfaces
    allowedHosts: ['todolist-obmx.onrender.com'], // whitelist Render host
  },
})
