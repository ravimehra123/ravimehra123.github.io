import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        svgProps: {
          fill: "currentColor",
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          //extract huge libraries from vender.js
          const hugeLibraries = ["framer-motion"];
          if (
            hugeLibraries.some((libName) =>
              id.includes(`node_modules/${libName}`)
            )
          ) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }

          // creating a chunk to @open-ish deps. Reducing the vendor chunk size
          if (id.includes("@open-ish") || id.includes("tslib")) {
            return "@open-ish";
          }

          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (
            id.includes("react-router-dom") ||
            id.includes("@remix-run") ||
            id.includes("react-router")
          ) {
            return "@react-router";
          }
        },
      },
    },
  },
});
