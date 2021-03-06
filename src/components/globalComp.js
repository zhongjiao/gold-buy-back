import NTHeader from './nt-header.vue'
import NtWeaknetPage from './nt-weak-net-page.vue'

const components = {
  NTHeader,
  NtWeaknetPage
}

const install = function(Vue, opt = {}) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const _C = {
  install
}

export default _C
