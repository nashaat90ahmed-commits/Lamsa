import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true // لاختبار PWA في التطوير
      },
      manifest: {
        name: 'لمسة',
        short_name: 'لمسة',
        description: 'تطبيق عربي فاخر للتعارف والزواج.',
        theme_color: '#D4AF37',
        background_color: '#0F1C3F',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ],
        lang: 'ar'
      }
    })
  ],
  base: './'
});