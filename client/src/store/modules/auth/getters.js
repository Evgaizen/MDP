export default {
  loggedIn: (state) => !!state.token,
  getUsername: (state) => state.username,
};
