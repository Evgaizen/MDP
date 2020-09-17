import Vue from 'vue'
import App from './App.vue'
//Plugins
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

import Home from './pages/home.vue'
import Scan from './pages/scan.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'scan',
    path: '/scan',
    component: Scan
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  vuetify,
  router,
  render: h => h(App)
  }).$mount('#app');
