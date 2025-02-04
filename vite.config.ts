import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true
    })
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': '/src',
      'source-map-js': 'source-map',
      path: 'path-browserify',
      url: 'url-browserify'
    }
  },
  publicDir: 'public',
  assetsInclude: ['**/*.woff2', '**/*.woff']
});
