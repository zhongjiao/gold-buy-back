import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
import store from '@/store/store'

Vue.use(Router)

Router.prototype.goBack = function(backCount) {
  this.isBack = true
  if (backCount) {
    this.go(backCount)
  } else {
    this.back()
  }
}

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'transferIndex',
      meta: {
        keepAlive: true
      },
      component: index
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.keepAlive) {
    store.commit('global/keepAlive', to.name)
  }
  next()
})

export default router
