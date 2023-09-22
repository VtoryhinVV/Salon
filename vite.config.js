import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react(), ViteImageOptimizer()],
    base: '/Salon',
  };

  return config;
});
