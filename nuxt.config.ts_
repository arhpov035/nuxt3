
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    imports: {
        dirs: ['stores'],
    },
    modules: [
        // ['@nuxtjs/axios',{proxyHeaders:false}],
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
        
        // [`@twicpics/components/nuxt3`],
    ],
    build: {}
})
