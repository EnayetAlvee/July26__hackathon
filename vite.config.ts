import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  base:'./',
  plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg','og-image.svg'],manifest:{name:'Shakkho | সাক্ষ্য',short_name:'Shakkho',description:'Source-linked evidence passports for July stories',theme_color:'#8f2727',background_color:'#f4efe5',display:'standalone',start_url:'./',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]},workbox:{navigateFallback:'index.html',globPatterns:['**/*.{js,css,html,svg,json}']}})],
});
