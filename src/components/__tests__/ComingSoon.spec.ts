import { describe, it, expect } from 'vitest'

import { shallow } from '@vue/test-utils'
import ComingSoon from '@/components/ComingSoon.vue'

describe('ComingSoon', () => {
  it('renders properly', () => {
    const wrapper = shallow(ComingSoon)
    const h1= wrapper.find('h1')
    expect(h1.text()).toBe('WE\'RE COMING SOON!')
  })
})
