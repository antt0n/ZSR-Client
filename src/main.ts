import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false

Vue.use(ToggleButton)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')