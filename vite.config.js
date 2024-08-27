import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PROY5/', // Reemplaza REPO_NAME con el nombre de tu repositorio
  build: {
    rollupOptions: {
      output: {
        manualChunks: null,
      },
    },
  },
});
