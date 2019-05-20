import axios from 'axios'
// import Vue from 'vue'
import Cookie from '@/utils/cookie'
import store from './store/store'
// import router from '../router'

// 请求列表
// const requestList = []
// 取消列表
// const CancelToken = axios.CancelToken

// let sources = {}
const showLoading = null

const service = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    showLoading: true // 是否显示 loading 圈
  }
})

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
// const toLogin = () => {
//   router.replace({
//     path: '/login',
//     query: {
//       redirect: router.currentRoute.fullPath
//     }
//   });
// }

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//  axios.defaults.baseURL = 'http://192.168.43.242:8080/ntw/';
// } else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

service.interceptors.request.use(
  config => {
    if (config.headers.showLoading) {
      // Vue.$nt.toast.show({
      //   text: '加载中',
      //   type: 'loading'
      // })
    }

    showLoading.show = config.headers.showLoading

    if (config.url.indexOf('user/login') < 0 && Cookie.get('token')) {
      config.headers.token = Cookie.get('token')
    }

    // const token = store.getters.userInfo.token
    // if (token) {
    //   config.headers.token = token
    // }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function(response) {
    // if (showLoading.show) Vue.$nt.toast.hide()

    if (response.data.code !== 200) {
      store.commit('global/setWeakNet', true)
      // Vue.$nt.failToast(response.data)
    }
    store.getters['global/getIsWeakNet'] &&
      store.commit('global/setWeakNet', false)

    // if (response && response.config.url.indexOf('user/login') > -1) {
    //   Cookie.set('token', response.data.data.token)
    // }
    return response
  },
  function(error) {
    if (axios.isCancel(error)) {
      // requestList.length = 0
      // store.dispatch('changeGlobalState', { loading: false })

      throw new service.Cancel('cancel request')
    } else {
      // let errorMsg = {}

      store.commit('global/setWeakNet', true)

      // if (
      //   error.code === 'ECONNABORTED' &&
      //   error.message.indexOf('timeout') !== -1
      // ) {
      //   errorMsg = { msg: '请求超时' }
      // } else if (error.message == 'Network Error') {
      //   errorMsg = { msg: '请检查网络' }
      // } else {
      //   errorMsg = error.response.data
      // }
      // Vue.$nt.failToast(errorMsg)
    }

    return Promise.reject(error)
  }
)

export default service
