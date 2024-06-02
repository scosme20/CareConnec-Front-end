import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      external: [
        'framer-motion',
        'react-slick',
        'slick-carousel',
        'react-icons'
      ],
    },
  },
});


