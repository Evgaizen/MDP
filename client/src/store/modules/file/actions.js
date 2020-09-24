import axios from 'axios'

const apiPath = 'http://localhost:4000/api'

export default {
    async getAllFiles({ commit }) {
        await axios.get(apiPath+'/files').then(res => {
            commit('setFiles', res.data)
        }).catch(err => {
            console.error(err)
        })
    },
    async uploadFile({ commit }, payload) {
        const formData = new FormData()
        await formData.append('file', payload)
        await axios.post(apiPath+'/files/upload', formData, {
            onUploadProgress: function(e) {
                commit('setUploadPercent', parseInt(Math.round(( (e.loaded / e.total) * 100 ))))
            }
        }).then(res => {
            commit('addFile', res.data)
            commit('clearUploadPercent')
        }).catch(err => {
            console.log(err)
        })
    }
}
