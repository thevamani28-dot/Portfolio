import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // allow external connections
    allowedHosts: ['.ngrok-free.dev'], // allow all ngrok domains

    // 👇 add this block for HMR (hot reload) fix
    hmr: {
      protocol: "wss", // use secure websocket
      host: "unchary-melani-nonmeasurable.ngrok-free.dev", // your ngrok domain
      clientPort: 443, // HTTPS port
    },
  },
}));
