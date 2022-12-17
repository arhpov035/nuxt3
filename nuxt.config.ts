
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
