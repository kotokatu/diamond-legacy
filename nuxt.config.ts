// https://nuxt.com/docs/api/configuration/nuxt-config
import { visualizer } from "rollup-plugin-visualizer";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  typescript: { strict: false },
  vite: {
    build: {
      rollupOptions: {
        plugins: [
          visualizer({ open: true }), // Открывает анализатор после production-сборки
        ],
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          silenceDeprecations: ["import"],
        },
        scss: {
          silenceDeprecations: ["import"],
        },
      },
    },
  },
  $production: {
    nitro: {
      esbuild: {
        options: {
          drop: ["console"],
        },
      },
    },
    vite: {
      esbuild: {
        legalComments: "none",
        drop: ["console"],
      },
    },
  },
  css: ["~/assets/css/reset.css", "~/assets/css/main.scss"],
  modules: [
    "@nuxt/eslint",
    "nuxt-quasar-ui",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "nuxt-svgo",
    "@nuxt/image",
  ],
  quasar: {
    sassVariables: "~/assets/css/quasar-variables.scss",
    extras: {
      font: null,
    },
  },
  image: {
    format: ["webp", "avif"],
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
    buildAssetsDir: "_assets",
    head: {
      htmlAttrs: {
        lang: 'ru',
      },      
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      script: [
        { 
          src: '/js/yandex_metrics.js',
          tagPosition: 'bodyClose', // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
          async: true
        },
      ],
      noscript: [
        { 
          innerHTML: '<div><img src="https://mc.yandex.ru/watch/104765634" style="position:absolute; left:-9999px;" alt="" /></div>',
          tagPosition: 'head', // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
        },
      ],
    },
  },
});
