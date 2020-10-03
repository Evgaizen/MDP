import { shallowMount } from '@vue/test-utils'
import Drawer from '../components/Drawer.vue'

describe('Drawer.vue', () => {
  it('Expanded drawer', () => {
    const wrapper = shallowMount(Drawer)
    const dataWrapper = wrapper.vm.$data

    expect(dataWrapper.drawer).toEqual(true)
    
    wrapper.find('v-app-bar-nav-icon').trigger('click')

    expect(dataWrapper.drawer).toEqual(false)
  })
})