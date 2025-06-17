export default defineConfig({
  // Caminho base ajustado para o novo repositório
  base: '/santa-ilha-imoveis-web/', 
  
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
```
