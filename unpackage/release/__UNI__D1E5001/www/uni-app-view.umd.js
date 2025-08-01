!(function (e) {
  'function' == typeof define && define.amd ? define(e) : e()
})(function () {
  'use strict'
  function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
  }
  var t = { exports: {} },
    n = { exports: {} },
    r = { exports: {} },
    i = (r.exports = { version: '2.6.12' })
  'number' == typeof __e && (__e = i)
  var a = r.exports,
    o = { exports: {} },
    s = (o.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')())
  'number' == typeof __g && (__g = s)
  var l = o.exports,
    u = a,
    c = l,
    d = '__core-js_shared__',
    h = c[d] || (c[d] = {})
  ;(n.exports = function (e, t) {
    return h[e] || (h[e] = void 0 !== t ? t : {})
  })('versions', []).push({
    version: u.version,
    mode: 'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
  })
  var f = n.exports,
    p = 0,
    v = Math.random(),
    g = function (e) {
      return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++p + v).toString(36))
    },
    m = f('wks'),
    _ = g,
    y = l.Symbol,
    b = 'function' == typeof y
  ;(t.exports = function (e) {
    return m[e] || (m[e] = (b && y[e]) || (b ? y : _)('Symbol.' + e))
  }).store = m
  var w,
    x,
    S = t.exports,
    k = {},
    C = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    },
    T = C,
    A = function (e) {
      if (!T(e)) throw TypeError(e + ' is not an object!')
      return e
    },
    M = function (e) {
      try {
        return !!e()
      } catch (t) {
        return !0
      }
    },
    E = !M(function () {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function () {
            return 7
          },
        }).a
      )
    })
  function O() {
    if (x) return w
    x = 1
    var e = C,
      t = l.document,
      n = e(t) && e(t.createElement)
    return (w = function (e) {
      return n ? t.createElement(e) : {}
    })
  }
  var L =
      !E &&
      !M(function () {
        return (
          7 !=
          Object.defineProperty(O()('div'), 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      }),
    z = C,
    N = A,
    I = L,
    P = function (e, t) {
      if (!z(e)) return e
      var n, r
      if (t && 'function' == typeof (n = e.toString) && !z((r = n.call(e)))) return r
      if ('function' == typeof (n = e.valueOf) && !z((r = n.call(e)))) return r
      if (!t && 'function' == typeof (n = e.toString) && !z((r = n.call(e)))) return r
      throw TypeError("Can't convert object to primitive value")
    },
    D = Object.defineProperty
  k.f = E
    ? Object.defineProperty
    : function (e, t, n) {
        if ((N(e), (t = P(t, !0)), N(n), I))
          try {
            return D(e, t, n)
          } catch (r) {}
        if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!')
        return 'value' in n && (e[t] = n.value), e
      }
  var B = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
    },
    R = k,
    F = B,
    q = E
      ? function (e, t, n) {
          return R.f(e, t, F(1, n))
        }
      : function (e, t, n) {
          return (e[t] = n), e
        },
    j = S('unscopables'),
    V = Array.prototype
  null == V[j] && q(V, j, {})
  var $ = {},
    H = {}.toString,
    W = function (e) {
      return H.call(e).slice(8, -1)
    },
    U = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e)
      return e
    },
    Y = Object('z').propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return 'String' == W(e) ? e.split('') : Object(e)
        },
    X = U,
    Z = function (e) {
      return Y(X(e))
    },
    G = { exports: {} },
    K = {}.hasOwnProperty,
    J = function (e, t) {
      return K.call(e, t)
    },
    Q = f('native-function-to-string', Function.toString),
    ee = l,
    te = q,
    ne = J,
    re = g('src'),
    ie = Q,
    ae = 'toString',
    oe = ('' + ie).split(ae)
  ;(a.inspectSource = function (e) {
    return ie.call(e)
  }),
    (G.exports = function (e, t, n, r) {
      var i = 'function' == typeof n
      i && (ne(n, 'name') || te(n, 'name', t)),
        e[t] !== n &&
          (i && (ne(n, re) || te(n, re, e[t] ? '' + e[t] : oe.join(String(t)))),
          e === ee
            ? (e[t] = n)
            : r
              ? e[t]
                ? (e[t] = n)
                : te(e, t, n)
              : (delete e[t], te(e, t, n)))
    })(Function.prototype, ae, function () {
      return ('function' == typeof this && this[re]) || ie.call(this)
    })
  var se = G.exports,
    le = function (e) {
      if ('function' != typeof e) throw TypeError(e + ' is not a function!')
      return e
    },
    ue = le,
    ce = l,
    de = a,
    he = q,
    fe = se,
    pe = function (e, t, n) {
      if ((ue(e), void 0 === t)) return e
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n)
          }
        case 2:
          return function (n, r) {
            return e.call(t, n, r)
          }
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    },
    ve = 'prototype',
    ge = function (e, t, n) {
      var r,
        i,
        a,
        o,
        s = e & ge.F,
        l = e & ge.G,
        u = e & ge.S,
        c = e & ge.P,
        d = e & ge.B,
        h = l ? ce : u ? ce[t] || (ce[t] = {}) : (ce[t] || {})[ve],
        f = l ? de : de[t] || (de[t] = {}),
        p = f[ve] || (f[ve] = {})
      for (r in (l && (n = t), n))
        (a = ((i = !s && h && void 0 !== h[r]) ? h : n)[r]),
          (o = d && i ? pe(a, ce) : c && 'function' == typeof a ? pe(Function.call, a) : a),
          h && fe(h, r, a, e & ge.U),
          f[r] != a && he(f, r, o),
          c && p[r] != a && (p[r] = a)
    }
  ;(ce.core = de),
    (ge.F = 1),
    (ge.G = 2),
    (ge.S = 4),
    (ge.P = 8),
    (ge.B = 16),
    (ge.W = 32),
    (ge.U = 64),
    (ge.R = 128)
  var me,
    _e,
    ye,
    be = ge,
    we = Math.ceil,
    xe = Math.floor,
    Se = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? xe : we)(e)
    },
    ke = Se,
    Ce = Math.min,
    Te = Se,
    Ae = Math.max,
    Me = Math.min,
    Ee = Z,
    Oe = function (e) {
      return e > 0 ? Ce(ke(e), 9007199254740991) : 0
    },
    Le = function (e, t) {
      return (e = Te(e)) < 0 ? Ae(e + t, 0) : Me(e, t)
    },
    ze = f('keys'),
    Ne = g,
    Ie = function (e) {
      return ze[e] || (ze[e] = Ne(e))
    },
    Pe = J,
    De = Z,
    Be =
      ((me = !1),
      function (e, t, n) {
        var r,
          i = Ee(e),
          a = Oe(i.length),
          o = Le(n, a)
        if (me && t != t) {
          for (; a > o; ) if ((r = i[o++]) != r) return !0
        } else for (; a > o; o++) if ((me || o in i) && i[o] === t) return me || o || 0
        return !me && -1
      }),
    Re = Ie('IE_PROTO'),
    Fe =
      'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ',',
      ),
    qe = function (e, t) {
      var n,
        r = De(e),
        i = 0,
        a = []
      for (n in r) n != Re && Pe(r, n) && a.push(n)
      for (; t.length > i; ) Pe(r, (n = t[i++])) && (~Be(a, n) || a.push(n))
      return a
    },
    je = Fe,
    Ve =
      Object.keys ||
      function (e) {
        return qe(e, je)
      },
    $e = k,
    He = A,
    We = Ve,
    Ue = E
      ? Object.defineProperties
      : function (e, t) {
          He(e)
          for (var n, r = We(t), i = r.length, a = 0; i > a; ) $e.f(e, (n = r[a++]), t[n])
          return e
        }
  var Ye = A,
    Xe = Ue,
    Ze = Fe,
    Ge = Ie('IE_PROTO'),
    Ke = function () {},
    Je = 'prototype',
    Qe = function () {
      var e,
        t = O()('iframe'),
        n = Ze.length
      for (
        t.style.display = 'none',
          (function () {
            if (ye) return _e
            ye = 1
            var e = l.document
            return (_e = e && e.documentElement)
          })().appendChild(t),
          t.src = 'javascript:',
          (e = t.contentWindow.document).open(),
          e.write('<script>document.F=Object</script>'),
          e.close(),
          Qe = e.F;
        n--;

      )
        delete Qe[Je][Ze[n]]
      return Qe()
    },
    et =
      Object.create ||
      function (e, t) {
        var n
        return (
          null !== e
            ? ((Ke[Je] = Ye(e)), (n = new Ke()), (Ke[Je] = null), (n[Ge] = e))
            : (n = Qe()),
          void 0 === t ? n : Xe(n, t)
        )
      },
    tt = k.f,
    nt = J,
    rt = S('toStringTag'),
    it = function (e, t, n) {
      e && !nt((e = n ? e : e.prototype), rt) && tt(e, rt, { configurable: !0, value: t })
    },
    at = et,
    ot = B,
    st = it,
    lt = {}
  q(lt, S('iterator'), function () {
    return this
  })
  var ut = U,
    ct = function (e) {
      return Object(ut(e))
    },
    dt = J,
    ht = ct,
    ft = Ie('IE_PROTO'),
    pt = Object.prototype,
    vt =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = ht(e)),
          dt(e, ft)
            ? e[ft]
            : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
                ? pt
                : null
        )
      },
    gt = be,
    mt = se,
    _t = q,
    yt = $,
    bt = function (e, t, n) {
      ;(e.prototype = at(lt, { next: ot(1, n) })), st(e, t + ' Iterator')
    },
    wt = it,
    xt = vt,
    St = S('iterator'),
    kt = !([].keys && 'next' in [].keys()),
    Ct = 'keys',
    Tt = 'values',
    At = function () {
      return this
    },
    Mt = function (e) {
      V[j][e] = !0
    },
    Et = function (e, t) {
      return { value: t, done: !!e }
    },
    Ot = $,
    Lt = Z,
    zt = (function (e, t, n, r, i, a, o) {
      bt(n, t, r)
      var s,
        l,
        u,
        c = function (e) {
          if (!kt && e in p) return p[e]
          switch (e) {
            case Ct:
            case Tt:
              return function () {
                return new n(this, e)
              }
          }
          return function () {
            return new n(this, e)
          }
        },
        d = t + ' Iterator',
        h = i == Tt,
        f = !1,
        p = e.prototype,
        v = p[St] || p['@@iterator'] || (i && p[i]),
        g = v || c(i),
        m = i ? (h ? c('entries') : g) : void 0,
        _ = ('Array' == t && p.entries) || v
      if (
        (_ &&
          (u = xt(_.call(new e()))) !== Object.prototype &&
          u.next &&
          (wt(u, d, !0), 'function' != typeof u[St] && _t(u, St, At)),
        h &&
          v &&
          v.name !== Tt &&
          ((f = !0),
          (g = function () {
            return v.call(this)
          })),
        (kt || f || !p[St]) && _t(p, St, g),
        (yt[t] = g),
        (yt[d] = At),
        i)
      )
        if (((s = { values: h ? g : c(Tt), keys: a ? g : c(Ct), entries: m }), o))
          for (l in s) l in p || mt(p, l, s[l])
        else gt(gt.P + gt.F * (kt || f), t, s)
      return s
    })(
      Array,
      'Array',
      function (e, t) {
        ;(this._t = Lt(e)), (this._i = 0), (this._k = t)
      },
      function () {
        var e = this._t,
          t = this._k,
          n = this._i++
        return !e || n >= e.length
          ? ((this._t = void 0), Et(1))
          : Et(0, 'keys' == t ? n : 'values' == t ? e[n] : [n, e[n]])
      },
      'values',
    )
  ;(Ot.Arguments = Ot.Array), Mt('keys'), Mt('values'), Mt('entries')
  for (
    var Nt = zt,
      It = Ve,
      Pt = se,
      Dt = l,
      Bt = q,
      Rt = $,
      Ft = S,
      qt = Ft('iterator'),
      jt = Ft('toStringTag'),
      Vt = Rt.Array,
      $t = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1,
      },
      Ht = It($t),
      Wt = 0;
    Wt < Ht.length;
    Wt++
  ) {
    var Ut,
      Yt = Ht[Wt],
      Xt = $t[Yt],
      Zt = Dt[Yt],
      Gt = Zt && Zt.prototype
    if (Gt && (Gt[qt] || Bt(Gt, qt, Vt), Gt[jt] || Bt(Gt, jt, Yt), (Rt[Yt] = Vt), Xt))
      for (Ut in Nt) Gt[Ut] || Pt(Gt, Ut, Nt[Ut], !0)
  }
  /**
   * @vue/shared v3.4.21
   * (c) 2018-present Yuxi (Evan) You and Vue contributors
   * @license MIT
   **/ function Kt(e, t) {
    var n = new Set(e.split(','))
    return (e) => n.has(e)
  }
  var Jt,
    Qt = {},
    en = [],
    tn = () => {},
    nn = () => !1,
    rn = (e) =>
      111 === e.charCodeAt(0) &&
      110 === e.charCodeAt(1) &&
      (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    an = (e) => e.startsWith('onUpdate:'),
    on = Object.assign,
    sn = (e, t) => {
      var n = e.indexOf(t)
      n > -1 && e.splice(n, 1)
    },
    ln = Object.prototype.hasOwnProperty,
    un = (e, t) => ln.call(e, t),
    cn = Array.isArray,
    dn = (e) => '[object Map]' === yn(e),
    hn = (e) => '[object Set]' === yn(e),
    fn = (e) => 'function' == typeof e,
    pn = (e) => 'string' == typeof e,
    vn = (e) => 'symbol' == typeof e,
    gn = (e) => null !== e && 'object' == typeof e,
    mn = (e) => (gn(e) || fn(e)) && fn(e.then) && fn(e.catch),
    _n = Object.prototype.toString,
    yn = (e) => _n.call(e),
    bn = (e) => yn(e).slice(8, -1),
    wn = (e) => '[object Object]' === yn(e),
    xn = (e) => pn(e) && 'NaN' !== e && '-' !== e[0] && '' + parseInt(e, 10) === e,
    Sn = Kt(
      ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
    ),
    kn = (e) => {
      var t = Object.create(null)
      return (n) => t[n] || (t[n] = e(n))
    },
    Cn = /-(\w)/g,
    Tn = kn((e) => e.replace(Cn, (e, t) => (t ? t.toUpperCase() : ''))),
    An = /\B([A-Z])/g,
    Mn = kn((e) => e.replace(An, '-$1').toLowerCase()),
    En = kn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    On = kn((e) => (e ? 'on'.concat(En(e)) : '')),
    Ln = (e, t) => !Object.is(e, t),
    zn = (e, t) => {
      for (var n = 0; n < e.length; n++) e[n](t)
    },
    Nn = (e, t, n) => {
      Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
    },
    In = (e) => {
      var t = parseFloat(e)
      return isNaN(t) ? e : t
    },
    Pn = () =>
      Jt ||
      (Jt =
        'undefined' != typeof globalThis
          ? globalThis
          : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window || 'undefined' != typeof window
              ? window
              : {})
  function Dn(e) {
    if (cn(e)) {
      for (var t = {}, n = 0; n < e.length; n++) {
        var r = e[n],
          i = pn(r) ? qn(r) : Dn(r)
        if (i) for (var a in i) t[a] = i[a]
      }
      return t
    }
    if (pn(e) || gn(e)) return e
  }
  var Bn = /;(?![^(]*\))/g,
    Rn = /:([^]+)/,
    Fn = /\/\*[^]*?\*\//g
  function qn(e) {
    var t = {}
    return (
      e
        .replace(Fn, '')
        .split(Bn)
        .forEach((e) => {
          if (e) {
            var n = e.split(Rn)
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
          }
        }),
      t
    )
  }
  function jn(e) {
    var t = ''
    if (pn(e)) t = e
    else if (cn(e))
      for (var n = 0; n < e.length; n++) {
        var r = jn(e[n])
        r && (t += r + ' ')
      }
    else if (gn(e)) for (var i in e) e[i] && (t += i + ' ')
    return t.trim()
  }
  var Vn,
    $n,
    Hn = Kt('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly')
  function Wn(e) {
    return !!e || '' === e
  }
  var Un = be,
    Yn = le,
    Xn = ct,
    Zn = M,
    Gn = [].sort,
    Kn = [1, 2, 3]
  Un(
    Un.P +
      Un.F *
        (Zn(function () {
          Kn.sort(void 0)
        }) ||
          !Zn(function () {
            Kn.sort(null)
          }) ||
          !(function () {
            if ($n) return Vn
            $n = 1
            var e = M
            return (Vn = function (t, n) {
              return (
                !!t &&
                e(function () {
                  n ? t.call(null, function () {}, 1) : t.call(null)
                })
              )
            })
          })()(Gn)),
    'Array',
    {
      sort: function (e) {
        return void 0 === e ? Gn.call(Xn(this)) : Gn.call(Xn(this), Yn(e))
      },
    },
  )
  var Jn = '\n',
    Qn = 44,
    er = '#007aff',
    tr = /^([a-z-]+:)?\/\//i,
    nr = /^data:.*,.*/,
    rr = 'wxs://',
    ir = 'json://',
    ar = 'wxsModules',
    or = 'renderjsModules',
    sr = 'onThemeChange',
    lr = 'onPageScroll',
    ur = 'onReachBottom'
  function cr(e) {
    return (function (e) {
      return 0 === e.indexOf('/')
    })(e)
      ? e
      : '/' + e
  }
  function dr(e) {
    var t,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
    return function () {
      if (e) {
        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
        ;(t = e.apply(n, i)), (e = null)
      }
      return t
    }
  }
  function hr(e, t) {
    if (pn(t)) {
      var n = (t = t.replace(/\[(\d+)\]/g, '.$1')).split('.'),
        r = n[0]
      return e || (e = {}), 1 === n.length ? e[r] : hr(e[r], n.slice(1).join('.'))
    }
  }
  var fr = 0
  function pr(e) {
    var t = Date.now(),
      n = fr ? t - fr : 0
    fr = t
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      i[a - 1] = arguments[a]
    return '['
      .concat(t, '][')
      .concat(n, 'ms][')
      .concat(e, ']：')
      .concat(i.map((e) => JSON.stringify(e)).join(' '))
  }
  function vr(e) {
    return Tn(e.substring(5))
  }
  var gr = dr((e) => {
    e = e || ((e) => e.tagName.startsWith('UNI-'))
    var t = HTMLElement.prototype,
      n = t.setAttribute
    t.setAttribute = function (t, r) {
      t.startsWith('data-') &&
        e(this) &&
        ((this.__uniDataset || (this.__uniDataset = {}))[vr(t)] = r)
      n.call(this, t, r)
    }
    var r = t.removeAttribute
    t.removeAttribute = function (t) {
      this.__uniDataset && t.startsWith('data-') && e(this) && delete this.__uniDataset[vr(t)],
        r.call(this, t)
    }
  })
  function mr(e) {
    return on({}, e.dataset, e.__uniDataset)
  }
  var _r = new RegExp('"[^"]+"|\'[^\']+\'|url\\([^)]+\\)|(\\d*\\.?\\d+)[r|u]px', 'g')
  function yr(e) {
    return { passive: e }
  }
  function br(e) {
    var { id: t, offsetTop: n, offsetLeft: r } = e
    return { id: t, dataset: mr(e), offsetTop: n, offsetLeft: r }
  }
  function wr(e) {
    if (fn(e)) return window.plus ? e() : void document.addEventListener('plusready', e)
  }
  var xr = /(?:Once|Passive|Capture)$/
  function Sr(e) {
    var t, n
    if (xr.test(e))
      for (t = {}; (n = e.match(xr)); )
        (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
    return [Mn(e.slice(2)), t]
  }
  var kr = (() => ({ stop: 1, prevent: 2, self: 4 }))(),
    Cr = 'class',
    Tr = 'style',
    Ar = '.vShow',
    Mr = '.vOwnerId',
    Er = '.vRenderjs',
    Or = 'change:',
    Lr = 1,
    zr = 2,
    Nr = 3,
    Ir = 4,
    Pr = 5,
    Dr = 6,
    Br = 7,
    Rr = 8,
    Fr = 9,
    qr = 10,
    jr = 12,
    Vr = 15,
    $r = 20
  function Hr(e, t, n) {
    var r,
      { clearTimeout: i, setTimeout: a } = n,
      o = function () {
        i(r)
        r = a(() => e.apply(this, arguments), t)
      }
    return (
      (o.cancel = function () {
        i(r)
      }),
      o
    )
  }
  var Wr = function () {}
  Wr.prototype = {
    _id: 1,
    on: function (e, t, n) {
      var r = this.e || (this.e = {})
      return (r[e] || (r[e] = [])).push({ fn: t, ctx: n, _id: this._id }), this._id++
    },
    once: function (e, t, n) {
      var r = this
      function i() {
        r.off(e, i), t.apply(n, arguments)
      }
      return (i._ = t), this.on(e, i, n)
    },
    emit: function (e) {
      for (
        var t = [].slice.call(arguments, 1),
          n = ((this.e || (this.e = {}))[e] || []).slice(),
          r = 0,
          i = n.length;
        r < i;
        r++
      )
        n[r].fn.apply(n[r].ctx, t)
      return this
    },
    off: function (e, t) {
      var n = this.e || (this.e = {}),
        r = n[e],
        i = []
      if (r && t) {
        for (var a = r.length - 1; a >= 0; a--)
          if (r[a].fn === t || r[a].fn._ === t || r[a]._id === t) {
            r.splice(a, 1)
            break
          }
        i = r
      }
      return i.length ? (n[e] = i) : delete n[e], this
    },
  }
  var Ur = Wr,
    Yr = ['{', '}']
  var Xr = /^(?:\d)+/,
    Zr = /^(?:\w)+/
  var Gr = 'zh-Hans',
    Kr = 'zh-Hant',
    Jr = 'en',
    Qr = 'fr',
    ei = 'es',
    ti = Object.prototype.hasOwnProperty,
    ni = (e, t) => ti.call(e, t),
    ri = new (class {
      constructor() {
        this._caches = Object.create(null)
      }
      interpolate(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Yr
        if (!t) return [e]
        var r = this._caches[e]
        return (
          r ||
            ((r = (function (e, t) {
              var [n, r] = t,
                i = [],
                a = 0,
                o = ''
              for (; a < e.length; ) {
                var s = e[a++]
                if (s === n) {
                  o && i.push({ type: 'text', value: o }), (o = '')
                  var l = ''
                  for (s = e[a++]; void 0 !== s && s !== r; ) (l += s), (s = e[a++])
                  var u = s === r,
                    c = Xr.test(l) ? 'list' : u && Zr.test(l) ? 'named' : 'unknown'
                  i.push({ value: l, type: c })
                } else o += s
              }
              return o && i.push({ type: 'text', value: o }), i
            })(e, n)),
            (this._caches[e] = r)),
          (function (e, t) {
            var n = [],
              r = 0,
              i = Array.isArray(t)
                ? 'list'
                : ((a = t), null !== a && 'object' == typeof a ? 'named' : 'unknown')
            var a
            if ('unknown' === i) return n
            for (; r < e.length; ) {
              var o = e[r]
              switch (o.type) {
                case 'text':
                  n.push(o.value)
                  break
                case 'list':
                  n.push(t[parseInt(o.value, 10)])
                  break
                case 'named':
                  'named' === i && n.push(t[o.value])
              }
              r++
            }
            return n
          })(r, t)
        )
      }
    })()
  function ii(e, t) {
    if (e) {
      if (((e = e.trim().replace(/_/g, '-')), t && t[e])) return e
      if ('chinese' === (e = e.toLowerCase())) return Gr
      if (0 === e.indexOf('zh'))
        return e.indexOf('-hans') > -1
          ? Gr
          : e.indexOf('-hant') > -1
            ? Kr
            : ((n = e), ['-tw', '-hk', '-mo', '-cht'].find((e) => -1 !== n.indexOf(e)) ? Kr : Gr)
      var n,
        r = [Jr, Qr, ei]
      t && Object.keys(t).length > 0 && (r = Object.keys(t))
      var i = (function (e, t) {
        return t.find((t) => 0 === e.indexOf(t))
      })(e, r)
      return i || void 0
    }
  }
  class ai {
    constructor(e) {
      var { locale: t, fallbackLocale: n, messages: r, watcher: i, formater: a } = e
      ;(this.locale = Jr),
        (this.fallbackLocale = Jr),
        (this.message = {}),
        (this.messages = {}),
        (this.watchers = []),
        n && (this.fallbackLocale = n),
        (this.formater = a || ri),
        (this.messages = r || {}),
        this.setLocale(t || Jr),
        i && this.watchLocale(i)
    }
    setLocale(e) {
      var t = this.locale
      ;(this.locale = ii(e, this.messages) || this.fallbackLocale),
        this.messages[this.locale] || (this.messages[this.locale] = {}),
        (this.message = this.messages[this.locale]),
        t !== this.locale &&
          this.watchers.forEach((e) => {
            e(this.locale, t)
          })
    }
    getLocale() {
      return this.locale
    }
    watchLocale(e) {
      var t = this.watchers.push(e) - 1
      return () => {
        this.watchers.splice(t, 1)
      }
    }
    add(e, t) {
      var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = this.messages[e]
      r
        ? n
          ? Object.assign(r, t)
          : Object.keys(t).forEach((e) => {
              ni(r, e) || (r[e] = t[e])
            })
        : (this.messages[e] = t)
    }
    f(e, t, n) {
      return this.formater.interpolate(e, t, n).join('')
    }
    t(e, t, n) {
      var r = this.message
      return (
        'string' == typeof t ? (t = ii(t, this.messages)) && (r = this.messages[t]) : (n = t),
        ni(r, e)
          ? this.formater.interpolate(r[e], n).join('')
          : (console.warn(
              'Cannot translate the value of keypath '.concat(
                e,
                '. Use the value of keypath as default.',
              ),
            ),
            e)
      )
    }
  }
  function oi(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0,
      r = arguments.length > 3 ? arguments[3] : void 0
    if ('string' != typeof e) {
      var i = [t, e]
      ;(e = i[0]), (t = i[1])
    }
    'string' != typeof e &&
      (e =
        'undefined' != typeof uni && uni.getLocale
          ? uni.getLocale()
          : 'undefined' != typeof window && window.getLocale
            ? window.getLocale()
            : Jr),
      'string' != typeof n &&
        (n = ('undefined' != typeof __uniConfig && __uniConfig.fallbackLocale) || Jr)
    var a = new ai({ locale: e, fallbackLocale: n, messages: t, watcher: r }),
      o = (e, t) => {
        if ('function' != typeof getApp)
          o = function (e, t) {
            return a.t(e, t)
          }
        else {
          var n = !1
          o = function (e, t) {
            var r = getApp().$vm
            return (
              r &&
                (r.$locale,
                n ||
                  ((n = !0),
                  (function (e, t) {
                    e.$watchLocale
                      ? e.$watchLocale((e) => {
                          t.setLocale(e)
                        })
                      : e.$watch(
                          () => e.$locale,
                          (e) => {
                            t.setLocale(e)
                          },
                        )
                  })(r, a))),
              a.t(e, t)
            )
          }
        }
        return o(e, t)
      }
    return {
      i18n: a,
      f: (e, t, n) => a.f(e, t, n),
      t: (e, t) => o(e, t),
      add(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
        return a.add(e, t, n)
      },
      watch: (e) => a.watchLocale(e),
      getLocale: () => a.getLocale(),
      setLocale: (e) => a.setLocale(e),
    }
  }
  var si,
    li = dr(
      () =>
        'undefined' != typeof __uniConfig &&
        __uniConfig.locales &&
        !!Object.keys(__uniConfig.locales).length,
    )
  function ui() {
    var e
    if (
      !si &&
      ((e =
        'function' == typeof getApp
          ? weex.requireModule('plus').getLanguage()
          : plus.webview.currentWebview().getStyle().locale),
      (si = oi(e)),
      li())
    ) {
      var t = Object.keys(__uniConfig.locales || {})
      t.length && t.forEach((e) => si.add(e, __uniConfig.locales[e])), si.setLocale(e)
    }
    return si
  }
  function ci(e, t, n) {
    return t.reduce((t, r, i) => ((t[e + r] = n[i]), t), {})
  }
  var di = dr(() => {
      var e = 'uni.picker.',
        t = ['done', 'cancel']
      ui().add(Jr, ci(e, t, ['Done', 'Cancel']), !1),
        ui().add(ei, ci(e, t, ['OK', 'Cancelar']), !1),
        ui().add(Qr, ci(e, t, ['OK', 'Annuler']), !1),
        ui().add(Gr, ci(e, t, ['完成', '取消']), !1),
        ui().add(Kr, ci(e, t, ['完成', '取消']), !1)
    }),
    hi = dr(() => {
      var e = 'uni.button.',
        t = ['feedback.title', 'feedback.send']
      ui().add(Jr, ci(e, t, ['feedback', 'send']), !1),
        ui().add(ei, ci(e, t, ['realimentación', 'enviar']), !1),
        ui().add(Qr, ci(e, t, ["retour d'information", 'envoyer']), !1),
        ui().add(Gr, ci(e, t, ['问题反馈', '发送']), !1),
        ui().add(Kr, ci(e, t, ['問題反饋', '發送']), !1)
    }),
    fi = dr(() => {
      var e = 'uni.chooseLocation.',
        t = ['search', 'cancel']
      ui().add(Jr, ci(e, t, ['Find Place', 'Cancel']), !1),
        ui().add(ei, ci(e, t, ['Encontrar', 'Cancelar']), !1),
        ui().add(Qr, ci(e, t, ['Trouve', 'Annuler']), !1),
        ui().add(Gr, ci(e, t, ['搜索地点', '取消']), !1),
        ui().add(Kr, ci(e, t, ['搜索地點', '取消']), !1)
    })
  function pi(e) {
    var t = new Ur()
    return {
      on: (e, n) => t.on(e, n),
      once: (e, n) => t.once(e, n),
      off: (e, n) => t.off(e, n),
      emit(e) {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
          r[i - 1] = arguments[i]
        return t.emit(e, ...r)
      },
      subscribe(n, r) {
        t[arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? 'once' : 'on'](
          ''.concat(e, '.').concat(n),
          r,
        )
      },
      unsubscribe(n, r) {
        t.off(''.concat(e, '.').concat(n), r)
      },
      subscribeHandler(n, r, i) {
        t.emit(''.concat(e, '.').concat(n), r, i)
      },
    }
  }
  var vi = 'invokeViewApi',
    gi = 'invokeServiceApi',
    mi = 1,
    _i = Object.create(null)
  function yi(e, t) {
    return e + '.' + t
  }
  function bi(e, t, n) {
    ;(t = yi(e, t)), _i[t] || (_i[t] = n)
  }
  function wi(e, t) {
    var { id: n, name: r, args: i } = e
    r = yi(t, r)
    var a = (e) => {
        n && UniViewJSBridge.publishHandler(vi + '.' + n, e)
      },
      o = _i[r]
    o ? o(i, a) : a({})
  }
  var xi,
    Si = on(pi('service'), {
      invokeServiceMethod: (e, t, n) => {
        var { subscribe: r, publishHandler: i } = UniViewJSBridge,
          a = n ? mi++ : 0
        n && r(gi + '.' + a, n, !0), i(gi, { id: a, name: e, args: t })
      },
    }),
    ki = 350,
    Ci = 10,
    Ti = yr(!0)
  function Ai() {
    xi && (clearTimeout(xi), (xi = null))
  }
  var Mi,
    Ei,
    Oi = 0,
    Li = 0
  function zi(e) {
    if ((Ai(), 1 === e.touches.length)) {
      var { pageX: t, pageY: n } = e.touches[0]
      ;(Oi = t),
        (Li = n),
        (xi = setTimeout(function () {
          var t = new CustomEvent('longpress', {
            bubbles: !0,
            cancelable: !0,
            target: e.target,
            currentTarget: e.currentTarget,
          })
          ;(t.touches = e.touches), (t.changedTouches = e.changedTouches), e.target.dispatchEvent(t)
        }, ki))
    }
  }
  function Ni(e) {
    if (xi) {
      if (1 !== e.touches.length) return Ai()
      var { pageX: t, pageY: n } = e.touches[0]
      return Math.abs(t - Oi) > Ci || Math.abs(n - Li) > Ci ? Ai() : void 0
    }
  }
  function Ii(e, t) {
    var n = Number(e)
    return isNaN(n) ? t : n
  }
  function Pi() {
    var e = __uniConfig.globalStyle || {},
      t = Ii(e.rpxCalcMaxDeviceWidth, 960),
      n = Ii(e.rpxCalcBaseDeviceWidth, 375)
    function r() {
      var e,
        r,
        i,
        a =
          ((e = /^Apple/.test(navigator.vendor) && 'number' == typeof window.orientation),
          (r = e && 90 === Math.abs(window.orientation)),
          (i = e ? Math[r ? 'max' : 'min'](screen.width, screen.height) : screen.width),
          Math.min(window.innerWidth, document.documentElement.clientWidth, i) || i)
      ;(a = a <= t ? a : n), (document.documentElement.style.fontSize = a / 23.4375 + 'px')
    }
    r(),
      document.addEventListener('DOMContentLoaded', r),
      window.addEventListener('load', r),
      window.addEventListener('resize', r)
  }
  class Di {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
      ;(this.detached = e),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this.parent = Mi),
        !e && Mi && (this.index = (Mi.scopes || (Mi.scopes = [])).push(this) - 1)
    }
    get active() {
      return this._active
    }
    run(e) {
      if (this._active) {
        var t = Mi
        try {
          return (Mi = this), e()
        } finally {
          Mi = t
        }
      }
    }
    on() {
      Mi = this
    }
    off() {
      Mi = this.parent
    }
    stop(e) {
      if (this._active) {
        var t, n
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop()
        for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]()
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0)
        if (!this.detached && this.parent && !e) {
          var r = this.parent.scopes.pop()
          r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
        }
        ;(this.parent = void 0), (this._active = !1)
      }
    }
  }
  class Bi {
    constructor(e, t, n, r) {
      ;(this.fn = e),
        (this.trigger = t),
        (this.scheduler = n),
        (this.active = !0),
        (this.deps = []),
        (this._dirtyLevel = 4),
        (this._trackId = 0),
        (this._runnings = 0),
        (this._shouldSchedule = !1),
        (this._depsLength = 0),
        (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mi
          t && t.active && t.effects.push(e)
        })(this, r)
    }
    get dirty() {
      if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
        ;(this._dirtyLevel = 1), Hi()
        for (var e = 0; e < this._depsLength; e++) {
          var t = this.deps[e]
          if (t.computed && (t.computed.value, this._dirtyLevel >= 4)) break
        }
        1 === this._dirtyLevel && (this._dirtyLevel = 0), Wi()
      }
      return this._dirtyLevel >= 4
    }
    set dirty(e) {
      this._dirtyLevel = e ? 4 : 0
    }
    run() {
      if (((this._dirtyLevel = 0), !this.active)) return this.fn()
      var e = ji,
        t = Ei
      try {
        return (ji = !0), (Ei = this), this._runnings++, Ri(this), this.fn()
      } finally {
        Fi(this), this._runnings--, (Ei = t), (ji = e)
      }
    }
    stop() {
      var e
      this.active &&
        (Ri(this), Fi(this), null == (e = this.onStop) || e.call(this), (this.active = !1))
    }
  }
  function Ri(e) {
    e._trackId++, (e._depsLength = 0)
  }
  function Fi(e) {
    if (e.deps.length > e._depsLength) {
      for (var t = e._depsLength; t < e.deps.length; t++) qi(e.deps[t], e)
      e.deps.length = e._depsLength
    }
  }
  function qi(e, t) {
    var n = e.get(t)
    void 0 !== n && t._trackId !== n && (e.delete(t), 0 === e.size && e.cleanup())
  }
  var ji = !0,
    Vi = 0,
    $i = []
  function Hi() {
    $i.push(ji), (ji = !1)
  }
  function Wi() {
    var e = $i.pop()
    ji = void 0 === e || e
  }
  function Ui() {
    Vi++
  }
  function Yi() {
    for (Vi--; !Vi && Zi.length; ) Zi.shift()()
  }
  function Xi(e, t, n) {
    if (t.get(e) !== e._trackId) {
      t.set(e, e._trackId)
      var r = e.deps[e._depsLength]
      r !== t ? (r && qi(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
    }
  }
  var Zi = []
  function Gi(e, t, n) {
    for (var r of (Ui(), e.keys())) {
      var i = void 0
      r._dirtyLevel < t &&
        (null != i ? i : (i = e.get(r) === r._trackId)) &&
        (r._shouldSchedule || (r._shouldSchedule = 0 === r._dirtyLevel), (r._dirtyLevel = t)),
        r._shouldSchedule &&
          (null != i ? i : (i = e.get(r) === r._trackId)) &&
          (r.trigger(),
          (r._runnings && !r.allowRecurse) ||
            2 === r._dirtyLevel ||
            ((r._shouldSchedule = !1), r.scheduler && Zi.push(r.scheduler)))
    }
    Yi()
  }
  var Ki = (e, t) => {
      var n = new Map()
      return (n.cleanup = e), (n.computed = t), n
    },
    Ji = new WeakMap(),
    Qi = Symbol(''),
    ea = Symbol('')
  function ta(e, t, n) {
    if (ji && Ei) {
      var r = Ji.get(e)
      r || Ji.set(e, (r = new Map()))
      var i = r.get(n)
      i || r.set(n, (i = Ki(() => r.delete(n)))), Xi(Ei, i)
    }
  }
  function na(e, t, n, r, i, a) {
    var o = Ji.get(e)
    if (o) {
      var s = []
      if ('clear' === t) s = [...o.values()]
      else if ('length' === n && cn(e)) {
        var l = Number(r)
        o.forEach((e, t) => {
          ;('length' === t || (!vn(t) && t >= l)) && s.push(e)
        })
      } else
        switch ((void 0 !== n && s.push(o.get(n)), t)) {
          case 'add':
            cn(e)
              ? xn(n) && s.push(o.get('length'))
              : (s.push(o.get(Qi)), dn(e) && s.push(o.get(ea)))
            break
          case 'delete':
            cn(e) || (s.push(o.get(Qi)), dn(e) && s.push(o.get(ea)))
            break
          case 'set':
            dn(e) && s.push(o.get(Qi))
        }
      for (var u of (Ui(), s)) u && Gi(u, 4)
      Yi()
    }
  }
  var ra = Kt('__proto__,__v_isRef,__isVue'),
    ia = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => 'arguments' !== e && 'caller' !== e)
        .map((e) => Symbol[e])
        .filter(vn),
    ),
    aa = oa()
  function oa() {
    var e = {}
    return (
      ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
        e[t] = function () {
          for (var e = Ua(this), n = 0, r = this.length; n < r; n++) ta(e, 0, n + '')
          for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
          var s = e[t](...a)
          return -1 === s || !1 === s ? e[t](...a.map(Ua)) : s
        }
      }),
      ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
        e[t] = function () {
          Hi(), Ui()
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
          var i = Ua(this)[t].apply(this, n)
          return Yi(), Wi(), i
        }
      }),
      e
    )
  }
  function sa(e) {
    var t = Ua(this)
    return ta(t, 0, e), t.hasOwnProperty(e)
  }
  class la {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
      ;(this._isReadonly = e), (this._isShallow = t)
    }
    get(e, t, n) {
      var r = this._isReadonly,
        i = this._isShallow
      if ('__v_isReactive' === t) return !r
      if ('__v_isReadonly' === t) return r
      if ('__v_isShallow' === t) return i
      if ('__v_raw' === t)
        return n === (r ? (i ? Ra : Ba) : i ? Da : Pa).get(e) ||
          Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
          ? e
          : void 0
      var a = cn(e)
      if (!r) {
        if (a && un(aa, t)) return Reflect.get(aa, t, n)
        if ('hasOwnProperty' === t) return sa
      }
      var o = Reflect.get(e, t, n)
      return (vn(t) ? ia.has(t) : ra(t))
        ? o
        : (r || ta(e, 0, t),
          i ? o : Qa(o) ? (a && xn(t) ? o : o.value) : gn(o) ? (r ? qa(o) : Fa(o)) : o)
    }
  }
  class ua extends la {
    constructor() {
      super(!1, arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
    }
    set(e, t, n, r) {
      var i = e[t]
      if (!this._isShallow) {
        var a = $a(i)
        if ((Ha(n) || $a(n) || ((i = Ua(i)), (n = Ua(n))), !cn(e) && Qa(i) && !Qa(n)))
          return !a && ((i.value = n), !0)
      }
      var o = cn(e) && xn(t) ? Number(t) < e.length : un(e, t),
        s = Reflect.set(e, t, n, r)
      return e === Ua(r) && (o ? Ln(n, i) && na(e, 'set', t, n) : na(e, 'add', t, n)), s
    }
    deleteProperty(e, t) {
      var n = un(e, t)
      e[t]
      var r = Reflect.deleteProperty(e, t)
      return r && n && na(e, 'delete', t, void 0), r
    }
    has(e, t) {
      var n = Reflect.has(e, t)
      return (vn(t) && ia.has(t)) || ta(e, 0, t), n
    }
    ownKeys(e) {
      return ta(e, 0, cn(e) ? 'length' : Qi), Reflect.ownKeys(e)
    }
  }
  class ca extends la {
    constructor() {
      super(!0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
    }
    set(e, t) {
      return !0
    }
    deleteProperty(e, t) {
      return !0
    }
  }
  var da = new ua(),
    ha = new ca(),
    fa = new ua(!0),
    pa = (e) => e,
    va = (e) => Reflect.getPrototypeOf(e)
  function ga(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = Ua((e = e.__v_raw)),
      a = Ua(t)
    n || (Ln(t, a) && ta(i, 0, t), ta(i, 0, a))
    var { has: o } = va(i),
      s = r ? pa : n ? Za : Xa
    return o.call(i, t) ? s(e.get(t)) : o.call(i, a) ? s(e.get(a)) : void (e !== i && e.get(t))
  }
  function ma(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = this.__v_raw,
      r = Ua(n),
      i = Ua(e)
    return t || (Ln(e, i) && ta(r, 0, e), ta(r, 0, i)), e === i ? n.has(e) : n.has(e) || n.has(i)
  }
  function _a(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
    return (e = e.__v_raw), !t && ta(Ua(e), 0, Qi), Reflect.get(e, 'size', e)
  }
  function ya(e) {
    e = Ua(e)
    var t = Ua(this)
    return va(t).has.call(t, e) || (t.add(e), na(t, 'add', e, e)), this
  }
  function ba(e, t) {
    t = Ua(t)
    var n = Ua(this),
      { has: r, get: i } = va(n),
      a = r.call(n, e)
    a || ((e = Ua(e)), (a = r.call(n, e)))
    var o = i.call(n, e)
    return n.set(e, t), a ? Ln(t, o) && na(n, 'set', e, t) : na(n, 'add', e, t), this
  }
  function wa(e) {
    var t = Ua(this),
      { has: n, get: r } = va(t),
      i = n.call(t, e)
    i || ((e = Ua(e)), (i = n.call(t, e))), r && r.call(t, e)
    var a = t.delete(e)
    return i && na(t, 'delete', e, void 0), a
  }
  function xa() {
    var e = Ua(this),
      t = 0 !== e.size,
      n = e.clear()
    return t && na(e, 'clear', void 0, void 0), n
  }
  function Sa(e, t) {
    return function (n, r) {
      var i = this,
        a = i.__v_raw,
        o = Ua(a),
        s = t ? pa : e ? Za : Xa
      return !e && ta(o, 0, Qi), a.forEach((e, t) => n.call(r, s(e), s(t), i))
    }
  }
  function ka(e, t, n) {
    return function () {
      var r = this.__v_raw,
        i = Ua(r),
        a = dn(i),
        o = 'entries' === e || (e === Symbol.iterator && a),
        s = 'keys' === e && a,
        l = r[e](...arguments),
        u = n ? pa : t ? Za : Xa
      return (
        !t && ta(i, 0, s ? ea : Qi),
        {
          next() {
            var { value: e, done: t } = l.next()
            return t ? { value: e, done: t } : { value: o ? [u(e[0]), u(e[1])] : u(e), done: t }
          },
          [Symbol.iterator]() {
            return this
          },
        }
      )
    }
  }
  function Ca(e) {
    return function () {
      return 'delete' !== e && ('clear' === e ? void 0 : this)
    }
  }
  function Ta() {
    var e = {
        get(e) {
          return ga(this, e)
        },
        get size() {
          return _a(this)
        },
        has: ma,
        add: ya,
        set: ba,
        delete: wa,
        clear: xa,
        forEach: Sa(!1, !1),
      },
      t = {
        get(e) {
          return ga(this, e, !1, !0)
        },
        get size() {
          return _a(this)
        },
        has: ma,
        add: ya,
        set: ba,
        delete: wa,
        clear: xa,
        forEach: Sa(!1, !0),
      },
      n = {
        get(e) {
          return ga(this, e, !0)
        },
        get size() {
          return _a(this, !0)
        },
        has(e) {
          return ma.call(this, e, !0)
        },
        add: Ca('add'),
        set: Ca('set'),
        delete: Ca('delete'),
        clear: Ca('clear'),
        forEach: Sa(!0, !1),
      },
      r = {
        get(e) {
          return ga(this, e, !0, !0)
        },
        get size() {
          return _a(this, !0)
        },
        has(e) {
          return ma.call(this, e, !0)
        },
        add: Ca('add'),
        set: Ca('set'),
        delete: Ca('delete'),
        clear: Ca('clear'),
        forEach: Sa(!0, !0),
      }
    return (
      ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
        ;(e[i] = ka(i, !1, !1)),
          (n[i] = ka(i, !0, !1)),
          (t[i] = ka(i, !1, !0)),
          (r[i] = ka(i, !0, !0))
      }),
      [e, n, t, r]
    )
  }
  var [Aa, Ma, Ea, Oa] = Ta()
  function La(e, t) {
    var n = t ? (e ? Oa : Ea) : e ? Ma : Aa
    return (t, r, i) =>
      '__v_isReactive' === r
        ? !e
        : '__v_isReadonly' === r
          ? e
          : '__v_raw' === r
            ? t
            : Reflect.get(un(n, r) && r in t ? n : t, r, i)
  }
  var za = { get: La(!1, !1) },
    Na = { get: La(!1, !0) },
    Ia = { get: La(!0, !1) },
    Pa = new WeakMap(),
    Da = new WeakMap(),
    Ba = new WeakMap(),
    Ra = new WeakMap()
  function Fa(e) {
    return $a(e) ? e : ja(e, !1, da, za, Pa)
  }
  function qa(e) {
    return ja(e, !0, ha, Ia, Ba)
  }
  function ja(e, t, n, r, i) {
    if (!gn(e)) return e
    if (e.__v_raw && (!t || !e.__v_isReactive)) return e
    var a = i.get(e)
    if (a) return a
    var o,
      s =
        (o = e).__v_skip || !Object.isExtensible(o)
          ? 0
          : (function (e) {
              switch (e) {
                case 'Object':
                case 'Array':
                  return 1
                case 'Map':
                case 'Set':
                case 'WeakMap':
                case 'WeakSet':
                  return 2
                default:
                  return 0
              }
            })(bn(o))
    if (0 === s) return e
    var l = new Proxy(e, 2 === s ? r : n)
    return i.set(e, l), l
  }
  function Va(e) {
    return $a(e) ? Va(e.__v_raw) : !(!e || !e.__v_isReactive)
  }
  function $a(e) {
    return !(!e || !e.__v_isReadonly)
  }
  function Ha(e) {
    return !(!e || !e.__v_isShallow)
  }
  function Wa(e) {
    return Va(e) || $a(e)
  }
  function Ua(e) {
    var t = e && e.__v_raw
    return t ? Ua(t) : e
  }
  function Ya(e) {
    return Object.isExtensible(e) && Nn(e, '__v_skip', !0), e
  }
  var Xa = (e) => (gn(e) ? Fa(e) : e),
    Za = (e) => (gn(e) ? qa(e) : e)
  class Ga {
    constructor(e, t, n, r) {
      ;(this.getter = e),
        (this._setter = t),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this.__v_isReadonly = !1),
        (this.effect = new Bi(
          () => e(this._value),
          () => Ja(this, 2 === this.effect._dirtyLevel ? 2 : 3),
        )),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !r),
        (this.__v_isReadonly = n)
    }
    get value() {
      var e = Ua(this)
      return (
        (e._cacheable && !e.effect.dirty) || !Ln(e._value, (e._value = e.effect.run())) || Ja(e, 4),
        Ka(e),
        e.effect._dirtyLevel >= 2 && Ja(e, 2),
        e._value
      )
    }
    set value(e) {
      this._setter(e)
    }
    get _dirty() {
      return this.effect.dirty
    }
    set _dirty(e) {
      this.effect.dirty = e
    }
  }
  function Ka(e) {
    var t
    ji &&
      Ei &&
      ((e = Ua(e)),
      Xi(
        Ei,
        null != (t = e.dep)
          ? t
          : (e.dep = Ki(() => (e.dep = void 0), e instanceof Ga ? e : void 0)),
      ))
  }
  function Ja(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
      n = (e = Ua(e)).dep
    n && Gi(n, t)
  }
  function Qa(e) {
    return !(!e || !0 !== e.__v_isRef)
  }
  function eo(e) {
    return no(e, !1)
  }
  function to(e) {
    return no(e, !0)
  }
  function no(e, t) {
    return Qa(e) ? e : new ro(e, t)
  }
  class ro {
    constructor(e, t) {
      ;(this.__v_isShallow = t),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = t ? e : Ua(e)),
        (this._value = t ? e : Xa(e))
    }
    get value() {
      return Ka(this), this._value
    }
    set value(e) {
      var t = this.__v_isShallow || Ha(e) || $a(e)
      ;(e = t ? e : Ua(e)),
        Ln(e, this._rawValue) &&
          ((this._rawValue = e), (this._value = t ? e : Xa(e)), Ja(this, 4, e))
    }
  }
  var io = {
    get: (e, t, n) => {
      return Qa((r = Reflect.get(e, t, n))) ? r.value : r
      var r
    },
    set: (e, t, n, r) => {
      var i = e[t]
      return Qa(i) && !Qa(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, r)
    },
  }
  function ao(e) {
    return Va(e) ? e : new Proxy(e, io)
  }
  function oo(e, t, n, r) {
    try {
      return r ? e(...r) : e()
    } catch (i) {
      lo(i, t, n)
    }
  }
  function so(e, t, n, r) {
    if (fn(e)) {
      var i = oo(e, t, n, r)
      return (
        i &&
          mn(i) &&
          i.catch((e) => {
            lo(e, t, n)
          }),
        i
      )
    }
    for (var a = [], o = 0; o < e.length; o++) a.push(so(e[o], t, n, r))
    return a
  }
  function lo(e, t, n) {
    if ((t && t.vnode, t)) {
      for (
        var r = t.parent, i = t.proxy, a = 'https://vuejs.org/error-reference/#runtime-'.concat(n);
        r;

      ) {
        var o = r.ec
        if (o) for (var s = 0; s < o.length; s++) if (!1 === o[s](e, i, a)) return
        r = r.parent
      }
      var l = t.appContext.config.errorHandler
      if (l) return void oo(l, null, 10, [e, i, a])
    }
    !(function (e) {
      e instanceof Error ? console.error(e.message + '\n' + e.stack) : console.error(e)
    })(e)
  }
  var uo = !1,
    co = !1,
    ho = [],
    fo = 0,
    po = [],
    vo = null,
    go = 0,
    mo = Promise.resolve(),
    _o = null
  function yo(e) {
    var t = _o || mo
    return e ? t.then(this ? e.bind(this) : e) : t
  }
  function bo(e) {
    ;(ho.length && ho.includes(e, uo && e.allowRecurse ? fo + 1 : fo)) ||
      (null == e.id
        ? ho.push(e)
        : ho.splice(
            (function (e) {
              for (var t = fo + 1, n = ho.length; t < n; ) {
                var r = (t + n) >>> 1,
                  i = ho[r],
                  a = ko(i)
                a < e || (a === e && i.pre) ? (t = r + 1) : (n = r)
              }
              return t
            })(e.id),
            0,
            e,
          ),
      wo())
  }
  function wo() {
    uo || co || ((co = !0), (_o = mo.then(To)))
  }
  function xo(e, t) {
    for (
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uo ? fo + 1 : 0;
      n < ho.length;
      n++
    ) {
      var r = ho[n]
      if (r && r.pre) {
        if (e && r.id !== e.uid) continue
        ho.splice(n, 1), n--, r()
      }
    }
  }
  function So(e) {
    if (po.length) {
      var t = [...new Set(po)].sort((e, t) => ko(e) - ko(t))
      if (((po.length = 0), vo)) return void vo.push(...t)
      for (vo = t, go = 0; go < vo.length; go++) vo[go]()
      ;(vo = null), (go = 0)
    }
  }
  var ko = (e) => (null == e.id ? 1 / 0 : e.id),
    Co = (e, t) => {
      var n = ko(e) - ko(t)
      if (0 === n) {
        if (e.pre && !t.pre) return -1
        if (t.pre && !e.pre) return 1
      }
      return n
    }
  function To(e) {
    ;(co = !1), (uo = !0), ho.sort(Co)
    try {
      for (fo = 0; fo < ho.length; fo++) {
        var t = ho[fo]
        t && !1 !== t.active && oo(t, null, 14)
      }
    } finally {
      ;(fo = 0), (ho.length = 0), So(), (uo = !1), (_o = null), (ho.length || po.length) && To()
    }
  }
  function Ao(e, t) {
    if (!e.isUnmounted) {
      for (
        var n = e.vnode.props || Qt, r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), a = 2;
        a < r;
        a++
      )
        i[a - 2] = arguments[a]
      var o,
        s = i,
        l = t.startsWith('update:'),
        u = l && t.slice(7)
      if (u && u in n) {
        var c = ''.concat('modelValue' === u ? 'model' : u, 'Modifiers'),
          { number: d, trim: h } = n[c] || Qt
        h && (s = i.map((e) => (pn(e) ? e.trim() : e))), d && (s = i.map(In))
      }
      var f = n[(o = On(t))] || n[(o = On(Tn(t)))]
      !f && l && (f = n[(o = On(Mn(t)))]), f && so(f, e, 6, s)
      var p = n[o + 'Once']
      if (p) {
        if (e.emitted) {
          if (e.emitted[o]) return
        } else e.emitted = {}
        ;(e.emitted[o] = !0), so(p, e, 6, s)
      }
    }
  }
  function Mo(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = t.emitsCache,
      i = r.get(e)
    if (void 0 !== i) return i
    var a = e.emits,
      o = {},
      s = !1
    if (!fn(e)) {
      var l = (e) => {
        var n = Mo(e, t, !0)
        n && ((s = !0), on(o, n))
      }
      !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return a || s
      ? (cn(a) ? a.forEach((e) => (o[e] = null)) : on(o, a), gn(e) && r.set(e, o), o)
      : (gn(e) && r.set(e, null), null)
  }
  function Eo(e, t) {
    return (
      !(!e || !rn(t)) &&
      ((t = t.slice(2).replace(/Once$/, '')),
      un(e, t[0].toLowerCase() + t.slice(1)) || un(e, Mn(t)) || un(e, t))
    )
  }
  var Oo = null,
    Lo = null
  function zo(e) {
    var t = Oo
    return (Oo = e), (Lo = (e && e.type.__scopeId) || null), t
  }
  function No(e) {
    var t,
      n,
      {
        type: r,
        vnode: i,
        proxy: a,
        withProxy: o,
        props: s,
        propsOptions: [l],
        slots: u,
        attrs: c,
        emit: d,
        render: h,
        renderCache: f,
        data: p,
        setupState: v,
        ctx: g,
        inheritAttrs: m,
      } = e,
      _ = zo(e)
    try {
      if (4 & i.shapeFlag) {
        var y = o || a,
          b = y
        ;(t = yl(h.call(b, y, f, s, v, p, g))), (n = c)
      } else {
        var w = r
        0,
          (t = yl(w.length > 1 ? w(s, { attrs: c, slots: u, emit: d }) : w(s, null))),
          (n = r.props ? c : Io(c))
      }
    } catch (C) {
      lo(C, e, 1), (t = gl(ol))
    }
    var x = t
    if (n && !1 !== m) {
      var S = Object.keys(n),
        { shapeFlag: k } = x
      S.length && 7 & k && (l && S.some(an) && (n = Po(n, l)), (x = ml(x, n)))
    }
    return (
      i.dirs && ((x = ml(x)).dirs = x.dirs ? x.dirs.concat(i.dirs) : i.dirs),
      i.transition && (x.transition = i.transition),
      (t = x),
      zo(_),
      t
    )
  }
  var Io = (e) => {
      var t
      for (var n in e) ('class' === n || 'style' === n || rn(n)) && ((t || (t = {}))[n] = e[n])
      return t
    },
    Po = (e, t) => {
      var n = {}
      for (var r in e) (an(r) && r.slice(9) in t) || (n[r] = e[r])
      return n
    }
  function Do(e, t, n) {
    var r = Object.keys(t)
    if (r.length !== Object.keys(e).length) return !0
    for (var i = 0; i < r.length; i++) {
      var a = r[i]
      if (t[a] !== e[a] && !Eo(n, a)) return !0
    }
    return !1
  }
  var Bo = Symbol.for('v-ndc')
  var Ro = Symbol.for('v-scx'),
    Fo = () => Ps(Ro)
  var qo = {}
  function jo(e, t, n) {
    return Vo(e, t, n)
  }
  function Vo(e, t) {
    var {
      immediate: n,
      deep: r,
      flush: i,
      once: a,
      onTrack: o,
      onTrigger: s,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qt
    if (t && a) {
      var l = t
      t = function () {
        l(...arguments), k()
      }
    }
    var u,
      c,
      d = Ml,
      h = (e) => (!0 === r ? e : Wo(e, !1 === r ? 1 : void 0)),
      f = !1,
      p = !1
    if (
      (Qa(e)
        ? ((u = () => e.value), (f = Ha(e)))
        : Va(e)
          ? ((u = () => h(e)), (f = !0))
          : cn(e)
            ? ((p = !0),
              (f = e.some((e) => Va(e) || Ha(e))),
              (u = () =>
                e.map((e) => (Qa(e) ? e.value : Va(e) ? h(e) : fn(e) ? oo(e, d, 2) : void 0))))
            : (u = fn(e) ? (t ? () => oo(e, d, 2) : () => (c && c(), so(e, d, 3, [m]))) : tn),
      t && r)
    ) {
      var v = u
      u = () => Wo(v())
    }
    var g,
      m = (e) => {
        c = x.onStop = () => {
          oo(e, d, 4), (c = x.onStop = void 0)
        }
      }
    if (Dl) {
      if (((m = tn), t ? n && so(t, d, 3, [u(), p ? [] : void 0, m]) : u(), 'sync' !== i)) return tn
      var _ = Fo()
      g = _.__watcherHandles || (_.__watcherHandles = [])
    }
    var y,
      b = p ? new Array(e.length).fill(qo) : qo,
      w = () => {
        if (x.active && x.dirty)
          if (t) {
            var e = x.run()
            ;(r || f || (p ? e.some((e, t) => Ln(e, b[t])) : Ln(e, b))) &&
              (c && c(),
              so(t, d, 3, [e, b === qo ? void 0 : p && b[0] === qo ? [] : b, m]),
              (b = e))
          } else x.run()
      }
    ;(w.allowRecurse = !!t),
      'sync' === i
        ? (y = w)
        : 'post' === i
          ? (y = () => Js(w, d && d.suspense))
          : ((w.pre = !0), d && (w.id = d.uid), (y = () => bo(w)))
    var x = new Bi(u, tn, y),
      S = Mi,
      k = () => {
        x.stop(), S && sn(S.effects, x)
      }
    return (
      t ? (n ? w() : (b = x.run())) : 'post' === i ? Js(x.run.bind(x), d && d.suspense) : x.run(),
      g && g.push(k),
      k
    )
  }
  function $o(e, t, n) {
    var r,
      i = this.proxy,
      a = pn(e) ? (e.includes('.') ? Ho(i, e) : () => i[e]) : e.bind(i, i)
    fn(t) ? (r = t) : ((r = t.handler), (n = t))
    var o = zl(this),
      s = Vo(a, r.bind(i), n)
    return o(), s
  }
  function Ho(e, t) {
    var n = t.split('.')
    return () => {
      for (var t = e, r = 0; r < n.length && t; r++) t = t[n[r]]
      return t
    }
  }
  function Wo(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      r = arguments.length > 3 ? arguments[3] : void 0
    if (!gn(e) || e.__v_skip) return e
    if (t && t > 0) {
      if (n >= t) return e
      n++
    }
    if ((r = r || new Set()).has(e)) return e
    if ((r.add(e), Qa(e))) Wo(e.value, t, n, r)
    else if (cn(e)) for (var i = 0; i < e.length; i++) Wo(e[i], t, n, r)
    else if (hn(e) || dn(e))
      e.forEach((e) => {
        Wo(e, t, n, r)
      })
    else if (wn(e)) for (var a in e) Wo(e[a], t, n, r)
    return e
  }
  function Uo(e, t) {
    if (null === Oo) return e
    for (var n = Fl(Oo) || Oo.proxy, r = e.dirs || (e.dirs = []), i = 0; i < t.length; i++) {
      var [a, o, s, l = Qt] = t[i]
      a &&
        (fn(a) && (a = { mounted: a, updated: a }),
        a.deep && Wo(o),
        r.push({ dir: a, instance: n, value: o, oldValue: void 0, arg: s, modifiers: l }))
    }
    return e
  }
  function Yo(e, t, n, r) {
    for (var i = e.dirs, a = t && t.dirs, o = 0; o < i.length; o++) {
      var s = i[o]
      a && (s.oldValue = a[o].value)
      var l = s.dir[r]
      l && (Hi(), so(l, n, 8, [e.el, s, e, t]), Wi())
    }
  }
  /*! #__NO_SIDE_EFFECTS__ */ function Xo(e, t) {
    return fn(e) ? (() => on({ name: e.name }, t, { setup: e }))() : e
  }
  var Zo = (e) => !!e.type.__asyncLoader,
    Go = (e) => e.type.__isKeepAlive
  function Ko(e, t) {
    Qo(e, 'a', t)
  }
  function Jo(e, t) {
    Qo(e, 'da', t)
  }
  function Qo(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ml,
      r =
        e.__wdc ||
        (e.__wdc = () => {
          for (var t = n; t; ) {
            if (t.isDeactivated) return
            t = t.parent
          }
          return e()
        })
    if ((ts(t, r, n), n))
      for (var i = n.parent; i && i.parent; ) Go(i.parent.vnode) && es(r, t, n, i), (i = i.parent)
  }
  function es(e, t, n, r) {
    var i = ts(t, e, r, !0)
    ls(() => {
      sn(r[t], i)
    }, n)
  }
  function ts(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ml,
      r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
    if (n) {
      var i = n[e] || (n[e] = []),
        a =
          t.__weh ||
          (t.__weh = function () {
            if (!n.isUnmounted) {
              Hi()
              for (var r = zl(n), i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                a[o] = arguments[o]
              var s = so(t, n, e, a)
              return r(), Wi(), s
            }
          })
      return r ? i.unshift(a) : i.push(a), a
    }
  }
  var ns = (e) =>
      function (t) {
        return (
          (!Dl || 'sp' === e) &&
          ts(
            e,
            function () {
              return t(...arguments)
            },
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ml,
          )
        )
      },
    rs = ns('bm'),
    is = ns('m'),
    as = ns('bu'),
    os = ns('u'),
    ss = ns('bum'),
    ls = ns('um'),
    us = ns('sp'),
    cs = ns('rtg'),
    ds = ns('rtc')
  function hs(e) {
    ts('ec', e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ml)
  }
  var fs = (e) => (e ? (Il(e) ? Fl(e) || e.proxy : fs(e.parent)) : null),
    ps = on(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => fs(e.parent),
      $root: (e) => fs(e.root),
      $emit: (e) => e.emit,
      $options: (e) => xs(e),
      $forceUpdate: (e) =>
        e.f ||
        (e.f = () => {
          ;(e.effect.dirty = !0), bo(e.update)
        }),
      $nextTick: (e) => e.n || (e.n = yo.bind(e.proxy)),
      $watch: (e) => $o.bind(e),
    }),
    vs = (e, t) => e !== Qt && !e.__isScriptSetup && un(e, t),
    gs = {
      get(e, t) {
        var n,
          { _: r } = e,
          { ctx: i, setupState: a, data: o, props: s, accessCache: l, type: u, appContext: c } = r
        if ('$' !== t[0]) {
          var d = l[t]
          if (void 0 !== d)
            switch (d) {
              case 1:
                return a[t]
              case 2:
                return o[t]
              case 4:
                return i[t]
              case 3:
                return s[t]
            }
          else {
            if (vs(a, t)) return (l[t] = 1), a[t]
            if (o !== Qt && un(o, t)) return (l[t] = 2), o[t]
            if ((n = r.propsOptions[0]) && un(n, t)) return (l[t] = 3), s[t]
            if (i !== Qt && un(i, t)) return (l[t] = 4), i[t]
            _s && (l[t] = 0)
          }
        }
        var h,
          f,
          p = ps[t]
        return p
          ? ('$attrs' === t && ta(r, 0, t), p(r))
          : (h = u.__cssModules) && (h = h[t])
            ? h
            : i !== Qt && un(i, t)
              ? ((l[t] = 4), i[t])
              : ((f = c.config.globalProperties), un(f, t) ? f[t] : void 0)
      },
      set(e, t, n) {
        var { _: r } = e,
          { data: i, setupState: a, ctx: o } = r
        return vs(a, t)
          ? ((a[t] = n), !0)
          : i !== Qt && un(i, t)
            ? ((i[t] = n), !0)
            : !un(r.props, t) && ('$' !== t[0] || !(t.slice(1) in r)) && ((o[t] = n), !0)
      },
      has(e, t) {
        var n,
          {
            _: { data: r, setupState: i, accessCache: a, ctx: o, appContext: s, propsOptions: l },
          } = e
        return (
          !!a[t] ||
          (r !== Qt && un(r, t)) ||
          vs(i, t) ||
          ((n = l[0]) && un(n, t)) ||
          un(o, t) ||
          un(ps, t) ||
          un(s.config.globalProperties, t)
        )
      },
      defineProperty(e, t, n) {
        return (
          null != n.get
            ? (e._.accessCache[t] = 0)
            : un(n, 'value') && this.set(e, t, n.value, null),
          Reflect.defineProperty(e, t, n)
        )
      },
    }
  function ms(e) {
    return cn(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e
  }
  var _s = !0
  function ys(e) {
    var t = xs(e),
      n = e.proxy,
      r = e.ctx
    ;(_s = !1), t.beforeCreate && bs(t.beforeCreate, e, 'bc')
    var i,
      {
        data: a,
        computed: o,
        methods: s,
        watch: l,
        provide: u,
        inject: c,
        created: d,
        beforeMount: h,
        mounted: f,
        beforeUpdate: p,
        updated: v,
        activated: g,
        deactivated: m,
        beforeDestroy: _,
        beforeUnmount: y,
        destroyed: b,
        unmounted: w,
        render: x,
        renderTracked: S,
        renderTriggered: k,
        errorCaptured: C,
        serverPrefetch: T,
        expose: A,
        inheritAttrs: M,
        components: E,
        directives: O,
        filters: L,
      } = t
    if (
      (c &&
        (function (e, t) {
          cn(e) && (e = Ts(e))
          var n = function (n) {
            var r = e[n],
              i = void 0
            Qa(
              (i = gn(r)
                ? 'default' in r
                  ? Ps(r.from || n, r.default, !0)
                  : Ps(r.from || n)
                : Ps(r)),
            )
              ? Object.defineProperty(t, n, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => i.value,
                  set: (e) => (i.value = e),
                })
              : (t[n] = i)
          }
          for (var r in e) n(r)
        })(c, r),
      s)
    )
      for (var z in s) {
        var N = s[z]
        fn(N) && (r[z] = N.bind(n))
      }
    if ((a && ((i = a.call(n, n)), gn(i) && (e.data = Fa(i))), (_s = !0), o)) {
      var I = function (e) {
        var t = o[e],
          i = fn(t) ? t.bind(n, n) : fn(t.get) ? t.get.bind(n, n) : tn,
          a = !fn(t) && fn(t.set) ? t.set.bind(n) : tn,
          s = ql({ get: i, set: a })
        Object.defineProperty(r, e, {
          enumerable: !0,
          configurable: !0,
          get: () => s.value,
          set: (e) => (s.value = e),
        })
      }
      for (var P in o) I(P)
    }
    if (l) for (var D in l) ws(l[D], r, n, D)
    if (u) {
      var B = fn(u) ? u.call(n) : u
      Reflect.ownKeys(B).forEach((e) => {
        Is(e, B[e])
      })
    }
    function R(e, t) {
      cn(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n))
    }
    if (
      (d && bs(d, e, 'c'),
      R(rs, h),
      R(is, f),
      R(as, p),
      R(os, v),
      R(Ko, g),
      R(Jo, m),
      R(hs, C),
      R(ds, S),
      R(cs, k),
      R(ss, y),
      R(ls, w),
      R(us, T),
      cn(A))
    )
      if (A.length) {
        var F = e.exposed || (e.exposed = {})
        A.forEach((e) => {
          Object.defineProperty(F, e, { get: () => n[e], set: (t) => (n[e] = t) })
        })
      } else e.exposed || (e.exposed = {})
    x && e.render === tn && (e.render = x),
      null != M && (e.inheritAttrs = M),
      E && (e.components = E),
      O && (e.directives = O)
  }
  function bs(e, t, n) {
    so(cn(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n)
  }
  function ws(e, t, n, r) {
    var i = r.includes('.') ? Ho(n, r) : () => n[r]
    if (pn(e)) {
      var a = t[e]
      fn(a) && jo(i, a)
    } else if (fn(e)) jo(i, e.bind(n))
    else if (gn(e))
      if (cn(e)) e.forEach((e) => ws(e, t, n, r))
      else {
        var o = fn(e.handler) ? e.handler.bind(n) : t[e.handler]
        fn(o) && jo(i, o, e)
      }
  }
  function xs(e) {
    var t,
      n = e.type,
      { mixins: r, extends: i } = n,
      {
        mixins: a,
        optionsCache: o,
        config: { optionMergeStrategies: s },
      } = e.appContext,
      l = o.get(n)
    return (
      l
        ? (t = l)
        : a.length || r || i
          ? ((t = {}), a.length && a.forEach((e) => Ss(t, e, s, !0)), Ss(t, n, s))
          : (t = n),
      gn(n) && o.set(n, t),
      t
    )
  }
  function Ss(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      { mixins: i, extends: a } = t
    for (var o in (a && Ss(e, a, n, !0), i && i.forEach((t) => Ss(e, t, n, !0)), t))
      if (r && 'expose' === o);
      else {
        var s = ks[o] || (n && n[o])
        e[o] = s ? s(e[o], t[o]) : t[o]
      }
    return e
  }
  var ks = {
    data: Cs,
    props: Es,
    emits: Es,
    methods: Ms,
    computed: Ms,
    beforeCreate: As,
    created: As,
    beforeMount: As,
    mounted: As,
    beforeUpdate: As,
    updated: As,
    beforeDestroy: As,
    beforeUnmount: As,
    destroyed: As,
    unmounted: As,
    activated: As,
    deactivated: As,
    errorCaptured: As,
    serverPrefetch: As,
    components: Ms,
    directives: Ms,
    watch: function (e, t) {
      if (!e) return t
      if (!t) return e
      var n = on(Object.create(null), e)
      for (var r in t) n[r] = As(e[r], t[r])
      return n
    },
    provide: Cs,
    inject: function (e, t) {
      return Ms(Ts(e), Ts(t))
    },
  }
  function Cs(e, t) {
    return t
      ? e
        ? function () {
            return on(fn(e) ? e.call(this, this) : e, fn(t) ? t.call(this, this) : t)
          }
        : t
      : e
  }
  function Ts(e) {
    if (cn(e)) {
      for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = e[n]
      return t
    }
    return e
  }
  function As(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
  }
  function Ms(e, t) {
    return e ? on(Object.create(null), e, t) : t
  }
  function Es(e, t) {
    return e
      ? cn(e) && cn(t)
        ? [...new Set([...e, ...t])]
        : on(Object.create(null), ms(e), ms(null != t ? t : {}))
      : t
  }
  function Os() {
    return {
      app: null,
      config: {
        isNativeTag: nn,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    }
  }
  var Ls = 0
  function zs(e, t) {
    return function (n) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
      fn(n) || (n = on({}, n)), null == r || gn(r) || (r = null)
      var i = Os(),
        a = new WeakSet(),
        o = !1,
        s = (i.app = {
          _uid: Ls++,
          _component: n,
          _props: r,
          _container: null,
          _context: i,
          _instance: null,
          version: Vl,
          get config() {
            return i.config
          },
          set config(e) {},
          use(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
              n[r - 1] = arguments[r]
            return (
              a.has(e) ||
                (e && fn(e.install)
                  ? (a.add(e), e.install(s, ...n))
                  : fn(e) && (a.add(e), e(s, ...n))),
              s
            )
          },
          mixin: (e) => (i.mixins.includes(e) || i.mixins.push(e), s),
          component: (e, t) => (t ? ((i.components[e] = t), s) : i.components[e]),
          directive: (e, t) => (t ? ((i.directives[e] = t), s) : i.directives[e]),
          mount(a, l, u) {
            if (!o) {
              var c = gl(n, r)
              return (
                (c.appContext = i),
                !0 === u ? (u = 'svg') : !1 === u && (u = void 0),
                l && t ? t(c, a) : e(c, a, u),
                (o = !0),
                (s._container = a),
                (a.__vue_app__ = s),
                Fl(c.component) || c.component.proxy
              )
            }
          },
          unmount() {
            o && (e(null, s._container), delete s._container.__vue_app__)
          },
          provide: (e, t) => ((i.provides[e] = t), s),
          runWithContext(e) {
            var t = Ns
            Ns = s
            try {
              return e()
            } finally {
              Ns = t
            }
          },
        })
      return s
    }
  }
  var Ns = null
  function Is(e, t) {
    if (Ml) {
      var n = Ml.provides,
        r = Ml.parent && Ml.parent.provides
      r === n && (n = Ml.provides = Object.create(r)), (n[e] = t)
    } else;
  }
  function Ps(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = Ml || Oo
    if (r || Ns) {
      var i = r
        ? null == r.parent
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides
        : Ns._context.provides
      if (i && e in i) return i[e]
      if (arguments.length > 1) return n && fn(t) ? t.call(r && r.proxy) : t
    }
  }
  function Ds(e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = {},
      a = {}
    for (var o in (Nn(a, fl, 1),
    (e.propsDefaults = Object.create(null)),
    Bs(e, t, i, a),
    e.propsOptions[0]))
      o in i || (i[o] = void 0)
    n ? (e.props = r ? i : ja(i, !1, fa, Na, Da)) : e.type.props ? (e.props = i) : (e.props = a),
      (e.attrs = a)
  }
  function Bs(e, t, n, r) {
    var i,
      [a, o] = e.propsOptions,
      s = !1
    if (t)
      for (var l in t)
        if (!Sn(l)) {
          var u = t[l],
            c = void 0
          a && un(a, (c = Tn(l)))
            ? o && o.includes(c)
              ? ((i || (i = {}))[c] = u)
              : (n[c] = u)
            : Eo(e.emitsOptions, l) || (l in r && u === r[l]) || ((r[l] = u), (s = !0))
        }
    if (o)
      for (var d = Ua(n), h = i || Qt, f = 0; f < o.length; f++) {
        var p = o[f]
        n[p] = Rs(a, d, p, h[p], e, !un(h, p))
      }
    return s
  }
  function Rs(e, t, n, r, i, a) {
    var o = e[n]
    if (null != o) {
      var s = un(o, 'default')
      if (s && void 0 === r) {
        var l = o.default
        if (o.type !== Function && !o.skipFactory && fn(l)) {
          var { propsDefaults: u } = i
          if (n in u) r = u[n]
          else {
            var c = zl(i)
            ;(r = u[n] = l.call(null, t)), c()
          }
        } else r = l
      }
      o[0] && (a && !s ? (r = !1) : !o[1] || ('' !== r && r !== Mn(n)) || (r = !0))
    }
    return r
  }
  function Fs(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = t.propsCache,
      i = r.get(e)
    if (i) return i
    var a = e.props,
      o = {},
      s = [],
      l = !1
    if (!fn(e)) {
      var u = (e) => {
        l = !0
        var [n, r] = Fs(e, t, !0)
        on(o, n), r && s.push(...r)
      }
      !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!a && !l) return gn(e) && r.set(e, en), en
    if (cn(a))
      for (var c = 0; c < a.length; c++) {
        var d = Tn(a[c])
        qs(d) && (o[d] = Qt)
      }
    else if (a)
      for (var h in a) {
        var f = Tn(h)
        if (qs(f)) {
          var p = a[h],
            v = (o[f] = cn(p) || fn(p) ? { type: p } : on({}, p))
          if (v) {
            var g = $s(Boolean, v.type),
              m = $s(String, v.type)
            ;(v[0] = g > -1), (v[1] = m < 0 || g < m), (g > -1 || un(v, 'default')) && s.push(f)
          }
        }
      }
    var _ = [o, s]
    return gn(e) && r.set(e, _), _
  }
  function qs(e) {
    return '$' !== e[0] && !Sn(e)
  }
  function js(e) {
    return null === e
      ? 'null'
      : 'function' == typeof e
        ? e.name || ''
        : ('object' == typeof e && e.constructor && e.constructor.name) || ''
  }
  function Vs(e, t) {
    return js(e) === js(t)
  }
  function $s(e, t) {
    return cn(t) ? t.findIndex((t) => Vs(t, e)) : fn(t) && Vs(t, e) ? 0 : -1
  }
  var Hs = (e) => '_' === e[0] || '$stable' === e,
    Ws = (e) => (cn(e) ? e.map(yl) : [yl(e)]),
    Us = (e, t, n) => {
      if (t._n) return t
      var r = (function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oo
        if (!t) return e
        if (e._n) return e
        var n = function () {
          n._d && cl(-1)
          var r,
            i = zo(t)
          try {
            r = e(...arguments)
          } finally {
            zo(i), n._d && cl(1)
          }
          return r
        }
        return (n._n = !0), (n._c = !0), (n._d = !0), n
      })(function () {
        return Ws(t(...arguments))
      }, n)
      return (r._c = !1), r
    },
    Ys = (e, t, n) => {
      var r = e._ctx
      for (var i in e)
        if (!Hs(i)) {
          var a = e[i]
          fn(a)
            ? (t[i] = Us(0, a, r))
            : null != a &&
              (function () {
                var e = Ws(a)
                t[i] = () => e
              })()
        }
    },
    Xs = (e, t) => {
      var n = Ws(t)
      e.slots.default = () => n
    },
    Zs = (e, t) => {
      if (32 & e.vnode.shapeFlag) {
        var n = t._
        n ? ((e.slots = Ua(t)), Nn(t, '_', n)) : Ys(t, (e.slots = {}))
      } else (e.slots = {}), t && Xs(e, t)
      Nn(e.slots, fl, 1)
    },
    Gs = (e, t, n) => {
      var { vnode: r, slots: i } = e,
        a = !0,
        o = Qt
      if (32 & r.shapeFlag) {
        var s = t._
        s
          ? n && 1 === s
            ? (a = !1)
            : (on(i, t), n || 1 !== s || delete i._)
          : ((a = !t.$stable), Ys(t, i)),
          (o = t)
      } else t && (Xs(e, t), (o = { default: 1 }))
      if (a) for (var l in i) Hs(l) || null != o[l] || delete i[l]
    }
  function Ks(e, t, n, r) {
    var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
    if (cn(e)) e.forEach((e, a) => Ks(e, t && (cn(t) ? t[a] : t), n, r, i))
    else if (!Zo(r) || i) {
      var a = 4 & r.shapeFlag ? Fl(r.component) || r.component.proxy : r.el,
        o = i ? null : a,
        { i: s, r: l } = e,
        u = t && t.r,
        c = s.refs === Qt ? (s.refs = {}) : s.refs,
        d = s.setupState
      if (
        (null != u &&
          u !== l &&
          (pn(u) ? ((c[u] = null), un(d, u) && (d[u] = null)) : Qa(u) && (u.value = null)),
        fn(l))
      )
        oo(l, s, 12, [o, c])
      else {
        var h = pn(l),
          f = Qa(l)
        if (h || f) {
          var p = () => {
            if (e.f) {
              var t = h ? (un(d, l) ? d[l] : c[l]) : l.value
              i
                ? cn(t) && sn(t, a)
                : cn(t)
                  ? t.includes(a) || t.push(a)
                  : h
                    ? ((c[l] = [a]), un(d, l) && (d[l] = c[l]))
                    : ((l.value = [a]), e.k && (c[e.k] = l.value))
            } else
              h ? ((c[l] = o), un(d, l) && (d[l] = o)) : f && ((l.value = o), e.k && (c[e.k] = o))
          }
          o ? ((p.id = -1), Js(p, n)) : p()
        }
      }
    }
  }
  var Js = function (e, t) {
    var n
    t && t.pendingBranch
      ? cn(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : (cn((n = e))
          ? po.push(...n)
          : (vo && vo.includes(n, n.allowRecurse ? go + 1 : go)) || po.push(n),
        wo())
  }
  function Qs(e) {
    return (function (e) {
      Pn().__VUE__ = !0
      var t,
        n,
        {
          insert: r,
          remove: i,
          patchProp: a,
          createElement: o,
          createText: s,
          createComment: l,
          setText: u,
          setElementText: c,
          parentNode: d,
          nextSibling: h,
          setScopeId: f = tn,
          insertStaticContent: p,
        } = e,
        v = function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : void 0,
            s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
            l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : !!t.dynamicChildren
          if (e !== t) {
            e && !hl(e, t) && ((r = $(e)), R(e, i, a, !0), (e = null)),
              -2 === t.patchFlag && ((l = !1), (t.dynamicChildren = null))
            var { type: u, ref: c, shapeFlag: d } = t
            switch (u) {
              case al:
                g(e, t, n, r)
                break
              case ol:
                m(e, t, n, r)
                break
              case sl:
                null == e && _(t, n, r, o)
                break
              case il:
                M(e, t, n, r, i, a, o, s, l)
                break
              default:
                1 & d
                  ? w(e, t, n, r, i, a, o, s, l)
                  : 6 & d
                    ? E(e, t, n, r, i, a, o, s, l)
                    : (64 & d || 128 & d) && u.process(e, t, n, r, i, a, o, s, l, U)
            }
            null != c && i && Ks(c, e && e.ref, a, t || e, !t)
          }
        },
        g = (e, t, n, i) => {
          if (null == e) r((t.el = s(t.children)), n, i)
          else {
            var a = (t.el = e.el)
            t.children !== e.children && u(a, t.children)
          }
        },
        m = (e, t, n, i) => {
          null == e ? r((t.el = l(t.children || '')), n, i) : (t.el = e.el)
        },
        _ = (e, t, n, r) => {
          ;[e.el, e.anchor] = p(e.children, t, n, r, e.el, e.anchor)
        },
        y = (e, t, n) => {
          for (var i, { el: a, anchor: o } = e; a && a !== o; ) (i = h(a)), r(a, t, n), (a = i)
          r(o, t, n)
        },
        b = (e) => {
          for (var t, { el: n, anchor: r } = e; n && n !== r; ) (t = h(n)), i(n), (n = t)
          i(r)
        },
        w = (e, t, n, r, i, a, o, s, l) => {
          'svg' === t.type ? (o = 'svg') : 'math' === t.type && (o = 'mathml'),
            null == e ? x(t, n, r, i, a, o, s, l) : C(e, t, i, a, o, s, l)
        },
        x = (e, t, n, i, s, l, u, d) => {
          var h,
            f,
            { props: p, shapeFlag: v, transition: g, dirs: m } = e
          if (
            ((h = e.el = o(e.type, l, p && p.is, p)),
            8 & v ? c(h, e.children) : 16 & v && k(e.children, h, null, i, s, el(e, l), u, d),
            m && Yo(e, null, i, 'created'),
            S(h, e, e.scopeId, u, i),
            p)
          ) {
            for (var _ in p) 'value' === _ || Sn(_) || a(h, _, null, p[_], l, e.children, i, s, V)
            'value' in p && a(h, 'value', null, p.value, l),
              (f = p.onVnodeBeforeMount) && Sl(f, i, e)
          }
          Object.defineProperty(h, '__vueParentComponent', { value: i, enumerable: !1 }),
            m && Yo(e, null, i, 'beforeMount')
          var y = (function (e, t) {
            return (!e || (e && !e.pendingBranch)) && t && !t.persisted
          })(s, g)
          y && g.beforeEnter(h),
            r(h, t, n),
            ((f = p && p.onVnodeMounted) || y || m) &&
              Js(() => {
                f && Sl(f, i, e), y && g.enter(h), m && Yo(e, null, i, 'mounted')
              }, s)
        },
        S = (e, t, n, r, i) => {
          if ((n && f(e, n), r)) for (var a = 0; a < r.length; a++) f(e, r[a])
          if (i && t === i.subTree) {
            var o = i.vnode
            S(e, o, o.scopeId, o.slotScopeIds, i.parent)
          }
        },
        k = function (e, t, n, r, i, a, o, s) {
          for (
            var l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
            l < e.length;
            l++
          ) {
            var u = (e[l] = s ? bl(e[l]) : yl(e[l]))
            v(null, u, t, n, r, i, a, o, s)
          }
        },
        C = (e, t, n, r, i, o, s) => {
          var l = (t.el = e.el),
            { patchFlag: u, dynamicChildren: d, dirs: h } = t
          u |= 16 & e.patchFlag
          var f,
            p = e.props || Qt,
            v = t.props || Qt
          if (
            (n && tl(n, !1),
            (f = v.onVnodeBeforeUpdate) && Sl(f, n, t, e),
            h && Yo(t, e, n, 'beforeUpdate'),
            n && tl(n, !0),
            d
              ? T(e.dynamicChildren, d, l, n, r, el(t, i), o)
              : s || I(e, t, l, null, n, r, el(t, i), o, !1),
            u > 0)
          ) {
            if (16 & u) A(l, t, p, v, n, r, i)
            else if (
              (2 & u && p.class !== v.class && a(l, 'class', null, v.class, i),
              4 & u && a(l, 'style', p.style, v.style, i),
              8 & u)
            )
              for (var g = t.dynamicProps, m = 0; m < g.length; m++) {
                var _ = g[m],
                  y = p[_],
                  b = v[_]
                ;(b === y && 'value' !== _) || a(l, _, y, b, i, e.children, n, r, V)
              }
            1 & u && e.children !== t.children && c(l, t.children)
          } else s || null != d || A(l, t, p, v, n, r, i)
          ;((f = v.onVnodeUpdated) || h) &&
            Js(() => {
              f && Sl(f, n, t, e), h && Yo(t, e, n, 'updated')
            }, r)
        },
        T = (e, t, n, r, i, a, o) => {
          for (var s = 0; s < t.length; s++) {
            var l = e[s],
              u = t[s],
              c = l.el && (l.type === il || !hl(l, u) || 70 & l.shapeFlag) ? d(l.el) : n
            v(l, u, c, null, r, i, a, o, !0)
          }
        },
        A = (e, t, n, r, i, o, s) => {
          if (n !== r) {
            if (n !== Qt)
              for (var l in n) Sn(l) || l in r || a(e, l, n[l], null, s, t.children, i, o, V)
            for (var u in r)
              if (!Sn(u)) {
                var c = r[u],
                  d = n[u]
                c !== d && 'value' !== u && a(e, u, d, c, s, t.children, i, o, V)
              }
            'value' in r && a(e, 'value', n.value, r.value, s)
          }
        },
        M = (e, t, n, i, a, o, l, u, c) => {
          var d = (t.el = e ? e.el : s('')),
            h = (t.anchor = e ? e.anchor : s('')),
            { patchFlag: f, dynamicChildren: p, slotScopeIds: v } = t
          v && (u = u ? u.concat(v) : v),
            null == e
              ? (r(d, n, i), r(h, n, i), k(t.children || [], n, h, a, o, l, u, c))
              : f > 0 && 64 & f && p && e.dynamicChildren
                ? (T(e.dynamicChildren, p, n, a, o, l, u),
                  (null != t.key || (a && t === a.subTree)) && nl(e, t, !0))
                : I(e, t, n, h, a, o, l, u, c)
        },
        E = (e, t, n, r, i, a, o, s, l) => {
          ;(t.slotScopeIds = s),
            null == e
              ? 512 & t.shapeFlag
                ? i.ctx.activate(t, n, r, o, l)
                : O(t, n, r, i, a, o, l)
              : L(e, t, l)
        },
        O = (e, t, n, r, i, a, o) => {
          var s = (e.component = (function (e, t, n) {
            var r = e.type,
              i = (t ? t.appContext : e.appContext) || kl,
              a = {
                uid: Cl++,
                vnode: e,
                type: r,
                parent: t,
                appContext: i,
                root: null,
                next: null,
                subTree: null,
                effect: null,
                update: null,
                scope: new Di(!0),
                render: null,
                proxy: null,
                exposed: null,
                exposeProxy: null,
                withProxy: null,
                provides: t ? t.provides : Object.create(i.provides),
                accessCache: null,
                renderCache: [],
                components: null,
                directives: null,
                propsOptions: Fs(r, i),
                emitsOptions: Mo(r, i),
                emit: null,
                emitted: null,
                propsDefaults: Qt,
                inheritAttrs: r.inheritAttrs,
                ctx: Qt,
                data: Qt,
                props: Qt,
                attrs: Qt,
                slots: Qt,
                refs: Qt,
                setupState: Qt,
                setupContext: null,
                attrsProxy: null,
                slotsProxy: null,
                suspense: n,
                suspenseId: n ? n.pendingId : 0,
                asyncDep: null,
                asyncResolved: !1,
                isMounted: !1,
                isUnmounted: !1,
                isDeactivated: !1,
                bc: null,
                c: null,
                bm: null,
                m: null,
                bu: null,
                u: null,
                um: null,
                bum: null,
                da: null,
                a: null,
                rtg: null,
                rtc: null,
                ec: null,
                sp: null,
              }
            ;(a.ctx = { _: a }),
              (a.root = t ? t.root : a),
              (a.emit = Ao.bind(null, a)),
              e.ce && e.ce(a)
            return a
          })(e, r, i))
          if (
            (Go(e) && (s.ctx.renderer = U),
            (function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              t && Al(t)
              var { props: n, children: r } = e.vnode,
                i = Il(e)
              Ds(e, n, i, t), Zs(e, r)
              var a = i
                ? (function (e, t) {
                    var n = e.type
                    ;(e.accessCache = Object.create(null)), (e.proxy = Ya(new Proxy(e.ctx, gs)))
                    var { setup: r } = n
                    if (r) {
                      var i = (e.setupContext =
                          r.length > 1
                            ? (function (e) {
                                var t = (t) => {
                                  e.exposed = t || {}
                                }
                                return {
                                  get attrs() {
                                    return (function (e) {
                                      return (
                                        e.attrsProxy ||
                                        (e.attrsProxy = new Proxy(e.attrs, {
                                          get: (t, n) => (ta(e, 0, '$attrs'), t[n]),
                                        }))
                                      )
                                    })(e)
                                  },
                                  slots: e.slots,
                                  emit: e.emit,
                                  expose: t,
                                }
                              })(e)
                            : null),
                        a = zl(e)
                      Hi()
                      var o = oo(r, e, 0, [e.props, i])
                      if ((Wi(), a(), mn(o))) {
                        if ((o.then(Nl, Nl), t))
                          return o
                            .then((n) => {
                              Bl(e, n, t)
                            })
                            .catch((t) => {
                              lo(t, e, 0)
                            })
                        e.asyncDep = o
                      } else Bl(e, o, t)
                    } else Rl(e, t)
                  })(e, t)
                : void 0
              t && Al(!1)
            })(s),
            s.asyncDep)
          ) {
            if ((i && i.registerDep(s, z), !e.el)) {
              var l = (s.subTree = gl(ol))
              m(null, l, t, n)
            }
          } else z(s, e, t, n, i, a, o)
        },
        L = (e, t, n) => {
          var r,
            i,
            a = (t.component = e.component)
          if (
            (function (e, t, n) {
              var { props: r, children: i, component: a } = e,
                { props: o, children: s, patchFlag: l } = t,
                u = a.emitsOptions
              if (t.dirs || t.transition) return !0
              if (!(n && l >= 0))
                return (
                  !((!i && !s) || (s && s.$stable)) || (r !== o && (r ? !o || Do(r, o, u) : !!o))
                )
              if (1024 & l) return !0
              if (16 & l) return r ? Do(r, o, u) : !!o
              if (8 & l)
                for (var c = t.dynamicProps, d = 0; d < c.length; d++) {
                  var h = c[d]
                  if (o[h] !== r[h] && !Eo(u, h)) return !0
                }
              return !1
            })(e, t, n)
          ) {
            if (a.asyncDep && !a.asyncResolved) return void N(a, t, n)
            ;(a.next = t),
              (r = a.update),
              (i = ho.indexOf(r)) > fo && ho.splice(i, 1),
              (a.effect.dirty = !0),
              a.update()
          } else (t.el = e.el), (a.vnode = t)
        },
        z = (e, t, r, i, a, o, s) => {
          var l = () => {
              if (e.isMounted) {
                var { next: u, bu: c, u: h, parent: f, vnode: p } = e,
                  g = rl(e)
                if (g)
                  return (
                    u && ((u.el = p.el), N(e, u, s)),
                    void g.asyncDep.then(() => {
                      e.isUnmounted || l()
                    })
                  )
                var m,
                  _ = u
                tl(e, !1),
                  u ? ((u.el = p.el), N(e, u, s)) : (u = p),
                  c && zn(c),
                  (m = u.props && u.props.onVnodeBeforeUpdate) && Sl(m, f, u, p),
                  tl(e, !0)
                var y = No(e),
                  b = e.subTree
                ;(e.subTree = y),
                  v(b, y, d(b.el), $(b), e, a, o),
                  (u.el = y.el),
                  null === _ &&
                    (function (e, t) {
                      for (var { vnode: n, parent: r } = e; r; ) {
                        var i = r.subTree
                        if ((i.suspense && i.suspense.activeBranch === n && (i.el = n.el), i !== n))
                          break
                        ;((n = r.vnode).el = t), (r = r.parent)
                      }
                    })(e, y.el),
                  h && Js(h, a),
                  (m = u.props && u.props.onVnodeUpdated) && Js(() => Sl(m, f, u, p), a)
              } else {
                var w,
                  { el: x, props: S } = t,
                  { bm: k, m: C, parent: T } = e,
                  A = Zo(t)
                if (
                  (tl(e, !1),
                  k && zn(k),
                  !A && (w = S && S.onVnodeBeforeMount) && Sl(w, T, t),
                  tl(e, !0),
                  x && n)
                ) {
                  var M = () => {
                    ;(e.subTree = No(e)), n(x, e.subTree, e, a, null)
                  }
                  A ? t.type.__asyncLoader().then(() => !e.isUnmounted && M()) : M()
                } else {
                  var E = (e.subTree = No(e))
                  v(null, E, r, i, e, a, o), (t.el = E.el)
                }
                if ((C && Js(C, a), !A && (w = S && S.onVnodeMounted))) {
                  var O = t
                  Js(() => Sl(w, T, O), a)
                }
                ;(256 & t.shapeFlag || (T && Zo(T.vnode) && 256 & T.vnode.shapeFlag)) &&
                  e.a &&
                  Js(e.a, a),
                  (e.isMounted = !0),
                  (t = r = i = null)
              }
            },
            u = (e.effect = new Bi(l, tn, () => bo(c), e.scope)),
            c = (e.update = () => {
              u.dirty && u.run()
            })
          ;(c.id = e.uid), tl(e, !0), c()
        },
        N = (e, t, n) => {
          t.component = e
          var r = e.vnode.props
          ;(e.vnode = t),
            (e.next = null),
            (function (e, t, n, r) {
              var {
                  props: i,
                  attrs: a,
                  vnode: { patchFlag: o },
                } = e,
                s = Ua(i),
                [l] = e.propsOptions,
                u = !1
              if (!(r || o > 0) || 16 & o) {
                var c
                for (var d in (Bs(e, t, i, a) && (u = !0), s))
                  (t && (un(t, d) || ((c = Mn(d)) !== d && un(t, c)))) ||
                    (l
                      ? !n ||
                        (void 0 === n[d] && void 0 === n[c]) ||
                        (i[d] = Rs(l, s, d, void 0, e, !0))
                      : delete i[d])
                if (a !== s) for (var h in a) (t && un(t, h)) || (delete a[h], (u = !0))
              } else if (8 & o)
                for (var f = e.vnode.dynamicProps, p = 0; p < f.length; p++) {
                  var v = f[p]
                  if (!Eo(e.emitsOptions, v)) {
                    var g = t[v]
                    if (l)
                      if (un(a, v)) g !== a[v] && ((a[v] = g), (u = !0))
                      else {
                        var m = Tn(v)
                        i[m] = Rs(l, s, m, g, e, !1)
                      }
                    else g !== a[v] && ((a[v] = g), (u = !0))
                  }
                }
              u && na(e, 'set', '$attrs')
            })(e, t.props, r, n),
            Gs(e, t.children, n),
            Hi(),
            xo(e),
            Wi()
        },
        I = function (e, t, n, r, i, a, o, s) {
          var l = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
            u = e && e.children,
            d = e ? e.shapeFlag : 0,
            h = t.children,
            { patchFlag: f, shapeFlag: p } = t
          if (f > 0) {
            if (128 & f) return void D(u, h, n, r, i, a, o, s, l)
            if (256 & f) return void P(u, h, n, r, i, a, o, s, l)
          }
          8 & p
            ? (16 & d && V(u, i, a), h !== u && c(n, h))
            : 16 & d
              ? 16 & p
                ? D(u, h, n, r, i, a, o, s, l)
                : V(u, i, a, !0)
              : (8 & d && c(n, ''), 16 & p && k(h, n, r, i, a, o, s, l))
        },
        P = (e, t, n, r, i, a, o, s, l) => {
          t = t || en
          var u,
            c = (e = e || en).length,
            d = t.length,
            h = Math.min(c, d)
          for (u = 0; u < h; u++) {
            var f = (t[u] = l ? bl(t[u]) : yl(t[u]))
            v(e[u], f, n, null, i, a, o, s, l)
          }
          c > d ? V(e, i, a, !0, !1, h) : k(t, n, r, i, a, o, s, l, h)
        },
        D = (e, t, n, r, i, a, o, s, l) => {
          for (var u = 0, c = t.length, d = e.length - 1, h = c - 1; u <= d && u <= h; ) {
            var f = e[u],
              p = (t[u] = l ? bl(t[u]) : yl(t[u]))
            if (!hl(f, p)) break
            v(f, p, n, null, i, a, o, s, l), u++
          }
          for (; u <= d && u <= h; ) {
            var g = e[d],
              m = (t[h] = l ? bl(t[h]) : yl(t[h]))
            if (!hl(g, m)) break
            v(g, m, n, null, i, a, o, s, l), d--, h--
          }
          if (u > d) {
            if (u <= h)
              for (var _ = h + 1, y = _ < c ? t[_].el : r; u <= h; )
                v(null, (t[u] = l ? bl(t[u]) : yl(t[u])), n, y, i, a, o, s, l), u++
          } else if (u > h) for (; u <= d; ) R(e[u], i, a, !0), u++
          else {
            var b,
              w = u,
              x = u,
              S = new Map()
            for (u = x; u <= h; u++) {
              var k = (t[u] = l ? bl(t[u]) : yl(t[u]))
              null != k.key && S.set(k.key, u)
            }
            var C = 0,
              T = h - x + 1,
              A = !1,
              M = 0,
              E = new Array(T)
            for (u = 0; u < T; u++) E[u] = 0
            for (u = w; u <= d; u++) {
              var O = e[u]
              if (C >= T) R(O, i, a, !0)
              else {
                var L = void 0
                if (null != O.key) L = S.get(O.key)
                else
                  for (b = x; b <= h; b++)
                    if (0 === E[b - x] && hl(O, t[b])) {
                      L = b
                      break
                    }
                void 0 === L
                  ? R(O, i, a, !0)
                  : ((E[L - x] = u + 1),
                    L >= M ? (M = L) : (A = !0),
                    v(O, t[L], n, null, i, a, o, s, l),
                    C++)
              }
            }
            var z = A
              ? (function (e) {
                  var t,
                    n,
                    r,
                    i,
                    a,
                    o = e.slice(),
                    s = [0],
                    l = e.length
                  for (t = 0; t < l; t++) {
                    var u = e[t]
                    if (0 !== u) {
                      if (e[(n = s[s.length - 1])] < u) {
                        ;(o[t] = n), s.push(t)
                        continue
                      }
                      for (r = 0, i = s.length - 1; r < i; )
                        e[s[(a = (r + i) >> 1)]] < u ? (r = a + 1) : (i = a)
                      u < e[s[r]] && (r > 0 && (o[t] = s[r - 1]), (s[r] = t))
                    }
                  }
                  ;(r = s.length), (i = s[r - 1])
                  for (; r-- > 0; ) (s[r] = i), (i = o[i])
                  return s
                })(E)
              : en
            for (b = z.length - 1, u = T - 1; u >= 0; u--) {
              var N = x + u,
                I = t[N],
                P = N + 1 < c ? t[N + 1].el : r
              0 === E[u]
                ? v(null, I, n, P, i, a, o, s, l)
                : A && (b < 0 || u !== z[b] ? B(I, n, P, 2) : b--)
            }
          }
        },
        B = function (e, t, n, i) {
          var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            { el: o, type: s, transition: l, children: u, shapeFlag: c } = e
          if (6 & c) B(e.component.subTree, t, n, i)
          else if (128 & c) e.suspense.move(t, n, i)
          else if (64 & c) s.move(e, t, n, U)
          else if (s !== il) {
            if (s !== sl)
              if (2 !== i && 1 & c && l)
                if (0 === i) l.beforeEnter(o), r(o, t, n), Js(() => l.enter(o), a)
                else {
                  var { leave: d, delayLeave: h, afterLeave: f } = l,
                    p = () => r(o, t, n),
                    v = () => {
                      d(o, () => {
                        p(), f && f()
                      })
                    }
                  h ? h(o, p, v) : v()
                }
              else r(o, t, n)
            else y(e, t, n)
          } else {
            r(o, t, n)
            for (var g = 0; g < u.length; g++) B(u[g], t, n, i)
            r(e.anchor, t, n)
          }
        },
        R = function (e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            {
              type: a,
              props: o,
              ref: s,
              children: l,
              dynamicChildren: u,
              shapeFlag: c,
              patchFlag: d,
              dirs: h,
            } = e
          if ((null != s && Ks(s, null, n, e, !0), 256 & c)) t.ctx.deactivate(e)
          else {
            var f,
              p = 1 & c && h,
              v = !Zo(e)
            if ((v && (f = o && o.onVnodeBeforeUnmount) && Sl(f, t, e), 6 & c)) j(e.component, n, r)
            else {
              if (128 & c) return void e.suspense.unmount(n, r)
              p && Yo(e, null, t, 'beforeUnmount'),
                64 & c
                  ? e.type.remove(e, t, n, i, U, r)
                  : u && (a !== il || (d > 0 && 64 & d))
                    ? V(u, t, n, !1, !0)
                    : ((a === il && 384 & d) || (!i && 16 & c)) && V(l, t, n),
                r && F(e)
            }
            ;((v && (f = o && o.onVnodeUnmounted)) || p) &&
              Js(() => {
                f && Sl(f, t, e), p && Yo(e, null, t, 'unmounted')
              }, n)
          }
        },
        F = (e) => {
          var { type: t, el: n, anchor: r, transition: a } = e
          if (t !== il)
            if (t !== sl) {
              var o = () => {
                i(n), a && !a.persisted && a.afterLeave && a.afterLeave()
              }
              if (1 & e.shapeFlag && a && !a.persisted) {
                var { leave: s, delayLeave: l } = a,
                  u = () => s(n, o)
                l ? l(e.el, o, u) : u()
              } else o()
            } else b(e)
          else q(n, r)
        },
        q = (e, t) => {
          for (var n; e !== t; ) (n = h(e)), i(e), (e = n)
          i(t)
        },
        j = (e, t, n) => {
          var { bum: r, scope: i, update: a, subTree: o, um: s } = e
          r && zn(r),
            i.stop(),
            a && ((a.active = !1), R(o, e, t, n)),
            s && Js(s, t),
            Js(() => {
              e.isUnmounted = !0
            }, t),
            t &&
              t.pendingBranch &&
              !t.isUnmounted &&
              e.asyncDep &&
              !e.asyncResolved &&
              e.suspenseId === t.pendingId &&
              (t.deps--, 0 === t.deps && t.resolve())
        },
        V = function (e, t, n) {
          for (
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            a < e.length;
            a++
          )
            R(e[a], t, n, r, i)
        },
        $ = (e) =>
          6 & e.shapeFlag
            ? $(e.component.subTree)
            : 128 & e.shapeFlag
              ? e.suspense.next()
              : h(e.anchor || e.el),
        H = !1,
        W = (e, t, n) => {
          if (null == e) t._vnode && R(t._vnode, null, null, !0)
          else {
            var r = t.__vueParent
            v(t._vnode || null, e, t, null, r, null, n)
          }
          H || ((H = !0), xo(), (H = !1)), (t._vnode = e)
        },
        U = { p: v, um: R, m: B, r: F, mt: O, mc: k, pc: I, pbc: T, n: $, o: e }
      return { render: W, hydrate: t, createApp: zs(W, t) }
    })(e)
  }
  function el(e, t) {
    var { type: n, props: r } = e
    return ('svg' === t && 'foreignObject' === n) ||
      ('mathml' === t && 'annotation-xml' === n && r && r.encoding && r.encoding.includes('html'))
      ? void 0
      : t
  }
  function tl(e, t) {
    var { effect: n, update: r } = e
    n.allowRecurse = r.allowRecurse = t
  }
  function nl(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = e.children,
      i = t.children
    if (cn(r) && cn(i))
      for (var a = 0; a < r.length; a++) {
        var o = r[a],
          s = i[a]
        1 & s.shapeFlag &&
          !s.dynamicChildren &&
          ((s.patchFlag <= 0 || 32 === s.patchFlag) && ((s = i[a] = bl(i[a])).el = o.el),
          n || nl(o, s)),
          s.type === al && (s.el = o.el)
      }
  }
  function rl(e) {
    var t = e.subTree.component
    if (t) return t.asyncDep && !t.asyncResolved ? t : rl(t)
  }
  var il = Symbol.for('v-fgt'),
    al = Symbol.for('v-txt'),
    ol = Symbol.for('v-cmt'),
    sl = Symbol.for('v-stc'),
    ll = null,
    ul = 1
  function cl(e) {
    ul += e
  }
  function dl(e) {
    return !!e && !0 === e.__v_isVNode
  }
  function hl(e, t) {
    return e.type === t.type && e.key === t.key
  }
  var fl = '__vInternal',
    pl = (e) => {
      var { key: t } = e
      return null != t ? t : null
    },
    vl = (e) => {
      var { ref: t, ref_key: n, ref_for: r } = e
      return (
        'number' == typeof t && (t = '' + t),
        null != t ? (pn(t) || Qa(t) || fn(t) ? { i: Oo, r: t, k: n, f: !!r } : t) : null
      )
    }
  var gl = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
      a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
    ;(e && e !== Bo) || (e = ol)
    if (dl(e)) {
      var o = ml(e, t, !0)
      return (
        n && wl(o, n),
        ul > 0 && !a && ll && (6 & o.shapeFlag ? (ll[ll.indexOf(e)] = o) : ll.push(o)),
        (o.patchFlag |= -2),
        o
      )
    }
    ;(s = e), fn(s) && '__vccOpts' in s && (e = e.__vccOpts)
    var s
    if (t) {
      t = (function (e) {
        return e ? (Wa(e) || fl in e ? on({}, e) : e) : null
      })(t)
      var { class: l, style: u } = t
      l && !pn(l) && (t.class = jn(l)),
        gn(u) && (Wa(u) && !cn(u) && (u = on({}, u)), (t.style = Dn(u)))
    }
    var c = pn(e)
      ? 1
      : ((e) => e.__isSuspense)(e)
        ? 128
        : ((e) => e.__isTeleport)(e)
          ? 64
          : gn(e)
            ? 4
            : fn(e)
              ? 2
              : 0
    return (function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e === il ? 0 : 1,
        o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        l = {
          __v_isVNode: !0,
          __v_skip: !0,
          type: e,
          props: t,
          key: t && pl(t),
          ref: t && vl(t),
          scopeId: Lo,
          slotScopeIds: null,
          children: n,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag: a,
          patchFlag: r,
          dynamicProps: i,
          dynamicChildren: null,
          appContext: null,
          ctx: Oo,
        }
      return (
        s ? (wl(l, n), 128 & a && e.normalize(l)) : n && (l.shapeFlag |= pn(n) ? 8 : 16),
        ul > 0 && !o && ll && (l.patchFlag > 0 || 6 & a) && 32 !== l.patchFlag && ll.push(l),
        l
      )
    })(e, t, n, r, i, c, a, !0)
  }
  function ml(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { props: r, ref: i, patchFlag: a, children: o } = e,
      s = t ? xl(r || {}, t) : r
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: s,
      key: s && pl(s),
      ref: t && t.ref ? (n && i ? (cn(i) ? i.concat(vl(t)) : [i, vl(t)]) : vl(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: o,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== il ? (-1 === a ? 16 : 16 | a) : a,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ml(e.ssContent),
      ssFallback: e.ssFallback && ml(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  }
  function _l() {
    return gl(
      al,
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ' ',
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    )
  }
  function yl(e) {
    return null == e || 'boolean' == typeof e
      ? gl(ol)
      : cn(e)
        ? gl(il, null, e.slice())
        : 'object' == typeof e
          ? bl(e)
          : gl(al, null, String(e))
  }
  function bl(e) {
    return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : ml(e)
  }
  function wl(e, t) {
    var n = 0,
      { shapeFlag: r } = e
    if (null == t) t = null
    else if (cn(t)) n = 16
    else if ('object' == typeof t) {
      if (65 & r) {
        var i = t.default
        return void (i && (i._c && (i._d = !1), wl(e, i()), i._c && (i._d = !0)))
      }
      n = 32
      var a = t._
      a || fl in t
        ? 3 === a && Oo && (1 === Oo.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = Oo)
    } else
      fn(t)
        ? ((t = { default: t, _ctx: Oo }), (n = 32))
        : ((t = String(t)), 64 & r ? ((n = 16), (t = [_l(t)])) : (n = 8))
    ;(e.children = t), (e.shapeFlag |= n)
  }
  function xl() {
    for (var e = {}, t = 0; t < arguments.length; t++) {
      var n = t < 0 || arguments.length <= t ? void 0 : arguments[t]
      for (var r in n)
        if ('class' === r) e.class !== n.class && (e.class = jn([e.class, n.class]))
        else if ('style' === r) e.style = Dn([e.style, n.style])
        else if (rn(r)) {
          var i = e[r],
            a = n[r]
          !a || i === a || (cn(i) && i.includes(a)) || (e[r] = i ? [].concat(i, a) : a)
        } else '' !== r && (e[r] = n[r])
    }
    return e
  }
  function Sl(e, t, n) {
    so(e, t, 7, [n, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null])
  }
  var kl = Os(),
    Cl = 0
  var Tl,
    Al,
    Ml = null,
    El = () => Ml || Oo,
    Ol = Pn(),
    Ll = (e, t) => {
      var n
      return (
        (n = Ol[e]) || (n = Ol[e] = []),
        n.push(t),
        (e) => {
          n.length > 1 ? n.forEach((t) => t(e)) : n[0](e)
        }
      )
    }
  ;(Tl = Ll('__VUE_INSTANCE_SETTERS__', (e) => (Ml = e))),
    (Al = Ll('__VUE_SSR_SETTERS__', (e) => (Dl = e)))
  var zl = (e) => {
      var t = Ml
      return (
        Tl(e),
        e.scope.on(),
        () => {
          e.scope.off(), Tl(t)
        }
      )
    },
    Nl = () => {
      Ml && Ml.scope.off(), Tl(null)
    }
  function Il(e) {
    return 4 & e.vnode.shapeFlag
  }
  var Pl,
    Dl = !1
  function Bl(e, t, n) {
    fn(t)
      ? e.type.__ssrInlineRender
        ? (e.ssrRender = t)
        : (e.render = t)
      : gn(t) && (e.setupState = ao(t)),
      Rl(e, n)
  }
  function Rl(e, t, n) {
    var r = e.type
    if (!e.render) {
      if (!t && Pl && !r.render) {
        var i = r.template || xs(e).template
        if (i) {
          var { isCustomElement: a, compilerOptions: o } = e.appContext.config,
            { delimiters: s, compilerOptions: l } = r,
            u = on(on({ isCustomElement: a, delimiters: s }, o), l)
          r.render = Pl(i, u)
        }
      }
      e.render = r.render || tn
    }
    var c = zl(e)
    Hi()
    try {
      ys(e)
    } finally {
      Wi(), c()
    }
  }
  function Fl(e) {
    if (e.exposed)
      return (
        e.exposeProxy ||
        (e.exposeProxy = new Proxy(ao(Ya(e.exposed)), {
          get: (t, n) => (n in t ? t[n] : n in ps ? ps[n](e) : void 0),
          has: (e, t) => t in e || t in ps,
        }))
      )
  }
  var ql = (e, t) => {
    var n = (function (e, t) {
      var n,
        r,
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = fn(e)
      return a ? ((n = e), (r = tn)) : ((n = e.get), (r = e.set)), new Ga(n, r, a || !r, i)
    })(e, t, Dl)
    return n
  }
  function jl(e, t, n) {
    var r = arguments.length
    return 2 === r
      ? gn(t) && !cn(t)
        ? dl(t)
          ? gl(e, null, [t])
          : gl(e, t)
        : gl(e, null, t)
      : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : 3 === r && dl(n) && (n = [n]),
        gl(e, t, n))
  }
  var Vl = '3.4.21',
    $l = 'undefined' != typeof document ? document : null,
    Hl = $l && $l.createElement('template'),
    Wl = {
      insert: (e, t, n) => {
        t.insertBefore(e, n || null)
      },
      remove: (e) => {
        var t = e.parentNode
        t && t.removeChild(e)
      },
      createElement: (e, t, n, r) => {
        var i =
          'svg' === t
            ? $l.createElementNS('http://www.w3.org/2000/svg', e)
            : 'mathml' === t
              ? $l.createElementNS('http://www.w3.org/1998/Math/MathML', e)
              : $l.createElement(e, n ? { is: n } : void 0)
        return (
          'select' === e && r && null != r.multiple && i.setAttribute('multiple', r.multiple), i
        )
      },
      createText: (e) => $l.createTextNode(e),
      createComment: (e) => $l.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t
      },
      setElementText: (e, t) => {
        e.textContent = t
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => $l.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, '')
      },
      insertStaticContent(e, t, n, r, i, a) {
        var o = n ? n.previousSibling : t.lastChild
        if (i && (i === a || i.nextSibling))
          for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling); );
        else {
          Hl.innerHTML =
            'svg' === r
              ? '<svg>'.concat(e, '</svg>')
              : 'mathml' === r
                ? '<math>'.concat(e, '</math>')
                : e
          var s = Hl.content
          if ('svg' === r || 'mathml' === r) {
            for (var l = s.firstChild; l.firstChild; ) s.appendChild(l.firstChild)
            s.removeChild(l)
          }
          t.insertBefore(s, n)
        }
        return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
      },
    },
    Ul = Symbol('_vtc')
  var Yl = Symbol('_vod'),
    Xl = Symbol('_vsh'),
    Zl = {
      beforeMount(e, t, n) {
        var { value: r } = t,
          { transition: i } = n
        ;(e[Yl] = 'none' === e.style.display ? '' : e.style.display),
          i && r ? i.beforeEnter(e) : Gl(e, r)
      },
      mounted(e, t, n) {
        var { value: r } = t,
          { transition: i } = n
        i && r && i.enter(e)
      },
      updated(e, t, n) {
        var { value: r, oldValue: i } = t,
          { transition: a } = n
        !r != !i &&
          (a
            ? r
              ? (a.beforeEnter(e), Gl(e, !0), a.enter(e))
              : a.leave(e, () => {
                  Gl(e, !1)
                })
            : Gl(e, r))
      },
      beforeUnmount(e, t) {
        var { value: n } = t
        Gl(e, n)
      },
    }
  function Gl(e, t) {
    ;(e.style.display = t ? e[Yl] : 'none'), (e[Xl] = !t)
  }
  var Kl = Symbol(''),
    Jl = /(^|;)\s*display\s*:/
  var Ql = /\s*!important$/
  function eu(e, t, n) {
    if (cn(n)) n.forEach((n) => eu(e, t, n))
    else if ((null == n && (n = ''), (n = normalizeStyleValue(n)), t.startsWith('--')))
      e.setProperty(t, n)
    else {
      var r = normalizeStyleName(e, t)
      Ql.test(n) ? e.setProperty(Mn(r), n.replace(Ql, ''), 'important') : (e[r] = n)
    }
  }
  var tu = 'http://www.w3.org/1999/xlink'
  var nu = Symbol('_vei')
  function ru(e, t, n, r) {
    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
      a = e[nu] || (e[nu] = {}),
      o = a[t]
    if (r && o) o.value = r
    else {
      var [s, l] = (function (e) {
        var t
        if (iu.test(e)) {
          var n
          for (t = {}; (n = e.match(iu)); )
            (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
        }
        var r = ':' === e[2] ? e.slice(3) : Mn(e.slice(2))
        return [r, t]
      })(t)
      if (r) {
        var u = (a[t] = (function (e, t) {
          var n = (e) => {
            if (e._vts) {
              if (e._vts <= n.attached) return
            } else e._vts = Date.now()
            so(
              (function (e, t) {
                if (cn(t)) {
                  var n = e.stopImmediatePropagation
                  return (
                    (e.stopImmediatePropagation = () => {
                      n.call(e), (e._stopped = !0)
                    }),
                    t.map((e) => (t) => !t._stopped && e && e(t))
                  )
                }
                return t
              })(e, n.value),
              t,
              5,
              [e],
            )
          }
          return (n.value = e), (n.attached = su()), n
        })(r, i))
        !(function (e, t, n, r) {
          e.addEventListener(t, n, r)
        })(e, s, u, l)
      } else
        o &&
          (!(function (e, t, n, r) {
            e.removeEventListener(t, n, r)
          })(e, s, o, l),
          (a[t] = void 0))
    }
  }
  var iu = /(?:Once|Passive|Capture)$/
  var au = 0,
    ou = Promise.resolve(),
    su = () => au || (ou.then(() => (au = 0)), (au = Date.now()))
  var lu = (e) =>
    111 === e.charCodeAt(0) &&
    110 === e.charCodeAt(1) &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123
  var uu,
    cu = ['ctrl', 'shift', 'alt', 'meta'],
    du = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => 'button' in e && 0 !== e.button,
      middle: (e) => 'button' in e && 1 !== e.button,
      right: (e) => 'button' in e && 2 !== e.button,
      exact: (e, t) => cu.some((n) => e[''.concat(n, 'Key')] && !t.includes(n)),
    },
    hu = (e, t) => {
      var n = e._withMods || (e._withMods = {}),
        r = t.join('.')
      return (
        n[r] ||
        (n[r] = function (n) {
          for (var r = 0; r < t.length; r++) {
            var i = du[t[r]]
            if (i && i(n, t)) return
          }
          for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
            o[s - 1] = arguments[s]
          return e(n, ...o)
        })
      )
    },
    fu = on(
      {
        patchProp: (e, t, n, r, i, a, o, s, l) => {
          var u = 'svg' === i
          'class' === t
            ? (function (e, t, n) {
                var r = e[Ul]
                r && (t = (t ? [t, ...r] : [...r]).join(' ')),
                  null == t
                    ? e.removeAttribute('class')
                    : n
                      ? e.setAttribute('class', t)
                      : (e.className = t)
              })(e, r, u)
            : 'style' === t
              ? (function (e, t, n) {
                  var r = e.style,
                    i = pn(n),
                    a = !1
                  if (n && !i) {
                    if (t)
                      if (pn(t))
                        for (var o of t.split(';')) {
                          var s = o.slice(0, o.indexOf(':')).trim()
                          null == n[s] && eu(r, s, '')
                        }
                      else for (var l in t) null == n[l] && eu(r, l, '')
                    for (var u in n) 'display' === u && (a = !0), eu(r, u, n[u])
                  } else if (i) {
                    if (t !== n) {
                      var c = r[Kl]
                      c && (n += ';' + c), (r.cssText = normalizeStyleValue(n)), (a = Jl.test(n))
                    }
                  } else t && e.removeAttribute('style')
                  Yl in e && ((e[Yl] = a ? r.display : ''), e[Xl] && (r.display = 'none'))
                })(e, n, r)
              : rn(t)
                ? an(t) || ru(e, t, n, r, o)
                : (
                      '.' === t[0]
                        ? ((t = t.slice(1)), 1)
                        : '^' === t[0]
                          ? ((t = t.slice(1)), 0)
                          : (function (e, t, n, r) {
                              if (r)
                                return (
                                  'innerHTML' === t ||
                                  'textContent' === t ||
                                  !!(t in e && lu(t) && fn(n))
                                )
                              if ('spellcheck' === t || 'draggable' === t || 'translate' === t)
                                return !1
                              if ('form' === t) return !1
                              if ('list' === t && 'INPUT' === e.tagName) return !1
                              if ('type' === t && 'TEXTAREA' === e.tagName) return !1
                              if ('width' === t || 'height' === t) {
                                var i = e.tagName
                                if (
                                  'IMG' === i ||
                                  'VIDEO' === i ||
                                  'CANVAS' === i ||
                                  'SOURCE' === i
                                )
                                  return !1
                              }
                              if (lu(t) && pn(n)) return !1
                              return t in e
                            })(e, t, r, u)
                    )
                  ? (function (e, t, n, r, i, a, o) {
                      if ('innerHTML' === t || 'textContent' === t)
                        return r && o(r, i, a), void (e[t] = null == n ? '' : n)
                      var s = e.tagName
                      if ('value' === t && 'PROGRESS' !== s && !s.includes('-')) {
                        var l = null == n ? '' : n
                        return (
                          (('OPTION' === s ? e.getAttribute('value') || '' : e.value) === l &&
                            '_value' in e) ||
                            (e.value = l),
                          null == n && e.removeAttribute(t),
                          void (e._value = n)
                        )
                      }
                      var u = !1
                      if ('' === n || null == n) {
                        var c = typeof e[t]
                        'boolean' === c
                          ? (n = Wn(n))
                          : null == n && 'string' === c
                            ? ((n = ''), (u = !0))
                            : 'number' === c && ((n = 0), (u = !0))
                      }
                      try {
                        e[t] = n
                      } catch (d) {}
                      u && e.removeAttribute(t)
                    })(e, t, r, a, o, s, l)
                  : ('true-value' === t
                      ? (e._trueValue = r)
                      : 'false-value' === t && (e._falseValue = r),
                    (function (e, t, n, r) {
                      if (r && t.startsWith('xlink:'))
                        null == n
                          ? e.removeAttributeNS(tu, t.slice(6, t.length))
                          : e.setAttributeNS(tu, t, n)
                      else {
                        var i = Hn(t)
                        null == n || (i && !Wn(n))
                          ? e.removeAttribute(t)
                          : e.setAttribute(t, i ? '' : n)
                      }
                    })(e, t, r, u))
        },
      },
      Wl,
    )
  var pu = function () {
    var e = (uu || (uu = Qs(fu))).createApp(...arguments),
      { mount: t } = e
    return (
      (e.mount = (n) => {
        var r = (function (e) {
          if (pn(e)) {
            return document.querySelector(e)
          }
          return e
        })(n)
        if (r) {
          var i = e._component
          fn(i) || i.render || i.template || (i.template = r.innerHTML), (r.innerHTML = '')
          var a = t(
            r,
            !1,
            (function (e) {
              if (e instanceof SVGElement) return 'svg'
              if ('function' == typeof MathMLElement && e instanceof MathMLElement) return 'mathml'
            })(r),
          )
          return (
            r instanceof Element &&
              (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
            a
          )
        }
      }),
      e
    )
  }
  var vu,
    gu,
    mu = ['top', 'left', 'right', 'bottom'],
    _u = {}
  function yu() {
    return (gu =
      'CSS' in window && 'function' == typeof CSS.supports
        ? CSS.supports('top: env(safe-area-inset-top)')
          ? 'env'
          : CSS.supports('top: constant(safe-area-inset-top)')
            ? 'constant'
            : ''
        : '')
  }
  function bu() {
    if ((gu = 'string' == typeof gu ? gu : yu())) {
      var e = [],
        t = !1
      try {
        var n = Object.defineProperty({}, 'passive', {
          get: function () {
            t = { passive: !0 }
          },
        })
        window.addEventListener('test', null, n)
      } catch (s) {}
      var r = document.createElement('div')
      i(r, {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '0',
        height: '0',
        zIndex: '-1',
        overflow: 'hidden',
        visibility: 'hidden',
      }),
        mu.forEach(function (e) {
          o(r, e)
        }),
        document.body.appendChild(r),
        a(),
        (vu = !0)
    } else
      mu.forEach(function (e) {
        _u[e] = 0
      })
    function i(e, t) {
      var n = e.style
      Object.keys(t).forEach(function (e) {
        var r = t[e]
        n[e] = r
      })
    }
    function a(t) {
      t
        ? e.push(t)
        : e.forEach(function (e) {
            e()
          })
    }
    function o(e, n) {
      var r = document.createElement('div'),
        o = document.createElement('div'),
        s = document.createElement('div'),
        l = document.createElement('div'),
        u = {
          position: 'absolute',
          width: '100px',
          height: '200px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          paddingBottom: gu + '(safe-area-inset-' + n + ')',
        }
      i(r, u),
        i(o, u),
        i(s, { transition: '0s', animation: 'none', width: '400px', height: '400px' }),
        i(l, { transition: '0s', animation: 'none', width: '250%', height: '250%' }),
        r.appendChild(s),
        o.appendChild(l),
        e.appendChild(r),
        e.appendChild(o),
        a(function () {
          r.scrollTop = o.scrollTop = 1e4
          var e = r.scrollTop,
            i = o.scrollTop
          function a() {
            this.scrollTop !== (this === r ? e : i) &&
              ((r.scrollTop = o.scrollTop = 1e4),
              (e = r.scrollTop),
              (i = o.scrollTop),
              (function (e) {
                xu.length ||
                  setTimeout(function () {
                    var e = {}
                    xu.forEach(function (t) {
                      e[t] = _u[t]
                    }),
                      (xu.length = 0),
                      Su.forEach(function (t) {
                        t(e)
                      })
                  }, 0)
                xu.push(e)
              })(n))
          }
          r.addEventListener('scroll', a, t), o.addEventListener('scroll', a, t)
        })
      var c = getComputedStyle(r)
      Object.defineProperty(_u, n, {
        configurable: !0,
        get: function () {
          return parseFloat(c.paddingBottom)
        },
      })
    }
  }
  function wu(e) {
    return vu || bu(), _u[e]
  }
  var xu = []
  var Su = []
  const ku = e({
    get support() {
      return 0 != ('string' == typeof gu ? gu : yu()).length
    },
    get top() {
      return wu('top')
    },
    get left() {
      return wu('left')
    },
    get right() {
      return wu('right')
    },
    get bottom() {
      return wu('bottom')
    },
    onChange: function (e) {
      yu() && (vu || bu(), 'function' == typeof e && Su.push(e))
    },
    offChange: function (e) {
      var t = Su.indexOf(e)
      t >= 0 && Su.splice(t, 1)
    },
  })
  var Cu = hu(() => {}, ['prevent'])
  function Tu(e, t) {
    return parseInt((e.getPropertyValue(t).match(/\d+/) || ['0'])[0])
  }
  function Au() {
    var e = Tu(document.documentElement.style, '--window-top')
    return e ? e + ku.top : 0
  }
  function Mu(e) {
    return Symbol(e)
  }
  function Eu(e) {
    return -1 !== (e += '').indexOf('rpx') || -1 !== e.indexOf('upx')
  }
  function Ou(e) {
    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      return (function (e) {
        if (!Eu(e)) return e
        return e.replace(/(\d+(\.\d+)?)[ru]px/g, (e, t) => uni.upx2px(parseFloat(t)) + 'px')
      })(e)
    if (pn(e)) {
      var t = parseInt(e) || 0
      return Eu(e) ? uni.upx2px(t) : t
    }
    return e
  }
  function Lu(e) {
    return 0 === e.tagName.indexOf('UNI-')
  }
  var zu,
    Nu =
      'M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z',
    Iu =
      'M31.562 4.9966666659375q0.435 0.399 0.435 0.87 0.036 0.58-0.399 0.98l-18.61 19.917q-0.145 0.145-0.327 0.217-0.073 0.037-0.145 0.11-0.254 0.035-0.472 0.035-0.29 0-0.544-0.036l-0.145-0.072q-0.109-0.073-0.217-0.182l-0.11-0.072L0.363 16.2786666659375q-0.327-0.399-0.363-0.907 0-0.544 0.363-1.016 0.435-0.326 0.961-0.362 0.527-0.036 0.962 0.362l9.722 9.542L29.712 5.0326666659375q0.399-0.363 0.943-0.363 0.544-0.036 0.907 0.327z'
  function Pu(e) {
    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 27
    return gl(
      'svg',
      { width: t, height: t, viewBox: '0 0 32 32' },
      [
        gl(
          'path',
          { d: e, fill: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '#000' },
          null,
          8,
          ['d', 'fill'],
        ),
      ],
      8,
      ['width', 'height'],
    )
  }
  function Du() {
    return Bu()
  }
  function Bu() {
    return (
      window.__id__ || (window.__id__ = plus.webview.currentWebview().id), parseInt(window.__id__)
    )
  }
  function Ru(e) {
    e.preventDefault()
  }
  var Fu,
    qu,
    ju,
    Vu,
    $u,
    Hu = 0
  function Wu(e) {
    var { onPageScroll: t, onReachBottom: n, onReachBottomDistance: r } = e,
      i = !1,
      a = !1,
      o = !0,
      s = () => {
        function e() {
          if (
            (() => {
              var { scrollHeight: e } = document.documentElement,
                t = window.innerHeight,
                n = window.scrollY,
                i = n > 0 && e > t && n + t + r >= e,
                o = Math.abs(e - Hu) > r
              return !i || (a && !o) ? (!i && a && (a = !1), !1) : ((Hu = e), (a = !0), !0)
            })()
          )
            return (
              n && n(),
              (o = !1),
              setTimeout(function () {
                o = !0
              }, 350),
              !0
            )
        }
        t && t(window.pageYOffset), n && o && (e() || (zu = setTimeout(e, 300))), (i = !1)
      }
    return function () {
      clearTimeout(zu), i || requestAnimationFrame(s), (i = !0)
    }
  }
  function Uu(e, t) {
    if (0 === t.indexOf('/')) return t
    if (0 === t.indexOf('./')) return Uu(e, t.slice(2))
    for (var n = t.split('/'), r = n.length, i = 0; i < r && '..' === n[i]; i++);
    n.splice(0, i), (t = n.join('/'))
    var a = e.length > 0 ? e.split('/') : []
    return a.splice(a.length - i - 1, i + 1), cr(a.concat(n).join('/'))
  }
  function Yu() {
    return 'object' == typeof window && 'object' == typeof navigator && 'object' == typeof document
      ? 'webview'
      : 'v8'
  }
  function Xu() {
    return Fu.webview.currentWebview().id
  }
  var Zu = {}
  function Gu(e) {
    var t = e.data && e.data.__message
    if (t && t.__page) {
      var n = t.__page,
        r = Zu[n]
      r && r(t), t.keep || delete Zu[n]
    }
  }
  class Ku {
    constructor(e) {
      this.webview = e
    }
    sendMessage(e) {
      var t = JSON.parse(JSON.stringify({ __message: { data: e } })),
        n = this.webview.id
      ju
        ? new ju(n).postMessage(t)
        : Fu.webview.postMessageToUniNView && Fu.webview.postMessageToUniNView(t, n)
    }
    close() {
      this.webview.close()
    }
  }
  function Ju(e) {
    var { context: t = {}, url: n, data: r = {}, style: i = {}, onMessage: a, onClose: o } = e,
      s = __uniConfig.darkmode
    ;(Fu = t.plus || plus),
      (qu = t.weex || ('object' == typeof weex ? weex : null)),
      (ju = t.BroadcastChannel || ('object' == typeof BroadcastChannel ? BroadcastChannel : null))
    var l = 'page'.concat(Date.now())
    !1 !== (i = on({}, i)).titleNView &&
      'none' !== i.titleNView &&
      (i.titleNView = on({ autoBackButton: !0, titleSize: '17px' }, i.titleNView))
    var u = {
      top: 0,
      bottom: 0,
      usingComponents: {},
      popGesture: 'close',
      scrollIndicator: 'none',
      animationType: 'pop-in',
      animationDuration: 200,
      uniNView: {
        path: '/'.concat(n, '.js'),
        defaultFontSize: 16,
        viewport: Fu.screen.resolutionWidth,
      },
    }
    i = on(u, i)
    var c = Fu.webview.create('', l, i, {
      extras: { from: Xu(), runtime: Yu(), data: on({}, r, { darkmode: s }), useGlobalEvent: !ju },
    })
    return (
      c.addEventListener('close', o),
      (function (e, t) {
        'v8' === Yu()
          ? ju
            ? (Vu && Vu.close(), ((Vu = new ju(Xu())).onmessage = Gu))
            : $u || ($u = qu.requireModule('globalEvent')).addEventListener('plusMessage', Gu)
          : (window.__plusMessage = Gu),
          (Zu[e] = t)
      })(l, (e) => {
        fn(a) && a(e.data), e.keep || c.close('auto')
      }),
      c.show(i.animationType, i.animationDuration),
      new Ku(c)
    )
  }
  function Qu() {
    Pi(),
      gr(Lu),
      window.addEventListener('touchstart', zi, Ti),
      window.addEventListener('touchmove', Ni, Ti),
      window.addEventListener('touchend', Ai, Ti),
      window.addEventListener('touchcancel', Ai, Ti)
  }
  class ec {
    constructor(e) {
      ;(this.$bindClass = !1),
        (this.$bindStyle = !1),
        (this.$vm = e),
        (this.$el = e.$el),
        this.$el.getAttribute &&
          ((this.$bindClass = !!this.$el.getAttribute('class')),
          (this.$bindStyle = !!this.$el.getAttribute('style')))
    }
    selectComponent(e) {
      if (this.$el && e) {
        var t = rc(this.$el.querySelector(e))
        if (t) return tc(t)
      }
    }
    selectAllComponents(e) {
      if (!this.$el || !e) return []
      for (var t = [], n = this.$el.querySelectorAll(e), r = 0; r < n.length; r++) {
        var i = rc(n[r])
        i && t.push(tc(i))
      }
      return t
    }
    forceUpdate(e) {
      'class' === e
        ? this.$bindClass
          ? ((this.$el.__wxsClassChanged = !0), this.$vm.$forceUpdate())
          : this.updateWxsClass()
        : 'style' === e &&
          (this.$bindStyle
            ? ((this.$el.__wxsStyleChanged = !0), this.$vm.$forceUpdate())
            : this.updateWxsStyle())
    }
    updateWxsClass() {
      var { __wxsAddClass: e } = this.$el
      e.length && (this.$el.className = e.join(' '))
    }
    updateWxsStyle() {
      var { __wxsStyle: e } = this.$el
      e &&
        this.$el.setAttribute(
          'style',
          (function (e) {
            var t = ''
            if (!e || pn(e)) return t
            for (var n in e) {
              var r = e[n],
                i = n.startsWith('--') ? n : Mn(n)
              ;(pn(r) || 'number' == typeof r) && (t += ''.concat(i, ':').concat(r, ';'))
            }
            return t
          })(e),
        )
    }
    setStyle(e) {
      return this.$el && e
        ? (pn(e) && (e = qn(e)),
          wn(e) && ((this.$el.__wxsStyle = e), this.forceUpdate('style')),
          this)
        : this
    }
    addClass(e) {
      if (!this.$el || !e) return this
      var t = this.$el.__wxsAddClass || (this.$el.__wxsAddClass = [])
      return -1 === t.indexOf(e) && (t.push(e), this.forceUpdate('class')), this
    }
    removeClass(e) {
      if (!this.$el || !e) return this
      var { __wxsAddClass: t } = this.$el
      if (t) {
        var n = t.indexOf(e)
        n > -1 && t.splice(n, 1)
      }
      var r = this.$el.__wxsRemoveClass || (this.$el.__wxsRemoveClass = [])
      return -1 === r.indexOf(e) && (r.push(e), this.forceUpdate('class')), this
    }
    hasClass(e) {
      return this.$el && this.$el.classList.contains(e)
    }
    getDataset() {
      return this.$el && this.$el.dataset
    }
    callMethod(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = this.$vm[e]
      fn(n)
        ? n(JSON.parse(JSON.stringify(t)))
        : this.$vm.ownerId &&
          UniViewJSBridge.publishHandler('onWxsInvokeCallMethod', {
            nodeId: this.$el.__id,
            ownerId: this.$vm.ownerId,
            method: e,
            args: t,
          })
    }
    requestAnimationFrame(e) {
      return window.requestAnimationFrame(e)
    }
    getState() {
      return this.$el && (this.$el.__wxsState || (this.$el.__wxsState = {}))
    }
    triggerEvent(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      return this.$vm.$emit(e, t), this
    }
    getComputedStyle(e) {
      if (this.$el) {
        var t = window.getComputedStyle(this.$el)
        return e && e.length ? e.reduce((e, n) => ((e[n] = t[n]), e), {}) : t
      }
      return {}
    }
    setTimeout(e, t) {
      return window.setTimeout(e, t)
    }
    clearTimeout(e) {
      return window.clearTimeout(e)
    }
    getBoundingClientRect() {
      return this.$el.getBoundingClientRect()
    }
  }
  function tc(e) {
    if (e && e.$el)
      return (
        e.$el.__wxsComponentDescriptor || (e.$el.__wxsComponentDescriptor = new ec(e)),
        e.$el.__wxsComponentDescriptor
      )
  }
  function nc(e, t) {
    return tc(e)
  }
  function rc(e) {
    if (e) return ic(e)
  }
  function ic(e) {
    return (
      e.__wxsVm ||
      (e.__wxsVm = {
        ownerId: e.__ownerId,
        $el: e,
        $emit() {},
        $forceUpdate() {
          var t,
            n,
            {
              __wxsStyle: r,
              __wxsAddClass: i,
              __wxsRemoveClass: a,
              __wxsStyleChanged: o,
              __wxsClassChanged: s,
            } = e
          o &&
            ((e.__wxsStyleChanged = !1),
            r &&
              (n = () => {
                Object.keys(r).forEach((t) => {
                  e.style[t] = r[t]
                })
              })),
            s &&
              ((e.__wxsClassChanged = !1),
              (t = () => {
                a &&
                  a.forEach((t) => {
                    e.classList.remove(t)
                  }),
                  i &&
                    i.forEach((t) => {
                      e.classList.add(t)
                    })
              })),
            requestAnimationFrame(() => {
              t && t(), n && n()
            })
        },
      })
    )
  }
  var ac = (e) => !e.type.indexOf('key') && e instanceof KeyboardEvent,
    oc = (e) => 'click' === e.type,
    sc = (e) => 0 === e.type.indexOf('mouse') || ['contextmenu'].includes(e.type),
    lc = (e) =>
      ('undefined' != typeof TouchEvent && e instanceof TouchEvent) ||
      0 === e.type.indexOf('touch') ||
      ['longpress'].indexOf(e.type) >= 0
  function uc(e, t, n) {
    var { currentTarget: r } = e
    if (!(e instanceof Event && r instanceof HTMLElement)) return [e]
    var i = !Lu(r),
      a = cc(e, i)
    if (oc(e))
      !(function (e, t) {
        var { x: n, y: r } = t,
          i = Au()
        ;(e.detail = { x: n, y: r - i }), (e.touches = e.changedTouches = [dc(t, i)])
      })(a, e)
    else if (sc(e))
      !(function (e, t) {
        var n = Au()
        ;(e.pageX = t.pageX),
          (e.pageY = t.pageY - n),
          (e.clientX = t.clientX),
          (e.clientY = t.clientY - n),
          (e.touches = e.changedTouches = [dc(t, n)])
      })(a, e)
    else if (lc(e)) {
      var o = Au()
      ;(a.touches = hc(e.touches, o)), (a.changedTouches = hc(e.changedTouches, o))
    } else if (ac(e)) {
      ;['key', 'code'].forEach((t) => {
        Object.defineProperty(a, t, { get: () => e[t] })
      })
    }
    return [a]
  }
  function cc(e) {
    var t,
      n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      { type: r, timeStamp: i, target: a, currentTarget: o } = e
    t = br(
      n
        ? a
        : (function (e) {
            for (; !Lu(e); ) e = e.parentElement
            return e
          })(a),
    )
    var s = { type: r, timeStamp: i, target: t, detail: {}, currentTarget: br(o) }
    return (
      e instanceof CustomEvent && wn(e.detail) && (s.detail = e.detail),
      e._stopped && (s._stopped = !0),
      e.type.startsWith('touch') &&
        ((s.touches = e.touches), (s.changedTouches = e.changedTouches)),
      s
    )
  }
  function dc(e, t) {
    return {
      force: 1,
      identifier: 0,
      clientX: e.clientX,
      clientY: e.clientY - t,
      pageX: e.pageX,
      pageY: e.pageY - t,
    }
  }
  function hc(e, t) {
    for (var n = [], r = 0; r < e.length; r++) {
      var { identifier: i, pageX: a, pageY: o, clientX: s, clientY: l, force: u } = e[r]
      n.push({ identifier: i, pageX: a, pageY: o - t, clientX: s, clientY: l - t, force: u || 0 })
    }
    return n
  }
  var fc = 'vdSync',
    pc = 'onWebviewReady',
    vc = 0,
    gc = 'setLocale',
    mc = on(Si, {
      publishHandler: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Bu() + ''
        plus.webview.postMessageToUniNView(
          { type: 'subscribeHandler', args: { type: e, data: t, pageId: n } },
          '__uniapp__service',
        )
      },
    })
  function _c(e, t, n, r) {
    return (function (e, t) {
      return function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
        var i = (function (e, t) {
          var n = (function (e) {
            e[0]
          })(t)
          if (n) return n
        })(0, n)
        if (i) throw new Error(i)
        return t.apply(null, n)
      }
    })(0, t)
  }
  function yc() {
    if ('undefined' != typeof __SYSTEM_INFO__) return window.__SYSTEM_INFO__
    var { resolutionWidth: e } = plus.screen.getCurrentSize() || { resolutionWidth: 0 }
    return {
      platform: (plus.os.name || '').toLowerCase(),
      pixelRatio: plus.screen.scale,
      windowWidth: Math.round(e),
    }
  }
  function bc(e) {
    if (0 === e.indexOf('//')) return 'https:' + e
    if (tr.test(e) || nr.test(e)) return e
    if (
      (function (e) {
        if (
          0 === e.indexOf('_www') ||
          0 === e.indexOf('_doc') ||
          0 === e.indexOf('_documents') ||
          0 === e.indexOf('_downloads')
        )
          return !0
        return !1
      })(e)
    )
      return 'file://' + wc(e)
    var t = 'file://' + wc('_www')
    if (0 === e.indexOf('/'))
      return e.startsWith('/storage/') ||
        e.startsWith('/sdcard/') ||
        e.includes('/Containers/Data/Application/')
        ? 'file://' + e
        : t + e
    if (0 === e.indexOf('../') || 0 === e.indexOf('./')) {
      if ('string' == typeof __id__) return t + Uu(cr(__id__), e)
      var n = window.__PAGE_INFO__
      if (n) return t + Uu(cr(n.route), e)
    }
    return e
  }
  var wc = (function (e) {
    var t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  })((e) =>
    plus.io
      .convertLocalFileSystemURL(e)
      .replace(/^\/?apps\//, '/android_asset/apps/')
      .replace(/\/$/, ''),
  )
  var xc = 0
  var Sc = '_doc/uniapp_temp'
  function kc(e) {
    return (function (e) {
      return new Promise(function (t, n) {
        0 === e.indexOf('http://') || 0 === e.indexOf('https://')
          ? plus.downloader
              .createDownload(e, { filename: ''.concat(Sc, '/download/') }, function (e, r) {
                200 === r ? t(e.filename) : n(new Error('network fail'))
              })
              .start()
          : t(e)
      })
    })(e).then(function (e) {
      var t,
        n = window
      return n.webkit && n.webkit.messageHandlers
        ? ((t = e),
          new Promise(function (e, n) {
            function r() {
              var r = new plus.nativeObj.Bitmap(
                'bitmap_'.concat(Date.now(), '_').concat(Math.random(), '}'),
              )
              r.load(
                t,
                function () {
                  e(r.toBase64Data()), r.clear()
                },
                function (e) {
                  r.clear(), n(e)
                },
              )
            }
            plus.io.resolveLocalFileSystemURL(
              t,
              function (t) {
                t.file(function (t) {
                  var n = new plus.io.FileReader()
                  ;(n.onload = function (t) {
                    e(t.target.result)
                  }),
                    (n.onerror = r),
                    n.readAsDataURL(t)
                }, r)
              },
              r,
            )
          }))
        : plus.io.convertLocalFileSystemURL(e)
    })
  }
  var Cc = {}
  !(function (e) {
    var t =
      'undefined' != typeof Uint8Array &&
      'undefined' != typeof Uint16Array &&
      'undefined' != typeof Int32Array
    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    ;(e.assign = function (e) {
      for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
        var r = t.shift()
        if (r) {
          if ('object' != typeof r) throw new TypeError(r + 'must be non-object')
          for (var i in r) n(r, i) && (e[i] = r[i])
        }
      }
      return e
    }),
      (e.shrinkBuf = function (e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e)
      })
    var r = {
        arraySet: function (e, t, n, r, i) {
          if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i)
          else for (var a = 0; a < r; a++) e[i + a] = t[n + a]
        },
        flattenChunks: function (e) {
          var t, n, r, i, a, o
          for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length
          for (o = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++)
            (a = e[t]), o.set(a, i), (i += a.length)
          return o
        },
      },
      i = {
        arraySet: function (e, t, n, r, i) {
          for (var a = 0; a < r; a++) e[i + a] = t[n + a]
        },
        flattenChunks: function (e) {
          return [].concat.apply([], e)
        },
      }
    ;(e.setTyped = function (t) {
      t
        ? ((e.Buf8 = Uint8Array), (e.Buf16 = Uint16Array), (e.Buf32 = Int32Array), e.assign(e, r))
        : ((e.Buf8 = Array), (e.Buf16 = Array), (e.Buf32 = Array), e.assign(e, i))
    }),
      e.setTyped(t)
  })(Cc)
  var Tc = {},
    Ac = {},
    Mc = {},
    Ec = Cc,
    Oc = 0,
    Lc = 1
  function zc(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0
  }
  var Nc = 0,
    Ic = 29,
    Pc = 256,
    Dc = Pc + 1 + Ic,
    Bc = 30,
    Rc = 19,
    Fc = 2 * Dc + 1,
    qc = 15,
    jc = 16,
    Vc = 7,
    $c = 256,
    Hc = 16,
    Wc = 17,
    Uc = 18,
    Yc = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    Xc = [
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
      13,
    ],
    Zc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    Gc = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    Kc = new Array(2 * (Dc + 2))
  zc(Kc)
  var Jc = new Array(2 * Bc)
  zc(Jc)
  var Qc = new Array(512)
  zc(Qc)
  var ed = new Array(256)
  zc(ed)
  var td = new Array(Ic)
  zc(td)
  var nd,
    rd,
    id,
    ad = new Array(Bc)
  function od(e, t, n, r, i) {
    ;(this.static_tree = e),
      (this.extra_bits = t),
      (this.extra_base = n),
      (this.elems = r),
      (this.max_length = i),
      (this.has_stree = e && e.length)
  }
  function sd(e, t) {
    ;(this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t)
  }
  function ld(e) {
    return e < 256 ? Qc[e] : Qc[256 + (e >>> 7)]
  }
  function ud(e, t) {
    ;(e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255)
  }
  function cd(e, t, n) {
    e.bi_valid > jc - n
      ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
        ud(e, e.bi_buf),
        (e.bi_buf = t >> (jc - e.bi_valid)),
        (e.bi_valid += n - jc))
      : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n))
  }
  function dd(e, t, n) {
    cd(e, n[2 * t], n[2 * t + 1])
  }
  function hd(e, t) {
    var n = 0
    do {
      ;(n |= 1 & e), (e >>>= 1), (n <<= 1)
    } while (--t > 0)
    return n >>> 1
  }
  function fd(e, t, n) {
    var r,
      i,
      a = new Array(qc + 1),
      o = 0
    for (r = 1; r <= qc; r++) a[r] = o = (o + n[r - 1]) << 1
    for (i = 0; i <= t; i++) {
      var s = e[2 * i + 1]
      0 !== s && (e[2 * i] = hd(a[s]++, s))
    }
  }
  function pd(e) {
    var t
    for (t = 0; t < Dc; t++) e.dyn_ltree[2 * t] = 0
    for (t = 0; t < Bc; t++) e.dyn_dtree[2 * t] = 0
    for (t = 0; t < Rc; t++) e.bl_tree[2 * t] = 0
    ;(e.dyn_ltree[2 * $c] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0)
  }
  function vd(e) {
    e.bi_valid > 8 ? ud(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
      (e.bi_buf = 0),
      (e.bi_valid = 0)
  }
  function gd(e, t, n, r) {
    var i = 2 * t,
      a = 2 * n
    return e[i] < e[a] || (e[i] === e[a] && r[t] <= r[n])
  }
  function md(e, t, n) {
    for (
      var r = e.heap[n], i = n << 1;
      i <= e.heap_len &&
      (i < e.heap_len && gd(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
      !gd(t, r, e.heap[i], e.depth));

    )
      (e.heap[n] = e.heap[i]), (n = i), (i <<= 1)
    e.heap[n] = r
  }
  function _d(e, t, n) {
    var r,
      i,
      a,
      o,
      s = 0
    if (0 !== e.last_lit)
      do {
        ;(r = (e.pending_buf[e.d_buf + 2 * s] << 8) | e.pending_buf[e.d_buf + 2 * s + 1]),
          (i = e.pending_buf[e.l_buf + s]),
          s++,
          0 === r
            ? dd(e, i, t)
            : (dd(e, (a = ed[i]) + Pc + 1, t),
              0 !== (o = Yc[a]) && cd(e, (i -= td[a]), o),
              dd(e, (a = ld(--r)), n),
              0 !== (o = Xc[a]) && cd(e, (r -= ad[a]), o))
      } while (s < e.last_lit)
    dd(e, $c, t)
  }
  function yd(e, t) {
    var n,
      r,
      i,
      a = t.dyn_tree,
      o = t.stat_desc.static_tree,
      s = t.stat_desc.has_stree,
      l = t.stat_desc.elems,
      u = -1
    for (e.heap_len = 0, e.heap_max = Fc, n = 0; n < l; n++)
      0 !== a[2 * n] ? ((e.heap[++e.heap_len] = u = n), (e.depth[n] = 0)) : (a[2 * n + 1] = 0)
    for (; e.heap_len < 2; )
      (a[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1),
        (e.depth[i] = 0),
        e.opt_len--,
        s && (e.static_len -= o[2 * i + 1])
    for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) md(e, a, n)
    i = l
    do {
      ;(n = e.heap[1]),
        (e.heap[1] = e.heap[e.heap_len--]),
        md(e, a, 1),
        (r = e.heap[1]),
        (e.heap[--e.heap_max] = n),
        (e.heap[--e.heap_max] = r),
        (a[2 * i] = a[2 * n] + a[2 * r]),
        (e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1),
        (a[2 * n + 1] = a[2 * r + 1] = i),
        (e.heap[1] = i++),
        md(e, a, 1)
    } while (e.heap_len >= 2)
    ;(e.heap[--e.heap_max] = e.heap[1]),
      (function (e, t) {
        var n,
          r,
          i,
          a,
          o,
          s,
          l = t.dyn_tree,
          u = t.max_code,
          c = t.stat_desc.static_tree,
          d = t.stat_desc.has_stree,
          h = t.stat_desc.extra_bits,
          f = t.stat_desc.extra_base,
          p = t.stat_desc.max_length,
          v = 0
        for (a = 0; a <= qc; a++) e.bl_count[a] = 0
        for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < Fc; n++)
          (a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > p && ((a = p), v++),
            (l[2 * r + 1] = a),
            r > u ||
              (e.bl_count[a]++,
              (o = 0),
              r >= f && (o = h[r - f]),
              (s = l[2 * r]),
              (e.opt_len += s * (a + o)),
              d && (e.static_len += s * (c[2 * r + 1] + o)))
        if (0 !== v) {
          do {
            for (a = p - 1; 0 === e.bl_count[a]; ) a--
            e.bl_count[a]--, (e.bl_count[a + 1] += 2), e.bl_count[p]--, (v -= 2)
          } while (v > 0)
          for (a = p; 0 !== a; a--)
            for (r = e.bl_count[a]; 0 !== r; )
              (i = e.heap[--n]) > u ||
                (l[2 * i + 1] !== a &&
                  ((e.opt_len += (a - l[2 * i + 1]) * l[2 * i]), (l[2 * i + 1] = a)),
                r--)
        }
      })(e, t),
      fd(a, u, e.bl_count)
  }
  function bd(e, t, n) {
    var r,
      i,
      a = -1,
      o = t[1],
      s = 0,
      l = 7,
      u = 4
    for (0 === o && ((l = 138), (u = 3)), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++)
      (i = o),
        (o = t[2 * (r + 1) + 1]),
        (++s < l && i === o) ||
          (s < u
            ? (e.bl_tree[2 * i] += s)
            : 0 !== i
              ? (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * Hc]++)
              : s <= 10
                ? e.bl_tree[2 * Wc]++
                : e.bl_tree[2 * Uc]++,
          (s = 0),
          (a = i),
          0 === o ? ((l = 138), (u = 3)) : i === o ? ((l = 6), (u = 3)) : ((l = 7), (u = 4)))
  }
  function wd(e, t, n) {
    var r,
      i,
      a = -1,
      o = t[1],
      s = 0,
      l = 7,
      u = 4
    for (0 === o && ((l = 138), (u = 3)), r = 0; r <= n; r++)
      if (((i = o), (o = t[2 * (r + 1) + 1]), !(++s < l && i === o))) {
        if (s < u)
          do {
            dd(e, i, e.bl_tree)
          } while (0 != --s)
        else
          0 !== i
            ? (i !== a && (dd(e, i, e.bl_tree), s--), dd(e, Hc, e.bl_tree), cd(e, s - 3, 2))
            : s <= 10
              ? (dd(e, Wc, e.bl_tree), cd(e, s - 3, 3))
              : (dd(e, Uc, e.bl_tree), cd(e, s - 11, 7))
        ;(s = 0),
          (a = i),
          0 === o ? ((l = 138), (u = 3)) : i === o ? ((l = 6), (u = 3)) : ((l = 7), (u = 4))
      }
  }
  zc(ad)
  var xd = !1
  function Sd(e, t, n, r) {
    cd(e, (Nc << 1) + (r ? 1 : 0), 3),
      (function (e, t, n) {
        vd(e),
          ud(e, n),
          ud(e, ~n),
          Ec.arraySet(e.pending_buf, e.window, t, n, e.pending),
          (e.pending += n)
      })(e, t, n)
  }
  ;(Mc._tr_init = function (e) {
    xd ||
      (!(function () {
        var e,
          t,
          n,
          r,
          i,
          a = new Array(qc + 1)
        for (n = 0, r = 0; r < Ic - 1; r++) for (td[r] = n, e = 0; e < 1 << Yc[r]; e++) ed[n++] = r
        for (ed[n - 1] = r, i = 0, r = 0; r < 16; r++)
          for (ad[r] = i, e = 0; e < 1 << Xc[r]; e++) Qc[i++] = r
        for (i >>= 7; r < Bc; r++)
          for (ad[r] = i << 7, e = 0; e < 1 << (Xc[r] - 7); e++) Qc[256 + i++] = r
        for (t = 0; t <= qc; t++) a[t] = 0
        for (e = 0; e <= 143; ) (Kc[2 * e + 1] = 8), e++, a[8]++
        for (; e <= 255; ) (Kc[2 * e + 1] = 9), e++, a[9]++
        for (; e <= 279; ) (Kc[2 * e + 1] = 7), e++, a[7]++
        for (; e <= 287; ) (Kc[2 * e + 1] = 8), e++, a[8]++
        for (fd(Kc, Dc + 1, a), e = 0; e < Bc; e++) (Jc[2 * e + 1] = 5), (Jc[2 * e] = hd(e, 5))
        ;(nd = new od(Kc, Yc, Pc + 1, Dc, qc)),
          (rd = new od(Jc, Xc, 0, Bc, qc)),
          (id = new od(new Array(0), Zc, 0, Rc, Vc))
      })(),
      (xd = !0)),
      (e.l_desc = new sd(e.dyn_ltree, nd)),
      (e.d_desc = new sd(e.dyn_dtree, rd)),
      (e.bl_desc = new sd(e.bl_tree, id)),
      (e.bi_buf = 0),
      (e.bi_valid = 0),
      pd(e)
  }),
    (Mc._tr_stored_block = Sd),
    (Mc._tr_flush_block = function (e, t, n, r) {
      var i,
        a,
        o = 0
      e.level > 0
        ? (2 === e.strm.data_type &&
            (e.strm.data_type = (function (e) {
              var t,
                n = 4093624447
              for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && 0 !== e.dyn_ltree[2 * t]) return Oc
              if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return Lc
              for (t = 32; t < Pc; t++) if (0 !== e.dyn_ltree[2 * t]) return Lc
              return Oc
            })(e)),
          yd(e, e.l_desc),
          yd(e, e.d_desc),
          (o = (function (e) {
            var t
            for (
              bd(e, e.dyn_ltree, e.l_desc.max_code),
                bd(e, e.dyn_dtree, e.d_desc.max_code),
                yd(e, e.bl_desc),
                t = Rc - 1;
              t >= 3 && 0 === e.bl_tree[2 * Gc[t] + 1];
              t--
            );
            return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t
          })(e)),
          (i = (e.opt_len + 3 + 7) >>> 3),
          (a = (e.static_len + 3 + 7) >>> 3) <= i && (i = a))
        : (i = a = n + 5),
        n + 4 <= i && -1 !== t
          ? Sd(e, t, n, r)
          : 4 === e.strategy || a === i
            ? (cd(e, 2 + (r ? 1 : 0), 3), _d(e, Kc, Jc))
            : (cd(e, 4 + (r ? 1 : 0), 3),
              (function (e, t, n, r) {
                var i
                for (cd(e, t - 257, 5), cd(e, n - 1, 5), cd(e, r - 4, 4), i = 0; i < r; i++)
                  cd(e, e.bl_tree[2 * Gc[i] + 1], 3)
                wd(e, e.dyn_ltree, t - 1), wd(e, e.dyn_dtree, n - 1)
              })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1),
              _d(e, e.dyn_ltree, e.dyn_dtree)),
        pd(e),
        r && vd(e)
    }),
    (Mc._tr_tally = function (e, t, n) {
      return (
        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
        (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
        e.last_lit++,
        0 === t
          ? e.dyn_ltree[2 * n]++
          : (e.matches++, t--, e.dyn_ltree[2 * (ed[n] + Pc + 1)]++, e.dyn_dtree[2 * ld(t)]++),
        e.last_lit === e.lit_bufsize - 1
      )
    }),
    (Mc._tr_align = function (e) {
      cd(e, 2, 3),
        dd(e, $c, Kc),
        (function (e) {
          16 === e.bi_valid
            ? (ud(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
            : e.bi_valid >= 8 &&
              ((e.pending_buf[e.pending++] = 255 & e.bi_buf), (e.bi_buf >>= 8), (e.bi_valid -= 8))
        })(e)
    })
  var kd = function (e, t, n, r) {
    for (var i = 65535 & e, a = (e >>> 16) & 65535, o = 0; 0 !== n; ) {
      n -= o = n > 2e3 ? 2e3 : n
      do {
        a = (a + (i = (i + t[r++]) | 0)) | 0
      } while (--o)
      ;(i %= 65521), (a %= 65521)
    }
    return i | (a << 16)
  }
  var Cd = (function () {
    for (var e, t = [], n = 0; n < 256; n++) {
      e = n
      for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1
      t[n] = e
    }
    return t
  })()
  var Td,
    Ad = function (e, t, n, r) {
      var i = Cd,
        a = r + n
      e ^= -1
      for (var o = r; o < a; o++) e = (e >>> 8) ^ i[255 & (e ^ t[o])]
      return ~e
    },
    Md = {
      2: 'need dictionary',
      1: 'stream end',
      0: '',
      '-1': 'file error',
      '-2': 'stream error',
      '-3': 'data error',
      '-4': 'insufficient memory',
      '-5': 'buffer error',
      '-6': 'incompatible version',
    },
    Ed = Cc,
    Od = Mc,
    Ld = kd,
    zd = Ad,
    Nd = Md,
    Id = 0,
    Pd = 4,
    Dd = 0,
    Bd = -2,
    Rd = -1,
    Fd = 4,
    qd = 2,
    jd = 8,
    Vd = 9,
    $d = 286,
    Hd = 30,
    Wd = 19,
    Ud = 2 * $d + 1,
    Yd = 15,
    Xd = 3,
    Zd = 258,
    Gd = Zd + Xd + 1,
    Kd = 42,
    Jd = 103,
    Qd = 113,
    eh = 666,
    th = 1,
    nh = 2,
    rh = 3,
    ih = 4
  function ah(e, t) {
    return (e.msg = Nd[t]), t
  }
  function oh(e) {
    return (e << 1) - (e > 4 ? 9 : 0)
  }
  function sh(e) {
    for (var t = e.length; --t >= 0; ) e[t] = 0
  }
  function lh(e) {
    var t = e.state,
      n = t.pending
    n > e.avail_out && (n = e.avail_out),
      0 !== n &&
        (Ed.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
        (e.next_out += n),
        (t.pending_out += n),
        (e.total_out += n),
        (e.avail_out -= n),
        (t.pending -= n),
        0 === t.pending && (t.pending_out = 0))
  }
  function uh(e, t) {
    Od._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
      (e.block_start = e.strstart),
      lh(e.strm)
  }
  function ch(e, t) {
    e.pending_buf[e.pending++] = t
  }
  function dh(e, t) {
    ;(e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t)
  }
  function hh(e, t) {
    var n,
      r,
      i = e.max_chain_length,
      a = e.strstart,
      o = e.prev_length,
      s = e.nice_match,
      l = e.strstart > e.w_size - Gd ? e.strstart - (e.w_size - Gd) : 0,
      u = e.window,
      c = e.w_mask,
      d = e.prev,
      h = e.strstart + Zd,
      f = u[a + o - 1],
      p = u[a + o]
    e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead)
    do {
      if (u[(n = t) + o] === p && u[n + o - 1] === f && u[n] === u[a] && u[++n] === u[a + 1]) {
        ;(a += 2), n++
        do {} while (
          u[++a] === u[++n] &&
          u[++a] === u[++n] &&
          u[++a] === u[++n] &&
          u[++a] === u[++n] &&
          u[++a] === u[++n] &&
          u[++a] === u[++n] &&
          u[++a] === u[++n] &&
          u[++a] === u[++n] &&
          a < h
        )
        if (((r = Zd - (h - a)), (a = h - Zd), r > o)) {
          if (((e.match_start = t), (o = r), r >= s)) break
          ;(f = u[a + o - 1]), (p = u[a + o])
        }
      }
    } while ((t = d[t & c]) > l && 0 != --i)
    return o <= e.lookahead ? o : e.lookahead
  }
  function fh(e) {
    var t,
      n,
      r,
      i,
      a,
      o,
      s,
      l,
      u,
      c,
      d = e.w_size
    do {
      if (((i = e.window_size - e.lookahead - e.strstart), e.strstart >= d + (d - Gd))) {
        Ed.arraySet(e.window, e.window, d, d, 0),
          (e.match_start -= d),
          (e.strstart -= d),
          (e.block_start -= d),
          (t = n = e.hash_size)
        do {
          ;(r = e.head[--t]), (e.head[t] = r >= d ? r - d : 0)
        } while (--n)
        t = n = d
        do {
          ;(r = e.prev[--t]), (e.prev[t] = r >= d ? r - d : 0)
        } while (--n)
        i += d
      }
      if (0 === e.strm.avail_in) break
      if (
        ((o = e.strm),
        (s = e.window),
        (l = e.strstart + e.lookahead),
        (u = i),
        (c = void 0),
        (c = o.avail_in) > u && (c = u),
        (n =
          0 === c
            ? 0
            : ((o.avail_in -= c),
              Ed.arraySet(s, o.input, o.next_in, c, l),
              1 === o.state.wrap
                ? (o.adler = Ld(o.adler, s, c, l))
                : 2 === o.state.wrap && (o.adler = zd(o.adler, s, c, l)),
              (o.next_in += c),
              (o.total_in += c),
              c)),
        (e.lookahead += n),
        e.lookahead + e.insert >= Xd)
      )
        for (
          a = e.strstart - e.insert,
            e.ins_h = e.window[a],
            e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[a + 1]) & e.hash_mask;
          e.insert &&
          ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[a + Xd - 1]) & e.hash_mask),
          (e.prev[a & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = a),
          a++,
          e.insert--,
          !(e.lookahead + e.insert < Xd));

        );
    } while (e.lookahead < Gd && 0 !== e.strm.avail_in)
  }
  function ph(e, t) {
    for (var n, r; ; ) {
      if (e.lookahead < Gd) {
        if ((fh(e), e.lookahead < Gd && t === Id)) return th
        if (0 === e.lookahead) break
      }
      if (
        ((n = 0),
        e.lookahead >= Xd &&
          ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + Xd - 1]) & e.hash_mask),
          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = e.strstart)),
        0 !== n && e.strstart - n <= e.w_size - Gd && (e.match_length = hh(e, n)),
        e.match_length >= Xd)
      )
        if (
          ((r = Od._tr_tally(e, e.strstart - e.match_start, e.match_length - Xd)),
          (e.lookahead -= e.match_length),
          e.match_length <= e.max_lazy_match && e.lookahead >= Xd)
        ) {
          e.match_length--
          do {
            e.strstart++,
              (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + Xd - 1]) & e.hash_mask),
              (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)
          } while (0 != --e.match_length)
          e.strstart++
        } else
          (e.strstart += e.match_length),
            (e.match_length = 0),
            (e.ins_h = e.window[e.strstart]),
            (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask)
      else (r = Od._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++
      if (r && (uh(e, !1), 0 === e.strm.avail_out)) return th
    }
    return (
      (e.insert = e.strstart < Xd - 1 ? e.strstart : Xd - 1),
      t === Pd
        ? (uh(e, !0), 0 === e.strm.avail_out ? rh : ih)
        : e.last_lit && (uh(e, !1), 0 === e.strm.avail_out)
          ? th
          : nh
    )
  }
  function vh(e, t) {
    for (var n, r, i; ; ) {
      if (e.lookahead < Gd) {
        if ((fh(e), e.lookahead < Gd && t === Id)) return th
        if (0 === e.lookahead) break
      }
      if (
        ((n = 0),
        e.lookahead >= Xd &&
          ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + Xd - 1]) & e.hash_mask),
          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
          (e.head[e.ins_h] = e.strstart)),
        (e.prev_length = e.match_length),
        (e.prev_match = e.match_start),
        (e.match_length = Xd - 1),
        0 !== n &&
          e.prev_length < e.max_lazy_match &&
          e.strstart - n <= e.w_size - Gd &&
          ((e.match_length = hh(e, n)),
          e.match_length <= 5 &&
            (1 === e.strategy || (e.match_length === Xd && e.strstart - e.match_start > 4096)) &&
            (e.match_length = Xd - 1)),
        e.prev_length >= Xd && e.match_length <= e.prev_length)
      ) {
        ;(i = e.strstart + e.lookahead - Xd),
          (r = Od._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - Xd)),
          (e.lookahead -= e.prev_length - 1),
          (e.prev_length -= 2)
        do {
          ++e.strstart <= i &&
            ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + Xd - 1]) & e.hash_mask),
            (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart))
        } while (0 != --e.prev_length)
        if (
          ((e.match_available = 0),
          (e.match_length = Xd - 1),
          e.strstart++,
          r && (uh(e, !1), 0 === e.strm.avail_out))
        )
          return th
      } else if (e.match_available) {
        if (
          ((r = Od._tr_tally(e, 0, e.window[e.strstart - 1])) && uh(e, !1),
          e.strstart++,
          e.lookahead--,
          0 === e.strm.avail_out)
        )
          return th
      } else (e.match_available = 1), e.strstart++, e.lookahead--
    }
    return (
      e.match_available &&
        ((r = Od._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
      (e.insert = e.strstart < Xd - 1 ? e.strstart : Xd - 1),
      t === Pd
        ? (uh(e, !0), 0 === e.strm.avail_out ? rh : ih)
        : e.last_lit && (uh(e, !1), 0 === e.strm.avail_out)
          ? th
          : nh
    )
  }
  function gh(e, t, n, r, i) {
    ;(this.good_length = e),
      (this.max_lazy = t),
      (this.nice_length = n),
      (this.max_chain = r),
      (this.func = i)
  }
  function mh() {
    ;(this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = jd),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new Ed.Buf16(2 * Ud)),
      (this.dyn_dtree = new Ed.Buf16(2 * (2 * Hd + 1))),
      (this.bl_tree = new Ed.Buf16(2 * (2 * Wd + 1))),
      sh(this.dyn_ltree),
      sh(this.dyn_dtree),
      sh(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new Ed.Buf16(Yd + 1)),
      (this.heap = new Ed.Buf16(2 * $d + 1)),
      sh(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new Ed.Buf16(2 * $d + 1)),
      sh(this.depth),
      (this.l_buf = 0),
      (this.lit_bufsize = 0),
      (this.last_lit = 0),
      (this.d_buf = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0)
  }
  function _h(e) {
    var t
    return e && e.state
      ? ((e.total_in = e.total_out = 0),
        (e.data_type = qd),
        ((t = e.state).pending = 0),
        (t.pending_out = 0),
        t.wrap < 0 && (t.wrap = -t.wrap),
        (t.status = t.wrap ? Kd : Qd),
        (e.adler = 2 === t.wrap ? 0 : 1),
        (t.last_flush = Id),
        Od._tr_init(t),
        Dd)
      : ah(e, Bd)
  }
  function yh(e) {
    var t,
      n = _h(e)
    return (
      n === Dd &&
        (((t = e.state).window_size = 2 * t.w_size),
        sh(t.head),
        (t.max_lazy_match = Td[t.level].max_lazy),
        (t.good_match = Td[t.level].good_length),
        (t.nice_match = Td[t.level].nice_length),
        (t.max_chain_length = Td[t.level].max_chain),
        (t.strstart = 0),
        (t.block_start = 0),
        (t.lookahead = 0),
        (t.insert = 0),
        (t.match_length = t.prev_length = Xd - 1),
        (t.match_available = 0),
        (t.ins_h = 0)),
      n
    )
  }
  function bh(e, t, n, r, i, a) {
    if (!e) return Bd
    var o = 1
    if (
      (t === Rd && (t = 6),
      r < 0 ? ((o = 0), (r = -r)) : r > 15 && ((o = 2), (r -= 16)),
      i < 1 || i > Vd || n !== jd || r < 8 || r > 15 || t < 0 || t > 9 || a < 0 || a > Fd)
    )
      return ah(e, Bd)
    8 === r && (r = 9)
    var s = new mh()
    return (
      (e.state = s),
      (s.strm = e),
      (s.wrap = o),
      (s.gzhead = null),
      (s.w_bits = r),
      (s.w_size = 1 << s.w_bits),
      (s.w_mask = s.w_size - 1),
      (s.hash_bits = i + 7),
      (s.hash_size = 1 << s.hash_bits),
      (s.hash_mask = s.hash_size - 1),
      (s.hash_shift = ~~((s.hash_bits + Xd - 1) / Xd)),
      (s.window = new Ed.Buf8(2 * s.w_size)),
      (s.head = new Ed.Buf16(s.hash_size)),
      (s.prev = new Ed.Buf16(s.w_size)),
      (s.lit_bufsize = 1 << (i + 6)),
      (s.pending_buf_size = 4 * s.lit_bufsize),
      (s.pending_buf = new Ed.Buf8(s.pending_buf_size)),
      (s.d_buf = 1 * s.lit_bufsize),
      (s.l_buf = 3 * s.lit_bufsize),
      (s.level = t),
      (s.strategy = a),
      (s.method = n),
      yh(e)
    )
  }
  ;(Td = [
    new gh(0, 0, 0, 0, function (e, t) {
      var n = 65535
      for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
        if (e.lookahead <= 1) {
          if ((fh(e), 0 === e.lookahead && t === Id)) return th
          if (0 === e.lookahead) break
        }
        ;(e.strstart += e.lookahead), (e.lookahead = 0)
        var r = e.block_start + n
        if (
          (0 === e.strstart || e.strstart >= r) &&
          ((e.lookahead = e.strstart - r), (e.strstart = r), uh(e, !1), 0 === e.strm.avail_out)
        )
          return th
        if (e.strstart - e.block_start >= e.w_size - Gd && (uh(e, !1), 0 === e.strm.avail_out))
          return th
      }
      return (
        (e.insert = 0),
        t === Pd
          ? (uh(e, !0), 0 === e.strm.avail_out ? rh : ih)
          : (e.strstart > e.block_start && (uh(e, !1), e.strm.avail_out), th)
      )
    }),
    new gh(4, 4, 8, 4, ph),
    new gh(4, 5, 16, 8, ph),
    new gh(4, 6, 32, 32, ph),
    new gh(4, 4, 16, 16, vh),
    new gh(8, 16, 32, 32, vh),
    new gh(8, 16, 128, 128, vh),
    new gh(8, 32, 128, 256, vh),
    new gh(32, 128, 258, 1024, vh),
    new gh(32, 258, 258, 4096, vh),
  ]),
    (Ac.deflateInit = function (e, t) {
      return bh(e, t, jd, 15, 8, 0)
    }),
    (Ac.deflateInit2 = bh),
    (Ac.deflateReset = yh),
    (Ac.deflateResetKeep = _h),
    (Ac.deflateSetHeader = function (e, t) {
      return e && e.state ? (2 !== e.state.wrap ? Bd : ((e.state.gzhead = t), Dd)) : Bd
    }),
    (Ac.deflate = function (e, t) {
      var n, r, i, a
      if (!e || !e.state || t > 5 || t < 0) return e ? ah(e, Bd) : Bd
      if (
        ((r = e.state),
        !e.output || (!e.input && 0 !== e.avail_in) || (r.status === eh && t !== Pd))
      )
        return ah(e, 0 === e.avail_out ? -5 : Bd)
      if (((r.strm = e), (n = r.last_flush), (r.last_flush = t), r.status === Kd))
        if (2 === r.wrap)
          (e.adler = 0),
            ch(r, 31),
            ch(r, 139),
            ch(r, 8),
            r.gzhead
              ? (ch(
                  r,
                  (r.gzhead.text ? 1 : 0) +
                    (r.gzhead.hcrc ? 2 : 0) +
                    (r.gzhead.extra ? 4 : 0) +
                    (r.gzhead.name ? 8 : 0) +
                    (r.gzhead.comment ? 16 : 0),
                ),
                ch(r, 255 & r.gzhead.time),
                ch(r, (r.gzhead.time >> 8) & 255),
                ch(r, (r.gzhead.time >> 16) & 255),
                ch(r, (r.gzhead.time >> 24) & 255),
                ch(r, 9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0),
                ch(r, 255 & r.gzhead.os),
                r.gzhead.extra &&
                  r.gzhead.extra.length &&
                  (ch(r, 255 & r.gzhead.extra.length), ch(r, (r.gzhead.extra.length >> 8) & 255)),
                r.gzhead.hcrc && (e.adler = zd(e.adler, r.pending_buf, r.pending, 0)),
                (r.gzindex = 0),
                (r.status = 69))
              : (ch(r, 0),
                ch(r, 0),
                ch(r, 0),
                ch(r, 0),
                ch(r, 0),
                ch(r, 9 === r.level ? 2 : r.strategy >= 2 || r.level < 2 ? 4 : 0),
                ch(r, 3),
                (r.status = Qd))
        else {
          var o = (jd + ((r.w_bits - 8) << 4)) << 8
          ;(o |=
            (r.strategy >= 2 || r.level < 2 ? 0 : r.level < 6 ? 1 : 6 === r.level ? 2 : 3) << 6),
            0 !== r.strstart && (o |= 32),
            (o += 31 - (o % 31)),
            (r.status = Qd),
            dh(r, o),
            0 !== r.strstart && (dh(r, e.adler >>> 16), dh(r, 65535 & e.adler)),
            (e.adler = 1)
        }
      if (69 === r.status)
        if (r.gzhead.extra) {
          for (
            i = r.pending;
            r.gzindex < (65535 & r.gzhead.extra.length) &&
            (r.pending !== r.pending_buf_size ||
              (r.gzhead.hcrc &&
                r.pending > i &&
                (e.adler = zd(e.adler, r.pending_buf, r.pending - i, i)),
              lh(e),
              (i = r.pending),
              r.pending !== r.pending_buf_size));

          )
            ch(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++
          r.gzhead.hcrc &&
            r.pending > i &&
            (e.adler = zd(e.adler, r.pending_buf, r.pending - i, i)),
            r.gzindex === r.gzhead.extra.length && ((r.gzindex = 0), (r.status = 73))
        } else r.status = 73
      if (73 === r.status)
        if (r.gzhead.name) {
          i = r.pending
          do {
            if (
              r.pending === r.pending_buf_size &&
              (r.gzhead.hcrc &&
                r.pending > i &&
                (e.adler = zd(e.adler, r.pending_buf, r.pending - i, i)),
              lh(e),
              (i = r.pending),
              r.pending === r.pending_buf_size)
            ) {
              a = 1
              break
            }
            ;(a =
              r.gzindex < r.gzhead.name.length ? 255 & r.gzhead.name.charCodeAt(r.gzindex++) : 0),
              ch(r, a)
          } while (0 !== a)
          r.gzhead.hcrc &&
            r.pending > i &&
            (e.adler = zd(e.adler, r.pending_buf, r.pending - i, i)),
            0 === a && ((r.gzindex = 0), (r.status = 91))
        } else r.status = 91
      if (91 === r.status)
        if (r.gzhead.comment) {
          i = r.pending
          do {
            if (
              r.pending === r.pending_buf_size &&
              (r.gzhead.hcrc &&
                r.pending > i &&
                (e.adler = zd(e.adler, r.pending_buf, r.pending - i, i)),
              lh(e),
              (i = r.pending),
              r.pending === r.pending_buf_size)
            ) {
              a = 1
              break
            }
            ;(a =
              r.gzindex < r.gzhead.comment.length
                ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                : 0),
              ch(r, a)
          } while (0 !== a)
          r.gzhead.hcrc &&
            r.pending > i &&
            (e.adler = zd(e.adler, r.pending_buf, r.pending - i, i)),
            0 === a && (r.status = Jd)
        } else r.status = Jd
      if (
        (r.status === Jd &&
          (r.gzhead.hcrc
            ? (r.pending + 2 > r.pending_buf_size && lh(e),
              r.pending + 2 <= r.pending_buf_size &&
                (ch(r, 255 & e.adler), ch(r, (e.adler >> 8) & 255), (e.adler = 0), (r.status = Qd)))
            : (r.status = Qd)),
        0 !== r.pending)
      ) {
        if ((lh(e), 0 === e.avail_out)) return (r.last_flush = -1), Dd
      } else if (0 === e.avail_in && oh(t) <= oh(n) && t !== Pd) return ah(e, -5)
      if (r.status === eh && 0 !== e.avail_in) return ah(e, -5)
      if (0 !== e.avail_in || 0 !== r.lookahead || (t !== Id && r.status !== eh)) {
        var s =
          2 === r.strategy
            ? (function (e, t) {
                for (var n; ; ) {
                  if (0 === e.lookahead && (fh(e), 0 === e.lookahead)) {
                    if (t === Id) return th
                    break
                  }
                  if (
                    ((e.match_length = 0),
                    (n = Od._tr_tally(e, 0, e.window[e.strstart])),
                    e.lookahead--,
                    e.strstart++,
                    n && (uh(e, !1), 0 === e.strm.avail_out))
                  )
                    return th
                }
                return (
                  (e.insert = 0),
                  t === Pd
                    ? (uh(e, !0), 0 === e.strm.avail_out ? rh : ih)
                    : e.last_lit && (uh(e, !1), 0 === e.strm.avail_out)
                      ? th
                      : nh
                )
              })(r, t)
            : 3 === r.strategy
              ? (function (e, t) {
                  for (var n, r, i, a, o = e.window; ; ) {
                    if (e.lookahead <= Zd) {
                      if ((fh(e), e.lookahead <= Zd && t === Id)) return th
                      if (0 === e.lookahead) break
                    }
                    if (
                      ((e.match_length = 0),
                      e.lookahead >= Xd &&
                        e.strstart > 0 &&
                        (r = o[(i = e.strstart - 1)]) === o[++i] &&
                        r === o[++i] &&
                        r === o[++i])
                    ) {
                      a = e.strstart + Zd
                      do {} while (
                        r === o[++i] &&
                        r === o[++i] &&
                        r === o[++i] &&
                        r === o[++i] &&
                        r === o[++i] &&
                        r === o[++i] &&
                        r === o[++i] &&
                        r === o[++i] &&
                        i < a
                      )
                      ;(e.match_length = Zd - (a - i)),
                        e.match_length > e.lookahead && (e.match_length = e.lookahead)
                    }
                    if (
                      (e.match_length >= Xd
                        ? ((n = Od._tr_tally(e, 1, e.match_length - Xd)),
                          (e.lookahead -= e.match_length),
                          (e.strstart += e.match_length),
                          (e.match_length = 0))
                        : ((n = Od._tr_tally(e, 0, e.window[e.strstart])),
                          e.lookahead--,
                          e.strstart++),
                      n && (uh(e, !1), 0 === e.strm.avail_out))
                    )
                      return th
                  }
                  return (
                    (e.insert = 0),
                    t === Pd
                      ? (uh(e, !0), 0 === e.strm.avail_out ? rh : ih)
                      : e.last_lit && (uh(e, !1), 0 === e.strm.avail_out)
                        ? th
                        : nh
                  )
                })(r, t)
              : Td[r.level].func(r, t)
        if (((s !== rh && s !== ih) || (r.status = eh), s === th || s === rh))
          return 0 === e.avail_out && (r.last_flush = -1), Dd
        if (
          s === nh &&
          (1 === t
            ? Od._tr_align(r)
            : 5 !== t &&
              (Od._tr_stored_block(r, 0, 0, !1),
              3 === t &&
                (sh(r.head),
                0 === r.lookahead && ((r.strstart = 0), (r.block_start = 0), (r.insert = 0)))),
          lh(e),
          0 === e.avail_out)
        )
          return (r.last_flush = -1), Dd
      }
      return t !== Pd
        ? Dd
        : r.wrap <= 0
          ? 1
          : (2 === r.wrap
              ? (ch(r, 255 & e.adler),
                ch(r, (e.adler >> 8) & 255),
                ch(r, (e.adler >> 16) & 255),
                ch(r, (e.adler >> 24) & 255),
                ch(r, 255 & e.total_in),
                ch(r, (e.total_in >> 8) & 255),
                ch(r, (e.total_in >> 16) & 255),
                ch(r, (e.total_in >> 24) & 255))
              : (dh(r, e.adler >>> 16), dh(r, 65535 & e.adler)),
            lh(e),
            r.wrap > 0 && (r.wrap = -r.wrap),
            0 !== r.pending ? Dd : 1)
    }),
    (Ac.deflateEnd = function (e) {
      var t
      return e && e.state
        ? (t = e.state.status) !== Kd &&
          69 !== t &&
          73 !== t &&
          91 !== t &&
          t !== Jd &&
          t !== Qd &&
          t !== eh
          ? ah(e, Bd)
          : ((e.state = null), t === Qd ? ah(e, -3) : Dd)
        : Bd
    }),
    (Ac.deflateSetDictionary = function (e, t) {
      var n,
        r,
        i,
        a,
        o,
        s,
        l,
        u,
        c = t.length
      if (!e || !e.state) return Bd
      if (2 === (a = (n = e.state).wrap) || (1 === a && n.status !== Kd) || n.lookahead) return Bd
      for (
        1 === a && (e.adler = Ld(e.adler, t, c, 0)),
          n.wrap = 0,
          c >= n.w_size &&
            (0 === a && (sh(n.head), (n.strstart = 0), (n.block_start = 0), (n.insert = 0)),
            (u = new Ed.Buf8(n.w_size)),
            Ed.arraySet(u, t, c - n.w_size, n.w_size, 0),
            (t = u),
            (c = n.w_size)),
          o = e.avail_in,
          s = e.next_in,
          l = e.input,
          e.avail_in = c,
          e.next_in = 0,
          e.input = t,
          fh(n);
        n.lookahead >= Xd;

      ) {
        ;(r = n.strstart), (i = n.lookahead - (Xd - 1))
        do {
          ;(n.ins_h = ((n.ins_h << n.hash_shift) ^ n.window[r + Xd - 1]) & n.hash_mask),
            (n.prev[r & n.w_mask] = n.head[n.ins_h]),
            (n.head[n.ins_h] = r),
            r++
        } while (--i)
        ;(n.strstart = r), (n.lookahead = Xd - 1), fh(n)
      }
      return (
        (n.strstart += n.lookahead),
        (n.block_start = n.strstart),
        (n.insert = n.lookahead),
        (n.lookahead = 0),
        (n.match_length = n.prev_length = Xd - 1),
        (n.match_available = 0),
        (e.next_in = s),
        (e.input = l),
        (e.avail_in = o),
        (n.wrap = a),
        Dd
      )
    }),
    (Ac.deflateInfo = 'pako deflate (from Nodeca project)')
  var wh = {},
    xh = Cc,
    Sh = !0,
    kh = !0
  try {
    String.fromCharCode.apply(null, [0])
  } catch (_b) {
    Sh = !1
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1))
  } catch (_b) {
    kh = !1
  }
  for (var Ch = new xh.Buf8(256), Th = 0; Th < 256; Th++)
    Ch[Th] = Th >= 252 ? 6 : Th >= 248 ? 5 : Th >= 240 ? 4 : Th >= 224 ? 3 : Th >= 192 ? 2 : 1
  function Ah(e, t) {
    if (t < 65534 && ((e.subarray && kh) || (!e.subarray && Sh)))
      return String.fromCharCode.apply(null, xh.shrinkBuf(e, t))
    for (var n = '', r = 0; r < t; r++) n += String.fromCharCode(e[r])
    return n
  }
  ;(Ch[254] = Ch[254] = 1),
    (wh.string2buf = function (e) {
      var t,
        n,
        r,
        i,
        a,
        o = e.length,
        s = 0
      for (i = 0; i < o; i++)
        55296 == (64512 & (n = e.charCodeAt(i))) &&
          i + 1 < o &&
          56320 == (64512 & (r = e.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
          (s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4)
      for (t = new xh.Buf8(s), a = 0, i = 0; a < s; i++)
        55296 == (64512 & (n = e.charCodeAt(i))) &&
          i + 1 < o &&
          56320 == (64512 & (r = e.charCodeAt(i + 1))) &&
          ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), i++),
          n < 128
            ? (t[a++] = n)
            : n < 2048
              ? ((t[a++] = 192 | (n >>> 6)), (t[a++] = 128 | (63 & n)))
              : n < 65536
                ? ((t[a++] = 224 | (n >>> 12)),
                  (t[a++] = 128 | ((n >>> 6) & 63)),
                  (t[a++] = 128 | (63 & n)))
                : ((t[a++] = 240 | (n >>> 18)),
                  (t[a++] = 128 | ((n >>> 12) & 63)),
                  (t[a++] = 128 | ((n >>> 6) & 63)),
                  (t[a++] = 128 | (63 & n)))
      return t
    }),
    (wh.buf2binstring = function (e) {
      return Ah(e, e.length)
    }),
    (wh.binstring2buf = function (e) {
      for (var t = new xh.Buf8(e.length), n = 0, r = t.length; n < r; n++) t[n] = e.charCodeAt(n)
      return t
    }),
    (wh.buf2string = function (e, t) {
      var n,
        r,
        i,
        a,
        o = t || e.length,
        s = new Array(2 * o)
      for (r = 0, n = 0; n < o; )
        if ((i = e[n++]) < 128) s[r++] = i
        else if ((a = Ch[i]) > 4) (s[r++] = 65533), (n += a - 1)
        else {
          for (i &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < o; )
            (i = (i << 6) | (63 & e[n++])), a--
          a > 1
            ? (s[r++] = 65533)
            : i < 65536
              ? (s[r++] = i)
              : ((i -= 65536), (s[r++] = 55296 | ((i >> 10) & 1023)), (s[r++] = 56320 | (1023 & i)))
        }
      return Ah(s, r)
    }),
    (wh.utf8border = function (e, t) {
      var n
      for (
        (t = t || e.length) > e.length && (t = e.length), n = t - 1;
        n >= 0 && 128 == (192 & e[n]);

      )
        n--
      return n < 0 || 0 === n ? t : n + Ch[e[n]] > t ? n : t
    })
  var Mh = function () {
      ;(this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ''),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0)
    },
    Eh = Ac,
    Oh = Cc,
    Lh = wh,
    zh = Md,
    Nh = Mh,
    Ih = Object.prototype.toString,
    Ph = 0,
    Dh = -1,
    Bh = 0,
    Rh = 8
  function Fh(e) {
    if (!(this instanceof Fh)) return new Fh(e)
    this.options = Oh.assign(
      {
        level: Dh,
        method: Rh,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Bh,
        to: '',
      },
      e || {},
    )
    var t = this.options
    t.raw && t.windowBits > 0
      ? (t.windowBits = -t.windowBits)
      : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
      (this.err = 0),
      (this.msg = ''),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Nh()),
      (this.strm.avail_out = 0)
    var n = Eh.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy)
    if (n !== Ph) throw new Error(zh[n])
    if ((t.header && Eh.deflateSetHeader(this.strm, t.header), t.dictionary)) {
      var r
      if (
        ((r =
          'string' == typeof t.dictionary
            ? Lh.string2buf(t.dictionary)
            : '[object ArrayBuffer]' === Ih.call(t.dictionary)
              ? new Uint8Array(t.dictionary)
              : t.dictionary),
        (n = Eh.deflateSetDictionary(this.strm, r)) !== Ph)
      )
        throw new Error(zh[n])
      this._dict_set = !0
    }
  }
  function qh(e, t) {
    var n = new Fh(t)
    if ((n.push(e, !0), n.err)) throw n.msg || zh[n.err]
    return n.result
  }
  ;(Fh.prototype.push = function (e, t) {
    var n,
      r,
      i = this.strm,
      a = this.options.chunkSize
    if (this.ended) return !1
    ;(r = t === ~~t ? t : !0 === t ? 4 : 0),
      'string' == typeof e
        ? (i.input = Lh.string2buf(e))
        : '[object ArrayBuffer]' === Ih.call(e)
          ? (i.input = new Uint8Array(e))
          : (i.input = e),
      (i.next_in = 0),
      (i.avail_in = i.input.length)
    do {
      if (
        (0 === i.avail_out && ((i.output = new Oh.Buf8(a)), (i.next_out = 0), (i.avail_out = a)),
        1 !== (n = Eh.deflate(i, r)) && n !== Ph)
      )
        return this.onEnd(n), (this.ended = !0), !1
      ;(0 !== i.avail_out && (0 !== i.avail_in || (4 !== r && 2 !== r))) ||
        ('string' === this.options.to
          ? this.onData(Lh.buf2binstring(Oh.shrinkBuf(i.output, i.next_out)))
          : this.onData(Oh.shrinkBuf(i.output, i.next_out)))
    } while ((i.avail_in > 0 || 0 === i.avail_out) && 1 !== n)
    return 4 === r
      ? ((n = Eh.deflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === Ph)
      : 2 !== r || (this.onEnd(Ph), (i.avail_out = 0), !0)
  }),
    (Fh.prototype.onData = function (e) {
      this.chunks.push(e)
    }),
    (Fh.prototype.onEnd = function (e) {
      e === Ph &&
        ('string' === this.options.to
          ? (this.result = this.chunks.join(''))
          : (this.result = Oh.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = e),
        (this.msg = this.strm.msg)
    }),
    (Tc.Deflate = Fh),
    (Tc.deflate = qh),
    (Tc.deflateRaw = function (e, t) {
      return ((t = t || {}).raw = !0), qh(e, t)
    }),
    (Tc.gzip = function (e, t) {
      return ((t = t || {}).gzip = !0), qh(e, t)
    })
  var jh = {},
    Vh = {},
    $h = Cc,
    Hh = 15,
    Wh = [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131,
      163, 195, 227, 258, 0, 0,
    ],
    Uh = [
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20,
      20, 21, 21, 21, 21, 16, 72, 78,
    ],
    Yh = [
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
      2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
    ],
    Xh = [
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26,
      26, 27, 27, 28, 28, 29, 29, 64, 64,
    ],
    Zh = Cc,
    Gh = kd,
    Kh = Ad,
    Jh = function (e, t) {
      var n, r, i, a, o, s, l, u, c, d, h, f, p, v, g, m, _, y, b, w, x, S, k, C, T
      ;(n = e.state),
        (r = e.next_in),
        (C = e.input),
        (i = r + (e.avail_in - 5)),
        (a = e.next_out),
        (T = e.output),
        (o = a - (t - e.avail_out)),
        (s = a + (e.avail_out - 257)),
        (l = n.dmax),
        (u = n.wsize),
        (c = n.whave),
        (d = n.wnext),
        (h = n.window),
        (f = n.hold),
        (p = n.bits),
        (v = n.lencode),
        (g = n.distcode),
        (m = (1 << n.lenbits) - 1),
        (_ = (1 << n.distbits) - 1)
      e: do {
        p < 15 && ((f += C[r++] << p), (p += 8), (f += C[r++] << p), (p += 8)), (y = v[f & m])
        t: for (;;) {
          if (((f >>>= b = y >>> 24), (p -= b), 0 === (b = (y >>> 16) & 255))) T[a++] = 65535 & y
          else {
            if (!(16 & b)) {
              if (64 & b) {
                if (32 & b) {
                  n.mode = 12
                  break e
                }
                ;(e.msg = 'invalid literal/length code'), (n.mode = 30)
                break e
              }
              y = v[(65535 & y) + (f & ((1 << b) - 1))]
              continue t
            }
            for (
              w = 65535 & y,
                (b &= 15) &&
                  (p < b && ((f += C[r++] << p), (p += 8)),
                  (w += f & ((1 << b) - 1)),
                  (f >>>= b),
                  (p -= b)),
                p < 15 && ((f += C[r++] << p), (p += 8), (f += C[r++] << p), (p += 8)),
                y = g[f & _];
              ;

            ) {
              if (((f >>>= b = y >>> 24), (p -= b), 16 & (b = (y >>> 16) & 255))) {
                if (
                  ((x = 65535 & y),
                  p < (b &= 15) &&
                    ((f += C[r++] << p), (p += 8) < b && ((f += C[r++] << p), (p += 8))),
                  (x += f & ((1 << b) - 1)) > l)
                ) {
                  ;(e.msg = 'invalid distance too far back'), (n.mode = 30)
                  break e
                }
                if (((f >>>= b), (p -= b), x > (b = a - o))) {
                  if ((b = x - b) > c && n.sane) {
                    ;(e.msg = 'invalid distance too far back'), (n.mode = 30)
                    break e
                  }
                  if (((S = 0), (k = h), 0 === d)) {
                    if (((S += u - b), b < w)) {
                      w -= b
                      do {
                        T[a++] = h[S++]
                      } while (--b)
                      ;(S = a - x), (k = T)
                    }
                  } else if (d < b) {
                    if (((S += u + d - b), (b -= d) < w)) {
                      w -= b
                      do {
                        T[a++] = h[S++]
                      } while (--b)
                      if (((S = 0), d < w)) {
                        w -= b = d
                        do {
                          T[a++] = h[S++]
                        } while (--b)
                        ;(S = a - x), (k = T)
                      }
                    }
                  } else if (((S += d - b), b < w)) {
                    w -= b
                    do {
                      T[a++] = h[S++]
                    } while (--b)
                    ;(S = a - x), (k = T)
                  }
                  for (; w > 2; ) (T[a++] = k[S++]), (T[a++] = k[S++]), (T[a++] = k[S++]), (w -= 3)
                  w && ((T[a++] = k[S++]), w > 1 && (T[a++] = k[S++]))
                } else {
                  S = a - x
                  do {
                    ;(T[a++] = T[S++]), (T[a++] = T[S++]), (T[a++] = T[S++]), (w -= 3)
                  } while (w > 2)
                  w && ((T[a++] = T[S++]), w > 1 && (T[a++] = T[S++]))
                }
                break
              }
              if (64 & b) {
                ;(e.msg = 'invalid distance code'), (n.mode = 30)
                break e
              }
              y = g[(65535 & y) + (f & ((1 << b) - 1))]
            }
          }
          break
        }
      } while (r < i && a < s)
      ;(r -= w = p >> 3),
        (f &= (1 << (p -= w << 3)) - 1),
        (e.next_in = r),
        (e.next_out = a),
        (e.avail_in = r < i ? i - r + 5 : 5 - (r - i)),
        (e.avail_out = a < s ? s - a + 257 : 257 - (a - s)),
        (n.hold = f),
        (n.bits = p)
    },
    Qh = function (e, t, n, r, i, a, o, s) {
      var l,
        u,
        c,
        d,
        h,
        f,
        p,
        v,
        g,
        m = s.bits,
        _ = 0,
        y = 0,
        b = 0,
        w = 0,
        x = 0,
        S = 0,
        k = 0,
        C = 0,
        T = 0,
        A = 0,
        M = null,
        E = 0,
        O = new $h.Buf16(16),
        L = new $h.Buf16(16),
        z = null,
        N = 0
      for (_ = 0; _ <= Hh; _++) O[_] = 0
      for (y = 0; y < r; y++) O[t[n + y]]++
      for (x = m, w = Hh; w >= 1 && 0 === O[w]; w--);
      if ((x > w && (x = w), 0 === w))
        return (i[a++] = 20971520), (i[a++] = 20971520), (s.bits = 1), 0
      for (b = 1; b < w && 0 === O[b]; b++);
      for (x < b && (x = b), C = 1, _ = 1; _ <= Hh; _++) if (((C <<= 1), (C -= O[_]) < 0)) return -1
      if (C > 0 && (0 === e || 1 !== w)) return -1
      for (L[1] = 0, _ = 1; _ < Hh; _++) L[_ + 1] = L[_] + O[_]
      for (y = 0; y < r; y++) 0 !== t[n + y] && (o[L[t[n + y]]++] = y)
      if (
        (0 === e
          ? ((M = z = o), (f = 19))
          : 1 === e
            ? ((M = Wh), (E -= 257), (z = Uh), (N -= 257), (f = 256))
            : ((M = Yh), (z = Xh), (f = -1)),
        (A = 0),
        (y = 0),
        (_ = b),
        (h = a),
        (S = x),
        (k = 0),
        (c = -1),
        (d = (T = 1 << x) - 1),
        (1 === e && T > 852) || (2 === e && T > 592))
      )
        return 1
      for (;;) {
        ;(p = _ - k),
          o[y] < f
            ? ((v = 0), (g = o[y]))
            : o[y] > f
              ? ((v = z[N + o[y]]), (g = M[E + o[y]]))
              : ((v = 96), (g = 0)),
          (l = 1 << (_ - k)),
          (b = u = 1 << S)
        do {
          i[h + (A >> k) + (u -= l)] = (p << 24) | (v << 16) | g
        } while (0 !== u)
        for (l = 1 << (_ - 1); A & l; ) l >>= 1
        if ((0 !== l ? ((A &= l - 1), (A += l)) : (A = 0), y++, 0 == --O[_])) {
          if (_ === w) break
          _ = t[n + o[y]]
        }
        if (_ > x && (A & d) !== c) {
          for (
            0 === k && (k = x), h += b, C = 1 << (S = _ - k);
            S + k < w && !((C -= O[S + k]) <= 0);

          )
            S++, (C <<= 1)
          if (((T += 1 << S), (1 === e && T > 852) || (2 === e && T > 592))) return 1
          i[(c = A & d)] = (x << 24) | (S << 16) | (h - a)
        }
      }
      return 0 !== A && (i[h + A] = ((_ - k) << 24) | (64 << 16)), (s.bits = x), 0
    },
    ef = 1,
    tf = 2,
    nf = 0,
    rf = -2,
    af = 1,
    of = 12,
    sf = 30,
    lf = 852,
    uf = 592
  function cf(e) {
    return ((e >>> 24) & 255) + ((e >>> 8) & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
  }
  function df() {
    ;(this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new Zh.Buf16(320)),
      (this.work = new Zh.Buf16(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0)
  }
  function hf(e) {
    var t
    return e && e.state
      ? ((t = e.state),
        (e.total_in = e.total_out = t.total = 0),
        (e.msg = ''),
        t.wrap && (e.adler = 1 & t.wrap),
        (t.mode = af),
        (t.last = 0),
        (t.havedict = 0),
        (t.dmax = 32768),
        (t.head = null),
        (t.hold = 0),
        (t.bits = 0),
        (t.lencode = t.lendyn = new Zh.Buf32(lf)),
        (t.distcode = t.distdyn = new Zh.Buf32(uf)),
        (t.sane = 1),
        (t.back = -1),
        nf)
      : rf
  }
  function ff(e) {
    var t
    return e && e.state ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), hf(e)) : rf
  }
  function pf(e, t) {
    var n, r
    return e && e.state
      ? ((r = e.state),
        t < 0 ? ((n = 0), (t = -t)) : ((n = 1 + (t >> 4)), t < 48 && (t &= 15)),
        t && (t < 8 || t > 15)
          ? rf
          : (null !== r.window && r.wbits !== t && (r.window = null),
            (r.wrap = n),
            (r.wbits = t),
            ff(e)))
      : rf
  }
  function vf(e, t) {
    var n, r
    return e
      ? ((r = new df()),
        (e.state = r),
        (r.window = null),
        (n = pf(e, t)) !== nf && (e.state = null),
        n)
      : rf
  }
  var gf,
    mf,
    _f = !0
  function yf(e) {
    if (_f) {
      var t
      for (gf = new Zh.Buf32(512), mf = new Zh.Buf32(32), t = 0; t < 144; ) e.lens[t++] = 8
      for (; t < 256; ) e.lens[t++] = 9
      for (; t < 280; ) e.lens[t++] = 7
      for (; t < 288; ) e.lens[t++] = 8
      for (Qh(ef, e.lens, 0, 288, gf, 0, e.work, { bits: 9 }), t = 0; t < 32; ) e.lens[t++] = 5
      Qh(tf, e.lens, 0, 32, mf, 0, e.work, { bits: 5 }), (_f = !1)
    }
    ;(e.lencode = gf), (e.lenbits = 9), (e.distcode = mf), (e.distbits = 5)
  }
  function bf(e, t, n, r) {
    var i,
      a = e.state
    return (
      null === a.window &&
        ((a.wsize = 1 << a.wbits), (a.wnext = 0), (a.whave = 0), (a.window = new Zh.Buf8(a.wsize))),
      r >= a.wsize
        ? (Zh.arraySet(a.window, t, n - a.wsize, a.wsize, 0), (a.wnext = 0), (a.whave = a.wsize))
        : ((i = a.wsize - a.wnext) > r && (i = r),
          Zh.arraySet(a.window, t, n - r, i, a.wnext),
          (r -= i)
            ? (Zh.arraySet(a.window, t, n - r, r, 0), (a.wnext = r), (a.whave = a.wsize))
            : ((a.wnext += i),
              a.wnext === a.wsize && (a.wnext = 0),
              a.whave < a.wsize && (a.whave += i))),
      0
    )
  }
  ;(Vh.inflateReset = ff),
    (Vh.inflateReset2 = pf),
    (Vh.inflateResetKeep = hf),
    (Vh.inflateInit = function (e) {
      return vf(e, 15)
    }),
    (Vh.inflateInit2 = vf),
    (Vh.inflate = function (e, t) {
      var n,
        r,
        i,
        a,
        o,
        s,
        l,
        u,
        c,
        d,
        h,
        f,
        p,
        v,
        g,
        m,
        _,
        y,
        b,
        w,
        x,
        S,
        k,
        C,
        T = 0,
        A = new Zh.Buf8(4),
        M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in)) return rf
      ;(n = e.state).mode === of && (n.mode = 13),
        (o = e.next_out),
        (i = e.output),
        (l = e.avail_out),
        (a = e.next_in),
        (r = e.input),
        (s = e.avail_in),
        (u = n.hold),
        (c = n.bits),
        (d = s),
        (h = l),
        (S = nf)
      e: for (;;)
        switch (n.mode) {
          case af:
            if (0 === n.wrap) {
              n.mode = 13
              break
            }
            for (; c < 16; ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            if (2 & n.wrap && 35615 === u) {
              ;(n.check = 0),
                (A[0] = 255 & u),
                (A[1] = (u >>> 8) & 255),
                (n.check = Kh(n.check, A, 2, 0)),
                (u = 0),
                (c = 0),
                (n.mode = 2)
              break
            }
            if (
              ((n.flags = 0),
              n.head && (n.head.done = !1),
              !(1 & n.wrap) || (((255 & u) << 8) + (u >> 8)) % 31)
            ) {
              ;(e.msg = 'incorrect header check'), (n.mode = sf)
              break
            }
            if (8 != (15 & u)) {
              ;(e.msg = 'unknown compression method'), (n.mode = sf)
              break
            }
            if (((c -= 4), (x = 8 + (15 & (u >>>= 4))), 0 === n.wbits)) n.wbits = x
            else if (x > n.wbits) {
              ;(e.msg = 'invalid window size'), (n.mode = sf)
              break
            }
            ;(n.dmax = 1 << x),
              (e.adler = n.check = 1),
              (n.mode = 512 & u ? 10 : of),
              (u = 0),
              (c = 0)
            break
          case 2:
            for (; c < 16; ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            if (((n.flags = u), 8 != (255 & n.flags))) {
              ;(e.msg = 'unknown compression method'), (n.mode = sf)
              break
            }
            if (57344 & n.flags) {
              ;(e.msg = 'unknown header flags set'), (n.mode = sf)
              break
            }
            n.head && (n.head.text = (u >> 8) & 1),
              512 & n.flags &&
                ((A[0] = 255 & u), (A[1] = (u >>> 8) & 255), (n.check = Kh(n.check, A, 2, 0))),
              (u = 0),
              (c = 0),
              (n.mode = 3)
          case 3:
            for (; c < 32; ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            n.head && (n.head.time = u),
              512 & n.flags &&
                ((A[0] = 255 & u),
                (A[1] = (u >>> 8) & 255),
                (A[2] = (u >>> 16) & 255),
                (A[3] = (u >>> 24) & 255),
                (n.check = Kh(n.check, A, 4, 0))),
              (u = 0),
              (c = 0),
              (n.mode = 4)
          case 4:
            for (; c < 16; ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            n.head && ((n.head.xflags = 255 & u), (n.head.os = u >> 8)),
              512 & n.flags &&
                ((A[0] = 255 & u), (A[1] = (u >>> 8) & 255), (n.check = Kh(n.check, A, 2, 0))),
              (u = 0),
              (c = 0),
              (n.mode = 5)
          case 5:
            if (1024 & n.flags) {
              for (; c < 16; ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              ;(n.length = u),
                n.head && (n.head.extra_len = u),
                512 & n.flags &&
                  ((A[0] = 255 & u), (A[1] = (u >>> 8) & 255), (n.check = Kh(n.check, A, 2, 0))),
                (u = 0),
                (c = 0)
            } else n.head && (n.head.extra = null)
            n.mode = 6
          case 6:
            if (
              1024 & n.flags &&
              ((f = n.length) > s && (f = s),
              f &&
                (n.head &&
                  ((x = n.head.extra_len - n.length),
                  n.head.extra || (n.head.extra = new Array(n.head.extra_len)),
                  Zh.arraySet(n.head.extra, r, a, f, x)),
                512 & n.flags && (n.check = Kh(n.check, r, f, a)),
                (s -= f),
                (a += f),
                (n.length -= f)),
              n.length)
            )
              break e
            ;(n.length = 0), (n.mode = 7)
          case 7:
            if (2048 & n.flags) {
              if (0 === s) break e
              f = 0
              do {
                ;(x = r[a + f++]),
                  n.head && x && n.length < 65536 && (n.head.name += String.fromCharCode(x))
              } while (x && f < s)
              if ((512 & n.flags && (n.check = Kh(n.check, r, f, a)), (s -= f), (a += f), x))
                break e
            } else n.head && (n.head.name = null)
            ;(n.length = 0), (n.mode = 8)
          case 8:
            if (4096 & n.flags) {
              if (0 === s) break e
              f = 0
              do {
                ;(x = r[a + f++]),
                  n.head && x && n.length < 65536 && (n.head.comment += String.fromCharCode(x))
              } while (x && f < s)
              if ((512 & n.flags && (n.check = Kh(n.check, r, f, a)), (s -= f), (a += f), x))
                break e
            } else n.head && (n.head.comment = null)
            n.mode = 9
          case 9:
            if (512 & n.flags) {
              for (; c < 16; ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              if (u !== (65535 & n.check)) {
                ;(e.msg = 'header crc mismatch'), (n.mode = sf)
                break
              }
              ;(u = 0), (c = 0)
            }
            n.head && ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
              (e.adler = n.check = 0),
              (n.mode = of)
            break
          case 10:
            for (; c < 32; ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            ;(e.adler = n.check = cf(u)), (u = 0), (c = 0), (n.mode = 11)
          case 11:
            if (0 === n.havedict)
              return (
                (e.next_out = o),
                (e.avail_out = l),
                (e.next_in = a),
                (e.avail_in = s),
                (n.hold = u),
                (n.bits = c),
                2
              )
            ;(e.adler = n.check = 1), (n.mode = of)
          case of:
            if (5 === t || 6 === t) break e
          case 13:
            if (n.last) {
              ;(u >>>= 7 & c), (c -= 7 & c), (n.mode = 27)
              break
            }
            for (; c < 3; ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            switch (((n.last = 1 & u), (c -= 1), 3 & (u >>>= 1))) {
              case 0:
                n.mode = 14
                break
              case 1:
                if ((yf(n), (n.mode = 20), 6 === t)) {
                  ;(u >>>= 2), (c -= 2)
                  break e
                }
                break
              case 2:
                n.mode = 17
                break
              case 3:
                ;(e.msg = 'invalid block type'), (n.mode = sf)
            }
            ;(u >>>= 2), (c -= 2)
            break
          case 14:
            for (u >>>= 7 & c, c -= 7 & c; c < 32; ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            if ((65535 & u) != ((u >>> 16) ^ 65535)) {
              ;(e.msg = 'invalid stored block lengths'), (n.mode = sf)
              break
            }
            if (((n.length = 65535 & u), (u = 0), (c = 0), (n.mode = 15), 6 === t)) break e
          case 15:
            n.mode = 16
          case 16:
            if ((f = n.length)) {
              if ((f > s && (f = s), f > l && (f = l), 0 === f)) break e
              Zh.arraySet(i, r, a, f, o), (s -= f), (a += f), (l -= f), (o += f), (n.length -= f)
              break
            }
            n.mode = of
            break
          case 17:
            for (; c < 14; ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            if (
              ((n.nlen = 257 + (31 & u)),
              (u >>>= 5),
              (c -= 5),
              (n.ndist = 1 + (31 & u)),
              (u >>>= 5),
              (c -= 5),
              (n.ncode = 4 + (15 & u)),
              (u >>>= 4),
              (c -= 4),
              n.nlen > 286 || n.ndist > 30)
            ) {
              ;(e.msg = 'too many length or distance symbols'), (n.mode = sf)
              break
            }
            ;(n.have = 0), (n.mode = 18)
          case 18:
            for (; n.have < n.ncode; ) {
              for (; c < 3; ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              ;(n.lens[M[n.have++]] = 7 & u), (u >>>= 3), (c -= 3)
            }
            for (; n.have < 19; ) n.lens[M[n.have++]] = 0
            if (
              ((n.lencode = n.lendyn),
              (n.lenbits = 7),
              (k = { bits: n.lenbits }),
              (S = Qh(0, n.lens, 0, 19, n.lencode, 0, n.work, k)),
              (n.lenbits = k.bits),
              S)
            ) {
              ;(e.msg = 'invalid code lengths set'), (n.mode = sf)
              break
            }
            ;(n.have = 0), (n.mode = 19)
          case 19:
            for (; n.have < n.nlen + n.ndist; ) {
              for (
                ;
                (m = ((T = n.lencode[u & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                  (_ = 65535 & T),
                  !((g = T >>> 24) <= c);

              ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              if (_ < 16) (u >>>= g), (c -= g), (n.lens[n.have++] = _)
              else {
                if (16 === _) {
                  for (C = g + 2; c < C; ) {
                    if (0 === s) break e
                    s--, (u += r[a++] << c), (c += 8)
                  }
                  if (((u >>>= g), (c -= g), 0 === n.have)) {
                    ;(e.msg = 'invalid bit length repeat'), (n.mode = sf)
                    break
                  }
                  ;(x = n.lens[n.have - 1]), (f = 3 + (3 & u)), (u >>>= 2), (c -= 2)
                } else if (17 === _) {
                  for (C = g + 3; c < C; ) {
                    if (0 === s) break e
                    s--, (u += r[a++] << c), (c += 8)
                  }
                  ;(c -= g), (x = 0), (f = 3 + (7 & (u >>>= g))), (u >>>= 3), (c -= 3)
                } else {
                  for (C = g + 7; c < C; ) {
                    if (0 === s) break e
                    s--, (u += r[a++] << c), (c += 8)
                  }
                  ;(c -= g), (x = 0), (f = 11 + (127 & (u >>>= g))), (u >>>= 7), (c -= 7)
                }
                if (n.have + f > n.nlen + n.ndist) {
                  ;(e.msg = 'invalid bit length repeat'), (n.mode = sf)
                  break
                }
                for (; f--; ) n.lens[n.have++] = x
              }
            }
            if (n.mode === sf) break
            if (0 === n.lens[256]) {
              ;(e.msg = 'invalid code -- missing end-of-block'), (n.mode = sf)
              break
            }
            if (
              ((n.lenbits = 9),
              (k = { bits: n.lenbits }),
              (S = Qh(ef, n.lens, 0, n.nlen, n.lencode, 0, n.work, k)),
              (n.lenbits = k.bits),
              S)
            ) {
              ;(e.msg = 'invalid literal/lengths set'), (n.mode = sf)
              break
            }
            if (
              ((n.distbits = 6),
              (n.distcode = n.distdyn),
              (k = { bits: n.distbits }),
              (S = Qh(tf, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, k)),
              (n.distbits = k.bits),
              S)
            ) {
              ;(e.msg = 'invalid distances set'), (n.mode = sf)
              break
            }
            if (((n.mode = 20), 6 === t)) break e
          case 20:
            n.mode = 21
          case 21:
            if (s >= 6 && l >= 258) {
              ;(e.next_out = o),
                (e.avail_out = l),
                (e.next_in = a),
                (e.avail_in = s),
                (n.hold = u),
                (n.bits = c),
                Jh(e, h),
                (o = e.next_out),
                (i = e.output),
                (l = e.avail_out),
                (a = e.next_in),
                (r = e.input),
                (s = e.avail_in),
                (u = n.hold),
                (c = n.bits),
                n.mode === of && (n.back = -1)
              break
            }
            for (
              n.back = 0;
              (m = ((T = n.lencode[u & ((1 << n.lenbits) - 1)]) >>> 16) & 255),
                (_ = 65535 & T),
                !((g = T >>> 24) <= c);

            ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            if (m && !(240 & m)) {
              for (
                y = g, b = m, w = _;
                (m = ((T = n.lencode[w + ((u & ((1 << (y + b)) - 1)) >> y)]) >>> 16) & 255),
                  (_ = 65535 & T),
                  !(y + (g = T >>> 24) <= c);

              ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              ;(u >>>= y), (c -= y), (n.back += y)
            }
            if (((u >>>= g), (c -= g), (n.back += g), (n.length = _), 0 === m)) {
              n.mode = 26
              break
            }
            if (32 & m) {
              ;(n.back = -1), (n.mode = of)
              break
            }
            if (64 & m) {
              ;(e.msg = 'invalid literal/length code'), (n.mode = sf)
              break
            }
            ;(n.extra = 15 & m), (n.mode = 22)
          case 22:
            if (n.extra) {
              for (C = n.extra; c < C; ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              ;(n.length += u & ((1 << n.extra) - 1)),
                (u >>>= n.extra),
                (c -= n.extra),
                (n.back += n.extra)
            }
            ;(n.was = n.length), (n.mode = 23)
          case 23:
            for (
              ;
              (m = ((T = n.distcode[u & ((1 << n.distbits) - 1)]) >>> 16) & 255),
                (_ = 65535 & T),
                !((g = T >>> 24) <= c);

            ) {
              if (0 === s) break e
              s--, (u += r[a++] << c), (c += 8)
            }
            if (!(240 & m)) {
              for (
                y = g, b = m, w = _;
                (m = ((T = n.distcode[w + ((u & ((1 << (y + b)) - 1)) >> y)]) >>> 16) & 255),
                  (_ = 65535 & T),
                  !(y + (g = T >>> 24) <= c);

              ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              ;(u >>>= y), (c -= y), (n.back += y)
            }
            if (((u >>>= g), (c -= g), (n.back += g), 64 & m)) {
              ;(e.msg = 'invalid distance code'), (n.mode = sf)
              break
            }
            ;(n.offset = _), (n.extra = 15 & m), (n.mode = 24)
          case 24:
            if (n.extra) {
              for (C = n.extra; c < C; ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              ;(n.offset += u & ((1 << n.extra) - 1)),
                (u >>>= n.extra),
                (c -= n.extra),
                (n.back += n.extra)
            }
            if (n.offset > n.dmax) {
              ;(e.msg = 'invalid distance too far back'), (n.mode = sf)
              break
            }
            n.mode = 25
          case 25:
            if (0 === l) break e
            if (((f = h - l), n.offset > f)) {
              if ((f = n.offset - f) > n.whave && n.sane) {
                ;(e.msg = 'invalid distance too far back'), (n.mode = sf)
                break
              }
              f > n.wnext ? ((f -= n.wnext), (p = n.wsize - f)) : (p = n.wnext - f),
                f > n.length && (f = n.length),
                (v = n.window)
            } else (v = i), (p = o - n.offset), (f = n.length)
            f > l && (f = l), (l -= f), (n.length -= f)
            do {
              i[o++] = v[p++]
            } while (--f)
            0 === n.length && (n.mode = 21)
            break
          case 26:
            if (0 === l) break e
            ;(i[o++] = n.length), l--, (n.mode = 21)
            break
          case 27:
            if (n.wrap) {
              for (; c < 32; ) {
                if (0 === s) break e
                s--, (u |= r[a++] << c), (c += 8)
              }
              if (
                ((h -= l),
                (e.total_out += h),
                (n.total += h),
                h &&
                  (e.adler = n.check =
                    n.flags ? Kh(n.check, i, h, o - h) : Gh(n.check, i, h, o - h)),
                (h = l),
                (n.flags ? u : cf(u)) !== n.check)
              ) {
                ;(e.msg = 'incorrect data check'), (n.mode = sf)
                break
              }
              ;(u = 0), (c = 0)
            }
            n.mode = 28
          case 28:
            if (n.wrap && n.flags) {
              for (; c < 32; ) {
                if (0 === s) break e
                s--, (u += r[a++] << c), (c += 8)
              }
              if (u !== (4294967295 & n.total)) {
                ;(e.msg = 'incorrect length check'), (n.mode = sf)
                break
              }
              ;(u = 0), (c = 0)
            }
            n.mode = 29
          case 29:
            S = 1
            break e
          case sf:
            S = -3
            break e
          case 31:
            return -4
          default:
            return rf
        }
      return (
        (e.next_out = o),
        (e.avail_out = l),
        (e.next_in = a),
        (e.avail_in = s),
        (n.hold = u),
        (n.bits = c),
        (n.wsize || (h !== e.avail_out && n.mode < sf && (n.mode < 27 || 4 !== t))) &&
          bf(e, e.output, e.next_out, h - e.avail_out),
        (d -= e.avail_in),
        (h -= e.avail_out),
        (e.total_in += d),
        (e.total_out += h),
        (n.total += h),
        n.wrap &&
          h &&
          (e.adler = n.check =
            n.flags ? Kh(n.check, i, h, e.next_out - h) : Gh(n.check, i, h, e.next_out - h)),
        (e.data_type =
          n.bits +
          (n.last ? 64 : 0) +
          (n.mode === of ? 128 : 0) +
          (20 === n.mode || 15 === n.mode ? 256 : 0)),
        ((0 === d && 0 === h) || 4 === t) && S === nf && (S = -5),
        S
      )
    }),
    (Vh.inflateEnd = function (e) {
      if (!e || !e.state) return rf
      var t = e.state
      return t.window && (t.window = null), (e.state = null), nf
    }),
    (Vh.inflateGetHeader = function (e, t) {
      var n
      return e && e.state && 2 & (n = e.state).wrap ? ((n.head = t), (t.done = !1), nf) : rf
    }),
    (Vh.inflateSetDictionary = function (e, t) {
      var n,
        r = t.length
      return e && e.state
        ? 0 !== (n = e.state).wrap && 11 !== n.mode
          ? rf
          : 11 === n.mode && Gh(1, t, r, 0) !== n.check
            ? -3
            : bf(e, t, r, r)
              ? ((n.mode = 31), -4)
              : ((n.havedict = 1), nf)
        : rf
    }),
    (Vh.inflateInfo = 'pako inflate (from Nodeca project)')
  var wf = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8,
  }
  var xf = Vh,
    Sf = Cc,
    kf = wh,
    Cf = wf,
    Tf = Md,
    Af = Mh,
    Mf = function () {
      ;(this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ''),
        (this.comment = ''),
        (this.hcrc = 0),
        (this.done = !1)
    },
    Ef = Object.prototype.toString
  function Of(e) {
    if (!(this instanceof Of)) return new Of(e)
    this.options = Sf.assign({ chunkSize: 16384, windowBits: 0, to: '' }, e || {})
    var t = this.options
    t.raw &&
      t.windowBits >= 0 &&
      t.windowBits < 16 &&
      ((t.windowBits = -t.windowBits), 0 === t.windowBits && (t.windowBits = -15)),
      !(t.windowBits >= 0 && t.windowBits < 16) || (e && e.windowBits) || (t.windowBits += 32),
      t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits || (t.windowBits |= 15)),
      (this.err = 0),
      (this.msg = ''),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new Af()),
      (this.strm.avail_out = 0)
    var n = xf.inflateInit2(this.strm, t.windowBits)
    if (n !== Cf.Z_OK) throw new Error(Tf[n])
    if (
      ((this.header = new Mf()),
      xf.inflateGetHeader(this.strm, this.header),
      t.dictionary &&
        ('string' == typeof t.dictionary
          ? (t.dictionary = kf.string2buf(t.dictionary))
          : '[object ArrayBuffer]' === Ef.call(t.dictionary) &&
            (t.dictionary = new Uint8Array(t.dictionary)),
        t.raw && (n = xf.inflateSetDictionary(this.strm, t.dictionary)) !== Cf.Z_OK))
    )
      throw new Error(Tf[n])
  }
  function Lf(e, t) {
    var n = new Of(t)
    if ((n.push(e, !0), n.err)) throw n.msg || Tf[n.err]
    return n.result
  }
  ;(Of.prototype.push = function (e, t) {
    var n,
      r,
      i,
      a,
      o,
      s = this.strm,
      l = this.options.chunkSize,
      u = this.options.dictionary,
      c = !1
    if (this.ended) return !1
    ;(r = t === ~~t ? t : !0 === t ? Cf.Z_FINISH : Cf.Z_NO_FLUSH),
      'string' == typeof e
        ? (s.input = kf.binstring2buf(e))
        : '[object ArrayBuffer]' === Ef.call(e)
          ? (s.input = new Uint8Array(e))
          : (s.input = e),
      (s.next_in = 0),
      (s.avail_in = s.input.length)
    do {
      if (
        (0 === s.avail_out && ((s.output = new Sf.Buf8(l)), (s.next_out = 0), (s.avail_out = l)),
        (n = xf.inflate(s, Cf.Z_NO_FLUSH)) === Cf.Z_NEED_DICT &&
          u &&
          (n = xf.inflateSetDictionary(this.strm, u)),
        n === Cf.Z_BUF_ERROR && !0 === c && ((n = Cf.Z_OK), (c = !1)),
        n !== Cf.Z_STREAM_END && n !== Cf.Z_OK)
      )
        return this.onEnd(n), (this.ended = !0), !1
      s.next_out &&
        ((0 !== s.avail_out &&
          n !== Cf.Z_STREAM_END &&
          (0 !== s.avail_in || (r !== Cf.Z_FINISH && r !== Cf.Z_SYNC_FLUSH))) ||
          ('string' === this.options.to
            ? ((i = kf.utf8border(s.output, s.next_out)),
              (a = s.next_out - i),
              (o = kf.buf2string(s.output, i)),
              (s.next_out = a),
              (s.avail_out = l - a),
              a && Sf.arraySet(s.output, s.output, i, a, 0),
              this.onData(o))
            : this.onData(Sf.shrinkBuf(s.output, s.next_out)))),
        0 === s.avail_in && 0 === s.avail_out && (c = !0)
    } while ((s.avail_in > 0 || 0 === s.avail_out) && n !== Cf.Z_STREAM_END)
    return (
      n === Cf.Z_STREAM_END && (r = Cf.Z_FINISH),
      r === Cf.Z_FINISH
        ? ((n = xf.inflateEnd(this.strm)), this.onEnd(n), (this.ended = !0), n === Cf.Z_OK)
        : r !== Cf.Z_SYNC_FLUSH || (this.onEnd(Cf.Z_OK), (s.avail_out = 0), !0)
    )
  }),
    (Of.prototype.onData = function (e) {
      this.chunks.push(e)
    }),
    (Of.prototype.onEnd = function (e) {
      e === Cf.Z_OK &&
        ('string' === this.options.to
          ? (this.result = this.chunks.join(''))
          : (this.result = Sf.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = e),
        (this.msg = this.strm.msg)
    }),
    (jh.Inflate = Of),
    (jh.inflate = Lf),
    (jh.inflateRaw = function (e, t) {
      return ((t = t || {}).raw = !0), Lf(e, t)
    }),
    (jh.ungzip = Lf)
  var zf = {}
  ;(0, Cc.assign)(zf, Tc, jh, wf)
  var Nf = zf,
    If = !1,
    Pf = 0,
    Df = 0,
    Bf = 960,
    Rf = 375,
    Ff = 750
  function qf(e, t) {
    var n = Number(e)
    return isNaN(n) ? t : n
  }
  var jf = _c(0, (e, t) => {
      var n
      if (
        (0 === Pf &&
          (!(function () {
            var { windowWidth: e, pixelRatio: t, platform: n } = yc()
            ;(Pf = e), (Df = t), (If = 'ios' === n)
          })(),
          (n = __uniConfig.globalStyle || {}),
          (Bf = qf(n.rpxCalcMaxDeviceWidth, 960)),
          (Rf = qf(n.rpxCalcBaseDeviceWidth, 375)),
          (Ff = qf(n.rpxCalcBaseDeviceWidth, 750))),
        0 === (e = Number(e)))
      )
        return 0
      var r = t || Pf,
        i = (e / 750) * (r = e === Ff || r <= Bf ? r : Rf)
      return (
        i < 0 && (i = -i),
        0 === (i = Math.floor(i + 1e-4)) && (i = 1 !== Df && If ? 0.5 : 1),
        e < 0 ? -i : i
      )
    }),
    Vf = {}
  Vf.f = {}.propertyIsEnumerable
  var $f,
    Hf = E,
    Wf = Ve,
    Uf = Z,
    Yf = Vf.f,
    Xf =
      (($f = !1),
      function (e) {
        for (var t, n = Uf(e), r = Wf(n), i = r.length, a = 0, o = []; i > a; )
          (t = r[a++]), (Hf && !Yf.call(n, t)) || o.push($f ? [t, n[t]] : n[t])
        return o
      })
  be(be.S, 'Object', {
    values: function (e) {
      return Xf(e)
    },
  })
  var Zf = 'setPageMeta',
    Gf = 'loadFontFace',
    Kf = 'pageScrollTo',
    Jf = function () {
      if ('object' == typeof window)
        if (
          'IntersectionObserver' in window &&
          'IntersectionObserverEntry' in window &&
          'intersectionRatio' in window.IntersectionObserverEntry.prototype
        )
          'isIntersecting' in window.IntersectionObserverEntry.prototype ||
            Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
              get: function () {
                return this.intersectionRatio > 0
              },
            })
        else {
          var e = (function () {
              for (var e = window.document, t = i(e); t; ) t = i((e = t.ownerDocument))
              return e
            })(),
            t = [],
            n = null,
            r = null
          ;(o.prototype.THROTTLE_TIMEOUT = 100),
            (o.prototype.POLL_INTERVAL = null),
            (o.prototype.USE_MUTATION_OBSERVER = !0),
            (o._setupCrossOriginUpdater = function () {
              return (
                n ||
                  (n = function (e, n) {
                    ;(r =
                      e && n
                        ? d(e, n)
                        : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }),
                      t.forEach(function (e) {
                        e._checkForIntersections()
                      })
                  }),
                n
              )
            }),
            (o._resetCrossOriginUpdater = function () {
              ;(n = null), (r = null)
            }),
            (o.prototype.observe = function (e) {
              if (
                !this._observationTargets.some(function (t) {
                  return t.element == e
                })
              ) {
                if (!e || 1 != e.nodeType) throw new Error('target must be an Element')
                this._registerInstance(),
                  this._observationTargets.push({ element: e, entry: null }),
                  this._monitorIntersections(e.ownerDocument),
                  this._checkForIntersections()
              }
            }),
            (o.prototype.unobserve = function (e) {
              ;(this._observationTargets = this._observationTargets.filter(function (t) {
                return t.element != e
              })),
                this._unmonitorIntersections(e.ownerDocument),
                0 == this._observationTargets.length && this._unregisterInstance()
            }),
            (o.prototype.disconnect = function () {
              ;(this._observationTargets = []),
                this._unmonitorAllIntersections(),
                this._unregisterInstance()
            }),
            (o.prototype.takeRecords = function () {
              var e = this._queuedEntries.slice()
              return (this._queuedEntries = []), e
            }),
            (o.prototype._initThresholds = function (e) {
              var t = e || [0]
              return (
                Array.isArray(t) || (t = [t]),
                t.sort().filter(function (e, t, n) {
                  if ('number' != typeof e || isNaN(e) || e < 0 || e > 1)
                    throw new Error('threshold must be a number between 0 and 1 inclusively')
                  return e !== n[t - 1]
                })
              )
            }),
            (o.prototype._parseRootMargin = function (e) {
              var t = (e || '0px').split(/\s+/).map(function (e) {
                var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e)
                if (!t) throw new Error('rootMargin must be specified in pixels or percent')
                return { value: parseFloat(t[1]), unit: t[2] }
              })
              return (t[1] = t[1] || t[0]), (t[2] = t[2] || t[0]), (t[3] = t[3] || t[1]), t
            }),
            (o.prototype._monitorIntersections = function (t) {
              var n = t.defaultView
              if (n && -1 == this._monitoringDocuments.indexOf(t)) {
                var r = this._checkForIntersections,
                  a = null,
                  o = null
                this.POLL_INTERVAL
                  ? (a = n.setInterval(r, this.POLL_INTERVAL))
                  : (s(n, 'resize', r, !0),
                    s(t, 'scroll', r, !0),
                    this.USE_MUTATION_OBSERVER &&
                      'MutationObserver' in n &&
                      (o = new n.MutationObserver(r)).observe(t, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      })),
                  this._monitoringDocuments.push(t),
                  this._monitoringUnsubscribes.push(function () {
                    var e = t.defaultView
                    e && (a && e.clearInterval(a), l(e, 'resize', r, !0)),
                      l(t, 'scroll', r, !0),
                      o && o.disconnect()
                  })
                var u = (this.root && (this.root.ownerDocument || this.root)) || e
                if (t != u) {
                  var c = i(t)
                  c && this._monitorIntersections(c.ownerDocument)
                }
              }
            }),
            (o.prototype._unmonitorIntersections = function (t) {
              var n = this._monitoringDocuments.indexOf(t)
              if (-1 != n) {
                var r = (this.root && (this.root.ownerDocument || this.root)) || e
                if (
                  !this._observationTargets.some(function (e) {
                    var n = e.element.ownerDocument
                    if (n == t) return !0
                    for (; n && n != r; ) {
                      var a = i(n)
                      if ((n = a && a.ownerDocument) == t) return !0
                    }
                    return !1
                  })
                ) {
                  var a = this._monitoringUnsubscribes[n]
                  if (
                    (this._monitoringDocuments.splice(n, 1),
                    this._monitoringUnsubscribes.splice(n, 1),
                    a(),
                    t != r)
                  ) {
                    var o = i(t)
                    o && this._unmonitorIntersections(o.ownerDocument)
                  }
                }
              }
            }),
            (o.prototype._unmonitorAllIntersections = function () {
              var e = this._monitoringUnsubscribes.slice(0)
              ;(this._monitoringDocuments.length = 0), (this._monitoringUnsubscribes.length = 0)
              for (var t = 0; t < e.length; t++) e[t]()
            }),
            (o.prototype._checkForIntersections = function () {
              if (this.root || !n || r) {
                var e = this._rootIsInDom(),
                  t = e
                    ? this._getRootRect()
                    : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }
                this._observationTargets.forEach(function (r) {
                  var i = r.element,
                    o = u(i),
                    s = this._rootContainsTarget(i),
                    l = r.entry,
                    c = e && s && this._computeTargetAndRootIntersection(i, o, t),
                    d = null
                  this._rootContainsTarget(i)
                    ? (n && !this.root) || (d = t)
                    : (d = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 })
                  var h = (r.entry = new a({
                    time: window.performance && performance.now && performance.now(),
                    target: i,
                    boundingClientRect: o,
                    rootBounds: d,
                    intersectionRect: c,
                  }))
                  l
                    ? e && s
                      ? this._hasCrossedThreshold(l, h) && this._queuedEntries.push(h)
                      : l && l.isIntersecting && this._queuedEntries.push(h)
                    : this._queuedEntries.push(h)
                }, this),
                  this._queuedEntries.length && this._callback(this.takeRecords(), this)
              }
            }),
            (o.prototype._computeTargetAndRootIntersection = function (t, i, a) {
              if ('none' != window.getComputedStyle(t).display) {
                for (var o, s, l, c, h, p, v, g, m = i, _ = f(t), y = !1; !y && _; ) {
                  var b = null,
                    w = 1 == _.nodeType ? window.getComputedStyle(_) : {}
                  if ('none' == w.display) return null
                  if (_ == this.root || 9 == _.nodeType)
                    if (((y = !0), _ == this.root || _ == e))
                      n && !this.root
                        ? !r || (0 == r.width && 0 == r.height)
                          ? ((_ = null), (b = null), (m = null))
                          : (b = r)
                        : (b = a)
                    else {
                      var x = f(_),
                        S = x && u(x),
                        k = x && this._computeTargetAndRootIntersection(x, S, a)
                      S && k ? ((_ = x), (b = d(S, k))) : ((_ = null), (m = null))
                    }
                  else {
                    var C = _.ownerDocument
                    _ != C.body && _ != C.documentElement && 'visible' != w.overflow && (b = u(_))
                  }
                  if (
                    (b &&
                      ((o = b),
                      (s = m),
                      (l = void 0),
                      (c = void 0),
                      (h = void 0),
                      (p = void 0),
                      (v = void 0),
                      (g = void 0),
                      (l = Math.max(o.top, s.top)),
                      (c = Math.min(o.bottom, s.bottom)),
                      (h = Math.max(o.left, s.left)),
                      (p = Math.min(o.right, s.right)),
                      (g = c - l),
                      (m =
                        ((v = p - h) >= 0 &&
                          g >= 0 && {
                            top: l,
                            bottom: c,
                            left: h,
                            right: p,
                            width: v,
                            height: g,
                          }) ||
                        null)),
                    !m)
                  )
                    break
                  _ = _ && f(_)
                }
                return m
              }
            }),
            (o.prototype._getRootRect = function () {
              var t
              if (this.root && !p(this.root)) t = u(this.root)
              else {
                var n = p(this.root) ? this.root : e,
                  r = n.documentElement,
                  i = n.body
                t = {
                  top: 0,
                  left: 0,
                  right: r.clientWidth || i.clientWidth,
                  width: r.clientWidth || i.clientWidth,
                  bottom: r.clientHeight || i.clientHeight,
                  height: r.clientHeight || i.clientHeight,
                }
              }
              return this._expandRectByRootMargin(t)
            }),
            (o.prototype._expandRectByRootMargin = function (e) {
              var t = this._rootMarginValues.map(function (t, n) {
                  return 'px' == t.unit ? t.value : (t.value * (n % 2 ? e.width : e.height)) / 100
                }),
                n = {
                  top: e.top - t[0],
                  right: e.right + t[1],
                  bottom: e.bottom + t[2],
                  left: e.left - t[3],
                }
              return (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
            }),
            (o.prototype._hasCrossedThreshold = function (e, t) {
              var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                r = t.isIntersecting ? t.intersectionRatio || 0 : -1
              if (n !== r)
                for (var i = 0; i < this.thresholds.length; i++) {
                  var a = this.thresholds[i]
                  if (a == n || a == r || a < n != a < r) return !0
                }
            }),
            (o.prototype._rootIsInDom = function () {
              return !this.root || h(e, this.root)
            }),
            (o.prototype._rootContainsTarget = function (t) {
              var n = (this.root && (this.root.ownerDocument || this.root)) || e
              return h(n, t) && (!this.root || n == t.ownerDocument)
            }),
            (o.prototype._registerInstance = function () {
              t.indexOf(this) < 0 && t.push(this)
            }),
            (o.prototype._unregisterInstance = function () {
              var e = t.indexOf(this)
              ;-1 != e && t.splice(e, 1)
            }),
            (window.IntersectionObserver = o),
            (window.IntersectionObserverEntry = a)
        }
      function i(e) {
        try {
          return (e.defaultView && e.defaultView.frameElement) || null
        } catch (t) {
          return null
        }
      }
      function a(e) {
        ;(this.time = e.time),
          (this.target = e.target),
          (this.rootBounds = c(e.rootBounds)),
          (this.boundingClientRect = c(e.boundingClientRect)),
          (this.intersectionRect = c(
            e.intersectionRect || { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 },
          )),
          (this.isIntersecting = !!e.intersectionRect)
        var t = this.boundingClientRect,
          n = t.width * t.height,
          r = this.intersectionRect,
          i = r.width * r.height
        this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
      }
      function o(e, t) {
        var n = t || {}
        if ('function' != typeof e) throw new Error('callback must be a function')
        if (n.root && 1 != n.root.nodeType && 9 != n.root.nodeType)
          throw new Error('root must be a Document or Element')
        ;(this._checkForIntersections = (function (e, t) {
          var n = null
          return function () {
            n ||
              (n = setTimeout(function () {
                e(), (n = null)
              }, t))
          }
        })(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
          (this._callback = e),
          (this._observationTargets = []),
          (this._queuedEntries = []),
          (this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
          (this.thresholds = this._initThresholds(n.threshold)),
          (this.root = n.root || null),
          (this.rootMargin = this._rootMarginValues
            .map(function (e) {
              return e.value + e.unit
            })
            .join(' ')),
          (this._monitoringDocuments = []),
          (this._monitoringUnsubscribes = [])
      }
      function s(e, t, n, r) {
        'function' == typeof e.addEventListener
          ? e.addEventListener(t, n, r)
          : 'function' == typeof e.attachEvent && e.attachEvent('on' + t, n)
      }
      function l(e, t, n, r) {
        'function' == typeof e.removeEventListener
          ? e.removeEventListener(t, n, r)
          : 'function' == typeof e.detatchEvent && e.detatchEvent('on' + t, n)
      }
      function u(e) {
        var t
        try {
          t = e.getBoundingClientRect()
        } catch (n) {}
        return t
          ? ((t.width && t.height) ||
              (t = {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.right - t.left,
                height: t.bottom - t.top,
              }),
            t)
          : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 }
      }
      function c(e) {
        return !e || 'x' in e
          ? e
          : {
              top: e.top,
              y: e.top,
              bottom: e.bottom,
              left: e.left,
              x: e.left,
              right: e.right,
              width: e.width,
              height: e.height,
            }
      }
      function d(e, t) {
        var n = t.top - e.top,
          r = t.left - e.left
        return {
          top: n,
          left: r,
          height: t.height,
          width: t.width,
          bottom: n + t.height,
          right: r + t.width,
        }
      }
      function h(e, t) {
        for (var n = t; n; ) {
          if (n == e) return !0
          n = f(n)
        }
        return !1
      }
      function f(t) {
        var n = t.parentNode
        return 9 == t.nodeType && t != e
          ? i(t)
          : (n && n.assignedSlot && (n = n.assignedSlot.parentNode),
            n && 11 == n.nodeType && n.host ? n.host : n)
      }
      function p(e) {
        return e && 9 === e.nodeType
      }
    }
  function Qf(e) {
    var { bottom: t, height: n, left: r, right: i, top: a, width: o } = e || {}
    return { bottom: t, height: n, left: r, right: i, top: a, width: o }
  }
  function ep(e) {
    var {
      intersectionRatio: t,
      boundingClientRect: { height: n, width: r },
      intersectionRect: { height: i, width: a },
    } = e
    return 0 !== t ? t : i === n ? a / r : i / n
  }
  const tp = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        navigateBack: function (e) {
          UniViewJSBridge.invokeServiceMethod('navigateBack', e)
        },
        navigateTo: function (e) {
          UniViewJSBridge.invokeServiceMethod('navigateTo', e)
        },
        reLaunch: function (e) {
          UniViewJSBridge.invokeServiceMethod('reLaunch', e)
        },
        redirectTo: function (e) {
          UniViewJSBridge.invokeServiceMethod('redirectTo', e)
        },
        switchTab: function (e) {
          UniViewJSBridge.invokeServiceMethod('switchTab', e)
        },
        upx2px: jf,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
  function np(e, t) {
    if (t)
      return (
        un(t, 'a') && (t.a = e(t.a)),
        un(t, 'e') && (t.e = e(t.e, !1)),
        un(t, 'w') &&
          (t.w = (function (e, t) {
            var n = {}
            return (
              e.forEach((e) => {
                var [r, [i, a]] = e
                n[t(r)] = [t(i), a]
              }),
              n
            )
          })(t.w, e)),
        un(t, 's') && (t.s = e(t.s)),
        un(t, 't') && (t.t = e(t.t)),
        t
      )
  }
  var rp = new Map()
  function ip(e) {
    return rp.get(e)
  }
  function ap(e) {
    return rp.delete(e)
  }
  var op = new Set()
  function sp(e, t) {
    op.add(
      (function (e, t) {
        return (e.priority = t), e
      })(e, t),
    )
  }
  function lp(e, t) {
    var n = window['__' + ar],
      r = n && n[e]
    return r || (t && t.__renderjsInstances ? t.__renderjsInstances[e] : void 0)
  }
  var up = 6
  function cp(e, t, n) {
    var [r, i, a, o] = hp(t),
      s = dp(e, r)
    if (cn(n) || cn(o)) {
      var [l, u] = a.split('.')
      return fp(s, i, l, u, o)
    }
    return (function (e, t, n) {
      var r = lp(t, e)
      if (!r) return console.error(pr('wxs', 'module ' + n + ' not found'))
      return hr(r, n.slice(n.indexOf('.') + 1))
    })(s, i, a)
  }
  function dp(e, t) {
    if (e.__ownerId === t) return e
    for (var n = e.parentElement; n; ) {
      if (n.__ownerId === t) return n
      n = n.parentElement
    }
    return e
  }
  function hp(e) {
    return JSON.parse(e.slice(up))
  }
  function fp(e, t, n, r, i) {
    var a = lp(t, e)
    if (!a) return console.error(pr('wxs', 'module ' + n + ' not found'))
    var o = a[r]
    return fn(o) ? o.apply(a, i) : console.error(n + '.' + r + ' is not a function')
  }
  function pp(e, t, n) {
    var r = n
    return (n) => {
      try {
        !(function (e, t, n, r) {
          var [i, a, o] = hp(e),
            s = dp(t, i),
            [l, u] = o.split('.')
          fp(s, a, l, u, [n, r, nc(ic(s)), nc(ic(t))])
        })(t, e.$, n, r)
      } catch (i) {
        console.error(i)
      }
      r = n
    }
  }
  function vp(e, t) {
    var n = ic(t)
    return Object.defineProperty(e, 'instance', { get: () => nc(n) }), e
  }
  function gp(e, t) {
    Object.keys(t).forEach((n) => {
      !(function (e, t) {
        var n = (function (e) {
          var t = window['__' + or],
            n = t && t[e]
          if (!n) return console.error(pr('renderjs', e + ' not found'))
          return n
        })(t)
        if (!n) return
        var r = e.$
        ;(r.__renderjsInstances || (r.__renderjsInstances = {}))[t] = (function (e, t) {
          return (
            (t = t.default || t),
            (t.render = () => {}),
            pu(t)
              .mixin({
                mounted() {
                  this.$ownerInstance = nc(ic(e))
                },
              })
              .mount(document.createElement('div'))
          )
        })(r, n)
      })(e, t[n])
    })
  }
  function mp(e, t) {
    return pn(e)
      ? (0 === e.indexOf(ir) ? (e = JSON.parse(e.slice(7))) : 0 === e.indexOf(rr) && (e = cp(t, e)),
        e)
      : e
  }
  function _p(e) {
    return 0 === e.indexOf('--')
  }
  class yp {
    constructor(e, t, n, r) {
      ;(this.isMounted = !1),
        (this.isUnmounted = !1),
        (this.$hasWxsProps = !1),
        (this.$children = []),
        (this.id = e),
        (this.tag = t),
        (this.pid = n),
        r && (this.$ = r),
        (this.$wxsProps = new Map())
      var i = (this.$parent = (function (e) {
        return rp.get(e)
      })(n))
      i && i.appendUniChild(this)
    }
    init(e) {
      un(e, 't') && (this.$.textContent = e.t)
    }
    setText(e) {
      ;(this.$.textContent = e), this.updateView()
    }
    insert(e, t, n) {
      n && this.init(n, !1)
      var r = this.$,
        i = ip(e)
      ;-1 === t ? i.appendChild(r) : i.insertBefore(r, ip(t).$), (this.isMounted = !0)
    }
    remove() {
      this.removeUniParent()
      var { $: e } = this
      e.parentNode.removeChild(e),
        (this.isUnmounted = !0),
        ap(this.id),
        (function (e) {
          var { __renderjsInstances: t } = e.$
          t &&
            Object.keys(t).forEach((e) => {
              t[e].$.appContext.app.unmount()
            })
        })(this),
        this.removeUniChildren(),
        this.updateView()
    }
    appendChild(e) {
      var t = this.$.appendChild(e)
      return this.updateView(!0), t
    }
    insertBefore(e, t) {
      var n = this.$.insertBefore(e, t)
      return this.updateView(!0), n
    }
    appendUniChild(e) {
      this.$children.push(e)
    }
    removeUniChild(e) {
      var t = this.$children.indexOf(e)
      t >= 0 && this.$children.splice(t, 1)
    }
    removeUniParent() {
      var { $parent: e } = this
      e && (e.removeUniChild(this), (this.$parent = void 0))
    }
    removeUniChildren() {
      for (var e = this.$children.length - 1; e >= 0; e--) this.$children[e].remove()
      this.$children.length = 0
    }
    setWxsProps(e) {
      Object.keys(e).forEach((t) => {
        if (0 === t.indexOf(Or)) {
          var n = t.replace(Or, ''),
            r = mp(e[n]),
            i = pp(this, e[t], r)
          sp(() => i(r), 4),
            this.$wxsProps.set(t, i),
            delete e[t],
            delete e[n],
            (this.$hasWxsProps = !0)
        }
      })
    }
    addWxsEvents(e) {
      Object.keys(e).forEach((t) => {
        var [n, r] = e[t]
        this.addWxsEvent(t, n, r)
      })
    }
    addWxsEvent(e, t, n) {}
    wxsPropsInvoke(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = this.$hasWxsProps && this.$wxsProps.get(Or + e)
      if (r) return sp(() => (n ? yo(() => r(t)) : r(t)), 4), !0
    }
    updateView(e) {
      ;(this.isMounted || e) && window.dispatchEvent(new CustomEvent('updateview'))
    }
  }
  function bp(e, t) {
    var { __wxsAddClass: n, __wxsRemoveClass: r } = e
    r &&
      r.length &&
      ((t = t
        .split(/\s+/)
        .filter((e) => -1 === r.indexOf(e))
        .join(' ')),
      (r.length = 0)),
      n && n.length && (t = t + ' ' + n.join(' ')),
      (e.className = t)
  }
  function wp(e) {
    return Tp(Lp(e))
  }
  var xp,
    Sp,
    kp,
    Cp = /url\(\s*'?"?([a-zA-Z0-9.\-_\/]+\.(jpg|gif|png))"?'?\s*\)/,
    Tp = (e) => {
      if (pn(e) && -1 !== e.indexOf('url(')) {
        var t = e.match(Cp)
        t && 3 === t.length && (e = e.replace(t[1], bc(t[1])))
      }
      return e
    },
    {
      unit: Ap,
      unitRatio: Mp,
      unitPrecision: Ep,
    } = { unit: 'rem', unitRatio: 10 / 320, unitPrecision: 5 },
    Op =
      ((xp = Ap),
      (Sp = Mp),
      (kp = Ep),
      (e) =>
        e.replace(_r, (e, t) => {
          if (!t) return e
          if (1 === Sp) return ''.concat(t).concat(xp)
          var n,
            r,
            i,
            a,
            o =
              ((n = parseFloat(t) * Sp),
              (r = kp),
              (i = Math.pow(10, r + 1)),
              (a = Math.floor(n * i)),
              (10 * Math.round(a / 10)) / i)
          return 0 === o ? '0' : ''.concat(o).concat(xp)
        })),
    Lp = (e) => (pn(e) ? Op(e) : e),
    zp = ['Webkit'],
    Np = {}
  function Ip(e, t) {
    var n = Np[t]
    if (n) return n
    var r = Tn(t)
    if ('filter' !== r && r in e) return (Np[t] = r)
    r = En(r)
    for (var i = 0; i < zp.length; i++) {
      var a = zp[i] + r
      if (a in e) return (Np[t] = a)
    }
    return t
  }
  function Pp(e, t) {
    var n = e.style
    if (pn(t)) '' === t ? e.removeAttribute('style') : (n.cssText = wp(t))
    else for (var r in t) Bp(n, r, t[r])
    var { __wxsStyle: i } = e
    if (i) for (var a in i) Bp(n, a, i[a])
  }
  var Dp = /\s*!important$/
  function Bp(e, t, n) {
    if (cn(n)) n.forEach((n) => Bp(e, t, n))
    else if (((n = wp(n)), t.startsWith('--'))) e.setProperty(t, n)
    else {
      var r = Ip(e, t)
      Dp.test(n) ? e.setProperty(Mn(r), n.replace(Dp, ''), 'important') : (e[r] = n)
    }
  }
  function Rp(e, t) {
    var n = e.__listeners[t]
    n && e.removeEventListener(t, n)
  }
  function Fp(e, t) {
    if (e.__listeners[t]) return !0
  }
  function qp(e, t, n) {
    var [r, i] = Sr(t)
    ;-1 === n
      ? Rp(e, r)
      : Fp(e, r) || e.addEventListener(r, (e.__listeners[r] = jp(e.__id, n, i)), i)
  }
  function jp(e, t, n) {
    var r = (t) => {
      var [r] = uc(t)
      ;(r.type = (function (e, t) {
        return (
          t &&
            (t.capture && (e += 'Capture'), t.once && (e += 'Once'), t.passive && (e += 'Passive')),
          'on'.concat(En(Tn(e)))
        )
      })(t.type, n)),
        UniViewJSBridge.publishHandler(fc, [[$r, e, r]])
    }
    return t ? hu(r, Vp(t)) : r
  }
  function Vp(e) {
    var t = []
    return (
      e & kr.prevent && t.push('prevent'),
      e & kr.self && t.push('self'),
      e & kr.stop && t.push('stop'),
      t
    )
  }
  function $p(e, t, n) {
    var r = (n) => {
      !(function (e, t, n) {
        var [r, i, a] = hp(t),
          [o, s] = a.split('.'),
          l = dp(e, r)
        fp(l, i, o, s, [vp(n, e), nc(ic(l))])
      })(
        (function (e) {
          return !!e.addWxsEvent
        })(e)
          ? e.$
          : e,
        t,
        uc(n)[0],
      )
    }
    return n ? hu(r, Vp(n)) : r
  }
  function Hp(e, t) {
    ;(e._vod = 'none' === e.style.display ? '' : e.style.display),
      (e.style.display = t ? e._vod : 'none')
  }
  class Wp extends yp {
    constructor(e, t, n, r, i) {
      var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : []
      super(e, t.tagName, n, t),
        (this.$props = Fa({})),
        (this.$.__id = e),
        (this.$.__listeners = Object.create(null)),
        (this.$propNames = a),
        (this._update = this.update.bind(this)),
        this.init(i),
        this.insert(n, r)
    }
    init(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
      un(e, 'a') && this.setAttrs(e.a),
        un(e, 's') && this.setAttr('style', e.s),
        un(e, 'e') && this.addEvents(e.e),
        un(e, 'w') && this.addWxsEvents(e.w),
        super.init(e),
        t &&
          (jo(
            this.$props,
            () => {
              sp(this._update, 1)
            },
            { flush: 'sync' },
          ),
          this.update(!0))
    }
    setAttrs(e) {
      this.setWxsProps(e),
        Object.keys(e).forEach((t) => {
          this.setAttr(t, e[t])
        })
    }
    addEvents(e) {
      Object.keys(e).forEach((t) => {
        this.addEvent(t, e[t])
      })
    }
    addWxsEvent(e, t, n) {
      !(function (e, t, n, r) {
        var [i, a] = Sr(t)
        ;-1 === r
          ? Rp(e, i)
          : Fp(e, i) || e.addEventListener(i, (e.__listeners[i] = $p(e, n, r)), a)
      })(this.$, e, t, n)
    }
    addEvent(e, t) {
      qp(this.$, e, t)
    }
    removeEvent(e) {
      qp(this.$, e, -1)
    }
    setAttr(e, t) {
      e === Cr
        ? bp(this.$, t)
        : e === Tr
          ? Pp(this.$, t)
          : e === Ar
            ? Hp(this.$, t)
            : e === Mr
              ? (this.$.__ownerId = t)
              : e === Er
                ? sp(() => gp(this, t), 3)
                : 'innerHTML' === e
                  ? (this.$.innerHTML = t)
                  : 'textContent' === e
                    ? this.setText(t)
                    : this.setAttribute(e, t),
        this.updateView()
    }
    removeAttr(e) {
      e === Cr ? bp(this.$, '') : e === Tr ? Pp(this.$, '') : this.removeAttribute(e),
        this.updateView()
    }
    setAttribute(e, t) {
      ;(t = mp(t, this.$)),
        -1 !== this.$propNames.indexOf(e)
          ? (this.$props[e] = t)
          : _p(e)
            ? this.$.style.setProperty(e, wp(t))
            : this.wxsPropsInvoke(e, t) || this.$.setAttribute(e, t)
    }
    removeAttribute(e) {
      ;-1 !== this.$propNames.indexOf(e)
        ? delete this.$props[e]
        : _p(e)
          ? this.$.style.removeProperty(e)
          : this.$.removeAttribute(e)
    }
    update() {}
  }
  function Up(e) {
    return /^-?\d+[ur]px$/i.test(e)
      ? e.replace(/(^-?\d+)[ur]px$/i, (e, t) => ''.concat(uni.upx2px(parseFloat(t)), 'px'))
      : /^-?[\d.]+$/.test(e)
        ? ''.concat(e, 'px')
        : e || ''
  }
  function Yp(e) {
    var t = e.animation
    if (t && t.actions && t.actions.length) {
      var n = 0,
        r = t.actions,
        i = t.actions.length
      setTimeout(() => {
        a()
      }, 0)
    }
    function a() {
      var t = r[n],
        o = t.option.transition,
        s = (function (e) {
          var t = [
              'matrix',
              'matrix3d',
              'scale',
              'scale3d',
              'rotate3d',
              'skew',
              'translate',
              'translate3d',
            ],
            n = [
              'scaleX',
              'scaleY',
              'scaleZ',
              'rotate',
              'rotateX',
              'rotateY',
              'rotateZ',
              'skewX',
              'skewY',
              'translateX',
              'translateY',
              'translateZ',
            ],
            r = ['opacity', 'background-color'],
            i = ['width', 'height', 'left', 'right', 'top', 'bottom'],
            a = e.animates,
            o = e.option,
            s = o.transition,
            l = {},
            u = []
          return (
            a.forEach((e) => {
              var a = e.type,
                o = [...e.args]
              if (t.concat(n).includes(a))
                a.startsWith('rotate') || a.startsWith('skew')
                  ? (o = o.map((e) => parseFloat(e) + 'deg'))
                  : a.startsWith('translate') && (o = o.map(Up)),
                  n.indexOf(a) >= 0 && (o.length = 1),
                  u.push(''.concat(a, '(').concat(o.join(','), ')'))
              else if (r.concat(i).includes(o[0])) {
                a = o[0]
                var s = o[1]
                l[a] = i.includes(a) ? Up(s) : s
              }
            }),
            (l.transform = l.webkitTransform = u.join(' ')),
            (l.transition = l.webkitTransition =
              Object.keys(l)
                .map((e) =>
                  ''
                    .concat(
                      (function (e) {
                        return e
                          .replace(/[A-Z]/g, (e) => '-'.concat(e.toLowerCase()))
                          .replace('webkit', '-webkit')
                      })(e),
                      ' ',
                    )
                    .concat(s.duration, 'ms ')
                    .concat(s.timingFunction, ' ')
                    .concat(s.delay, 'ms'),
                )
                .join(',')),
            (l.transformOrigin = l.webkitTransformOrigin = o.transformOrigin),
            l
          )
        })(t)
      Object.keys(s).forEach((t) => {
        e.$el.style[t] = s[t]
      }),
        (n += 1) < i && setTimeout(a, o.duration + o.delay)
    }
  }
  const Xp = {
    props: ['animation'],
    watch: {
      animation: {
        deep: !0,
        handler() {
          Yp(this)
        },
      },
    },
    mounted() {
      Yp(this)
    },
  }
  var Zp = (e) => {
      e.__reserved = !0
      var { props: t, mixins: n } = e
      return (t && t.animation) || (n || (e.mixins = [])).push(Xp), Gp(e)
    },
    Gp = (e) => ((e.__reserved = !0), (e.compatConfig = { MODE: 3 }), Xo(e))
  function Kp(e) {
    return (e.__wwe = !0), e
  }
  function Jp(e, t) {
    return (n, r, i) => {
      e.value &&
        t(
          n,
          (function (e, t, n, r) {
            var i
            return (
              (i = br(n)),
              {
                type: t.__evName || r.type || e,
                timeStamp: t.timeStamp || 0,
                target: i,
                currentTarget: i,
                detail: r,
              }
            )
          })(n, r, e.value, i || {}),
        )
    }
  }
  function Qp(e) {
    var t,
      n,
      r = eo(!1),
      i = !1
    function a() {
      requestAnimationFrame(() => {
        clearTimeout(n),
          (n = setTimeout(() => {
            r.value = !1
          }, parseInt(e.hoverStayTime)))
      })
    }
    function o(n) {
      n._hoverPropagationStopped ||
        (e.hoverClass &&
          'none' !== e.hoverClass &&
          !e.disabled &&
          (e.hoverStopPropagation && (n._hoverPropagationStopped = !0),
          (i = !0),
          (t = setTimeout(() => {
            ;(r.value = !0), i || a()
          }, parseInt(e.hoverStartTime)))))
    }
    function s() {
      ;(i = !1), r.value && a()
    }
    function l() {
      s(), window.removeEventListener('mouseup', l)
    }
    return {
      hovering: r,
      binding: {
        onTouchstartPassive: Kp(function (e) {
          e.touches.length > 1 || o(e)
        }),
        onMousedown: Kp(function (e) {
          i || (o(e), window.addEventListener('mouseup', l))
        }),
        onTouchend: Kp(function () {
          s()
        }),
        onMouseup: Kp(function () {
          i && l()
        }),
        onTouchcancel: Kp(function () {
          ;(i = !1), (r.value = !1), clearTimeout(t)
        }),
      },
    }
  }
  function ev(e, t) {
    return pn(t) && (t = [t]), t.reduce((t, n) => (e[n] && (t[n] = !0), t), Object.create(null))
  }
  var tv = Mu('uf')
  const nv = Zp({
    name: 'Form',
    emits: ['submit', 'reset'],
    setup(e, t) {
      var n,
        r,
        { slots: i, emit: a } = t,
        o = eo(null)
      return (
        (n = Jp(o, a)),
        (r = []),
        Is(tv, {
          addField(e) {
            r.push(e)
          },
          removeField(e) {
            r.splice(r.indexOf(e), 1)
          },
          submit(e) {
            n('submit', e, {
              value: r.reduce((e, t) => {
                if (t.submit) {
                  var [n, r] = t.submit()
                  n && (e[n] = r)
                }
                return e
              }, Object.create(null)),
            })
          },
          reset(e) {
            r.forEach((e) => e.reset && e.reset()), n('reset', e)
          },
        }),
        () => gl('uni-form', { ref: o }, [gl('span', null, [i.default && i.default()])], 512)
      )
    },
  })
  var rv = { for: { type: String, default: '' } },
    iv = Mu('ul')
  const av = Zp({
    name: 'Label',
    props: rv,
    setup(e, t) {
      var { slots: n } = t,
        r = eo(null),
        i = Du(),
        a = (function () {
          var e = []
          return (
            Is(iv, {
              addHandler(t) {
                e.push(t)
              },
              removeHandler(t) {
                e.splice(e.indexOf(t), 1)
              },
            }),
            e
          )
        })(),
        o = ql(() => e.for || (n.default && n.default.length)),
        s = Kp((t) => {
          var n = t.target,
            r = /^uni-(checkbox|radio|switch)-/.test(n.className)
          r || (r = /^uni-(checkbox|radio|switch|button)$|^(svg|path)$/i.test(n.tagName)),
            r ||
              (e.for
                ? UniViewJSBridge.emit('uni-label-click-' + i + '-' + e.for, t, !0)
                : a.length && a[0](t, !0))
        })
      return () =>
        gl(
          'uni-label',
          { ref: r, class: { 'uni-label-pointer': o }, onClick: s },
          [n.default && n.default()],
          10,
          ['onClick'],
        )
    },
  })
  function ov(e, t) {
    sv(e.id, t),
      jo(
        () => e.id,
        (e, n) => {
          lv(n, t, !0), sv(e, t, !0)
        },
      ),
      ls(() => {
        lv(e.id, t)
      })
  }
  function sv(e, t, n) {
    var r = Du()
    ;(n && !e) ||
      (wn(t) &&
        Object.keys(t).forEach((i) => {
          n
            ? 0 !== i.indexOf('@') &&
              0 !== i.indexOf('uni-') &&
              UniViewJSBridge.on('uni-'.concat(i, '-').concat(r, '-').concat(e), t[i])
            : 0 === i.indexOf('uni-')
              ? UniViewJSBridge.on(i, t[i])
              : e && UniViewJSBridge.on('uni-'.concat(i, '-').concat(r, '-').concat(e), t[i])
        }))
  }
  function lv(e, t, n) {
    var r = Du()
    ;(n && !e) ||
      (wn(t) &&
        Object.keys(t).forEach((i) => {
          n
            ? 0 !== i.indexOf('@') &&
              0 !== i.indexOf('uni-') &&
              UniViewJSBridge.off('uni-'.concat(i, '-').concat(r, '-').concat(e), t[i])
            : 0 === i.indexOf('uni-')
              ? UniViewJSBridge.off(i, t[i])
              : e && UniViewJSBridge.off('uni-'.concat(i, '-').concat(r, '-').concat(e), t[i])
        }))
  }
  const uv = Zp({
    name: 'Button',
    props: {
      id: { type: String, default: '' },
      hoverClass: { type: String, default: 'button-hover' },
      hoverStartTime: { type: [Number, String], default: 20 },
      hoverStayTime: { type: [Number, String], default: 70 },
      hoverStopPropagation: { type: Boolean, default: !1 },
      disabled: { type: [Boolean, String], default: !1 },
      formType: { type: String, default: '' },
      openType: { type: String, default: '' },
      loading: { type: [Boolean, String], default: !1 },
      plain: { type: [Boolean, String], default: !1 },
    },
    setup(e, t) {
      var { slots: n } = t,
        r = eo(null)
      hi()
      var i = Ps(tv, !1),
        { hovering: a, binding: o } = Qp(e),
        { t: s } = ui(),
        l = Kp((t, n) => {
          if (e.disabled) return t.stopImmediatePropagation()
          n && r.value.click()
          var a = e.formType
          if (a) {
            if (!i) return
            'submit' === a ? i.submit(t) : 'reset' === a && i.reset(t)
          } else {
            var o, l, u
            'feedback' === e.openType &&
              ((o = s('uni.button.feedback.title')),
              (l = s('uni.button.feedback.send')),
              (u = plus.webview.create(
                'https://service.dcloud.net.cn/uniapp/feedback.html',
                'feedback',
                {
                  titleNView: {
                    titleText: o,
                    autoBackButton: !0,
                    backgroundColor: '#F7F7F7',
                    titleColor: '#007aff',
                    buttons: [
                      {
                        text: l,
                        color: '#007aff',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        onclick: function () {
                          u.evalJS(
                            'typeof mui !== "undefined" && mui.trigger(document.getElementById("submit"),"tap")',
                          )
                        },
                      },
                    ],
                  },
                },
              )).show('slide-in-right'))
          }
        }),
        u = Ps(iv, !1)
      return (
        u &&
          (u.addHandler(l),
          ss(() => {
            u.removeHandler(l)
          })),
        ov(e, { 'label-click': l }),
        () => {
          var t = e.hoverClass,
            i = ev(e, 'disabled'),
            s = ev(e, 'loading'),
            u = ev(e, 'plain'),
            c = t && 'none' !== t
          return gl(
            'uni-button',
            xl({ ref: r, onClick: l, id: e.id, class: c && a.value ? t : '' }, c && o, i, s, u),
            [n.default && n.default()],
            16,
            ['onClick', 'id'],
          )
        }
      )
    },
  })
  const cv = Zp({
    name: 'ResizeSensor',
    props: { initial: { type: Boolean, default: !1 } },
    emits: ['resize'],
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = (function (e) {
          return () => {
            var { firstElementChild: t, lastElementChild: n } = e.value
            ;(t.scrollLeft = 1e5), (t.scrollTop = 1e5), (n.scrollLeft = 1e5), (n.scrollTop = 1e5)
          }
        })(r),
        a = (function (e, t, n) {
          var r = Fa({ width: -1, height: -1 })
          return (
            jo(
              () => on({}, r),
              (e) => t('resize', e),
            ),
            () => {
              var t = e.value
              t && ((r.width = t.offsetWidth), (r.height = t.offsetHeight), n())
            }
          )
        })(r, n, i)
      return (
        (function (e, t, n, r) {
          Ko(r),
            is(() => {
              t.initial && yo(n)
              var i = e.value
              i.offsetParent !== i.parentElement && (i.parentElement.style.position = 'relative'),
                'AnimationEvent' in window || r()
            })
        })(r, e, a, i),
        () =>
          gl(
            'uni-resize-sensor',
            { ref: r, onAnimationstartOnce: a },
            [
              gl('div', { onScroll: a }, [gl('div', null, null)], 40, ['onScroll']),
              gl('div', { onScroll: a }, [gl('div', null, null)], 40, ['onScroll']),
            ],
            40,
            ['onAnimationstartOnce'],
          )
      )
    },
  })
  var dv = (function () {
    var e = document.createElement('canvas')
    e.height = e.width = 0
    var t = e.getContext('2d'),
      n =
        t.backingStorePixelRatio ||
        t.webkitBackingStorePixelRatio ||
        t.mozBackingStorePixelRatio ||
        t.msBackingStorePixelRatio ||
        t.oBackingStorePixelRatio ||
        t.backingStorePixelRatio ||
        1
    return (window.devicePixelRatio || 1) / n
  })()
  function hv(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      n = t ? dv : 1
    ;(e.width = e.offsetWidth * n),
      (e.height = e.offsetHeight * n),
      (e.getContext('2d').__hidpi__ = t)
  }
  var fv = !1
  var pv,
    vv = dr(() =>
      (function () {
        if (!fv) {
          fv = !0
          var e = CanvasRenderingContext2D.prototype
          ;(e.drawImageByCanvas = (function (e) {
            return function (t, n, r, i, a, o, s, l, u, c) {
              if (!this.__hidpi__) return e.apply(this, arguments)
              ;(n *= dv),
                (r *= dv),
                (i *= dv),
                (a *= dv),
                (o *= dv),
                (s *= dv),
                (l = c ? l * dv : l),
                (u = c ? u * dv : u),
                e.call(this, t, n, r, i, a, o, s, l, u)
            }
          })(e.drawImage)),
            1 !== dv &&
              ((function (e, t) {
                for (var n in e) un(e, n) && t(e[n], n)
              })(
                {
                  fillRect: 'all',
                  clearRect: 'all',
                  strokeRect: 'all',
                  moveTo: 'all',
                  lineTo: 'all',
                  arc: [0, 1, 2],
                  arcTo: 'all',
                  bezierCurveTo: 'all',
                  isPointinPath: 'all',
                  isPointinStroke: 'all',
                  quadraticCurveTo: 'all',
                  rect: 'all',
                  translate: 'all',
                  createRadialGradient: 'all',
                  createLinearGradient: 'all',
                  transform: [4, 5],
                  setTransform: [4, 5],
                },
                function (t, n) {
                  e[n] = (function (e) {
                    return function () {
                      if (!this.__hidpi__) return e.apply(this, arguments)
                      var n = Array.prototype.slice.call(arguments)
                      if ('all' === t)
                        n = n.map(function (e) {
                          return e * dv
                        })
                      else if (Array.isArray(t)) for (var r = 0; r < t.length; r++) n[t[r]] *= dv
                      return e.apply(this, n)
                    }
                  })(e[n])
                },
              ),
              (e.stroke = (function (e) {
                return function () {
                  if (!this.__hidpi__) return e.apply(this, arguments)
                  ;(this.lineWidth *= dv), e.apply(this, arguments), (this.lineWidth /= dv)
                }
              })(e.stroke)),
              (e.fillText = (function (e) {
                return function () {
                  if (!this.__hidpi__) return e.apply(this, arguments)
                  var t = Array.prototype.slice.call(arguments)
                  ;(t[1] *= dv), (t[2] *= dv), t[3] && 'number' == typeof t[3] && (t[3] *= dv)
                  var n = this.__font__ || this.font
                  ;(this.font = n.replace(/(\d+\.?\d*)(px|em|rem|pt)/g, function (e, t, n) {
                    return t * dv + n
                  })),
                    e.apply(this, t),
                    (this.font = n)
                }
              })(e.fillText)),
              (e.strokeText = (function (e) {
                return function () {
                  if (!this.__hidpi__) return e.apply(this, arguments)
                  var t = Array.prototype.slice.call(arguments)
                  ;(t[1] *= dv), (t[2] *= dv), t[3] && 'number' == typeof t[3] && (t[3] *= dv)
                  var n = this.__font__ || this.font
                  ;(this.font = n.replace(/(\d+\.?\d*)(px|em|rem|pt)/g, function (e, t, n) {
                    return t * dv + n
                  })),
                    e.apply(this, t),
                    (this.font = n)
                }
              })(e.strokeText)),
              (e.drawImage = (function (e) {
                return function () {
                  if (!this.__hidpi__) return e.apply(this, arguments)
                  this.scale(dv, dv), e.apply(this, arguments), this.scale(1 / dv, 1 / dv)
                }
              })(e.drawImage)))
        }
      })(),
    )
  function gv(e) {
    return e ? bc(e) : e
  }
  function mv(e) {
    return ((e = e.slice(0))[3] = e[3] / 255), 'rgba(' + e.join(',') + ')'
  }
  function _v(e, t) {
    Array.from(t).forEach((t) => {
      ;(t.x = t.clientX - e.left), (t.y = t.clientY - e.top)
    })
  }
  function yv() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
    return pv || (pv = document.createElement('canvas')), (pv.width = e), (pv.height = t), pv
  }
  const bv = Zp({
    inheritAttrs: !1,
    name: 'Canvas',
    compatConfig: { MODE: 3 },
    props: {
      canvasId: { type: String, default: '' },
      disableScroll: { type: [Boolean, String], default: !1 },
      hidpi: { type: Boolean, default: !0 },
    },
    computed: {
      id() {
        return this.canvasId
      },
    },
    setup(e, t) {
      var { emit: n, slots: r } = t
      vv()
      var i = eo(null),
        a = eo(null),
        o = eo(null),
        s = eo(!1),
        l = (function (e) {
          return (t, n) => {
            e(t, cc(n))
          }
        })(n),
        { $attrs: u, $excludeAttrs: c, $listeners: d } = jg({ excludeListeners: !0 }),
        { _listeners: h } = (function (e, t, n) {
          var r = ql(() => {
            var r = ['onTouchstart', 'onTouchmove', 'onTouchend'],
              i = t.value,
              a = on(
                {},
                (() => {
                  var e = {}
                  for (var t in i)
                    if (un(i, t)) {
                      var n = i[t]
                      e[t] = n
                    }
                  return e
                })(),
              )
            return (
              r.forEach((t) => {
                var r = []
                a[t] &&
                  r.push(
                    Kp((e) => {
                      var r = e.currentTarget.getBoundingClientRect()
                      _v(r, e.touches),
                        _v(r, e.changedTouches),
                        n(t.replace('on', '').toLocaleLowerCase(), e)
                    }),
                  ),
                  e.disableScroll && 'onTouchmove' === t && r.push(Cu),
                  (a[t] = r)
              }),
              a
            )
          })
          return { _listeners: r }
        })(e, d, l),
        { _handleSubscribe: f, _resize: p } = (function (e, t, n) {
          var r = [],
            i = {},
            a = ql(() => (e.hidpi ? dv : 1))
          function o(n) {
            var r = t.value
            if (
              !n ||
              r.width !== Math.floor(n.width * a.value) ||
              r.height !== Math.floor(n.height * a.value)
            )
              if (r.width > 0 && r.height > 0) {
                var i = r.getContext('2d'),
                  o = i.getImageData(0, 0, r.width, r.height)
                hv(r, e.hidpi), i.putImageData(o, 0, 0)
              } else hv(r, e.hidpi)
          }
          function s(e, a) {
            var { actions: o, reserve: s } = e
            if (o)
              if (n.value) r.push([o, s])
              else {
                var c = t.value,
                  d = c.getContext('2d')
                s ||
                  ((d.fillStyle = '#000000'),
                  (d.strokeStyle = '#000000'),
                  (d.shadowColor = '#000000'),
                  (d.shadowBlur = 0),
                  (d.shadowOffsetX = 0),
                  (d.shadowOffsetY = 0),
                  d.setTransform(1, 0, 0, 1, 0, 0),
                  d.clearRect(0, 0, c.width, c.height)),
                  l(o)
                for (
                  var h = function (e) {
                      var t = o[e],
                        n = t.method,
                        r = t.data,
                        s = r[0]
                      if (/^set/.test(n) && 'setTransform' !== n) {
                        var l,
                          c = n[3].toLowerCase() + n.slice(4)
                        if ('fillStyle' === c || 'strokeStyle' === c) {
                          if ('normal' === s) l = mv(r[1])
                          else if ('linear' === s) {
                            var h = d.createLinearGradient(...r[1])
                            r[2].forEach(function (e) {
                              var t = e[0],
                                n = mv(e[1])
                              h.addColorStop(t, n)
                            }),
                              (l = h)
                          } else if ('radial' === s) {
                            var f = r[1],
                              p = f[0],
                              v = f[1],
                              g = f[2],
                              m = d.createRadialGradient(p, v, 0, p, v, g)
                            r[2].forEach(function (e) {
                              var t = e[0],
                                n = mv(e[1])
                              m.addColorStop(t, n)
                            }),
                              (l = m)
                          } else if ('pattern' === s) {
                            return u(r[1], o.slice(e + 1), a, function (e) {
                              e && (d[c] = d.createPattern(e, r[2]))
                            })
                              ? 'continue'
                              : 'break'
                          }
                          d[c] = l
                        } else if ('globalAlpha' === c) d[c] = Number(s) / 255
                        else if ('shadow' === c) {
                          var _ = ['shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor']
                          r.forEach(function (e, t) {
                            d[_[t]] = 'shadowColor' === _[t] ? mv(e) : e
                          })
                        } else if ('fontSize' === c) {
                          var y = d.__font__ || d.font
                          d.__font__ = d.font = y.replace(/\d+\.?\d*px/, s + 'px')
                        } else
                          'lineDash' === c
                            ? (d.setLineDash(s), (d.lineDashOffset = r[1] || 0))
                            : 'textBaseline' === c
                              ? ('normal' === s && (r[0] = 'alphabetic'), (d[c] = s))
                              : 'font' === c
                                ? (d.__font__ = d.font = s)
                                : (d[c] = s)
                      } else if ('fillPath' === n || 'strokePath' === n)
                        (n = n.replace(/Path/, '')),
                          d.beginPath(),
                          r.forEach(function (e) {
                            d[e.method].apply(d, e.data)
                          }),
                          d[n]()
                      else if ('fillText' === n) d.fillText.apply(d, r)
                      else if ('drawImage' === n) {
                        if (
                          'break' ===
                          (function () {
                            var t = [...r],
                              n = t[0],
                              s = t.slice(1)
                            if (
                              ((i = i || {}),
                              !u(n, o.slice(e + 1), a, function (e) {
                                e &&
                                  d.drawImage.apply(
                                    d,
                                    [e].concat([...s.slice(4, 8)], [...s.slice(0, 4)]),
                                  )
                              }))
                            )
                              return 'break'
                          })()
                        )
                          return 'break'
                      } else
                        'clip' === n
                          ? (r.forEach(function (e) {
                              d[e.method].apply(d, e.data)
                            }),
                            d.clip())
                          : d[n].apply(d, r)
                    },
                    f = 0;
                  f < o.length;
                  f++
                ) {
                  var p = h(f)
                  if ('break' === p) break
                }
                n.value || a({ errMsg: 'drawCanvas:ok' })
              }
          }
          function l(e) {
            e.forEach(function (e) {
              var t = e.method,
                n = e.data,
                r = ''
              function a() {
                var e = (i[r] = new Image())
                if (
                  ((e.onload = function () {
                    e.ready = !0
                  }),
                  'HarmonyOS' !== plus.os.name && 'Google Inc.' === navigator.vendor)
                )
                  return (
                    0 === r.indexOf('file://') && (e.crossOrigin = 'anonymous'), void (e.src = r)
                  )
                kc(r)
                  .then((t) => {
                    e.src = t
                  })
                  .catch(() => {
                    e.src = r
                  })
              }
              'drawImage' === t
                ? ((r = gv((r = n[0]))), (n[0] = r))
                : 'setFillStyle' === t && 'pattern' === n[0] && ((r = gv((r = n[1]))), (n[1] = r)),
                r && !i[r] && a()
            })
          }
          function u(e, t, a, o) {
            var l = i[e]
            return l.ready
              ? (o(l), !0)
              : (r.unshift([t, !0]),
                (n.value = !0),
                (l.onload = function () {
                  ;(l.ready = !0), o(l), (n.value = !1)
                  var e = r.slice(0)
                  r = []
                  for (var t = e.shift(); t; )
                    s({ actions: t[0], reserve: t[1] }, a), (t = e.shift())
                }),
                !1)
          }
          function c(e, n) {
            var r,
              {
                x: i = 0,
                y: o = 0,
                width: s,
                height: l,
                destWidth: u,
                destHeight: c,
                hidpi: d = !0,
                dataType: h,
                quality: f = 1,
                type: p = 'png',
              } = e,
              v = t.value,
              g = v.offsetWidth - i
            s = s ? Math.min(s, g) : g
            var m = v.offsetHeight - o
            ;(l = l ? Math.min(l, m) : m),
              d
                ? ((u = s), (c = l))
                : u || c
                  ? u
                    ? c || (c = Math.round((l / s) * u))
                    : (c || (c = Math.round(l * a.value)), (u = Math.round((s / l) * c)))
                  : ((u = Math.round(s * a.value)), (c = Math.round(l * a.value)))
            var _,
              y = yv(u, c),
              b = y.getContext('2d')
            ;('jpeg' !== p && 'jpg' !== p) ||
              ((p = 'jpeg'), (b.fillStyle = '#fff'), b.fillRect(0, 0, u, c)),
              (b.__hidpi__ = !0),
              b.drawImageByCanvas(v, i, o, s, l, 0, 0, u, c, !1)
            try {
              var w
              if ('base64' === h) r = y.toDataURL('image/'.concat(p), f)
              else {
                var x = b.getImageData(0, 0, u, c)
                ;(r = Nf.deflateRaw(x.data, { to: 'string' })), (w = !0)
              }
              _ = { data: r, compressed: w, width: u, height: c }
            } catch (S) {
              _ = { errMsg: 'canvasGetImageData:fail '.concat(S) }
            }
            if (((y.height = y.width = 0), (b.__hidpi__ = !1), !n)) return _
            n(_)
          }
          function d(e, n) {
            var { data: r, x: i, y: a, width: o, height: s, compressed: l } = e
            try {
              l && (r = Nf.inflateRaw(r)), s || (s = Math.round(r.length / 4 / o))
              var u = yv(o, s)
              u.getContext('2d').putImageData(new ImageData(new Uint8ClampedArray(r), o, s), 0, 0),
                t.value.getContext('2d').drawImage(u, i, a, o, s),
                (u.height = u.width = 0)
            } catch (c) {
              return void n({ errMsg: 'canvasPutImageData:fail' })
            }
            n({ errMsg: 'canvasPutImageData:ok' })
          }
          function h(e, t) {
            var {
                x: n = 0,
                y: r = 0,
                width: i,
                height: a,
                destWidth: o,
                destHeight: s,
                fileType: l,
                quality: u,
                dirname: d,
              } = e,
              h = c({
                x: n,
                y: r,
                width: i,
                height: a,
                destWidth: o,
                destHeight: s,
                hidpi: !1,
                dataType: 'base64',
                type: l,
                quality: u,
              })
            h.errMsg
              ? t({ errMsg: h.errMsg.replace('canvasPutImageData', 'toTempFilePath') })
              : (function (e, t, n) {
                  var r = ''.concat(Date.now()).concat(xc++),
                    i = e.split(','),
                    a = i[0],
                    o = i[1],
                    s = (a.match(/data:image\/(\S+?);/) || ['', 'png'])[1].replace('jpeg', 'jpg'),
                    l = ''.concat(r, '.').concat(s),
                    u = ''.concat(t, '/').concat(l),
                    c = t.indexOf('/'),
                    d = t.substring(0, c),
                    h = t.substring(c + 1)
                  plus.io.resolveLocalFileSystemURL(
                    d,
                    function (e) {
                      e.getDirectory(
                        h,
                        { create: !0, exclusive: !1 },
                        function (e) {
                          e.getFile(
                            l,
                            { create: !0, exclusive: !1 },
                            function (e) {
                              e.createWriter(function (e) {
                                ;(e.onwrite = function () {
                                  n(null, u)
                                }),
                                  (e.onerror = n),
                                  e.seek(0),
                                  e.writeAsBinary(o)
                              }, n)
                            },
                            n,
                          )
                        },
                        n,
                      )
                    },
                    n,
                  )
                })(h.data, d, (e, n) => {
                  var r = 'toTempFilePath:'.concat(e ? 'fail' : 'ok')
                  e && (r += ' '.concat(e.message)), t({ errMsg: r, tempFilePath: n })
                })
          }
          var f = { actionsChanged: s, getImageData: c, putImageData: d, toTempFilePath: h }
          function p(e, t, n) {
            var r = f[e]
            0 !== e.indexOf('_') && fn(r) && r(t, n)
          }
          return on(f, { _resize: o, _handleSubscribe: p })
        })(e, a, s)
      return (
        o_(f, l_(e.canvasId)),
        is(() => {
          p()
        }),
        () => {
          var { canvasId: t, disableScroll: n } = e
          return gl(
            'uni-canvas',
            xl({ ref: i, 'canvas-id': t, 'disable-scroll': n }, u.value, c.value, h.value),
            [
              gl(
                'canvas',
                { ref: a, class: 'uni-canvas-canvas', width: '300', height: '150' },
                null,
                512,
              ),
              gl(
                'div',
                {
                  style:
                    'position: absolute;top: 0;left: 0;width: 100%;height: 100%;overflow: hidden;',
                },
                [r.default && r.default()],
              ),
              gl(cv, { ref: o, onResize: p }, null, 8, ['onResize']),
            ],
            16,
            ['canvas-id', 'disable-scroll'],
          )
        }
      )
    },
  })
  var wv = Mu('ucg')
  const xv = Zp({
    name: 'CheckboxGroup',
    props: { name: { type: String, default: '' } },
    emits: ['change'],
    setup(e, t) {
      var { emit: n, slots: r } = t,
        i = eo(null)
      return (
        (function (e, t) {
          var n = [],
            r = () =>
              n.reduce((e, t) => (t.value.checkboxChecked && e.push(t.value.value), e), new Array())
          Is(wv, {
            addField(e) {
              n.push(e)
            },
            removeField(e) {
              n.splice(n.indexOf(e), 1)
            },
            checkboxChange(e) {
              t('change', e, { value: r() })
            },
          })
          var i = Ps(tv, !1)
          i &&
            i.addField({
              submit: () => {
                var t = ['', null]
                return '' !== e.name && ((t[0] = e.name), (t[1] = r())), t
              },
            })
        })(e, Jp(i, n)),
        () => gl('uni-checkbox-group', { ref: i }, [r.default && r.default()], 512)
      )
    },
  })
  const Sv = Zp({
    name: 'Checkbox',
    props: {
      checked: { type: [Boolean, String], default: !1 },
      id: { type: String, default: '' },
      disabled: { type: [Boolean, String], default: !1 },
      value: { type: String, default: '' },
      color: { type: String, default: '#007aff' },
      backgroundColor: { type: String, default: '' },
      borderColor: { type: String, default: '' },
      activeBackgroundColor: { type: String, default: '' },
      activeBorderColor: { type: String, default: '' },
      iconColor: { type: String, default: '' },
      foreColor: { type: String, default: '' },
    },
    setup(e, t) {
      var { slots: n } = t,
        r = eo(null),
        i = eo(e.checked),
        a = ql(() => 'true' === i.value || !0 === i.value),
        o = eo(e.value)
      var s = ql(() =>
        (function (t) {
          if (e.disabled) return { backgroundColor: '#E1E1E1', borderColor: '#D1D1D1' }
          var n = {}
          return (
            t
              ? (e.activeBorderColor && (n.borderColor = e.activeBorderColor),
                e.activeBackgroundColor && (n.backgroundColor = e.activeBackgroundColor))
              : (e.borderColor && (n.borderColor = e.borderColor),
                e.backgroundColor && (n.backgroundColor = e.backgroundColor)),
            n
          )
        })(a.value),
      )
      jo([() => e.checked, () => e.value], (e) => {
        var [t, n] = e
        ;(i.value = t), (o.value = n)
      })
      var { uniCheckGroup: l, uniLabel: u } = (function (e, t, n) {
          var r = ql(() => ({ checkboxChecked: Boolean(e.value), value: t.value })),
            i = { reset: n },
            a = Ps(wv, !1)
          a && a.addField(r)
          var o = Ps(tv, !1)
          o && o.addField(i)
          var s = Ps(iv, !1)
          return (
            ss(() => {
              a && a.removeField(r), o && o.removeField(i)
            }),
            { uniCheckGroup: a, uniForm: o, uniLabel: s }
          )
        })(i, o, () => {
          i.value = !1
        }),
        c = (t) => {
          e.disabled || ((i.value = !i.value), l && l.checkboxChange(t), t.stopPropagation())
        }
      return (
        u &&
          (u.addHandler(c),
          ss(() => {
            u.removeHandler(c)
          })),
        ov(e, { 'label-click': c }),
        () => {
          var t,
            a = ev(e, 'disabled')
          return (
            (t = i.value),
            gl(
              'uni-checkbox',
              xl(a, { id: e.id, onClick: c, ref: r }),
              [
                gl(
                  'div',
                  {
                    class: 'uni-checkbox-wrapper',
                    style: { '--HOVER-BD-COLOR': e.activeBorderColor },
                  },
                  [
                    gl(
                      'div',
                      {
                        class: [
                          'uni-checkbox-input',
                          { 'uni-checkbox-input-disabled': e.disabled },
                        ],
                        style: s.value,
                      },
                      [
                        t
                          ? Pu(
                              Nu,
                              e.disabled ? '#ADADAD' : e.foreColor || e.iconColor || e.color,
                              22,
                            )
                          : '',
                      ],
                      6,
                    ),
                    n.default && n.default(),
                  ],
                  4,
                ),
              ],
              16,
              ['id', 'onClick'],
            )
          )
        }
      )
    },
  })
  var kv, Cv, Tv, Av, Mv, Ev
  function Ov() {}
  function Lv(e, t, n) {
    wr(() => {
      var r = 'adjustResize',
        i = 'adjustPan',
        a = plus.webview.currentWebview(),
        o = Ev || a.getStyle() || {},
        s = {
          mode: n || o.softinputMode === r ? r : e.adjustPosition ? i : 'nothing',
          position: { top: 0, height: 0 },
        }
      if (s.mode === i) {
        var l = t.getBoundingClientRect()
        ;(s.position.top = l.top), (s.position.height = l.height + (Number(e.cursorSpacing) || 0))
      }
      a.setSoftinputTemporary(s)
    })
  }
  wr(() => {
    ;(Cv = 'Android' === plus.os.name), (Tv = plus.os.version || '')
  }),
    document.addEventListener(
      'keyboardchange',
      function (e) {
        ;(Av = e.height), Mv && Mv()
      },
      !1,
    )
  var zv = {
      cursorSpacing: { type: [Number, String], default: 0 },
      showConfirmBar: { type: [Boolean, String], default: 'auto' },
      adjustPosition: { type: [Boolean, String], default: !0 },
      autoBlur: { type: [Boolean, String], default: !1 },
    },
    Nv = ['keyboardheightchange']
  function Iv(e, t, n) {
    var r = {}
    function i(t) {
      var i,
        a = ql(() => 0 === String(navigator.vendor).indexOf('Apple')),
        o = () => {
          n('keyboardheightchange', {}, { height: Av, duration: 0.25 }),
            i && 0 === Av && Lv(e, t),
            e.autoBlur &&
              i &&
              0 === Av &&
              (Cv || parseInt(Tv) >= 13) &&
              document.activeElement.blur()
        }
      t.addEventListener('focus', () => {
        ;(i = !0),
          clearTimeout(kv),
          document.addEventListener('click', Ov, !1),
          (Mv = o),
          Av && n('keyboardheightchange', {}, { height: Av, duration: 0 }),
          (function (e, t) {
            'auto' !== e.showConfirmBar
              ? wr(() => {
                  var n = plus.webview.currentWebview(),
                    { softinputNavBar: r } = n.getStyle() || {}
                  ;('none' !== r) !== e.showConfirmBar
                    ? ((t.softinputNavBar = r || 'auto'),
                      n.setStyle({ softinputNavBar: e.showConfirmBar ? 'auto' : 'none' }))
                    : delete t.softinputNavBar
                })
              : delete t.softinputNavBar
          })(e, r),
          Lv(e, t)
      }),
        Cv &&
          t.addEventListener('click', () => {
            e.disabled || e.readOnly || !i || 0 !== Av || Lv(e, t)
          }),
        Cv ||
          (parseInt(Tv) < 12 &&
            t.addEventListener('touchstart', () => {
              e.disabled || e.readOnly || i || Lv(e, t)
            }),
          parseFloat(Tv) >= 14.6 &&
            !Ev &&
            wr(() => {
              var e = plus.webview.currentWebview()
              Ev = e.getStyle() || {}
            }))
      var s = () => {
        document.removeEventListener('click', Ov, !1),
          (Mv = null),
          Av && n('keyboardheightchange', {}, { height: 0, duration: 0 }),
          (function (e) {
            var t = e.softinputNavBar
            t &&
              wr(() => {
                plus.webview.currentWebview().setStyle({ softinputNavBar: t })
              })
          })(r),
          Cv &&
            (kv = setTimeout(() => {
              Lv(e, t, !0)
            }, 300)),
          a.value &&
            document.documentElement.scrollTo(
              document.documentElement.scrollLeft,
              document.documentElement.scrollTop,
            )
      }
      t.addEventListener('blur', () => {
        a.value && t.blur(), (i = !1), s()
      })
    }
    jo(
      () => t.value,
      (e) => e && i(e),
    )
  }
  var Pv =
      /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
    Dv = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
    Bv =
      /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
    Rv = Wv(
      'area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr',
    ),
    Fv = Wv(
      'a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video',
    ),
    qv = Wv(
      'abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var',
    ),
    jv = Wv('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'),
    Vv = Wv(
      'checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected',
    ),
    $v = Wv('script,style')
  function Hv(e, t) {
    var n,
      r,
      i,
      a = [],
      o = e
    for (
      a.last = function () {
        return this[this.length - 1]
      };
      e;

    ) {
      if (((r = !0), a.last() && $v[a.last()]))
        (e = e.replace(new RegExp('([\\s\\S]*?)</' + a.last() + '[^>]*>'), function (e, n) {
          return (
            (n = n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2')),
            t.chars && t.chars(n),
            ''
          )
        })),
          u('', a.last())
      else if (
        (0 == e.indexOf('\x3c!--')
          ? (n = e.indexOf('--\x3e')) >= 0 &&
            (t.comment && t.comment(e.substring(4, n)), (e = e.substring(n + 3)), (r = !1))
          : 0 == e.indexOf('</')
            ? (i = e.match(Dv)) && ((e = e.substring(i[0].length)), i[0].replace(Dv, u), (r = !1))
            : 0 == e.indexOf('<') &&
              (i = e.match(Pv)) &&
              ((e = e.substring(i[0].length)), i[0].replace(Pv, l), (r = !1)),
        r)
      ) {
        var s = (n = e.indexOf('<')) < 0 ? e : e.substring(0, n)
        ;(e = n < 0 ? '' : e.substring(n)), t.chars && t.chars(s)
      }
      if (e == o) throw 'Parse Error: ' + e
      o = e
    }
    function l(e, n, r, i) {
      if (((n = n.toLowerCase()), Fv[n])) for (; a.last() && qv[a.last()]; ) u('', a.last())
      if ((jv[n] && a.last() == n && u('', n), (i = Rv[n] || !!i) || a.push(n), t.start)) {
        var o = []
        r.replace(Bv, function (e, t) {
          var n = arguments[2]
            ? arguments[2]
            : arguments[3]
              ? arguments[3]
              : arguments[4]
                ? arguments[4]
                : Vv[t]
                  ? t
                  : ''
          o.push({ name: t, value: n, escaped: n.replace(/(^|[^\\])"/g, '$1\\"') })
        }),
          t.start && t.start(n, o, i)
      }
    }
    function u(e, n) {
      if (n) for (r = a.length - 1; r >= 0 && a[r] != n; r--);
      else var r = 0
      if (r >= 0) {
        for (var i = a.length - 1; i >= r; i--) t.end && t.end(a[i])
        a.length = r
      }
    }
    u()
  }
  function Wv(e) {
    for (var t = {}, n = e.split(','), r = 0; r < n.length; r++) t[n[r]] = !0
    return t
  }
  var Uv = {}
  function Yv(e, t, n) {
    if (pn(e) ? window[e] : e) n()
    else {
      var r = Uv[t]
      if (!r) {
        r = Uv[t] = []
        var i = document.createElement('script')
        ;(i.src = t),
          document.body.appendChild(i),
          (i.onload = function () {
            r.forEach((e) => e()), delete Uv[t]
          })
      }
      r.push(n)
    }
  }
  function Xv(e) {
    var t = e.import('blots/block/embed')
    class n extends t {}
    return (n.blotName = 'divider'), (n.tagName = 'HR'), { 'formats/divider': n }
  }
  function Zv(e) {
    var t = e.import('blots/inline')
    class n extends t {}
    return (n.blotName = 'ins'), (n.tagName = 'INS'), { 'formats/ins': n }
  }
  function Gv(e) {
    var { Scope: t, Attributor: n } = e.import('parchment'),
      r = { scope: t.BLOCK, whitelist: ['left', 'right', 'center', 'justify'] }
    return { 'formats/align': new n.Style('align', 'text-align', r) }
  }
  function Kv(e) {
    var { Scope: t, Attributor: n } = e.import('parchment'),
      r = { scope: t.BLOCK, whitelist: ['rtl'] }
    return { 'formats/direction': new n.Style('direction', 'direction', r) }
  }
  function Jv(e) {
    var t = e.import('parchment'),
      n = e.import('blots/container'),
      r = e.import('formats/list/item')
    class i extends n {
      static create(e) {
        var t = 'ordered' === e ? 'OL' : 'UL',
          n = super.create(t)
        return (
          ('checked' !== e && 'unchecked' !== e) || n.setAttribute('data-checked', 'checked' === e),
          n
        )
      }
      static formats(e) {
        return 'OL' === e.tagName
          ? 'ordered'
          : 'UL' === e.tagName
            ? e.hasAttribute('data-checked')
              ? 'true' === e.getAttribute('data-checked')
                ? 'checked'
                : 'unchecked'
              : 'bullet'
            : void 0
      }
      constructor(e) {
        super(e)
        e.addEventListener('click', (n) => {
          if (n.target.parentNode === e) {
            var r = this.statics.formats(e),
              i = t.find(n.target)
            'checked' === r
              ? i.format('list', 'unchecked')
              : 'unchecked' === r && i.format('list', 'checked')
          }
        })
      }
      format(e, t) {
        this.children.length > 0 && this.children.tail.format(e, t)
      }
      formats() {
        return { [this.statics.blotName]: this.statics.formats(this.domNode) }
      }
      insertBefore(e, t) {
        if (e instanceof r) super.insertBefore(e, t)
        else {
          var n = null == t ? this.length() : t.offset(this),
            i = this.split(n)
          i.parent.insertBefore(e, i)
        }
      }
      optimize(e) {
        super.optimize(e)
        var t = this.next
        null != t &&
          t.prev === this &&
          t.statics.blotName === this.statics.blotName &&
          t.domNode.tagName === this.domNode.tagName &&
          t.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked') &&
          (t.moveChildren(this), t.remove())
      }
      replace(e) {
        if (e.statics.blotName !== this.statics.blotName) {
          var n = t.create(this.statics.defaultChild)
          e.moveChildren(n), this.appendChild(n)
        }
        super.replace(e)
      }
    }
    return (
      (i.blotName = 'list'),
      (i.scope = t.Scope.BLOCK_BLOT),
      (i.tagName = ['OL', 'UL']),
      (i.defaultChild = 'list-item'),
      (i.allowedChildren = [r]),
      { 'formats/list': i }
    )
  }
  function Qv(e) {
    var { Scope: t } = e.import('parchment')
    return {
      'formats/backgroundColor': new (e.import('formats/background').constructor)(
        'backgroundColor',
        'background-color',
        { scope: t.INLINE },
      ),
    }
  }
  function eg(e) {
    var { Scope: t, Attributor: n } = e.import('parchment'),
      r = { scope: t.BLOCK },
      i = {}
    return (
      ['margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight']
        .concat(['padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'])
        .forEach((e) => {
          i['formats/'.concat(e)] = new n.Style(e, Mn(e), r)
        }),
      i
    )
  }
  function tg(e) {
    var { Scope: t, Attributor: n } = e.import('parchment'),
      r = { scope: t.INLINE },
      i = {}
    return (
      ['font', 'fontSize', 'fontStyle', 'fontVariant', 'fontWeight', 'fontFamily'].forEach((e) => {
        i['formats/'.concat(e)] = new n.Style(e, Mn(e), r)
      }),
      i
    )
  }
  function ng(e) {
    var { Scope: t, Attributor: n } = e.import('parchment'),
      r = [
        { name: 'lineHeight', scope: t.BLOCK },
        { name: 'letterSpacing', scope: t.INLINE },
        { name: 'textDecoration', scope: t.INLINE },
        { name: 'textIndent', scope: t.BLOCK },
      ],
      i = {}
    return (
      r.forEach((e) => {
        var { name: t, scope: r } = e
        i['formats/'.concat(t)] = new n.Style(t, Mn(t), { scope: r })
      }),
      i
    )
  }
  function rg(e) {
    var t = e.import('formats/image'),
      n = ['alt', 'height', 'width', 'data-custom', 'class', 'data-local']
    ;(t.sanitize = (e) => (e ? bc(e) : e)),
      (t.formats = function (e) {
        return n.reduce(function (t, n) {
          return e.hasAttribute(n) && (t[n] = e.getAttribute(n)), t
        }, {})
      })
    var r = t.prototype.format
    t.prototype.format = function (e, t) {
      n.indexOf(e) > -1
        ? t
          ? this.domNode.setAttribute(e, t)
          : this.domNode.removeAttribute(e)
        : r.call(this, e, t)
    }
  }
  function ig(e) {
    var t = e.import('formats/link')
    t.sanitize = (e) => {
      var n = document.createElement('a')
      n.href = e
      var r = n.href.slice(0, n.href.indexOf(':'))
      return t.PROTOCOL_WHITELIST.concat('file').indexOf(r) > -1 ? e : t.SANITIZED_URL
    }
  }
  function ag(e, t, n) {
    var r, i, a
    function o() {
      return { html: a.root.innerHTML, text: a.getText(), delta: a.getContents() }
    }
    function s(e) {
      var t = 'data-placeholder',
        n = a.root
      n.getAttribute(t) !== e && n.setAttribute(t, e)
    }
    jo(
      () => e.readOnly,
      (e) => {
        r && (a.enable(!e), e || a.blur())
      },
    ),
      jo(
        () => e.placeholder,
        (e) => {
          r && s(e)
        },
      )
    var l = {}
    function u(e) {
      var t = e ? a.getFormat(e) : {},
        r = Object.keys(t)
      ;(r.length !== Object.keys(l).length || r.find((e) => t[e] !== l[e])) &&
        ((l = t), n('statuschange', {}, t))
    }
    function c() {
      n('input', {}, o())
    }
    function d(l) {
      var d = window.Quill
      !(function (e) {
        var t = {
            divider: Xv,
            ins: Zv,
            align: Gv,
            direction: Kv,
            list: Jv,
            background: Qv,
            box: eg,
            font: tg,
            text: ng,
            image: rg,
            link: ig,
          },
          n = {}
        Object.values(t).forEach((t) => on(n, t(e))), e.register(n, !0)
      })(d)
      var h = { toolbar: !1, readOnly: e.readOnly, placeholder: e.placeholder }
      l.length &&
        (d.register('modules/ImageResize', window.ImageResize.default),
        (h.modules = { ImageResize: { modules: l } }))
      var f = t.value,
        p = (a = new d(f, h)).root
      ;['focus', 'blur', 'input'].forEach((t) => {
        p.addEventListener(t, (r) => {
          var i = o()
          if ('input' === t) {
            if ('ios' === yc().platform) {
              var a = (i.html.match(/<span [\s\S]*>([\s\S]*)<\/span>/) || [])[1]
              s(a && a.replace(/\s/g, '') ? '' : e.placeholder)
            }
            r.stopPropagation()
          } else n(t, r, i)
        })
      }),
        a.on('text-change', c),
        a.on('selection-change', u),
        a.on('scroll-optimize', () => {
          u(a.selection.getRange()[0])
        }),
        a.clipboard.addMatcher(
          Node.ELEMENT_NODE,
          (e, t) => (
            i ||
              (t.ops &&
                (t.ops = t.ops
                  .filter((e) => {
                    var { insert: t } = e
                    return pn(t)
                  })
                  .map((e) => {
                    var { insert: t } = e
                    return { insert: t }
                  }))),
            t
          ),
        ),
        (r = !0),
        n('ready', {}, {})
    }
    o_((e, t, n) => {
      var s,
        l,
        d,
        { options: h, callbackId: f } = t
      if (r) {
        var p = window.Quill
        switch (e) {
          case 'format':
            var { name: v = '', value: g = !1 } = h
            l = a.getSelection(!0)
            var m = a.getFormat(l)[v] || !1
            if (['bold', 'italic', 'underline', 'strike', 'ins'].includes(v)) g = !m
            else if ('direction' === v) {
              g = ('rtl' !== g || !m) && g
              var _ = a.getFormat(l).align
              'rtl' !== g || _
                ? g || 'right' !== _ || a.format('align', !1, 'user')
                : a.format('align', 'right', 'user')
            } else if ('indent' === v) {
              ;(g = '+1' === g),
                'rtl' === a.getFormat(l).direction && (g = !g),
                (g = g ? '+1' : '-1')
            } else
              'list' === v &&
                ((g = 'check' === g ? 'unchecked' : g), (m = 'checked' === m ? 'unchecked' : m)),
                (g = (m && m !== (g || !1)) || (!m && g) ? g : !m)
            a.format(v, g, 'user')
            break
          case 'insertDivider':
            ;(l = a.getSelection(!0)),
              a.insertText(l.index, Jn, 'user'),
              a.insertEmbed(l.index + 1, 'divider', !0, 'user'),
              a.setSelection(l.index + 2, 0, 'silent')
            break
          case 'insertImage':
            l = a.getSelection(!0)
            var {
                src: y = '',
                alt: b = '',
                width: w = '',
                height: x = '',
                extClass: S = '',
                data: k = {},
              } = h,
              C = bc(y)
            a.insertEmbed(l.index, 'image', C, 'silent')
            var T = !!/^(file|blob):/.test(C) && C
            a.formatText(l.index, 1, 'data-local', T, 'silent'),
              a.formatText(l.index, 1, 'alt', b, 'silent'),
              a.formatText(l.index, 1, 'width', w, 'silent'),
              a.formatText(l.index, 1, 'height', x, 'silent'),
              a.formatText(l.index, 1, 'class', S, 'silent'),
              a.formatText(
                l.index,
                1,
                'data-custom',
                Object.keys(k)
                  .map((e) => ''.concat(e, '=').concat(k[e]))
                  .join('&'),
                'silent',
              ),
              a.setSelection(l.index + 1, 0, 'silent'),
              a.scrollIntoView(),
              setTimeout(() => {
                c()
              }, 1e3)
            break
          case 'insertText':
            l = a.getSelection(!0)
            var { text: A = '' } = h
            a.insertText(l.index, A, 'user'), a.setSelection(l.index + A.length, 0, 'silent')
            break
          case 'setContents':
            var { delta: M, html: E } = h
            'object' == typeof M
              ? a.setContents(M, 'silent')
              : pn(E)
                ? a.setContents(
                    (function (e) {
                      var t,
                        n = [
                          'span',
                          'strong',
                          'b',
                          'ins',
                          'em',
                          'i',
                          'u',
                          'a',
                          'del',
                          's',
                          'sub',
                          'sup',
                          'img',
                          'div',
                          'p',
                          'h1',
                          'h2',
                          'h3',
                          'h4',
                          'h5',
                          'h6',
                          'hr',
                          'ol',
                          'ul',
                          'li',
                          'br',
                        ],
                        r = ''
                      Hv(e, {
                        start: function (e, i, a) {
                          if (n.includes(e)) {
                            t = !1
                            var o = i
                                .map((e) => {
                                  var { name: t, value: n } = e
                                  return ''.concat(t, '="').concat(n, '"')
                                })
                                .join(' '),
                              s = '<'
                                .concat(e, ' ')
                                .concat(o, ' ')
                                .concat(a ? '/' : '', '>')
                            r += s
                          } else t = !a
                        },
                        end: function (e) {
                          t || (r += '</'.concat(e, '>'))
                        },
                        chars: function (e) {
                          t || (r += e)
                        },
                      }),
                        (i = !0)
                      var o = a.clipboard.convert(r)
                      return (i = !1), o
                    })(E),
                    'silent',
                  )
                : (d = 'contents is missing')
            break
          case 'getContents':
            s = o()
            break
          case 'clear':
            a.setText('')
            break
          case 'removeFormat':
            l = a.getSelection(!0)
            var O = p.import('parchment')
            l.length
              ? a.removeFormat(l.index, l.length, 'user')
              : Object.keys(a.getFormat(l)).forEach((e) => {
                  O.query(e, O.Scope.INLINE) && a.format(e, !1)
                })
            break
          case 'undo':
            a.history.undo()
            break
          case 'redo':
            a.history.redo()
            break
          case 'blur':
            a.blur()
            break
          case 'getSelectionText':
            ;(s = { text: '' }),
              (l = a.selection.savedRange) &&
                0 !== l.length &&
                (s.text = a.getText(l.index, l.length))
            break
          case 'scrollIntoView':
            a.scrollIntoView()
        }
        u(l)
      } else d = 'not ready'
      f &&
        n({
          callbackId: f,
          data: on({}, s, { errMsg: ''.concat(e, ':').concat(d ? 'fail ' + d : 'ok') }),
        })
    }, l_()),
      is(() => {
        var t = []
        e.showImgSize && t.push('DisplaySize'),
          e.showImgToolbar && t.push('Toolbar'),
          e.showImgResize && t.push('Resize')
        Yv(window.Quill, './__uniappquill.js', () => {
          if (t.length) {
            Yv(window.ImageResize, './__uniappquillimageresize.js', () => {
              d(t)
            })
          } else d(t)
        })
      })
  }
  const og = Zp({
    name: 'Editor',
    props: on({}, zv, {
      id: { type: String, default: '' },
      readOnly: { type: [Boolean, String], default: !1 },
      placeholder: { type: String, default: '' },
      showImgSize: { type: [Boolean, String], default: !1 },
      showImgToolbar: { type: [Boolean, String], default: !1 },
      showImgResize: { type: [Boolean, String], default: !1 },
    }),
    emit: ['ready', 'focus', 'blur', 'input', 'statuschange', ...Nv],
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = Jp(r, n)
      return (
        ag(e, r, i),
        Iv(e, r, i),
        () => gl('uni-editor', { ref: r, id: e.id, class: 'ql-container' }, null, 8, ['id'])
      )
    },
  })
  var sg = '#10aeff',
    lg = '#b2b2b2',
    ug = {
      success: {
        d: 'M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM24.832 11.328l-11.264 11.104q-0.032 0.032-0.112 0.032t-0.112-0.032l-5.216-5.376q-0.096-0.128 0-0.288l0.704-0.96q0.032-0.064 0.112-0.064t0.112 0.032l4.256 3.264q0.064 0.032 0.144 0.032t0.112-0.032l10.336-8.608q0.064-0.064 0.144-0.064t0.112 0.064l0.672 0.672q0.128 0.128 0 0.224z',
        c: er,
      },
      success_no_circle: { d: Nu, c: er },
      info: {
        d: 'M15.808 0.128q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.176 3.776-2.176 8.16 0 4.224 2.176 7.872 2.080 3.552 5.632 5.632 3.648 2.176 7.872 2.176 4.384 0 8.16-2.176 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.416-2.176-8.16-2.112-3.616-5.728-5.728-3.744-2.176-8.16-2.176zM16.864 23.776q0 0.064-0.064 0.064h-1.568q-0.096 0-0.096-0.064l-0.256-11.328q0-0.064 0.064-0.064h2.112q0.096 0 0.064 0.064l-0.256 11.328zM16 10.88q-0.576 0-0.976-0.4t-0.4-0.96 0.4-0.96 0.976-0.4 0.976 0.4 0.4 0.96-0.4 0.96-0.976 0.4z',
        c: sg,
      },
      warn: {
        d: 'M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z',
        c: '#f76260',
      },
      waiting: {
        d: 'M15.84 0.096q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM23.008 21.92l-0.512 0.896q-0.096 0.128-0.224 0.064l-8-3.808q-0.096-0.064-0.16-0.128-0.128-0.096-0.128-0.288l0.512-12.096q0-0.064 0.048-0.112t0.112-0.048h1.376q0.064 0 0.112 0.048t0.048 0.112l0.448 10.848 6.304 4.256q0.064 0.064 0.080 0.128t-0.016 0.128z',
        c: sg,
      },
      cancel: {
        d: 'M20.928 10.176l-4.928 4.928-4.928-4.928-0.896 0.896 4.928 4.928-4.928 4.928 0.896 0.896 4.928-4.928 4.928 4.928 0.896-0.896-4.928-4.928 4.928-4.928-0.896-0.896zM16 2.080q-3.776 0-7.040 1.888-3.136 1.856-4.992 4.992-1.888 3.264-1.888 7.040t1.888 7.040q1.856 3.136 4.992 4.992 3.264 1.888 7.040 1.888t7.040-1.888q3.136-1.856 4.992-4.992 1.888-3.264 1.888-7.040t-1.888-7.040q-1.856-3.136-4.992-4.992-3.264-1.888-7.040-1.888zM16 28.64q-3.424 0-6.4-1.728-2.848-1.664-4.512-4.512-1.728-2.976-1.728-6.4t1.728-6.4q1.664-2.848 4.512-4.512 2.976-1.728 6.4-1.728t6.4 1.728q2.848 1.664 4.512 4.512 1.728 2.976 1.728 6.4t-1.728 6.4q-1.664 2.848-4.512 4.512-2.976 1.728-6.4 1.728z',
        c: '#f43530',
      },
      download: {
        d: 'M15.808 1.696q-3.776 0-7.072 1.984-3.2 1.888-5.088 5.152-1.952 3.392-1.952 7.36 0 3.776 1.952 7.072 1.888 3.2 5.088 5.088 3.296 1.952 7.072 1.952 3.968 0 7.36-1.952 3.264-1.888 5.152-5.088 1.984-3.296 1.984-7.072 0-4-1.984-7.36-1.888-3.264-5.152-5.152-3.36-1.984-7.36-1.984zM20.864 18.592l-3.776 4.928q-0.448 0.576-1.088 0.576t-1.088-0.576l-3.776-4.928q-0.448-0.576-0.24-0.992t0.944-0.416h2.976v-8.928q0-0.256 0.176-0.432t0.4-0.176h1.216q0.224 0 0.4 0.176t0.176 0.432v8.928h2.976q0.736 0 0.944 0.416t-0.24 0.992z',
        c: er,
      },
      search: {
        d: 'M20.928 22.688q-1.696 1.376-3.744 2.112-2.112 0.768-4.384 0.768-3.488 0-6.464-1.728-2.88-1.696-4.576-4.608-1.76-2.976-1.76-6.464t1.76-6.464q1.696-2.88 4.576-4.576 2.976-1.76 6.464-1.76t6.464 1.76q2.912 1.696 4.608 4.576 1.728 2.976 1.728 6.464 0 2.272-0.768 4.384-0.736 2.048-2.112 3.744l9.312 9.28-1.824 1.824-9.28-9.312zM12.8 23.008q2.784 0 5.184-1.376 2.304-1.376 3.68-3.68 1.376-2.4 1.376-5.184t-1.376-5.152q-1.376-2.336-3.68-3.68-2.4-1.408-5.184-1.408t-5.152 1.408q-2.336 1.344-3.68 3.68-1.408 2.368-1.408 5.152t1.408 5.184q1.344 2.304 3.68 3.68 2.368 1.376 5.152 1.376zM12.8 23.008v0z',
        c: lg,
      },
      clear: {
        d: 'M16 0q-4.352 0-8.064 2.176-3.616 2.144-5.76 5.76-2.176 3.712-2.176 8.064t2.176 8.064q2.144 3.616 5.76 5.76 3.712 2.176 8.064 2.176t8.064-2.176q3.616-2.144 5.76-5.76 2.176-3.712 2.176-8.064t-2.176-8.064q-2.144-3.616-5.76-5.76-3.712-2.176-8.064-2.176zM22.688 21.408q0.32 0.32 0.304 0.752t-0.336 0.736-0.752 0.304-0.752-0.32l-5.184-5.376-5.376 5.184q-0.32 0.32-0.752 0.304t-0.736-0.336-0.304-0.752 0.32-0.752l5.376-5.184-5.184-5.376q-0.32-0.32-0.304-0.752t0.336-0.752 0.752-0.304 0.752 0.336l5.184 5.376 5.376-5.184q0.32-0.32 0.752-0.304t0.752 0.336 0.304 0.752-0.336 0.752l-5.376 5.184 5.184 5.376z',
        c: lg,
      },
    }
  const cg = Zp({
    name: 'Icon',
    props: {
      type: { type: String, required: !0, default: '' },
      size: { type: [String, Number], default: 23 },
      color: { type: String, default: '' },
    },
    setup(e) {
      var t = eo(null),
        n = ql(() => ug[e.type])
      return () => {
        var { value: r } = n
        return gl('uni-icon', { ref: t }, [r && r.d && Pu(r.d, e.color || r.c, Ou(e.size))], 512)
      }
    },
  })
  var dg = {
      src: { type: String, default: '' },
      mode: { type: String, default: 'scaleToFill' },
      lazyLoad: { type: [Boolean, String], default: !1 },
      draggable: { type: Boolean, default: !1 },
    },
    hg = {
      widthFix: ['offsetWidth', 'height', (e, t) => e / t],
      heightFix: ['offsetHeight', 'width', (e, t) => e * t],
    },
    fg = {
      aspectFit: ['center center', 'contain'],
      aspectFill: ['center center', 'cover'],
      widthFix: [, '100% 100%'],
      heightFix: [, '100% 100%'],
      top: ['center top'],
      bottom: ['center bottom'],
      center: ['center center'],
      left: ['left center'],
      right: ['right center'],
      'top left': ['left top'],
      'top right': ['right top'],
      'bottom left': ['left bottom'],
      'bottom right': ['right bottom'],
    }
  const pg = Zp({
    name: 'Image',
    props: dg,
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = (function (e, t) {
          var n = eo(''),
            r = ql(() => {
              var e = 'auto',
                r = '',
                i = fg[t.mode]
              return (
                i ? (i[0] && (r = i[0]), i[1] && (e = i[1])) : ((r = '0% 0%'), (e = '100% 100%')),
                'background-image:'
                  .concat(n.value ? 'url("' + n.value + '")' : 'none', ';background-position:')
                  .concat(r, ';background-size:')
                  .concat(e, ';')
              )
            }),
            i = Fa({
              rootEl: e,
              src: ql(() => (t.src ? bc(t.src) : '')),
              origWidth: 0,
              origHeight: 0,
              origStyle: { width: '', height: '' },
              modeStyle: r,
              imgSrc: n,
            })
          return (
            is(() => {
              var t = e.value
              ;(i.origWidth = t.clientWidth || 0), (i.origHeight = t.clientHeight || 0)
            }),
            i
          )
        })(r, e),
        a = Jp(r, n),
        { fixSize: o } = (function (e, t, n) {
          var r = () => {
              var { mode: r } = t,
                i = hg[r]
              if (i) {
                var { origWidth: a, origHeight: o } = n,
                  s = a && o ? a / o : 0
                if (s) {
                  var l = e.value,
                    u = l[i[0]]
                  u &&
                    (l.style[i[1]] =
                      (function (e) {
                        vg && e > 10 && (e = 2 * Math.round(e / 2))
                        return e
                      })(i[2](u, s)) + 'px'),
                    window.dispatchEvent(new CustomEvent('updateview'))
                }
              }
            },
            i = () => {
              var { style: t } = e.value,
                {
                  origStyle: { width: r, height: i },
                } = n
              ;(t.width = r), (t.height = i)
            }
          return (
            jo(
              () => t.mode,
              (e, t) => {
                hg[t] && i(), hg[e] && r()
              },
            ),
            { fixSize: r, resetSize: i }
          )
        })(r, e, i)
      return (
        (function (e, t, n, r, i) {
          var a,
            o,
            s = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ''
              ;(e.origWidth = t), (e.origHeight = n), (e.imgSrc = r)
            },
            l = (l) => {
              if (!l) return u(), void s()
              ;((a = a || new Image()).onload = (e) => {
                var { width: c, height: d } = a
                s(c, d, l),
                  yo(() => {
                    r()
                  }),
                  (a.draggable = t.draggable),
                  o && o.remove(),
                  (o = a),
                  n.value.appendChild(a),
                  u(),
                  i('load', e, { width: c, height: d })
              }),
                (a.onerror = (t) => {
                  s(), u(), i('error', t, { errMsg: 'GET '.concat(e.src, ' 404 (Not Found)') })
                }),
                (a.src = l)
            },
            u = () => {
              a && ((a.onload = null), (a.onerror = null), (a = null))
            }
          jo(
            () => e.src,
            (e) => l(e),
          ),
            jo(
              () => e.imgSrc,
              (e) => {
                !e && o && (o.remove(), (o = null))
              },
            ),
            is(() => l(e.src)),
            ss(() => u())
        })(i, e, r, o, a),
        () =>
          gl(
            'uni-image',
            { ref: r },
            [
              gl('div', { style: i.modeStyle }, null, 4),
              hg[e.mode] ? gl(cv, { onResize: o }, null, 8, ['onResize']) : gl('span', null, null),
            ],
            512,
          )
      )
    },
  })
  var vg = 'Google Inc.' === navigator.vendor
  var gg = yr(!0),
    mg = [],
    _g = 0,
    yg = !1,
    bg = (e) => mg.forEach((t) => (t.userAction = e))
  function wg() {
    var e = Fa({ userAction: !1 })
    return (
      is(() => {
        !(function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { userAction: !1 }
          yg ||
            (['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach((e) => {
              document.addEventListener(
                e,
                function () {
                  !_g && bg(!0),
                    _g++,
                    setTimeout(() => {
                      !--_g && bg(!1)
                    }, 0)
                },
                gg,
              )
            }),
            (yg = !0))
          mg.push(e)
        })(e)
      }),
      ss(() => {
        var t, n
        ;(t = e), (n = mg.indexOf(t)) >= 0 && mg.splice(n, 1)
      }),
      { state: e }
    )
  }
  function xg() {
    var e = Fa({ attrs: {} })
    return (
      is(() => {
        for (var t = El(); t; ) {
          var n = t.type.__scopeId
          n && (e.attrs[n] = ''), (t = t.proxy && 'page' === t.proxy.$mpType ? null : t.parent)
        }
      }),
      { state: e }
    )
  }
  function Sg(e, t) {
    var n = document.activeElement
    if (!n) return t({})
    var r = {}
    ;['input', 'textarea'].includes(n.tagName.toLowerCase()) &&
      ((r.start = n.selectionStart), (r.end = n.selectionEnd)),
      t(r)
  }
  var kg,
    Cg = 200
  function Tg(e, t, n) {
    return 'number' === t && isNaN(Number(e)) && (e = ''), null == e ? '' : String(e)
  }
  var Ag = ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
    Mg = on(
      {},
      {
        name: { type: String, default: '' },
        modelValue: { type: [String, Number] },
        value: { type: [String, Number] },
        disabled: { type: [Boolean, String], default: !1 },
        autoFocus: { type: [Boolean, String], default: !1 },
        focus: { type: [Boolean, String], default: !1 },
        cursor: { type: [Number, String], default: -1 },
        selectionStart: { type: [Number, String], default: -1 },
        selectionEnd: { type: [Number, String], default: -1 },
        type: { type: String, default: 'text' },
        password: { type: [Boolean, String], default: !1 },
        placeholder: { type: String, default: '' },
        placeholderStyle: { type: String, default: '' },
        placeholderClass: { type: String, default: '' },
        maxlength: { type: [Number, String], default: 140 },
        confirmType: { type: String, default: 'done' },
        confirmHold: { type: Boolean, default: !1 },
        ignoreCompositionEvent: { type: Boolean, default: !0 },
        step: { type: String, default: '0.000000000000000001' },
        inputmode: { type: String, default: void 0, validator: (e) => !!~Ag.indexOf(e) },
        cursorColor: { type: String, default: '' },
      },
      zv,
    ),
    Eg = [
      'input',
      'focus',
      'blur',
      'update:value',
      'update:modelValue',
      'update:focus',
      'compositionstart',
      'compositionupdate',
      'compositionend',
      ...Nv,
    ]
  function Og(e, t, n, r) {
    var i = null
    jo(
      () => e.modelValue,
      (i = Hr(
        (n) => {
          t.value = Tg(n, e.type)
        },
        100,
        { setTimeout: setTimeout, clearTimeout: clearTimeout },
      )),
    ),
      jo(() => e.value, i)
    var a = (function (e, t) {
      var n,
        r,
        i = 0,
        a = function () {
          for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
          var l = Date.now()
          clearTimeout(n),
            (r = () => {
              ;(r = null), (i = l), e.apply(this, o)
            }),
            l - i < t ? (n = setTimeout(r, t - (l - i))) : r()
        }
      return (
        (a.cancel = function () {
          clearTimeout(n), (r = null)
        }),
        (a.flush = function () {
          clearTimeout(n), r && r()
        }),
        a
      )
    })((e, t) => {
      i.cancel(), n('update:modelValue', t.value), n('update:value', t.value), r('input', e, t)
    }, 100)
    return (
      rs(() => {
        i.cancel(), a.cancel()
      }),
      {
        trigger: r,
        triggerInput: (e, t, n) => {
          i.cancel(), a(e, t), n && a.flush()
        },
      }
    )
  }
  function Lg(e, t) {
    var { state: n } = wg(),
      r = ql(() => e.autoFocus || e.focus)
    function i() {
      if (r.value) {
        var e = t.value
        if (e && 'plus' in window) {
          var a = Cg - (Date.now() - kg)
          a > 0
            ? setTimeout(i, a)
            : 'HarmonyOS' === plus.os.name
              ? n.userAction
                ? e.focus()
                : (plus.key.showSoftKeybord(),
                  setTimeout(() => {
                    e.focus()
                  }, 100))
              : (e.focus(), n.userAction || plus.key.showSoftKeybord())
        } else setTimeout(i, 100)
      }
    }
    jo(
      () => e.focus,
      (e) => {
        var n
        e ? i() : (n = t.value) && n.blur()
      },
    ),
      is(() => {
        ;(kg = kg || Date.now()), r.value && yo(i)
      })
  }
  function zg(e, t, n, r) {
    bi(Bu(), 'getSelectedTextRange', Sg)
    var {
        fieldRef: i,
        state: a,
        trigger: o,
      } = (function (e, t, n) {
        var r,
          i = eo(null),
          a = Jp(t, n),
          o = ql(() => {
            var t = Number(e.selectionStart)
            return isNaN(t) ? -1 : t
          }),
          s = ql(() => {
            var t = Number(e.selectionEnd)
            return isNaN(t) ? -1 : t
          }),
          l = ql(() => {
            var t = Number(e.cursor)
            return isNaN(t) ? -1 : t
          }),
          u = ql(() => {
            var t = Number(e.maxlength)
            return isNaN(t) ? 140 : t
          }),
          c = Fa({
            value: (r = Tg(e.modelValue, e.type) || Tg(e.value, e.type)),
            valueOrigin: r,
            maxlength: u,
            focus: e.focus,
            composing: !1,
            selectionStart: o,
            selectionEnd: s,
            cursor: l,
          })
        return (
          jo(
            () => c.focus,
            (e) => n('update:focus', e),
          ),
          jo(
            () => c.maxlength,
            (e) => (c.value = c.value.slice(0, e)),
            { immediate: !1 },
          ),
          { fieldRef: i, state: c, trigger: a }
        )
      })(e, t, n),
      { triggerInput: s } = Og(e, a, n, o)
    Lg(e, i), Iv(e, i, o)
    var { state: l } = xg()
    return (
      (function (e, t) {
        var n = Ps(tv, !1)
        if (n) {
          var r = El(),
            i = {
              submit() {
                var n = r.proxy
                return [n[e], pn(t) ? n[t] : t.value]
              },
              reset() {
                pn(t) ? (r.proxy[t] = '') : (t.value = '')
              },
            }
          n.addField(i),
            ss(() => {
              n.removeField(i)
            })
        }
      })('name', a),
      (function (e, t, n, r, i, a) {
        function o() {
          var n = e.value
          n &&
            t.focus &&
            t.selectionStart > -1 &&
            t.selectionEnd > -1 &&
            'number' !== n.type &&
            ((n.selectionStart = t.selectionStart), (n.selectionEnd = t.selectionEnd))
        }
        function s() {
          var n = e.value
          n &&
            t.focus &&
            t.selectionStart < 0 &&
            t.selectionEnd < 0 &&
            t.cursor > -1 &&
            'number' !== n.type &&
            (n.selectionEnd = n.selectionStart = t.cursor)
        }
        function l(e) {
          return 'number' === e.type ? null : e.selectionEnd
        }
        jo([() => t.selectionStart, () => t.selectionEnd], o),
          jo(() => t.cursor, s),
          jo(
            () => e.value,
            function () {
              var u = e.value
              if (u) {
                var c = function (e, r) {
                  e.stopPropagation(),
                    (fn(a) && !1 === a(e, t)) ||
                      ((t.value = u.value),
                      (t.composing && n.ignoreCompositionEvent) ||
                        i(e, { value: u.value, cursor: l(u) }, r))
                }
                u.addEventListener('change', (e) => e.stopPropagation()),
                  u.addEventListener('focus', function (e) {
                    ;(t.focus = !0), r('focus', e, { value: t.value }), o(), s()
                  }),
                  u.addEventListener('blur', function (e) {
                    t.composing && ((t.composing = !1), c(e, !0)),
                      (t.focus = !1),
                      r('blur', e, { value: t.value, cursor: l(e.target) })
                  }),
                  u.addEventListener('input', c),
                  u.addEventListener('compositionstart', (e) => {
                    e.stopPropagation(), (t.composing = !0), d(e)
                  }),
                  u.addEventListener('compositionend', (e) => {
                    e.stopPropagation(), t.composing && ((t.composing = !1), c(e)), d(e)
                  }),
                  u.addEventListener('compositionupdate', d)
              }
              function d(e) {
                n.ignoreCompositionEvent || r(e.type, e, { value: e.data })
              }
            },
          )
      })(i, a, e, o, s, r),
      {
        fieldRef: i,
        state: a,
        scopedAttrsState: l,
        fixDisabledColor:
          0 === String(navigator.vendor).indexOf('Apple') &&
          CSS.supports('image-orientation:from-image'),
        trigger: o,
      }
    )
  }
  var Ng = on({}, Mg, {
      placeholderClass: { type: String, default: 'input-placeholder' },
      textContentType: { type: String, default: '' },
    }),
    Ig = dr(() => {
      var e = plus.os.version
      return 'iOS' === plus.os.name && !!e && parseInt(e) >= 16 && parseFloat(e) < 17.2
    })
  function Pg(e, t, n, r, i) {
    if (t.value)
      if ('.' === e.data) {
        if ('.' === t.value.slice(-1))
          return (n.value = r.value = t.value = t.value.slice(0, -1)), !1
        if (t.value && !t.value.includes('.'))
          return (
            (t.value += '.'),
            i &&
              ((i.fn = () => {
                ;(n.value = r.value = t.value = t.value.slice(0, -1)),
                  r.removeEventListener('blur', i.fn)
              }),
              r.addEventListener('blur', i.fn)),
            !1
          )
      } else if ('deleteContentBackward' === e.inputType && Ig() && '.' === t.value.slice(-2, -1))
        return (t.value = n.value = r.value = t.value.slice(0, -2)), !0
  }
  const Dg = Zp({
    name: 'Input',
    props: Ng,
    emits: ['confirm', ...Eg],
    setup(e, t) {
      var { emit: n, expose: r } = t,
        i = ['text', 'number', 'idcard', 'digit', 'password', 'tel'],
        a = ['off', 'one-time-code'],
        o = ql(() => {
          var t = ''
          switch (e.type) {
            case 'text':
              ;(t = 'text'), 'search' === e.confirmType && (t = 'search')
              break
            case 'idcard':
              t = 'text'
              break
            case 'digit':
              t = 'number'
              break
            default:
              t = i.includes(e.type) ? e.type : 'text'
          }
          return e.password ? 'password' : t
        }),
        s = ql(() => {
          var t = a.indexOf(e.textContentType),
            n = a.indexOf(Mn(e.textContentType))
          return a[-1 !== t ? t : -1 !== n ? n : 0]
        }),
        l = (function (e, t) {
          if ('number' === t.value) {
            var n = void 0 === e.modelValue ? e.value : e.modelValue,
              r = eo(null != n ? n.toLocaleString() : '')
            return (
              jo(
                () => e.modelValue,
                (e) => {
                  r.value = null != e ? e.toLocaleString() : ''
                },
              ),
              jo(
                () => e.value,
                (e) => {
                  r.value = null != e ? e.toLocaleString() : ''
                },
              ),
              r
            )
          }
          return eo('')
        })(e, o),
        u = { fn: null },
        c = eo(null),
        {
          fieldRef: d,
          state: h,
          scopedAttrsState: f,
          fixDisabledColor: p,
          trigger: v,
        } = zg(e, c, n, (t, n) => {
          var r = t.target
          if ('number' === o.value) {
            if (
              (u.fn && (r.removeEventListener('blur', u.fn), (u.fn = null)),
              r.validity && !r.validity.valid)
            ) {
              if (
                ((!l.value || !r.value) && '-' === t.data) ||
                ('-' === l.value[0] && 'deleteContentBackward' === t.inputType)
              )
                return (
                  (l.value = '-'),
                  (n.value = ''),
                  (u.fn = () => {
                    l.value = r.value = ''
                  }),
                  r.addEventListener('blur', u.fn),
                  !1
                )
              var i = Pg(t, l, n, r, u)
              return 'boolean' == typeof i
                ? i
                : ((l.value = n.value = r.value = '-' === l.value ? '' : l.value), !1)
            }
            var a = Pg(t, l, n, r, u)
            if ('boolean' == typeof a) return a
            l.value = r.value
            var s = n.maxlength
            if (s > 0 && r.value.length > s)
              return (
                (r.value = r.value.slice(0, s)),
                (n.value = r.value),
                (void 0 !== e.modelValue && null !== e.modelValue
                  ? e.modelValue.toString()
                  : '') !== r.value
              )
          }
        })
      jo(
        () => h.value,
        (t) => {
          'number' !== e.type || ('-' === l.value && '' === t) || (l.value = t.toString())
        },
      )
      var g = ['number', 'digit'],
        m = ql(() => (g.includes(e.type) ? e.step : ''))
      function _(t) {
        if ('Enter' === t.key) {
          var n = t.target
          t.stopPropagation(), v('confirm', t, { value: n.value }), !e.confirmHold && n.blur()
        }
      }
      return (
        r({
          $triggerInput: (e) => {
            n('update:modelValue', e.value), n('update:value', e.value), (h.value = e.value)
          },
        }),
        () => {
          var t =
            e.disabled && p
              ? gl(
                  'input',
                  {
                    key: 'disabled-input',
                    ref: d,
                    value: h.value,
                    tabindex: '-1',
                    readonly: !!e.disabled,
                    type: o.value,
                    maxlength: h.maxlength,
                    step: m.value,
                    class: 'uni-input-input',
                    style: e.cursorColor ? { caretColor: e.cursorColor } : {},
                    onFocus: (e) => e.target.blur(),
                  },
                  null,
                  44,
                  ['value', 'readonly', 'type', 'maxlength', 'step', 'onFocus'],
                )
              : gl(
                  'input',
                  {
                    key: 'input',
                    ref: d,
                    value: h.value,
                    onInput: (e) => {
                      h.value = e.target.value.toString()
                    },
                    disabled: !!e.disabled,
                    type: o.value,
                    maxlength: h.maxlength,
                    step: m.value,
                    enterkeyhint: e.confirmType,
                    pattern: 'number' === e.type ? '[0-9]*' : void 0,
                    class: 'uni-input-input',
                    style: e.cursorColor ? { caretColor: e.cursorColor } : {},
                    autocomplete: s.value,
                    onKeyup: _,
                    inputmode: e.inputmode,
                  },
                  null,
                  44,
                  [
                    'value',
                    'onInput',
                    'disabled',
                    'type',
                    'maxlength',
                    'step',
                    'enterkeyhint',
                    'pattern',
                    'autocomplete',
                    'onKeyup',
                    'inputmode',
                  ],
                )
          return gl(
            'uni-input',
            { ref: c },
            [
              gl('div', { class: 'uni-input-wrapper' }, [
                Uo(
                  gl(
                    'div',
                    xl(f.attrs, {
                      style: e.placeholderStyle,
                      class: ['uni-input-placeholder', e.placeholderClass],
                    }),
                    [e.placeholder],
                    16,
                  ),
                  [[Zl, !(h.value.length || '-' === l.value || l.value.includes('.'))]],
                ),
                'search' === e.confirmType
                  ? gl(
                      'form',
                      { action: '', onSubmit: (e) => e.preventDefault(), class: 'uni-input-form' },
                      [t],
                      40,
                      ['onSubmit'],
                    )
                  : t,
              ]),
            ],
            512,
          )
        }
      )
    },
  })
  var Bg,
    Rg,
    Fg = ['class', 'style'],
    qg = /^on[A-Z]+/,
    jg = function () {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { excludeListeners: n = !1, excludeKeys: r = [] } = t,
        i = El(),
        a = to({}),
        o = to({}),
        s = to({}),
        l = r.concat(Fg)
      return (
        (i.attrs = Fa(i.attrs)),
        Vo(
          () => {
            var e,
              t = ((e = i.attrs), Object.keys(e).map((t) => [t, e[t]])).reduce(
                (e, t) => {
                  var [r, i] = t
                  return (
                    l.includes(r)
                      ? (e.exclude[r] = i)
                      : qg.test(r)
                        ? (n || (e.attrs[r] = i), (e.listeners[r] = i))
                        : (e.attrs[r] = i),
                    e
                  )
                },
                { exclude: {}, attrs: {}, listeners: {} },
              )
            ;(a.value = t.attrs), (o.value = t.listeners), (s.value = t.exclude)
          },
          null,
          e,
        ),
        { $attrs: a, $listeners: o, $excludeAttrs: s }
      )
    }
  function Vg() {
    wr(() => {
      Bg || (Bg = plus.webview.currentWebview()),
        Rg || (Rg = (Bg.getStyle() || {}).pullToRefresh || {})
    })
  }
  function $g(e) {
    var { disable: t } = e
    Rg && Rg.support && Bg.setPullToRefresh(Object.assign({}, Rg, { support: !t }))
  }
  function Hg(e) {
    El().rebuild = e
  }
  const Wg = Zp({
    inheritAttrs: !1,
    name: 'MovableArea',
    props: { scaleArea: { type: Boolean, default: !1 } },
    setup(e, t) {
      var { slots: n } = t,
        r = eo(null),
        i = eo(!1),
        { setContexts: a, events: o } = (function (e, t) {
          var n = eo(0),
            r = eo(0),
            i = Fa({ x: null, y: null }),
            a = eo(null),
            o = null,
            s = []
          function l(t) {
            t &&
              1 !== t &&
              (e.scaleArea
                ? s.forEach(function (e) {
                    e._setScale(t)
                  })
                : o && o._setScale(t))
          }
          function u(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
              r = t.value
            function i(e) {
              for (var t = 0; t < n.length; t++) {
                var a = n[t]
                if (e === a.rootRef.value) return a
              }
              return e === r || e === document.body || e === document ? null : i(e.parentNode)
            }
            return i(e)
          }
          var c = Kp((t) => {
              $g({ disable: !0 })
              var n = t.touches
              if (n && n.length > 1) {
                var r = { x: n[1].pageX - n[0].pageX, y: n[1].pageY - n[0].pageY }
                if (((a.value = Ug(r)), (i.x = r.x), (i.y = r.y), !e.scaleArea)) {
                  var s = u(n[0].target),
                    l = u(n[1].target)
                  o = s && s === l ? s : null
                }
              }
            }),
            d = Kp((e) => {
              var t = e.touches
              if (t && t.length > 1) {
                e.preventDefault()
                var n = { x: t[1].pageX - t[0].pageX, y: t[1].pageY - t[0].pageY }
                if (null !== i.x && a.value && a.value > 0) l(Ug(n) / a.value)
                ;(i.x = n.x), (i.y = n.y)
              }
            }),
            h = Kp((t) => {
              $g({ disable: !1 })
              var n = t.touches
              ;(n && n.length) ||
                (t.changedTouches &&
                  ((i.x = 0),
                  (i.y = 0),
                  (a.value = null),
                  e.scaleArea
                    ? s.forEach(function (e) {
                        e._endScale()
                      })
                    : o && o._endScale()))
            })
          function f() {
            p(),
              s.forEach(function (e, t) {
                e.setParent()
              })
          }
          function p() {
            var e = window.getComputedStyle(t.value),
              i = t.value.getBoundingClientRect()
            ;(n.value =
              i.width -
              ['Left', 'Right'].reduce(function (t, n) {
                var r = 'padding' + n
                return t + parseFloat(e['border' + n + 'Width']) + parseFloat(e[r])
              }, 0)),
              (r.value =
                i.height -
                ['Top', 'Bottom'].reduce(function (t, n) {
                  var r = 'padding' + n
                  return t + parseFloat(e['border' + n + 'Width']) + parseFloat(e[r])
                }, 0))
          }
          return (
            Is('movableAreaWidth', n),
            Is('movableAreaHeight', r),
            {
              setContexts(e) {
                s = e
              },
              events: { _onTouchstart: c, _onTouchmove: d, _onTouchend: h, _resize: f },
            }
          )
        })(e, r),
        { $listeners: s, $attrs: l, $excludeAttrs: u } = jg(),
        c = s.value
      ;['onTouchstart', 'onTouchmove', 'onTouchend'].forEach((e) => {
        var t = c[e],
          n = o['_'.concat(e)]
        c[e] = t ? [].concat(t, n) : n
      }),
        is(() => {
          o._resize(), Vg(), (i.value = !0)
        })
      var d = [],
        h = []
      function f() {
        for (
          var e = [],
            t = function (t) {
              var n = d[t]
              n instanceof Element || (n = n.el)
              var r = h.find((e) => n === e.rootRef.value)
              r && e.push(Ya(r))
            },
            n = 0;
          n < d.length;
          n++
        )
          t(n)
        a(e)
      }
      Hg(() => {
        ;(d = r.value.children), f()
      })
      return (
        Is('_isMounted', i),
        Is('movableAreaRootRef', r),
        Is('addMovableViewContext', (e) => {
          h.push(e), f()
        }),
        Is('removeMovableViewContext', (e) => {
          var t = h.indexOf(e)
          t >= 0 && (h.splice(t, 1), f())
        }),
        () => (
          n.default && n.default(),
          gl(
            'uni-movable-area',
            xl({ ref: r }, l.value, u.value, c),
            [gl(cv, { onResize: o._resize }, null, 8, ['onResize']), d],
            16,
          )
        )
      )
    },
  })
  function Ug(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y)
  }
  var Yg,
    Xg,
    Zg = function (e, t, n, r) {
      e.addEventListener(
        t,
        (e) => {
          fn(n) &&
            !1 === n(e) &&
            ((void 0 === e.cancelable || e.cancelable) && e.preventDefault(), e.stopPropagation())
        },
        { passive: !1 },
      )
    }
  function Gg(e, t, n) {
    ss(() => {
      document.removeEventListener('mousemove', Yg), document.removeEventListener('mouseup', Xg)
    })
    var r,
      i,
      a = 0,
      o = 0,
      s = 0,
      l = 0,
      u = function (e, n, r, i) {
        if (
          !1 ===
          t({
            cancelable: e.cancelable,
            target: e.target,
            currentTarget: e.currentTarget,
            preventDefault: e.preventDefault.bind(e),
            stopPropagation: e.stopPropagation.bind(e),
            touches: e.touches,
            changedTouches: e.changedTouches,
            detail: {
              state: n,
              x: r,
              y: i,
              dx: r - a,
              dy: i - o,
              ddx: r - s,
              ddy: i - l,
              timeStamp: e.timeStamp,
            },
          })
        )
          return !1
      },
      c = null
    Zg(e, 'touchstart', function (e) {
      if (((r = !0), 1 === e.touches.length && !c))
        return (
          (c = e), (a = s = e.touches[0].pageX), (o = l = e.touches[0].pageY), u(e, 'start', a, o)
        )
    }),
      Zg(e, 'mousedown', function (e) {
        if (((i = !0), !r && !c))
          return (c = e), (a = s = e.pageX), (o = l = e.pageY), u(e, 'start', a, o)
      }),
      Zg(e, 'touchmove', function (e) {
        if (1 === e.touches.length && c) {
          var t = u(e, 'move', e.touches[0].pageX, e.touches[0].pageY)
          return (s = e.touches[0].pageX), (l = e.touches[0].pageY), t
        }
      })
    var d = (Yg = function (e) {
      if (!r && i && c) {
        var t = u(e, 'move', e.pageX, e.pageY)
        return (s = e.pageX), (l = e.pageY), t
      }
    })
    document.addEventListener('mousemove', d),
      Zg(e, 'touchend', function (e) {
        if (0 === e.touches.length && c)
          return (
            (r = !1), (c = null), u(e, 'end', e.changedTouches[0].pageX, e.changedTouches[0].pageY)
          )
      })
    var h = (Xg = function (e) {
      if (((i = !1), !r && c)) return (c = null), u(e, 'end', e.pageX, e.pageY)
    })
    document.addEventListener('mouseup', h),
      Zg(e, 'touchcancel', function (e) {
        if (c) {
          r = !1
          var t = c
          return (c = null), u(e, n ? 'cancel' : 'end', t.touches[0].pageX, t.touches[0].pageY)
        }
      })
  }
  function Kg(e, t, n) {
    return e > t - n && e < t + n
  }
  function Jg(e, t) {
    return Kg(e, 0, t)
  }
  function Qg() {}
  function em(e, t) {
    ;(this._m = e), (this._f = 1e3 * t), (this._startTime = 0), (this._v = 0)
  }
  function tm(e, t, n) {
    ;(this._m = e),
      (this._k = t),
      (this._c = n),
      (this._solution = null),
      (this._endPosition = 0),
      (this._startTime = 0)
  }
  function nm(e, t, n) {
    ;(this._springX = new tm(e, t, n)),
      (this._springY = new tm(e, t, n)),
      (this._springScale = new tm(e, t, n)),
      (this._startTime = 0)
  }
  function rm(e, t) {
    return +((1e3 * e - 1e3 * t) / 1e3).toFixed(1)
  }
  ;(Qg.prototype.x = function (e) {
    return Math.sqrt(e)
  }),
    (em.prototype.setV = function (e, t) {
      var n = Math.pow(Math.pow(e, 2) + Math.pow(t, 2), 0.5)
      ;(this._x_v = e),
        (this._y_v = t),
        (this._x_a = (-this._f * this._x_v) / n),
        (this._y_a = (-this._f * this._y_v) / n),
        (this._t = Math.abs(e / this._x_a) || Math.abs(t / this._y_a)),
        (this._lastDt = null),
        (this._startTime = new Date().getTime())
    }),
    (em.prototype.setS = function (e, t) {
      ;(this._x_s = e), (this._y_s = t)
    }),
    (em.prototype.s = function (e) {
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
        e > this._t && ((e = this._t), (this._lastDt = e))
      var t = this._x_v * e + 0.5 * this._x_a * Math.pow(e, 2) + this._x_s,
        n = this._y_v * e + 0.5 * this._y_a * Math.pow(e, 2) + this._y_s
      return (
        ((this._x_a > 0 && t < this._endPositionX) || (this._x_a < 0 && t > this._endPositionX)) &&
          (t = this._endPositionX),
        ((this._y_a > 0 && n < this._endPositionY) || (this._y_a < 0 && n > this._endPositionY)) &&
          (n = this._endPositionY),
        { x: t, y: n }
      )
    }),
    (em.prototype.ds = function (e) {
      return (
        void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
        e > this._t && (e = this._t),
        { dx: this._x_v + this._x_a * e, dy: this._y_v + this._y_a * e }
      )
    }),
    (em.prototype.delta = function () {
      return {
        x: (-1.5 * Math.pow(this._x_v, 2)) / this._x_a || 0,
        y: (-1.5 * Math.pow(this._y_v, 2)) / this._y_a || 0,
      }
    }),
    (em.prototype.dt = function () {
      return -this._x_v / this._x_a
    }),
    (em.prototype.done = function () {
      var e =
        Kg(this.s().x, this._endPositionX) ||
        Kg(this.s().y, this._endPositionY) ||
        this._lastDt === this._t
      return (this._lastDt = null), e
    }),
    (em.prototype.setEnd = function (e, t) {
      ;(this._endPositionX = e), (this._endPositionY = t)
    }),
    (em.prototype.reconfigure = function (e, t) {
      ;(this._m = e), (this._f = 1e3 * t)
    }),
    (tm.prototype._solve = function (e, t) {
      var n = this._c,
        r = this._m,
        i = this._k,
        a = n * n - 4 * r * i
      if (0 === a) {
        var o = -n / (2 * r),
          s = e,
          l = t / (o * e)
        return {
          x: function (e) {
            return (s + l * e) * Math.pow(Math.E, o * e)
          },
          dx: function (e) {
            var t = Math.pow(Math.E, o * e)
            return o * (s + l * e) * t + l * t
          },
        }
      }
      if (a > 0) {
        var u = (-n - Math.sqrt(a)) / (2 * r),
          c = (-n + Math.sqrt(a)) / (2 * r),
          d = (t - u * e) / (c - u),
          h = e - d
        return {
          x: function (e) {
            var t, n
            return (
              e === this._t && ((t = this._powER1T), (n = this._powER2T)),
              (this._t = e),
              t || (t = this._powER1T = Math.pow(Math.E, u * e)),
              n || (n = this._powER2T = Math.pow(Math.E, c * e)),
              h * t + d * n
            )
          },
          dx: function (e) {
            var t, n
            return (
              e === this._t && ((t = this._powER1T), (n = this._powER2T)),
              (this._t = e),
              t || (t = this._powER1T = Math.pow(Math.E, u * e)),
              n || (n = this._powER2T = Math.pow(Math.E, c * e)),
              h * u * t + d * c * n
            )
          },
        }
      }
      var f = Math.sqrt(4 * r * i - n * n) / (2 * r),
        p = (-n / 2) * r,
        v = e,
        g = (t - p * e) / f
      return {
        x: function (e) {
          return Math.pow(Math.E, p * e) * (v * Math.cos(f * e) + g * Math.sin(f * e))
        },
        dx: function (e) {
          var t = Math.pow(Math.E, p * e),
            n = Math.cos(f * e),
            r = Math.sin(f * e)
          return t * (g * f * n - v * f * r) + p * t * (g * r + v * n)
        },
      }
    }),
    (tm.prototype.x = function (e) {
      return (
        void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
        this._solution ? this._endPosition + this._solution.x(e) : 0
      )
    }),
    (tm.prototype.dx = function (e) {
      return (
        void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
        this._solution ? this._solution.dx(e) : 0
      )
    }),
    (tm.prototype.setEnd = function (e, t, n) {
      if ((n || (n = new Date().getTime()), e !== this._endPosition || !Jg(t, 0.1))) {
        t = t || 0
        var r = this._endPosition
        this._solution &&
          (Jg(t, 0.1) && (t = this._solution.dx((n - this._startTime) / 1e3)),
          (r = this._solution.x((n - this._startTime) / 1e3)),
          Jg(t, 0.1) && (t = 0),
          Jg(r, 0.1) && (r = 0),
          (r += this._endPosition)),
          (this._solution && Jg(r - e, 0.1) && Jg(t, 0.1)) ||
            ((this._endPosition = e),
            (this._solution = this._solve(r - this._endPosition, t)),
            (this._startTime = n))
      }
    }),
    (tm.prototype.snap = function (e) {
      ;(this._startTime = new Date().getTime()),
        (this._endPosition = e),
        (this._solution = {
          x: function () {
            return 0
          },
          dx: function () {
            return 0
          },
        })
    }),
    (tm.prototype.done = function (e) {
      return (
        e || (e = new Date().getTime()), Kg(this.x(), this._endPosition, 0.1) && Jg(this.dx(), 0.1)
      )
    }),
    (tm.prototype.reconfigure = function (e, t, n) {
      ;(this._m = e),
        (this._k = t),
        (this._c = n),
        this.done() ||
          ((this._solution = this._solve(this.x() - this._endPosition, this.dx())),
          (this._startTime = new Date().getTime()))
    }),
    (tm.prototype.springConstant = function () {
      return this._k
    }),
    (tm.prototype.damping = function () {
      return this._c
    }),
    (tm.prototype.configuration = function () {
      return [
        {
          label: 'Spring Constant',
          read: this.springConstant.bind(this),
          write: function (e, t) {
            e.reconfigure(1, t, e.damping())
          }.bind(this, this),
          min: 100,
          max: 1e3,
        },
        {
          label: 'Damping',
          read: this.damping.bind(this),
          write: function (e, t) {
            e.reconfigure(1, e.springConstant(), t)
          }.bind(this, this),
          min: 1,
          max: 500,
        },
      ]
    }),
    (nm.prototype.setEnd = function (e, t, n, r) {
      var i = new Date().getTime()
      this._springX.setEnd(e, r, i),
        this._springY.setEnd(t, r, i),
        this._springScale.setEnd(n, r, i),
        (this._startTime = i)
    }),
    (nm.prototype.x = function () {
      var e = (new Date().getTime() - this._startTime) / 1e3
      return { x: this._springX.x(e), y: this._springY.x(e), scale: this._springScale.x(e) }
    }),
    (nm.prototype.done = function () {
      var e = new Date().getTime()
      return this._springX.done(e) && this._springY.done(e) && this._springScale.done(e)
    }),
    (nm.prototype.reconfigure = function (e, t, n) {
      this._springX.reconfigure(e, t, n),
        this._springY.reconfigure(e, t, n),
        this._springScale.reconfigure(e, t, n)
    })
  const im = Zp({
    name: 'MovableView',
    props: {
      direction: { type: String, default: 'none' },
      inertia: { type: [Boolean, String], default: !1 },
      outOfBounds: { type: [Boolean, String], default: !1 },
      x: { type: [Number, String], default: 0 },
      y: { type: [Number, String], default: 0 },
      damping: { type: [Number, String], default: 20 },
      friction: { type: [Number, String], default: 2 },
      disabled: { type: [Boolean, String], default: !1 },
      scale: { type: [Boolean, String], default: !1 },
      scaleMin: { type: [Number, String], default: 0.1 },
      scaleMax: { type: [Number, String], default: 10 },
      scaleValue: { type: [Number, String], default: 1 },
      animation: { type: [Boolean, String], default: !0 },
    },
    emits: ['change', 'scale'],
    setup(e, t) {
      var { slots: n, emit: r } = t,
        i = eo(null),
        a = Jp(i, r),
        { setParent: o } = (function (e, t, n) {
          var r,
            i,
            a = Ps('_isMounted', eo(!1)),
            o = Ps('addMovableViewContext', () => {}),
            s = Ps('removeMovableViewContext', () => {}),
            l = eo(1),
            u = eo(1),
            c = eo(!1),
            d = eo(0),
            h = eo(0),
            f = null,
            p = null,
            v = !1,
            g = null,
            m = null,
            _ = new Qg(),
            y = new Qg(),
            b = { historyX: [0, 0], historyY: [0, 0], historyT: [0, 0] },
            w = ql(() => {
              var t = Number(e.friction)
              return isNaN(t) || t <= 0 ? 2 : t
            }),
            x = new em(1, w.value)
          jo(
            () => e.disabled,
            () => {
              W()
            },
          )
          var {
            _updateOldScale: S,
            _endScale: k,
            _setScale: C,
            scaleValueSync: T,
            _updateBoundary: A,
            _updateOffset: M,
            _updateWH: E,
            _scaleOffset: O,
            minX: L,
            minY: z,
            maxX: N,
            maxY: I,
            FAandSFACancel: P,
            _getLimitXY: D,
            _setTransform: B,
            _revise: R,
            dampingNumber: F,
            xMove: q,
            yMove: j,
            xSync: V,
            ySync: $,
            _STD: H,
          } = (function (e, t, n, r, i, a, o, s, l, u) {
            var c = ql(() => {
                var t = Number(e.scaleMin)
                return isNaN(t) ? 0.1 : t
              }),
              d = ql(() => {
                var t = Number(e.scaleMax)
                return isNaN(t) ? 10 : t
              }),
              h = eo(Number(e.scaleValue) || 1)
            jo(h, (e) => {
              B(e)
            }),
              jo(c, () => {
                D()
              }),
              jo(d, () => {
                D()
              }),
              jo(
                () => e.scaleValue,
                (e) => {
                  h.value = Number(e) || 0
                },
              )
            var {
                _updateBoundary: f,
                _updateOffset: p,
                _updateWH: v,
                _scaleOffset: g,
                minX: m,
                minY: _,
                maxX: y,
                maxY: b,
              } = (function (e, t, n) {
                var r = Ps('movableAreaWidth', eo(0)),
                  i = Ps('movableAreaHeight', eo(0)),
                  a = Ps('movableAreaRootRef'),
                  o = { x: 0, y: 0 },
                  s = { x: 0, y: 0 },
                  l = eo(0),
                  u = eo(0),
                  c = eo(0),
                  d = eo(0),
                  h = eo(0),
                  f = eo(0)
                function p() {
                  var e = 0 - o.x + s.x,
                    t = r.value - l.value - o.x - s.x
                  ;(c.value = Math.min(e, t)), (h.value = Math.max(e, t))
                  var n = 0 - o.y + s.y,
                    a = i.value - u.value - o.y - s.y
                  ;(d.value = Math.min(n, a)), (f.value = Math.max(n, a))
                }
                function v() {
                  ;(o.x = sm(e.value, a.value)), (o.y = lm(e.value, a.value))
                }
                function g(r) {
                  ;(r = r || t.value), (r = n(r))
                  var i = e.value.getBoundingClientRect()
                  ;(u.value = i.height / t.value), (l.value = i.width / t.value)
                  var a = u.value * r,
                    o = l.value * r
                  ;(s.x = (o - l.value) / 2), (s.y = (a - u.value) / 2)
                }
                return {
                  _updateBoundary: p,
                  _updateOffset: v,
                  _updateWH: g,
                  _scaleOffset: s,
                  minX: c,
                  minY: d,
                  maxX: h,
                  maxY: f,
                }
              })(t, r, P),
              {
                FAandSFACancel: w,
                _getLimitXY: x,
                _animationTo: S,
                _setTransform: k,
                _revise: C,
                dampingNumber: T,
                xMove: A,
                yMove: M,
                xSync: E,
                ySync: O,
                _STD: L,
              } = (function (e, t, n, r, i, a, o, s, l, u, c, d, h, f) {
                var p = ql(() => {
                    var e = Number(t.damping)
                    return isNaN(e) ? 20 : e
                  }),
                  v = ql(() => 'all' === t.direction || 'horizontal' === t.direction),
                  g = ql(() => 'all' === t.direction || 'vertical' === t.direction),
                  m = eo(cm(t.x)),
                  _ = eo(cm(t.y))
                jo(
                  () => t.x,
                  (e) => {
                    m.value = cm(e)
                  },
                ),
                  jo(
                    () => t.y,
                    (e) => {
                      _.value = cm(e)
                    },
                  ),
                  jo(m, (e) => {
                    C(e)
                  }),
                  jo(_, (e) => {
                    T(e)
                  })
                var y = new nm(1, (9 * Math.pow(p.value, 2)) / 40, p.value)
                function b(e, t) {
                  var n = !1
                  return (
                    e > i.value
                      ? ((e = i.value), (n = !0))
                      : e < o.value && ((e = o.value), (n = !0)),
                    t > a.value
                      ? ((t = a.value), (n = !0))
                      : t < s.value && ((t = s.value), (n = !0)),
                    { x: e, y: t, outOfBounds: n }
                  )
                }
                function w() {
                  d && d.cancel(), c && c.cancel()
                }
                function x(e, n, i, a, o, s) {
                  w(), v.value || (e = l.value), g.value || (n = u.value), t.scale || (i = r.value)
                  var d = b(e, n)
                  ;(e = d.x),
                    (n = d.y),
                    t.animation
                      ? ((y._springX._solution = null),
                        (y._springY._solution = null),
                        (y._springScale._solution = null),
                        (y._springX._endPosition = l.value),
                        (y._springY._endPosition = u.value),
                        (y._springScale._endPosition = r.value),
                        y.setEnd(e, n, i, 1),
                        (c = um(
                          y,
                          function () {
                            var e = y.x()
                            S(e.x, e.y, e.scale, a, o, s)
                          },
                          function () {
                            c.cancel()
                          },
                        )))
                      : S(e, n, i, a, o, s)
                }
                function S(i, a, o) {
                  var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
                    c = arguments.length > 4 ? arguments[4] : void 0,
                    d = arguments.length > 5 ? arguments[5] : void 0
                  ;(null !== i && 'NaN' !== i.toString() && 'number' == typeof i) ||
                    (i = l.value || 0),
                    (null !== a && 'NaN' !== a.toString() && 'number' == typeof a) ||
                      (a = u.value || 0),
                    (i = Number(i.toFixed(1))),
                    (a = Number(a.toFixed(1))),
                    (o = Number(o.toFixed(1))),
                    (l.value === i && u.value === a) ||
                      c ||
                      f('change', {}, { x: rm(i, n.x), y: rm(a, n.y), source: s }),
                    t.scale || (o = r.value),
                    (o = +(o = h(o)).toFixed(3)),
                    d && o !== r.value && f('scale', {}, { x: i, y: a, scale: o })
                  var p =
                    'translateX(' +
                    i +
                    'px) translateY(' +
                    a +
                    'px) translateZ(0px) scale(' +
                    o +
                    ')'
                  e.value &&
                    ((e.value.style.transform = p),
                    (e.value.style.webkitTransform = p),
                    (l.value = i),
                    (u.value = a),
                    (r.value = o))
                }
                function k(e) {
                  var t = b(l.value, u.value),
                    n = t.x,
                    i = t.y,
                    a = t.outOfBounds
                  return a && x(n, i, r.value, e), a
                }
                function C(e) {
                  if (v.value) {
                    if (e + n.x === l.value) return l
                    c && c.cancel(), x(e + n.x, _.value + n.y, r.value)
                  }
                  return e
                }
                function T(e) {
                  if (g.value) {
                    if (e + n.y === u.value) return u
                    c && c.cancel(), x(m.value + n.x, e + n.y, r.value)
                  }
                  return e
                }
                return {
                  FAandSFACancel: w,
                  _getLimitXY: b,
                  _animationTo: x,
                  _setTransform: S,
                  _revise: k,
                  dampingNumber: p,
                  xMove: v,
                  yMove: g,
                  xSync: m,
                  ySync: _,
                  _STD: y,
                }
              })(t, e, g, r, y, b, m, _, o, s, l, u, P, n)
            function z(t, n) {
              if (e.scale) {
                ;(t = P(t)), v(t), f()
                var r = x(o.value, s.value),
                  i = r.x,
                  a = r.y
                n
                  ? S(i, a, t, '', !0, !0)
                  : om(function () {
                      k(i, a, t, '', !0, !0)
                    })
              }
            }
            function N() {
              a.value = !0
            }
            function I(e) {
              i.value = e
            }
            function P(e) {
              return (e = Math.max(0.1, c.value, e)), (e = Math.min(10, d.value, e))
            }
            function D() {
              if (!e.scale) return !1
              z(r.value, !0), I(r.value)
            }
            function B(t) {
              return !!e.scale && (z((t = P(t)), !0), I(t), t)
            }
            function R() {
              ;(a.value = !1), I(r.value)
            }
            function F(e) {
              e && ((e = i.value * e), N(), z(e))
            }
            return {
              _updateOldScale: I,
              _endScale: R,
              _setScale: F,
              scaleValueSync: h,
              _updateBoundary: f,
              _updateOffset: p,
              _updateWH: v,
              _scaleOffset: g,
              minX: m,
              minY: _,
              maxX: y,
              maxY: b,
              FAandSFACancel: w,
              _getLimitXY: x,
              _animationTo: S,
              _setTransform: k,
              _revise: C,
              dampingNumber: T,
              xMove: A,
              yMove: M,
              xSync: E,
              ySync: O,
              _STD: L,
            }
          })(e, n, t, l, u, c, d, h, f, p)
          function W() {
            c.value ||
              e.disabled ||
              ($g({ disable: !0 }),
              P(),
              (b.historyX = [0, 0]),
              (b.historyY = [0, 0]),
              (b.historyT = [0, 0]),
              q.value && (r = d.value),
              j.value && (i = h.value),
              (n.value.style.willChange = 'transform'),
              (g = null),
              (m = null),
              (v = !0))
          }
          function U(t) {
            if (!c.value && !e.disabled && v) {
              var n = d.value,
                a = h.value
              if (
                (null === m &&
                  (m = Math.abs(t.detail.dx / t.detail.dy) > 1 ? 'htouchmove' : 'vtouchmove'),
                q.value &&
                  ((n = t.detail.dx + r),
                  b.historyX.shift(),
                  b.historyX.push(n),
                  j.value || null !== g || (g = Math.abs(t.detail.dx / t.detail.dy) < 1)),
                j.value &&
                  ((a = t.detail.dy + i),
                  b.historyY.shift(),
                  b.historyY.push(a),
                  q.value || null !== g || (g = Math.abs(t.detail.dy / t.detail.dx) < 1)),
                b.historyT.shift(),
                b.historyT.push(t.detail.timeStamp),
                !g)
              ) {
                t.preventDefault()
                var o = 'touch'
                n < L.value
                  ? e.outOfBounds
                    ? ((o = 'touch-out-of-bounds'), (n = L.value - _.x(L.value - n)))
                    : (n = L.value)
                  : n > N.value &&
                    (e.outOfBounds
                      ? ((o = 'touch-out-of-bounds'), (n = N.value + _.x(n - N.value)))
                      : (n = N.value)),
                  a < z.value
                    ? e.outOfBounds
                      ? ((o = 'touch-out-of-bounds'), (a = z.value - y.x(z.value - a)))
                      : (a = z.value)
                    : a > I.value &&
                      (e.outOfBounds
                        ? ((o = 'touch-out-of-bounds'), (a = I.value + y.x(a - I.value)))
                        : (a = I.value)),
                  om(function () {
                    B(n, a, l.value, o)
                  })
              }
            }
          }
          function Y() {
            if (
              !c.value &&
              !e.disabled &&
              v &&
              ($g({ disable: !1 }),
              (n.value.style.willChange = 'auto'),
              (v = !1),
              !g && !R('out-of-bounds') && e.inertia)
            ) {
              var t = (1e3 * (b.historyX[1] - b.historyX[0])) / (b.historyT[1] - b.historyT[0]),
                r = (1e3 * (b.historyY[1] - b.historyY[0])) / (b.historyT[1] - b.historyT[0]),
                i = d.value,
                a = h.value
              x.setV(t, r), x.setS(i, a)
              var o = x.delta().x,
                s = x.delta().y,
                u = o + i,
                f = s + a
              u < L.value
                ? ((u = L.value), (f = a + ((L.value - i) * s) / o))
                : u > N.value && ((u = N.value), (f = a + ((N.value - i) * s) / o)),
                f < z.value
                  ? ((f = z.value), (u = i + ((z.value - a) * o) / s))
                  : f > I.value && ((f = I.value), (u = i + ((I.value - a) * o) / s)),
                x.setEnd(u, f),
                (p = um(
                  x,
                  function () {
                    var e = x.s(),
                      t = e.x,
                      n = e.y
                    B(t, n, l.value, 'friction')
                  },
                  function () {
                    p.cancel()
                  },
                ))
            }
            e.outOfBounds || e.inertia || P()
          }
          function X() {
            if (a.value) {
              P()
              var t = e.scale ? T.value : 1
              M(), E(t), A()
              var n = D(V.value + O.x, $.value + O.y),
                r = n.x,
                i = n.y
              B(r, i, t, '', !0), S(t)
            }
          }
          return (
            is(() => {
              Gg(n.value, (e) => {
                switch (e.detail.state) {
                  case 'start':
                    W()
                    break
                  case 'move':
                    U(e)
                    break
                  case 'end':
                    Y()
                }
              }),
                X(),
                x.reconfigure(1, w.value),
                H.reconfigure(1, (9 * Math.pow(F.value, 2)) / 40, F.value),
                (n.value.style.transformOrigin = 'center'),
                Vg()
              var e = { rootRef: n, setParent: X, _endScale: k, _setScale: C }
              o(e),
                ls(() => {
                  s(e)
                })
            }),
            ls(() => {
              P()
            }),
            { setParent: X }
          )
        })(e, a, i)
      return () =>
        gl(
          'uni-movable-view',
          { ref: i },
          [gl(cv, { onResize: o }, null, 8, ['onResize']), n.default && n.default()],
          512,
        )
    },
  })
  var am = !1
  function om(e) {
    am ||
      ((am = !0),
      requestAnimationFrame(function () {
        e(), (am = !1)
      }))
  }
  function sm(e, t) {
    if (e === t) return 0
    var n = e.offsetLeft
    return e.offsetParent ? (n += sm(e.offsetParent, t)) : 0
  }
  function lm(e, t) {
    if (e === t) return 0
    var n = e.offsetTop
    return e.offsetParent ? (n += lm(e.offsetParent, t)) : 0
  }
  function um(e, t, n) {
    var r = { id: 0, cancelled: !1 }
    return (
      (function e(t, n, r, i) {
        if (!t || !t.cancelled) {
          r(n)
          var a = n.done()
          a || t.cancelled || (t.id = requestAnimationFrame(e.bind(null, t, n, r, i))),
            a && i && i(n)
        }
      })(r, e, t, n),
      {
        cancel: function (e) {
          e && e.id && cancelAnimationFrame(e.id), e && (e.cancelled = !0)
        }.bind(null, r),
        model: e,
      }
    )
  }
  function cm(e) {
    return /\d+[ur]px$/i.test(e) ? uni.upx2px(parseFloat(e)) : Number(e) || 0
  }
  var dm = ['navigate', 'redirect', 'switchTab', 'reLaunch', 'navigateBack'],
    hm = [
      'slide-in-right',
      'slide-in-left',
      'slide-in-top',
      'slide-in-bottom',
      'fade-in',
      'zoom-out',
      'zoom-fade-out',
      'pop-in',
      'none',
    ],
    fm = [
      'slide-out-right',
      'slide-out-left',
      'slide-out-top',
      'slide-out-bottom',
      'fade-out',
      'zoom-in',
      'zoom-fade-in',
      'pop-out',
      'none',
    ],
    pm = {
      hoverClass: { type: String, default: 'navigator-hover' },
      url: { type: String, default: '' },
      openType: { type: String, default: 'navigate', validator: (e) => Boolean(~dm.indexOf(e)) },
      delta: { type: Number, default: 1 },
      hoverStartTime: { type: [Number, String], default: 50 },
      hoverStayTime: { type: [Number, String], default: 600 },
      exists: { type: String, default: '' },
      hoverStopPropagation: { type: Boolean, default: !1 },
      animationType: {
        type: String,
        default: '',
        validator: (e) => !e || hm.concat(fm).includes(e),
      },
      animationDuration: { type: [String, Number], default: 300 },
    }
  const vm = Zp({
    name: 'Navigator',
    inheritAttrs: !1,
    compatConfig: { MODE: 3 },
    props: on({}, pm, { renderLink: { type: Boolean, default: !0 } }),
    setup(e, t) {
      var { slots: n } = t,
        r = eo(null),
        i = El(),
        a = (i && i.vnode.scopeId) || '',
        { hovering: o, binding: s } = Qp(e),
        l = (function (e) {
          return () => {
            if ('navigateBack' === e.openType || e.url) {
              var t = parseInt(e.animationDuration)
              switch (e.openType) {
                case 'navigate':
                  uni.navigateTo({
                    url: e.url,
                    animationType: e.animationType || 'pop-in',
                    animationDuration: t,
                  })
                  break
                case 'redirect':
                  uni.redirectTo({ url: e.url, exists: e.exists })
                  break
                case 'switchTab':
                  uni.switchTab({ url: e.url })
                  break
                case 'reLaunch':
                  uni.reLaunch({ url: e.url })
                  break
                case 'navigateBack':
                  uni.navigateBack({
                    delta: e.delta,
                    animationType: e.animationType || 'pop-out',
                    animationDuration: t,
                  })
              }
            } else
              console.error(
                '<navigator/> should have url attribute when using navigateTo, redirectTo, reLaunch or switchTab',
              )
          }
        })(e)
      return () => {
        var { hoverClass: t, url: u } = e,
          c = e.hoverClass && 'none' !== e.hoverClass,
          d = e.renderLink
            ? gl(
                'a',
                { class: 'navigator-wrap', href: u, onClick: Cu, onMousedown: Cu },
                [n.default && n.default()],
                40,
                ['href', 'onClick', 'onMousedown'],
              )
            : n.default && n.default()
        return gl(
          'uni-navigator',
          xl(
            { class: c && o.value ? t : '', ref: r },
            c && s,
            i ? i.attrs : {},
            { [a]: '' },
            { onClick: l },
          ),
          [d],
          16,
          ['onClick'],
        )
      }
    },
  })
  const gm = Zp({
    name: 'PickerView',
    props: {
      value: {
        type: Array,
        default: () => [],
        validator: function (e) {
          return cn(e) && e.filter((e) => 'number' == typeof e).length === e.length
        },
      },
      indicatorStyle: { type: String, default: '' },
      indicatorClass: { type: String, default: '' },
      maskStyle: { type: String, default: '' },
      maskClass: { type: String, default: '' },
    },
    emits: ['change', 'pickstart', 'pickend', 'update:value'],
    setup(e, t) {
      var { slots: n, emit: r } = t,
        i = eo(null),
        a = eo(null),
        o = Jp(i, r),
        s = (function (e) {
          var t = Fa([...e.value]),
            n = Fa({ value: t, height: 34 })
          return (
            jo(
              () => e.value,
              (e, t) => {
                ;(e === t || e.length !== t.length || e.findIndex((e, n) => e !== t[n]) >= 0) &&
                  ((n.value.length = e.length),
                  e.forEach((e, t) => {
                    e !== n.value[t] && n.value.splice(t, 1, e)
                  }))
              },
            ),
            n
          )
        })(e),
        l = eo(null),
        u = eo([]),
        c = eo([])
      function d(e) {
        var t = c.value
        if (t instanceof HTMLCollection) return Array.prototype.indexOf.call(t, e.el)
        var n = (t = t.filter((e) => e.type !== ol)).indexOf(e)
        return -1 !== n ? n : u.value.indexOf(e)
      }
      return (
        Is('getPickerViewColumn', function (e) {
          return ql({
            get() {
              var t = d(e.vnode)
              return s.value[t] || 0
            },
            set(t) {
              var n = d(e.vnode)
              if (!(n < 0) && s.value[n] !== t) {
                s.value[n] = t
                var i = s.value.map((e) => e)
                r('update:value', i), o('change', {}, { value: i })
              }
            },
          })
        }),
        Is('pickerViewProps', e),
        Is('pickerViewState', s),
        Hg(() => {
          var e
          ;(e = l.value) && (s.height = e.$el.offsetHeight), a.value && (c.value = a.value.children)
        }),
        () => {
          var e = n.default && n.default()
          return gl(
            'uni-picker-view',
            { ref: i },
            [
              gl(
                cv,
                {
                  ref: l,
                  onResize: (e) => {
                    var { height: t } = e
                    return (s.height = t)
                  },
                },
                null,
                8,
                ['onResize'],
              ),
              gl('div', { ref: a, class: 'uni-picker-view-wrapper' }, [e], 512),
            ],
            512,
          )
        }
      )
    },
  })
  class mm {
    constructor(e) {
      ;(this._drag = e),
        (this._dragLog = Math.log(e)),
        (this._x = 0),
        (this._v = 0),
        (this._startTime = 0)
    }
    set(e, t) {
      ;(this._x = e), (this._v = t), (this._startTime = new Date().getTime())
    }
    setVelocityByEnd(e) {
      this._v = ((e - this._x) * this._dragLog) / (Math.pow(this._drag, 100) - 1)
    }
    x(e) {
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3)
      var t =
        e === this._dt && this._powDragDt
          ? this._powDragDt
          : (this._powDragDt = Math.pow(this._drag, e))
      return (this._dt = e), this._x + (this._v * t) / this._dragLog - this._v / this._dragLog
    }
    dx(e) {
      void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3)
      var t =
        e === this._dt && this._powDragDt
          ? this._powDragDt
          : (this._powDragDt = Math.pow(this._drag, e))
      return (this._dt = e), this._v * t
    }
    done() {
      return Math.abs(this.dx()) < 3
    }
    reconfigure(e) {
      var t = this.x(),
        n = this.dx()
      ;(this._drag = e), (this._dragLog = Math.log(e)), this.set(t, n)
    }
    configuration() {
      var e = this
      return [
        {
          label: 'Friction',
          read: function () {
            return e._drag
          },
          write: function (t) {
            e.reconfigure(t)
          },
          min: 0.001,
          max: 0.1,
          step: 0.001,
        },
      ]
    }
  }
  function _m(e, t, n) {
    return e > t - n && e < t + n
  }
  function ym(e, t) {
    return _m(e, 0, t)
  }
  class bm {
    constructor(e, t, n) {
      ;(this._m = e),
        (this._k = t),
        (this._c = n),
        (this._solution = null),
        (this._endPosition = 0),
        (this._startTime = 0)
    }
    _solve(e, t) {
      var n = this._c,
        r = this._m,
        i = this._k,
        a = n * n - 4 * r * i
      if (0 === a) {
        var o = -n / (2 * r),
          s = e,
          l = t / (o * e)
        return {
          x: function (e) {
            return (s + l * e) * Math.pow(Math.E, o * e)
          },
          dx: function (e) {
            var t = Math.pow(Math.E, o * e)
            return o * (s + l * e) * t + l * t
          },
        }
      }
      if (a > 0) {
        var u = (-n - Math.sqrt(a)) / (2 * r),
          c = (-n + Math.sqrt(a)) / (2 * r),
          d = (t - u * e) / (c - u),
          h = e - d
        return {
          x: function (e) {
            var t, n
            return (
              e === this._t && ((t = this._powER1T), (n = this._powER2T)),
              (this._t = e),
              t || (t = this._powER1T = Math.pow(Math.E, u * e)),
              n || (n = this._powER2T = Math.pow(Math.E, c * e)),
              h * t + d * n
            )
          },
          dx: function (e) {
            var t, n
            return (
              e === this._t && ((t = this._powER1T), (n = this._powER2T)),
              (this._t = e),
              t || (t = this._powER1T = Math.pow(Math.E, u * e)),
              n || (n = this._powER2T = Math.pow(Math.E, c * e)),
              h * u * t + d * c * n
            )
          },
        }
      }
      var f = Math.sqrt(4 * r * i - n * n) / (2 * r),
        p = (-n / 2) * r,
        v = e,
        g = (t - p * e) / f
      return {
        x: function (e) {
          return Math.pow(Math.E, p * e) * (v * Math.cos(f * e) + g * Math.sin(f * e))
        },
        dx: function (e) {
          var t = Math.pow(Math.E, p * e),
            n = Math.cos(f * e),
            r = Math.sin(f * e)
          return t * (g * f * n - v * f * r) + p * t * (g * r + v * n)
        },
      }
    }
    x(e) {
      return (
        void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
        this._solution ? this._endPosition + this._solution.x(e) : 0
      )
    }
    dx(e) {
      return (
        void 0 === e && (e = (new Date().getTime() - this._startTime) / 1e3),
        this._solution ? this._solution.dx(e) : 0
      )
    }
    setEnd(e, t, n) {
      if ((n || (n = new Date().getTime()), e !== this._endPosition || !ym(t, 0.4))) {
        t = t || 0
        var r = this._endPosition
        this._solution &&
          (ym(t, 0.4) && (t = this._solution.dx((n - this._startTime) / 1e3)),
          (r = this._solution.x((n - this._startTime) / 1e3)),
          ym(t, 0.4) && (t = 0),
          ym(r, 0.4) && (r = 0),
          (r += this._endPosition)),
          (this._solution && ym(r - e, 0.4) && ym(t, 0.4)) ||
            ((this._endPosition = e),
            (this._solution = this._solve(r - this._endPosition, t)),
            (this._startTime = n))
      }
    }
    snap(e) {
      ;(this._startTime = new Date().getTime()),
        (this._endPosition = e),
        (this._solution = {
          x: function () {
            return 0
          },
          dx: function () {
            return 0
          },
        })
    }
    done(e) {
      return (
        e || (e = new Date().getTime()), _m(this.x(), this._endPosition, 0.4) && ym(this.dx(), 0.4)
      )
    }
    reconfigure(e, t, n) {
      ;(this._m = e),
        (this._k = t),
        (this._c = n),
        this.done() ||
          ((this._solution = this._solve(this.x() - this._endPosition, this.dx())),
          (this._startTime = new Date().getTime()))
    }
    springConstant() {
      return this._k
    }
    damping() {
      return this._c
    }
    configuration() {
      return [
        {
          label: 'Spring Constant',
          read: this.springConstant.bind(this),
          write: function (e, t) {
            e.reconfigure(1, t, e.damping())
          }.bind(this, this),
          min: 100,
          max: 1e3,
        },
        {
          label: 'Damping',
          read: this.damping.bind(this),
          write: function (e, t) {
            e.reconfigure(1, e.springConstant(), t)
          }.bind(this, this),
          min: 1,
          max: 500,
        },
      ]
    }
  }
  class wm {
    constructor(e, t, n) {
      ;(this._extent = e),
        (this._friction = t || new mm(0.01)),
        (this._spring = n || new bm(1, 90, 20)),
        (this._startTime = 0),
        (this._springing = !1),
        (this._springOffset = 0)
    }
    snap(e, t) {
      ;(this._springOffset = 0),
        (this._springing = !0),
        this._spring.snap(e),
        this._spring.setEnd(t)
    }
    set(e, t) {
      this._friction.set(e, t),
        e > 0 && t >= 0
          ? ((this._springOffset = 0),
            (this._springing = !0),
            this._spring.snap(e),
            this._spring.setEnd(0))
          : e < -this._extent && t <= 0
            ? ((this._springOffset = 0),
              (this._springing = !0),
              this._spring.snap(e),
              this._spring.setEnd(-this._extent))
            : (this._springing = !1),
        (this._startTime = new Date().getTime())
    }
    x(e) {
      if (!this._startTime) return 0
      if ((e || (e = (new Date().getTime() - this._startTime) / 1e3), this._springing))
        return this._spring.x() + this._springOffset
      var t = this._friction.x(e),
        n = this.dx(e)
      return (
        ((t > 0 && n >= 0) || (t < -this._extent && n <= 0)) &&
          ((this._springing = !0),
          this._spring.setEnd(0, n),
          t < -this._extent ? (this._springOffset = -this._extent) : (this._springOffset = 0),
          (t = this._spring.x() + this._springOffset)),
        t
      )
    }
    dx(e) {
      var t
      return (
        (t =
          this._lastTime === e
            ? this._lastDx
            : this._springing
              ? this._spring.dx(e)
              : this._friction.dx(e)),
        (this._lastTime = e),
        (this._lastDx = t),
        t
      )
    }
    done() {
      return this._springing ? this._spring.done() : this._friction.done()
    }
    setVelocityByEnd(e) {
      this._friction.setVelocityByEnd(e)
    }
    configuration() {
      var e = this._friction.configuration()
      return e.push.apply(e, this._spring.configuration()), e
    }
  }
  class xm {
    constructor(e, t) {
      ;(t = t || {}),
        (this._element = e),
        (this._options = t),
        (this._enableSnap = t.enableSnap || !1),
        (this._itemSize = t.itemSize || 0),
        (this._enableX = t.enableX || !1),
        (this._enableY = t.enableY || !1),
        (this._shouldDispatchScrollEvent = !!t.onScroll),
        this._enableX
          ? ((this._extent =
              (t.scrollWidth || this._element.offsetWidth) -
              this._element.parentElement.offsetWidth),
            (this._scrollWidth = t.scrollWidth))
          : ((this._extent =
              (t.scrollHeight || this._element.offsetHeight) -
              this._element.parentElement.offsetHeight),
            (this._scrollHeight = t.scrollHeight)),
        (this._position = 0),
        (this._scroll = new wm(this._extent, t.friction, t.spring)),
        (this._onTransitionEnd = this.onTransitionEnd.bind(this)),
        this.updatePosition()
    }
    onTouchStart() {
      ;(this._startPosition = this._position),
        (this._lastChangePos = this._startPosition),
        this._startPosition > 0
          ? (this._startPosition /= 0.5)
          : this._startPosition < -this._extent &&
            (this._startPosition = (this._startPosition + this._extent) / 0.5 - this._extent),
        this._animation && (this._animation.cancel(), (this._scrolling = !1)),
        this.updatePosition()
    }
    onTouchMove(e, t) {
      var n = this._startPosition
      this._enableX ? (n += e) : this._enableY && (n += t),
        n > 0 ? (n *= 0.5) : n < -this._extent && (n = 0.5 * (n + this._extent) - this._extent),
        (this._position = n),
        this.updatePosition(),
        this.dispatchScroll()
    }
    onTouchEnd(e, t, n) {
      if (this._enableSnap && this._position > -this._extent && this._position < 0) {
        if (
          this._enableY &&
          ((Math.abs(t) < this._itemSize && Math.abs(n.y) < 300) || Math.abs(n.y) < 150)
        )
          return void this.snap()
        if (
          this._enableX &&
          ((Math.abs(e) < this._itemSize && Math.abs(n.x) < 300) || Math.abs(n.x) < 150)
        )
          return void this.snap()
      }
      var r, i, a
      if (
        (this._enableX
          ? this._scroll.set(this._position, n.x)
          : this._enableY && this._scroll.set(this._position, n.y),
        this._enableSnap)
      ) {
        var o = this._scroll._friction.x(100),
          s = o % this._itemSize
        ;(r = Math.abs(s) > this._itemSize / 2 ? o - (this._itemSize - Math.abs(s)) : o - s) <= 0 &&
          r >= -this._extent &&
          this._scroll.setVelocityByEnd(r)
      }
      ;(this._lastTime = Date.now()),
        (this._lastDelay = 0),
        (this._scrolling = !0),
        (this._lastChangePos = this._position),
        (this._lastIdx = Math.floor(Math.abs(this._position / this._itemSize))),
        (this._animation =
          ((i = this._scroll),
          (function e(t, n, r, i) {
            if (!t || !t.cancelled) {
              r(n)
              var a = n.done()
              a || t.cancelled || (t.id = requestAnimationFrame(e.bind(null, t, n, r, i))),
                a && i && i(n)
            }
          })(
            (a = { id: 0, cancelled: !1 }),
            i,
            () => {
              var e = Date.now(),
                t = (e - this._scroll._startTime) / 1e3,
                n = this._scroll.x(t)
              ;(this._position = n), this.updatePosition()
              var r = this._scroll.dx(t)
              this._shouldDispatchScrollEvent &&
                e - this._lastTime > this._lastDelay &&
                (this.dispatchScroll(), (this._lastDelay = Math.abs(2e3 / r)), (this._lastTime = e))
            },
            () => {
              this._enableSnap &&
                (r <= 0 && r >= -this._extent && ((this._position = r), this.updatePosition()),
                fn(this._options.onSnap) &&
                  this._options.onSnap(Math.floor(Math.abs(this._position) / this._itemSize))),
                this._shouldDispatchScrollEvent && this.dispatchScroll(),
                (this._scrolling = !1)
            },
          ),
          {
            cancel: function (e) {
              e && e.id && cancelAnimationFrame(e.id), e && (e.cancelled = !0)
            }.bind(null, a),
            model: i,
          }))
    }
    onTransitionEnd() {
      ;(this._element.style.webkitTransition = ''),
        (this._element.style.transition = ''),
        this._element.removeEventListener('transitionend', this._onTransitionEnd),
        this._snapping && (this._snapping = !1),
        this.dispatchScroll()
    }
    snap() {
      var e = this._itemSize,
        t = this._position % e,
        n =
          Math.abs(t) > this._itemSize / 2 ? this._position - (e - Math.abs(t)) : this._position - t
      this._position !== n &&
        ((this._snapping = !0),
        this.scrollTo(-n),
        fn(this._options.onSnap) &&
          this._options.onSnap(Math.floor(Math.abs(this._position) / this._itemSize)))
    }
    scrollTo(e, t) {
      this._animation && (this._animation.cancel(), (this._scrolling = !1)),
        'number' == typeof e && (this._position = -e),
        this._position < -this._extent
          ? (this._position = -this._extent)
          : this._position > 0 && (this._position = 0)
      var n = 'transform ' + (t || 0.2) + 's ease-out'
      ;(this._element.style.webkitTransition = '-webkit-' + n),
        (this._element.style.transition = n),
        this.updatePosition(),
        this._element.addEventListener('transitionend', this._onTransitionEnd)
    }
    dispatchScroll() {
      if (
        fn(this._options.onScroll) &&
        Math.round(Number(this._lastPos)) !== Math.round(this._position)
      ) {
        this._lastPos = this._position
        var e = {
          target: {
            scrollLeft: this._enableX ? -this._position : 0,
            scrollTop: this._enableY ? -this._position : 0,
            scrollHeight: this._scrollHeight || this._element.offsetHeight,
            scrollWidth: this._scrollWidth || this._element.offsetWidth,
            offsetHeight: this._element.parentElement.offsetHeight,
            offsetWidth: this._element.parentElement.offsetWidth,
          },
        }
        this._options.onScroll(e)
      }
    }
    update(e, t, n) {
      var r = 0,
        i = this._position
      this._enableX
        ? ((r = this._element.childNodes.length
            ? (t || this._element.offsetWidth) - this._element.parentElement.offsetWidth
            : 0),
          (this._scrollWidth = t))
        : ((r = this._element.childNodes.length
            ? (t || this._element.offsetHeight) - this._element.parentElement.offsetHeight
            : 0),
          (this._scrollHeight = t)),
        'number' == typeof e && (this._position = -e),
        this._position < -r ? (this._position = -r) : this._position > 0 && (this._position = 0),
        (this._itemSize = n || this._itemSize),
        this.updatePosition(),
        i !== this._position &&
          (this.dispatchScroll(),
          fn(this._options.onSnap) &&
            this._options.onSnap(Math.floor(Math.abs(this._position) / this._itemSize))),
        (this._extent = r),
        (this._scroll._extent = r)
    }
    updatePosition() {
      var e = ''
      this._enableX
        ? (e = 'translateX(' + this._position + 'px) translateZ(0)')
        : this._enableY && (e = 'translateY(' + this._position + 'px) translateZ(0)'),
        (this._element.style.webkitTransform = e),
        (this._element.style.transform = e)
    }
    isScrolling() {
      return this._scrolling || this._snapping
    }
  }
  const Sm = Zp({
    name: 'PickerViewColumn',
    setup(e, t) {
      var n,
        r,
        { slots: i, emit: a } = t,
        o = eo(null),
        s = eo(null),
        l = Ps('getPickerViewColumn'),
        u = El(),
        c = l ? l(u) : eo(0),
        d = Ps('pickerViewProps'),
        h = Ps('pickerViewState'),
        f = eo(34),
        p = eo(null),
        v = ql(() => (h.height - f.value) / 2),
        { state: g } = xg(),
        m = Fa({ current: c.value, length: 0 })
      function _() {
        n &&
          !r &&
          ((r = !0),
          yo(() => {
            r = !1
            var e = Math.min(m.current, m.length - 1)
            ;(e = Math.max(e, 0)), n.update(e * f.value, void 0, f.value)
          }))
      }
      jo(
        () => c.value,
        (e) => {
          e !== m.current && ((m.current = e), _())
        },
      ),
        jo(
          () => m.current,
          (e) => (c.value = e),
        ),
        jo([() => f.value, () => m.length, () => h.height], _)
      var y = 0
      function b(e) {
        var t = y + e.deltaY
        if (Math.abs(t) > 10) {
          y = 0
          var r = Math.min(m.current + (t < 0 ? -1 : 1), m.length - 1)
          ;(m.current = r = Math.max(r, 0)), n.scrollTo(r * f.value)
        } else y = t
        e.preventDefault()
      }
      function w(e) {
        var { clientY: t } = e,
          r = o.value
        if (!n.isScrolling()) {
          var i = t - r.getBoundingClientRect().top - h.height / 2,
            a = f.value / 2
          if (!(Math.abs(i) <= a)) {
            var s = Math.ceil((Math.abs(i) - a) / f.value),
              l = i < 0 ? -s : s,
              u = Math.min(m.current + l, m.length - 1)
            ;(m.current = u = Math.max(u, 0)), n.scrollTo(u * f.value)
          }
        }
      }
      var x = () => {
          var e,
            t,
            r,
            i = o.value,
            a = s.value,
            {
              scroller: l,
              handleTouchStart: u,
              handleTouchMove: c,
              handleTouchEnd: d,
            } = (function (e, t) {
              var n = { trackingID: -1, maxDy: 0, maxDx: 0 },
                r = new xm(e, t)
              function i(e) {
                var t = e,
                  r = e
                return 'move' === t.detail.state || 'end' === t.detail.state
                  ? { x: t.detail.dx, y: t.detail.dy }
                  : { x: r.screenX - n.x, y: r.screenY - n.y }
              }
              return {
                scroller: r,
                handleTouchStart: function (e) {
                  var t = e,
                    i = e
                  'start' === t.detail.state
                    ? ((n.trackingID = 'touch'), (n.x = t.detail.x), (n.y = t.detail.y))
                    : ((n.trackingID = 'mouse'), (n.x = i.screenX), (n.y = i.screenY)),
                    (n.maxDx = 0),
                    (n.maxDy = 0),
                    (n.historyX = [0]),
                    (n.historyY = [0]),
                    (n.historyTime = [t.detail.timeStamp || i.timeStamp]),
                    (n.listener = r),
                    r.onTouchStart && r.onTouchStart(),
                    ('boolean' != typeof e.cancelable || e.cancelable) && e.preventDefault()
                },
                handleTouchMove: function (e) {
                  var t = e,
                    r = e
                  if (-1 !== n.trackingID) {
                    ;('boolean' != typeof e.cancelable || e.cancelable) && e.preventDefault()
                    var a = i(e)
                    if (a) {
                      for (
                        n.maxDy = Math.max(n.maxDy, Math.abs(a.y)),
                          n.maxDx = Math.max(n.maxDx, Math.abs(a.x)),
                          n.historyX.push(a.x),
                          n.historyY.push(a.y),
                          n.historyTime.push(t.detail.timeStamp || r.timeStamp);
                        n.historyTime.length > 10;

                      )
                        n.historyTime.shift(), n.historyX.shift(), n.historyY.shift()
                      n.listener && n.listener.onTouchMove && n.listener.onTouchMove(a.x, a.y)
                    }
                  }
                },
                handleTouchEnd: function (e) {
                  if (-1 !== n.trackingID) {
                    e.preventDefault()
                    var t = i(e)
                    if (t) {
                      var r = n.listener
                      ;(n.trackingID = -1), (n.listener = null)
                      var a = { x: 0, y: 0 }
                      if (n.historyTime.length > 2)
                        for (
                          var o = n.historyTime.length - 1,
                            s = n.historyTime[o],
                            l = n.historyX[o],
                            u = n.historyY[o];
                          o > 0;

                        ) {
                          o--
                          var c = s - n.historyTime[o]
                          if (c > 30 && c < 50) {
                            ;(a.x = (l - n.historyX[o]) / (c / 1e3)),
                              (a.y = (u - n.historyY[o]) / (c / 1e3))
                            break
                          }
                        }
                      ;(n.historyTime = []),
                        (n.historyX = []),
                        (n.historyY = []),
                        r && r.onTouchEnd && r.onTouchEnd(t.x, t.y, a)
                    }
                  }
                },
              }
            })(a, {
              enableY: !0,
              enableX: !1,
              enableSnap: !0,
              itemSize: f.value,
              friction: new mm(1e-4),
              spring: new bm(2, 90, 20),
              onSnap: (e) => {
                isNaN(e) || e === m.current || (m.current = e)
              },
            })
          ;(n = l),
            Gg(
              i,
              (e) => {
                switch (e.detail.state) {
                  case 'start':
                    u(e), $g({ disable: !0 })
                    break
                  case 'move':
                    c(e), e.stopPropagation()
                    break
                  case 'end':
                  case 'cancel':
                    d(e), $g({ disable: !1 })
                }
              },
              !0,
            ),
            (t = 0),
            (r = 0),
            (e = i).addEventListener('touchstart', (e) => {
              var n = e.changedTouches[0]
              ;(t = n.clientX), (r = n.clientY)
            }),
            e.addEventListener('touchend', (e) => {
              var n = e.changedTouches[0]
              if (Math.abs(n.clientX - t) < 20 && Math.abs(n.clientY - r) < 20) {
                var i = {
                    bubbles: !0,
                    cancelable: !0,
                    target: e.target,
                    currentTarget: e.currentTarget,
                  },
                  a = new CustomEvent('click', i)
                ;['screenX', 'screenY', 'clientX', 'clientY', 'pageX', 'pageY'].forEach((e) => {
                  a[e] = n[e]
                }),
                  e.target.dispatchEvent(a)
              }
            }),
            Vg(),
            _()
        },
        S = !1
      return (
        Hg(() => {
          var e
          s.value && (m.length = s.value.children.length),
            S || ((S = !0), (e = p.value), (f.value = e.$el.offsetHeight), x())
        }),
        () => {
          var e = i.default && i.default(),
            t = ''.concat(v.value, 'px 0')
          return gl(
            'uni-picker-view-column',
            { ref: o },
            [
              gl(
                'div',
                { onWheel: b, onClick: w, class: 'uni-picker-view-group' },
                [
                  gl(
                    'div',
                    xl(g.attrs, {
                      class: ['uni-picker-view-mask', d.maskClass],
                      style: 'background-size: 100% '.concat(v.value, 'px;').concat(d.maskStyle),
                    }),
                    null,
                    16,
                  ),
                  gl(
                    'div',
                    xl(g.attrs, {
                      class: ['uni-picker-view-indicator', d.indicatorClass],
                      style: d.indicatorStyle,
                    }),
                    [
                      gl(
                        cv,
                        {
                          ref: p,
                          onResize: (e) => {
                            var { height: t } = e
                            return (f.value = t)
                          },
                        },
                        null,
                        8,
                        ['onResize'],
                      ),
                    ],
                    16,
                  ),
                  gl(
                    'div',
                    {
                      ref: s,
                      class: ['uni-picker-view-content'],
                      style: {
                        padding: t,
                        '--picker-view-column-indicator-height': ''.concat(f.value, 'px'),
                      },
                    },
                    [e],
                    4,
                  ),
                ],
                40,
                ['onWheel', 'onClick'],
              ),
            ],
            512,
          )
        }
      )
    },
  })
  var km = er,
    Cm = 'backwards'
  const Tm = Zp({
    name: 'Progress',
    props: {
      percent: { type: [Number, String], default: 0, validator: (e) => !isNaN(parseFloat(e)) },
      fontSize: { type: [String, Number], default: 16 },
      showInfo: { type: [Boolean, String], default: !1 },
      strokeWidth: { type: [Number, String], default: 6, validator: (e) => !isNaN(parseFloat(e)) },
      color: { type: String, default: km },
      activeColor: { type: String, default: km },
      backgroundColor: { type: String, default: '#EBEBEB' },
      active: { type: [Boolean, String], default: !1 },
      activeMode: { type: String, default: Cm },
      duration: { type: [Number, String], default: 30, validator: (e) => !isNaN(parseFloat(e)) },
      borderRadius: { type: [Number, String], default: 0 },
    },
    setup(e) {
      var t = eo(null),
        n = (function (e) {
          var t = eo(0),
            n = ql(() =>
              'background-color: '
                .concat(e.backgroundColor, '; height: ')
                .concat(e.strokeWidth, 'px;'),
            ),
            r = ql(() => {
              var n = e.color !== km && e.activeColor === km ? e.color : e.activeColor
              return 'width: '.concat(t.value, '%;background-color: ').concat(n)
            }),
            i = ql(() => {
              if ('string' == typeof e.percent && !/^-?\d*\.?\d*$/.test(e.percent)) return 0
              var t = parseFloat(e.percent)
              return Number.isNaN(t) || t < 0 ? (t = 0) : t > 100 && (t = 100), t
            }),
            a = Fa({
              outerBarStyle: n,
              innerBarStyle: r,
              realPercent: i,
              currentPercent: t,
              strokeTimer: 0,
              lastPercent: 0,
            })
          return a
        })(e)
      return (
        Am(n, e),
        jo(
          () => n.realPercent,
          (t, r) => {
            n.strokeTimer && clearInterval(n.strokeTimer), (n.lastPercent = r || 0), Am(n, e)
          },
        ),
        () => {
          var { showInfo: r } = e,
            { outerBarStyle: i, innerBarStyle: a, currentPercent: o } = n
          return gl(
            'uni-progress',
            { class: 'uni-progress', ref: t },
            [
              gl(
                'div',
                { style: i, class: 'uni-progress-bar' },
                [gl('div', { style: a, class: 'uni-progress-inner-bar' }, null, 4)],
                4,
              ),
              r ? gl('p', { class: 'uni-progress-info' }, [o + '%']) : '',
            ],
            512,
          )
        }
      )
    },
  })
  function Am(e, t) {
    t.active
      ? ((e.currentPercent = t.activeMode === Cm ? 0 : e.lastPercent),
        (e.strokeTimer = setInterval(() => {
          e.currentPercent + 1 > e.realPercent
            ? ((e.currentPercent = e.realPercent), e.strokeTimer && clearInterval(e.strokeTimer))
            : (e.currentPercent += 1)
        }, parseFloat(t.duration))))
      : (e.currentPercent = e.realPercent)
  }
  var Mm = Mu('ucg')
  const Em = Zp({
    name: 'RadioGroup',
    props: { name: { type: String, default: '' } },
    setup(e, t) {
      var { emit: n, slots: r } = t,
        i = eo(null)
      return (
        (function (e, t) {
          var n = []
          is(() => {
            s(n.length - 1)
          })
          var r = () => {
            var e
            return null === (e = n.find((e) => e.value.radioChecked)) || void 0 === e
              ? void 0
              : e.value.value
          }
          Is(Mm, {
            addField(e) {
              n.push(e)
            },
            removeField(e) {
              n.splice(n.indexOf(e), 1)
            },
            radioChange(e, i) {
              s(n.indexOf(i), !0), t('change', e, { value: r() })
            },
          })
          var i = Ps(tv, !1),
            a = {
              submit: () => {
                var t = ['', null]
                return '' !== e.name && ((t[0] = e.name), (t[1] = r())), t
              },
            }
          i &&
            (i.addField(a),
            ss(() => {
              i.removeField(a)
            }))
          function o(e, t) {
            e.value = { radioChecked: t, value: e.value.value }
          }
          function s(e, t) {
            n.forEach((r, i) => {
              i !== e &&
                (t
                  ? o(n[i], !1)
                  : n.forEach((e, t) => {
                      i >= t || (n[t].value.radioChecked && o(n[i], !1))
                    }))
            })
          }
        })(e, Jp(i, n)),
        () => gl('uni-radio-group', { ref: i }, [r.default && r.default()], 512)
      )
    },
  })
  const Om = Zp({
    name: 'Radio',
    props: {
      checked: { type: [Boolean, String], default: !1 },
      id: { type: String, default: '' },
      disabled: { type: [Boolean, String], default: !1 },
      value: { type: String, default: '' },
      color: { type: String, default: '#007aff' },
      backgroundColor: { type: String, default: '' },
      borderColor: { type: String, default: '' },
      activeBackgroundColor: { type: String, default: '' },
      activeBorderColor: { type: String, default: '' },
      iconColor: { type: String, default: '#ffffff' },
    },
    setup(e, t) {
      var { slots: n } = t,
        r = eo(null),
        i = eo(e.checked),
        a = eo(e.value)
      var o = ql(() =>
        (function () {
          if (e.disabled) return { backgroundColor: '#E1E1E1', borderColor: '#D1D1D1' }
          var t = {}
          return (
            i.value
              ? ((t.backgroundColor = e.activeBackgroundColor || e.color),
                (t.borderColor = e.activeBorderColor || t.backgroundColor))
              : (e.borderColor && (t.borderColor = e.borderColor),
                e.backgroundColor && (t.backgroundColor = e.backgroundColor)),
            t
          )
        })(i.value),
      )
      jo([() => e.checked, () => e.value], (e) => {
        var [t, n] = e
        ;(i.value = t), (a.value = n)
      })
      var {
          uniCheckGroup: s,
          uniLabel: l,
          field: u,
        } = (function (e, t, n) {
          var r = ql({
              get: () => ({ radioChecked: Boolean(e.value), value: t.value }),
              set: (t) => {
                var { radioChecked: n } = t
                e.value = n
              },
            }),
            i = { reset: n },
            a = Ps(Mm, !1)
          a && a.addField(r)
          var o = Ps(tv, !1)
          o && o.addField(i)
          var s = Ps(iv, !1)
          return (
            ss(() => {
              a && a.removeField(r), o && o.removeField(i)
            }),
            { uniCheckGroup: a, uniForm: o, uniLabel: s, field: r }
          )
        })(i, a, () => {
          i.value = !1
        }),
        c = (t) => {
          e.disabled || i.value || ((i.value = !0), s && s.radioChange(t, u), t.stopPropagation())
        }
      return (
        l &&
          (l.addHandler(c),
          ss(() => {
            l.removeHandler(c)
          })),
        ov(e, { 'label-click': c }),
        () => {
          var t,
            a = ev(e, 'disabled')
          return (
            (t = i.value),
            gl(
              'uni-radio',
              xl(a, { id: e.id, onClick: c, ref: r }),
              [
                gl(
                  'div',
                  {
                    class: 'uni-radio-wrapper',
                    style: {
                      '--HOVER-BD-COLOR': i.value ? o.value.borderColor : e.activeBorderColor,
                    },
                  },
                  [
                    gl(
                      'div',
                      {
                        class: ['uni-radio-input', { 'uni-radio-input-disabled': e.disabled }],
                        style: o.value,
                      },
                      [t ? Pu(Nu, e.disabled ? '#ADADAD' : e.iconColor, 18) : ''],
                      6,
                    ),
                    n.default && n.default(),
                  ],
                  4,
                ),
              ],
              16,
              ['id', 'onClick'],
            )
          )
        }
      )
    },
  })
  var Lm = {
      a: '',
      abbr: '',
      address: '',
      article: '',
      aside: '',
      b: '',
      bdi: '',
      bdo: ['dir'],
      big: '',
      blockquote: '',
      br: '',
      caption: '',
      center: '',
      cite: '',
      code: '',
      col: ['span', 'width'],
      colgroup: ['span', 'width'],
      dd: '',
      del: '',
      div: '',
      dl: '',
      dt: '',
      em: '',
      fieldset: '',
      font: '',
      footer: '',
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      header: '',
      hr: '',
      i: '',
      img: ['alt', 'src', 'height', 'width'],
      ins: '',
      label: '',
      legend: '',
      li: '',
      mark: '',
      nav: '',
      ol: ['start', 'type'],
      p: '',
      pre: '',
      q: '',
      rt: '',
      ruby: '',
      s: '',
      section: '',
      small: '',
      span: '',
      strong: '',
      sub: '',
      sup: '',
      table: ['width'],
      tbody: '',
      td: ['colspan', 'height', 'rowspan', 'width'],
      tfoot: '',
      th: ['colspan', 'height', 'rowspan', 'width'],
      thead: '',
      tr: ['colspan', 'height', 'rowspan', 'width'],
      tt: '',
      u: '',
      ul: '',
    },
    zm = {
      amp: '&',
      gt: '>',
      lt: '<',
      nbsp: ' ',
      quot: '"',
      apos: "'",
      ldquo: '“',
      rdquo: '”',
      yen: '￥',
      radic: '√',
      lceil: '⌈',
      rceil: '⌉',
      lfloor: '⌊',
      rfloor: '⌋',
      hellip: '…',
    }
  var Nm = (e, t, n) =>
    !n || (cn(n) && !n.length)
      ? []
      : n.map((n) => {
          var r
          if (wn(n)) {
            if (!un(n, 'type') || 'node' === n.type) {
              var i = { [e]: '' },
                a = null == (r = n.name) ? void 0 : r.toLowerCase()
              if (!un(Lm, a)) return
              return (
                (function (e, t) {
                  if (wn(t))
                    for (var n in t)
                      if (un(t, n)) {
                        var r = t[n]
                        'img' === e && 'src' === n && (t[n] = bc(r))
                      }
                })(a, n.attrs),
                (i = on(
                  i,
                  (function (e, t) {
                    if (['a', 'img'].includes(e.name) && t)
                      return {
                        onClick: (n) => {
                          t(n, { node: e }),
                            n.stopPropagation(),
                            n.preventDefault(),
                            (n.returnValue = !1)
                        },
                      }
                  })(n, t),
                  n.attrs,
                )),
                jl(n.name, i, Nm(e, t, n.children))
              )
            }
            return 'text' === n.type && pn(n.text) && '' !== n.text
              ? _l(
                  (n.text || '').replace(/&(([a-zA-Z]+)|(#x{0,1}[\da-zA-Z]+));/gi, function (e, t) {
                    return un(zm, t) && zm[t]
                      ? zm[t]
                      : /^#[0-9]{1,4}$/.test(t)
                        ? String.fromCharCode(t.slice(1))
                        : /^#x[0-9a-f]{1,4}$/i.test(t)
                          ? String.fromCharCode(0 + t.slice(1))
                          : e
                  }),
                )
              : void 0
          }
        })
  function Im(e) {
    e = (function (e) {
      return e
        .replace(/<\?xml.*\?>\n/, '')
        .replace(/<!doctype.*>\n/, '')
        .replace(/<!DOCTYPE.*>\n/, '')
    })(e)
    var t = [],
      n = { node: 'root', children: [] }
    return (
      Hv(e, {
        start: function (e, r, i) {
          var a = { name: e }
          if (
            (0 !== r.length &&
              (a.attrs = (function (e) {
                return e.reduce(function (e, t) {
                  var n = t.value,
                    r = t.name
                  return (
                    n.match(/ /) && -1 === ['style', 'src'].indexOf(r) && (n = n.split(' ')),
                    e[r] ? (Array.isArray(e[r]) ? e[r].push(n) : (e[r] = [e[r], n])) : (e[r] = n),
                    e
                  )
                }, {})
              })(r)),
            i)
          ) {
            var o = t[0] || n
            o.children || (o.children = []), o.children.push(a)
          } else t.unshift(a)
        },
        end: function (e) {
          var r = t.shift()
          if ((r.name !== e && console.error('invalid state: mismatch end tag'), 0 === t.length))
            n.children.push(r)
          else {
            var i = t[0]
            i.children || (i.children = []), i.children.push(r)
          }
        },
        chars: function (e) {
          var r = { type: 'text', text: e }
          if (0 === t.length) n.children.push(r)
          else {
            var i = t[0]
            i.children || (i.children = []), i.children.push(r)
          }
        },
        comment: function (e) {
          var n = { node: 'comment', text: e },
            r = t[0]
          r && (r.children || (r.children = []), r.children.push(n))
        },
      }),
      n.children
    )
  }
  const Pm = Zp({
      name: 'RichText',
      compatConfig: { MODE: 3 },
      props: {
        nodes: {
          type: [Array, String],
          default: function () {
            return []
          },
        },
      },
      emits: ['itemclick'],
      setup(e, t) {
        var { emit: n } = t,
          r = El(),
          i = (r && r.vnode.scopeId) || '',
          a = eo(null),
          o = eo([]),
          s = Jp(a, n)
        function l(e) {
          s('itemclick', e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
        }
        return (
          jo(
            () => e.nodes,
            function () {
              var t = e.nodes
              pn(t) && (t = Im(e.nodes)), (o.value = Nm(i, l, t))
            },
            { immediate: !0 },
          ),
          () => jl('uni-rich-text', { ref: a }, jl('div', {}, o.value))
        )
      },
    }),
    Dm = Zp({
      name: 'Refresher',
      props: {
        refreshState: { type: String, default: '' },
        refresherHeight: { type: Number, default: 0 },
        refresherThreshold: { type: Number, default: 45 },
        refresherDefaultStyle: { type: String, default: 'black' },
        refresherBackground: { type: String, default: '#fff' },
      },
      setup(e, t) {
        var { slots: n } = t,
          r = eo(null),
          i = ql(() => {
            var t = { backgroundColor: e.refresherBackground }
            switch (e.refreshState) {
              case 'pulling':
                t.height = e.refresherHeight + 'px'
                break
              case 'refreshing':
                ;(t.height = e.refresherThreshold + 'px'), (t.transition = 'height 0.3s')
                break
              case '':
              case 'refresherabort':
              case 'restore':
                ;(t.height = '0px'), (t.transition = 'height 0.3s')
            }
            return t
          }),
          a = ql(() => {
            var t = e.refresherHeight / e.refresherThreshold
            return 360 * (t > 1 ? 1 : t)
          })
        return () => {
          var { refreshState: t, refresherDefaultStyle: o, refresherThreshold: s } = e
          return gl(
            'div',
            { ref: r, style: i.value, class: 'uni-scroll-view-refresher' },
            [
              'none' !== o
                ? gl('div', { class: 'uni-scroll-view-refresh' }, [
                    gl('div', { class: 'uni-scroll-view-refresh-inner' }, [
                      'pulling' == t
                        ? gl(
                            'svg',
                            {
                              key: 'refresh__icon',
                              style: { transform: 'rotate(' + a.value + 'deg)' },
                              fill: '#2BD009',
                              class: 'uni-scroll-view-refresh__icon',
                              width: '24',
                              height: '24',
                              viewBox: '0 0 24 24',
                            },
                            [
                              gl(
                                'path',
                                {
                                  d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
                                },
                                null,
                              ),
                              gl('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null),
                            ],
                            4,
                          )
                        : null,
                      'refreshing' == t
                        ? gl(
                            'svg',
                            {
                              key: 'refresh__spinner',
                              class: 'uni-scroll-view-refresh__spinner',
                              width: '24',
                              height: '24',
                              viewBox: '25 25 50 50',
                            },
                            [
                              gl(
                                'circle',
                                {
                                  cx: '50',
                                  cy: '50',
                                  r: '20',
                                  fill: 'none',
                                  style: 'color: #2bd009',
                                  'stroke-width': '3',
                                },
                                null,
                              ),
                            ],
                          )
                        : null,
                    ]),
                  ])
                : null,
              'none' === o
                ? gl(
                    'div',
                    {
                      class: 'uni-scroll-view-refresher-container',
                      style: { height: ''.concat(s, 'px') },
                    },
                    [n.default && n.default()],
                  )
                : null,
            ],
            4,
          )
        }
      },
    })
  var Bm = yr(!0)
  const Rm = Zp({
    name: 'ScrollView',
    compatConfig: { MODE: 3 },
    props: {
      direction: { type: [String], default: 'vertical' },
      scrollX: { type: [Boolean, String], default: !1 },
      scrollY: { type: [Boolean, String], default: !1 },
      showScrollbar: { type: [Boolean, String], default: !0 },
      upperThreshold: { type: [Number, String], default: 50 },
      lowerThreshold: { type: [Number, String], default: 50 },
      scrollTop: { type: [Number, String], default: 0 },
      scrollLeft: { type: [Number, String], default: 0 },
      scrollIntoView: { type: String, default: '' },
      scrollWithAnimation: { type: [Boolean, String], default: !1 },
      enableBackToTop: { type: [Boolean, String], default: !1 },
      refresherEnabled: { type: [Boolean, String], default: !1 },
      refresherThreshold: { type: Number, default: 45 },
      refresherDefaultStyle: { type: String, default: 'black' },
      refresherBackground: { type: String, default: '#fff' },
      refresherTriggered: { type: [Boolean, String], default: !1 },
    },
    emits: [
      'scroll',
      'scrolltoupper',
      'scrolltolower',
      'refresherrefresh',
      'refresherrestore',
      'refresherpulling',
      'refresherabort',
      'update:refresherTriggered',
    ],
    setup(e, t) {
      var { emit: n, slots: r, expose: i } = t,
        a = eo(null),
        o = eo(null),
        s = eo(null),
        l = eo(null),
        u = Jp(a, n),
        {
          state: c,
          scrollTopNumber: d,
          scrollLeftNumber: h,
        } = (function (e) {
          var t = ql(() => Number(e.scrollTop) || 0),
            n = ql(() => Number(e.scrollLeft) || 0),
            r = Fa({
              lastScrollTop: t.value,
              lastScrollLeft: n.value,
              lastScrollToUpperTime: 0,
              lastScrollToLowerTime: 0,
              refresherHeight: 0,
              refreshState: '',
            })
          return { state: r, scrollTopNumber: t, scrollLeftNumber: n }
        })(e),
        {
          realScrollX: f,
          realScrollY: p,
          _scrollLeftChanged: v,
          _scrollTopChanged: g,
        } = (function (e, t, n, r, i, a, o, s, l) {
          var u = !1,
            c = 0,
            d = !1,
            h = () => {},
            f = ql(() => e.scrollX),
            p = ql(() => e.scrollY),
            v = ql(() => {
              var t = Number(e.upperThreshold)
              return isNaN(t) ? 50 : t
            }),
            g = ql(() => {
              var t = Number(e.lowerThreshold)
              return isNaN(t) ? 50 : t
            })
          function m(e, t) {
            var n = o.value,
              r = 0,
              i = ''
            if (
              (e < 0
                ? (e = 0)
                : 'x' === t && e > n.scrollWidth - n.offsetWidth
                  ? (e = n.scrollWidth - n.offsetWidth)
                  : 'y' === t &&
                    e > n.scrollHeight - n.offsetHeight &&
                    (e = n.scrollHeight - n.offsetHeight),
              'x' === t ? (r = n.scrollLeft - e) : 'y' === t && (r = n.scrollTop - e),
              0 !== r)
            ) {
              var a = s.value
              ;(a.style.transition = 'transform .3s ease-out'),
                (a.style.webkitTransition = '-webkit-transform .3s ease-out'),
                'x' === t
                  ? (i = 'translateX(' + r + 'px) translateZ(0)')
                  : 'y' === t && (i = 'translateY(' + r + 'px) translateZ(0)'),
                a.removeEventListener('transitionend', h),
                a.removeEventListener('webkitTransitionEnd', h),
                (h = () => x(e, t)),
                a.addEventListener('transitionend', h),
                a.addEventListener('webkitTransitionEnd', h),
                'x' === t
                  ? (n.style.overflowX = 'hidden')
                  : 'y' === t && (n.style.overflowY = 'hidden'),
                (a.style.transform = i),
                (a.style.webkitTransform = i)
            }
          }
          function _(e) {
            var n = e.target
            i('scroll', e, {
              scrollLeft: n.scrollLeft,
              scrollTop: n.scrollTop,
              scrollHeight: n.scrollHeight,
              scrollWidth: n.scrollWidth,
              deltaX: t.lastScrollLeft - n.scrollLeft,
              deltaY: t.lastScrollTop - n.scrollTop,
            }),
              p.value &&
                (n.scrollTop <= v.value &&
                  t.lastScrollTop - n.scrollTop > 0 &&
                  e.timeStamp - t.lastScrollToUpperTime > 200 &&
                  (i('scrolltoupper', e, { direction: 'top' }),
                  (t.lastScrollToUpperTime = e.timeStamp)),
                n.scrollTop + n.offsetHeight + g.value >= n.scrollHeight &&
                  t.lastScrollTop - n.scrollTop < 0 &&
                  e.timeStamp - t.lastScrollToLowerTime > 200 &&
                  (i('scrolltolower', e, { direction: 'bottom' }),
                  (t.lastScrollToLowerTime = e.timeStamp))),
              f.value &&
                (n.scrollLeft <= v.value &&
                  t.lastScrollLeft - n.scrollLeft > 0 &&
                  e.timeStamp - t.lastScrollToUpperTime > 200 &&
                  (i('scrolltoupper', e, { direction: 'left' }),
                  (t.lastScrollToUpperTime = e.timeStamp)),
                n.scrollLeft + n.offsetWidth + g.value >= n.scrollWidth &&
                  t.lastScrollLeft - n.scrollLeft < 0 &&
                  e.timeStamp - t.lastScrollToLowerTime > 200 &&
                  (i('scrolltolower', e, { direction: 'right' }),
                  (t.lastScrollToLowerTime = e.timeStamp))),
              (t.lastScrollTop = n.scrollTop),
              (t.lastScrollLeft = n.scrollLeft)
          }
          function y(t) {
            p.value && (e.scrollWithAnimation ? m(t, 'y') : (o.value.scrollTop = t))
          }
          function b(t) {
            f.value && (e.scrollWithAnimation ? m(t, 'x') : (o.value.scrollLeft = t))
          }
          function w(t) {
            if (t) {
              if (!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(t))
                return void console.error('id error: scroll-into-view='.concat(t))
              var n = a.value.querySelector('#' + t)
              if (n) {
                var r = o.value.getBoundingClientRect(),
                  i = n.getBoundingClientRect()
                if (f.value) {
                  var s = i.left - r.left,
                    l = o.value.scrollLeft + s
                  e.scrollWithAnimation ? m(l, 'x') : (o.value.scrollLeft = l)
                }
                if (p.value) {
                  var u = i.top - r.top,
                    c = o.value.scrollTop + u
                  e.scrollWithAnimation ? m(c, 'y') : (o.value.scrollTop = c)
                }
              }
            }
          }
          function x(e, t) {
            ;(s.value.style.transition = ''),
              (s.value.style.webkitTransition = ''),
              (s.value.style.transform = ''),
              (s.value.style.webkitTransform = '')
            var n = o.value
            'x' === t
              ? ((n.style.overflowX = f.value ? 'auto' : 'hidden'), (n.scrollLeft = e))
              : 'y' === t && ((n.style.overflowY = p.value ? 'auto' : 'hidden'), (n.scrollTop = e)),
              s.value.removeEventListener('transitionend', h),
              s.value.removeEventListener('webkitTransitionEnd', h)
          }
          function S(n) {
            if (e.refresherEnabled) {
              switch (n) {
                case 'refreshing':
                  ;(t.refresherHeight = e.refresherThreshold),
                    u ||
                      ((u = !0),
                      i(
                        'refresherpulling',
                        {},
                        { deltaY: t.refresherHeight, dy: t.refresherHeight },
                      ),
                      i('refresherrefresh', {}, { dy: C.y - k.y }),
                      l('update:refresherTriggered', !0))
                  break
                case 'restore':
                case 'refresherabort':
                  ;(u = !1),
                    (t.refresherHeight = c = 0),
                    'restore' === n && ((d = !1), i('refresherrestore', {}, { dy: C.y - k.y })),
                    'refresherabort' === n &&
                      d &&
                      ((d = !1), i('refresherabort', {}, { dy: C.y - k.y }))
              }
              t.refreshState = n
            }
          }
          var k = { x: 0, y: 0 },
            C = { x: 0, y: e.refresherThreshold }
          return (
            is(() => {
              yo(() => {
                y(n.value), b(r.value)
              }),
                w(e.scrollIntoView)
              var a = function (e) {
                  e.preventDefault(), e.stopPropagation(), _(e)
                },
                s = null,
                l = function (n) {
                  if (null !== k) {
                    var r = n.touches[0].pageX,
                      a = n.touches[0].pageY,
                      l = o.value
                    if (Math.abs(r - k.x) > Math.abs(a - k.y))
                      if (f.value) {
                        if (0 === l.scrollLeft && r > k.x) return void (s = !1)
                        if (l.scrollWidth === l.offsetWidth + l.scrollLeft && r < k.x)
                          return void (s = !1)
                        s = !0
                      } else s = !1
                    else if (p.value)
                      if (0 === l.scrollTop && a > k.y)
                        (s = !1), e.refresherEnabled && !1 !== n.cancelable && n.preventDefault()
                      else {
                        if (l.scrollHeight === l.offsetHeight + l.scrollTop && a < k.y)
                          return void (s = !1)
                        s = !0
                      }
                    else s = !1
                    if (
                      (s && n.stopPropagation(),
                      0 === l.scrollTop && 1 === n.touches.length && S('pulling'),
                      e.refresherEnabled && 'pulling' === t.refreshState)
                    ) {
                      var h = a - k.y
                      0 === c && (c = a),
                        u
                          ? ((t.refresherHeight = h + e.refresherThreshold), (d = !1))
                          : ((t.refresherHeight = a - c),
                            t.refresherHeight > 0 &&
                              ((d = !0), i('refresherpulling', n, { deltaY: h, dy: h })))
                    }
                  }
                },
                h = function (e) {
                  1 === e.touches.length &&
                    ($g({ disable: !0 }), (k = { x: e.touches[0].pageX, y: e.touches[0].pageY }))
                },
                v = function (n) {
                  ;(C = { x: n.changedTouches[0].pageX, y: n.changedTouches[0].pageY }),
                    $g({ disable: !1 }),
                    t.refresherHeight >= e.refresherThreshold
                      ? S('refreshing')
                      : S('refresherabort'),
                    (k = { x: 0, y: 0 }),
                    (C = { x: 0, y: e.refresherThreshold })
                }
              o.value.addEventListener('touchstart', h, Bm),
                o.value.addEventListener('touchmove', l, yr(!1)),
                o.value.addEventListener('scroll', a, yr(!1)),
                o.value.addEventListener('touchend', v, Bm),
                Vg(),
                ss(() => {
                  o.value.removeEventListener('touchstart', h),
                    o.value.removeEventListener('touchmove', l),
                    o.value.removeEventListener('scroll', a),
                    o.value.removeEventListener('touchend', v)
                })
            }),
            Ko(() => {
              p.value && (o.value.scrollTop = t.lastScrollTop),
                f.value && (o.value.scrollLeft = t.lastScrollLeft)
            }),
            jo(n, (e) => {
              y(e)
            }),
            jo(r, (e) => {
              b(e)
            }),
            jo(
              () => e.scrollIntoView,
              (e) => {
                w(e)
              },
            ),
            jo(
              () => e.refresherTriggered,
              (e) => {
                !0 === e ? S('refreshing') : !1 === e && S('restore')
              },
            ),
            { realScrollX: f, realScrollY: p, _scrollTopChanged: y, _scrollLeftChanged: b }
          )
        })(e, c, d, h, u, a, o, l, n),
        m = ql(() => {
          var e = ''
          return (
            f.value ? (e += 'overflow-x:auto;') : (e += 'overflow-x:hidden;'),
            p.value ? (e += 'overflow-y:auto;') : (e += 'overflow-y:hidden;'),
            e
          )
        }),
        _ = ql(() => {
          var t = 'uni-scroll-view'
          return !1 === e.showScrollbar && (t += ' uni-scroll-view-scrollbar-hidden'), t
        })
      return (
        i({ $getMain: () => o.value }),
        () => {
          var {
              refresherEnabled: t,
              refresherBackground: n,
              refresherDefaultStyle: i,
              refresherThreshold: u,
            } = e,
            { refresherHeight: d, refreshState: h } = c
          return gl(
            'uni-scroll-view',
            { ref: a },
            [
              gl(
                'div',
                { ref: s, class: 'uni-scroll-view' },
                [
                  gl(
                    'div',
                    { ref: o, style: m.value, class: _.value },
                    [
                      t
                        ? gl(
                            Dm,
                            {
                              refreshState: h,
                              refresherHeight: d,
                              refresherThreshold: u,
                              refresherDefaultStyle: i,
                              refresherBackground: n,
                            },
                            { default: () => ['none' == i ? r.refresher && r.refresher() : null] },
                            8,
                            [
                              'refreshState',
                              'refresherHeight',
                              'refresherThreshold',
                              'refresherDefaultStyle',
                              'refresherBackground',
                            ],
                          )
                        : null,
                      gl(
                        'div',
                        { ref: l, class: 'uni-scroll-view-content' },
                        [r.default && r.default()],
                        512,
                      ),
                    ],
                    6,
                  ),
                ],
                512,
              ),
            ],
            512,
          )
        }
      )
    },
  })
  const Fm = Zp({
    name: 'Slider',
    props: {
      name: { type: String, default: '' },
      min: { type: [Number, String], default: 0 },
      max: { type: [Number, String], default: 100 },
      value: { type: [Number, String], default: 0 },
      step: { type: [Number, String], default: 1 },
      disabled: { type: [Boolean, String], default: !1 },
      color: { type: String, default: '#e9e9e9' },
      backgroundColor: { type: String, default: '#e9e9e9' },
      activeColor: { type: String, default: '#007aff' },
      selectedColor: { type: String, default: '#007aff' },
      blockColor: { type: String, default: '#ffffff' },
      blockSize: { type: [Number, String], default: 28 },
      showValue: { type: [Boolean, String], default: !1 },
    },
    emits: ['changing', 'change'],
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = eo(null),
        a = eo(null),
        o = eo(Number(e.value))
      jo(
        () => e.value,
        (e) => {
          o.value = Number(e)
        },
      )
      var s = Jp(r, n),
        l = (function (e, t) {
          var n = () => qm(t.value, e.min, e.max),
            r = () =>
              '#e9e9e9' !== e.backgroundColor
                ? e.backgroundColor
                : '#007aff' !== e.color
                  ? e.color
                  : '#007aff',
            i = () =>
              '#007aff' !== e.activeColor
                ? e.activeColor
                : '#e9e9e9' !== e.selectedColor
                  ? e.selectedColor
                  : '#e9e9e9',
            a = {
              setBgColor: ql(() => ({ backgroundColor: r() })),
              setBlockBg: ql(() => ({ left: n() })),
              setActiveColor: ql(() => ({ backgroundColor: i(), width: n() })),
              setBlockStyle: ql(() => ({
                width: e.blockSize + 'px',
                height: e.blockSize + 'px',
                marginLeft: -e.blockSize / 2 + 'px',
                marginTop: -e.blockSize / 2 + 'px',
                left: n(),
                backgroundColor: e.blockColor,
              })),
            }
          return a
        })(e, o),
        { _onClick: u, _onTrack: c } = (function (e, t, n, r, i) {
          var a = (n) => {
              e.disabled || (s(n), i('change', n, { value: t.value }))
            },
            o = (t) => {
              var n = Number(e.max),
                r = Number(e.min),
                i = Number(e.step)
              return t < r ? r : t > n ? n : jm.mul.call(Math.round((t - r) / i), i) + r
            },
            s = (i) => {
              var a = Number(e.max),
                s = Number(e.min),
                l = r.value,
                u = getComputedStyle(l, null).marginLeft,
                c = l.offsetWidth
              c += parseInt(u)
              var d = n.value,
                h = d.offsetWidth - (e.showValue ? c : 0),
                f = d.getBoundingClientRect().left,
                p = ((i.x - f) * (a - s)) / h + s
              t.value = o(p)
            },
            l = (n) => {
              if (!e.disabled)
                return 'move' === n.detail.state
                  ? (s({ x: n.detail.x }), i('changing', n, { value: t.value }), !1)
                  : 'end' === n.detail.state && i('change', n, { value: t.value })
            },
            u = Ps(tv, !1)
          if (u) {
            var c = {
              reset: () => (t.value = Number(e.min)),
              submit: () => {
                var n = ['', null]
                return '' !== e.name && ((n[0] = e.name), (n[1] = t.value)), n
              },
            }
            u.addField(c),
              ss(() => {
                u.removeField(c)
              })
          }
          return { _onClick: a, _onTrack: l }
        })(e, o, r, i, s)
      return (
        is(() => {
          Gg(a.value, c)
        }),
        () => {
          var { setBgColor: t, setBlockBg: n, setActiveColor: s, setBlockStyle: c } = l
          return gl(
            'uni-slider',
            { ref: r, onClick: Kp(u) },
            [
              gl('div', { class: 'uni-slider-wrapper' }, [
                gl('div', { class: 'uni-slider-tap-area' }, [
                  gl(
                    'div',
                    { style: t.value, class: 'uni-slider-handle-wrapper' },
                    [
                      gl('div', { ref: a, style: n.value, class: 'uni-slider-handle' }, null, 4),
                      gl('div', { style: c.value, class: 'uni-slider-thumb' }, null, 4),
                      gl('div', { style: s.value, class: 'uni-slider-track' }, null, 4),
                    ],
                    4,
                  ),
                ]),
                Uo(gl('span', { ref: i, class: 'uni-slider-value' }, [o.value], 512), [
                  [Zl, e.showValue],
                ]),
              ]),
              gl('slot', null, null),
            ],
            8,
            ['onClick'],
          )
        }
      )
    },
  })
  var qm = (e, t, n) => ((n = Number(n)), (100 * (e - (t = Number(t)))) / (n - t) + '%')
  var jm = {
    mul: function (e) {
      var t = 0,
        n = this.toString(),
        r = e.toString()
      try {
        t += n.split('.')[1].length
      } catch (i) {}
      try {
        t += r.split('.')[1].length
      } catch (i) {}
      return (Number(n.replace('.', '')) * Number(r.replace('.', ''))) / Math.pow(10, t)
    },
  }
  function Vm(e, t, n, r, i, a) {
    function o() {
      u && (clearTimeout(u), (u = null))
    }
    var s,
      l,
      u = null,
      c = !0,
      d = 0,
      h = 1,
      f = null,
      p = !1,
      v = 0,
      g = '',
      m = ql(() => n.value.length > t.displayMultipleItems),
      _ = ql(() => e.circular && m.value)
    function y(i) {
      ;(Math.floor(2 * d) === Math.floor(2 * i) && Math.ceil(2 * d) === Math.ceil(2 * i)) ||
        (_.value &&
          (function (r) {
            if (!c)
              for (
                var i = n.value, a = i.length, o = r + t.displayMultipleItems, s = 0;
                s < a;
                s++
              ) {
                var l = i[s],
                  u = Math.floor(r / a) * a + s,
                  d = u + a,
                  h = u - a,
                  f = Math.max(r - (u + 1), u - o, 0),
                  p = Math.max(r - (d + 1), d - o, 0),
                  v = Math.max(r - (h + 1), h - o, 0),
                  g = Math.min(f, p, v),
                  m = [u, d, h][[f, p, v].indexOf(g)]
                l.updatePosition(m, e.vertical)
              }
          })(i))
      var o =
          'translate(' +
          (e.vertical ? '0' : 100 * -i * h + '%') +
          ', ' +
          (e.vertical ? 100 * -i * h + '%' : '0') +
          ') translateZ(0)',
        l = r.value
      if ((l && ((l.style.webkitTransform = o), (l.style.transform = o)), (d = i), !s)) {
        if (i % 1 == 0) return
        s = i
      }
      i -= Math.floor(s)
      var u = n.value
      i <= -(u.length - 1) ? (i += u.length) : i >= u.length && (i -= u.length),
        (i = s % 1 > 0.5 || s < 0 ? i - 1 : i),
        a(
          'transition',
          {},
          { dx: e.vertical ? 0 : i * l.offsetWidth, dy: e.vertical ? i * l.offsetHeight : 0 },
        )
    }
    function b(e) {
      var r = n.value.length
      if (!r) return -1
      var i = ((Math.round(e) % r) + r) % r
      if (_.value) {
        if (r <= t.displayMultipleItems) return 0
      } else if (i > r - t.displayMultipleItems) return r - t.displayMultipleItems
      return i
    }
    function w() {
      f = null
    }
    function x() {
      if (f) {
        var e = f,
          r = e.toPos,
          i = e.acc,
          o = e.endTime,
          u = e.source,
          c = o - Date.now()
        if (c <= 0) {
          y(r), (f = null), (p = !1), (s = null)
          var d = n.value[t.current]
          if (d) {
            var h = d.getItemId()
            a('animationfinish', {}, { current: t.current, currentItemId: h, source: u })
          }
        } else {
          y(r + (i * c * c) / 2), (l = requestAnimationFrame(x))
        }
      } else p = !1
    }
    function S(e, r, i) {
      w()
      var a = t.duration,
        o = n.value.length,
        s = d
      if (_.value)
        if (i < 0) {
          for (; s < e; ) s += o
          for (; s - o > e; ) s -= o
        } else if (i > 0) {
          for (; s > e; ) s -= o
          for (; s + o < e; ) s += o
          s + o - e < e - s && (s += o)
        } else {
          for (; s + o < e; ) s += o
          for (; s - o > e; ) s -= o
          s + o - e < e - s && (s += o)
        }
      else 'click' === r && (e = e + t.displayMultipleItems - 1 < o ? e : 0)
      ;(f = { toPos: e, acc: (2 * (s - e)) / (a * a), endTime: Date.now() + a, source: r }),
        p || ((p = !0), (l = requestAnimationFrame(x)))
    }
    function k() {
      o()
      var e = n.value,
        r = function () {
          ;(u = null),
            (g = 'autoplay'),
            _.value
              ? (t.current = b(t.current + 1))
              : (t.current = t.current + t.displayMultipleItems < e.length ? t.current + 1 : 0),
            S(t.current, 'autoplay', _.value ? 1 : 0),
            (u = setTimeout(r, t.interval))
        }
      c || e.length <= t.displayMultipleItems || (u = setTimeout(r, t.interval))
    }
    function C(e) {
      e ? k() : o()
    }
    return (
      jo([() => e.current, () => e.currentItemId, () => [...n.value]], () => {
        var r = -1
        if (e.currentItemId)
          for (var i = 0, a = n.value; i < a.length; i++) {
            if (a[i].getItemId() === e.currentItemId) {
              r = i
              break
            }
          }
        r < 0 && (r = Math.round(e.current) || 0),
          (r = r < 0 ? 0 : r),
          t.current !== r && ((g = ''), (t.current = r))
      }),
      jo(
        [() => e.vertical, () => _.value, () => t.displayMultipleItems, () => [...n.value]],
        function () {
          o(), f && (y(f.toPos), (f = null))
          for (var i = n.value, a = 0; a < i.length; a++) i[a].updatePosition(a, e.vertical)
          h = 1
          var s = r.value
          if (1 === t.displayMultipleItems && i.length) {
            var l = i[0].getBoundingClientRect(),
              u = s.getBoundingClientRect()
            ;((h = l.width / u.width) > 0 && h < 1) || (h = 1)
          }
          var p = d
          d = -2
          var g = t.current
          g >= 0
            ? ((c = !1), t.userTracking ? (y(p + g - v), (v = g)) : (y(g), e.autoplay && k()))
            : ((c = !0), y(-t.displayMultipleItems - 1))
        },
      ),
      jo(
        () => t.interval,
        () => {
          u && (o(), k())
        },
      ),
      jo(
        () => t.current,
        (e, r) => {
          !(function (e, r) {
            var i = g
            g = ''
            var o = n.value
            if (!i) {
              var s = o.length
              S(e, '', _.value && r + ((s - e) % s) > s / 2 ? 1 : 0)
            }
            var l = o[e]
            if (l) {
              var u = (t.currentItemId = l.getItemId())
              a('change', {}, { current: t.current, currentItemId: u, source: i })
            }
          })(e, r),
            i('update:current', e)
        },
      ),
      jo(
        () => t.currentItemId,
        (e) => {
          i('update:currentItemId', e)
        },
      ),
      jo(() => e.autoplay && !t.userTracking, C),
      C(e.autoplay && !t.userTracking),
      is(() => {
        var i = !1,
          a = 0,
          s = 0
        function l(e) {
          t.userTracking = !1
          var n = a / Math.abs(a),
            r = 0
          !e && Math.abs(a) > 0.2 && (r = 0.5 * n)
          var i = b(d + r)
          e
            ? y(v)
            : ((g = 'touch'),
              (t.current = i),
              S(i, 'touch', 0 !== r ? r : 0 === i && _.value && d >= 1 ? 1 : 0))
        }
        Gg(r.value, (u) => {
          if (!e.disableTouch && !c) {
            if ('start' === u.detail.state)
              return (
                (t.userTracking = !0), (i = !1), o(), (v = d), (a = 0), (s = Date.now()), void w()
              )
            if ('end' === u.detail.state) return l(!1)
            if ('cancel' === u.detail.state) return l(!0)
            if (t.userTracking) {
              if (!i) {
                i = !0
                var h = Math.abs(u.detail.dx),
                  f = Math.abs(u.detail.dy)
                if (
                  (((h >= f && e.vertical) || (h <= f && !e.vertical)) && (t.userTracking = !1),
                  !t.userTracking)
                )
                  return void (e.autoplay && k())
              }
              return (
                (function (i) {
                  var o = s
                  s = Date.now()
                  var l = n.value.length - t.displayMultipleItems
                  function u(e) {
                    return 0.5 - 0.25 / (e + 0.5)
                  }
                  function c(e, t) {
                    var n = v + e
                    ;(a = 0.6 * a + 0.4 * t),
                      _.value ||
                        ((n < 0 || n > l) &&
                          (n < 0 ? (n = -u(-n)) : n > l && (n = l + u(n - l)), (a = 0))),
                      y(n)
                  }
                  var d = s - o || 1,
                    h = r.value
                  e.vertical
                    ? c(-i.dy / h.offsetHeight, -i.ddy / d)
                    : c(-i.dx / h.offsetWidth, -i.ddx / d)
                })(u.detail),
                !1
              )
            }
          }
        })
      }),
      ls(() => {
        o(), cancelAnimationFrame(l)
      }),
      {
        onSwiperDotClick: function (e) {
          S((t.current = e), (g = 'click'), _.value ? 1 : 0)
        },
        circularEnabled: _,
        swiperEnabled: m,
      }
    )
  }
  const $m = Zp({
    name: 'Swiper',
    props: {
      indicatorDots: { type: [Boolean, String], default: !1 },
      vertical: { type: [Boolean, String], default: !1 },
      autoplay: { type: [Boolean, String], default: !1 },
      circular: { type: [Boolean, String], default: !1 },
      interval: { type: [Number, String], default: 5e3 },
      duration: { type: [Number, String], default: 500 },
      current: { type: [Number, String], default: 0 },
      indicatorColor: { type: String, default: '' },
      indicatorActiveColor: { type: String, default: '' },
      previousMargin: { type: String, default: '' },
      nextMargin: { type: String, default: '' },
      currentItemId: { type: String, default: '' },
      skipHiddenItemLayout: { type: [Boolean, String], default: !1 },
      displayMultipleItems: { type: [Number, String], default: 1 },
      disableTouch: { type: [Boolean, String], default: !1 },
      navigation: { type: [Boolean, String], default: !1 },
      navigationColor: { type: String, default: '#fff' },
      navigationActiveColor: { type: String, default: 'rgba(53, 53, 53, 0.6)' },
    },
    emits: ['change', 'transition', 'animationfinish', 'update:current', 'update:currentItemId'],
    setup(e, t) {
      var { slots: n, emit: r } = t,
        i = eo(null),
        a = Jp(i, r),
        o = eo(null),
        s = eo(null),
        l = (function (e) {
          return Fa({
            interval: ql(() => {
              var t = Number(e.interval)
              return isNaN(t) ? 5e3 : t
            }),
            duration: ql(() => {
              var t = Number(e.duration)
              return isNaN(t) ? 500 : t
            }),
            displayMultipleItems: ql(() => {
              var t = Math.round(e.displayMultipleItems)
              return isNaN(t) ? 1 : t
            }),
            current: Math.round(e.current) || 0,
            currentItemId: e.currentItemId,
            userTracking: !1,
          })
        })(e),
        u = ql(() => {
          var t = {}
          return (
            (e.nextMargin || e.previousMargin) &&
              (t = e.vertical
                ? { left: 0, right: 0, top: Ou(e.previousMargin, !0), bottom: Ou(e.nextMargin, !0) }
                : {
                    top: 0,
                    bottom: 0,
                    left: Ou(e.previousMargin, !0),
                    right: Ou(e.nextMargin, !0),
                  }),
            t
          )
        }),
        c = ql(() => {
          var t = Math.abs(100 / l.displayMultipleItems) + '%'
          return { width: e.vertical ? '100%' : t, height: e.vertical ? t : '100%' }
        }),
        d = [],
        h = [],
        f = eo([])
      function p() {
        for (
          var e = [],
            t = function (t) {
              var n = d[t]
              n instanceof Element || (n = n.el)
              var r = h.find((e) => n === e.rootRef.value)
              r && e.push(Ya(r))
            },
            n = 0;
          n < d.length;
          n++
        )
          t(n)
        f.value = e
      }
      Hg(() => {
        ;(d = s.value.children), p()
      })
      Is('addSwiperContext', function (e) {
        h.push(e), p()
      })
      Is('removeSwiperContext', function (e) {
        var t = h.indexOf(e)
        t >= 0 && (h.splice(t, 1), p())
      })
      var { onSwiperDotClick: v, circularEnabled: g, swiperEnabled: m } = Vm(e, l, f, s, r, a)
      return () => {
        var t = n.default && n.default()
        return gl(
          'uni-swiper',
          { ref: i },
          [
            gl(
              'div',
              { ref: o, class: 'uni-swiper-wrapper' },
              [
                gl(
                  'div',
                  { class: 'uni-swiper-slides', style: u.value },
                  [gl('div', { ref: s, class: 'uni-swiper-slide-frame', style: c.value }, [t], 4)],
                  4,
                ),
                e.indicatorDots &&
                  gl(
                    'div',
                    {
                      class: [
                        'uni-swiper-dots',
                        e.vertical ? 'uni-swiper-dots-vertical' : 'uni-swiper-dots-horizontal',
                      ],
                    },
                    [
                      f.value.map((t, n, r) =>
                        gl(
                          'div',
                          {
                            onClick: () => v(n),
                            class: {
                              'uni-swiper-dot': !0,
                              'uni-swiper-dot-active':
                                (n < l.current + l.displayMultipleItems && n >= l.current) ||
                                n < l.current + l.displayMultipleItems - r.length,
                            },
                            style: {
                              background:
                                n === l.current ? e.indicatorActiveColor : e.indicatorColor,
                            },
                          },
                          null,
                          14,
                          ['onClick'],
                        ),
                      ),
                    ],
                    2,
                  ),
                null,
              ],
              512,
            ),
          ],
          512,
        )
      }
    },
  })
  const Hm = Zp({
    name: 'SwiperItem',
    props: { itemId: { type: String, default: '' } },
    setup(e, t) {
      var { slots: n } = t,
        r = eo(null),
        i = {
          rootRef: r,
          getItemId: () => e.itemId,
          getBoundingClientRect: () => r.value.getBoundingClientRect(),
          updatePosition(e, t) {
            var n = t ? '0' : 100 * e + '%',
              i = t ? 100 * e + '%' : '0',
              a = r.value,
              o = 'translate('.concat(n, ',').concat(i, ') translateZ(0)')
            a && ((a.style.webkitTransform = o), (a.style.transform = o))
          },
        }
      return (
        is(() => {
          var e = Ps('addSwiperContext')
          e && e(i)
        }),
        ls(() => {
          var e = Ps('removeSwiperContext')
          e && e(i)
        }),
        () =>
          gl(
            'uni-swiper-item',
            { ref: r, style: { position: 'absolute', width: '100%', height: '100%' } },
            [n.default && n.default()],
            512,
          )
      )
    },
  })
  const Wm = Zp({
    name: 'Switch',
    props: {
      name: { type: String, default: '' },
      checked: { type: [Boolean, String], default: !1 },
      type: { type: String, default: 'switch' },
      id: { type: String, default: '' },
      disabled: { type: [Boolean, String], default: !1 },
      color: { type: String, default: '' },
    },
    emits: ['change'],
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = eo(e.checked),
        a = (function (e, t) {
          var n = Ps(tv, !1),
            r = Ps(iv, !1),
            i = {
              submit: () => {
                var n = ['', null]
                return e.name && ((n[0] = e.name), (n[1] = t.value)), n
              },
              reset: () => {
                t.value = !1
              },
            }
          n &&
            (n.addField(i),
            ls(() => {
              n.removeField(i)
            }))
          return r
        })(e, i),
        o = Jp(r, n)
      jo(
        () => e.checked,
        (e) => {
          i.value = e
        },
      )
      var s = (t) => {
        e.disabled || ((i.value = !i.value), o('change', t, { value: i.value }))
      }
      return (
        a &&
          (a.addHandler(s),
          ss(() => {
            a.removeHandler(s)
          })),
        ov(e, { 'label-click': s }),
        () => {
          var t,
            { color: n, type: a } = e,
            o = ev(e, 'disabled'),
            l = {}
          return (
            n && i.value && ((l.backgroundColor = n), (l.borderColor = n)),
            (t = i.value),
            gl(
              'uni-switch',
              xl({ id: e.id, ref: r }, o, { onClick: s }),
              [
                gl('div', { class: 'uni-switch-wrapper' }, [
                  Uo(
                    gl(
                      'div',
                      {
                        class: ['uni-switch-input', [i.value ? 'uni-switch-input-checked' : '']],
                        style: l,
                      },
                      null,
                      6,
                    ),
                    [[Zl, 'switch' === a]],
                  ),
                  Uo(
                    gl('div', { class: 'uni-checkbox-input' }, [t ? Pu(Nu, e.color, 22) : ''], 512),
                    [[Zl, 'checkbox' === a]],
                  ),
                ]),
              ],
              16,
              ['id', 'onClick'],
            )
          )
        }
      )
    },
  })
  var Um = { ensp: ' ', emsp: ' ', nbsp: ' ' }
  function Ym(e, t) {
    return (function (e, t) {
      var { space: n, decode: r } = t,
        i = '',
        a = !1
      for (var o of e)
        n && Um[n] && ' ' === o && (o = Um[n]),
          a
            ? ((i += 'n' === o ? Jn : '\\' === o ? '\\' : '\\' + o), (a = !1))
            : '\\' === o
              ? (a = !0)
              : (i += o)
      return r
        ? i
            .replace(/&nbsp;/g, Um.nbsp)
            .replace(/&ensp;/g, Um.ensp)
            .replace(/&emsp;/g, Um.emsp)
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
        : i
    })(e, t).split(Jn)
  }
  function Xm(e, t, n, r, i, a, o) {
    try {
      var s = e[a](o),
        l = s.value
    } catch (u) {
      return void n(u)
    }
    s.done ? t(l) : Promise.resolve(l).then(r, i)
  }
  function Zm(e) {
    return function () {
      var t = this,
        n = arguments
      return new Promise(function (r, i) {
        var a = e.apply(t, n)
        function o(e) {
          Xm(a, r, i, o, s, 'next', e)
        }
        function s(e) {
          Xm(a, r, i, o, s, 'throw', e)
        }
        o(void 0)
      })
    }
  }
  function Gm(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ('object' != typeof e || !e) return e
          var n = e[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(e, t || 'default')
            if ('object' != typeof r) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' == typeof t ? t : t + ''
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    )
  }
  function Km(e, t) {
    var n = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e)
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
  }
  function Jm(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {}
      t % 2
        ? Km(Object(n), !0).forEach(function (t) {
            Gm(e, t, n[t])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Km(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
    }
    return e
  }
  var Qm = on({}, Mg, {
      placeholderClass: { type: String, default: 'input-placeholder' },
      autoHeight: { type: [Boolean, String], default: !1 },
      confirmType: {
        type: String,
        default: 'return',
        validator: (e) => t_.concat('return').includes(e),
      },
    }),
    e_ = !1,
    t_ = ['done', 'go', 'next', 'search', 'send']
  const n_ = Zp({
    name: 'Textarea',
    props: Qm,
    emits: ['confirm', 'linechange', ...Eg],
    setup(e, t) {
      var n,
        { emit: r, expose: i } = t,
        a = eo(null),
        o = eo(null),
        {
          fieldRef: s,
          state: l,
          scopedAttrsState: u,
          fixDisabledColor: c,
          trigger: d,
        } = zg(e, a, r),
        h = ql(() => l.value.split(Jn)),
        f = ql(() => t_.includes(e.confirmType)),
        p = eo(0),
        v = eo(null)
      function g(e) {
        var { height: t } = e
        p.value = t
      }
      function m(e) {
        'Enter' === e.key && f.value && e.preventDefault()
      }
      function _(t) {
        if ('Enter' === t.key && f.value) {
          !(function (e) {
            d('confirm', e, { value: l.value })
          })(t)
          var n = t.target
          !e.confirmHold && n.blur()
        }
      }
      return (
        jo(
          () => p.value,
          (t) => {
            var n = a.value,
              r = v.value,
              i = o.value,
              s = parseFloat(getComputedStyle(n).lineHeight)
            isNaN(s) && (s = r.offsetHeight)
            var l = Math.round(t / s)
            d(
              'linechange',
              {},
              { height: t, heightRpx: (750 / window.innerWidth) * t, lineCount: l },
            ),
              e.autoHeight && ((n.style.height = 'auto'), (i.style.height = t + 'px'))
          },
        ),
        (n = '(prefers-color-scheme: dark)'),
        (e_ =
          0 === String(navigator.platform).indexOf('iP') &&
          0 === String(navigator.vendor).indexOf('Apple') &&
          window.matchMedia(n).media !== n),
        i({
          $triggerInput: (e) => {
            r('update:modelValue', e.value), r('update:value', e.value), (l.value = e.value)
          },
        }),
        () => {
          var t =
            e.disabled && c
              ? gl(
                  'textarea',
                  {
                    key: 'disabled-textarea',
                    ref: s,
                    value: l.value,
                    tabindex: '-1',
                    readonly: !!e.disabled,
                    maxlength: l.maxlength,
                    class: { 'uni-textarea-textarea': !0, 'uni-textarea-textarea-fix-margin': e_ },
                    style: Jm(
                      { overflowY: e.autoHeight ? 'hidden' : 'auto' },
                      e.cursorColor && { caretColor: e.cursorColor },
                    ),
                    onFocus: (e) => e.target.blur(),
                  },
                  null,
                  46,
                  ['value', 'readonly', 'maxlength', 'onFocus'],
                )
              : gl(
                  'textarea',
                  {
                    key: 'textarea',
                    ref: s,
                    value: l.value,
                    disabled: !!e.disabled,
                    maxlength: l.maxlength,
                    enterkeyhint: e.confirmType,
                    inputmode: e.inputmode,
                    class: { 'uni-textarea-textarea': !0, 'uni-textarea-textarea-fix-margin': e_ },
                    style: Jm(
                      { overflowY: e.autoHeight ? 'hidden' : 'auto' },
                      e.cursorColor && { caretColor: e.cursorColor },
                    ),
                    onKeydown: m,
                    onKeyup: _,
                  },
                  null,
                  46,
                  [
                    'value',
                    'disabled',
                    'maxlength',
                    'enterkeyhint',
                    'inputmode',
                    'onKeydown',
                    'onKeyup',
                  ],
                )
          return gl(
            'uni-textarea',
            { ref: a },
            [
              gl(
                'div',
                { ref: o, class: 'uni-textarea-wrapper' },
                [
                  Uo(
                    gl(
                      'div',
                      xl(u.attrs, {
                        style: e.placeholderStyle,
                        class: ['uni-textarea-placeholder', e.placeholderClass],
                      }),
                      [e.placeholder],
                      16,
                    ),
                    [[Zl, !l.value.length]],
                  ),
                  gl('div', { ref: v, class: 'uni-textarea-line' }, [' '], 512),
                  gl('div', { class: 'uni-textarea-compute' }, [
                    h.value.map((e) => gl('div', null, [e.trim() ? e : '.'])),
                    gl(cv, { initial: !0, onResize: g }, null, 8, ['initial', 'onResize']),
                  ]),
                  'search' === e.confirmType
                    ? gl(
                        'form',
                        { action: '', onSubmit: () => !1, class: 'uni-input-form' },
                        [t],
                        40,
                        ['onSubmit'],
                      )
                    : t,
                ],
                512,
              ),
            ],
            512,
          )
        }
      )
    },
  })
  function r_(e, t) {
    if ((t || (t = e.id), t)) return e.$options.name.toLowerCase() + '.' + t
  }
  function i_(e, t, n) {
    e &&
      bi(Bu(), e, (e, n) => {
        var { type: r, data: i } = e
        t(r, i, n)
      })
  }
  function a_(e, t) {
    e &&
      (function (e, t) {
        ;(t = yi(e, t)), delete _i[t]
      })(Bu(), e)
  }
  function o_(e, t, n, r) {
    var i = El().proxy
    is(() => {
      i_(t || r_(i), e),
        jo(
          () => i.id,
          (t, n) => {
            i_(r_(i, t), e), a_(n && r_(i, n))
          },
        )
    }),
      ss(() => {
        a_(t || r_(i))
      })
  }
  var s_ = 0
  function l_(e) {
    var t = Du(),
      n = El().proxy,
      r = n.$options.name.toLowerCase(),
      i = e || n.id || 'context'.concat(s_++)
    return (
      is(() => {
        n.$el.__uniContextInfo = { id: i, type: r, page: t }
      }),
      ''.concat(r, '.').concat(i)
    )
  }
  class u_ extends Wp {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, [
        ...Xp.props,
        ...(arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : []),
      ])
    }
    call(e) {
      var t = { animation: this.$props.animation, $el: this.$ }
      e.call(t)
    }
    setAttribute(e, t) {
      return 'animation' === e && (this.$animate = !0), super.setAttribute(e, t)
    }
    update() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
      if (this.$animate)
        return e
          ? this.call(Xp.mounted)
          : void (this.$animate && ((this.$animate = !1), this.call(Xp.watch.animation.handler)))
    }
  }
  var c_ = ['space', 'decode']
  var d_ = ['hover-class', 'hover-stop-propagation', 'hover-start-time', 'hover-stay-time']
  class h_ extends u_ {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, [
        ...d_,
        ...(arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : []),
      ])
    }
    update() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = this.$props['hover-class']
      t && 'none' !== t
        ? (this._hover || (this._hover = new f_(this.$, this.$props)), this._hover.addEvent())
        : this._hover && this._hover.removeEvent(),
        super.update(e)
    }
  }
  class f_ {
    constructor(e, t) {
      ;(this._listening = !1),
        (this._hovering = !1),
        (this._hoverTouch = !1),
        (this.$ = e),
        (this.props = t),
        (this.__hoverTouchStart = this._hoverTouchStart.bind(this)),
        (this.__hoverTouchEnd = this._hoverTouchEnd.bind(this)),
        (this.__hoverTouchCancel = this._hoverTouchCancel.bind(this))
    }
    get hovering() {
      return this._hovering
    }
    set hovering(e) {
      this._hovering = e
      var t = this.props['hover-class'].split(' ').filter(Boolean),
        n = this.$.classList
      e ? this.$.classList.add.apply(n, t) : this.$.classList.remove.apply(n, t)
    }
    addEvent() {
      this._listening ||
        ((this._listening = !0),
        this.$.addEventListener('touchstart', this.__hoverTouchStart),
        this.$.addEventListener('touchend', this.__hoverTouchEnd),
        this.$.addEventListener('touchcancel', this.__hoverTouchCancel))
    }
    removeEvent() {
      this._listening &&
        ((this._listening = !1),
        this.$.removeEventListener('touchstart', this.__hoverTouchStart),
        this.$.removeEventListener('touchend', this.__hoverTouchEnd),
        this.$.removeEventListener('touchcancel', this.__hoverTouchCancel))
    }
    _hoverTouchStart(e) {
      if (!e._hoverPropagationStopped) {
        var t = this.props['hover-class']
        t &&
          'none' !== t &&
          !this.$.disabled &&
          (e.touches.length > 1 ||
            (this.props['hover-stop-propagation'] && (e._hoverPropagationStopped = !0),
            (this._hoverTouch = !0),
            (this._hoverStartTimer = setTimeout(() => {
              ;(this.hovering = !0), this._hoverTouch || this._hoverReset()
            }, this.props['hover-start-time']))))
      }
    }
    _hoverTouchEnd() {
      ;(this._hoverTouch = !1), this.hovering && this._hoverReset()
    }
    _hoverReset() {
      requestAnimationFrame(() => {
        clearTimeout(this._hoverStayTimer),
          (this._hoverStayTimer = setTimeout(() => {
            this.hovering = !1
          }, this.props['hover-stay-time']))
      })
    }
    _hoverTouchCancel() {
      ;(this._hoverTouch = !1), (this.hovering = !1), clearTimeout(this._hoverStartTimer)
    }
  }
  function p_() {
    return plus.navigator.isImmersedStatusbar()
      ? Math.round(
          'iOS' === plus.os.name
            ? plus.navigator.getSafeAreaInsets().top
            : plus.navigator.getStatusbarHeight(),
        )
      : 0
  }
  function v_() {
    var e = plus.webview.currentWebview().getStyle(),
      t = e && e.titleNView
    return t && 'default' === t.type ? Qn + p_() : 0
  }
  var g_ = Symbol('onDraw')
  function m_(e, t) {
    return ql(() => {
      var n = {}
      return (
        Object.keys(e).forEach((r) => {
          if (!t || !t.includes(r)) {
            var i = e[r]
            ;(i = 'src' === r ? bc(i) : i),
              (n[r.replace(/[A-Z]/g, (e) => '-' + e.toLowerCase())] = i)
          }
        }),
        n
      )
    })
  }
  function __(e) {
    var t = Fa({ top: '0px', left: '0px', width: '0px', height: '0px', position: 'static' }),
      n = eo(!1)
    function r() {
      var r = e.value,
        i = r.getBoundingClientRect(),
        a = ['width', 'height']
      ;(n.value = 0 === i.width || 0 === i.height),
        n.value ||
          ((t.position = (function (e) {
            for (var t; e; ) {
              var n = getComputedStyle(e),
                r = n.transform || n.webkitTransform
              ;(t = (!r || 'none' === r) && t),
                (t = 'fixed' === n.position || t),
                (e = e.parentElement)
            }
            return t
          })(r)
            ? 'absolute'
            : 'static'),
          a.push('top', 'left')),
        a.forEach((e) => {
          var n = i[e]
          ;(n =
            'top' === e
              ? n +
                ('static' === t.position
                  ? document.documentElement.scrollTop || document.body.scrollTop || 0
                  : v_())
              : n),
            (t[e] = n + 'px')
        })
    }
    var i = null
    function a() {
      i && cancelAnimationFrame(i),
        (i = requestAnimationFrame(() => {
          ;(i = null), r()
        }))
    }
    window.addEventListener('updateview', a)
    var o = [],
      s = []
    return (
      Is(g_, function (e) {
        o ? o.push(e) : e(t)
      }),
      is(() => {
        r(), s.forEach((e) => e()), (s = null)
      }),
      ss(() => {
        window.removeEventListener('updateview', a)
      }),
      {
        position: t,
        hidden: n,
        onParentReady: function (e) {
          var n = Ps(g_),
            r = (n) => {
              e(n), o.forEach((e) => e(t)), (o = null)
            }
          !(function (e) {
            s ? s.push(e) : e()
          })(() => {
            n
              ? n(r)
              : r({
                  top: '0px',
                  left: '0px',
                  width: Number.MAX_SAFE_INTEGER + 'px',
                  height: Number.MAX_SAFE_INTEGER + 'px',
                  position: 'static',
                })
          })
        },
      }
    )
  }
  const y_ = Zp({
    name: 'Ad',
    props: {
      adpid: { type: [Number, String], default: '' },
      data: { type: Object, default: null },
      dataCount: { type: Number, default: 5 },
      channel: { type: String, default: '' },
    },
    setup(e, t) {
      var n,
        { emit: r } = t,
        i = eo(null),
        a = eo(null),
        o = Jp(i, r),
        s = m_(e, ['id']),
        { position: l, onParentReady: u } = __(a)
      return (
        u(() => {
          function t() {
            var t = { adpid: e.adpid, width: l.width, count: e.dataCount }
            void 0 !== e.channel && (t.ext = { channel: e.channel }),
              UniViewJSBridge.invokeServiceMethod('getAdData', t, (e) => {
                var { code: t, data: r, message: i } = e
                0 === t ? (n.renderingBind(r), o('load', {}, {})) : o('error', {}, { errMsg: i })
              })
          }
          ;(n = plus.ad.createAdView(Object.assign({}, s.value, l))),
            plus.webview.currentWebview().append(n),
            n.setDislikeListener((e) => {
              ;(a.value.style.height = '0'),
                window.dispatchEvent(new CustomEvent('updateview')),
                o('close', {}, e)
            }),
            n.setRenderingListener((e) => {
              0 === e.result
                ? ((a.value.style.height = e.height + 'px'),
                  window.dispatchEvent(new CustomEvent('updateview')))
                : o('error', {}, { errCode: e.result })
            }),
            n.setAdClickedListener(() => {
              o('adclicked', {}, {})
            }),
            jo(
              () => l,
              (e) => n.setStyle(e),
              { deep: !0 },
            ),
            jo(
              () => e.adpid,
              (e) => {
                e && t()
              },
            ),
            jo(
              () => e.data,
              (e) => {
                e && n.renderingBind(e)
              },
            ),
            e.adpid && t()
        }),
        ss(() => {
          n && n.close()
        }),
        () =>
          gl(
            'uni-ad',
            { ref: i },
            [gl('div', { ref: a, class: 'uni-ad-container' }, null, 512)],
            512,
          )
      )
    },
  })
  class b_ extends yp {
    constructor(e, t, n, r, i, a, o) {
      super(e, t, r)
      var s = document.createElement('div')
      ;(s.__vueParent = (function (e) {
        for (; e && e.pid > 0; )
          if ((e = ip(e.pid))) {
            var { __vueParentComponent: t } = e.$
            if (t) return t
          }
        return null
      })(this)),
        (this.$props = Fa({})),
        this.init(a),
        (this.$app = pu(
          (function (e, t) {
            return () => jl(e, t)
          })(n, this.$props),
        )),
        this.$app.mount(s),
        (this.$ = s.firstElementChild),
        (this.$.__id = e),
        o && (this.$holder = this.$.querySelector(o)),
        un(a, 't') && this.setText(a.t || ''),
        a.a && un(a.a, Ar) && Hp(this.$, a.a[Ar]),
        this.insert(r, i),
        So()
    }
    init(e) {
      var { a: t, e: n, w: r } = e
      t &&
        (this.setWxsProps(t),
        Object.keys(t).forEach((e) => {
          this.setAttr(e, t[e])
        })),
        un(e, 's') && this.setAttr('style', e.s),
        n &&
          Object.keys(n).forEach((e) => {
            this.addEvent(e, n[e])
          }),
        r && this.addWxsEvents(e.w)
    }
    setText(e) {
      ;((this.$holder || this.$).textContent = e), this.updateView()
    }
    addWxsEvent(e, t, n) {
      this.$props[e] = $p(this, t, n)
    }
    addEvent(e, t) {
      this.$props[e] = jp(this.id, t, Sr(e)[1])
    }
    removeEvent(e) {
      this.$props[e] = null
    }
    setAttr(e, t) {
      if (e === Ar) this.$ && Hp(this.$, t)
      else if (e === Mr) this.$.__ownerId = t
      else if (e === Er) sp(() => gp(this, t), 3)
      else if (e === Tr) {
        var n = mp(t, this.$ || ip(this.pid).$),
          r = this.$props.style
        wn(n) && wn(r)
          ? Object.keys(n).forEach((e) => {
              r[e] = n[e]
            })
          : (this.$props.style = n)
      } else
        _p(e)
          ? this.$.style.setProperty(e, wp(t))
          : ((t = mp(t, this.$ || ip(this.pid).$)),
            this.wxsPropsInvoke(e, t, !0) || (this.$props[e] = t))
      this.updateView()
    }
    removeAttr(e) {
      _p(e) ? this.$.style.removeProperty(e) : (this.$props[e] = null), this.updateView()
    }
    remove() {
      this.removeUniParent(),
        (this.isUnmounted = !0),
        this.$app.unmount(),
        ap(this.id),
        this.removeUniChildren(),
        So(),
        this.updateView()
    }
    appendChild(e) {
      var t = (this.$holder || this.$).appendChild(e)
      return this.updateView(!0), t
    }
    insertBefore(e, t) {
      var n = (this.$holder || this.$).insertBefore(e, t)
      return this.updateView(!0), n
    }
  }
  class w_ extends b_ {
    constructor(e, t, n, r, i, a, o) {
      super(e, t, n, r, i, a, o)
    }
    getRebuildFn() {
      return this._rebuild || (this._rebuild = this.rebuild.bind(this)), this._rebuild
    }
    setText(e) {
      return sp(this.getRebuildFn(), 2), super.setText(e)
    }
    appendChild(e) {
      return sp(this.getRebuildFn(), 2), super.appendChild(e)
    }
    insertBefore(e, t) {
      return sp(this.getRebuildFn(), 2), super.insertBefore(e, t)
    }
    removeUniChild(e) {
      return sp(this.getRebuildFn(), 2), super.removeUniChild(e)
    }
    rebuild() {
      var e = this.$.__vueParentComponent
      e.rebuild && e.rebuild()
    }
  }
  function x_(e, t, n) {
    e.childNodes.forEach((n) => {
      n instanceof Element ? -1 === n.className.indexOf(t) && e.removeChild(n) : e.removeChild(n)
    }),
      e.appendChild(document.createTextNode(n))
  }
  var S_ = ['value', 'modelValue']
  function k_(e) {
    S_.forEach((t) => {
      if (un(e, t)) {
        var n = 'onUpdate:' + t
        un(e, n) || (e[n] = (n) => (e[t] = n))
      }
    })
  }
  class C_ extends yp {
    constructor(e, t, n, r) {
      super(e, t, n), this.insert(n, r)
    }
  }
  var T_ = 0
  function A_(e, t, n) {
    var r,
      i,
      { position: a, hidden: o, onParentReady: s } = __(e)
    s((s) => {
      var l = ql(() => {
          var e = {}
          for (var t in a) {
            var n = a[t],
              r = parseFloat(n),
              i = parseFloat(s[t])
            if ('top' === t || 'left' === t) n = Math.max(r, i) + 'px'
            else if ('width' === t || 'height' === t) {
              var o = 'width' === t ? 'left' : 'top',
                l = parseFloat(s[o]),
                u = parseFloat(a[o]),
                c = Math.max(l - u, 0),
                d = Math.max(u + r - (l + i), 0)
              n = Math.max(r - c - d, 0) + 'px'
            }
            e[t] = n
          }
          return e
        }),
        u = ['borderRadius', 'borderColor', 'borderWidth', 'backgroundColor'],
        c = [
          'paddingTop',
          'paddingRight',
          'paddingBottom',
          'paddingLeft',
          'color',
          'textAlign',
          'lineHeight',
          'fontSize',
          'fontWeight',
          'textOverflow',
          'whiteSpace',
        ],
        d = [],
        h = { start: 'left', end: 'right' }
      function f(t) {
        var n = getComputedStyle(e.value)
        return (
          u.concat(c, d).forEach((e) => {
            t[e] = n[e]
          }),
          t
        )
      }
      var p = Fa(f({})),
        v = null
      ;(i = function () {
        v && cancelAnimationFrame(v),
          (v = requestAnimationFrame(() => {
            ;(v = null), f(p)
          }))
      }),
        window.addEventListener('updateview', i)
      var g = ql(() => {
        var e = (function () {
            var e = {}
            for (var t in e) {
              var n = e[t]
              ;('top' !== t && 'left' !== t) ||
                (n = Math.min(parseFloat(n) - parseFloat(s[t]), 0) + 'px'),
                (e[t] = n)
            }
            return e
          })(),
          t = [
            {
              tag: 'rect',
              position: e,
              rectStyles: {
                color: p.backgroundColor,
                radius: p.borderRadius,
                borderColor: p.borderColor,
                borderWidth: p.borderWidth,
              },
            },
          ]
        if ('src' in n) n.src && t.push({ tag: 'img', position: e, src: n.src })
        else {
          var r = parseFloat(p.lineHeight) - parseFloat(p.fontSize),
            i = parseFloat(e.width) - parseFloat(p.paddingLeft) - parseFloat(p.paddingRight)
          i = i < 0 ? 0 : i
          var a =
            parseFloat(e.height) - parseFloat(p.paddingTop) - r / 2 - parseFloat(p.paddingBottom)
          ;(a = a < 0 ? 0 : a),
            t.push({
              tag: 'font',
              position: {
                top: ''.concat(parseFloat(e.top) + parseFloat(p.paddingTop) + r / 2, 'px'),
                left: ''.concat(parseFloat(e.left) + parseFloat(p.paddingLeft), 'px'),
                width: ''.concat(i, 'px'),
                height: ''.concat(a, 'px'),
              },
              textStyles: {
                align: h[p.textAlign] || p.textAlign,
                color: p.color,
                decoration: 'none',
                lineSpacing: ''.concat(r, 'px'),
                margin: '0px',
                overflow: p.textOverflow,
                size: p.fontSize,
                verticalAlign: 'top',
                weight: p.fontWeight,
                whiteSpace: p.whiteSpace,
              },
              text: n.text,
            })
        }
        return t
      })
      ;(r = new plus.nativeObj.View(
        'cover-'.concat(Date.now(), '-').concat(T_++),
        l.value,
        g.value,
      )),
        plus.webview.currentWebview().append(r),
        o.value && r.hide(),
        r.addEventListener('click', () => {
          t('click', {}, {})
        }),
        jo(
          () => o.value,
          (e) => {
            r[e ? 'hide' : 'show']()
          },
        ),
        jo(
          () => l.value,
          (e) => {
            r.setStyle(e)
          },
          { deep: !0 },
        ),
        jo(
          () => g.value,
          () => {
            r.reset(), r.draw(g.value)
          },
          { deep: !0 },
        )
    }),
      ss(() => {
        r && r.close(), i && window.removeEventListener('updateview', i)
      })
  }
  const M_ = Zp({
    name: 'CoverImage',
    props: {
      src: { type: String, default: '' },
      autoSize: { type: [Boolean, String], default: !1 },
    },
    emits: ['click', 'load', 'error'],
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = Jp(r, n),
        a = Fa({ src: '' }),
        o = (function (e, t, n) {
          var r,
            i = eo('')
          function a() {
            ;(t.src = ''), (i.value = e.autoSize ? 'width:0;height:0;' : '')
            var a = e.src ? bc(e.src) : ''
            0 === a.indexOf('http://') || 0 === a.indexOf('https://')
              ? (r = plus.downloader.createDownload(
                  a,
                  { filename: '_doc/uniapp_temp//download/' },
                  (e, t) => {
                    200 === t ? o(e.filename) : n('error', {}, { errMsg: 'error' })
                  },
                )).start()
              : a && o(a)
          }
          function o(r) {
            ;(t.src = r),
              plus.io.getImageInfo({
                src: r,
                success: (t) => {
                  var { width: r, height: a } = t
                  e.autoSize &&
                    ((i.value = 'width:'.concat(r, 'px;height:').concat(a, 'px;')),
                    window.dispatchEvent(new CustomEvent('updateview'))),
                    n('load', {}, { width: r, height: a })
                },
                fail: () => {
                  n('error', {}, { errMsg: 'error' })
                },
              })
          }
          return (
            e.src && a(),
            jo(() => e.src, a),
            ss(() => {
              r && r.abort()
            }),
            i
          )
        })(e, a, i)
      return (
        A_(r, i, a),
        () =>
          gl(
            'uni-cover-image',
            { ref: r, style: o.value },
            [gl('div', { class: 'uni-cover-image' }, null)],
            4,
          )
      )
    },
  })
  const E_ = Zp({
    name: 'CoverView',
    emits: ['click'],
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = eo(null),
        a = Jp(r, n),
        o = Fa({ text: '' })
      return (
        A_(r, a, o),
        Hg(() => {
          var e = i.value.childNodes[0]
          ;(o.text = e && e instanceof Text ? e.textContent : ''),
            window.dispatchEvent(new CustomEvent('updateview'))
        }),
        () =>
          gl(
            'uni-cover-view',
            { ref: r },
            [gl('div', { ref: i, class: 'uni-cover-view' }, null, 512)],
            512,
          )
      )
    },
  })
  var O_ = {
      id: { type: String, default: '' },
      url: { type: String, default: '' },
      mode: { type: String, default: 'SD' },
      muted: { type: [Boolean, String], default: !1 },
      enableCamera: { type: [Boolean, String], default: !0 },
      autoFocus: { type: [Boolean, String], default: !0 },
      beauty: { type: [Number, String], default: 0 },
      whiteness: { type: [Number, String], default: 0 },
      aspect: { type: [String], default: '3:2' },
      minBitrate: { type: [Number], default: 200 },
    },
    L_ = ['statechange', 'netstatus', 'error']
  const z_ = Zp({
    name: 'LivePusher',
    props: O_,
    emits: L_,
    setup(e, t) {
      var n,
        { emit: r } = t,
        i = eo(null),
        a = Jp(i, r),
        o = eo(null),
        s = m_(e, ['id']),
        { position: l, hidden: u, onParentReady: c } = __(o)
      return (
        c(() => {
          ;(n = new plus.video.LivePusher(
            'livePusher' + Date.now(),
            Object.assign({}, s.value, l),
          )),
            plus.webview.currentWebview().append(n),
            L_.forEach((e) => {
              n.addEventListener(e, (t) => {
                a(e, {}, t.detail)
              })
            }),
            jo(
              () => s.value,
              (e) => n.setStyles(e),
              { deep: !0 },
            ),
            jo(
              () => l,
              (e) => n.setStyles(e),
              { deep: !0 },
            ),
            jo(
              () => u.value,
              (e) => {
                e || n.setStyles(l)
              },
            )
        }),
        o_((e, t) => {
          n && n[e](t)
        }, l_()),
        ss(() => {
          n && n.close()
        }),
        () =>
          gl(
            'uni-live-pusher',
            { ref: i, id: e.id },
            [gl('div', { ref: o, class: 'uni-live-pusher-container' }, null, 512)],
            8,
            ['id'],
          )
      )
    },
  })
  function N_(e) {
    if (0 !== e.indexOf('#')) return { color: e, opacity: 1 }
    var t = e.slice(7, 9)
    return { color: e.slice(0, 7), opacity: t ? Number('0x' + t) / 255 : 1 }
  }
  const I_ = Zp({
    name: 'MapDefault',
    props: {
      id: { type: String, default: '' },
      latitude: { type: [Number, String], default: '' },
      longitude: { type: [Number, String], default: '' },
      scale: { type: [String, Number], default: 16 },
      markers: { type: Array, default: () => [] },
      polyline: { type: Array, default: () => [] },
      circles: { type: Array, default: () => [] },
      polygons: { type: Array, default: () => [] },
      controls: { type: Array, default: () => [] },
    },
    emits: ['click', 'regionchange', 'controltap', 'markertap', 'callouttap'],
    setup(e, t) {
      var n,
        { emit: r } = t,
        i = eo(null),
        a = Jp(i, r),
        o = eo(null),
        s = m_(e, ['id']),
        { position: l, hidden: u, onParentReady: c } = __(o),
        {
          _addMarkers: d,
          _addMapLines: h,
          _addMapCircles: f,
          _addMapPolygons: p,
          _setMap: v,
        } = (function (e, t) {
          var n
          function r(t) {
            var { longitude: r, latitude: i } =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            n &&
              (n.setCenter(new plus.maps.Point(Number(r || e.longitude), Number(i || e.latitude))),
              t({ errMsg: 'moveToLocation:ok' }))
          }
          function i(e) {
            n &&
              n.getCurrentCenter((t, n) => {
                e({ longitude: n.getLng(), latitude: n.getLat(), errMsg: 'getCenterLocation:ok' })
              })
          }
          function a(e) {
            if (n) {
              var t = n.getBounds()
              e({
                southwest: t.getSouthWest(),
                northeast: t.getNorthEast(),
                errMsg: 'getRegion:ok',
              })
            }
          }
          function o(e) {
            n && e({ scale: n.getZoom(), errMsg: 'getScale:ok' })
          }
          function s(e) {
            if (n) {
              var { id: r, latitude: i, longitude: a, iconPath: o, callout: s, label: l } = e
              ;((e) => {
                var i,
                  { latitude: a, longitude: u } = e.coord,
                  c = new plus.maps.Marker(new plus.maps.Point(u, a))
                o && c.setIcon(bc(o)), l && l.content && c.setLabel(l.content)
                var d = void 0
                s && s.content && (d = new plus.maps.Bubble(s.content)),
                  d && c.setBubble(d),
                  (r || 0 === r) &&
                    ((c.onclick = (e) => {
                      t('markertap', {}, { markerId: r, latitude: a, longitude: u })
                    }),
                    d &&
                      (d.onclick = () => {
                        t('callouttap', {}, { markerId: r })
                      })),
                  null === (i = n) || void 0 === i || i.addOverlay(c),
                  n.__markers__.push(c)
              })({ coord: { latitude: i, longitude: a } })
            }
          }
          function l() {
            n &&
              (n.__markers__.forEach((e) => {
                var t
                null === (t = n) || void 0 === t || t.removeOverlay(e)
              }),
              (n.__markers__ = []))
          }
          function u(e, t) {
            t && l(),
              e.forEach((e) => {
                s(e)
              })
          }
          function c(e) {
            n &&
              (n.__lines__.length > 0 &&
                (n.__lines__.forEach((e) => {
                  var t
                  null === (t = n) || void 0 === t || t.removeOverlay(e)
                }),
                (n.__lines__ = [])),
              e.forEach((e) => {
                var t,
                  { color: r, width: i } = e,
                  a = e.points.map((e) => new plus.maps.Point(e.longitude, e.latitude)),
                  o = new plus.maps.Polyline(a)
                if (r) {
                  var s = N_(r)
                  o.setStrokeColor(s.color), o.setStrokeOpacity(s.opacity)
                }
                i && o.setLineWidth(i),
                  null === (t = n) || void 0 === t || t.addOverlay(o),
                  n.__lines__.push(o)
              }))
          }
          function d(e) {
            n &&
              (n.__circles__.length > 0 &&
                (n.__circles__.forEach((e) => {
                  var t
                  null === (t = n) || void 0 === t || t.removeOverlay(e)
                }),
                (n.__circles__ = [])),
              e.forEach((e) => {
                var t,
                  {
                    latitude: r,
                    longitude: i,
                    color: a,
                    fillColor: o,
                    radius: s,
                    strokeWidth: l,
                  } = e,
                  u = new plus.maps.Circle(new plus.maps.Point(i, r), s)
                if (a) {
                  var c = N_(a)
                  u.setStrokeColor(c.color), u.setStrokeOpacity(c.opacity)
                }
                if (o) {
                  var d = N_(o)
                  u.setFillColor(d.color), u.setFillOpacity(d.opacity)
                }
                l && u.setLineWidth(l),
                  null === (t = n) || void 0 === t || t.addOverlay(u),
                  n.__circles__.push(u)
              }))
          }
          function h(e) {
            if (n) {
              var t = n.__polygons__
              t.forEach((e) => {
                var t
                null === (t = n) || void 0 === t || t.removeOverlay(e)
              }),
                (t.length = 0),
                e.forEach((e) => {
                  var r,
                    { points: i, strokeWidth: a, strokeColor: o, fillColor: s } = e,
                    l = []
                  i &&
                    i.forEach((e) => {
                      l.push(new plus.maps.Point(e.longitude, e.latitude))
                    })
                  var u = new plus.maps.Polygon(l)
                  if (o) {
                    var c = N_(o)
                    u.setStrokeColor(c.color), u.setStrokeOpacity(c.opacity)
                  }
                  if (s) {
                    var d = N_(s)
                    u.setFillColor(d.color), u.setFillOpacity(d.opacity)
                  }
                  a && u.setLineWidth(a),
                    null === (r = n) || void 0 === r || r.addOverlay(u),
                    t.push(u)
                })
            }
          }
          var f = { moveToLocation: r, getCenterLocation: i, getRegion: a, getScale: o }
          return (
            o_((e, t, n) => {
              f[e] && f[e](n, t)
            }, l_()),
            {
              _addMarkers: u,
              _addMapLines: c,
              _addMapCircles: d,
              _addMapPolygons: h,
              _setMap(e) {
                n = e
              },
            }
          )
        })(e, a)
      c(() => {
        ;(n = on(
          plus.maps.create(
            Bu() + '-map-' + (e.id || Date.now()),
            Object.assign(
              {},
              s.value,
              l,
              (() => {
                if (e.latitude && e.longitude)
                  return { center: new plus.maps.Point(Number(e.longitude), Number(e.latitude)) }
              })(),
            ),
          ),
          { __markers__: [], __lines__: [], __circles__: [], __polygons__: [] },
        )).setZoom(parseInt(String(e.scale))),
          plus.webview.currentWebview().append(n),
          u.value && n.hide(),
          (n.onclick = (e) => {
            a('tap', {}, e), a('click', {}, e)
          }),
          (n.onstatuschanged = (e) => {
            a('regionchange', {}, {})
          }),
          v(n),
          d(e.markers),
          h(e.polyline),
          f(e.circles),
          p(e.polygons),
          jo(
            () => s.value,
            (e) => n && n.setStyles(e),
            { deep: !0 },
          ),
          jo(
            () => l,
            (e) => n && n.setStyles(e),
            { deep: !0 },
          ),
          jo(u, (e) => {
            n && n[e ? 'hide' : 'show']()
          }),
          jo(
            () => e.scale,
            (e) => {
              n && n.setZoom(parseInt(String(e)))
            },
          ),
          jo([() => e.latitude, () => e.longitude], (e) => {
            var [t, r] = e
            n && n.setStyles({ center: new plus.maps.Point(Number(r), Number(t)) })
          }),
          jo(
            () => e.markers,
            (e) => {
              d(e, !0)
            },
            { deep: !0 },
          ),
          jo(
            () => e.polyline,
            (e) => {
              h(e)
            },
            { deep: !0 },
          ),
          jo(
            () => e.circles,
            (e) => {
              f(e)
            },
            { deep: !0 },
          ),
          jo(
            () => e.polygons,
            (e) => {
              p(e)
            },
            { deep: !0 },
          )
      })
      var g = ql(() =>
        e.controls.map((e) => {
          var t = { position: 'absolute' }
          return (
            ['top', 'left', 'width', 'height'].forEach((n) => {
              e.position[n] && (t[n] = e.position[n] + 'px')
            }),
            { id: e.id, iconPath: bc(e.iconPath), position: t, clickable: e.clickable }
          )
        }),
      )
      return (
        ss(() => {
          n && (n.close(), v(null))
        }),
        () =>
          gl(
            'uni-map',
            { ref: i, id: e.id },
            [
              gl('div', { ref: o, class: 'uni-map-container' }, null, 512),
              g.value.map((e, t) =>
                gl(
                  M_,
                  {
                    key: t,
                    src: e.iconPath,
                    style: e.position,
                    'auto-size': !0,
                    onClick: () => e.clickable && a('controltap', {}, { controlId: e.id }),
                  },
                  null,
                  8,
                  ['src', 'style', 'auto-size', 'onClick'],
                ),
              ),
              gl('div', { class: 'uni-map-slot' }, null),
            ],
            8,
            ['id'],
          )
      )
    },
  })
  function P_(e) {
    function t() {
      var e = this.div
      this.getPanes().floatPane.appendChild(e)
    }
    function n() {
      var e = this.div.parentNode
      e && e.removeChild(this.div)
    }
    function r() {
      var t = this.option
      ;(this.Text = new e.Text({
        text: t.content,
        anchor: 'bottom-center',
        offset: new e.Pixel(0, t.offsetY - 16),
        style: {
          padding: (t.padding || 8) + 'px',
          'line-height': (t.fontSize || 14) + 'px',
          'border-radius': (t.borderRadius || 0) + 'px',
          'border-color': ''.concat(t.bgColor || '#fff', ' transparent transparent'),
          'background-color': t.bgColor || '#fff',
          'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
          'text-align': 'center',
          'font-size': (t.fontSize || 14) + 'px',
          color: t.color || '#000',
        },
        position: t.position,
      })),
        (e.event || e.Event).addListener(this.Text, 'click', () => {
          this.callback()
        }),
        this.Text.setMap(t.map)
    }
    function i() {}
    function a() {
      this.Text && this.option.map.remove(this.Text)
    }
    function o() {
      this.Text && this.option.map.remove(this.Text)
    }
    class s {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s = arguments.length > 1 ? arguments[1] : void 0
        ;(this.createAMapText = r),
          (this.removeAMapText = a),
          (this.createBMapText = i),
          (this.removeBMapText = o),
          (this.onAdd = t),
          (this.construct = t),
          (this.onRemove = n),
          (this.destroy = n),
          (this.option = e || {})
        var l = (this.visible = this.alwaysVisible = 'ALWAYS' === e.display)
        if (G_()) (this.callback = s), this.visible && this.createAMapText()
        else {
          var u = e.map
          ;(this.position = e.position), (this.index = 1)
          var c = (this.div = document.createElement('div')),
            d = c.style
          ;(d.position = 'absolute'),
            (d.whiteSpace = 'nowrap'),
            (d.transform = 'translateX(-50%) translateY(-100%)'),
            (d.zIndex = '1'),
            (d.boxShadow = e.boxShadow || 'none'),
            (d.display = l ? 'block' : 'none')
          var h = (this.triangle = document.createElement('div'))
          h.setAttribute(
            'style',
            'position: absolute;white-space: nowrap;border-width: 4px;border-style: solid;border-color: #fff transparent transparent;border-image: initial;font-size: 12px;padding: 0px;background-color: transparent;width: 0px;height: 0px;transform: translate(-50%, 100%);left: 50%;bottom: 0;',
          ),
            this.setStyle(e),
            c.appendChild(h),
            u && this.setMap(u)
        }
      }
      set onclick(e) {
        this.div.onclick = e
      }
      get onclick() {
        return this.div.onclick
      }
      setOption(e) {
        ;(this.option = e),
          'ALWAYS' === e.display
            ? (this.alwaysVisible = this.visible = !0)
            : (this.alwaysVisible = !1),
          G_()
            ? this.visible && this.createAMapText()
            : (this.setPosition(e.position), this.setStyle(e))
      }
      setStyle(e) {
        var t = this.div,
          n = t.style
        ;(t.innerText = e.content || ''),
          (n.lineHeight = (e.fontSize || 14) + 'px'),
          (n.fontSize = (e.fontSize || 14) + 'px'),
          (n.padding = (e.padding || 8) + 'px'),
          (n.color = e.color || '#000'),
          (n.borderRadius = (e.borderRadius || 0) + 'px'),
          (n.backgroundColor = e.bgColor || '#fff'),
          (n.marginTop = '-' + ((e.top || 0) + 5) + 'px'),
          (this.triangle.style.borderColor = ''.concat(
            e.bgColor || '#fff',
            ' transparent transparent',
          ))
      }
      setPosition(e) {
        ;(this.position = e), this.draw()
      }
      draw() {
        var e = this.getProjection()
        if (this.position && this.div && e) {
          var t = e.fromLatLngToDivPixel(this.position),
            n = this.div.style
          ;(n.left = t.x + 'px'), (n.top = t.y + 'px')
        }
      }
      changed() {
        this.div.style.display = this.visible ? 'block' : 'none'
      }
    }
    if (!G_() && !K_()) {
      var l = new (e.OverlayView || e.Overlay)()
      ;(s.prototype.setMap = l.setMap),
        (s.prototype.getMap = l.getMap),
        (s.prototype.getPanes = l.getPanes),
        (s.prototype.getProjection = l.getProjection),
        (s.prototype.map_changed = l.map_changed),
        (s.prototype.set = l.set),
        (s.prototype.get = l.get),
        (s.prototype.setOptions = l.setValues),
        (s.prototype.bindTo = l.bindTo),
        (s.prototype.bindsTo = l.bindsTo),
        (s.prototype.notify = l.notify),
        (s.prototype.setValues = l.setValues),
        (s.prototype.unbind = l.unbind),
        (s.prototype.unbindAll = l.unbindAll),
        (s.prototype.addListener = l.addListener)
    }
    return s
  }
  var D_,
    B_ = (e, t, n) =>
      new Promise((r, i) => {
        var a = (e) => {
            try {
              s(n.next(e))
            } catch (t) {
              i(t)
            }
          },
          o = (e) => {
            try {
              s(n.throw(e))
            } catch (t) {
              i(t)
            }
          },
          s = (e) => (e.done ? r(e.value) : Promise.resolve(e.value).then(a, o))
        s((n = n.apply(e, t)).next())
      }),
    R_ = {},
    F_ = '__map_callback__'
  function q_(e, t) {
    return B_(this, null, function* () {
      var n = yield Y_()
      if (n.key) {
        var r = (R_[n.type] = R_[n.type] || [])
        if (D_) t(D_)
        else if (window[n.type] && window[n.type].maps)
          ((D_ = G_() || K_() ? window[n.type] : window[n.type].maps).Callout =
            D_.Callout || P_(D_)),
            t(D_)
        else if (r.length) r.push(t)
        else {
          r.push(t)
          var i = window,
            a = F_ + n.type
          ;(i[a] = function () {
            delete i[a],
              ((D_ = G_() || K_() ? window[n.type] : window[n.type].maps).Callout = P_(D_)),
              r.forEach((e) => e(D_)),
              (r.length = 0)
          }),
            G_() &&
              (function (e) {
                window._AMapSecurityConfig = {
                  securityJsCode: e.securityJsCode || '',
                  serviceHost: e.serviceHost || '',
                }
              })(n)
          var o = document.createElement('script'),
            s = j_(n.type)
          n.type === U_.QQ && e.push('geometry'),
            e.length && (s += 'libraries='.concat(e.join('%2C'), '&')),
            n.type === U_.BMAP
              ? (o.src = ''.concat(s, 'ak=').concat(n.key, '&callback=').concat(a))
              : (o.src = ''.concat(s, 'key=').concat(n.key, '&callback=').concat(a)),
            (o.onerror = function () {
              console.error('Map load failed.')
            }),
            document.body.appendChild(o)
        }
      } else console.error('Map key not configured.')
    })
  }
  var j_ = (e) =>
    ({
      qq: 'https://map.qq.com/api/js?v=2.exp&',
      google: 'https://maps.googleapis.com/maps/api/js?',
      AMap: 'https://webapi.amap.com/maps?v=2.0&',
      BMapGL: 'https://api.map.baidu.com/api?type=webgl&v=1.0&',
    })[e]
  var V_ = (e, t, n) =>
      new Promise((r, i) => {
        var a = (e) => {
            try {
              s(n.next(e))
            } catch (t) {
              i(t)
            }
          },
          o = (e) => {
            try {
              s(n.throw(e))
            } catch (t) {
              i(t)
            }
          },
          s = (e) => (e.done ? r(e.value) : Promise.resolve(e.value).then(a, o))
        s((n = n.apply(e, t)).next())
      }),
    $_ =
      'M13.3334375 16 q0.033125 1.1334375 0.783125 1.8834375 q0.75 0.75 1.8834375 0.75 q1.1334375 0 1.8834375 -0.75 q0.75 -0.75 0.75 -1.8834375 q0 -1.1334375 -0.75 -1.8834375 q-0.75 -0.75 -1.8834375 -0.75 q-1.1334375 0 -1.8834375 0.75 q-0.75 0.75 -0.783125 1.8834375 ZM30.9334375 14.9334375 l-1.1334375 0 q-0.5 -5.2 -4.0165625 -8.716875 q-3.516875 -3.5165625 -8.716875 -4.0165625 l0 -1.1334375 q0 -0.4665625 -0.3 -0.7665625 q-0.3 -0.3 -0.7665625 -0.3 q-0.4665625 0 -0.7665625 0.3 q-0.3 0.3 -0.3 0.7665625 l0 1.1334375 q-5.2 0.5 -8.716875 4.0165625 q-3.5165625 3.516875 -4.0165625 8.716875 l-1.1334375 0 q-0.4665625 0 -0.7665625 0.3 q-0.3 0.3 -0.3 0.7665625 q0 0.4665625 0.3 0.7665625 q0.3 0.3 0.7665625 0.3 l1.1334375 0 q0.5 5.2 4.0165625 8.716875 q3.516875 3.5165625 8.716875 4.0165625 l0 1.1334375 q0 0.4665625 0.3 0.7665625 q0.3 0.3 0.7665625 0.3 q0.4665625 0 0.7665625 -0.3 q0.3 -0.3 0.3 -0.7665625 l0 -1.1334375 q5.2 -0.5 8.716875 -4.0165625 q3.5165625 -3.516875 4.0165625 -8.716875 l1.1334375 0 q0.4665625 0 0.7665625 -0.3 q0.3 -0.3 0.3 -0.7665625 q0 -0.4665625 -0.3 -0.7665625 q-0.3 -0.3 -0.7665625 -0.3 ZM17.0665625 27.6665625 l0 -2.0665625 q0 -0.4665625 -0.3 -0.7665625 q-0.3 -0.3 -0.7665625 -0.3 q-0.4665625 0 -0.7665625 0.3 q-0.3 0.3 -0.3 0.7665625 l0 2.0665625 q-4.3 -0.4665625 -7.216875 -3.383125 q-2.916875 -2.916875 -3.3834375 -7.216875 l2.0665625 0 q0.4665625 0 0.7665625 -0.3 q0.3 -0.3 0.3 -0.7665625 q0 -0.4665625 -0.3 -0.7665625 q-0.3 -0.3 -0.7665625 -0.3 l-2.0665625 0 q0.4665625 -4.3 3.3834375 -7.216875 q2.9165625 -2.916875 7.216875 -3.3834375 l0 2.0665625 q0 0.4665625 0.3 0.7665625 q0.3 0.3 0.7665625 0.3 q0.4665625 0 0.7665625 -0.3 q0.3 -0.3 0.3 -0.7665625 l0 -2.0665625 q4.3 0.4665625 7.216875 3.3834375 q2.9165625 2.9165625 3.383125 7.216875 l-2.0665625 0 q-0.4665625 0 -0.7665625 0.3 q-0.3 0.3 -0.3 0.7665625 q0 0.4665625 0.3 0.7665625 q0.3 0.3 0.7665625 0.3 l2.0665625 0 q-0.4665625 4.3 -3.383125 7.216875 q-2.916875 2.9165625 -7.216875 3.383125 Z',
    H_ =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAC01BMVEUAAAAAef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef8Aef96quGStdqStdpbnujMzMzCyM7Gyc7Ky83MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwAef8GfP0yjfNWnOp0qOKKsdyYt9mju9aZt9mMstx1qeJYnekyjvIIfP0qivVmouaWttnMzMyat9lppOUujPQKffxhoOfNzc3Y2Njh4eHp6enu7u7y8vL19fXv7+/i4uLZ2dnOzs6auNgOf/sKff15quHR0dHx8fH9/f3////j4+N6quFdn+iywdPb29vw8PD+/v7c3NyywtLa2tr29vbS0tLd3d38/Pzf39/o6Ojc7f+q0v+HwP9rsf9dqv9Hnv9Vpv/q6urj8P+Vx/9Am/8Pgf8Iff/z8/OAvP95uf/n5+c5l//V6f+52v+y1//7+/vt7e0rkP/09PTQ0NDq9P8Whf+cy//W1tbe3t7A3v/m5ubs7OxOov/r6+vk5OQiaPjKAAAAknRSTlMACBZ9oB71/jiqywJBZATT6hBukRXv+zDCAVrkDIf4JbQsTb7eVeJLbwfa8Rh4G/OlPS/6/kxQ9/xdmZudoJxNVhng7B6wtWdzAtQOipcF1329wS44doK/BAkyP1pvgZOsrbnGXArAg34G2IsD1eMRe7bi7k5YnqFT9V0csyPedQyYD3p/Fje+hDpskq/MwpRBC6yKp2MAAAQdSURBVHja7Zn1exMxGIAPHbrhDsPdneHuNtzd3d3dIbjLh93o2o4i7TpgG1Jk0g0mMNwd/gTa5rq129reHnK5e/bk/TFNk/dJ7r5894XjGAwGg8GgTZasCpDIll1+hxw5vXLJLpEboTx5ZXbIhyzkl9fB28cqUaCgrBKFkI3CcjoUKYolihWXUSI7EihRUjaHXF52CVRKLoe8eZIdUOkyMknkRw6UlcehYAFHiXK+skgURk6Ul8OhQjFnCVRRBolKqRxQ5SzUHaqgNGSj7VCmalqJnDkoS5RF6ZCbroNvufQkUD6qEuXTdUA+3hQdqiEXVKfnUKOmK4latalJ1EEuoZZ6162HJ9x/4OChw0eOHj12/MTJU6dxG7XUu751tjNnz4ET5y9ctLZTSr0beKFLl89bpuUDrqgC1RqNWqsKuqqzNFw7e51S6u3tc+OmZUJ9kCHY6ECwOkRvab51iUrqXej2HYDQsHBjWgx3Ae7dppB6N2wEcF9jdMGDUIDGTaR2aNoM9FqjG7QmaN5CWgc/gIePjG559BigpZQOrYB/4jBfRGRUtDkmJjY6KjLCofkpD62lc2gDfMpWPIuLdwyV8XEpHgaddBZ+wBuSFcwJqSN2ovmZ/dfnOvCTxqGtwzq8SEjv4EhISn48eWgnhUP7DvDSvgzxrs6vV6+FLiro2EkCic4QKkzwJsH1KYreCp0eQhfyDl1B/w4P/xa5JVJ4U03QjbRD9x7wXlgH5IE3wmMBHXoSlugFAcI6f/AkkSi8q6HQm6xDn77wEQ8djTwSj3tqAMguRTe4ikeOQyJ4YV+KfkQl+oNW5GbY4gWOWgbwJ+kwAD6Fi90MK2ZsrIeBBCUGwRXbqJ+/iJMQliIEBhOU6AJhtlG/IpHE2bqrYQg5h6HA4yQiRqwEfkGCdTCMmMRw+IbPDCQaHCsCYAQxiZHw3TbmD/ESOHgHwShiEqPhp/gggYkSztIxxCRawy/bmEniJaJtfwiEscQkxkFgRqJESqQwwHhiEuMBp3Vm8RK/cZoHEzKXhCK2QxEPpiJe0YlKCFaKCNv/cYBNUsBRPlkJSc0U+dM7E9H0ThGJbgZT/iR7yj+VqMS06Qr4+OFm2JdCxIa8lugzkJs5K6MfxAaYPUcBpYG5khZJEkUUSb7DPCnKRfPBXj6M8FwuegoLpCgXcQszVjhbJFUJUee2hBhLoYTIcYtB57KY+opSMdVqwatSlZVj05aV//CwJLMX2DluaUcwhXm4ali2XOoLjxUrPV26zFtF4f5p0Gp310+z13BUWNvbehEXona6iAtX/zVZmtfN4WixfsNky4S6gCCVVq3RPLdfSfpv3MRRZfPoLc6Xs/5bt3EyMGzE9h07/Xft2t15z6i9+zgGg8FgMBgMBoPBYDAYDAYj8/APG67Rie8pUDsAAAAASUVORK5CYII=',
    W_ =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACcCAMAAAC3Fl5oAAAB3VBMVEVMaXH/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/EhL/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/Dw//AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/GRn/NTX/Dw//Fhb/AAD/AAD/AAD/GRn/GRn/Y2P/AAD/AAD/ExP/Ghr/AAD/AAD/MzP/GRn/AAD/Hh7/AAD/RUX/AAD/AAD/AAD/AAD/AAD/AAD/Dg7/AAD/HR3/Dw//FRX/SUn/AAD/////kJD/DQ3/Zmb/+/v/wMD/mJj/6en/vb3/1NT//Pz/ODj/+fn/3Nz/nJz/j4//9/f/7e3/9vb/7Oz/2Nj/x8f/Ozv/+Pj/3d3/nZ3/2dn//f3/6Oj/2tr/v7//09P/vr7/mZn/l5cdSvP3AAAAe3RSTlMAAhLiZgTb/vztB/JMRhlp6lQW86g8mQ4KFPs3UCH5U8huwlesWtTYGI7RsdVeJGfTW5rxnutLsvXWF8vQNdo6qQbuz7D4hgVIx2xtw8GC1TtZaIw0i84P98tU0/fsj7PKaAgiZZxeVfo8Z52eg1P0nESrENnjXVPUgw/uuSmDAAADsUlEQVR42u3aZ3cTRxgF4GtbYleSLdnGcsENG2ODjbExEHrvhAQCIb1Bem+QdkeuuFMNBBJIfmuOckzZI8/srHYmH3Lm+QNXK632LTvQ03Tu/IWeU/tTGTKT2n+q58L5c00wpXJd47DHEt5w47pKxLbhdLdPKb/7dBYxVLxw1GcI/2h1BcpzKNFHLX2JQ4gumaiitqpEEhEdOMJI9h5AFC3feYzI+7IF2tpSLEOqDXpObPRYFm/jCWho/4Ble7MdoT7fzhhq9yHEz28wltU1UPrJZ0wd66HwicfYvEFIfePTAP8tSLTupBHvtGJFH9bSkNrNWEHzERrT34xSH9Ogr1CijkbVAUH1KRqVqkdQAw07iIAaGlcTqI+/0LjeJJ5J0IIEnkpXMdzs4sTtW9dnZq7fuj2xOMtwVWk88RHDjBYejYvnjD8qjOpfQsUqhvj7oSjxcJIhVj3pyKqpNjYvVjQ/RrXq5YABKi3MCYm5BSrtWO5v11DlmlC4RpU1WRS9SJU7QukOVbpQ9JLu549+Dd0AUOlTbkGEuk85vxLAK5QbuytC3R2j3HoAjZSbFxrmKTcCoJdSk0LLJKV6gSaPMqNTQsvUKGW8JrxKqUWhaZFSeWyh1LTQNE2pHF6mzOy40DQ+S5mLimJcENoKlOnBWsr8KbRNUGYt5LXgd6HtD3lNQIoyN4S2G5RJIUOZm0LbTcqsBqVmhLYZSlkPsP4VWf+Rrd+m1v9o9h8Vv5p42C1R5qL1x7WRglOgVN52yfwNOBu76P+lLPoYidu23KPciIHGa07ZeIW1jvcNtI7q5vexCPGYCmf+m/Y9a3sAwQ5bI9T7ukPgPcn9GToEao+xk1OixJT+GIsvNAbx6eAgPq0xiF+KtkpYKhRXCQ8eFFcJhSWGu3rZ8jJkCM8kz9K4TUnrC6mAgzTsB9tLwQ2W15qfosQ2GrQNpZr7aczbzVjBZsvLcaC1g0bsbIVEnU8DOr6H1KDH2LwtUBi0/JII6Dxm9zUXkH+XMWzfh1Dte1i2Pe3QkC77Zel7aehpO8wyHG6Dtt0NjKxhN6I4uSli/TqJiJJDUQ4NDCURXTrXRy1XcumyD24M+AzhD1RXIIZsl/LoyZmurJHDM7s8lvB2FQ/PmPJ6PseAXP5HGMYAAC7ABbgAF+ACXIALcAEuwAW4ABfgAlyAC3ABLsAFuID/d8Cx4NEt8/byOf0wLnis8zjMq9/Kp7bWw4JOj8u8TlhRl+G/Mp2wpOX48GffvvZ1CyL4B53LAS6zb08EAAAAAElFTkSuQmCC',
    U_ = ((e) => (
      (e.QQ = 'qq'),
      (e.GOOGLE = 'google'),
      (e.AMAP = 'AMap'),
      (e.BMAP = 'BMapGL'),
      (e.UNKNOWN = ''),
      e
    ))(U_ || {})
  function Y_() {
    return V_(this, null, function* () {
      return __uniConfig.qqMapKey
        ? { type: 'qq', key: __uniConfig.qqMapKey }
        : { type: '', key: '' }
    })
  }
  var X_ = !1,
    Z_ = !1,
    G_ = () => (Z_ ? X_ : ((Z_ = !0), (X_ = !1))),
    K_ = () => !1
  const J_ = Gp({
    name: 'MapMarker',
    props: {
      id: { type: [Number, String], default: '' },
      latitude: { type: [Number, String], require: !0 },
      longitude: { type: [Number, String], require: !0 },
      title: { type: String, default: '' },
      iconPath: { type: String, require: !0 },
      rotate: { type: [Number, String], default: 0 },
      alpha: { type: [Number, String], default: 1 },
      width: { type: [Number, String], default: '' },
      height: { type: [Number, String], default: '' },
      callout: { type: Object, default: null },
      label: { type: Object, default: null },
      anchor: { type: Object, default: null },
      clusterId: { type: [Number, String], default: '' },
      customCallout: { type: Object, default: null },
      ariaLabel: { type: String, default: '' },
    },
    setup(e) {
      var t,
        n = String(isNaN(Number(e.id)) ? '' : e.id),
        r = Ps('onMapReady'),
        i = (function (e) {
          var t = 'uni-map-marker-label-' + e,
            n = document.createElement('style')
          return (
            (n.id = t),
            document.head.appendChild(n),
            ls(() => {
              n.remove()
            }),
            function (e) {
              var r = Object.assign({}, e, {
                  position: 'absolute',
                  top: '70px',
                  borderStyle: 'solid',
                }),
                i = document.createElement('div')
              return (
                Object.keys(r).forEach((e) => {
                  i.style[e] = r[e] || ''
                }),
                (n.innerText = '.'.concat(t, '{').concat(i.getAttribute('style'), '}')),
                t
              )
            }
          )
        })(n)
      function a(e) {
        G_() ? e.removeAMapText() : e.setMap(null)
      }
      if (
        (r((r, o, s) => {
          function l(e) {
            var l,
              u = e.title
            l = G_() ? new o.LngLat(e.longitude, e.latitude) : new o.LatLng(e.latitude, e.longitude)
            var c = new Image(),
              d = 0
            ;(c.onload = Zm(function* () {
              var h,
                f,
                p,
                v,
                g = e.anchor || {},
                m = 'number' == typeof g.x ? g.x : 0.5,
                _ = 'number' == typeof g.y ? g.y : 1
              e.iconPath && (e.width || e.height)
                ? ((f = e.width || (c.width / c.height) * e.height),
                  (p = e.height || (c.height / c.width) * e.width))
                : ((f = c.width / 2), (p = c.height / 2)),
                (d = p),
                (v = p - (p - _ * p)),
                (h =
                  'MarkerImage' in o
                    ? new o.MarkerImage(
                        c.src,
                        null,
                        null,
                        new o.Point(m * f, _ * p),
                        new o.Size(f, p),
                      )
                    : 'Icon' in o
                      ? new o.Icon({
                          image: c.src,
                          size: new o.Size(f, p),
                          imageSize: new o.Size(f, p),
                          imageOffset: new o.Pixel(m * f, _ * p),
                        })
                      : { url: c.src, anchor: new o.Point(m, _), size: new o.Size(f, p) }),
                t.setPosition(l),
                t.setIcon(h),
                'setRotation' in t && t.setRotation(e.rotate || 0)
              var y,
                b = e.label || {}
              if (('label' in t && (t.label.setMap(null), delete t.label), b.content)) {
                var w = {
                  borderColor: b.borderColor,
                  borderWidth: (Number(b.borderWidth) || 0) + 'px',
                  padding: (Number(b.padding) || 0) + 'px',
                  borderRadius: (Number(b.borderRadius) || 0) + 'px',
                  backgroundColor: b.bgColor,
                  color: b.color,
                  fontSize: (b.fontSize || 14) + 'px',
                  lineHeight: (b.fontSize || 14) + 'px',
                  marginLeft: (Number(b.anchorX || b.x) || 0) + 'px',
                  marginTop: (Number(b.anchorY || b.y) || 0) + 'px',
                }
                if ('Label' in o)
                  (y = new o.Label({
                    position: l,
                    map: r,
                    clickable: !1,
                    content: b.content,
                    style: w,
                  })),
                    (t.label = y)
                else if ('setLabel' in t)
                  if (G_()) {
                    var x = '<div style="\n                  margin-left:'
                      .concat(w.marginLeft, ';\n                  margin-top:')
                      .concat(w.marginTop, ';\n                  padding:')
                      .concat(w.padding, ';\n                  background-color:')
                      .concat(w.backgroundColor, ';\n                  border-radius:')
                      .concat(w.borderRadius, ';\n                  line-height:')
                      .concat(w.lineHeight, ';\n                  color:')
                      .concat(w.color, ';\n                  font-size:')
                      .concat(w.fontSize, ';\n\n                  ">\n                  ')
                      .concat(b.content, '\n                <div>')
                    t.setLabel({ content: x, direction: 'bottom-right' })
                  } else {
                    var S = i(w)
                    t.setLabel({
                      text: b.content,
                      color: w.color,
                      fontSize: w.fontSize,
                      className: S,
                    })
                  }
              }
              var k,
                C = e.callout || {},
                T = t.callout
              if (C.content || u) {
                G_() && C.content && (C.content = C.content.replaceAll('\n', '<br/>'))
                var A = '0px 0px 3px 1px rgba(0,0,0,0.5)',
                  M = -d / 2
                if (
                  ((e.width || e.height) && (M += 14 - d / 2),
                  (k = C.content
                    ? {
                        position: l,
                        map: r,
                        top: v,
                        offsetY: M,
                        content: C.content,
                        color: C.color,
                        fontSize: C.fontSize,
                        borderRadius: C.borderRadius,
                        bgColor: C.bgColor,
                        padding: C.padding,
                        boxShadow: C.boxShadow || A,
                        display: C.display,
                      }
                    : { position: l, map: r, top: v, offsetY: M, content: u, boxShadow: A }),
                  T)
                )
                  T.setOption(k)
                else if (G_()) {
                  T = t.callout = new o.Callout(k, (e) => {
                    '' !== e && s('callouttap', {}, { markerId: Number(e) })
                  })
                } else {
                  ;((T = t.callout = new o.Callout(k)).div.onclick = function (e) {
                    '' !== n && s('callouttap', e, { markerId: Number(n) }),
                      e.stopPropagation(),
                      e.preventDefault()
                  }),
                    (yield Y_()).type === U_.GOOGLE &&
                      ((T.div.ontouchstart = function (e) {
                        e.stopPropagation()
                      }),
                      (T.div.onpointerdown = function (e) {
                        e.stopPropagation()
                      }))
                }
              } else T && (a(T), delete t.callout)
            })),
              e.iconPath ? (c.src = bc(e.iconPath)) : console.error('Marker.iconPath is required.')
          }
          var u
          ;(u = e),
            (t = new o.Marker({ map: r, flat: !0, autoRotation: !1 })),
            l(u),
            (o.event || o.Event).addListener(t, 'click', () => {
              var e = t.callout
              if (e && !e.alwaysVisible)
                if (G_())
                  (e.visible = !e.visible),
                    e.visible ? t.callout.createAMapText() : t.callout.removeAMapText()
                else if ((e.set('visible', !e.visible), e.visible)) {
                  var r = e.div,
                    i = r.parentNode
                  i.removeChild(r), i.appendChild(r)
                }
              n &&
                s(
                  'markertap',
                  {},
                  { markerId: Number(n), latitude: u.latitude, longitude: u.longitude },
                )
            }),
            jo(e, l)
        }),
        n)
      ) {
        var o = Ps('addMapChidlContext'),
          s = Ps('removeMapChidlContext'),
          l = {
            id: n,
            translate(e) {
              r((n, r, i) => {
                var a = e.destination,
                  o = e.duration,
                  s = !!e.autoRotate,
                  l = Number(e.rotate) || 0,
                  u = 0
                'getRotation' in t && (u = t.getRotation())
                var c = t.getPosition(),
                  d = new r.LatLng(a.latitude, a.longitude),
                  h =
                    r.geometry.spherical.computeDistanceBetween(c, d) /
                    1e3 /
                    (('number' == typeof o ? o : 1e3) / 36e5),
                  f = r.event || r.Event,
                  p = f.addListener(t, 'moving', (e) => {
                    var n = e.latLng,
                      r = t.label
                    r && r.setPosition(n)
                    var i = t.callout
                    i && i.setPosition(n)
                  }),
                  v = f.addListener(t, 'moveend', () => {
                    v.remove(), p.remove(), (t.lastPosition = c), t.setPosition(d)
                    var n = t.label
                    n && n.setPosition(d)
                    var r = t.callout
                    r && r.setPosition(d)
                    var i = e.animationEnd
                    fn(i) && i()
                  }),
                  g = 0
                s &&
                  (t.lastPosition && (g = r.geometry.spherical.computeHeading(t.lastPosition, c)),
                  (l = r.geometry.spherical.computeHeading(c, d) - g)),
                  'setRotation' in t && t.setRotation(u + l),
                  'moveTo' in t ? t.moveTo(d, h) : (t.setPosition(d), f.trigger(t, 'moveend', {}))
              })
            },
          }
        o(l), ls(() => s(l))
      }
      return (
        ls(function () {
          t &&
            (t.label && 'setMap' in t.label && t.label.setMap(null),
            t.callout && a(t.callout),
            t.setMap(null))
        }),
        () => null
      )
    },
  })
  function Q_(e) {
    if (!e) return { r: 0, g: 0, b: 0, a: 0 }
    var t = e.slice(1),
      n = t.length
    if (![3, 4, 6, 8].includes(n)) return { r: 0, g: 0, b: 0, a: 0 }
    ;(3 !== n && 4 !== n) || (t = t.replace(/(\w{1})/g, '$1$1'))
    var [r, i, a, o] = t.match(/(\w{2})/g),
      s = parseInt(r, 16),
      l = parseInt(i, 16),
      u = parseInt(a, 16)
    return o
      ? { r: s, g: l, b: u, a: ('0x100'.concat(o) - 65536) / 255 }
      : { r: s, g: l, b: u, a: 1 }
  }
  var ey = {
    points: { type: Array, require: !0 },
    color: { type: String, default: '#000000' },
    width: { type: [Number, String], default: '' },
    dottedLine: { type: [Boolean, String], default: !1 },
    arrowLine: { type: [Boolean, String], default: !1 },
    arrowIconPath: { type: String, default: '' },
    borderColor: { type: String, default: '#000000' },
    borderWidth: { type: [Number, String], default: '' },
    colorList: { type: Array, default: () => [] },
    level: { type: String, default: '' },
  }
  const ty = Gp({
    name: 'MapPolyline',
    props: ey,
    setup(e) {
      var t, n
      function r() {
        t && t.setMap(null), n && n.setMap(null)
      }
      return (
        Ps('onMapReady')((i, a) => {
          function o(e) {
            var r = []
            e.points.forEach((e) => {
              var t
              ;(t = G_() ? [e.longitude, e.latitude] : new a.LatLng(e.latitude, e.longitude)),
                r.push(t)
            })
            var o = Number(e.width) || 1,
              { r: s, g: l, b: u, a: c } = Q_(e.color),
              { r: d, g: h, b: f, a: p } = Q_(e.borderColor),
              v = {
                map: i,
                clickable: !1,
                path: r,
                strokeWeight: o,
                strokeColor: e.color || void 0,
                strokeDashStyle: e.dottedLine ? 'dash' : 'solid',
              },
              g = Number(e.borderWidth) || 0,
              m = {
                map: i,
                clickable: !1,
                path: r,
                strokeWeight: o + 2 * g,
                strokeColor: e.borderColor || void 0,
                strokeDashStyle: e.dottedLine ? 'dash' : 'solid',
              }
            'Color' in a
              ? ((v.strokeColor = new a.Color(s, l, u, c)),
                (m.strokeColor = new a.Color(d, h, f, p)))
              : ((v.strokeColor = 'rgb('.concat(s, ', ').concat(l, ', ').concat(u, ')')),
                (v.strokeOpacity = c),
                (m.strokeColor = 'rgb('.concat(d, ', ').concat(h, ', ').concat(f, ')')),
                (m.strokeOpacity = p)),
              g && (n = new a.Polyline(m)),
              (t = new a.Polyline(v))
          }
          o(e),
            jo(e, function (e) {
              r(), o(e)
            })
        }),
        ls(r),
        () => null
      )
    },
  })
  const ny = Gp({
    name: 'MapCircle',
    props: {
      latitude: { type: [Number, String], require: !0 },
      longitude: { type: [Number, String], require: !0 },
      color: { type: String, default: '#000000' },
      fillColor: { type: String, default: '#00000000' },
      radius: { type: [Number, String], require: !0 },
      strokeWidth: { type: [Number, String], default: '' },
      level: { type: String, default: '' },
    },
    setup(e) {
      var t
      function n() {
        t && t.setMap(null)
      }
      return (
        Ps('onMapReady')((r, i) => {
          function a(e) {
            var n =
                G_() || K_() ? [e.longitude, e.latitude] : new i.LatLng(e.latitude, e.longitude),
              a = {
                map: r,
                center: n,
                clickable: !1,
                radius: e.radius,
                strokeWeight: Number(e.strokeWidth) || 1,
                strokeDashStyle: 'solid',
              },
              { r: o, g: s, b: l, a: u } = Q_(e.fillColor),
              { r: c, g: d, b: h, a: f } = Q_(e.color)
            'Color' in i
              ? ((a.fillColor = new i.Color(o, s, l, u)), (a.strokeColor = new i.Color(c, d, h, f)))
              : ((a.fillColor = 'rgb('.concat(o, ', ').concat(s, ', ').concat(l, ')')),
                (a.fillOpacity = u),
                (a.strokeColor = 'rgb('.concat(c, ', ').concat(d, ', ').concat(h, ')')),
                (a.strokeOpacity = f)),
              (t = new i.Circle(a)),
              G_() && r.add(t)
          }
          a(e),
            jo(e, function (e) {
              n(), a(e)
            })
        }),
        ls(n),
        () => null
      )
    },
  })
  var ry = {
    id: { type: [Number, String], default: '' },
    position: { type: Object, required: !0 },
    iconPath: { type: String, required: !0 },
    clickable: { type: [Boolean, String], default: '' },
    trigger: { type: Function, required: !0 },
  }
  const iy = Gp({
    name: 'MapControl',
    props: ry,
    setup(e) {
      var t = ql(() => bc(e.iconPath)),
        n = ql(() => {
          var t = 'top:'.concat(e.position.top || 0, 'px;left:').concat(e.position.left || 0, 'px;')
          return (
            e.position.width && (t += 'width:'.concat(e.position.width, 'px;')),
            e.position.height && (t += 'height:'.concat(e.position.height, 'px;')),
            t
          )
        }),
        r = (t) => {
          e.clickable && e.trigger('controltap', t, { controlId: e.id })
        }
      return () =>
        gl('div', { class: 'uni-map-control' }, [
          gl(
            'img',
            { src: t.value, style: n.value, class: 'uni-map-control-icon', onClick: r },
            null,
            12,
            ['src', 'onClick'],
          ),
        ])
    },
  })
  var ay = A,
    oy = le,
    sy = S('species'),
    ly = {},
    uy = le
  function cy(e) {
    var t, n
    ;(this.promise = new e(function (e, r) {
      if (void 0 !== t || void 0 !== n) throw TypeError('Bad Promise constructor')
      ;(t = e), (n = r)
    })),
      (this.resolve = uy(t)),
      (this.reject = uy(n))
  }
  ly.f = function (e) {
    return new cy(e)
  }
  var dy = A,
    hy = C,
    fy = ly,
    py = be,
    vy = a,
    gy = l,
    my = function (e, t) {
      var n,
        r = ay(e).constructor
      return void 0 === r || null == (n = ay(r)[sy]) ? t : oy(n)
    },
    _y = function (e, t) {
      if ((dy(e), hy(t) && t.constructor === e)) return t
      var n = fy.f(e)
      return (0, n.resolve)(t), n.promise
    }
  function yy() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
    return new Promise((t, n) => {
      UniViewJSBridge.invokeServiceMethod('getLocation', e, (e) => {
        e.latitude && e.longitude ? t(e) : n((e && e.errMsg) || 'getLocation:fail')
      })
    })
  }
  py(py.P + py.R, 'Promise', {
    finally: function (e) {
      var t = my(this, vy.Promise || gy.Promise),
        n = 'function' == typeof e
      return this.then(
        n
          ? function (n) {
              return _y(t, e()).then(function () {
                return n
              })
            }
          : e,
        n
          ? function (n) {
              return _y(t, e()).then(function () {
                throw n
              })
            }
          : e,
      )
    },
  })
  var by = 'MAP_LOCATION'
  const wy = Gp({
      name: 'MapLocation',
      setup() {
        var e,
          t = Fa({ latitude: 0, longitude: 0, rotate: 0 }),
          n = function () {
            yy({ type: 'gcj02', isHighAccuracy: !0 })
              .then((e) => {
                ;(t.latitude = e.latitude), (t.longitude = e.longitude)
              })
              .finally(() => {
                e = setTimeout(n, 3e4)
              })
          }
        Ps('onMapReady')(n),
          ls(function () {
            e && clearTimeout(e)
          })
        var r = Ps('addMapChidlContext'),
          i = Ps('removeMapChidlContext'),
          a = { id: by, state: t }
        return (
          r(a),
          ls(() => i(a)),
          () =>
            t.latitude
              ? gl(
                  J_,
                  xl({ anchor: { x: 0.5, y: 0.5 }, width: '44', height: '44', iconPath: H_ }, t),
                  null,
                  16,
                  ['iconPath'],
                )
              : null
        )
      },
    }),
    xy = Gp({
      name: 'MapPolygon',
      props: {
        dashArray: { type: Array, default: () => [0, 0] },
        points: { type: Array, required: !0 },
        strokeWidth: { type: Number, default: 1 },
        strokeColor: { type: String, default: '#000000' },
        fillColor: { type: String, default: '#00000000' },
        zIndex: { type: Number, default: 0 },
      },
      setup(e) {
        var t
        return (
          Ps('onMapReady')((n, r, i) => {
            function a() {
              var {
                  points: i,
                  strokeWidth: a,
                  strokeColor: o,
                  dashArray: s,
                  fillColor: l,
                  zIndex: u,
                } = e,
                c = i.map((e) => {
                  var { latitude: t, longitude: n } = e
                  return G_() ? [n, t] : new r.LatLng(t, n)
                }),
                { r: d, g: h, b: f, a: p } = Q_(l),
                { r: v, g: g, b: m, a: _ } = Q_(o),
                y = {
                  clickable: !0,
                  cursor: 'crosshair',
                  editable: !1,
                  map: n,
                  fillColor: '',
                  path: c,
                  strokeColor: '',
                  strokeDashStyle: s.some((e) => e > 0) ? 'dash' : 'solid',
                  strokeWeight: a,
                  visible: !0,
                  zIndex: u,
                }
              r.Color
                ? ((y.fillColor = new r.Color(d, h, f, p)),
                  (y.strokeColor = new r.Color(v, g, m, _)))
                : ((y.fillColor = 'rgb('.concat(d, ', ').concat(h, ', ').concat(f, ')')),
                  (y.fillOpacity = p),
                  (y.strokeColor = 'rgb('.concat(v, ', ').concat(g, ', ').concat(m, ')')),
                  (y.strokeOpacity = _)),
                t ? t.setOptions(y) : (t = new r.Polygon(y))
            }
            a(), jo(e, a)
          }),
          ls(() => {
            t.setMap(null)
          }),
          () => null
        )
      },
    })
  function Sy(e) {
    var t = []
    return (
      cn(e) &&
        e.forEach((e) => {
          e && e.latitude && e.longitude && t.push({ latitude: e.latitude, longitude: e.longitude })
        }),
      t
    )
  }
  function ky(e, t, n) {
    return G_()
      ? (function (e, t, n) {
          return new e.LngLat(n, t)
        })(e, t, n)
      : (function (e, t, n) {
          return new e.LatLng(t, n)
        })(e, t, n)
  }
  function Cy(e) {
    return 'getLat' in e ? e.getLat() : e.lat()
  }
  function Ty(e) {
    return 'getLng' in e ? e.getLng() : e.lng()
  }
  function Ay(e, t, n) {
    var r,
      i,
      a,
      o,
      s = Jp(t, n),
      l = eo(null),
      u = Fa({
        latitude: Number(e.latitude),
        longitude: Number(e.longitude),
        includePoints: Sy(e.includePoints),
      }),
      c = []
    function d(e) {
      a ? e(i, r, s) : c.push(e)
    }
    var h = []
    function f(e) {
      o ? e() : c.push(e)
    }
    var p = {}
    function v() {
      var e = i.getCenter()
      return { scale: i.getZoom(), centerLocation: { latitude: Cy(e), longitude: Ty(e) } }
    }
    function g() {
      if (G_()) {
        var e = []
        u.includePoints.forEach((t) => {
          e.push([t.longitude, t.latitude])
        })
        var t = new r.Bounds(...e)
        i.setBounds(t)
      } else {
        var n = new r.LatLngBounds()
        u.includePoints.forEach((e) => {
          var { latitude: t, longitude: i } = e,
            a = new r.LatLng(t, i)
          n.extend(a)
        }),
          i.fitBounds(n)
      }
    }
    function m() {
      var t = l.value,
        a = ky(r, u.latitude, u.longitude),
        c = r.event || r.Event,
        d = new r.Map(t, {
          center: a,
          zoom: Number(e.scale),
          disableDoubleClickZoom: !0,
          mapTypeControl: !1,
          zoomControl: !1,
          scaleControl: !1,
          panControl: !1,
          fullscreenControl: !1,
          streetViewControl: !1,
          keyboardShortcuts: !1,
          minZoom: 5,
          maxZoom: 18,
          draggable: !0,
        })
      jo(
        () => e.scale,
        (e) => {
          d.setZoom(Number(e) || 16)
        },
      ),
        f(() => {
          var e
          u.includePoints.length && (g(), (e = ky(r, u.latitude, u.longitude)), i.setCenter(e))
        })
      var p = c.addListener(d, 'bounds_changed', () => {
        p.remove(), (o = !0), h.forEach((e) => e()), (h.length = 0)
      })
      c.addListener(d, 'click', () => {
        s('tap', {}, {}), s('click', {}, {})
      }),
        c.addListener(d, 'dragstart', () => {
          s('regionchange', { __evName: 'regionchange' }, { type: 'begin', causedBy: 'gesture' })
        }),
        c.addListener(d, 'dragend', () => {
          s(
            'regionchange',
            { __evName: 'regionchange' },
            on({ type: 'end', causedBy: 'drag' }, v()),
          )
        })
      var m = () => {
        n('update:scale', d.getZoom()),
          s(
            'regionchange',
            { __evName: 'regionchange' },
            on({ type: 'end', causedBy: 'scale' }, v()),
          )
      }
      return (
        c.addListener(d, 'zoom_changed', m),
        c.addListener(d, 'zoomend', m),
        c.addListener(d, 'center_changed', () => {
          var e = d.getCenter(),
            t = Cy(e),
            r = Ty(e)
          n('update:latitude', t), n('update:longitude', r)
        }),
        d
      )
    }
    jo([() => e.latitude, () => e.longitude], (e) => {
      var [t, n] = e,
        a = Number(t),
        o = Number(n)
      if ((a !== u.latitude || o !== u.longitude) && ((u.latitude = a), (u.longitude = o), i)) {
        var s = ky(r, u.latitude, u.longitude)
        i.setCenter(s)
      }
    }),
      jo(
        () => e.includePoints,
        (e) => {
          ;(u.includePoints = Sy(e)), o && g()
        },
        { deep: !0 },
      )
    try {
      o_(function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 ? arguments[2] : void 0
        switch (e) {
          case 'getCenterLocation':
            d(() => {
              var t = i.getCenter()
              n({ latitude: Cy(t), longitude: Ty(t), errMsg: ''.concat(e, ':ok') })
            })
            break
          case 'moveToLocation':
            var a = Number(t.latitude),
              s = Number(t.longitude)
            if (!a || !s) {
              var l = p[by]
              l && ((a = l.state.latitude), (s = l.state.longitude))
            }
            if (a && s) {
              if (((u.latitude = a), (u.longitude = s), i)) {
                var c = ky(r, a, s)
                i.setCenter(c)
              }
              d(() => {
                n({ errMsg: ''.concat(e, ':ok') })
              })
            } else n({ errMsg: ''.concat(e, ':fail') })
            break
          case 'translateMarker':
            d(() => {
              var r = p[t.markerId]
              if (r) {
                try {
                  r.translate(t)
                } catch (i) {
                  return void n({ errMsg: ''.concat(e, ':fail ').concat(i.message) })
                }
                n({ errMsg: ''.concat(e, ':ok') })
              } else n({ errMsg: ''.concat(e, ':fail not found') })
            })
            break
          case 'includePoints':
            ;(u.includePoints = Sy(t.includePoints)),
              (o || G_()) && g(),
              f(() => {
                n({ errMsg: ''.concat(e, ':ok') })
              })
            break
          case 'getRegion':
            f(() => {
              var t = i.getBounds(),
                r = t.getSouthWest(),
                a = t.getNorthEast()
              n({
                southwest: { latitude: Cy(r), longitude: Ty(r) },
                northeast: { latitude: Cy(a), longitude: Ty(a) },
                errMsg: ''.concat(e, ':ok'),
              })
            })
            break
          case 'getScale':
            d(() => {
              n({ scale: i.getZoom(), errMsg: ''.concat(e, ':ok') })
            })
        }
      }, l_())
    } catch (_) {}
    return (
      is(() => {
        q_(e.libraries, (e) => {
          ;(r = e),
            (i = m()),
            (a = !0),
            c.forEach((e) => e(i, r, s)),
            (c.length = 0),
            s('updated', {}, {})
        })
      }),
      Is('onMapReady', d),
      Is('addMapChidlContext', function (e) {
        p[e.id] = e
      }),
      Is('removeMapChidlContext', function (e) {
        delete p[e.id]
      }),
      { state: u, mapRef: l, trigger: s }
    )
  }
  const My = Zp({
    name: 'MapWeb',
    props: {
      id: { type: String, default: '' },
      latitude: { type: [String, Number], default: 0 },
      longitude: { type: [String, Number], default: 0 },
      scale: { type: [String, Number], default: 16 },
      markers: { type: Array, default: () => [] },
      includePoints: { type: Array, default: () => [] },
      polyline: { type: Array, default: () => [] },
      circles: { type: Array, default: () => [] },
      controls: { type: Array, default: () => [] },
      showLocation: { type: [Boolean, String], default: !1 },
      libraries: { type: Array, default: () => [] },
      polygons: { type: Array, default: () => [] },
    },
    emits: [
      'markertap',
      'labeltap',
      'callouttap',
      'controltap',
      'regionchange',
      'tap',
      'click',
      'updated',
      'update:scale',
      'update:latitude',
      'update:longitude',
    ],
    setup(e, t) {
      var { emit: n, slots: r } = t,
        i = eo(null),
        { mapRef: a, trigger: o } = Ay(e, i, n)
      return () =>
        gl(
          'uni-map',
          { class: 'web', ref: i, id: e.id },
          [
            gl(
              'div',
              { ref: a, style: 'width: 100%; height: 100%; position: relative; overflow: hidden' },
              null,
              512,
            ),
            e.markers.map((e) => gl(J_, xl({ key: e.id }, e), null, 16)),
            e.polyline.map((e) => gl(ty, e, null, 16)),
            e.circles.map((e) => gl(ny, e, null, 16)),
            e.controls.map((e) => gl(iy, xl(e, { trigger: o }), null, 16, ['trigger'])),
            e.showLocation && gl(wy, null, null),
            e.polygons.map((e) => gl(xy, e, null, 16)),
            gl(
              'div',
              {
                style:
                  'position: absolute;top: 0;width: 100%;height: 100%;overflow: hidden;pointer-events: none;',
              },
              [r.default && r.default()],
            ),
          ],
          8,
          ['id'],
        )
    },
  })
  const Ey = Zp({
    name: 'Map',
    props: {
      id: { type: String, default: '' },
      latitude: { type: [Number, String], default: '' },
      longitude: { type: [Number, String], default: '' },
      scale: { type: [String, Number], default: 16 },
      markers: { type: Array, default: () => [] },
      polyline: { type: Array, default: () => [] },
      circles: { type: Array, default: () => [] },
      polygons: { type: Array, default: () => [] },
      controls: { type: Array, default: () => [] },
    },
    components: { MapDefault: I_, MapWeb: My },
    emits: ['click', 'regionchange', 'controltap', 'markertap', 'callouttap'],
    setup(e, t) {
      var { emit: n } = t
      function r(e) {
        n('click', e)
      }
      function i(e) {
        n('regionchange', e)
      }
      function a(e) {
        n('controltap', e)
      }
      function o(e) {
        n('markertap', e)
      }
      function s(e) {
        n('callouttap', e)
      }
      return () =>
        __uniConfig.qqMapKey
          ? gl(
              My,
              {
                id: e.id,
                latitude: e.latitude,
                longitude: e.longitude,
                scale: e.scale,
                markers: e.markers,
                polyline: e.polyline,
                circles: e.circles,
                polygons: e.polygons,
                controls: e.controls,
                onClick: r,
                onRegionchange: i,
                onControltap: a,
                onMarkertap: o,
                onCallouttap: s,
              },
              null,
              8,
              [
                'id',
                'latitude',
                'longitude',
                'scale',
                'markers',
                'polyline',
                'circles',
                'polygons',
                'controls',
                'onClick',
                'onRegionchange',
                'onControltap',
                'onMarkertap',
                'onCallouttap',
              ],
            )
          : gl(
              I_,
              {
                id: e.id,
                latitude: e.latitude,
                longitude: e.longitude,
                scale: e.scale,
                markers: e.markers,
                polyline: e.polyline,
                circles: e.circles,
                polygons: e.polygons,
                controls: e.controls,
                onClick: r,
                onRegionchange: i,
                onControltap: a,
                onMarkertap: o,
                onCallouttap: s,
              },
              null,
              8,
              [
                'id',
                'latitude',
                'longitude',
                'scale',
                'markers',
                'polyline',
                'circles',
                'polygons',
                'controls',
                'onClick',
                'onRegionchange',
                'onControltap',
                'onMarkertap',
                'onCallouttap',
              ],
            )
    },
  })
  var Oy = {
    latitude: { type: Number },
    longitude: { type: Number },
    keyword: { type: String, default: '' },
    useSecureNetwork: { type: Boolean, default: !1 },
  }
  function Ly(e) {
    var t = Fa([]),
      n = eo(-1),
      r = ql(() => t[n.value]),
      i = Fa({
        loading: !0,
        pageSize: 20,
        pageIndex: 1,
        hasNextPage: !0,
        nextPage: null,
        selectedIndex: n,
        selected: r,
      })
    function a(e) {
      e.forEach((e) => {
        t.push({
          name: e.title || e.name,
          address: e.address,
          distance: e._distance || e.distance,
          latitude: e.location.lat,
          longitude: e.location.lng,
        })
      })
    }
    function o() {
      return s.apply(this, arguments)
    }
    function s() {
      return (
        (s = Zm(function* () {
          i.loading = !0
          var n = yield Y_()
          if (n.type === U_.GOOGLE) {
            if (i.pageIndex > 1 && i.nextPage) return void i.nextPage()
            new google.maps.places.PlacesService(document.createElement('div'))[
              e.keyword ? 'textSearch' : 'nearbySearch'
            ](
              { location: { lat: e.latitude, lng: e.longitude }, query: e.keyword, radius: 5e3 },
              (e, n, r) => {
                ;(i.loading = !1),
                  e &&
                    e.length &&
                    e.forEach((e) => {
                      t.push({
                        name: e.name || '',
                        address: e.vicinity || e.formatted_address || '',
                        distance: 0,
                        latitude: e.geometry.location.lat(),
                        longitude: e.geometry.location.lng(),
                      })
                    }),
                  r &&
                    (r.hasNextPage
                      ? (i.nextPage = () => {
                          r.nextPage()
                        })
                      : (i.hasNextPage = !1))
              },
            )
          } else
            n.type === U_.QQ
              ? (function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  return new Promise((t, n) => {
                    UniViewJSBridge.invokeServiceMethod('mapPlaceSearch', e, (e) => {
                      e && e.errMsg ? n(e) : t(e)
                    })
                  })
                })({
                  keyword: e.keyword,
                  latitude: e.latitude,
                  longitude: e.longitude,
                  pageIndex: i.pageIndex,
                  pageSize: i.pageSize,
                  secure: e.useSecureNetwork,
                })
                  .then((e) => {
                    a(e), (i.loading = !1)
                  })
                  .catch((e) => {
                    i.loading = !1
                  })
              : n.type === U_.AMAP &&
                window.AMap.plugin('AMap.PlaceSearch', function () {
                  var t = new window.AMap.PlaceSearch({
                      city: '全国',
                      pageSize: 10,
                      pageIndex: i.pageIndex,
                    }),
                    n = e.keyword || '',
                    r = e.keyword ? 5e4 : 5e3
                  t.searchNearBy(n, [e.longitude, e.latitude], r, function (e, t) {
                    'error' === e
                      ? console.error(t)
                      : 'no_data' === e
                        ? (i.hasNextPage = !1)
                        : a(t.poiList.pois)
                  }),
                    (i.loading = !1)
                })
        })),
        s.apply(this, arguments)
      )
    }
    return {
      listState: i,
      list: t,
      loadMore: function () {
        !i.loading && i.hasNextPage && (i.pageIndex++, o())
      },
      reset: function () {
        ;(i.selectedIndex = -1),
          (i.pageIndex = 1),
          (i.hasNextPage = !0),
          (i.nextPage = null),
          t.splice(0, t.length)
      },
      getList: o,
    }
  }
  const zy = Gp({
    name: 'LoctaionPicker',
    props: Oy,
    emits: ['close'],
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = Jp(r, n)
      fi()
      var { t: a } = ui(),
        o = (function (e) {
          var t = Fa({
            latitude: 0,
            longitude: 0,
            keyword: '',
            searching: !1,
            useSecureNetwork: e.useSecureNetwork,
          })
          function n() {
            e.latitude && e.longitude && ((t.latitude = e.latitude), (t.longitude = e.longitude))
          }
          return (
            e.keyword && ((t.keyword = e.keyword), (t.searching = !0)),
            jo([() => e.latitude, () => e.longitude], n),
            n(),
            t
          )
        })(e),
        { list: s, listState: l, loadMore: u, reset: c, getList: d } = Ly(o),
        h = Hr(
          () => {
            c(), o.keyword && d()
          },
          1e3,
          { setTimeout: setTimeout, clearTimeout: clearTimeout },
        )
      function f(e) {
        ;(o.keyword = e.detail.value), h()
      }
      function p(e) {
        if (l.selected) {
          var t = new CustomEvent('close', { detail: on({}, l.selected) })
          i('close', t, t.detail)
        }
      }
      function v(e) {
        var t = new CustomEvent('close', { detail: {} })
        i('close', t, t.detail)
      }
      function g(e) {
        var t = e.detail.centerLocation
        t && _(t)
      }
      function m() {
        yy({ type: 'gcj02', isHighAccuracy: !0 }).then((e) => {
          var { latitude: t, longitude: n } = e
          _({ latitude: t, longitude: n })
        })
      }
      function _(e) {
        var { latitude: t, longitude: n } = e
        ;(o.latitude = t), (o.longitude = n), c(), d()
      }
      return (
        jo(
          () => o.searching,
          (e) => {
            c(), e || d()
          },
        ),
        (o.latitude && o.longitude) || m(),
        () => {
          var e,
            t = s.map((e, t) => {
              return gl(
                'div',
                {
                  key: t,
                  class: { 'list-item': !0, selected: l.selectedIndex === t },
                  onClick: () => {
                    ;(l.selectedIndex = t), (o.latitude = e.latitude), (o.longitude = e.longitude)
                  },
                },
                [
                  Pu(Iu, '#007aff', 24),
                  gl('div', { class: 'list-item-title' }, [e.name]),
                  gl('div', { class: 'list-item-detail' }, [
                    ((n = e.distance),
                    n > 100
                      ? ''.concat(n > 1e3 ? (n / 1e3).toFixed(1) + 'k' : n.toFixed(0), 'm | ')
                      : n > 0
                        ? '<100m | '
                        : ''),
                    e.address,
                  ]),
                ],
                10,
                ['onClick'],
              )
              var n
            })
          return (
            l.loading &&
              t.unshift(
                gl('div', { class: 'list-loading' }, [gl('i', { class: 'uni-loading' }, null)]),
              ),
            gl(
              'div',
              { class: 'uni-system-choose-location', ref: r },
              [
                gl(
                  Ey,
                  {
                    latitude: o.latitude,
                    longitude: o.longitude,
                    class: 'map',
                    'show-location': !0,
                    libraries: ['places'],
                    onUpdated: d,
                    onRegionchange: g,
                  },
                  {
                    default: () => [
                      gl(
                        'div',
                        {
                          class: 'map-location',
                          style: 'background-image: url("'.concat(W_, '")'),
                        },
                        null,
                      ),
                      gl('div', { class: 'map-move', onClick: m }, [Pu($_, '#000000', 24)], 8, [
                        'onClick',
                      ]),
                    ],
                    _: 1,
                  },
                  8,
                  ['latitude', 'longitude', 'show-location', 'onUpdated', 'onRegionchange'],
                ),
                gl('div', { class: 'nav' }, [
                  gl(
                    'div',
                    { class: 'nav-btn back', onClick: v },
                    [
                      Pu(
                        'M17.25 16.156l7.375-7.313q0.281-0.281 0.281-0.641t-0.281-0.641q-0.25-0.25-0.625-0.25t-0.625 0.25l-7.375 7.344-7.313-7.344q-0.25-0.25-0.625-0.25t-0.625 0.25q-0.281 0.25-0.281 0.625t0.281 0.625l7.313 7.344-7.375 7.344q-0.281 0.25-0.281 0.625t0.281 0.625q0.125 0.125 0.281 0.188t0.344 0.063q0.156 0 0.328-0.063t0.297-0.188l7.375-7.344 7.375 7.406q0.125 0.156 0.297 0.219t0.328 0.063q0.188 0 0.344-0.078t0.281-0.203q0.281-0.25 0.281-0.609t-0.281-0.641l-7.375-7.406z',
                        '#ffffff',
                        26,
                      ),
                    ],
                    8,
                    ['onClick'],
                  ),
                  gl(
                    'div',
                    { class: { 'nav-btn': !0, confirm: !0, disable: !l.selected }, onClick: p },
                    [Pu(Iu, '#ffffff', 26)],
                    10,
                    ['onClick'],
                  ),
                ]),
                gl('div', { class: 'menu' }, [
                  gl('div', { class: 'search' }, [
                    gl(
                      Dg,
                      {
                        value: o.keyword,
                        class: 'search-input',
                        placeholder: a('uni.chooseLocation.search'),
                        onFocus: () => (o.searching = !0),
                        onInput: f,
                      },
                      null,
                      8,
                      ['value', 'placeholder', 'onFocus', 'onInput'],
                    ),
                    o.searching &&
                      gl(
                        'div',
                        {
                          class: 'search-btn',
                          onClick: () => {
                            ;(o.searching = !1), (o.keyword = '')
                          },
                        },
                        [a('uni.chooseLocation.cancel')],
                        8,
                        ['onClick'],
                      ),
                  ]),
                  gl(
                    Rm,
                    { 'scroll-y': !0, class: 'list', onScrolltolower: u },
                    ((e = t),
                    'function' == typeof e ||
                    ('[object Object]' === Object.prototype.toString.call(e) && !dl(e))
                      ? t
                      : { default: () => [t], _: 2 }),
                    8,
                    ['scroll-y', 'onScrolltolower'],
                  ),
                ]),
              ],
              512,
            )
          )
        }
      )
    },
  })
  var Ny = {
    latitude: { type: Number },
    longitude: { type: Number },
    scale: { type: Number, default: 18 },
    name: { type: String, default: '' },
    address: { type: String, default: '' },
    showNav: { type: Boolean, default: !1 },
  }
  const Iy = Gp({
    name: 'LocationView',
    props: Ny,
    emits: ['close', 'navChange'],
    setup(e, t) {
      var { emit: n } = t,
        r = eo(null),
        i = Jp(r, n),
        a = (function (e) {
          var t = Fa({
            center: { latitude: 0, longitude: 0 },
            marker: { id: 1, latitude: 0, longitude: 0, iconPath: W_, width: 32, height: 52 },
            location: { id: 2, latitude: 0, longitude: 0, iconPath: H_, width: 44, height: 44 },
          })
          function n() {
            e.latitude &&
              e.longitude &&
              ((t.center.latitude = e.latitude),
              (t.center.longitude = e.longitude),
              (t.marker.latitude = e.latitude),
              (t.marker.longitude = e.longitude))
          }
          return jo([() => e.latitude, () => e.longitude], n), n(), t
        })(e)
      function o(e) {
        var t = e.detail.centerLocation
        t && ((a.center.latitude = t.latitude), (a.center.longitude = t.longitude))
      }
      function s() {
        i('navClick', new CustomEvent('navClick', {}))
      }
      function l(e) {
        var t = new CustomEvent('close', {})
        i('close', t, t.detail)
      }
      function u(e) {
        var { latitude: t, longitude: n } = e
        ;(a.center.latitude = t), (a.center.longitude = n)
      }
      return (
        yy({ type: 'gcj02', isHighAccuracy: !0 }).then((e) => {
          var { latitude: t, longitude: n } = e
          ;(a.location.latitude = t), (a.location.longitude = n)
        }),
        () =>
          gl(
            'div',
            { class: 'uni-system-open-location', ref: r },
            [
              gl(
                Ey,
                {
                  latitude: a.center.latitude,
                  longitude: a.center.longitude,
                  class: 'map',
                  markers: [a.marker, a.location],
                  onRegionchange: o,
                },
                {
                  default: () => [
                    gl(
                      'div',
                      { class: 'map-move', onClick: () => u(a.location) },
                      [Pu($_, '#000000', 24)],
                      8,
                      ['onClick'],
                    ),
                  ],
                },
                8,
                ['latitude', 'longitude', 'markers', 'onRegionchange'],
              ),
              gl('div', { class: 'info' }, [
                gl('div', { class: 'name', onClick: () => u(a.marker) }, [e.name], 8, ['onClick']),
                gl('div', { class: 'address', onClick: () => u(a.marker) }, [e.address], 8, [
                  'onClick',
                ]),
                gl(
                  'div',
                  { class: 'nav', onClick: s },
                  [
                    Pu(
                      'M28 17c-6.49396875 0-12.13721875 2.57040625-15 6.34840625V5.4105l6.29859375 6.29859375c0.387875 0.387875 1.02259375 0.387875 1.4105 0 0.387875-0.387875 0.387875-1.02259375 0-1.4105L12.77853125 2.36803125a0.9978125 0.9978125 0 0 0-0.0694375-0.077125c-0.1944375-0.1944375-0.45090625-0.291375-0.70721875-0.290875l-0.00184375-0.0000625-0.00184375 0.0000625c-0.2563125-0.0005-0.51278125 0.09640625-0.70721875 0.290875a0.9978125 0.9978125 0 0 0-0.0694375 0.077125l-7.930625 7.9305625c-0.387875 0.387875-0.387875 1.02259375 0 1.4105 0.387875 0.387875 1.02259375 0.387875 1.4105 0L11 5.4105V29c0 0.55 0.45 1 1 1s1-0.45 1-1c0-5.52284375 6.71571875-10 15-10 0.55228125 0 1-0.44771875 1-1 0-0.55228125-0.44771875-1-1-1z',
                      '#ffffff',
                      26,
                    ),
                  ],
                  8,
                  ['onClick'],
                ),
              ]),
              gl(
                'div',
                { class: 'nav-btn-back', onClick: l },
                [
                  Pu(
                    'M21.781 7.844l-9.063 8.594 9.063 8.594q0.25 0.25 0.25 0.609t-0.25 0.578q-0.25 0.25-0.578 0.25t-0.578-0.25l-9.625-9.125q-0.156-0.125-0.203-0.297t-0.047-0.359q0-0.156 0.047-0.328t0.203-0.297l9.625-9.125q0.25-0.25 0.578-0.25t0.578 0.25q0.25 0.219 0.25 0.578t-0.25 0.578z',
                    '#ffffff',
                    26,
                  ),
                ],
                8,
                ['onClick'],
              ),
            ],
            512,
          )
      )
    },
  })
  var Py = { SELECTOR: 'selector', MULTISELECTOR: 'multiSelector', TIME: 'time', DATE: 'date' },
    Dy = { YEAR: 'year', MONTH: 'month', DAY: 'day' }
  function By(e) {
    return e > 9 ? e : '0'.concat(e)
  }
  function Ry(e, t) {
    e = String(e || '')
    var n = new Date()
    if (t === Py.TIME) {
      var r = e.split(':')
      2 === r.length && n.setHours(parseInt(r[0]), parseInt(r[1]))
    } else {
      var i = e.split('-')
      3 === i.length &&
        n.setFullYear(parseInt(i[0]), parseInt(String(parseFloat(i[1]) - 1)), parseInt(i[2]))
    }
    return n
  }
  const Fy = Zp({
    name: 'Picker',
    props: {
      name: { type: String, default: '' },
      range: { type: Array, default: () => [] },
      rangeKey: { type: String, default: '' },
      value: { type: [Number, String, Array], default: 0 },
      mode: {
        type: String,
        default: Py.SELECTOR,
        validator: (e) => Object.values(Py).indexOf(e) >= 0,
      },
      fields: { type: String, default: '' },
      start: {
        type: String,
        default: function (e) {
          if (e.mode === Py.TIME) return '00:00'
          if (e.mode === Py.DATE) {
            var t = new Date().getFullYear() - 100
            switch (e.fields) {
              case Dy.YEAR:
                return t
              case Dy.MONTH:
                return t + '-01'
              default:
                return t + '-01-01'
            }
          }
          return ''
        },
      },
      end: {
        type: String,
        default: function (e) {
          if (e.mode === Py.TIME) return '23:59'
          if (e.mode === Py.DATE) {
            var t = new Date().getFullYear() + 100
            switch (e.fields) {
              case Dy.YEAR:
                return t
              case Dy.MONTH:
                return t + '-12'
              default:
                return t + '-12-31'
            }
          }
          return ''
        },
      },
      disabled: { type: [Boolean, String], default: !1 },
    },
    emits: ['change', 'cancel', 'columnchange'],
    setup(e, t) {
      var { emit: n } = t
      di()
      var { t: r, getLocale: i } = ui(),
        a = eo(null),
        o = Jp(a, n),
        s = eo(null),
        l = eo(null),
        u = __uniConfig.darkmode ? plus.navigator.getUIStyle() : 'light'
      function c(e) {
        u = e.theme
      }
      UniViewJSBridge.subscribe(sr, c),
        ss(() => {
          UniViewJSBridge.unsubscribe(sr, c)
        })
      var d = () => {
          var t = e.value
          switch (e.mode) {
            case Py.MULTISELECTOR:
              cn(t) || (t = []), cn(s.value) || (s.value = [])
              for (
                var n = (s.value.length = Math.max(t.length, e.range.length)), r = 0;
                r < n;
                r++
              ) {
                var i = Number(t[r]),
                  a = Number(s.value[r]),
                  o = isNaN(i) ? (isNaN(a) ? 0 : a) : i
                s.value.splice(r, 1, o < 0 ? 0 : o)
              }
              break
            case Py.TIME:
            case Py.DATE:
              s.value = String(t)
              break
            default:
              var l = Number(t)
              s.value = l < 0 ? 0 : l
          }
        },
        h = (e) => {
          l.value && l.value.sendMessage(e)
        },
        f = (t, n) => {
          ;(t.mode !== Py.TIME && t.mode !== Py.DATE) || t.fields
            ? ((t.fields = Object.values(Dy).includes(t.fields) ? t.fields : Dy.DAY),
              ((e) => {
                var t = { event: 'cancel' }
                l.value = Ju({
                  url: '__uniapppicker',
                  data: on({}, e, { theme: u }),
                  style: {
                    titleNView: !1,
                    animationType: 'none',
                    animationDuration: 0,
                    background: 'rgba(0,0,0,0)',
                    popGesture: 'none',
                  },
                  onMessage: (n) => {
                    var r = n.event
                    if ('created' !== r)
                      return 'columnchange' === r
                        ? (delete n.event, void o(r, {}, n))
                        : void (t = n)
                    h(e)
                  },
                  onClose: () => {
                    l.value = null
                    var e = t.event
                    delete t.event, e && o(e, {}, t)
                  },
                })
              })(t))
            : ((t, n) => {
                plus.nativeUI[e.mode === Py.TIME ? 'pickTime' : 'pickDate'](
                  (t) => {
                    var n = t.date
                    o(
                      'change',
                      {},
                      {
                        value:
                          e.mode === Py.TIME
                            ? ''.concat(By(n.getHours()), ':').concat(By(n.getMinutes()))
                            : ''
                                .concat(n.getFullYear(), '-')
                                .concat(By(n.getMonth() + 1), '-')
                                .concat(By(n.getDate())),
                      },
                    )
                  },
                  () => {
                    o('cancel', {}, {})
                  },
                  e.mode === Py.TIME
                    ? { time: Ry(e.value, Py.TIME), popover: n }
                    : {
                        date: Ry(e.value, Py.DATE),
                        minDate: Ry(e.start, Py.DATE),
                        maxDate: Ry(e.end, Py.DATE),
                        popover: n,
                      },
                )
              })(0, n)
        },
        p = (t) => {
          if (!e.disabled) {
            var n = t.currentTarget.getBoundingClientRect()
            f(
              Object.assign({}, e, {
                value: s.value,
                locale: i(),
                messages: { done: r('uni.picker.done'), cancel: r('uni.picker.cancel') },
              }),
              { top: n.top + v_(), left: n.left, width: n.width, height: n.height },
            )
          }
        },
        v = Ps(tv, !1),
        g = {
          submit: () => [e.name, s.value],
          reset: () => {
            switch (e.mode) {
              case Py.SELECTOR:
                s.value = 0
                break
              case Py.MULTISELECTOR:
                cn(e.value) && (s.value = e.value.map((e) => 0))
                break
              case Py.DATE:
              case Py.TIME:
                s.value = ''
            }
          },
        }
      return (
        v && (v.addField(g), ss(() => v.removeField(g))),
        Object.keys(e).forEach((t) => {
          'name' !== t &&
            jo(
              () => e[t],
              (e) => {
                var n = {}
                ;(n[t] = e), h(n)
              },
              { deep: !0 },
            )
        }),
        jo(() => e.value, d, { deep: !0 }),
        d(),
        () => gl('uni-picker', { ref: a, onClick: p }, [gl('slot', null, null)], 8, ['onClick'])
      )
    },
  })
  var qy = {
      id: { type: String, default: '' },
      src: { type: String, default: '' },
      duration: { type: [Number, String], default: '' },
      controls: { type: [Boolean, String], default: !0 },
      danmuList: { type: Array, default: () => [] },
      danmuBtn: { type: [Boolean, String], default: !1 },
      enableDanmu: { type: [Boolean, String], default: !1 },
      autoplay: { type: [Boolean, String], default: !1 },
      loop: { type: [Boolean, String], default: !1 },
      muted: { type: [Boolean, String], default: !1 },
      objectFit: { type: String, default: 'contain' },
      poster: { type: String, default: '' },
      direction: { type: [String, Number], default: '' },
      showProgress: { type: Boolean, default: !0 },
      initialTime: { type: [String, Number], default: 0 },
      showFullscreenBtn: { type: [Boolean, String], default: !0 },
      pageGesture: { type: [Boolean, String], default: !1 },
      enableProgressGesture: { type: [Boolean, String], default: !0 },
      vslideGesture: { type: [Boolean, String], default: !1 },
      vslideGestureInFullscreen: { type: [Boolean, String], default: !1 },
      showPlayBtn: { type: [Boolean, String], default: !0 },
      showMuteBtn: { type: [Boolean, String], default: !1 },
      enablePlayGesture: { type: [Boolean, String], default: !0 },
      showCenterPlayBtn: { type: [Boolean, String], default: !0 },
      showLoading: { type: [Boolean, String], default: !0 },
      codec: { type: String, default: 'hardware' },
      httpCache: { type: [Boolean, String], default: !1 },
      playStrategy: { type: [Number, String], default: 0 },
      header: { type: Object, default: () => ({}) },
      advanced: { type: Array, default: () => [] },
      title: { type: String, default: '' },
      isLive: { type: Boolean, default: !1 },
    },
    jy = [
      'play',
      'pause',
      'ended',
      'timeupdate',
      'fullscreenchange',
      'fullscreenclick',
      'waiting',
      'error',
    ],
    Vy = [
      'play',
      'pause',
      'stop',
      'seek',
      'sendDanmu',
      'playbackRate',
      'requestFullScreen',
      'exitFullScreen',
    ]
  const $y = Zp({
    name: 'Video',
    props: qy,
    emits: jy,
    setup(e, t) {
      var n,
        { emit: r } = t,
        i = eo(null),
        a = Jp(i, r),
        o = eo(null),
        s = m_(e, ['id']),
        { position: l, hidden: u, onParentReady: c } = __(o),
        d = Number(e.isLive ? 3 : e.playStrategy)
      return (
        c(() => {
          ;(n = plus.video.createVideoPlayer(
            'video' + Date.now(),
            Object.assign({}, s.value, l, { playStrategy: isNaN(d) ? 0 : d }),
          )),
            plus.webview.currentWebview().append(n),
            u.value && n.hide(),
            jy.forEach((e) => {
              n.addEventListener(e, (t) => {
                a(e, {}, t.detail)
              })
            }),
            jo(
              () => s.value,
              (e) => n.setStyles(e),
              { deep: !0 },
            ),
            jo(
              () => l,
              (e) => n.setStyles(e),
              { deep: !0 },
            ),
            jo(
              () => u.value,
              (e) => {
                n[e ? 'hide' : 'show'](), e || n.setStyles(l)
              },
            )
        }),
        o_((e, t) => {
          if (Vy.includes(e)) {
            var r
            switch (e) {
              case 'seek':
                r = t.position
                break
              case 'sendDanmu':
                r = t
                break
              case 'playbackRate':
                r = t.rate
                break
              case 'requestFullScreen':
                r = t.direction
            }
            n && n[e](r)
          }
        }, l_()),
        ss(() => {
          n && n.close()
        }),
        () =>
          gl(
            'uni-video',
            { ref: i, id: e.id },
            [
              gl('div', { ref: o, class: 'uni-video-container' }, null, 512),
              gl('div', { class: 'uni-video-slot' }, null),
            ],
            8,
            ['id'],
          )
      )
    },
  })
  var Hy,
    Wy = {
      src: { type: String, default: '' },
      updateTitle: { type: Boolean, default: !0 },
      webviewStyles: { type: Object, default: () => ({}) },
    }
  const Uy = Zp({
    name: 'WebView',
    props: Wy,
    setup(e) {
      var t = Bu(),
        n = eo(null),
        { hidden: r, onParentReady: i } = __(n),
        a = ql(() => e.webviewStyles)
      return (
        i(() => {
          var n
          ;((e) => {
            var { htmlId: t, src: n, webviewStyles: r, props: i } = e,
              a = plus.webview.currentWebview(),
              o = on({ 'uni-app': 'none', isUniH5: !0, contentAdjust: !1 }, r),
              s = a.getTitleNView()
            if (s) {
              var l = Qn + parseFloat(o.top || '0')
              plus.navigator.isImmersedStatusbar() && (l += p_()),
                (o.top = String(l)),
                (o.bottom = o.bottom || '0')
            }
            ;(Hy = plus.webview.create(n, t, o)),
              s &&
                Hy.addEventListener('titleUpdate', function () {
                  var e
                  if (i.updateTitle) {
                    var t = null === (e = Hy) || void 0 === e ? void 0 : e.getTitle()
                    a.setStyle({ titleNView: { titleText: t && 'null' !== t ? t : ' ' } })
                  }
                }),
              plus.webview.currentWebview().append(Hy)
          })({
            htmlId: eo('webviewId' + t).value,
            src: bc(e.src),
            webviewStyles: a.value,
            props: e,
          }),
            UniViewJSBridge.publishHandler('webviewInserted', {}, t),
            r.value && (null === (n = Hy) || void 0 === n || n.hide())
        }),
        ss(() => {
          var e
          plus.webview.currentWebview().remove(Hy),
            null === (e = Hy) || void 0 === e || e.close('none'),
            (Hy = null),
            UniViewJSBridge.publishHandler('webviewRemoved', {}, t)
        }),
        jo(
          () => e.src,
          (t) => {
            var n,
              r = bc(t) || ''
            if (r) {
              var i
              if (/^(http|https):\/\//.test(r) && e.webviewStyles.progress)
                null === (i = Hy) ||
                  void 0 === i ||
                  i.setStyle({ progress: { color: e.webviewStyles.progress.color } })
              null === (n = Hy) || void 0 === n || n.loadURL(r)
            }
          },
        ),
        jo(a, (e) => {
          var t
          null === (t = Hy) || void 0 === t || t.setStyle(e)
        }),
        jo(r, (e) => {
          Hy && Hy[e ? 'hide' : 'show']()
        }),
        () => gl('uni-web-view', { ref: n }, null, 512)
      )
    },
  })
  var Yy = {
    '#text': class extends yp {
      constructor(e, t, n, r) {
        super(e, '#text', t, document.createTextNode('')),
          (this._text = ''),
          this.init(r),
          this.insert(t, n)
      }
      init(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
        ;(this._text = e.t || ''), t && this.update()
      }
      setText(e) {
        ;(this._text = e), this.update(), this.updateView()
      }
      update() {
        var { space: e, decode: t } = (this.$parent && this.$parent.$props) || {}
        this.$.textContent = Ym(this._text, { space: e, decode: t }).join(Jn)
      }
    },
    '#comment': class extends yp {
      constructor(e, t, n) {
        super(e, '#comment', t, document.createComment('')), this.insert(t, n)
      }
    },
    VIEW: class extends h_ {
      constructor(e, t, n, r) {
        super(e, document.createElement('uni-view'), t, n, r)
      }
    },
    IMAGE: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-image', pg, t, n, r)
      }
    },
    TEXT: class extends u_ {
      constructor(e, t, n, r) {
        super(e, document.createElement('uni-text'), t, n, r, c_), (this._text = '')
      }
      init(e) {
        ;(this._text = e.t || ''), super.init(e)
      }
      setText(e) {
        ;(this._text = e), this.update(), this.updateView()
      }
      update() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          {
            $props: { space: t, decode: n },
          } = this
        ;(this.$.textContent = Ym(this._text, { space: t, decode: n }).join(Jn)), super.update(e)
      }
    },
    NAVIGATOR: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-navigator', vm, t, n, r, 'uni-navigator')
      }
    },
    FORM: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-form', nv, t, n, r, 'span')
      }
    },
    BUTTON: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-button', uv, t, n, r)
      }
    },
    INPUT: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-input', Dg, t, n, r)
      }
      init(e) {
        super.init(e), k_(this.$props)
      }
    },
    LABEL: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-label', av, t, n, r)
      }
    },
    RADIO: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-radio', Om, t, n, r, '.uni-radio-wrapper')
      }
      setText(e) {
        x_(this.$holder, 'uni-radio-input', e)
      }
    },
    CHECKBOX: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-checkbox', Sv, t, n, r, '.uni-checkbox-wrapper')
      }
      setText(e) {
        x_(this.$holder, 'uni-checkbox-input', e)
      }
    },
    'CHECKBOX-GROUP': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-checkbox-group', xv, t, n, r)
      }
    },
    AD: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-ad', y_, t, n, r)
      }
    },
    CAMERA: class extends C_ {
      constructor(e, t, n) {
        super(e, 'uni-camera', t, n)
      }
    },
    CANVAS: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-canvas', bv, t, n, r, 'uni-canvas > div')
      }
    },
    'COVER-IMAGE': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-cover-image', M_, t, n, r)
      }
    },
    'COVER-VIEW': class extends w_ {
      constructor(e, t, n, r) {
        super(e, 'uni-cover-view', E_, t, n, r, '.uni-cover-view')
      }
    },
    EDITOR: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-editor', og, t, n, r)
      }
    },
    'FUNCTIONAL-PAGE-NAVIGATOR': class extends C_ {
      constructor(e, t, n) {
        super(e, 'uni-functional-page-navigator', t, n)
      }
    },
    ICON: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-icon', cg, t, n, r)
      }
    },
    'RADIO-GROUP': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-radio-group', Em, t, n, r)
      }
    },
    'LIVE-PLAYER': class extends C_ {
      constructor(e, t, n) {
        super(e, 'uni-live-player', t, n)
      }
    },
    'LIVE-PUSHER': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-live-pusher', z_, t, n, r, '.uni-live-pusher-slot')
      }
    },
    MAP: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-map', Ey, t, n, r, __uniConfig.qqMapKey ? void 0 : '.uni-map-slot')
      }
    },
    'LOCATION-PICKER': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-location-picker', zy, t, n, r)
      }
    },
    'LOCATION-VIEW': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-location-view', Iy, t, n, r)
      }
    },
    'MOVABLE-AREA': class extends w_ {
      constructor(e, t, n, r) {
        super(e, 'uni-movable-area', Wg, t, n, r)
      }
    },
    'MOVABLE-VIEW': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-movable-view', im, t, n, r)
      }
    },
    'OFFICIAL-ACCOUNT': class extends C_ {
      constructor(e, t, n) {
        super(e, 'uni-official-account', t, n)
      }
    },
    'OPEN-DATA': class extends C_ {
      constructor(e, t, n) {
        super(e, 'uni-open-data', t, n)
      }
    },
    PICKER: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-picker', Fy, t, n, r)
      }
    },
    'PICKER-VIEW': class extends w_ {
      constructor(e, t, n, r) {
        super(e, 'uni-picker-view', gm, t, n, r, '.uni-picker-view-wrapper')
      }
    },
    'PICKER-VIEW-COLUMN': class extends w_ {
      constructor(e, t, n, r) {
        super(e, 'uni-picker-view-column', Sm, t, n, r, '.uni-picker-view-content')
      }
    },
    PROGRESS: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-progress', Tm, t, n, r)
      }
    },
    'RICH-TEXT': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-rich-text', Pm, t, n, r)
      }
    },
    'SCROLL-VIEW': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-scroll-view', Rm, t, n, r, '.uni-scroll-view-content')
      }
      setText(e) {
        x_(this.$holder, 'uni-scroll-view-refresher', e)
      }
    },
    SLIDER: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-slider', Fm, t, n, r)
      }
    },
    SWIPER: class extends w_ {
      constructor(e, t, n, r) {
        super(e, 'uni-swiper', $m, t, n, r, '.uni-swiper-slide-frame')
      }
    },
    'SWIPER-ITEM': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-swiper-item', Hm, t, n, r)
      }
    },
    SWITCH: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-switch', Wm, t, n, r)
      }
    },
    TEXTAREA: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-textarea', n_, t, n, r)
      }
      init(e) {
        super.init(e), k_(this.$props)
      }
    },
    VIDEO: class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-video', $y, t, n, r, '.uni-video-slot')
      }
    },
    'WEB-VIEW': class extends b_ {
      constructor(e, t, n, r) {
        super(e, 'uni-web-view', Uy, t, n, r)
      }
    },
  }
  function Xy(e, t, n, r) {
    var i,
      a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
    if (0 === e) i = new yp(e, t, n, document.createElement(t))
    else {
      var o = Yy[t]
      i = o ? new o(e, n, r, a) : new Wp(e, document.createElement(t), n, r, a)
    }
    return (
      (function (e, t) {
        rp.set(e, t)
      })(e, i),
      i
    )
  }
  var Zy = [],
    Gy = !1
  function Ky(e) {
    if (Gy) return e()
    Zy.push(e)
  }
  function Jy() {
    ;(Gy = !0),
      Zy.forEach((e) => {
        try {
          e()
        } catch (t) {
          console.error(t)
        }
      }),
      (Zy.length = 0)
  }
  function Qy(e) {
    var {
      css: t,
      route: n,
      platform: r,
      pixelRatio: i,
      windowWidth: a,
      disableScroll: o,
      statusbarHeight: s,
      windowTop: l,
      windowBottom: u,
    } = e
    !(function (e) {
      window.__PAGE_INFO__ = { route: e }
    })(n),
      (function (e, t, n) {
        window.__SYSTEM_INFO__ = { platform: e, pixelRatio: t, windowWidth: n }
      })(r, i, a),
      (Xy(0, 'div', -1, -1).$ = document.getElementById('app'))
    var c = plus.webview.currentWebview().id
    ;(window.__id__ = c),
      (document.title = ''.concat(n, '[').concat(c, ']')),
      (function (e, t, n) {
        var r = {
          '--window-left': '0px',
          '--window-right': '0px',
          '--window-top': t + 'px',
          '--window-bottom': n + 'px',
          '--status-bar-height': e + 'px',
        }
        !(function (e) {
          var t = document.documentElement.style
          Object.keys(e).forEach((n) => {
            t.setProperty(n, e[n])
          })
        })(r)
      })(s, l, u),
      o && document.addEventListener('touchmove', Ru),
      t
        ? (function (e) {
            var t = document.createElement('link')
            ;(t.type = 'text/css'),
              (t.rel = 'stylesheet'),
              (t.href = e + '.css'),
              (t.onload = Jy),
              (t.onerror = Jy),
              document.head.appendChild(t)
          })(n)
        : Jy()
  }
  var eb = !1
  function tb(e, t) {
    var { scrollTop: n, selector: r, duration: i } = e
    !(function (e, t) {
      if (pn(e)) {
        var n = document.querySelector(e)
        if (n) {
          var { top: r } = n.getBoundingClientRect()
          e = r + window.pageYOffset
          var i = document.querySelector('uni-page-head')
          i && (e -= i.offsetHeight)
        }
      }
      e < 0 && (e = 0)
      var a = document.documentElement,
        { clientHeight: o, scrollHeight: s } = a
      if (((e = Math.min(e, s - o)), 0 !== t)) {
        if (window.scrollY !== e) {
          var l = (t) => {
            if (t <= 0) window.scrollTo(0, e)
            else {
              var n = e - window.scrollY
              requestAnimationFrame(function () {
                window.scrollTo(0, window.scrollY + (n / t) * 10), l(t - 10)
              })
            }
          }
          l(t)
        }
      } else a.scrollTop = document.body.scrollTop = e
    })(r || n || 0, i),
      t()
  }
  function nb(e) {
    var t = e[0]
    t[0] === Lr
      ? Qy(t[1])
      : Ky(() =>
          (function (e) {
            var t = e[0],
              n = (function (e) {
                if (!e.length) return (e) => e
                var t = function (n) {
                  var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  if ('number' == typeof n) return e[n]
                  var i = {}
                  return (
                    n.forEach((e) => {
                      var [n, a] = e
                      i[t(n)] = r ? t(a) : a
                    }),
                    i
                  )
                }
                return t
              })(t[0] === vc ? t[1] : [])
            e.forEach((e) => {
              switch (e[0]) {
                case Lr:
                  return Qy(e[1])
                case zr:
                  return
                case Nr:
                  var t = e[3]
                  return Xy(e[1], n(e[2]), -1 === t ? 0 : t, e[4], np(n, e[5]))
                case Ir:
                  return ip(e[1]).insert(e[2], e[3], np(n, e[4]))
                case Pr:
                  return ip(e[1]).remove()
                case Dr:
                  return ip(e[1]).setAttr(n(e[2]), n(e[3]))
                case Br:
                  return ip(e[1]).removeAttr(n(e[2]))
                case Rr:
                  return ip(e[1]).addEvent(n(e[2]), e[3])
                case jr:
                  return ip(e[1]).addWxsEvent(n(e[2]), n(e[3]), e[4])
                case Fr:
                  return ip(e[1]).removeEvent(n(e[2]))
                case qr:
                  return ip(e[1]).setText(n(e[2]))
                case Vr:
                  return (function (e) {
                    if (!eb) {
                      eb = !0
                      var t = {
                        onReachBottomDistance: e,
                        onPageScroll(e) {
                          UniViewJSBridge.publishHandler(lr, { scrollTop: e })
                        },
                        onReachBottom() {
                          UniViewJSBridge.publishHandler(ur)
                        },
                      }
                      requestAnimationFrame(() => document.addEventListener('scroll', Wu(t)))
                    }
                  })(e[1])
              }
            }),
              (function () {
                try {
                  ;[...op].sort((e, t) => e.priority - t.priority).forEach((e) => e())
                } finally {
                  op.clear()
                }
              })()
          })(e),
        )
  }
  function rb() {
    UniViewJSBridge.publishHandler(pc)
  }
  function ib(e) {
    return window.__$__(e).$
  }
  function ab(e, t) {
    var n = {},
      { top: r, topWindowHeight: i } = (function () {
        var e = document.documentElement.style,
          t = Au(),
          n = Tu(e, '--window-bottom'),
          r = Tu(e, '--window-left'),
          i = Tu(e, '--window-right'),
          a = Tu(e, '--top-window-height')
        return {
          top: t,
          bottom: n ? n + ku.bottom : 0,
          left: r ? r + ku.left : 0,
          right: i ? i + ku.right : 0,
          topWindowHeight: a || 0,
        }
      })()
    if (t.node) {
      var a = e.tagName.split('-')[1] || e.tagName
      a && (n.node = e.querySelector(a))
    }
    if ((t.id && (n.id = e.id), t.dataset && (n.dataset = mr(e)), t.rect || t.size)) {
      var o = e.getBoundingClientRect()
      t.rect &&
        ((n.left = o.left),
        (n.right = o.right),
        (n.top = o.top - r - i),
        (n.bottom = o.bottom - r - i)),
        t.size && ((n.width = o.width), (n.height = o.height))
    }
    if (
      (cn(t.properties) &&
        t.properties.forEach((e) => {
          e = e.replace(/-([a-z])/g, function (e, t) {
            return t.toUpperCase()
          })
        }),
      t.scrollOffset)
    )
      if ('UNI-SCROLL-VIEW' === e.tagName) {
        var s = e.children[0].children[0]
        ;(n.scrollLeft = s.scrollLeft),
          (n.scrollTop = s.scrollTop),
          (n.scrollHeight = s.scrollHeight),
          (n.scrollWidth = s.scrollWidth)
      } else (n.scrollLeft = 0), (n.scrollTop = 0), (n.scrollHeight = 0), (n.scrollWidth = 0)
    if (cn(t.computedStyle)) {
      var l = getComputedStyle(e)
      t.computedStyle.forEach((e) => {
        n[e] = l[e]
      })
    }
    return (
      t.context &&
        (n.contextInfo = (function (e) {
          return e.__uniContextInfo
        })(e)),
      n
    )
  }
  function ob(e, t) {
    return (
      e.matches ||
      e.matchesSelector ||
      e.mozMatchesSelector ||
      e.msMatchesSelector ||
      e.oMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this.parentElement.querySelectorAll(e), n = t.length;
          --n >= 0 && t.item(n) !== this;

        );
        return n > -1
      }
    ).call(e, t)
  }
  function sb(e, t, n, r, i) {
    var a = (function (e, t) {
        return e ? window.__$__(e).$ : t.$el
      })(t, e),
      o = a.parentElement
    if (!o) return r ? null : []
    var { nodeType: s } = a,
      l = 3 === s || 8 === s
    if (r) {
      var u = l ? o.querySelector(n) : ob(a, n) ? a : a.querySelector(n)
      return u ? ab(u, i) : null
    }
    var c = [],
      d = (l ? o : a).querySelectorAll(n)
    return (
      d &&
        d.length &&
        [].forEach.call(d, (e) => {
          c.push(ab(e, i))
        }),
      !l && ob(a, n) && c.unshift(ab(a, i)),
      c
    )
  }
  function lb(e, t, n) {
    var r = []
    t.forEach((t) => {
      var { component: n, selector: i, single: a, fields: o } = t
      null === n
        ? r.push(
            (function (e) {
              var t = {}
              if (
                (e.id && (t.id = ''),
                e.dataset && (t.dataset = {}),
                e.rect && ((t.left = 0), (t.right = 0), (t.top = 0), (t.bottom = 0)),
                e.size &&
                  ((t.width = document.documentElement.clientWidth),
                  (t.height = document.documentElement.clientHeight)),
                e.scrollOffset)
              ) {
                var n = document.documentElement,
                  r = document.body
                ;(t.scrollLeft = n.scrollLeft || r.scrollLeft || 0),
                  (t.scrollTop = n.scrollTop || r.scrollTop || 0),
                  (t.scrollHeight = n.scrollHeight || r.scrollHeight || 0),
                  (t.scrollWidth = n.scrollWidth || r.scrollWidth || 0)
              }
              return t
            })(o),
          )
        : r.push(sb(e, n, i, a, o))
    }),
      n(r)
  }
  function ub(e, t) {
    var { reqId: n, component: r, options: i, callback: a } = e,
      o = ib(r)
    ;(o.__io || (o.__io = {}))[n] = (function (e, t, n) {
      Jf()
      var r = t.relativeToSelector ? e.querySelector(t.relativeToSelector) : null,
        i = new IntersectionObserver(
          (e) => {
            e.forEach((e) => {
              n({
                intersectionRatio: ep(e),
                intersectionRect: Qf(e.intersectionRect),
                boundingClientRect: Qf(e.boundingClientRect),
                relativeRect: Qf(e.rootBounds),
                time: Date.now(),
                dataset: mr(e.target),
                id: e.target.id,
              })
            })
          },
          { root: r, rootMargin: t.rootMargin, threshold: t.thresholds },
        )
      if (t.observeAll) {
        i.USE_MUTATION_OBSERVER = !0
        for (var a = e.querySelectorAll(t.selector), o = 0; o < a.length; o++) i.observe(a[o])
      } else {
        i.USE_MUTATION_OBSERVER = !1
        var s = e.querySelector(t.selector)
        s
          ? i.observe(s)
          : console.warn(
              'Node '.concat(t.selector, ' is not found. Intersection observer will not trigger.'),
            )
      }
      return i
    })(o, i, a)
  }
  var cb = {},
    db = {}
  function hb(e) {
    return e.replace(/([A-Z])/g, '-$1').toLowerCase()
  }
  function fb(e, t) {
    var { reqId: n, component: r, options: i, callback: a } = e,
      o = (cb[n] = window.matchMedia(
        (function (e) {
          var t = []
          for (var n of [
            'width',
            'minWidth',
            'maxWidth',
            'height',
            'minHeight',
            'maxHeight',
            'orientation',
          ])
            'orientation' !== n &&
              e[n] &&
              Number(e[n] >= 0) &&
              t.push('('.concat(hb(n), ': ').concat(Number(e[n]), 'px)')),
              'orientation' === n && e[n] && t.push('('.concat(hb(n), ': ').concat(e[n], ')'))
          return t.join(' and ')
        })(i),
      )),
      s = (db[n] = (e) => a(e.matches))
    s(o), o.addListener(s)
  }
  function pb(e, t) {
    var { family: n, source: r, desc: i } = e
    ;(function (e, t, n) {
      var r = document.fonts
      if (r) {
        var i = new FontFace(e, t, n)
        return i.load().then(() => {
          r.add && r.add(i)
        })
      }
      return new Promise((r) => {
        var i = document.createElement('style'),
          a = []
        if (n) {
          var {
            style: o,
            weight: s,
            stretch: l,
            unicodeRange: u,
            variant: c,
            featureSettings: d,
          } = n
          o && a.push('font-style:'.concat(o)),
            s && a.push('font-weight:'.concat(s)),
            l && a.push('font-stretch:'.concat(l)),
            u && a.push('unicode-range:'.concat(u)),
            c && a.push('font-variant:'.concat(c)),
            d && a.push('font-feature-settings:'.concat(d))
        }
        ;(i.innerText = '@font-face{font-family:"'
          .concat(e, '";src:')
          .concat(t, ';')
          .concat(a.join(';'), '}')),
          document.head.appendChild(i),
          r()
      })
    })(
      n,
      (r =
        r.startsWith('url("') || r.startsWith("url('")
          ? "url('".concat(bc(r.substring(5, r.length - 2)), "')")
          : r.startsWith('url(')
            ? "url('".concat(bc(r.substring(4, r.length - 1)), "')")
            : bc(r)),
      i,
    )
      .then(() => {
        t()
      })
      .catch((e) => {
        t(e.toString())
      })
  }
  var vb = { $el: document.body }
  function gb() {
    var e = Bu()
    !(function (e, t) {
      UniViewJSBridge.subscribe(yi(e, vi), t ? t(wi) : wi)
    })(
      e,
      (e) =>
        function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
          Ky(() => {
            e.apply(null, n)
          })
        },
    ),
      bi(e, 'requestComponentInfo', (e, t) => {
        lb(vb, e.reqs, t)
      }),
      bi(e, 'addIntersectionObserver', (e) => {
        ub(
          on({}, e, {
            callback(t) {
              UniViewJSBridge.publishHandler(e.eventName, t)
            },
          }),
        )
      }),
      bi(e, 'removeIntersectionObserver', (e) => {
        !(function (e) {
          var { reqId: t, component: n } = e,
            r = ib(n),
            i = r.__io && r.__io[t]
          i && (i.disconnect(), delete r.__io[t])
        })(e)
      }),
      bi(e, 'addMediaQueryObserver', (e) => {
        fb(
          on({}, e, {
            callback(t) {
              UniViewJSBridge.publishHandler(e.eventName, t)
            },
          }),
        )
      }),
      bi(e, 'removeMediaQueryObserver', (e) => {
        !(function (e) {
          var { reqId: t, component: n } = e,
            r = db[t],
            i = cb[t]
          i && (i.removeListener(r), delete db[t], delete cb[t])
        })(e)
      }),
      bi(e, Kf, tb),
      bi(e, Gf, pb),
      bi(e, Zf, (e) => {
        !(function (e, t) {
          var { pageStyle: n, rootFontSize: r } = t
          n && (document.querySelector('uni-page-body') || document.body).setAttribute('style', n),
            r &&
              document.documentElement.style.fontSize !== r &&
              (document.documentElement.style.fontSize = r)
        })(0, e)
      })
  }
  function mb() {
    Qu(),
      gb(),
      (function () {
        var { subscribe: e } = UniViewJSBridge
        e(fc, nb), e(gc, (e) => ui().setLocale(e)), e(pc, rb)
      })(),
      (function () {
        if (0 === String(navigator.vendor).indexOf('Apple')) {
          var e,
            t = null
          document.documentElement.addEventListener('click', (n) => {
            clearTimeout(e),
              t &&
                Math.abs(n.pageX - t.pageX) <= 44 &&
                Math.abs(n.pageY - t.pageY) <= 44 &&
                n.timeStamp - t.timeStamp <= 450 &&
                n.preventDefault(),
              (t = n),
              (e = setTimeout(() => {
                t = null
              }, 450))
          })
        }
      })(),
      mc.publishHandler(pc)
  }
  ;(window.uni = tp),
    (window.UniViewJSBridge = mc),
    (window.rpx2px = jf),
    (window.normalizeStyleName = Ip),
    (window.normalizeStyleValue = wp),
    (window.__$__ = ip),
    (window.__f__ = function (e, t) {
      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
        r[i - 2] = arguments[i]
      uni.__log__ ? uni.__log__(e, t, ...r) : console[e].apply(console, [...r, t])
    }),
    'undefined' != typeof plus ? mb() : document.addEventListener('plusready', mb)
})
