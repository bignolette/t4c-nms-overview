import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/t4c-nms-overview/',  // Remplace "nom-du-depot" par le nom de ton dépôt GitHub
    plugins: [react()]
})