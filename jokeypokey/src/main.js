import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'



new Vue({
  el: '#app',
  render: h => h(App)

})

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})