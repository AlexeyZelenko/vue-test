import { mount } from '@vue/test-utils'
import ContactBox from '../src/components/ContactBox'

describe('ContactBox.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(ContactBox, {})
  })


  it('имеет ожидаемую структуру html', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  it('is a ContactBox component', () => {
    expect(cmp.findComponent(ContactBox)).toBeTruthy()

    // Or with CSS selector
    expect(cmp.find('div')).toBeTruthy()
  })
})
