
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg', 'logo-neon.png'],
    manifest: {
      name: 'Christian Creative IA',
      short_name: 'CCIA',
      description: 'Portfolio de Christian Oyono Oyono',
      theme_color: '#000000',
      background_color: '#000000',
      display: 'standalone',
      icons: [
        {
          src: 'logo-neon.png',
          sizes: '192x192',
          type: 'image/png'
        }
      ]
    }
  })]
})
