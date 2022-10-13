import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'

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
})
