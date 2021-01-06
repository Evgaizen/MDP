export default {
  SET_CREDENTIALS(state, credentials) {
    state.credentials = credentials;
  },
  ADD_CREDENTIAL(state, credential) {
    state.credentials.push(credential);
  },
  REMOVE_CREDENTIAL(state, id) {
    state.credentials = state.credentials.filter((c) => c._id !== id);
  },
  UPDATE_CREDENTIAL(state, credential) {
    state.credentials = state.credentials.map((c) => {
      if (c._id === credential._id) {
        return credential;
      }
      return c;
    });
  },
};
