export default {
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ["stores"],
  },
  head: {
    title: "nuxt.local",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["@/assets/css/main.css"],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/eslint-module"],

  modules: [
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
