import React from 'react'
import { shallow } from 'enzyme'

import KButton from '@/components/KButton'

describe('KButton', () => {
  it('shallow mount', () => {
    const component = shallow(<KButton />)
    expect(component).toBeTruthy()
  })
})
