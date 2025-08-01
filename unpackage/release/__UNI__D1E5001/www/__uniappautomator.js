var n
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
  var r = Array(s),
    k = 0
  for (i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]
  return r
}
;(n = function () {
  function e(e) {
    var n = this.constructor
    return this.then(
      function (t) {
        return n.resolve(e()).then(function () {
          return t
        })
      },
      function (t) {
        return n.resolve(e()).then(function () {
          return n.reject(t)
        })
      },
    )
  }
  function n(e) {
    return !(!e || void 0 === e.length)
  }
  function t() {}
  function o(e) {
    if (!(this instanceof o)) throw new TypeError('Promises must be constructed via new')
    if ('function' != typeof e) throw new TypeError('not a function')
    ;(this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      c(e, this)
  }
  function r(e, n) {
    for (; 3 === e._state; ) e = e._value
    0 !== e._state
      ? ((e._handled = !0),
        o._immediateFn(function () {
          var t = 1 === e._state ? n.onFulfilled : n.onRejected
          if (null !== t) {
            var o
            try {
              o = t(e._value)
            } catch (r) {
              return void f(n.promise, r)
            }
            i(n.promise, o)
          } else (1 === e._state ? i : f)(n.promise, e._value)
        }))
      : e._deferreds.push(n)
  }
  function i(e, n) {
    try {
      if (n === e) throw new TypeError('A promise cannot be resolved with itself.')
      if (n && ('object' == typeof n || 'function' == typeof n)) {
        var t = n.then
        if (n instanceof o) return (e._state = 3), (e._value = n), void u(e)
        if ('function' == typeof t)
          return void c(
            (function (e, n) {
              return function () {
                e.apply(n, arguments)
              }
            })(t, n),
            e,
          )
      }
      ;(e._state = 1), (e._value = n), u(e)
    } catch (r) {
      f(e, r)
    }
  }
  function f(e, n) {
    ;(e._state = 2), (e._value = n), u(e)
  }
  function u(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      o._immediateFn(function () {
        e._handled || o._unhandledRejectionFn(e._value)
      })
    for (var n = 0, t = e._deferreds.length; t > n; n++) r(e, e._deferreds[n])
    e._deferreds = null
  }
  function c(e, n) {
    var t = !1
    try {
      e(
        function (e) {
          t || ((t = !0), i(n, e))
        },
        function (e) {
          t || ((t = !0), f(n, e))
        },
      )
    } catch (o) {
      if (t) return
      ;(t = !0), f(n, o)
    }
  }
  var a = setTimeout
  ;(o.prototype.catch = function (e) {
    return this.then(null, e)
  }),
    (o.prototype.then = function (e, n) {
      var o = new this.constructor(t)
      return (
        r(
          this,
          new (function (e, n, t) {
            ;(this.onFulfilled = 'function' == typeof e ? e : null),
              (this.onRejected = 'function' == typeof n ? n : null),
              (this.promise = t)
          })(e, n, o),
        ),
        o
      )
    }),
    (o.prototype.finally = e),
    (o.all = function (e) {
      return new o(function (t, o) {
        function r(e, n) {
          try {
            if (n && ('object' == typeof n || 'function' == typeof n)) {
              var u = n.then
              if ('function' == typeof u)
                return void u.call(
                  n,
                  function (n) {
                    r(e, n)
                  },
                  o,
                )
            }
            ;(i[e] = n), 0 == --f && t(i)
          } catch (c) {
            o(c)
          }
        }
        if (!n(e)) return o(new TypeError('Promise.all accepts an array'))
        var i = Array.prototype.slice.call(e)
        if (0 === i.length) return t([])
        for (var f = i.length, u = 0; i.length > u; u++) r(u, i[u])
      })
    }),
    (o.resolve = function (e) {
      return e && 'object' == typeof e && e.constructor === o
        ? e
        : new o(function (n) {
            n(e)
          })
    }),
    (o.reject = function (e) {
      return new o(function (n, t) {
        t(e)
      })
    }),
    (o.race = function (e) {
      return new o(function (t, r) {
        if (!n(e)) return r(new TypeError('Promise.race accepts an array'))
        for (var i = 0, f = e.length; f > i; i++) o.resolve(e[i]).then(t, r)
      })
    }),
    (o._immediateFn =
      ('function' == typeof setImmediate &&
        function (e) {
          setImmediate(e)
        }) ||
      function (e) {
        a(e, 0)
      }),
    (o._unhandledRejectionFn = function (e) {
      void 0 !== console && console && console.warn('Possible Unhandled Promise Rejection:', e)
    })
  var l = (function () {
    if ('undefined' != typeof self) return self
    if ('undefined' != typeof window) return window
    if ('undefined' != typeof global) return global
    throw Error('unable to locate global object')
  })()
  'Promise' in l
    ? l.Promise.prototype.finally || (l.Promise.prototype.finally = e)
    : (l.Promise = o)
}),
  'object' == typeof exports && 'undefined' != typeof module
    ? n()
    : 'function' == typeof define && define.amd
      ? define(n)
      : n()
var getRandomValues =
    ('undefined' != typeof crypto &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)) ||
    ('undefined' != typeof msCrypto &&
      'function' == typeof msCrypto.getRandomValues &&
      msCrypto.getRandomValues.bind(msCrypto)),
  rnds8 = new Uint8Array(16)
