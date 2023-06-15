import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { reactScopedCssPlugin } from "rollup-plugin-react-scoped-css"

export default defineConfig({
  plugins: [react(), reactScopedCssPlugin()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/style/flex-mixin.scss';",
      },
    },
  },
})
