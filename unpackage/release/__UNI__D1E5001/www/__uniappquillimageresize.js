!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
      ? define([], e)
      : 'object' == typeof exports
        ? (exports.ImageResize = e())
        : (t.ImageResize = e())
})(this, function () {
  return (function (t) {
    function e(o) {
      if (n[o]) return n[o].exports
      var r = (n[o] = { i: o, l: !1, exports: {} })
      return t[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports
    }
    var n = {}
    return (
      (e.m = t),
      (e.c = n),
      (e.i = function (t) {
        return t
      }),
      (e.d = function (t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o })
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default
              }
            : function () {
                return t
              }
        return e.d(n, 'a', n), n
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (e.p = ''),
      e((e.s = 39))
    )
  })([
    function (t, e) {
      function n(t) {
        var e = typeof t
        return null != t && ('object' == e || 'function' == e)
      }
      t.exports = n
    },
    function (t, e, n) {
      var o = n(22),
        r = 'object' == typeof self && self && self.Object === Object && self,
        i = o || r || Function('return this')()
      t.exports = i
    },
    function (t, e) {
      function n(t) {
        return null != t && 'object' == typeof t
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t) {
        var e = -1,
          n = null == t ? 0 : t.length
        for (this.clear(); ++e < n; ) {
          var o = t[e]
          this.set(o[0], o[1])
        }
      }
      var r = n(76),
        i = n(77),
        u = n(78),
        c = n(79),
        a = n(80)
      ;(o.prototype.clear = r),
        (o.prototype.delete = i),
        (o.prototype.get = u),
        (o.prototype.has = c),
        (o.prototype.set = a),
        (t.exports = o)
    },
    function (t, e, n) {
      function o(t, e) {
        for (var n = t.length; n--; ) if (r(t[n][0], e)) return n
        return -1
      }
      var r = n(8)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        return null == t ? (void 0 === t ? a : c) : s && s in Object(t) ? i(t) : u(t)
      }
      var r = n(16),
        i = n(65),
        u = n(88),
        c = '[object Null]',
        a = '[object Undefined]',
        s = r ? r.toStringTag : void 0
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e) {
        var n = t.__data__
        return r(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map
      }
      var r = n(74)
      t.exports = o
    },
    function (t, e, n) {
      var o = n(11),
        r = o(Object, 'create')
      t.exports = r
    },
    function (t, e) {
      function n(t, e) {
        return t === e || (t !== t && e !== e)
      }
      t.exports = n
    },
    function (t, e, n) {
      'use strict'
      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      n.d(e, 'a', function () {
        return r
      })
      var r = function t(e) {
        o(this, t),
          (this.onCreate = function () {}),
          (this.onDestroy = function () {}),
          (this.onUpdate = function () {}),
          (this.overlay = e.overlay),
          (this.img = e.img),
          (this.options = e.options),
          (this.requestUpdate = e.onUpdate)
      }
    },
    function (t, e, n) {
      function o(t, e, n) {
        '__proto__' == e && r
          ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
          : (t[e] = n)
      }
      var r = n(21)
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e) {
        var n = i(t, e)
        return r(n) ? n : void 0
      }
      var r = n(49),
        i = n(66)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        return null != t && i(t.length) && !r(t)
      }
      var r = n(13),
        i = n(31)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        if (!i(t)) return !1
        var e = r(t)
        return e == c || e == a || e == u || e == s
      }
      var r = n(5),
        i = n(0),
        u = '[object AsyncFunction]',
        c = '[object Function]',
        a = '[object GeneratorFunction]',
        s = '[object Proxy]'
      t.exports = o
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        )
      }
    },
    function (t, e, n) {
      var o = n(11),
        r = n(1),
        i = o(r, 'Map')
      t.exports = i
    },
    function (t, e, n) {
      var o = n(1),
        r = o.Symbol
      t.exports = r
    },
    function (t, e) {
      function n(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e)
          case 1:
            return t.call(e, n[0])
          case 2:
            return t.call(e, n[0], n[1])
          case 3:
            return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t, e, n) {
        ;((void 0 === n || i(t[e], n)) && (void 0 !== n || e in t)) || r(t, e, n)
      }
      var r = n(10),
        i = n(8)
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e, n, p, l) {
        t !== e &&
          u(
            e,
            function (u, s) {
              if ((l || (l = new r()), a(u))) c(t, e, s, n, o, p, l)
              else {
                var d = p ? p(f(t, s), u, s + '', t, e, l) : void 0
                void 0 === d && (d = u), i(t, s, d)
              }
            },
            s,
          )
      }
      var r = n(42),
        i = n(18),
        u = n(47),
        c = n(52),
        a = n(0),
        s = n(33),
        f = n(26)
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e) {
        return u(i(t, e, r), t + '')
      }
      var r = n(27),
        i = n(90),
        u = n(91)
      t.exports = o
    },
    function (t, e, n) {
      var o = n(11),
        r = (function () {
          try {
            var t = o(Object, 'defineProperty')
            return t({}, '', {}), t
          } catch (t) {}
        })()
      t.exports = r
    },
    function (t, e, n) {
      ;(function (e) {
        var n = 'object' == typeof e && e && e.Object === Object && e
        t.exports = n
      }).call(e, n(105))
    },
    function (t, e, n) {
      var o = n(89),
        r = o(Object.getPrototypeOf, Object)
      t.exports = r
    },
    function (t, e) {
      function n(t, e) {
        var n = typeof t
        return (
          !!(e = null == e ? o : e) &&
          ('number' == n || ('symbol' != n && r.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        )
      }
      var o = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/
      t.exports = n
    },
    function (t, e) {
      function n(t) {
        var e = t && t.constructor
        return t === (('function' == typeof e && e.prototype) || o)
      }
      var o = Object.prototype
      t.exports = n
    },
    function (t, e) {
      function n(t, e) {
        if (('constructor' !== e || 'function' != typeof t[e]) && '__proto__' != e) return t[e]
      }
      t.exports = n
    },
    function (t, e) {
      function n(t) {
        return t
      }
      t.exports = n
    },
    function (t, e, n) {
      var o = n(48),
        r = n(2),
        i = Object.prototype,
        u = i.hasOwnProperty,
        c = i.propertyIsEnumerable,
        a = o(
          (function () {
            return arguments
          })(),
        )
          ? o
          : function (t) {
              return r(t) && u.call(t, 'callee') && !c.call(t, 'callee')
            }
      t.exports = a
    },
    function (t, e) {
      var n = Array.isArray
      t.exports = n
    },
    function (t, e, n) {
      ;(function (t) {
        var o = n(1),
          r = n(103),
          i = 'object' == typeof e && e && !e.nodeType && e,
          u = i && 'object' == typeof t && t && !t.nodeType && t,
          c = u && u.exports === i,
          a = c ? o.Buffer : void 0,
          s = a ? a.isBuffer : void 0,
          f = s || r
        t.exports = f
      }).call(e, n(14)(t))
    },
    function (t, e) {
      function n(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= o
      }
      var o = 9007199254740991
      t.exports = n
    },
    function (t, e, n) {
      var o = n(50),
        r = n(55),
        i = n(87),
        u = i && i.isTypedArray,
        c = u ? r(u) : o
      t.exports = c
    },
    function (t, e, n) {
      function o(t) {
        return u(t) ? r(t, !0) : i(t)
      }
      var r = n(44),
        i = n(51),
        u = n(12)
      t.exports = o
    },
    function (t, e, n) {
      'use strict'
      e.a = { modules: ['DisplaySize', 'Toolbar', 'Resize'] }
    },
    function (t, e, n) {
      'use strict'
      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function i(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
      }
      n.d(e, 'a', function () {
        return c
      })
      var u = n(9),
        c = (function (t) {
          function e() {
            var t, n, i, u
            o(this, e)
            for (var c = arguments.length, a = Array(c), s = 0; s < c; s++) a[s] = arguments[s]
            return (
              (n = i =
                r(
                  this,
                  (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(a)),
                )),
              (i.onCreate = function () {
                ;(i.display = document.createElement('div')),
                  i.display.classList.add('ql-image-size'),
                  i.overlay.appendChild(i.display)
              }),
              (i.onDestroy = function () {}),
              (i.onUpdate = function () {
                if (i.display && i.img) {
                  var t = i.getCurrentSize()
                  ;(i.display[['inner', 'HTML'].join('')] = t.join(' &times; ')),
                    Object.assign(i.display.style, { right: '4px', top: '4px', left: 'auto' })
                }
              }),
              (i.getCurrentSize = function () {
                return [
                  i.img.width,
                  Math.round((i.img.width / i.img.naturalWidth) * i.img.naturalHeight),
                ]
              }),
              (u = n),
              r(i, u)
            )
          }
          return i(e, t), e
        })(u.a)
    },
    function (t, e, n) {
      'use strict'
      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function i(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
      }
      n.d(e, 'a', function () {
        return f
      })
      var u = n(9),
        c = navigator.maxTouchPoints,
        a = !1
      try {
        var s = Object.defineProperty({}, 'passive', {
          get: function () {
            a = { passive: !1 }
          },
        })
        window.addEventListener('test', null, s)
      } catch (t) {}
      var f = (function (t) {
        function e() {
          var t, n, i, u
          o(this, e)
          for (var s = arguments.length, f = Array(s), p = 0; p < s; p++) f[p] = arguments[p]
          return (
            (n = i =
              r(
                this,
                (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(f)),
              )),
            (i.onCreate = function () {
              ;(i.boxes = []),
                i.addBox('nwse-resize'),
                i.addBox('nesw-resize'),
                i.addBox('nwse-resize'),
                i.addBox('nesw-resize'),
                i.positionBoxes()
            }),
            (i.onDestroy = function () {
              i.setCursor('')
            }),
            (i.positionBoxes = function () {
              ;[
                { left: '-6px', top: '-6px' },
                { right: '-6px', top: '-6px' },
                { right: '-6px', bottom: '-6px' },
                { left: '-6px', bottom: '-6px' },
              ].forEach(function (t, e) {
                Object.assign(i.boxes[e].style, t)
              })
            }),
            (i.addBox = function (t) {
              var e = document.createElement('div')
              e.classList.add('ql-image-handle'),
                (e.style.cursor = t),
                e.addEventListener(c ? 'touchstart' : 'mousedown', i.handleMousedown, !1),
                i.overlay.appendChild(e),
                i.boxes.push(e)
            }),
            (i.handleMousedown = function (t) {
              i.dragBox = t.target
              var e = c ? t.changedTouches[0] : t
              ;(i.dragStartX = e.clientX),
                (i.preDragWidth = i.img.width || i.img.naturalWidth),
                i.setCursor(i.dragBox.style.cursor),
                document.addEventListener(c ? 'touchmove' : 'mousemove', i.handleDrag, a),
                document.addEventListener(c ? 'touchend' : 'mouseup', i.handleMouseup, !1)
            }),
            (i.handleMouseup = function () {
              i.setCursor(''),
                document.removeEventListener(c ? 'touchmove' : 'mousemove', i.handleDrag),
                document.removeEventListener(c ? 'touchend' : 'mouseup', i.handleMouseup)
            }),
            (i.handleDrag = function (t) {
              if (i.img) {
                var e = c ? t.changedTouches[0] : t,
                  n = e.clientX - i.dragStartX
                i.dragBox === i.boxes[0] || i.dragBox === i.boxes[3]
                  ? (i.img.width = Math.round(i.preDragWidth - n))
                  : (i.img.width = Math.round(i.preDragWidth + n)),
                  i.requestUpdate(),
                  t.preventDefault()
              }
            }),
            (i.setCursor = function (t) {
              ;[document.body, i.img].forEach(function (e) {
                e.style.cursor = t
              })
            }),
            (u = n),
            r(i, u)
          )
        }
        return i(e, t), e
      })(u.a)
    },
    function (t, e, n) {
      'use strict'
      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function r(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
      function i(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
      }
      n.d(e, 'a', function () {
        return c
      })
      var u = n(9),
        c = (function (t) {
          function e() {
            var t, n, i, u
            o(this, e)
            for (var c = arguments.length, a = Array(c), s = 0; s < c; s++) a[s] = arguments[s]
            return (
              (n = i =
                r(
                  this,
                  (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(a)),
                )),
              (i.onCreate = function () {
                ;(i.toolbar = document.createElement('div')),
                  i.toolbar.classList.add('ql-image-toolbar'),
                  i.overlay.appendChild(i.toolbar),
                  i._addToolbarButtons()
              }),
              (i.onDestroy = function () {}),
              (i.onUpdate = function () {}),
              (i._addToolbarButtons = function () {
                var t = document.createElement('span')
                t.classList.add('triangle-up'), i.toolbar.appendChild(t)
                var e = document.createElement('span')
                ;(e.innerText = '删除'),
                  e.addEventListener('click', function () {
                    var t = new CustomEvent('keyup')
                    ;(t.keyCode = 46), document.dispatchEvent(t)
                  }),
                  i.toolbar.appendChild(e)
              }),
              (u = n),
              r(i, u)
            )
          }
          return i(e, t), e
        })(u.a)
    },
    function (t, e, n) {
      var o = n(17),
        r = n(20),
        i = n(64),
        u = n(102),
        c = r(function (t) {
          return t.push(void 0, i), o(u, void 0, t)
        })
      t.exports = c
    },
    function (t, e, n) {
      'use strict'
      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      Object.defineProperty(e, '__esModule', { value: !0 })
      var r = n(38),
        i = n.n(r),
        u = n(34),
        c = n(35),
        a = n(37),
        s = n(36),
        f = { DisplaySize: c.a, Toolbar: a.a, Resize: s.a },
        p = function t(e) {
          var n = this,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          o(this, t),
            (this.initializeModules = function () {
              n.removeModules(),
                (n.modules = n.moduleClasses.map(function (t) {
                  return new (f[t] || t)(n)
                })),
                n.modules.forEach(function (t) {
                  t.onCreate()
                }),
                n.onUpdate()
            }),
            (this.onUpdate = function () {
              n.repositionElements(),
                n.modules.forEach(function (t) {
                  t.onUpdate()
                })
            }),
            (this.removeModules = function () {
              n.modules.forEach(function (t) {
                t.onDestroy()
              }),
                (n.modules = [])
            }),
            (this.handleClick = function (t) {
              if (t.target && t.target.tagName && 'IMG' === t.target.tagName.toUpperCase()) {
                if (n.img === t.target) return
                n.img && n.hide(), n.show(t.target)
              } else n.img && n.hide()
            }),
            (this.show = function (t) {
              ;(n.img = t), n.showOverlay(), n.initializeModules()
            }),
            (this.showOverlay = function () {
              n.overlay && n.hideOverlay(),
                n.quill.setSelection(null),
                n.setUserSelect('none'),
                document.addEventListener('keyup', n.checkImage, !0),
                n.quill.root.addEventListener('input', n.checkImage, !0),
                (n.overlay = document.createElement('div')),
                n.overlay.classList.add('ql-image-overlay'),
                n.quill.root.parentNode.appendChild(n.overlay),
                n.repositionElements()
            }),
            (this.hideOverlay = function () {
              n.overlay &&
                (n.quill.root.parentNode.removeChild(n.overlay),
                (n.overlay = void 0),
                document.removeEventListener('keyup', n.checkImage),
                n.quill.root.removeEventListener('input', n.checkImage),
                n.setUserSelect(''))
            }),
            (this.repositionElements = function () {
              if (n.overlay && n.img) {
                var t = n.quill.root.parentNode,
                  e = n.img.getBoundingClientRect(),
                  o = t.getBoundingClientRect()
                Object.assign(n.overlay.style, {
                  left: e.left - o.left - 1 + t.scrollLeft + 'px',
                  top: e.top - o.top + t.scrollTop + 'px',
                  width: e.width + 'px',
                  height: e.height + 'px',
                })
              }
            }),
            (this.hide = function () {
              n.hideOverlay(), n.removeModules(), (n.img = void 0)
            }),
            (this.setUserSelect = function (t) {
              ;['userSelect', 'mozUserSelect', 'webkitUserSelect', 'msUserSelect'].forEach(
                function (e) {
                  ;(n.quill.root.style[e] = t), (document.documentElement.style[e] = t)
                },
              )
            }),
            (this.checkImage = function (t) {
              n.img &&
                ((46 != t.keyCode && 8 != t.keyCode) || window.Quill.find(n.img).deleteAt(0),
                n.hide())
            }),
            (this.quill = e)
          var c = !1
          r.modules && (c = r.modules.slice()),
            (this.options = i()({}, r, u.a)),
            !1 !== c && (this.options.modules = c),
            document.execCommand('enableObjectResizing', !1, 'false'),
            this.quill.root.addEventListener('click', this.handleClick, !1),
            (this.quill.root.parentNode.style.position =
              this.quill.root.parentNode.style.position || 'relative'),
            (this.moduleClasses = this.options.modules),
            (this.modules = [])
        }
      ;(e.default = p), window.Quill && window.Quill.register('modules/imageResize', p)
    },
    function (t, e, n) {
      function o(t) {
        var e = -1,
          n = null == t ? 0 : t.length
        for (this.clear(); ++e < n; ) {
          var o = t[e]
          this.set(o[0], o[1])
        }
      }
      var r = n(67),
        i = n(68),
        u = n(69),
        c = n(70),
        a = n(71)
      ;(o.prototype.clear = r),
        (o.prototype.delete = i),
        (o.prototype.get = u),
        (o.prototype.has = c),
        (o.prototype.set = a),
        (t.exports = o)
    },
    function (t, e, n) {
      function o(t) {
        var e = -1,
          n = null == t ? 0 : t.length
        for (this.clear(); ++e < n; ) {
          var o = t[e]
          this.set(o[0], o[1])
        }
      }
      var r = n(81),
        i = n(82),
        u = n(83),
        c = n(84),
        a = n(85)
      ;(o.prototype.clear = r),
        (o.prototype.delete = i),
        (o.prototype.get = u),
        (o.prototype.has = c),
        (o.prototype.set = a),
        (t.exports = o)
    },
    function (t, e, n) {
      function o(t) {
        var e = (this.__data__ = new r(t))
        this.size = e.size
      }
      var r = n(3),
        i = n(93),
        u = n(94),
        c = n(95),
        a = n(96),
        s = n(97)
      ;(o.prototype.clear = i),
        (o.prototype.delete = u),
        (o.prototype.get = c),
        (o.prototype.has = a),
        (o.prototype.set = s),
        (t.exports = o)
    },
    function (t, e, n) {
      var o = n(1),
        r = o.Uint8Array
      t.exports = r
    },
    function (t, e, n) {
      function o(t, e) {
        var n = u(t),
          o = !n && i(t),
          f = !n && !o && c(t),
          l = !n && !o && !f && s(t),
          d = n || o || f || l,
          h = d ? r(t.length, String) : [],
          v = h.length
        for (var y in t)
          (!e && !p.call(t, y)) ||
            (d &&
              ('length' == y ||
                (f && ('offset' == y || 'parent' == y)) ||
                (l && ('buffer' == y || 'byteLength' == y || 'byteOffset' == y)) ||
                a(y, v))) ||
            h.push(y)
        return h
      }
      var r = n(54),
        i = n(28),
        u = n(29),
        c = n(30),
        a = n(24),
        s = n(32),
        f = Object.prototype,
        p = f.hasOwnProperty
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e, n) {
        var o = t[e]
        ;(c.call(t, e) && i(o, n) && (void 0 !== n || e in t)) || r(t, e, n)
      }
      var r = n(10),
        i = n(8),
        u = Object.prototype,
        c = u.hasOwnProperty
      t.exports = o
    },
    function (t, e, n) {
      var o = n(0),
        r = Object.create,
        i = (function () {
          function t() {}
          return function (e) {
            if (!o(e)) return {}
            if (r) return r(e)
            t.prototype = e
            var n = new t()
            return (t.prototype = void 0), n
          }
        })()
      t.exports = i
    },
    function (t, e, n) {
      var o = n(63),
        r = o()
      t.exports = r
    },
    function (t, e, n) {
      function o(t) {
        return i(t) && r(t) == u
      }
      var r = n(5),
        i = n(2),
        u = '[object Arguments]'
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        return !(!u(t) || i(t)) && (r(t) ? h : s).test(c(t))
      }
      var r = n(13),
        i = n(75),
        u = n(0),
        c = n(98),
        a = /[\\^$.*+?()[\]{}|]/g,
        s = /^\[object .+?Constructor\]$/,
        f = Function.prototype,
        p = Object.prototype,
        l = f.toString,
        d = p.hasOwnProperty,
        h = RegExp(
          '^' +
            l
              .call(d)
              .replace(a, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        )
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        return u(t) && i(t.length) && !!c[r(t)]
      }
      var r = n(5),
        i = n(31),
        u = n(2),
        c = {}
      ;(c['[object Float32Array]'] =
        c['[object Float64Array]'] =
        c['[object Int8Array]'] =
        c['[object Int16Array]'] =
        c['[object Int32Array]'] =
        c['[object Uint8Array]'] =
        c['[object Uint8ClampedArray]'] =
        c['[object Uint16Array]'] =
        c['[object Uint32Array]'] =
          !0),
        (c['[object Arguments]'] =
          c['[object Array]'] =
          c['[object ArrayBuffer]'] =
          c['[object Boolean]'] =
          c['[object DataView]'] =
          c['[object Date]'] =
          c['[object Error]'] =
          c['[object Function]'] =
          c['[object Map]'] =
          c['[object Number]'] =
          c['[object Object]'] =
          c['[object RegExp]'] =
          c['[object Set]'] =
          c['[object String]'] =
          c['[object WeakMap]'] =
            !1),
        (t.exports = o)
    },
    function (t, e, n) {
      function o(t) {
        if (!r(t)) return u(t)
        var e = i(t),
          n = []
        for (var o in t) ('constructor' != o || (!e && a.call(t, o))) && n.push(o)
        return n
      }
      var r = n(0),
        i = n(25),
        u = n(86),
        c = Object.prototype,
        a = c.hasOwnProperty
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e, n, o, g, _, m) {
        var j = b(t, n),
          w = b(e, n),
          O = m.get(w)
        if (O) return void r(t, n, O)
        var E = _ ? _(j, w, n + '', t, e, m) : void 0,
          z = void 0 === E
        if (z) {
          var C = f(w),
            P = !C && l(w),
            S = !C && !P && y(w)
          ;(E = w),
            C || P || S
              ? f(j)
                ? (E = j)
                : p(j)
                  ? (E = c(j))
                  : P
                    ? ((z = !1), (E = i(w, !0)))
                    : S
                      ? ((z = !1), (E = u(w, !0)))
                      : (E = [])
              : v(w) || s(w)
                ? ((E = j), s(j) ? (E = x(j)) : (h(j) && !d(j)) || (E = a(w)))
                : (z = !1)
        }
        z && (m.set(w, E), g(E, w, o, _, m), m.delete(w)), r(t, n, E)
      }
      var r = n(18),
        i = n(57),
        u = n(58),
        c = n(59),
        a = n(72),
        s = n(28),
        f = n(29),
        p = n(100),
        l = n(30),
        d = n(13),
        h = n(0),
        v = n(101),
        y = n(32),
        b = n(26),
        x = n(104)
      t.exports = o
    },
    function (t, e, n) {
      var o = n(99),
        r = n(21),
        i = n(27),
        u = r
          ? function (t, e) {
              return r(t, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: o(e),
                writable: !0,
              })
            }
          : i
      t.exports = u
    },
    function (t, e) {
      function n(t, e) {
        for (var n = -1, o = Array(t); ++n < t; ) o[n] = e(n)
        return o
      }
      t.exports = n
    },
    function (t, e) {
      function n(t) {
        return function (e) {
          return t(e)
        }
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t) {
        var e = new t.constructor(t.byteLength)
        return new r(e).set(new r(t)), e
      }
      var r = n(43)
      t.exports = o
    },
    function (t, e, n) {
      ;(function (t) {
        function o(t, e) {
          if (e) return t.slice()
          var n = t.length,
            o = s ? s(n) : new t.constructor(n)
          return t.copy(o), o
        }
        var r = n(1),
          i = 'object' == typeof e && e && !e.nodeType && e,
          u = i && 'object' == typeof t && t && !t.nodeType && t,
          c = u && u.exports === i,
          a = c ? r.Buffer : void 0,
          s = a ? a.allocUnsafe : void 0
        t.exports = o
      }).call(e, n(14)(t))
    },
    function (t, e, n) {
      function o(t, e) {
        var n = e ? r(t.buffer) : t.buffer
        return new t.constructor(n, t.byteOffset, t.length)
      }
      var r = n(56)
      t.exports = o
    },
    function (t, e) {
      function n(t, e) {
        var n = -1,
          o = t.length
        for (e || (e = Array(o)); ++n < o; ) e[n] = t[n]
        return e
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t, e, n, o) {
        var u = !n
        n || (n = {})
        for (var c = -1, a = e.length; ++c < a; ) {
          var s = e[c],
            f = o ? o(n[s], t[s], s, n, t) : void 0
          void 0 === f && (f = t[s]), u ? i(n, s, f) : r(n, s, f)
        }
        return n
      }
      var r = n(45),
        i = n(10)
      t.exports = o
    },
    function (t, e, n) {
      var o = n(1),
        r = o['__core-js_shared__']
      t.exports = r
    },
    function (t, e, n) {
      function o(t) {
        return r(function (e, n) {
          var o = -1,
            r = n.length,
            u = r > 1 ? n[r - 1] : void 0,
            c = r > 2 ? n[2] : void 0
          for (
            u = t.length > 3 && 'function' == typeof u ? (r--, u) : void 0,
              c && i(n[0], n[1], c) && ((u = r < 3 ? void 0 : u), (r = 1)),
              e = Object(e);
            ++o < r;

          ) {
            var a = n[o]
            a && t(e, a, o, u)
          }
          return e
        })
      }
      var r = n(20),
        i = n(73)
      t.exports = o
    },
    function (t, e) {
      function n(t) {
        return function (e, n, o) {
          for (var r = -1, i = Object(e), u = o(e), c = u.length; c--; ) {
            var a = u[t ? c : ++r]
            if (!1 === n(i[a], a, i)) break
          }
          return e
        }
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t, e, n, u, c, a) {
        return i(t) && i(e) && (a.set(e, t), r(t, e, void 0, o, a), a.delete(e)), t
      }
      var r = n(19),
        i = n(0)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        var e = u.call(t, a),
          n = t[a]
        try {
          t[a] = void 0
          var o = !0
        } catch (t) {}
        var r = c.call(t)
        return o && (e ? (t[a] = n) : delete t[a]), r
      }
      var r = n(16),
        i = Object.prototype,
        u = i.hasOwnProperty,
        c = i.toString,
        a = r ? r.toStringTag : void 0
      t.exports = o
    },
    function (t, e) {
      function n(t, e) {
        return null == t ? void 0 : t[e]
      }
      t.exports = n
    },
    function (t, e, n) {
      function o() {
        ;(this.__data__ = r ? r(null) : {}), (this.size = 0)
      }
      var r = n(7)
      t.exports = o
    },
    function (t, e) {
      function n(t) {
        var e = this.has(t) && delete this.__data__[t]
        return (this.size -= e ? 1 : 0), e
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t) {
        var e = this.__data__
        if (r) {
          var n = e[t]
          return n === i ? void 0 : n
        }
        return c.call(e, t) ? e[t] : void 0
      }
      var r = n(7),
        i = '__lodash_hash_undefined__',
        u = Object.prototype,
        c = u.hasOwnProperty
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        var e = this.__data__
        return r ? void 0 !== e[t] : u.call(e, t)
      }
      var r = n(7),
        i = Object.prototype,
        u = i.hasOwnProperty
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e) {
        var n = this.__data__
        return (this.size += this.has(t) ? 0 : 1), (n[t] = r && void 0 === e ? i : e), this
      }
      var r = n(7),
        i = '__lodash_hash_undefined__'
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        return 'function' != typeof t.constructor || u(t) ? {} : r(i(t))
      }
      var r = n(46),
        i = n(23),
        u = n(25)
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e, n) {
        if (!c(n)) return !1
        var o = typeof e
        return !!('number' == o ? i(n) && u(e, n.length) : 'string' == o && e in n) && r(n[e], t)
      }
      var r = n(8),
        i = n(12),
        u = n(24),
        c = n(0)
      t.exports = o
    },
    function (t, e) {
      function n(t) {
        var e = typeof t
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
          ? '__proto__' !== t
          : null === t
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t) {
        return !!i && i in t
      }
      var r = n(61),
        i = (function () {
          var t = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '')
          return t ? 'Symbol(src)_1.' + t : ''
        })()
      t.exports = o
    },
    function (t, e) {
      function n() {
        ;(this.__data__ = []), (this.size = 0)
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t) {
        var e = this.__data__,
          n = r(e, t)
        return !(n < 0) && (n == e.length - 1 ? e.pop() : u.call(e, n, 1), --this.size, !0)
      }
      var r = n(4),
        i = Array.prototype,
        u = i.splice
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        var e = this.__data__,
          n = r(e, t)
        return n < 0 ? void 0 : e[n][1]
      }
      var r = n(4)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        return r(this.__data__, t) > -1
      }
      var r = n(4)
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e) {
        var n = this.__data__,
          o = r(n, t)
        return o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e), this
      }
      var r = n(4)
      t.exports = o
    },
    function (t, e, n) {
      function o() {
        ;(this.size = 0), (this.__data__ = { hash: new r(), map: new (u || i)(), string: new r() })
      }
      var r = n(40),
        i = n(3),
        u = n(15)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        var e = r(this, t).delete(t)
        return (this.size -= e ? 1 : 0), e
      }
      var r = n(6)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        return r(this, t).get(t)
      }
      var r = n(6)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        return r(this, t).has(t)
      }
      var r = n(6)
      t.exports = o
    },
    function (t, e, n) {
      function o(t, e) {
        var n = r(this, t),
          o = n.size
        return n.set(t, e), (this.size += n.size == o ? 0 : 1), this
      }
      var r = n(6)
      t.exports = o
    },
    function (t, e) {
      function n(t) {
        var e = []
        if (null != t) for (var n in Object(t)) e.push(n)
        return e
      }
      t.exports = n
    },
    function (t, e, n) {
      ;(function (t) {
        var o = n(22),
          r = 'object' == typeof e && e && !e.nodeType && e,
          i = r && 'object' == typeof t && t && !t.nodeType && t,
          u = i && i.exports === r,
          c = u && o.process,
          a = (function () {
            try {
              var t = i && i.require && i.require('util').types
              return t || (c && c.binding && c.binding('util'))
            } catch (t) {}
          })()
        t.exports = a
      }).call(e, n(14)(t))
    },
    function (t, e) {
      function n(t) {
        return r.call(t)
      }
      var o = Object.prototype,
        r = o.toString
      t.exports = n
    },
    function (t, e) {
      function n(t, e) {
        return function (n) {
          return t(e(n))
        }
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t, e, n) {
        return (
          (e = i(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (var o = arguments, u = -1, c = i(o.length - e, 0), a = Array(c); ++u < c; )
              a[u] = o[e + u]
            u = -1
            for (var s = Array(e + 1); ++u < e; ) s[u] = o[u]
            return (s[e] = n(a)), r(t, this, s)
          }
        )
      }
      var r = n(17),
        i = Math.max
      t.exports = o
    },
    function (t, e, n) {
      var o = n(53),
        r = n(92),
        i = r(o)
      t.exports = i
    },
    function (t, e) {
      function n(t) {
        var e = 0,
          n = 0
        return function () {
          var u = i(),
            c = r - (u - n)
          if (((n = u), c > 0)) {
            if (++e >= o) return arguments[0]
          } else e = 0
          return t.apply(void 0, arguments)
        }
      }
      var o = 800,
        r = 16,
        i = Date.now
      t.exports = n
    },
    function (t, e, n) {
      function o() {
        ;(this.__data__ = new r()), (this.size = 0)
      }
      var r = n(3)
      t.exports = o
    },
    function (t, e) {
      function n(t) {
        var e = this.__data__,
          n = e.delete(t)
        return (this.size = e.size), n
      }
      t.exports = n
    },
    function (t, e) {
      function n(t) {
        return this.__data__.get(t)
      }
      t.exports = n
    },
    function (t, e) {
      function n(t) {
        return this.__data__.has(t)
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t, e) {
        var n = this.__data__
        if (n instanceof r) {
          var o = n.__data__
          if (!i || o.length < c - 1) return o.push([t, e]), (this.size = ++n.size), this
          n = this.__data__ = new u(o)
        }
        return n.set(t, e), (this.size = n.size), this
      }
      var r = n(3),
        i = n(15),
        u = n(41),
        c = 200
      t.exports = o
    },
    function (t, e) {
      function n(t) {
        if (null != t) {
          try {
            return r.call(t)
          } catch (t) {}
          try {
            return t + ''
          } catch (t) {}
        }
        return ''
      }
      var o = Function.prototype,
        r = o.toString
      t.exports = n
    },
    function (t, e) {
      function n(t) {
        return function () {
          return t
        }
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t) {
        return i(t) && r(t)
      }
      var r = n(12),
        i = n(2)
      t.exports = o
    },
    function (t, e, n) {
      function o(t) {
        if (!u(t) || r(t) != c) return !1
        var e = i(t)
        if (null === e) return !0
        var n = p.call(e, 'constructor') && e.constructor
        return 'function' == typeof n && n instanceof n && f.call(n) == l
      }
      var r = n(5),
        i = n(23),
        u = n(2),
        c = '[object Object]',
        a = Function.prototype,
        s = Object.prototype,
        f = a.toString,
        p = s.hasOwnProperty,
        l = f.call(Object)
      t.exports = o
    },
    function (t, e, n) {
      var o = n(19),
        r = n(62),
        i = r(function (t, e, n, r) {
          o(t, e, n, r)
        })
      t.exports = i
    },
    function (t, e) {
      function n() {
        return !1
      }
      t.exports = n
    },
    function (t, e, n) {
      function o(t) {
        return r(t, i(t))
      }
      var r = n(60),
        i = n(33)
      t.exports = o
    },
    function (t, e) {
      var n
      n = (function () {
        return this
      })()
      try {
        n = n || Function('return this')() || (0, eval)('this')
      } catch (t) {
        'object' == typeof window && (n = window)
      }
      t.exports = n
    },
  ])
})
