import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

// Pages
import Home from '../pages/home.vue'
import Scan from '../pages/scan.vue'
import PasswordManager from '../pages/passwordManager.vue'
import IntegrityСontrol from '../pages/integrityСontrol.vue'

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
  },
  {
    name: 'passwordManager',
    path: '/password-manager',
    component: PasswordManager
  },
  {
    name: 'integrityСontrol',
    path: '/integrity-control',
    component: IntegrityСontrol
  },
];

export const router = new VueRouter({ mode: 'history', routes: routes });