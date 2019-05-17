;(function() {
  var isPhone = !!window.navigator.userAgent.match(
    /\(i[^;]+;( U;)? CPU.+Mac OS X/
  )
  const deviceW = window.screen.width
  const deviceH = window.screen.height
  const deviceDpr = window.devicePixelRatio
  if (isPhone) {
    if (window.corNative || window.corWidget) {
      if (
        (deviceW === 375 &&
          deviceH === 812 &&
          (deviceDpr === 3 || deviceDpr === 2)) ||
        (deviceW === 414 &&
          deviceH === 896 &&
          (deviceDpr === 3 || deviceDpr === 2))
      ) {
        document.getElementsByTagName('body')[0].className += ' uh_iosx'
      } else {
        document.getElementsByTagName('body')[0].className += ' uh_ios7'
      }
    }
  }
  var screenW =
    document.documentElement.clientWidth || document.body.clientWidth
  var hDom = document.getElementsByTagName('html')[0]
  if (screenW > 640) screenW = 640
  hDom.style.fontSize = screenW / 18.75 + 'px'
})()
