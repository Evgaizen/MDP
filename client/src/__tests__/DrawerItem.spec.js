import { shallowMount } from '@vue/test-utils'
import DrawerItem from '../components/DrawerItem.vue'

describe('DrawerItem.vue', () => {
  it('Props:', () => {
    const pageLink = {
        icon: "mdi-skull-scan",
        title: "Сканирование файла",
        link: "/scan",
    }
    const wrapper = shallowMount(DrawerItem, {
        propsData: {
            pageLink
        }
    })

    

    expect(wrapper.text()).toContain(pageLink.title)
    expect(wrapper.text()).toContain(pageLink.icon)
    expect(wrapper.find('v-list-item').attributes('to')).toContain(pageLink.link)

  })
})