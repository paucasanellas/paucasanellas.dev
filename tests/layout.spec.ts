import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'

import App from '~/app.vue'

describe.skip('Layout', () => {
  it('should render logo', async () => {
    await renderSuspended(App, { route: '/' })
    await screen.getByRole('link', { name: 'Pau Casanellas' })
  })

  it('should have banner section', async () => {
    await renderSuspended(App, { route: '/' })
    await screen.getByRole('banner')
  })

  it('should have contentinfo section', async () => {
    await renderSuspended(App, { route: '/' })
    await screen.getByRole('contentinfo')
  })
})
