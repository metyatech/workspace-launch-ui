import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
  resolve: {
    alias: {
      '@docusaurus/router': path.resolve(__dirname, './src/mocks/router.ts'),
      '@docusaurus/useBaseUrl': path.resolve(
        __dirname,
        './src/mocks/useBaseUrl.ts',
      ),
      '@docusaurus/Link': path.resolve(__dirname, './src/mocks/Link.ts'),
    },
  },
});
