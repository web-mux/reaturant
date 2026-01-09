import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://695a18c86c326.clouduz.ru",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
