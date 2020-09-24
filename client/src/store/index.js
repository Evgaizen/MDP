import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import file from './modules/file/index'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        file
    }
})