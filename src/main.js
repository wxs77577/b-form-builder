import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'

import BFormBuilder from './components/FormBuilder'

Vue.use(BootstrapVue)
Vue.component('b-form-builder', BFormBuilder)

new Vue({
  render: h => h(App),
}).$mount('#app')
