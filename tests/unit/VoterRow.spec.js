import VoterRow from '@/components/VoterRow'
import TagPill from '@/components/TagPill'
import { mount } from '@vue/test-utils'

describe('VoterRow.vue', () => {
  test('Should display voter name', () => {
    const mockVoter = {
      name: 'Danny',
      tags: [],
    }
    const wrapper = mount(VoterRow, {
      props: {
        voter: mockVoter,
      },
    })
    const nameText = wrapper.find('[data-testId="voter-name"]').text()
    expect(nameText).toBe('Danny')
  })

  test('Should have correct number of tags', () => {
    const mockVoter = {
      name: 'Danny',
      tags: [
        { name: 'Puppies', pro: true },
        { name: 'Cats', pro: false },
        { name: 'Aligators', pro: true },
        { name: 'Spiders', pro: false },
        { name: 'Snakes', pro: false },
      ],
    }
    const wrapper = mount(VoterRow, {
      props: {
        voter: mockVoter,
      },
    })
    const tags = wrapper.findAllComponents(TagPill)
    expect(tags.length).toBe(5)
  })

  test('Should order tags correctly', () => {
    const mockVoter = {
      name: 'Danny',
      tags: [
        { name: 'Puppies', pro: true },
        { name: 'Cats', pro: false },
        { name: 'Aligators', pro: true },
        { name: 'Spiders', pro: false },
        { name: 'Snakes', pro: false },
      ],
    }
    const wrapper = mount(VoterRow, {
      props: {
        voter: mockVoter,
      },
    })
    const tags = wrapper.findAllComponents(TagPill)
    const tagProps = tags.map((wrap) => wrap.props())
    expect(tagProps).toMatchObject([
      { text: 'Aligators', pro: true },
      { text: 'Puppies', pro: true },
      { text: 'Cats', pro: false },
      { text: 'Snakes', pro: false },
      { text: 'Spiders', pro: false },
    ])
  })
})
