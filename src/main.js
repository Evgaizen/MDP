import Vue from 'vue'
import App from './App.vue'
//Plugins
import vuetify from './plugins/vuetify'
import {router} from './plugins/router'



new Vue({
  vuetify,
  router,
  render: h => h(App)
  }).$mount('#app');
