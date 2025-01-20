// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  css: ['~/styles/main.css'],
  app: {
    head: {
      title: 'Your Site Name',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  image: {
    // Nuxt Image module config
    dir: 'public'
  },
  compatibilityDate: '2025-01-19',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
})
