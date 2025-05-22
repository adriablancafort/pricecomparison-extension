import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      svelte({
        compilerOptions: {
          css: mode === 'development' ? 'injected' : undefined,
        },
      }),
    ],
    server: {
      cors: true,
    },
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
  };
});