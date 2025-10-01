// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: { strict: false },
  app: {
    pageTransition: { name: "page", mode: "in-out" },
  },
  css: ["~/assets/css/normalize.css", "~/assets/css/reset.css", "quasar/css", "~/assets/css/main.scss"],
  modules: ["@nuxt/eslint", "nuxt-quasar-ui", "@vueuse/nuxt", "@nuxt/fonts", "nuxt-svgo"],
  quasar: {
    // string[]: https://quasar.dev/quasar-plugins
    plugins: [],
    // boolean | string: Truthy values requires `sass@1.32.12`, same behaviour as `@quasar/vite-plugin`
    sassVariables: true,
    // Requires `@quasar/extras` package
    extras: {
      // string | null: Auto-import roboto font. https://quasar.dev/style/typography#default-font
      font: null,
      // string[]: Auto-import webfont icons. Usage: https://quasar.dev/vue-components/icon#webfont-usage
      fontIcons: [],
      // string[]: Auto-import svg icon collections. Usage: https://quasar.dev/vue-components/icon#svg-usage
      svgIcons: [],
      // string[]: Auto-import animations from 'animate.css'. Usage: https://quasar.dev/options/animations#usage
      animations: [],
    },
  },
});
