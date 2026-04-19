import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// PERF: Enable production optimizations
export default defineConfig({
  plugins: [react()],
  build: {
    // PERF: Generate manifest for asset optimization
    manifest: true,
    rollupOptions: {
      // PERF: Clean output for smaller bundle
      output: {
        compact: true,
      },
    },
    // Reduce bundle size warning threshold
    chunkSizeWarningLimit: 500,
  },
  // Ensure source maps for debugging
  buildSourceMap: true,
});

---