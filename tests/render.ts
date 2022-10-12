import { render as tlrender } from '@testing-library/vue'

const NuxtLinkStub = {
  name: 'NuxtLinkStub',
  template: '<router-link :to="to"><slot></slot></router-link>',
  props: ['to']
}

export function render (component, options?) {
  return tlrender(component, {
    props: options?.props,
    slots: options?.slots,
    global: {
      plugins: [
        ...options?.plugins || []
      ],
      stubs: {
        ...options?.stubs || [],
        NuxtLink: NuxtLinkStub
      }
    }
  })
}
