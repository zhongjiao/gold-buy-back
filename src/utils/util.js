export function addClass(el, cls) {
  if (!el.classList) {
    let className = el.className
    if (className.indexOf(cls) > -1) return
    el.className = className === '' ? cls : className.replace(/\s?$/, ' ' + cls)
  } else {
    el.classList.add(cls)
  }
}

export function removeClass(el, cls) {
  if (!el.classList) {
    let className = el.className
    if (className.indexOf(cls) < 0) return
    el.className = className
      .replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ')
      .replace(/^\s+|\s+$/g, '')
  } else {
    el.classList.remove(cls)
  }
}

export function hasClass(el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.')
  }
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

export function typeOf(obj) {
  let toString = Object.prototype.toString
  let typeMap = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return typeMap[toString.call(obj)]
}

export function deepCopy(origin) {
  let o
  const t = typeOf(origin)
  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return origin
  }

  if (t === 'array') {
    for (let index = 0; index < origin.length; index++) {
      o.push(deepCopy(origin[index]))
    }
  } else if (t === 'object') {
    for (const key in origin) {
      o[key] = deepCopy(origin[key])
    }
  }

  return o
}

export function formatDate(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) {
    return ''
  }
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'))
  }
  if (typeof date === 'number') {
    date = new Date(date)
  }
  var o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  var week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d'
  }
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? '\u661f\u671f'
          : '\u5468'
        : '') + week[date.getDay() + '']
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}
