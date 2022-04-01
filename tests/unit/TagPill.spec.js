import TagPill from '@/components/TagPill.vue'
import { mount } from '@vue/test-utils'

describe('TagPill.vue', () => {
  it('Displays Text', () => {
    const wrapper = mount(TagPill, {
      props: {
        text: 'Hi There',
      },
    })
    const html = wrapper.html()
    expect(html).toBe('<span class="tag">Hi There</span>')
  })

  it('Should have "pro" class if pro is passed in as prop', () => {
    const wrapper = mount(TagPill, {
      props: {
        text: 'Hello',
        pro: true,
      },
    })
    const html = wrapper.html()
    expect(html).toBe('<span class="tag pro">Hello</span>')
  })
})
