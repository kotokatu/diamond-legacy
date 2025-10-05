// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: { strict: false },
  // app: {
  //   pageTransition: { name: "page", mode: "in-out" },
  // },
  css: ["~/assets/css/normalize.css", "~/assets/css/reset.css", "quasar/css", "~/assets/css/main.scss"],
  modules: ["@nuxt/eslint", "nuxt-quasar-ui", "@vueuse/nuxt", "@nuxt/fonts", "nuxt-svgo", "@nuxt/image"],
  quasar: {
    sassVariables: "~/assets/css/quasar-variables.scss",
    extras: {
      font: null,
    },
  },
});
