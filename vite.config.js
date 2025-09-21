import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base URL for the application - important for deployment
  // Set to '/' for root domain or '/subdirectory/' for subdirectory deployment
  base: '/',
  server: {
    port: 5173
  }
})
