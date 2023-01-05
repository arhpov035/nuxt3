export default {
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
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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
        //   src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
        //   body: true
        // },
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
  css: ["@/assets/css/main.css"],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/eslint-module"],

  modules: [
    // [`@twicpics/components/nuxt3`],
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      "@nuxtjs/axios",
      "@nuxtjs/proxy",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  axios: {
    baseURL: "http://api.nuxt.local/api",
    credentials: true,
    common: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
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
};
