import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/vue'
import { waitFor } from '@testing-library/dom'

import { createPinia } from 'pinia'
import { render } from '@/tests/render'
import { router, routes } from '@/tests/router'

import AppAsideComponent from '@/components/layout/aside/AppAside.vue'
import { useAppAsideStore } from '@/stores/appAside'

let component, store

describe('AppAside Component', () => {
  beforeEach(async () => {
    component = render(AppAsideComponent, {
      plugins: [router, createPinia()]
    })

    store = useAppAsideStore()
    store.toggleMenu()
    await router.isReady()
  })

  it('should render component correctly', () => {
    expect(component).toBeTruthy()
  })

  it('should render navigation links', () => {
    for (const route of routes) {
      const link = component.getByRole('link', { name: route.title })
      expect(link).toBeInTheDocument()
    }
  })

  it('should navigate between all links', async () => {
    for (const route of routes) {
      const link = component.getByRole('link', { name: route.title })
      await fireEvent.click(link)

      await waitFor(() => {
        expect(link).toHaveAttribute('href', route.path)
        expect(link).toHaveAttribute('aria-current', 'page')
      })
    }
  })

  it('should be open when click toggle', () => {
    const aside = component.getByRole('complementary', { class: /AppAside/i })
    expect(aside).toHaveAttribute('aria-hidden', 'false')
  })
})
