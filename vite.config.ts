import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base :  '/',
  root: ".", // Ensure Vite looks in the correct directory
  build: {
    outDir: "dist",
  },
});