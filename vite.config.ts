import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base :  '/AutoCare/',
  root: ".", // Ensure Vite looks in the correct directory
  build: {
    outDir: "dist",
  },
});