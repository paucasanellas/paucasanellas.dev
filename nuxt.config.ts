// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/content',
    'dayjs-nuxt',
    '@nuxt/image'
  ],
  dayjs: {
    locales: ['es', 'en']
  },
  googleFonts: {
    families: {
      Montserrat: [300, 400, 700]
    }
  },
  i18n: {
    locales: [
      {
        code: 'es',
        file: 'es-ES.json',
        name: 'Español'
      },
      {
        code: 'en',
        file: 'en-EN.json',
        name: 'English'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'es'
  },
  tailwindcss: {
    viewer: false
  },
  ui: {
    global: true
  }
})
