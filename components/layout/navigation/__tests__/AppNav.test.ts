import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { render } from '@/tests/render'

import AppNavComponent from '@/components/layout/navigation/AppNav.vue'

let component

describe('NavbarDefault Component', () => {
  beforeEach(() => {
    component = render(AppNavComponent)
  })

  it('should render component correctly', () => {
    expect(component).toBeTruthy()
  })

  it('should render brand link', () => {
    const brand = component.getByRole('link', { name: 'Pau Casanellas' })
    expect(brand).toBeInTheDocument()
  })
})
