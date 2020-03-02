import Vue from 'vue'
import App from './App.vue'
import {store} from './store';

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fas',
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
