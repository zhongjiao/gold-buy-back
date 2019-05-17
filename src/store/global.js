const global = {
  namespaced: true,
  state: {
    keepAliveComponents: [] // 缓存组件数组
  },

  getters: {},

  mutations: {
    // 注册需要缓存的组件
    keepAlive(state, component) {
      // 注：防止重复添加（当然也可以使用Set）
      !state.keepAliveComponents.includes(component) &&
        state.keepAliveComponents.push(component)
    },
    // 移除需要缓存的组件
    noKeepAlive(state, component) {
      const index = state.keepAliveComponents.indexOf(component)
      index !== -1 && state.keepAliveComponents.splice(index, 1)
    }
  },

  actions: {}
}

export default global
