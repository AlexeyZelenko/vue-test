import { mount } from '@vue/test-utils'
import MessageList from '../src/components/MessageList'
import Message from '../src/components/Message'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(Message, {})
  })


  it('имеет ожидаемую структуру html', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  it('is a Message component', () => {
    expect(cmp.findComponent(Message)).toBeTruthy()

    // Or with CSS selector
    expect(cmp.find('li')).toBeTruthy()
  })
})
