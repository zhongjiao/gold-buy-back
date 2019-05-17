// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'weui'
import '@a/style/common.less'
import '@a/style/font/iconfont.css'

require('@a/js/rem.js')

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  render: h => h(App)
}).$mount('#app')
