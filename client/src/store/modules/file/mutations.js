export default {
    setFiles(state, payload) {
        state.files = payload
    },
    addFile(state, payload) {
        state.files.push(payload)
    },
    setUploadPercent(state, payload) {
        state.uploadPercent = payload
    },
    clearUploadPercent(state) {
        state.uploadPercent = null
    }
}