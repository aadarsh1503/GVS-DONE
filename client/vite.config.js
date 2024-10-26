import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify your desired output directory
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor chunk
          }
          if (id.includes('src/components')) {
            return 'components'; // Separate chunk for components
          }
        }
      }
    },
    chunkSizeWarningLimit: 500, // Adjust chunk size warning limit if needed
  }
});
