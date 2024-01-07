import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'

import NavigationDesktop from '~/components/navigation/NavigationDesktop.vue'
import NavigationMobile from '~/components/navigation/NavigationMobile.vue'

describe('Navigation', () => {
  const navigation = useAppConfig().app.navigation
  const { $i18n: { t } } = useNuxtApp()

  describe('Desktop', () => {
    it('should render links with translations', async () => {
      await renderSuspended(NavigationDesktop)
      for (const link of navigation.desktop) {
        await screen.getByRole('link', { name: t(link.title) })
      }
    })

    it('should have many links', async () => {
      await renderSuspended(NavigationDesktop)
      const links = await screen.getAllByRole('link')
      expect(links.length).toEqual(navigation.desktop.length)
    })
  })

  describe('Mobile', () => {
    it('should render links with translations', async () => {
      await renderSuspended(NavigationMobile)
      for (const link of navigation.mobile) {
        await screen.getByRole('link', { name: t(link.title) })
      }
    })

    it('should have many links', async () => {
      await renderSuspended(NavigationMobile)
      const links = await screen.getAllByRole('link')
      expect(links.length).toEqual(navigation.mobile.length)
    })
  })
})
