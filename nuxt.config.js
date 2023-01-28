import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  generate: { fallback: true },
  app: {
    head: {
      title: "Торты 🎂 и капкейки на заказ в Тамбове",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Торты 🎂 и капкейки на заказ в Тамбове по цене 1800 р. за кг.",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://tortam.ru/favicon.ico",
        },
        { rel: "stylesheet", type: "text/css", href: "/css/main.css" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/tailwind.all.min.css",
        },
        { rel: "stylesheet", type: "text/css", href: "/css/output.css" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
          integrity:
            "sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "/js/jquery.js",
        },
        {
          src: "/js/inputmask.js",
        },
        {
          src: "/js/jquery.maskedinput.js",
        },
        // {
        //   src: "/js/datepicker-ru.js",
        //   body: true,
        // },
        {
          src: "/js/tailwind.js",
          body: true,
        },
        {
          src: "/js/i-mask.js",
          body: true,
        },
        {
          src: "/js/main.js",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["stores"],
  },
  css: [
    // "@/assets/css/main.css",
    // "@/assets/css/output.css"
  ],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/eslint-module"],

  modules: [
    [
      "@pinia/nuxt",
      '@nuxtjs/tailwindcss',
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    // '@nuxtjs/robots',
    "nuxt-simple-sitemap",
  ],
  robots: {
    /* module options */
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        // any URLs that can't be discovered by crawler
        // '/my-hidden-url'
      ],
    },
  },
  // Recommended
  runtimeConfig: {
    siteUrl: "https://tortam.ru",
  },
  // OR
  sitemap: {
    hostname: "https://tortam.ru",
  },

  build: {
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          // enforce : 'pre',
          // test    : /\.(js|vue)$/,
          loader: "eslint-loader",
          // exclude : /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
});
