import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name].js',
        chunkFileNames: 'static/js/[name].js',
        assetFileNames: (assetInfo) => {
          const exts = assetInfo.names ? assetInfo.names.map(name => path.extname(name)) : [];
          if (exts.length === 0) return 'static/[name][extname]';

          for (const ext of exts) {
            if (/\.css$/.test(ext)) {
              return 'static/css/[name][extname]';
            }
            if (/\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$/.test(ext)) {
              return 'static/media/images/[name][extname]';
            }
            if (/\.ttf$|\.otf$|\.woff$|\.woff2$/.test(ext)) {
              return 'static/media/fonts/[name][extname]';
            }
            if (/\.pdf$/.test(ext)) {
              return 'static/media/pdfs/[name][extname]';
            }
          }
          return 'static/[name][extname]';
        }
      }
    }
  }
});
