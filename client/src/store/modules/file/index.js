import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => ({
    files: [],
    uploadPercent: null
})

export default {
    state,
    actions,
    mutations,
    getters
}