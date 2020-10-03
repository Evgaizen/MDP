import { shallowMount, createLocalVue } from '@vue/test-utils'
import scan from '../pages/scan.vue'
import Vuex from 'vuex'
import fileModule from '../store/modules/file/index'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('scan.vue', () => {
    let actions
    let state
    let store

    beforeEach(() => {
        actions = {
          getAllFiles: jest.fn(),
          addClearFile: () => {
              state.files.push({isInfected: false})
          },
          addVirusFile: () => {
            state.files.push({isInfected: true})
          },
          processUpload: () => {
              state.uploadPercent = 50
          },
          processScaning: () => {
              state.uploadPercent = 100
          }
        }
        state = {
            files: [],
            uploadPercent: null
        }
        store = new Vuex.Store({
          mutations: fileModule.mutations,
          actions,
          state,
          getters: fileModule.getters
        })
    })

  it('Files not recived', () => {
    const wrapper = shallowMount(scan, {store, localVue })

    const wrapperData = wrapper.vm

    
    expect(wrapperData.getFileState).toBe('В ожидании данных')
    expect(wrapperData.getIndeterminate).toBe(false)
    expect(wrapperData.getColorState).toBe('success')
    
  })

  it('File has been clear', () => {
    const wrapper = shallowMount(scan, {store, localVue })
    actions.addClearFile()
    const wrapperData = wrapper.vm

    
    expect(wrapperData.getFileState).toBe('Файл чист')
    expect(wrapperData.getIndeterminate).toBe(false)
    expect(wrapperData.getColorState).toBe('success')
    
  })

  it('File has been infected', () => {
    const wrapper = shallowMount(scan, {store, localVue })
    actions.addVirusFile()
    const wrapperData = wrapper.vm

    
    expect(wrapperData.getFileState).toBe('В файле вирусы')
    expect(wrapperData.getIndeterminate).toBe(false)
    expect(wrapperData.getColorState).toBe('error')
    
  })

  it('File in proccess uploading', () => {
    const wrapper = shallowMount(scan, {store, localVue })
    actions.processUpload()
    const wrapperData = wrapper.vm

    
    expect(wrapperData.getFileState).toBe(state.uploadPercent)
    expect(wrapperData.getIndeterminate).toBe(false)
    expect(wrapperData.getColorState).toBe('warning')
    
  })

  it('File in proccess scaning', () => {
    const wrapper = shallowMount(scan, {store, localVue })
    actions.processScaning()
    const wrapperData = wrapper.vm

    
    expect(wrapperData.getFileState).toBe('Проверка...')
    expect(wrapperData.getIndeterminate).toBe(true)
    expect(wrapperData.getColorState).toBe('warning')
    
  })
})