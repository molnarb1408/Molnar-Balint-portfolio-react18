import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name].[hash].js',
        chunkFileNames: 'static/js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const exts = assetInfo.names ? assetInfo.names.map(name => path.extname(name)) : [];
          
          if (exts.length === 0) return 'static/[name].[hash][extname]';

          for (const ext of exts) {
            if (/\.css$/.test(ext)) {
              return 'static/css/[name].[hash][extname]';
            }
            if (/\.webp$|\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$/.test(ext)) {
              // Képek fájlokként való kezeléséhez:
              return 'static/media/[name].[hash][extname]'; 
            }
            if (/\.ttf$|\.otf$|\.woff$|\.woff2$/.test(ext)) {
              return 'static/media/[name].[hash][extname]';
            }
            if (/\.pdf$/.test(ext)) {
              return 'static/media/[name].[hash][extname]';
            }
          }
          return 'static/[name].[hash][extname]';
        }
      }
    },
    assetsInlineLimit: 0, 
  }
});
