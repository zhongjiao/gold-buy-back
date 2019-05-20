const global = {
  namespaced: true,
  state: {
    keepAliveComponents: [], // 缓存组件数组
    isWeakNet: false // 弱网
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
    },
    // 弱网显示隐藏控制
    setWeakNet(state, bool) {
      state.isWeakNet = bool
    }
  },

  actions: {}
}

export default global
