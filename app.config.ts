import { desktopNavigation, mobileNavigation } from '@/config/navigation'

export default defineAppConfig({
  app: {
    name: 'Pau Casanellas',
    navigation: {
      desktop: desktopNavigation,
      mobile: mobileNavigation
    }
  },
  ui: {
    primary: 'indigo'
  }
})
