// https://nuxt.com/docs/api/configuration/nuxt-config
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // @ts-ignore
  css: [
    'vuetify/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})