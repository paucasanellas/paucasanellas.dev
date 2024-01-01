// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-EN.json'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en'
  },
  tailwindcss: {
    viewer: false
  },
  ui: {
    global: true
  }
})
