import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: '/v2/', // Ini yang paling penting untuk deploy di subfolder
  // server: {
  //   // allowedHosts: ['91ae538a0327.ngrok-free.app'], // Ganti sesuai domain ngrok kamu
  //   allowedHosts : 'all',
  // },

});
