import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://graysmobilemechanics.com",
  integrations: [sitemap()],
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
