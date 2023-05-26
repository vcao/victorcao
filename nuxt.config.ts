// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare_pages",
  },
  ssr: false,
  css: ["@/assets/css/styles.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
