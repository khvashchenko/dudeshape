import { defineConfig } from 'vite';

export default defineConfig({
  base: '/dudeshape/',

  server: {
    host: true, 
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    },
  },
});