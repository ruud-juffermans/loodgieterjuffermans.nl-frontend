import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(dirname, './src/components'),
      '@assets': path.resolve(dirname, './src/assets'),
      '@data': path.resolve(dirname, './src/data'),
      '@theme': path.resolve(dirname, './src/theme'),
      '@layouts': path.resolve(dirname, './src/layouts'),
      '@pages': path.resolve(dirname, './src/pages'),
      '@router': path.resolve(dirname, './src/router'),
      '@hooks': path.resolve(dirname, './src/hooks'),
    }
  },
})
