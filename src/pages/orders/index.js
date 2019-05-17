import Vue from 'vue'
import App from '../App.vue'
import router from './router/router'
import store from '@/store/store'

import 'weui'
import '@a/style/fn.less'

import _C from '@c/globalComp.js'

require('@a/js/rem.js')

Vue.config.productionTip = false
Vue.use(_C)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
