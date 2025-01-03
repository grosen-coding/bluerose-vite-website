import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// Vite Configuration
export default defineConfig({
  plugins: [
    react(), // Enables React Fast Refresh
    svgr(), // Allows importing SVGs as React components
  ],
  server: {
    open: true, // Automatically opens the browser during development
  },
});
