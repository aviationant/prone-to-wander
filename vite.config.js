import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            '@strapi/design-system': '/node_modules/@strapi/design-system',
            '@strapi/icons': '/node_modules/@strapi/icons',
        },
    },
    server: {
        host: true
    },
});
