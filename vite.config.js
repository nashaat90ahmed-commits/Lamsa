import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'لمسة',
        short_name: 'لمسة',
        description: 'لقاء يبدأ بلمسة...',
        theme_color: '#D4AF37',
        icons: [
          { src: 'https://via.placeholder.com/192/0F1C3F/D4AF37?text=لمسة', sizes: '192x192', type: 'image/png' },
          { src: 'https://via.placeholder.com/512/0F1C3F/D4AF37?text=لمسة', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  base: './'
});