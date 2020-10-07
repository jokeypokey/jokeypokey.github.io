import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import './assets/scss/main.scss';
import VueRouter from 'vue-router'

import Home from "./Home";
import Csgo from "./Csgo"
import Art from "./Art"

Vue.use(VueRouter)
Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

const routes= [
  { path: '*', redirect: 'home' },
  {path: '/home', component: Home},
  {path: '/csgo', component: Csgo},
  {path: '/art', component: Art},
  // {path: '/projects', component: Projects}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)

})

