import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import { fireEvent } from '@testing-library/vue'

import { render } from '@/tests/render'
import { router } from '@/tests/router'

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

  it('should render brand link', () => {
    const brand = component.getByRole('link', { name: 'Pau Casanellas' })
    expect(brand).toBeInTheDocument()
  })

  it('should navigate to home page when click brand link', async () => {
    const brand = component.getByRole('link', { name: 'Pau Casanellas' })

    await fireEvent.click(brand)
    expect(brand).toHaveAttribute('aria-current', 'page')
    expect(brand).toHaveAttribute('href', '/')
  })
})
