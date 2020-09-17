import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

// Pages
import Home from '../pages/home.vue'
import Scan from '../pages/scan.vue'

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

export const router = new VueRouter({ mode: 'history', routes: routes });