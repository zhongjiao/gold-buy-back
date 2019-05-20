import Vue from 'vue'
import App from '../App.vue'
import router from './router/router'
import store from '@/store/store'
import _C from '@c/globalComp.js'

import 'weui'
import '@a/style/fn.less'

require('@a/js/rem.js')

Vue.config.productionTip = false
Vue.use(_C)

const attachFastClick = require('fastclick')
attachFastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
