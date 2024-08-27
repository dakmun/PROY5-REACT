import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/proy5/', // Reemplaza REPO_NAME con el nombre de tu repositorio
});

