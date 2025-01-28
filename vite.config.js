import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  build: {
    rollupOptions: {
      input: "src/main.js",
      output: {
        entryFileNames: "script.js",
        assetFileNames: "styles.css",
      },
    },
    cssCodeSplit: false,
  },
});