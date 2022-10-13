import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/vue'
import { waitFor } from '@testing-library/dom'

import { render } from '@/tests/render'
import { router, routes } from '@/tests/router'

import AppNavComponent from '@/components/layout/navigation/AppNav.vue'

let component

describe('NavbarDefault Component', () => {
  beforeEach(async () => {
    component = render(AppNavComponent, {
      plugins: [router]
    })
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
      await fireEvent.click(component.getByText(route.title))

      await waitFor(() => {
        const link = component.getByRole('link', { name: route.title })
        expect(link).toHaveAttribute('aria-current', 'page')
        expect(link).toHaveAttribute('href', route.path)
      })
    }
  })

  it('should be open when click toggle', async () => {
    const button = component.getByRole('button', { class: /Toggle/i })
    const aside = component.getByRole('complementary', { class: /AppNav/i })
    await fireEvent.click(button)
    expect(aside).toHaveClass('AppNav--open')
  })
})