function rng() {
  if (!getRandomValues)
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
    )
  return getRandomValues(rnds8)
}
for (var byteToHex = [], i = 0; i < 256; ++i) byteToHex[i] = (i + 256).toString(16).substr(1)
function v4(options, buf, offset) {
  var i = (buf && offset) || 0
  'string' == typeof options &&
    ((buf = 'binary' === options ? new Array(16) : null), (options = null))
  var rnds = (options = options || {}).random || (options.rng || rng)()
  if (((rnds[6] = (15 & rnds[6]) | 64), (rnds[8] = (63 & rnds[8]) | 128), buf))
    for (var ii = 0; ii < 16; ++ii) buf[i + ii] = rnds[ii]
  return (
    buf ||
    (function (buf, offset) {
      var i = offset || 0,
        bth = byteToHex
      return [
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        '-',
        bth[buf[i++]],
        bth[buf[i++]],
        '-',
        bth[buf[i++]],
        bth[buf[i++]],
        '-',
        bth[buf[i++]],
        bth[buf[i++]],
        '-',
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
      ].join('')
    })(rnds)
  )
}
var hasOwnProperty = Object.prototype.hasOwnProperty,
  isArray = Array.isArray,
  PATH_RE =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
function getPaths(path, data) {
  if (isArray(path)) return path
  if (data && ((val = data), (key = path), hasOwnProperty.call(val, key))) return [path]
  var val,
    key,
    res = []
  return (
    path.replace(PATH_RE, function (match, p1, offset, string) {
      return res.push(offset ? string.replace(/\\(\\)?/g, '$1') : p1 || match), string
    }),
    res
  )
}
function getDataByPath(data, path) {
  var dataPath,
    paths = getPaths(path, data)
  for (dataPath = paths.shift(); null != dataPath; ) {
    if (null == (data = data[dataPath])) return
    dataPath = paths.shift()
  }
  return data
}
var elementMap = new Map()
function transEl(el) {
  var _a
  if (
    !(function (el) {
      if (el) {
        var tagName = el.tagName
        return (
          0 === tagName.indexOf('UNI-') ||
          'BODY' === tagName ||
          0 === tagName.indexOf('V-UNI-') ||
          el.__isUniElement
        )
      }
      return !1
    })(el)
  )
    throw Error('no such element')
  var element,
    elementId,
    elem = {
      elementId:
        ((element = el),
        (elementId = element._id),
        elementId ||
          ((elementId = v4()),
          (element._id = elementId),
          elementMap.set(elementId, { id: elementId, element: element })),
        elementId),
      tagName: el.tagName.toLocaleLowerCase().replace('uni-', ''),
    }
  if (el.__vue__)
    (vm = el.__vue__) &&
      (vm.$parent && vm.$parent.$el === el && (vm = vm.$parent),
      vm &&
        !(null === (_a = vm.$options) || void 0 === _a ? void 0 : _a.isReserved) &&
        (elem.nodeId = (function (vm) {
          if (vm._$weex) return vm._uid
          if (vm._$id) return vm._$id
          if (vm.uid) return vm.uid
          var parent_1 = (function (vm) {
            for (var parent = vm.$parent; parent; ) {
              if (parent._$id) return parent
              parent = parent.$parent
            }
          })(vm)
          if (!vm.$parent) return '-1'
          var vnode = vm.$vnode,
            context = vnode.context
          return context && context !== parent_1 && context._$id
            ? context._$id + ';' + parent_1._$id + ',' + vnode.data.attrs._i
            : parent_1._$id + ',' + vnode.data.attrs._i
        })(vm)))
  else var vm
  return 'video' === elem.tagName && (elem.videoId = elem.nodeId), elem
}
function getVm(el) {
  return el.__vue__ ? { isVue3: !1, vm: el.__vue__ } : { isVue3: !0, vm: el.__vueParentComponent }
}
function getScrollViewMain(el) {
  var _a = getVm(el),
    isVue3 = _a.isVue3,
    vm = _a.vm
  return isVue3 ? vm.exposed.$getMain() : vm.$refs.main
}
var FUNCTIONS = {
  input: {
    input: function (el, value) {
      var _a = getVm(el),
        isVue3 = _a.isVue3,
        vm = _a.vm
      isVue3
        ? vm.exposed && vm.exposed.$triggerInput({ value: value })
        : ((vm.valueSync = value), vm.$triggerInput({}, { value: value }))
    },
  },
  textarea: {
    input: function (el, value) {
      var _a = getVm(el),
        isVue3 = _a.isVue3,
        vm = _a.vm
      isVue3
        ? vm.exposed && vm.exposed.$triggerInput({ value: value })
        : ((vm.valueSync = value), vm.$triggerInput({}, { value: value }))
    },
  },
  'scroll-view': {
    scrollTo: function (el, x, y) {
      var main = getScrollViewMain(el)
      ;(main.scrollLeft = x), (main.scrollTop = y)
    },
    scrollTop: function (el) {
      return getScrollViewMain(el).scrollTop
    },
    scrollLeft: function (el) {
      return getScrollViewMain(el).scrollLeft
    },
    scrollWidth: function (el) {
      return getScrollViewMain(el).scrollWidth
    },
    scrollHeight: function (el) {
      return getScrollViewMain(el).scrollHeight
    },
  },
  swiper: {
    swipeTo: function (el, index) {
      el.__vue__.current = index
    },
  },
  'movable-view': {
    moveTo: function (el, x, y) {
      el.__vue__._animationTo(x, y)
    },
  },
  switch: {
    tap: function (el) {
      el.click()
    },
  },
  slider: {
    slideTo: function (el, value) {
      var vm = el.__vue__,
        slider = vm.$refs['uni-slider'],
        offsetWidth = slider.offsetWidth,
        boxLeft = slider.getBoundingClientRect().left
      ;(vm.value = value),
        vm._onClick({ x: ((value - vm.min) * offsetWidth) / (vm.max - vm.min) + boxLeft })
    },
  },
}
function createTouchList(touchInits) {
  var _a,
    touches = touchInits.map(function (touch) {
      return (function (touch) {
        if (document.createTouch)
          return document.createTouch(
            window,
            touch.target,
            touch.identifier,
            touch.pageX,
            touch.pageY,
            touch.screenX,
            touch.screenY,
            touch.clientX,
            touch.clientY,
          )
        return new Touch(touch)
      })(touch)
    })
  return document.createTouchList ? (_a = document).createTouchList.apply(_a, touches) : touches
}
var WebAdapter = {
  getWindow: function (pageId) {
    return window
  },
  getDocument: function (pageId) {
    return document
  },
  getEl: function (elementId) {
    var element = elementMap.get(elementId)
    if (!element) throw Error('element destroyed')
    return element.element
  },
  getOffset: function (node) {
    var rect = node.getBoundingClientRect()
    return Promise.resolve({
      left: rect.left + window.pageXOffset,
      top: rect.top + window.pageYOffset,
    })
  },
  querySelector: function (context, selector) {
    return (
      'page' === selector && (selector = 'body'),
      Promise.resolve(transEl(context.querySelector(selector)))
    )
  },
  querySelectorAll: function (context, selector) {
    var elements = [],
      nodeList = document.querySelectorAll(selector)
    return (
      [].forEach.call(nodeList, function (node) {
        try {
          elements.push(transEl(node))
        } catch (e) {}
      }),
      Promise.resolve({ elements: elements })
    )
  },
  queryProperties: function (context, names) {
    return Promise.resolve({
      properties: names.map(function (name) {
        var value = getDataByPath(
          context,
          name.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase()
          }),
        )
        return (
          'document.documentElement.scrollTop' === name &&
            0 === value &&
            (value = getDataByPath(context, 'document.body.scrollTop')),
          value
        )
      }),
    })
  },
  queryAttributes: function (context, names) {
    return Promise.resolve({
      attributes: names.map(function (name) {
        return String(context.getAttribute(name))
      }),
    })
  },
  queryStyles: function (context, names) {
    var style = getComputedStyle(context)
    return Promise.resolve({
      styles: names.map(function (name) {
        return style[name]
      }),
    })
  },
  queryHTML: function (context, type) {
    return Promise.resolve({
      html:
        ((html = 'outer' === type ? context.outerHTML : context.innerHTML),
        html
          .replace(/\n/g, '')
          .replace(/(<uni-text[^>]*>)(<span[^>]*>[^<]*<\/span>)(.*?<\/uni-text>)/g, '$1$3')
          .replace(/<\/?[^>]*>/g, function (replacement) {
            return -1 < replacement.indexOf('<body')
              ? '<page>'
              : '</body>' === replacement
                ? '</page>'
                : 0 !== replacement.indexOf('<uni-') && 0 !== replacement.indexOf('</uni-')
                  ? ''
                  : replacement
                      .replace(/uni-/g, '')
                      .replace(/ role=""/g, '')
                      .replace(/ aria-label=""/g, '')
          })),
    })
    var html
  },
  dispatchTapEvent: function (el) {
    return el.click(), Promise.resolve()
  },
  dispatchLongpressEvent: function (el) {
    return new Promise(function (resolve) {
      el.dispatchEvent(
        new TouchEvent('touchstart', {
          cancelable: !0,
          bubbles: !0,
          touches: createTouchList([
            {
              identifier: 1,
              target: el,
              pageX: 0,
              pageY: 0,
              clientX: 0,
              clientY: 0,
              screenX: 0,
              screenY: 0,
            },
          ]),
          targetTouches: createTouchList([]),
          changedTouches: createTouchList([
            {
              identifier: 1,
              target: el,
              pageX: 0,
              pageY: 0,
              clientX: 0,
              clientY: 0,
              screenX: 0,
              screenY: 0,
            },
          ]),
        }),
      ),
        setTimeout(function () {
          resolve()
        }, 400)
    })
  },
  dispatchTouchEvent: function (el, type, eventInitDict) {
    eventInitDict || (eventInitDict = {}),
      eventInitDict.touches || (eventInitDict.touches = []),
      eventInitDict.changedTouches || (eventInitDict.changedTouches = []),
      eventInitDict.touches.length || eventInitDict.touches.push({ identifier: 1, target: el }),
      eventInitDict.touches.forEach(function (touch) {
        touch.target = el
      }),
      eventInitDict.changedTouches.forEach(function (touch) {
        touch.target = el
      })
    var touches = createTouchList(eventInitDict.touches),
      changedTouches = createTouchList(eventInitDict.changedTouches),
      targetTouches = createTouchList([])
    return (
      el.dispatchEvent(
        new TouchEvent(type, {
          cancelable: !0,
          bubbles: !0,
          touches: touches,
          targetTouches: targetTouches,
          changedTouches: changedTouches,
        }),
      ),
      Promise.resolve()
    )
  },
  callFunction: function (el, functionName, args) {
    var fn = getDataByPath(FUNCTIONS, functionName)
    return fn
      ? Promise.resolve({ result: fn.apply(null, __spreadArrays([el], args)) })
      : Promise.reject(Error(functionName + ' not exists'))
  },
  triggerEvent: function (el, type, detail) {
    var vm = el.__vue__
    if (null == vm ? void 0 : vm.$trigger) vm.$trigger(type, {}, detail)
    else
      switch (type) {
        case 'focus':
          el.focus()
          break
        case 'blur':
          el.getElementsByTagName('input')[0].blur()
      }
    return Promise.resolve()
  },
}
var Api = Object.assign(
  {},
  (function (adapter) {
    return {
      'Page.getElement': function (params) {
        return adapter.querySelector(adapter.getDocument(params.pageId), params.selector)
      },
      'Page.getElements': function (params) {
        return adapter.querySelectorAll(adapter.getDocument(params.pageId), params.selector)
      },
      'Page.getWindowProperties': function (params) {
        return adapter.queryProperties(adapter.getWindow(params.pageId), params.names)
      },
    }
  })(WebAdapter),
  (function (adapter) {
    var getEl = function (params) {
      return adapter.getEl(params.elementId, params.pageId)
    }
    return {
      'Element.getElement': function (params) {
        return adapter.querySelector(getEl(params), params.selector)
      },
      'Element.getElements': function (params) {
        return adapter.querySelectorAll(getEl(params), params.selector)
      },
      'Element.getDOMProperties': function (params) {
        return adapter.queryProperties(getEl(params), params.names)
      },
      'Element.getProperties': function (params) {
        var el = getEl(params),
          ctx = el.__vue__ || el.attr || {}
        return (
          el.__vueParentComponent &&
            (ctx = Object.assign(
              {},
              ctx,
              el.__vueParentComponent.attrs,
              el.__vueParentComponent.props,
            )),
          adapter.queryProperties(ctx, params.names)
        )
      },
      'Element.getOffset': function (params) {
        return adapter.getOffset(getEl(params))
      },
      'Element.getAttributes': function (params) {
        return adapter.queryAttributes(getEl(params), params.names)
      },
      'Element.getStyles': function (params) {
        return adapter.queryStyles(getEl(params), params.names)
      },
      'Element.getHTML': function (params) {
        return adapter.queryHTML(getEl(params), params.type)
      },
      'Element.tap': function (params) {
        return adapter.dispatchTapEvent(getEl(params))
      },
      'Element.longpress': function (params) {
        return adapter.dispatchLongpressEvent(getEl(params))
      },
      'Element.touchstart': function (params) {
        return adapter.dispatchTouchEvent(getEl(params), 'touchstart', params)
      },
      'Element.touchmove': function (params) {
        return adapter.dispatchTouchEvent(getEl(params), 'touchmove', params)
      },
      'Element.touchend': function (params) {
        return adapter.dispatchTouchEvent(getEl(params), 'touchend', params)
      },
      'Element.callFunction': function (params) {
        return adapter.callFunction(getEl(params), params.functionName, params.args)
      },
      'Element.triggerEvent': function (params) {
        return adapter.triggerEvent(getEl(params), params.type, params.detail)
      },
    }
  })(WebAdapter),
)
function send(data) {
  return UniViewJSBridge.publishHandler('onAutoMessageReceive', data)
}
UniViewJSBridge.subscribe('sendAutoMessage', function (_a) {
  var id = _a.id,
    method = _a.method,
    params = _a.params,
    data = { id: id }
  if ('ping' == method) return (data.result = 'pong'), void send(data)
  var fn = Api[method]
  if (!fn) return (data.error = { message: method + ' unimplemented' }), send(data)
  try {
    fn(params)
      .then(function (res) {
        res && (data.result = res)
      })
      .catch(function (err) {
        data.error = { message: err.message }
      })
      .finally(function () {
        send(data)
      })
  } catch (err) {
    ;(data.error = { message: err.message }), send(data)
  }
})
