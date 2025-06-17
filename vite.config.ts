import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // <-- AQUI ESTÁ A CORREÇÃO
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // Caminho base para o GitHub Pages
  base: '/santa-ilha-imoveis-web/', 

  plugins: [react()],

  // Configuração para o Vite entender os caminhos com "@/"
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
