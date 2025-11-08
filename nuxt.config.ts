// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: { strict: false },
  css: ["~/assets/css/normalize.css", "~/assets/css/reset.css", "quasar/css", "~/assets/css/main.scss"],
  modules: ["@nuxt/eslint", "nuxt-quasar-ui", "@vueuse/nuxt", "@nuxt/fonts", "nuxt-svgo", "@nuxt/image"],
  quasar: {
    sassVariables: "~/assets/css/quasar-variables.scss",
    extras: {
      font: null,
    },
  },
  image: {
    format: ["webp"],
    screens: {
      xs: 359,
      sm: 767,
      md: 1023,
      lg: 1279,
      xl: 1535,
      xxl: 1535,
      "2xl": 1535,
    },
  },
  app: {
    head: {
      link: [
        //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ]
    }
  },
});

  /*
  {
    src: 'https://www.googletagmanager.com/gtag/js?id=G-YQNXXY3EBS',
    tagPosition: 'head',
  },
  {
    innerHTML:'window.dataLayer = window.dataLayer || [];'+
              'function gtag(){dataLayer.push(arguments);}'+
              'gtag(\'js\', new Date());'+
              'gtag(\'config\', \'G-YQNXXY3EBS\');',
    tagPosition: 'head',
  }
  */

  /*
  gtag('consent', 'default', {'analytics_storage': 'denied'});
  */

  