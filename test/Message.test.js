import { mount } from '@vue/test-utils'
import MessageList from '../src/components/MessageList'
import Message from '../src/components/Message'

describe('Message.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(Message, {})
  })

  const createCmp = propsData => mount(Message, { propsData })

  describe('Validation', () => {
    const message = createCmp().vm.$options.props.message

    it('message is of type string', () => {
      expect(message.type).toBe(String)
    })

    it('message is required', () => {
      expect(message.required).toBeTruthy()
    })

    it('message has at least length 2', () => {
      expect(message.validator && message.validator('a')).toBeFalsy()
      expect(message.validator && message.validator('aa')).toBeTruthy()
    })
  })

  describe('Events', () => {
    beforeEach(() => {
      cmp = createCmp({ message: 'Cat' })
    })

    it('вызывает handleClick при нажатии на сообщение', () => {
      const stub = jest.fn();
      cmp.setMethods({ handleClick: stub });

      const el = cmp.find(".message").trigger("click");
      expect(stub).toBeCalled()
    })

    it("triggers a message-clicked event when a handleClick method is called", () => {
      const stub = jest.fn();
      cmp.vm.$on("message-clicked", stub);
      cmp.vm.handleClick();

      expect(stub).toBeCalledWith("Cat");
    })
  })

  // it("Calls handleMessageClick when @message-click happens", () => {
  //   const stub = jest.fn();
  //   cmp.setMethods({ handleMessageClick: stub });
  //
  //   const el = cmp.find(Message).vm.$emit("message-clicked", "cat");
  //   expect(stub).toBeCalledWith("cat");
  // })


  it("has a message property", () => {
    cmp = createCmp({ message: "hey" });
    expect(cmp.props().message).toBe("hey");
  })

  it("has no cat property", () => {
    cmp = createCmp({ cat: "hey" });
    expect(cmp.attributes().cat).toBe("hey");
  })

  it("message is of type string", () => {
    let spy = jest.spyOn(console, "error");
    cmp = createCmp({ message: 1 });
    expect(spy).toBeCalledWith(
      expect.stringContaining("[Vue warn]: Invalid prop")
    );

    spy.mockReset(); // or mockRestore() to completely remove the mock
  })

  it("Paco is the default author", () => {
    cmp = createCmp({ message: "hey" });
    expect(cmp.props().author).toBe("Paco");
  })

  it("has no cat property", () => {
    cmp = createCmp({ cat: "hey" });
    expect(cmp.props().cat).toBeUndefined();
  })

  it('имеет ожидаемую структуру html', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  it('Message has a class attribute set to "message"', () => {
    expect(cmp.find(Message).attributes().class).toBe("message");
  });

  it('is a Message component', () => {
    expect(cmp.findComponent(Message)).toBeTruthy()

    // Or with CSS selector
    expect(cmp.find('li')).toBeTruthy()
  })

  it("Message component has the .message class", () => {
    expect(cmp.find(Message).classes()).toContain("message");
  });

  it("Message component has style padding-top: 10", () => {
    expect(cmp.find(Message).attributes().style).toBe("padding-top: 10px;");
  });


})

