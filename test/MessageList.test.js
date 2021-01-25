import { mount } from '@vue/test-utils'
import MessageList from '../src/components/MessageList'
import Message from '../src/components/Message'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(MessageList, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('получил ["Cat"] как свойство сообщения', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('имеет ожидаемую структуру html', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  it('is a MessageList component', () => {
    expect(cmp.findComponent(MessageList)).toBeTruthy()

    // Or with CSS selector
    expect(cmp.find('ul')).toBeTruthy()
  })

  it('contains a Message component', () => {
    expect(cmp.findComponent(Message)).toBeTruthy()

    // Or with CSS selector
    expect(cmp.find('.message')).toBeTruthy()
  })

  // Vue instance

  it('Message has a "message" property equals to "Cat"', () => {
    expect(cmp.findComponent(Message).props().message).toBe('Cat')
  })

  // Structure
  it('Message element exists', () => {
    expect(cmp.find('.message').exists()).toBeTruthy()
  })

  // it('Message is not empty', () => {
  //   expect(cmp.findComponent(Message).isEmpty()).toBeFalsy()
  // })

  it('Message has a class attribute set to "message"', () => {
    expect(cmp.findComponent(Message).attributes().class).toBe('message')
  })

  // Style
  it('Message component has the .message class', () => {
    expect(cmp.findComponent(Message).classes()).toContain('message')
  })

  it('Message component has style padding-top: 10', () => {
    expect(cmp.findComponent(Message).attributes().style).toBe('padding-top: 10px;')
  })

  // it('Calls handleMessageClick when @message-click happens', () => {
  //   const stub = jest.fn()
  //   cmp.setMethods({ handleMessageClick: stub })
  //   const el = cmp.find('.message').vm.$emit('message-clicked', 'Cat')
  //
  //   expect(stub).toBeCalledWith('Cat')
  // })
})
