const storage = {
  // 设置本地存储的值
  set(key, val) {
    if (window.localStorage) {
      return window.localStorage.setItem(key, val)
    } else {
      console.log('浏览器不支持localStorage')
    }
  },
  // 获取本地存储的值
  get(key) {
    return window.localStorage.getItem(key)
  },
  // 清除本地存储的值
  remove(key) {
    if (window.localStorage) {
      window.localStorage.removeItem(key)
    } else {
      console.log('浏览器不支持localStorage')
    }
  },
  // 获取本地存储的所有键
  getKeys() {
    if (window.localStorage) {
      var locArry = []
      console.log(localStorage.length)
      for (var i = 0; i < window.localStorage.length; i++) {
        locArry.push(window.localStorage.key(i))
      }
      return locArry
    } else {
      console.log('浏览器不支持localStorage')
    }
  },
  // 清除所有存储值
  clear() {
    if (window.localStorage) {
      window.localStorage.clear()
    } else {
      console.log('浏览器不支持localStorage')
    }
  }
}

export default storage
