import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
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