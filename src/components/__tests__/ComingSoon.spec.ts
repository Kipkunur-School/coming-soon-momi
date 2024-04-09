import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ComingSoon from '@/components/ComingSoon.vue'

describe('ComingSoon', () => {
  it('renders properly', () => {
    const wrapper = mount(ComingSoon)
    const h1= wrapper.find('h1')
    expect(h1.text()).toBe('WE\'RE COMING SOON!')
  })
})
