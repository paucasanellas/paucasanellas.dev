import { googleFonts } from './config/modules'

export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts,
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  css: [
    '@/assets/styles/main.scss'
  ]
})
