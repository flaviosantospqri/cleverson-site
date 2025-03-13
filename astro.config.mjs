// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: netlify(),
});
