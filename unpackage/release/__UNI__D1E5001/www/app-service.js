var __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __typeError = (e) => {
    throw TypeError(e)
  },
  __pow = Math.pow,
  __defNormalProp = (e, t, r) =>
    t in e
      ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  __spreadValues = (e, t) => {
    for (var r in t || (t = {})) __hasOwnProp.call(t, r) && __defNormalProp(e, r, t[r])
    if (__getOwnPropSymbols)
      for (var r of __getOwnPropSymbols(t)) __propIsEnum.call(t, r) && __defNormalProp(e, r, t[r])
    return e
  },
  __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t)),
  __objRest = (e, t) => {
    var r = {}
    for (var o in e) __hasOwnProp.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o])
    if (null != e && __getOwnPropSymbols)
      for (var o of __getOwnPropSymbols(e))
        t.indexOf(o) < 0 && __propIsEnum.call(e, o) && (r[o] = e[o])
    return r
  },
  __accessCheck = (e, t, r) => t.has(e) || __typeError('Cannot ' + r),
  __privateGet = (e, t, r) => (
    __accessCheck(e, t, 'read from private field'), r ? r.call(e) : t.get(e)
  ),
  __privateAdd = (e, t, r) =>
    t.has(e)
      ? __typeError('Cannot add the same private member more than once')
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  __privateSet = (e, t, r, o) => (
    __accessCheck(e, t, 'write to private field'), o ? o.call(e, r) : t.set(e, r), r
  ),
  __privateMethod = (e, t, r) => (__accessCheck(e, t, 'access private method'), r),
  __privateWrapper = (e, t, r, o) => ({
    set _(o) {
      __privateSet(e, t, o, r)
    },
    get _() {
      return __privateGet(e, t, o)
    },
  }),
  __async = (e, t, r) =>
    new Promise((o, n) => {
      var a = (e) => {
          try {
            s(r.next(e))
          } catch (t) {
            n(t)
          }
        },
        i = (e) => {
          try {
            s(r.throw(e))
          } catch (t) {
            n(t)
          }
        },
        s = (e) => (e.done ? o(e.value) : Promise.resolve(e.value).then(a, i))
      s((r = r.apply(e, t)).next())
    })
if (
  ('undefined' == typeof Promise ||
    Promise.prototype.finally ||
    (Promise.prototype.finally = function (e) {
      const t = this.constructor
      return this.then(
        (r) => t.resolve(e()).then(() => r),
        (r) =>
          t.resolve(e()).then(() => {
            throw r
          }),
      )
    }),
  'undefined' != typeof uni && uni && uni.requireGlobal)
) {
  const e = uni.requireGlobal()
  ;(ArrayBuffer = e.ArrayBuffer),
    (Int8Array = e.Int8Array),
    (Uint8Array = e.Uint8Array),
    (Uint8ClampedArray = e.Uint8ClampedArray),
    (Int16Array = e.Int16Array),
    (Uint16Array = e.Uint16Array),
    (Int32Array = e.Int32Array),
    (Uint32Array = e.Uint32Array),
    (Float32Array = e.Float32Array),
    (Float64Array = e.Float64Array),
    (BigInt64Array = e.BigInt64Array),
    (BigUint64Array = e.BigUint64Array)
}
uni.restoreGlobal &&
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval),
  (function (e) {
    'use strict'
    var t,
      r,
      o,
      n,
      a,
      i,
      s,
      l,
      c,
      u,
      d,
      p,
      f,
      m,
      v,
      h,
      y,
      g,
      _,
      w,
      b,
      k,
      x,
      C,
      V,
      S,
      E,
      N,
      P,
      B,
      O,
      A,
      $,
      T,
      I,
      M,
      D,
      j,
      G,
      z
    function F(e, t, ...r) {
      uni.__log__ && uni.__log__(e, t, ...r)
    }
    function R(e, t) {
      return 'string' == typeof e ? t : e
    }
    const q =
        (t) =>
        (r, o = e.getCurrentInstance()) => {
          !e.isInSSRComponentSetup && e.injectHook(t, r, o)
        },
      Q = q('onShow'),
      L = q('onHide'),
      U = q('onLaunch'),
      W = q('onLoad'),
      H = e.defineComponent(
        __spreadProps(__spreadValues({}, { name: 'Home' }), {
          __name: 'index',
          setup: (t) => (
            W(() => {}),
            (t, r) => {
              const o = e.resolveComponent('layout-tabbar-uni')
              return (
                e.openBlock(),
                e.createBlock(o, null, {
                  default: e.withCtx(() => [
                    e.createElementVNode('view', { class: 'bg-white overflow-hidden pt-2 px-4' }),
                  ]),
                  _: 1,
                })
              )
            }
          ),
        }),
      ),
      K = (e) =>
        new Promise((t, r) => {
          uni.request(
            __spreadProps(__spreadValues({}, e), {
              dataType: 'json',
              responseType: 'json',
              success(o) {
                o.statusCode >= 200 && o.statusCode < 300
                  ? t(o.data)
                  : (401 === o.statusCode ||
                      (!e.hideErrorToast &&
                        uni.showToast({ icon: 'none', title: o.data.msg || '请求错误' })),
                    r(o))
              },
              fail(e) {
                uni.showToast({ icon: 'none', title: '网络错误，换个网络试试' }), r(e)
              },
            }),
          )
        })
    ;(K.get = (e, t, r) => K({ url: e, query: t, method: 'GET', header: r })),
      (K.post = (e, t, r, o) => K({ url: e, query: r, data: t, method: 'POST', header: o })),
      (K.put = (e, t, r, o) => K({ url: e, data: t, query: r, method: 'PUT', header: o })),
      (K.delete = (e, t, r) => K({ url: e, query: t, method: 'DELETE', header: r }))
    /*!
     * pinia v2.0.36
     * (c) 2023 Eduardo San Martin Morote
     * @license MIT
     */
    let Y
    const X = (e) => (Y = e),
      J = Symbol()
    function Z(e) {
      return (
        e &&
        'object' == typeof e &&
        '[object Object]' === Object.prototype.toString.call(e) &&
        'function' != typeof e.toJSON
      )
    }
    var ee, te
    ;((te = ee || (ee = {})).direct = 'direct'),
      (te.patchObject = 'patch object'),
      (te.patchFunction = 'patch function')
    const re = () => {}
    function oe(t, r, o, n = re) {
      t.push(r)
      const a = () => {
        const e = t.indexOf(r)
        e > -1 && (t.splice(e, 1), n())
      }
      return !o && e.getCurrentScope() && e.onScopeDispose(a), a
    }
    function ne(e, ...t) {
      e.slice().forEach((e) => {
        e(...t)
      })
    }
    function ae(t, r) {
      t instanceof Map && r instanceof Map && r.forEach((e, r) => t.set(r, e)),
        t instanceof Set && r instanceof Set && r.forEach(t.add, t)
      for (const o in r) {
        if (!r.hasOwnProperty(o)) continue
        const n = r[o],
          a = t[o]
        Z(a) && Z(n) && t.hasOwnProperty(o) && !e.isRef(n) && !e.isReactive(n)
          ? (t[o] = ae(a, n))
          : (t[o] = n)
      }
      return t
    }
    const ie = Symbol()
    const { assign: se } = Object
    function le(t, r, o = {}, n, a, i) {
      let s
      const l = se({ actions: {} }, o),
        c = { deep: !0 }
      let u,
        d,
        p,
        f = e.markRaw([]),
        m = e.markRaw([])
      const v = n.state.value[t]
      let h
      function y(r) {
        let o
        ;(u = d = !1),
          'function' == typeof r
            ? (r(n.state.value[t]), (o = { type: ee.patchFunction, storeId: t, events: p }))
            : (ae(n.state.value[t], r),
              (o = { type: ee.patchObject, payload: r, storeId: t, events: p }))
        const a = (h = Symbol())
        e.nextTick().then(() => {
          h === a && (u = !0)
        }),
          (d = !0),
          ne(f, o, n.state.value[t])
      }
      i || v || (n.state.value[t] = {}), e.ref({})
      const g = i
        ? function () {
            const { state: e } = o,
              t = e ? e() : {}
            this.$patch((e) => {
              se(e, t)
            })
          }
        : re
      function _(e, r) {
        return function () {
          X(n)
          const o = Array.from(arguments),
            a = [],
            i = []
          let s
          ne(m, {
            args: o,
            name: e,
            store: b,
            after: function (e) {
              a.push(e)
            },
            onError: function (e) {
              i.push(e)
            },
          })
          try {
            s = r.apply(this && this.$id === t ? this : b, o)
          } catch (l) {
            throw (ne(i, l), l)
          }
          return s instanceof Promise
            ? s.then((e) => (ne(a, e), e)).catch((e) => (ne(i, e), Promise.reject(e)))
            : (ne(a, s), s)
        }
      }
      const w = {
          _p: n,
          $id: t,
          $onAction: oe.bind(null, m),
          $patch: y,
          $reset: g,
          $subscribe(r, o = {}) {
            const a = oe(f, r, o.detached, () => i()),
              i = s.run(() =>
                e.watch(
                  () => n.state.value[t],
                  (e) => {
                    ;('sync' === o.flush ? d : u) &&
                      r({ storeId: t, type: ee.direct, events: p }, e)
                  },
                  se({}, c, o),
                ),
              )
            return a
          },
          $dispose: function () {
            s.stop(), (f = []), (m = []), n._s.delete(t)
          },
        },
        b = e.reactive(w)
      n._s.set(t, b)
      const k = n._e.run(() => ((s = e.effectScope()), s.run(() => r())))
      for (const V in k) {
        const r = k[V]
        if ((e.isRef(r) && ((C = r), !e.isRef(C) || !C.effect)) || e.isReactive(r))
          i ||
            (!v ||
              (Z((x = r)) && x.hasOwnProperty(ie)) ||
              (e.isRef(r) ? (r.value = v[V]) : ae(r, v[V])),
            (n.state.value[t][V] = r))
        else if ('function' == typeof r) {
          const e = _(V, r)
          ;(k[V] = e), (l.actions[V] = r)
        }
      }
      var x, C
      return (
        se(b, k),
        se(e.toRaw(b), k),
        Object.defineProperty(b, '$state', {
          get: () => n.state.value[t],
          set: (e) => {
            y((t) => {
              se(t, e)
            })
          },
        }),
        n._p.forEach((e) => {
          se(
            b,
            s.run(() => e({ store: b, app: n._a, pinia: n, options: l })),
          )
        }),
        v && i && o.hydrate && o.hydrate(b.$state, v),
        (u = !0),
        (d = !0),
        b
      )
    }
    function ce(t) {
      {
        t = e.toRaw(t)
        const r = {}
        for (const o in t) {
          const n = t[o]
          ;(e.isRef(n) || e.isReactive(n)) && (r[o] = e.toRef(t, o))
        }
        return r
      }
    }
    function ue(e) {
      const t = { type: 'info', duration: 2e3, position: 'middle', message: '' },
        r =
          'string' == typeof e
            ? __spreadProps(__spreadValues({}, t), { message: e })
            : __spreadValues(__spreadValues({}, t), e)
      uni.showToast({
        title: r.message,
        duration: r.duration,
        position: { top: 'top', middle: 'center', bottom: 'bottom' }[r.position],
        icon:
          r.icon || { success: 'success', error: 'error', warning: 'fail', info: 'none' }[r.type],
        mask: !0,
      })
    }
    const de = (e, t) => ue(__spreadProps(__spreadValues({}, t), { type: 'success', message: e })),
      pe = (e, t) => ue(__spreadProps(__spreadValues({}, t), { type: 'info', message: e })),
      fe = { id: 0, username: '用户昵称', avatar: '/static/images/default-avatar.png', token: '' },
      me = (function (t, r, o) {
        let n, a
        const i = 'function' == typeof r
        function s(t, o) {
          const s = e.getCurrentInstance()
          ;(t = t || (s && e.inject(J, null))) && X(t),
            (t = Y)._s.has(n) ||
              (i
                ? le(n, r, a, t)
                : (function (t, r, o) {
                    const { state: n, actions: a, getters: i } = r,
                      s = o.state.value[t]
                    let l
                    l = le(
                      t,
                      function () {
                        s || (o.state.value[t] = n ? n() : {})
                        const r = e.toRefs(o.state.value[t])
                        return se(
                          r,
                          a,
                          Object.keys(i || {}).reduce(
                            (r, n) => (
                              (r[n] = e.markRaw(
                                e.computed(() => {
                                  X(o)
                                  const e = o._s.get(t)
                                  return i[n].call(e, e)
                                }),
                              )),
                              r
                            ),
                            {},
                          ),
                        )
                      },
                      r,
                      o,
                      0,
                      !0,
                    )
                  })(n, a, t))
          return t._s.get(n)
        }
        return (n = t), (a = i ? o : r), (s.$id = n), s
      })(
        'user',
        () => {
          const t = e.ref(__spreadValues({}, fe)),
            r = () =>
              __async(null, null, function* () {
                const e = yield K.get('/user/info'),
                  r = e.data
                var o
                return (
                  F('log', 'at store/user.ts:28', '设置用户信息', (o = r)),
                  o.avatar
                    ? (o.avatar = 'https://oss.laf.run/ukw0y1-site/avatar.jpg?feige')
                    : (o.avatar = fe.avatar),
                  (t.value = o),
                  uni.setStorageSync('userInfo', r),
                  uni.setStorageSync('token', r.token),
                  e
                )
              })
          return {
            userInfo: t,
            login: (e) =>
              __async(null, null, function* () {
                const t = yield ((o = e), K.post('/user/login', o))
                var o
                return F('log', 'at store/user.ts:55', '登录信息', t), de('登录成功'), r(), t
              }),
            wxLogin: () =>
              __async(null, null, function* () {
                const e = yield new Promise((e, t) => {
                  uni.login({
                    provider: 'weixin',
                    success: (t) => e(t),
                    fail: (e) => t(new Error(e)),
                  })
                })
                F('log', 'at store/user.ts:85', '微信登录code', e)
                const t = yield ((e) => K.post('/user/wxLogin', e))(e)
                return r(), t
              }),
            getUserInfo: r,
            logout: () =>
              __async(null, null, function* () {
                K.get('/user/logout'),
                  (t.value = __spreadValues({}, fe)),
                  uni.removeStorageSync('userInfo'),
                  uni.removeStorageSync('token')
              }),
          }
        },
        { persist: !0 },
      ),
      ve = (e, t) => {
        const r = e.__vccOpts || e
        for (const [o, n] of t) r[o] = n
        return r
      }
    const he = ve({}, [
        [
          'render',
          function (t, r) {
            return (
              e.openBlock(),
              e.createElementBlock('view', { class: 'ripple-container' }, [
                (e.openBlock(),
                e.createElementBlock(
                  e.Fragment,
                  null,
                  e.renderList(5, (t) =>
                    e.createElementVNode(
                      'view',
                      {
                        class: 'ripple-circle',
                        key: t,
                        style: e.normalizeStyle({ animationDelay: 0.4 * (t - 1) + 's' }),
                      },
                      null,
                      4,
                    ),
                  ),
                  64,
                )),
              ])
            )
          },
        ],
        ['__scopeId', 'data-v-14c4ac89'],
      ]),
      ye = ve(
        e.defineComponent({
          __name: 'check-box',
          props: { checked: { default: !1, type: Boolean } },
          setup: (t) => (r, o) => (
            e.openBlock(),
            e.createElementBlock(
              'image',
              {
                class: 'checkBox',
                src: t.checked ? '/static/images/selected.png' : '/static/images/unselect.png',
              },
              null,
              8,
              ['src'],
            )
          ),
        }),
        [['__scopeId', 'data-v-4a0bd511']],
      ),
      ge = ve(
        e.defineComponent({
          __name: 'privacy-agreement',
          props: { agreePrivacy: { default: !1, type: Boolean } },
          emits: ['update:agreePrivacy'],
          setup(t, { emit: r }) {
            const o = r
            return (r, n) => {
              const a = R(e.resolveDynamicComponent('check-box'), ye)
              return (
                e.openBlock(),
                e.createElementBlock(
                  'view',
                  {
                    class: 'privacy-agreement',
                    onClick:
                      n[3] ||
                      (n[3] = e.withModifiers(
                        (e) => o('update:agreePrivacy', !t.agreePrivacy),
                        ['stop'],
                      )),
                  },
                  [
                    e.createVNode(
                      a,
                      { checked: t.agreePrivacy, style: { 'margin-right': '10px' } },
                      null,
                      8,
                      ['checked'],
                    ),
                    e.createElementVNode('view', { class: 'agreement-text' }, [
                      e.createElementVNode('text', { class: 'agreement-title' }, '同意NeuroDance'),
                      e.createElementVNode(
                        'text',
                        {
                          class: 'agreement-link',
                          onClick: n[0] || (n[0] = e.withModifiers((e) => {}, ['stop'])),
                        },
                        ' 《天翼服务及隐私协议》 ',
                      ),
                      e.createElementVNode(
                        'text',
                        {
                          class: 'agreement-link',
                          onClick: n[1] || (n[1] = e.withModifiers((e) => {}, ['stop'])),
                        },
                        '《用户协议》',
                      ),
                      e.createElementVNode('text', null, '和'),
                      e.createElementVNode(
                        'text',
                        {
                          class: 'agreement-link',
                          onClick: n[2] || (n[2] = e.withModifiers((e) => {}, ['stop'])),
                        },
                        '《隐私政策》',
                      ),
                    ]),
                  ],
                )
              )
            }
          },
        }),
        [['__scopeId', 'data-v-c119b3af']],
      ),
      _e = '/static/images/wechat.png',
      we = ve(
        e.defineComponent({
          __name: 'other-login',
          emits: ['wechatLogin'],
          setup(t, { emit: r }) {
            const o = r
            return (t, r) => (
              e.openBlock(),
              e.createElementBlock('view', { class: 'other-login' }, [
                e.createElementVNode('view', { class: 'other-login-top' }, [
                  e.createElementVNode('view', { class: 'line' }),
                  e.createElementVNode('view', { class: 'other-login-title' }, '其他登录方式'),
                  e.createElementVNode('view', { class: 'line' }),
                ]),
                e.createElementVNode('image', {
                  class: 'wechat',
                  src: _e,
                  onClick: r[0] || (r[0] = e.withModifiers((e) => o('wechatLogin'), ['stop'])),
                }),
                e.createElementVNode('view', { class: 'title' }, '微信一键登录'),
              ])
            )
          },
        }),
        [['__scopeId', 'data-v-54554584']],
      ),
      be = ve(
        e.defineComponent({
          __name: 'custom-btn',
          props: {
            title: { default: '按钮', type: String },
            type: { default: 'other', type: String },
          },
          setup: (t) => (r, o) => (
            e.openBlock(),
            e.createElementBlock(
              'view',
              {
                class: e.normalizeClass([
                  'custom-btn',
                  'primary' === t.type ? 'main-bg-color' : 'other-bg-color',
                ]),
              },
              e.toDisplayString(t.title),
              3,
            )
          ),
        }),
        [['__scopeId', 'data-v-628acbb6']],
      ),
      ke = ve(
        e.defineComponent({
          __name: 'index',
          setup(t) {
            const r = e.ref('')
            me(),
              e.ref({ captchaEnabled: !1, uuid: '', image: '' }),
              W((e) => {
                e.redirect && (r.value = e.redirect)
              })
            const o = () => {
                uni.redirectTo({ url: '/pages/login/account/index' })
              },
              n = () => {
                i()
              },
              a = () => {
                i()
              },
              i = () => {
                pe('该功能继续迭代中')
              }
            return (t, r) => {
              const i = e.resolveComponent('layout-default-uni')
              return (
                e.openBlock(),
                e.createBlock(i, null, {
                  default: e.withCtx(() => [
                    e.createElementVNode('view', { class: 'login-container' }, [
                      e.createElementVNode('view', { class: 'login-header' }, [
                        e.createVNode(he),
                        e.createElementVNode('image', {
                          class: 'login-logo',
                          src: '/static/images/login/login-device.png',
                        }),
                      ]),
                      e.createElementVNode('view', { class: 'login-form' }, [
                        e.createElementVNode('view', { class: 'login-auto-phone' }, '181****7196'),
                        e.createElementVNode(
                          'view',
                          { class: 'login-desc' },
                          '天翼账号提供认证服务',
                        ),
                        e.createElementVNode('view', { class: 'login-buttons' }, [
                          e.createVNode(be, {
                            title: '本机号码一键登录',
                            type: 'primary',
                            onClick: e.withModifiers(n, ['stop']),
                          }),
                          e.createVNode(be, {
                            title: '其他手机账号登录',
                            type: 'other',
                            onClick: e.withModifiers(o, ['stop']),
                          }),
                        ]),
                        e.createVNode(ge),
                        e.createVNode(we, { onWechatLogin: a }),
                      ]),
                    ]),
                  ]),
                  _: 1,
                })
              )
            }
          },
        }),
        [['__scopeId', 'data-v-3a1c09ca']],
      ),
      xe = '/static/images/right-arrow-gray.png'
    function Ce(e, t) {
      var r
      return (
        (e = 'object' == typeof (r = e) && null !== r ? e : Object.create(null)),
        new Proxy(e, {
          get: (e, r, o) =>
            'key' === r ? Reflect.get(e, r, o) : Reflect.get(e, r, o) || Reflect.get(t, r, o),
        })
      )
    }
    function Ve(e, { storage: t, serializer: r, key: o, debug: n }) {
      try {
        const n = null == t ? void 0 : t.getItem(o)
        n && e.$patch(null == r ? void 0 : r.deserialize(n))
      } catch (a) {}
    }
    function Se(e, { storage: t, serializer: r, key: o, paths: n, debug: a }) {
      try {
        const a = Array.isArray(n)
          ? (function (e, t) {
              return t.reduce((t, r) => {
                const o = r.split('.')
                return (function (e, t, r) {
                  return (
                    (t
                      .slice(0, -1)
                      .reduce((e, t) => (/^(__proto__)$/.test(t) ? {} : (e[t] = e[t] || {})), e)[
                      t[t.length - 1]
                    ] = r),
                    e
                  )
                })(
                  t,
                  o,
                  (function (e, t) {
                    return t.reduce((e, t) => (null == e ? void 0 : e[t]), e)
                  })(e, o),
                )
              }, {})
            })(e, n)
          : e
        t.setItem(o, r.serialize(a))
      } catch (i) {}
    }
    const Ee = (function () {
      const t = e.effectScope(!0),
        r = t.run(() => e.ref({}))
      let o = [],
        n = []
      const a = e.markRaw({
        install(e) {
          X(a),
            (a._a = e),
            e.provide(J, a),
            (e.config.globalProperties.$pinia = a),
            n.forEach((e) => o.push(e)),
            (n = [])
        },
        use(e) {
          return this._a ? o.push(e) : n.push(e), this
        },
        _p: o,
        _a: null,
        _e: t,
        _s: new Map(),
        state: r,
      })
      return a
    })()
    Ee.use(
      (function (e = {}) {
        return (t) => {
          const { auto: r = !1 } = e,
            {
              options: { persist: o = r },
              store: n,
              pinia: a,
            } = t
          if (!o) return
          if (!(n.$id in a.state.value)) {
            const e = a._s.get(n.$id.replace('__hot:', ''))
            return void (e && Promise.resolve().then(() => e.$persist()))
          }
          const i = (Array.isArray(o) ? o.map((t) => Ce(t, e)) : [Ce(o, e)])
            .map(
              (function (e, t) {
                return (r) => {
                  var o
                  try {
                    const {
                      storage: n = localStorage,
                      beforeRestore: a,
                      afterRestore: i,
                      serializer: s = { serialize: JSON.stringify, deserialize: JSON.parse },
                      key: l = t.$id,
                      paths: c = null,
                      debug: u = !1,
                    } = r
                    return {
                      storage: n,
                      beforeRestore: a,
                      afterRestore: i,
                      serializer: s,
                      key: (null != (o = e.key) ? o : (e) => e)(
                        'string' == typeof l ? l : l(t.$id),
                      ),
                      paths: c,
                      debug: u,
                    }
                  } catch (n) {
                    return r.debug, null
                  }
                }
              })(e, n),
            )
            .filter(Boolean)
          ;(n.$persist = () => {
            i.forEach((e) => {
              Se(n.$state, e)
            })
          }),
            (n.$hydrate = ({ runHooks: e = !0 } = {}) => {
              i.forEach((r) => {
                const { beforeRestore: o, afterRestore: a } = r
                e && (null == o || o(t)), Ve(n, r), e && (null == a || a(t))
              })
            }),
            i.forEach((e) => {
              const { beforeRestore: r, afterRestore: o } = e
              null == r || r(t),
                Ve(n, e),
                null == o || o(t),
                n.$subscribe(
                  (t, r) => {
                    Se(r, e)
                  },
                  { detached: !0 },
                )
            })
        }
      })({ storage: { getItem: uni.getStorageSync, setItem: uni.setStorageSync } }),
    )
    class Ne {
      constructor(e) {
        ;(this._reject = null),
          (this.promise = new Promise((t, r) => {
            e(t, r), (this._reject = r)
          }))
      }
      abort(e) {
        this._reject && this._reject(e)
      }
      then(e, t) {
        return this.promise.then(e, t)
      }
      catch(e) {
        return this.promise.catch(e)
      }
    }
    function Pe(e) {
      return Number.isNaN(Number(e)) ? `${e}` : `${e}px`
    }
    function Be(e) {
      return '[object Object]' === Object.prototype.toString.call(e) || 'object' == typeof e
    }
    function Oe(e) {
      const t = Object.prototype.toString.call(e).match(/\[object (\w+)\]/)
      return t && t.length ? t[1].toLowerCase() : ''
    }
    const Ae = (e) => null != e
    function $e(e, t, r) {
      const o = ((e << 16) | (t << 8) | r).toString(16)
      return '#' + '0'.repeat(Math.max(0, 6 - o.length)) + o
    }
    function Te(e) {
      const t = []
      for (let r = 1; r < 7; r += 2) t.push(parseInt('0x' + e.slice(r, r + 2), 16))
      return t
    }
    const Ie = { id: 1e3 }
    function Me(e) {
      return 'function' == typeof Array.isArray
        ? Array.isArray(e)
        : '[object Array]' === Object.prototype.toString.call(e)
    }
    function De(e) {
      return 'function' === Oe(e) || 'asyncfunction' === Oe(e)
    }
    function je(e) {
      return 'string' === Oe(e)
    }
    function Ge(e) {
      return !(!Be(e) || !Ae(e)) && De(e.then) && De(e.catch)
    }
    function ze(e) {
      return void 0 === e
    }
    function Fe(e) {
      if (Me(e)) {
        const t = e
          .filter(function (e) {
            return null != e && '' !== e
          })
          .map(function (e) {
            return Fe(e)
          })
          .join(';')
        return t ? (t.endsWith(';') ? t : t + ';') : ''
      }
      if (je(e)) return e ? (e.endsWith(';') ? e : e + ';') : ''
      if (Be(e)) {
        const t = Object.keys(e)
          .filter(function (t) {
            return null != e[t] && '' !== e[t]
          })
          .map(function (t) {
            return [
              ((r = t),
              r
                .replace(/[A-Z]/g, function (e) {
                  return '-' + e
                })
                .toLowerCase()),
              e[t],
            ].join(':')
            var r
          })
          .join(';')
        return t ? (t.endsWith(';') ? t : t + ';') : ''
      }
      return ''
    }
    const Re = (e = 1e3 / 30) =>
      new Ne((t) => {
        const r = setTimeout(() => {
          clearTimeout(r), t(!0)
        }, e)
      })
    function qe(e, t = new Map()) {
      if (null === e || 'object' != typeof e) return e
      if (We(e)) return new Date(e.getTime())
      if (e instanceof RegExp) return new RegExp(e.source, e.flags)
      if (e instanceof Error) {
        const t = new Error(e.message)
        return (t.stack = e.stack), t
      }
      if (t.has(e)) return t.get(e)
      const r = Array.isArray(e) ? [] : {}
      t.set(e, r)
      for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = qe(e[o], t))
      return r
    }
    function Qe(e, t) {
      if ('object' != typeof (e = qe(e)) || 'object' != typeof t)
        throw new Error('Both target and source must be objects.')
      for (const r in t) t.hasOwnProperty(r) && (e[r] = t[r])
      return e
    }
    function Le(e, t) {
      return (
        Object.keys(t).forEach((r) => {
          const o = e[r],
            n = t[r]
          Be(o) && Be(n) ? Le(o, n) : (e[r] = n)
        }),
        e
      )
    }
    const Ue = (e, t) => {
        const r = t.split('.')
        try {
          return r.reduce((e, t) => (null != e ? e[t] : void 0), e)
        } catch (o) {
          return
        }
      },
      We = (e) =>
        '[object Date]' === Object.prototype.toString.call(e) && !Number.isNaN(e.getTime())
    function He(e, t) {
      const r = qe(e)
      return Object.keys(r).forEach((e) => t(r[e], e) && delete r[e]), r
    }
    const Ke = '__TOAST_OPTION__',
      Ye = { duration: 2e3, show: !1 },
      Xe = Symbol('None')
    function Je(t = '') {
      const r = Ze(t),
        o = e.inject(r, e.ref(Xe))
      o.value === Xe && ((o.value = Ye), e.provide(r, o))
      let n = null
      const a = (e) => (t) => i(Qe(e, 'string' == typeof t ? { msg: t } : t)),
        i = (e) => {
          const t = Qe(Ye, 'string' == typeof e ? { msg: e } : e)
          ;(o.value = Qe(t, { show: !0 })),
            n && clearTimeout(n),
            o.value.duration &&
              o.value.duration > 0 &&
              (n = setTimeout(() => {
                n && clearTimeout(n), p()
              }, t.duration))
        },
        s = a({ iconName: 'loading', duration: 0, cover: !0 }),
        l = a({ iconName: 'success', duration: 1500 }),
        c = a({ iconName: 'error' }),
        u = a({ iconName: 'warning' }),
        d = a({ iconName: 'info' }),
        p = () => {
          o.value = { show: !1 }
        }
      return { show: i, loading: s, success: l, error: c, warning: u, info: d, close: p }
    }
    const Ze = (e) => (e ? `${Ke}${e}` : Ke),
      et = {
        success: () =>
          '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>成功</title><desc>Created with Sketch.</desc><defs><filter x="-63.2%" y="-80.0%" width="226.3%" height="260.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.122733141   0 0 0 0 0.710852582   0 0 0 0 0.514812768  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><rect id="path-2" x="3.4176226" y="5.81442199" width="3" height="8.5" rx="1.5"></rect><linearGradient x1="50%" y1="0.126649064%" x2="50%" y2="100%" id="linearGradient-4"><stop stop-color="#ACFFBD" stop-opacity="0.208123907" offset="0%"></stop><stop stop-color="#10B87C" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-388.000000, -538.000000)"><g id="成功" transform="translate(388.000000, 538.000000)"><circle id="Oval" fill="#34D19D" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#34D19D" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(11.500000, 14.000000)"><mask id="mask-3" fill="white"><use xlink:href="#path-2"></use></mask><use id="Rectangle-Copy-24" fill="#C4FFEB" transform="translate(4.917623, 10.064422) rotate(-45.000000) translate(-4.917623, -10.064422) " xlink:href="#path-2"></use><rect id="Rectangle" fill="url(#linearGradient-4)" mask="url(#mask-3)" transform="translate(6.215869, 11.372277) rotate(-45.000000) translate(-6.215869, -11.372277) " x="4.71586891" y="9.52269089" width="3" height="3.69917136"></rect><rect id="Rectangle" fill="#FFFFFF" transform="translate(11.636236, 7.232744) scale(1, -1) rotate(-45.000000) translate(-11.636236, -7.232744) " x="10.1362361" y="-1.02185365" width="3" height="16.5091951" rx="1.5"></rect></g></g></g></g></svg>',
        warning: () =>
          '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>警告</title><desc>Created with Sketch.</desc> <defs> <filter x="-240.0%" y="-60.0%" width="580.0%" height="220.0%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.824756567   0 0 0 0 0.450356612   0 0 0 0 0.168550194  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode> <feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-580.000000, -538.000000)"> <g id="警告" transform="translate(580.000000, 538.000000)"><circle id="Oval" fill="#F0883A" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#F0883A" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 10.800000)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(2.492935, 7.171583) scale(1, -1) rotate(-360.000000) translate(-2.492935, -7.171583) " x="0.992934699" y="0.955464537" width="3" height="12.4322365" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#FFDEC5" transform="translate(2.508751, 17.202636) scale(1, -1) rotate(-360.000000) translate(-2.508751, -17.202636) " x="1.00875134" y="15.200563" width="3" height="4.00414639" rx="1.5"></rect></g></g></g></g></svg>',
        info: () =>
          '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>常规</title><desc>Created with Sketch.</desc><defs><filter x="-300.0%" y="-57.1%" width="700.0%" height="214.3%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.362700096   0 0 0 0 0.409035039   0 0 0 0 0.520238904  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-772.000000, -538.000000)"><g id="常规" transform="translate(772.000000, 538.000000)"><circle id="Oval" fill="#909CB7" opacity="0.4" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#909CB7" cx="21" cy="21" r="16"></circle><g id="Group-6" filter="url(#filter-1)" transform="translate(18.500000, 9.800000)"><g id="编组-2" transform="translate(2.492935, 10.204709) rotate(-180.000000) translate(-2.492935, -10.204709) translate(0.992935, 0.204709)"><rect id="Rectangle" fill="#FFFFFF" transform="translate(1.500000, 7.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -7.000000) " x="0" y="0" width="3" height="14" rx="1.5"></rect><rect id="Rectangle-Copy-25" fill="#EEEEEE" transform="translate(1.500000, 18.000000) scale(1, -1) rotate(-360.000000) translate(-1.500000, -18.000000) " x="0" y="16" width="3" height="4" rx="1.5"></rect></g></g></g></g></g></svg>',
        error: () =>
          '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>toast</title><desc>Created with Sketch.</desc><defs><linearGradient x1="99.6229896%" y1="50.3770104%" x2="0.377010363%" y2="50.3770104%" id="linearGradient-1"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient><linearGradient x1="0.377010363%" y1="50.3770104%" x2="99.6229896%" y2="50.3770104%" id="linearGradient-2"><stop stop-color="#FFDFDF" offset="0%"></stop><stop stop-color="#F9BEBE" offset="100%"></stop></linearGradient></defs><g id="规范" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="反馈-轻提示" transform="translate(-196.000000, -538.000000)"> <g id="toast" transform="translate(196.000000, 538.000000)"><circle id="Oval" fill="#FA4350" opacity="0.400000006" cx="21" cy="21" r="20"></circle><circle id="Oval" fill="#FA4350" opacity="0.900000036" cx="21" cy="21" r="16"></circle><rect id="矩形" fill="#FFDFDF" transform="translate(21.071068, 21.071068) rotate(-225.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect><rect id="矩形" fill="url(#linearGradient-1)" transform="translate(19.303301, 22.838835) rotate(-225.000000) translate(-19.303301, -22.838835) " x="17.3033009" y="21.3388348" width="4" height="3"></rect><rect id="矩形" fill="url(#linearGradient-2)" transform="translate(22.838835, 19.303301) rotate(-225.000000) translate(-22.838835, -19.303301) " x="20.8388348" y="17.8033009" width="4" height="3"></rect><rect id="矩形" fill="#FFFFFF" transform="translate(21.071068, 21.071068) rotate(-315.000000) translate(-21.071068, -21.071068) " x="12.5710678" y="19.5710678" width="17" height="3" rx="1.5"></rect></g></g></g></svg>',
      },
      tt = '__MESSAGE_OPTION__',
      rt = {
        title: '',
        showCancelButton: !1,
        show: !1,
        closeOnClickModal: !0,
        msg: '',
        type: 'alert',
        inputType: 'text',
        inputValue: '',
        showErr: !1,
        zIndex: 99,
        lazyRender: !0,
        inputError: '',
      },
      ot = e.ref('zh-CN'),
      nt = e.reactive({
        'zh-CN': {
          calendar: {
            placeholder: '请选择',
            title: '选择日期',
            day: '日',
            week: '周',
            month: '月',
            confirm: '确定',
            startTime: '开始时间',
            endTime: '结束时间',
            to: '至',
            timeFormat: 'YY年MM月DD日 HH:mm:ss',
            dateFormat: 'YYYY年MM月DD日',
            weekFormat: (e, t) => `${e} 第 ${t} 周`,
            startWeek: '开始周',
            endWeek: '结束周',
            startMonth: '开始月',
            endMonth: '结束月',
            monthFormat: 'YYYY年MM月',
          },
          calendarView: {
            startTime: '开始',
            endTime: '结束',
            weeks: { sun: '日', mon: '一', tue: '二', wed: '三', thu: '四', fri: '五', sat: '六' },
            rangePrompt: (e) => `选择天数不能超过${e}天`,
            rangePromptWeek: (e) => `选择周数不能超过${e}周`,
            rangePromptMonth: (e) => `选择月份不能超过${e}个月`,
            monthTitle: 'YYYY年M月',
            yearTitle: 'YYYY年',
            month: 'M月',
            hour: (e) => `${e}时`,
            minute: (e) => `${e}分`,
            second: (e) => `${e}秒`,
          },
          collapse: { expand: '展开', retract: '收起' },
          colPicker: { title: '请选择', placeholder: '请选择', select: '请选择' },
          datetimePicker: {
            start: '开始时间',
            end: '结束时间',
            to: '至',
            placeholder: '请选择',
            confirm: '完成',
            cancel: '取消',
          },
          loadmore: {
            loading: '正在努力加载中...',
            finished: '已加载完毕',
            error: '加载失败',
            retry: '点击重试',
          },
          messageBox: {
            inputPlaceholder: '请输入',
            confirm: '确定',
            cancel: '取消',
            inputNoValidate: '输入的数据不合法',
          },
          numberKeyboard: { confirm: '完成' },
          pagination: {
            prev: '上一页',
            next: '下一页',
            page: (e) => `当前页：${e}`,
            total: (e) => `当前数据：${e}条`,
            size: (e) => `分页大小：${e}`,
          },
          picker: { cancel: '取消', done: '完成', placeholder: '请选择' },
          imgCropper: { confirm: '完成', cancel: '取消' },
          search: { search: '搜索', cancel: '取消' },
          steps: { wait: '未开始', finished: '已完成', process: '进行中', failed: '失败' },
          tabs: { all: '全部' },
          upload: { error: '上传失败' },
          input: { placeholder: '请输入...' },
          selectPicker: {
            title: '请选择',
            placeholder: '请选择',
            select: '请选择',
            confirm: '确认',
            filterPlaceholder: '搜索',
          },
          tag: { placeholder: '请输入', add: '新增标签' },
          textarea: { placeholder: '请输入...' },
          tableCol: { indexLabel: '序号' },
          signature: {
            confirmText: '确认',
            clearText: '清空',
            revokeText: '撤销',
            restoreText: '恢复',
          },
        },
      }),
      at = {
        messages: () => nt[ot.value],
        use(e, t) {
          ;(ot.value = e), t && this.add({ [e]: t })
        },
        add(e = {}) {
          Le(nt, e)
        },
      },
      it = 'http://47.119.191.194:5112/user/avatar',
      st = (t, r = {}, o = {}, n) => {
        const a = e.ref(!1),
          i = e.ref(!1),
          s = e.ref(),
          l = e.ref(0),
          {
            count: c = 1,
            sizeType: u = ['original', 'compressed'],
            sourceType: d = ['album', 'camera'],
            maxSize: p = 10,
            onProgress: f,
            onSuccess: m,
            onError: v,
            onComplete: h,
          } = o
        return {
          loading: a,
          error: i,
          data: s,
          progress: l,
          run: () => {
            uni.chooseImage({
              count: c,
              sizeType: u,
              sourceType: d,
              success: (e) => {
                F('log', 'at utils/uploadFile.ts:198', '选择图片成功:', e),
                  (a.value = !0),
                  (l.value = 0),
                  (function ({
                    url: e,
                    tempFilePath: t,
                    formData: r,
                    data: o,
                    error: n,
                    loading: a,
                    progress: i,
                    onProgress: s,
                    onSuccess: l,
                    onError: c,
                    onComplete: u,
                  }) {
                    try {
                      uni
                        .uploadFile({
                          url: e,
                          filePath: t,
                          name: 'file',
                          formData: r,
                          header: { 'Content-Type': 'multipart/form-data' },
                          success: (e) => {
                            try {
                              const t = JSON.parse(e.data)
                              if (1 === t.code) (o.value = t.data), null == l || l(e)
                              else {
                                const e = new Error(t.message || '上传失败')
                                ;(n.value = !0), null == c || c(e)
                              }
                            } catch (t) {
                              F('error', 'at utils/uploadFile.ts:306', '解析上传响应失败:', t),
                                (n.value = !0),
                                null == c || c(new Error('上传响应解析失败'))
                            }
                          },
                          fail: (e) => {
                            F('error', 'at utils/uploadFile.ts:313', '上传文件失败:', e),
                              (n.value = !0),
                              null == c || c(e)
                          },
                          complete: () => {
                            ;(a.value = !1), null == u || u()
                          },
                        })
                        .onProgressUpdate((e) => {
                          ;(i.value = e.progress), null == s || s(e.progress)
                        })
                    } catch (d) {
                      F('error', 'at utils/uploadFile.ts:331', '创建上传任务失败:', d),
                        (n.value = !0),
                        (a.value = !1),
                        null == c || c(new Error('创建上传任务失败'))
                    }
                  })({
                    url: t,
                    tempFilePath: e.tempFilePaths[0],
                    formData: r,
                    data: s,
                    error: i,
                    loading: a,
                    progress: l,
                    onProgress: f,
                    onSuccess: m,
                    onError: v,
                    onComplete: h,
                  })
              },
              fail: (e) => {
                F('error', 'at utils/uploadFile.ts:218', '选择图片失败:', e),
                  (i.value = !0),
                  null == v || v(e)
              },
            })
          },
        }
      }
    const lt = ve(
        e.defineComponent({
          __name: 'index',
          setup(t) {
            const r = me()
            Je()
            const o = e.ref(!1),
              n = () => {
                uni.navigateTo({ url: '/pages/login/index' })
              }
            Q((e) => {
              ;(o.value = !!uni.getStorageSync('token')),
                F('log', 'at pages/mine/index.vue:102', '个人中心onShow', o.value, e),
                o.value && me().getUserInfo()
            })
            const { run: a } = st(it, {}, { onSuccess: (e) => me().getUserInfo() })
            return (t, o) => {
              const i = e.resolveComponent('layout-tabbar-uni')
              return (
                e.openBlock(),
                e.createBlock(i, null, {
                  default: e.withCtx(() => [
                    e.createElementVNode('view', { class: 'profile-container' }, [
                      e.createElementVNode('view', { class: 'user-info-section' }, [
                        e.createElementVNode('view', { class: 'side' }, [
                          e.createElementVNode(
                            'view',
                            {
                              class: 'avatar-wrapper',
                              onClick: o[0] || (o[0] = (...t) => e.unref(a) && e.unref(a)(...t)),
                            },
                            'M',
                          ),
                          e.createElementVNode(
                            'view',
                            { class: 'username' },
                            e.toDisplayString(e.unref(r).userInfo.username),
                            1,
                          ),
                        ]),
                        e.createElementVNode(
                          'view',
                          { class: 'side logout', onClick: e.withModifiers(n, ['stop']) },
                          [
                            e.createElementVNode('view', { class: 'logout-title' }, '退出登录'),
                            e.createElementVNode('image', {
                              class: 'logout-icon',
                              src: '/static/images/logout.png',
                            }),
                          ],
                        ),
                      ]),
                      e.createElementVNode('view', { class: 'section-group' }, [
                        e.createElementVNode('view', { class: 'sleep-info' }, [
                          e.createElementVNode('view', { class: 'sleep-info-title' }, '睡眠总时长'),
                          e.createElementVNode('view', { class: 'sleep-info-right' }, [
                            e.createElementVNode('view', { class: 'sleep-info-right-value' }, '36'),
                            e.createElementVNode(
                              'view',
                              { class: 'sleep-info-right-unit' },
                              '小时',
                            ),
                            e.createElementVNode('view', { class: 'sleep-info-right-value' }, '46'),
                            e.createElementVNode(
                              'view',
                              { class: 'sleep-info-right-unit' },
                              '分钟',
                            ),
                          ]),
                        ]),
                      ]),
                      e.createElementVNode('view', { class: 'section-group' }, [
                        e.createElementVNode('view', { class: 'mine-device' }, [
                          e.createElementVNode('view', { class: 'mine-device-title' }, '我的设备'),
                          e.createElementVNode('view', { class: 'mine-device-device' }, [
                            e.createElementVNode(
                              'view',
                              { class: 'mine-device-device-name' },
                              'HoST-R2',
                            ),
                            e.createElementVNode('image', {
                              class: 'mine-device-device-icon',
                              src: '/static/images/right-arrow.png',
                            }),
                          ]),
                          e.createElementVNode(
                            'view',
                            { class: 'mine-device-subTitle' },
                            '上次链接时间:2024-10-30-16:32:28',
                          ),
                        ]),
                        e.createElementVNode('image', {
                          class: 'device-card',
                          src: '/static/images/device-card.png',
                        }),
                      ]),
                      e.createElementVNode('view', { class: 'section-group' }, [
                        e.createElementVNode('view', { class: 'session-top' }, [
                          e.createElementVNode('view', { class: 'session-top-title' }, '个人信息'),
                          e.createElementVNode('view', { class: 'session-top-value' }, [
                            e.createElementVNode(
                              'view',
                              { class: 'session-top-value-title' },
                              '编辑资料',
                            ),
                            e.createElementVNode('image', {
                              class: 'session-top-value-icon',
                              src: xe,
                            }),
                          ]),
                        ]),
                        e.createElementVNode('view', { class: 'session-row' }, [
                          e.createElementVNode('view', { class: 'session-row-title' }, '绑定账号'),
                          e.createElementVNode('view', { class: 'session-row-right' }, [
                            e.createElementVNode('image', { class: 'common-icon', src: _e }),
                          ]),
                        ]),
                        e.createElementVNode('view', { class: 'session-row' }, [
                          e.createElementVNode('view', { class: 'session-row-title' }, '个人数据'),
                          e.createElementVNode('view', { class: 'session-row-right' }, [
                            e.createElementVNode(
                              'view',
                              { class: 'session-row-right-title' },
                              '性别,出生年月',
                            ),
                          ]),
                        ]),
                        e.createElementVNode('view', { class: 'session-row none-border' }, [
                          e.createElementVNode('view', { class: 'session-row-title' }, '用户协议'),
                          e.createElementVNode('view', { class: 'session-row-right' }, [
                            e.createElementVNode(
                              'view',
                              { class: 'session-row-right-title' },
                              '了解更多',
                            ),
                            e.createElementVNode('image', {
                              class: 'session-row-right-icon',
                              src: xe,
                            }),
                          ]),
                        ]),
                      ]),
                      e.createElementVNode('view', { class: 'section-group' }, [
                        e.createElementVNode('view', { class: 'session-top' }, [
                          e.createElementVNode('view', { class: 'session-top-title' }, '了解我们'),
                          e.createElementVNode('view', { class: 'session-top-value' }, [
                            e.createElementVNode(
                              'view',
                              { class: 'session-top-value-title' },
                              '进入官网',
                            ),
                            e.createElementVNode('image', {
                              class: 'session-top-value-icon',
                              src: xe,
                            }),
                          ]),
                        ]),
                        e.createElementVNode('image', {
                          class: 'logo-card',
                          src: '/static/images/logo.png',
                        }),
                      ]),
                    ]),
                  ]),
                  _: 1,
                })
              )
            }
          },
        }),
        [['__scopeId', 'data-v-e3f7054a']],
      ),
      ct = [Number, String],
      ut = (e) => ({ type: e, required: !0 }),
      dt = (e) => ({ type: Boolean, default: e }),
      pt = (e) => ({ type: Number, default: e }),
      ft = (e) => ({ type: ct, default: e }),
      mt = (e) => ({ type: String, default: e }),
      vt = { customStyle: mt(''), customClass: mt('') },
      ht = __spreadProps(__spreadValues({}, vt), {
        name: ut(String),
        color: String,
        size: ct,
        classPrefix: mt('wd-icon'),
      }),
      yt = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-icon',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: ht,
              emits: ['click', 'touch'],
              setup(t, { emit: r }) {
                const o = t,
                  n = r,
                  a = e.computed(() => Ae(o.name) && o.name.includes('/')),
                  i = e.computed(() => {
                    const e = o.classPrefix
                    return `${e} ${o.customClass} ${a.value ? 'wd-icon--image' : e + '-' + o.name}`
                  }),
                  s = e.computed(() => {
                    const e = {}
                    return (
                      o.color && (e.color = o.color),
                      o.size && (e['font-size'] = Pe(o.size)),
                      `${Fe(e)} ${o.customStyle}`
                    )
                  })
                function l(e) {
                  n('click', e)
                }
                return (t, r) => (
                  e.openBlock(),
                  e.createElementBlock(
                    'view',
                    {
                      onClick: l,
                      class: e.normalizeClass(i.value),
                      style: e.normalizeStyle(s.value),
                    },
                    [
                      a.value
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'image',
                            { key: 0, class: 'wd-icon__image', src: t.name },
                            null,
                            8,
                            ['src'],
                          ))
                        : e.createCommentVNode('', !0),
                    ],
                    6,
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-bef80b7c']],
      ),
      gt = __spreadProps(__spreadValues({}, vt), {
        title: String,
        leftText: String,
        rightText: String,
        leftArrow: dt(!1),
        bordered: dt(!0),
        fixed: dt(!1),
        placeholder: dt(!1),
        zIndex: pt(500),
        safeAreaInsetTop: dt(!1),
        leftDisabled: dt(!1),
        rightDisabled: dt(!1),
      }),
      _t = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-navbar',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: gt,
              emits: ['click-left', 'click-right'],
              setup(t, { emit: r }) {
                const o = t,
                  n = r,
                  a = e.ref(''),
                  { statusBarHeight: i } = uni.getSystemInfoSync()
                e.watch(
                  [() => o.fixed, () => o.placeholder],
                  () => {
                    d()
                  },
                  { deep: !0, immediate: !1 },
                )
                const s = e.computed(() => {
                  const e = {}
                  return (
                    o.fixed && Ae(o.zIndex) && (e['z-index'] = o.zIndex),
                    o.safeAreaInsetTop && (e['padding-top'] = Pe(i || 0)),
                    `${Fe(e)}${o.customStyle}`
                  )
                })
                function l() {
                  o.leftDisabled || n('click-left')
                }
                function c() {
                  o.rightDisabled || n('click-right')
                }
                e.onMounted(() => {
                  o.fixed &&
                    o.placeholder &&
                    e.nextTick(() => {
                      d()
                    })
                })
                const { proxy: u } = e.getCurrentInstance()
                function d() {
                  var e, t
                  o.fixed &&
                    o.placeholder &&
                    ((e = '.wd-navbar'),
                    (t = u),
                    new Promise((r, o) => {
                      let n = null
                      n = t ? uni.createSelectorQuery().in(t) : uni.createSelectorQuery()
                      const a = (e) => {
                        e ? r(e) : o(new Error('No nodes found'))
                      }
                      n.select(e).boundingClientRect(a).exec()
                    })).then((e) => {
                      a.value = e.height
                    })
                }
                return (t, r) => (
                  e.openBlock(),
                  e.createElementBlock(
                    'view',
                    { style: e.normalizeStyle({ height: e.unref(Pe)(a.value) }) },
                    [
                      e.createElementVNode(
                        'view',
                        {
                          class: e.normalizeClass(
                            `wd-navbar ${t.customClass} ${t.fixed ? 'is-fixed' : ''} ${t.bordered ? 'is-border' : ''}`,
                          ),
                          style: e.normalizeStyle(s.value),
                        },
                        [
                          e.createElementVNode('view', { class: 'wd-navbar__content' }, [
                            t.$slots.capsule
                              ? (e.openBlock(),
                                e.createElementBlock(
                                  'view',
                                  { key: 0, class: 'wd-navbar__capsule' },
                                  [e.renderSlot(t.$slots, 'capsule', {}, void 0, !0)],
                                ))
                              : t.$slots.left
                                ? (e.openBlock(),
                                  e.createElementBlock(
                                    'view',
                                    {
                                      key: 2,
                                      class: e.normalizeClass(
                                        'wd-navbar__left ' + (t.leftDisabled ? 'is-disabled' : ''),
                                      ),
                                      onClick: l,
                                    },
                                    [e.renderSlot(t.$slots, 'left', {}, void 0, !0)],
                                    2,
                                  ))
                                : (e.openBlock(),
                                  e.createElementBlock(
                                    'view',
                                    {
                                      key: 1,
                                      class: e.normalizeClass(
                                        'wd-navbar__left ' + (t.leftDisabled ? 'is-disabled' : ''),
                                      ),
                                      onClick: l,
                                    },
                                    [
                                      t.leftArrow
                                        ? (e.openBlock(),
                                          e.createBlock(yt, {
                                            key: 0,
                                            name: 'arrow-left',
                                            'custom-class': 'wd-navbar__arrow',
                                          }))
                                        : e.createCommentVNode('', !0),
                                      t.leftText
                                        ? (e.openBlock(),
                                          e.createElementBlock(
                                            'view',
                                            { key: 1, class: 'wd-navbar__text' },
                                            e.toDisplayString(t.leftText),
                                            1,
                                          ))
                                        : e.createCommentVNode('', !0),
                                    ],
                                    2,
                                  )),
                            e.createElementVNode('view', { class: 'wd-navbar__title' }, [
                              e.renderSlot(t.$slots, 'title', {}, void 0, !0),
                              !t.$slots.title && t.title
                                ? (e.openBlock(),
                                  e.createElementBlock(
                                    e.Fragment,
                                    { key: 0 },
                                    [e.createTextVNode(e.toDisplayString(t.title), 1)],
                                    64,
                                  ))
                                : e.createCommentVNode('', !0),
                            ]),
                            t.$slots.right || t.rightText
                              ? (e.openBlock(),
                                e.createElementBlock(
                                  'view',
                                  {
                                    key: 3,
                                    class: e.normalizeClass(
                                      'wd-navbar__right ' + (t.rightDisabled ? 'is-disabled' : ''),
                                    ),
                                    onClick: c,
                                  },
                                  [
                                    e.renderSlot(t.$slots, 'right', {}, void 0, !0),
                                    !t.$slots.right && t.rightText
                                      ? (e.openBlock(),
                                        e.createElementBlock(
                                          'view',
                                          {
                                            key: 0,
                                            class: 'wd-navbar__text',
                                            'hover-class': 'wd-navbar__text--hover',
                                            'hover-stay-time': 70,
                                          },
                                          e.toDisplayString(t.rightText),
                                          1,
                                        ))
                                      : e.createCommentVNode('', !0),
                                  ],
                                  2,
                                ))
                              : e.createCommentVNode('', !0),
                          ]),
                        ],
                        6,
                      ),
                    ],
                    4,
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-dd43dd1f']],
      ),
      wt = ve(
        e.defineComponent({
          __name: 'fg-navbar',
          props: {
            leftText: { default: '' },
            rightText: { default: '' },
            leftArrow: { type: Boolean, default: !0 },
            bordered: { type: Boolean, default: !1 },
            fixed: { type: Boolean, default: !1 },
            placeholder: { type: Boolean, default: !0 },
            zIndex: { default: 1 },
            safeAreaInsetTop: { type: Boolean, default: !0 },
            leftDisabled: { type: Boolean, default: !1 },
            rightDisabled: { type: Boolean, default: !1 },
          },
          setup(t) {
            function r() {
              uni.navigateBack({
                fail() {
                  uni.reLaunch({ url: '/pages/index/index' })
                },
              })
            }
            return (t, o) => {
              const n = R(e.resolveDynamicComponent('wd-navbar'), _t)
              return (
                e.openBlock(),
                e.createBlock(
                  n,
                  {
                    'left-text': t.leftText,
                    'right-text': t.rightText,
                    'left-arrow': t.leftArrow,
                    bordered: t.bordered,
                    fixed: t.fixed,
                    placeholder: t.placeholder,
                    'z-index': t.zIndex,
                    'safe-area-inset-top': t.safeAreaInsetTop,
                    'left-disabled': t.leftDisabled,
                    'right-disabled': t.rightDisabled,
                    onClickLeft: r,
                  },
                  {
                    left: e.withCtx(() => [
                      e.createElementVNode('image', {
                        class: 'back-arrow',
                        src: '/static/images/back-arrow.png',
                      }),
                    ]),
                    title: e.withCtx(() => [e.renderSlot(t.$slots, 'default', {}, void 0, !0)]),
                    _: 3,
                  },
                  8,
                  [
                    'left-text',
                    'right-text',
                    'left-arrow',
                    'bordered',
                    'fixed',
                    'placeholder',
                    'z-index',
                    'safe-area-inset-top',
                    'left-disabled',
                    'right-disabled',
                  ],
                )
              )
            }
          },
        }),
        [['__scopeId', 'data-v-67c237cc']],
      ),
      bt = ve(
        e.defineComponent({
          __name: 'index',
          setup(t) {
            const { safeAreaInsets: r } = uni.getSystemInfoSync()
            return (t, r) => {
              const o = R(e.resolveDynamicComponent('fg-navbar'), wt),
                n = e.resolveComponent('layout-tabbar-uni')
              return (
                e.openBlock(),
                e.createBlock(n, null, {
                  default: e.withCtx(() => [
                    e.createElementVNode('view', null, [
                      e.createVNode(o, null, {
                        default: e.withCtx(() => [e.createTextVNode('睡个好觉')]),
                        _: 1,
                      }),
                    ]),
                  ]),
                  _: 1,
                })
              )
            }
          },
        }),
        [['__scopeId', 'data-v-73f1f015']],
      ),
      kt = ve(
        e.defineComponent({
          __name: 'index',
          setup: (t) => (t, r) => {
            const o = e.resolveComponent('layout-default-uni')
            return (
              e.openBlock(),
              e.createBlock(o, null, {
                default: e.withCtx(() => [e.createElementVNode('view', { class: '' })]),
                _: 1,
              })
            )
          },
        }),
        [['__scopeId', 'data-v-6e3fa3e2']],
      ),
      xt = ve(
        e.defineComponent({
          __name: 'index',
          setup(t) {
            const r = e.ref('')
            me()
            const o = e.ref(''),
              n = e.ref(!1)
            W((e) => {
              e.redirect && (r.value = e.redirect)
            })
            const a = () => {
                0 !== o.value.length
                  ? 11 === o.value.length
                    ? uni.navigateTo({ url: `/pages/login/verification/index?mobile=${o.value}` })
                    : pe('请输入正确的手机号')
                  : pe('请输入手机号')
              },
              i = () => {
                uni.redirectTo({ url: '/pages/login/index' })
              }
            return (t, r) => {
              const s = e.resolveComponent('layout-default-uni')
              return (
                e.openBlock(),
                e.createBlock(s, null, {
                  default: e.withCtx(() => [
                    e.createElementVNode('view', { class: 'login-container' }, [
                      e.createElementVNode('view', { class: 'login-header' }, [
                        e.createElementVNode('view', { class: 'login-title' }, '登录'),
                      ]),
                      e.createElementVNode('view', { class: 'login-form' }, [
                        e.createElementVNode(
                          'view',
                          { class: 'login-desc' },
                          '未注册的手机号验证后将自动注册',
                        ),
                        e.createElementVNode('view', { class: 'login-input-group' }, [
                          e.createElementVNode('view', { class: 'input-wrapper' }, [
                            e.createElementVNode('view', { class: 'prefix-title' }, '+86'),
                            e.withDirectives(
                              e.createElementVNode(
                                'input',
                                {
                                  'onUpdate:modelValue': r[0] || (r[0] = (e) => (o.value = e)),
                                  placeholder: '请输入手机号',
                                  'placeholder-class': 'placeholder',
                                  class: 'login-input',
                                  maxlength: 11,
                                  type: 'number',
                                },
                                null,
                                512,
                              ),
                              [[e.vModelText, o.value]],
                            ),
                          ]),
                        ]),
                        e.createElementVNode('view', { class: 'login-buttons' }, [
                          e.createVNode(be, {
                            title: '获取验证码',
                            type: 'primary',
                            onClick: e.withModifiers(a, ['stop']),
                          }),
                        ]),
                        e.createElementVNode(
                          'view',
                          { class: 'login-tab', onClick: e.withModifiers(i, ['stop']) },
                          '本机号码一键登录',
                        ),
                      ]),
                      e.createVNode(
                        ge,
                        {
                          'agree-privacy': n.value,
                          'onUpdate:agreePrivacy': r[1] || (r[1] = (e) => (n.value = e)),
                        },
                        null,
                        8,
                        ['agree-privacy'],
                      ),
                      e.createVNode(we),
                    ]),
                  ]),
                  _: 1,
                })
              )
            }
          },
        }),
        [['__scopeId', 'data-v-73c119c0']],
      ),
      Ct = ve(
        e.defineComponent({
          __name: 'index',
          setup(t) {
            const r = e.ref(['', '', '', '']),
              o = e.ref(''),
              n = e.ref(60)
            W((e) => {
              e.mobile && (o.value = `${e.mobile}`)
            })
            const a = e.ref([])
            return (
              e.onMounted(() => {
                e.nextTick(() => {
                  var e
                  F(
                    'log',
                    'at pages/login/verification/index.vue:90',
                    'inputRefs.value:',
                    a.value[0],
                  )
                  try {
                    null == (e = a.value[0]) || e.focus()
                  } catch (t) {}
                })
              }),
              (t, i) => {
                const s = R(e.resolveDynamicComponent('fg-navbar'), wt),
                  l = e.resolveComponent('layout-default-uni')
                return (
                  e.openBlock(),
                  e.createBlock(l, null, {
                    default: e.withCtx(() => [
                      e.createElementVNode('view', { class: 'page' }, [
                        e.createVNode(s),
                        e.createElementVNode('view', { class: 'verification-container' }, [
                          e.createElementVNode('view', { class: 'verification-header' }, [
                            e.createElementVNode(
                              'view',
                              { class: 'verification-title' },
                              '输入验证码',
                            ),
                          ]),
                          e.createElementVNode('view', { class: 'verification' }, [
                            e.createElementVNode(
                              'view',
                              { class: 'verification-tips' },
                              '验证码已发送至 +86 ' + e.toDisplayString(e.unref(o)),
                              1,
                            ),
                            e.createElementVNode('view', { class: 'verification-input' }, [
                              (e.openBlock(!0),
                              e.createElementBlock(
                                e.Fragment,
                                null,
                                e.renderList(
                                  e.unref(r),
                                  (t, o) => (
                                    e.openBlock(),
                                    e.createElementBlock(
                                      'view',
                                      { class: 'verification-input-item', key: o },
                                      [
                                        e.withDirectives(
                                          e.createElementVNode(
                                            'input',
                                            {
                                              type: 'number',
                                              maxlength: 1,
                                              'onUpdate:modelValue': (t) => (e.unref(r)[o] = t),
                                              onInput: (t) =>
                                                ((t, o) => {
                                                  const n = o.target.value
                                                  if (/^\d*$/.test(n)) {
                                                    if (
                                                      (n &&
                                                        t < 3 &&
                                                        e.nextTick(() => {
                                                          var e
                                                          null == (e = a.value[t + 1]) || e.focus()
                                                        }),
                                                      3 === t && n)
                                                    ) {
                                                      const e = r.value.join('')
                                                      4 === e.length &&
                                                        F(
                                                          'log',
                                                          'at pages/login/verification/index.vue:73',
                                                          '验证码输入完成:',
                                                          e,
                                                        )
                                                    }
                                                  } else r.value[t] = ''
                                                })(o, t),
                                              onKeydown: e.withKeys(
                                                (t) =>
                                                  ((t, o) => {
                                                    'Backspace' === o.key &&
                                                      !r.value[t] &&
                                                      t > 0 &&
                                                      e.nextTick(() => {
                                                        var e
                                                        null == (e = a.value[t - 1]) || e.focus()
                                                      })
                                                  })(o, t),
                                                ['delete'],
                                              ),
                                              ref_for: !0,
                                              ref: (t) => (e.unref(a)[o] = t),
                                            },
                                            null,
                                            40,
                                            ['onUpdate:modelValue', 'onInput', 'onKeydown'],
                                          ),
                                          [[e.vModelText, e.unref(r)[o]]],
                                        ),
                                      ],
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]),
                            e.createElementVNode('view', { class: 'verification-time' }, [
                              e.createElementVNode('text', null, '重新发送'),
                              e.createElementVNode(
                                'text',
                                { class: 'active' },
                                e.toDisplayString(e.unref(n)),
                                1,
                              ),
                              e.createElementVNode('text', null, '秒'),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  })
                )
              }
            )
          },
        }),
        [['__scopeId', 'data-v-80a7d6cb']],
      ),
      Vt = __spreadProps(__spreadValues({}, vt), {
        customImage: mt(''),
        src: String,
        previewSrc: String,
        round: dt(!1),
        mode: mt('scaleToFill'),
        lazyLoad: dt(!1),
        width: ct,
        height: ct,
        radius: ct,
        enablePreview: dt(!1),
        showMenuByLongpress: dt(!1),
      }),
      St = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-img',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: Vt,
              emits: ['error', 'click', 'load'],
              setup(t, { emit: r }) {
                const o = t,
                  n = r,
                  a = e.computed(() => {
                    const e = {}
                    return (
                      Ae(o.height) && (e.height = Pe(o.height)),
                      Ae(o.width) && (e.width = Pe(o.width)),
                      Ae(o.radius) &&
                        ((e['border-radius'] = Pe(o.radius)), (e.overflow = 'hidden')),
                      `${Fe(e)}${o.customStyle}`
                    )
                  }),
                  i = e.computed(() => `wd-img  ${o.round ? 'is-round' : ''} ${o.customClass}`),
                  s = e.ref('loading')
                function l(e) {
                  ;(s.value = 'error'), n('error', e)
                }
                function c(e) {
                  o.enablePreview &&
                    o.src &&
                    'success' == s.value &&
                    uni.previewImage({ urls: [o.previewSrc || o.src] }),
                    n('click', e)
                }
                function u(e) {
                  ;(s.value = 'success'), n('load', e)
                }
                return (t, r) => (
                  e.openBlock(),
                  e.createElementBlock(
                    'view',
                    {
                      class: e.normalizeClass(i.value),
                      onClick: c,
                      style: e.normalizeStyle(a.value),
                    },
                    [
                      e.createElementVNode(
                        'image',
                        {
                          class: e.normalizeClass(`wd-img__image ${t.customImage}`),
                          style: e.normalizeStyle(
                            'success' !== s.value ? 'width: 0;height: 0;' : '',
                          ),
                          src: t.src,
                          mode: t.mode,
                          'show-menu-by-longpress': t.showMenuByLongpress,
                          'lazy-load': t.lazyLoad,
                          onLoad: u,
                          onError: l,
                        },
                        null,
                        46,
                        ['src', 'mode', 'show-menu-by-longpress', 'lazy-load'],
                      ),
                      'loading' === s.value
                        ? e.renderSlot(t.$slots, 'loading', { key: 0 }, void 0, !0)
                        : e.createCommentVNode('', !0),
                      'error' === s.value
                        ? e.renderSlot(t.$slots, 'error', { key: 1 }, void 0, !0)
                        : e.createCommentVNode('', !0),
                    ],
                    6,
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-aca9eb20']],
      ),
      Et = {
        name: 'neurodance-uni',
        type: 'commonjs',
        version: '2.11.0',
        description: 'unibest - 最好的 uniapp 开发模板',
        'update-time': '2025-05-28',
        license: 'MIT',
        engines: { node: '>=18', pnpm: '>=7.30' },
        scripts: {
          preinstall: 'npx only-allow pnpm',
          uvm: 'npx @dcloudio/uvm@latest',
          'uvm-rm': 'node ./scripts/postupgrade.js',
          postuvm: 'echo upgrade uni-app success!',
          'dev:app': 'uni -p app',
          'dev:app-android': 'uni -p app-android',
          'dev:app-ios': 'uni -p app-ios',
          'dev:custom': 'uni -p',
          dev: 'uni',
          'dev:h5': 'uni',
          'dev:h5:ssr': 'uni --ssr',
          'dev:mp': 'uni -p mp-weixin',
          'dev:mp-alipay': 'uni -p mp-alipay',
          'dev:mp-baidu': 'uni -p mp-baidu',
          'dev:mp-jd': 'uni -p mp-jd',
          'dev:mp-kuaishou': 'uni -p mp-kuaishou',
          'dev:mp-lark': 'uni -p mp-lark',
          'dev:mp-qq': 'uni -p mp-qq',
          'dev:mp-toutiao': 'uni -p mp-toutiao',
          'dev:mp-weixin': 'uni -p mp-weixin',
          'dev:mp-xhs': 'uni -p mp-xhs',
          'dev:quickapp-webview': 'uni -p quickapp-webview',
          'dev:quickapp-webview-huawei': 'uni -p quickapp-webview-huawei',
          'dev:quickapp-webview-union': 'uni -p quickapp-webview-union',
          'build:app': 'uni build -p app',
          'build:app-android': 'uni build -p app-android',
          'build:app-ios': 'uni build -p app-ios',
          'build:custom': 'uni build -p',
          'build:h5': 'uni build',
          build: 'uni build',
          'build:h5:ssr': 'uni build --ssr',
          'build:mp-alipay': 'uni build -p mp-alipay',
          'build:mp': 'uni build -p mp-weixin',
          'build:mp-baidu': 'uni build -p mp-baidu',
          'build:mp-jd': 'uni build -p mp-jd',
          'build:mp-kuaishou': 'uni build -p mp-kuaishou',
          'build:mp-lark': 'uni build -p mp-lark',
          'build:mp-qq': 'uni build -p mp-qq',
          'build:mp-toutiao': 'uni build -p mp-toutiao',
          'build:mp-weixin': 'uni build -p mp-weixin',
          'build:mp-xhs': 'uni build -p mp-xhs',
          'build:quickapp-webview': 'uni build -p quickapp-webview',
          'build:quickapp-webview-huawei': 'uni build -p quickapp-webview-huawei',
          'build:quickapp-webview-union': 'uni build -p quickapp-webview-union',
          'type-check': 'vue-tsc --noEmit',
          'openapi-ts-request': 'openapi-ts',
          prepare: 'git init && husky',
        },
        'lint-staged': {
          '**/*.{vue,html,cjs,json,md,scss,css,txt}': ['prettier --write --cache'],
          '**/*.{js,ts}': ['oxlint --fix', 'prettier --write --cache'],
          '!**/{node_modules,dist}/**': [],
        },
        resolutions: { 'bin-wrapper': 'npm:bin-wrapper-china' },
        dependencies: {
          '@dcloudio/uni-app': '3.0.0-4060620250520001',
          '@dcloudio/uni-app-harmony': '3.0.0-4060620250520001',
          '@dcloudio/uni-app-plus': '3.0.0-4060620250520001',
          '@dcloudio/uni-components': '3.0.0-4060620250520001',
          '@dcloudio/uni-h5': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-alipay': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-baidu': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-harmony': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-jd': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-kuaishou': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-lark': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-qq': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-toutiao': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-weixin': '3.0.0-4060620250520001',
          '@dcloudio/uni-mp-xhs': '3.0.0-4060620250520001',
          '@dcloudio/uni-quickapp-webview': '3.0.0-4060620250520001',
          '@tanstack/vue-query': '^5.62.16',
          'abortcontroller-polyfill': '^1.7.8',
          dayjs: '1.11.10',
          'js-cookie': '^3.0.5',
          pinia: '2.0.36',
          'pinia-plugin-persistedstate': '3.2.1',
          qs: '6.5.3',
          vue: '^3.5.15',
          'wot-design-uni': '^1.9.1',
          'z-paging': '^2.8.4',
        },
        devDependencies: {
          '@commitlint/cli': '^19.8.1',
          '@commitlint/config-conventional': '^19.8.1',
          '@dcloudio/types': '^3.4.8',
          '@dcloudio/uni-automator': '3.0.0-4060620250520001',
          '@dcloudio/uni-cli-shared': '3.0.0-4060620250520001',
          '@dcloudio/uni-stacktracey': '3.0.0-4060620250520001',
          '@dcloudio/vite-plugin-uni': '3.0.0-4060620250520001',
          '@esbuild/darwin-arm64': '0.25.5',
          '@esbuild/darwin-x64': '0.25.5',
          '@iconify-json/carbon': '^1.2.4',
          '@rollup/rollup-darwin-x64': '^4.28.0',
          '@types/node': '^20.17.9',
          '@types/wechat-miniprogram': '^3.4.8',
          '@uni-helper/uni-types': '1.0.0-alpha.3',
          '@uni-helper/unocss-preset-uni': '^0.2.11',
          '@uni-helper/vite-plugin-uni-components': '^0.2.0',
          '@uni-helper/vite-plugin-uni-layouts': '^0.1.10',
          '@uni-helper/vite-plugin-uni-manifest': '^0.2.8',
          '@uni-helper/vite-plugin-uni-pages': '0.2.20',
          '@uni-helper/vite-plugin-uni-platform': '^0.0.4',
          '@uni-ku/bundle-optimizer': '^1.3.3',
          '@unocss/preset-legacy-compat': '^0.59.4',
          '@vue/runtime-core': '^3.4.21',
          '@vue/tsconfig': '^0.1.3',
          autoprefixer: '^10.4.20',
          husky: '^9.1.7',
          'lint-staged': '^15.2.10',
          'openapi-ts-request': '^1.1.2',
          oxlint: '^0.1.0',
          postcss: '^8.4.49',
          'postcss-html': '^1.7.0',
          'postcss-scss': '^4.0.9',
          'rollup-plugin-visualizer': '^5.12.0',
          sass: '1.77.8',
          terser: '^5.36.0',
          typescript: '^5.7.2',
          unocss: '65.4.2',
          'unplugin-auto-import': '^0.17.8',
          vite: '6.3.5',
          'vite-plugin-restart': '^0.4.2',
          'vue-tsc': '^2.2.10',
        },
      },
      Nt = ve(
        e.defineComponent({
          __name: 'index',
          setup(t) {
            const r = e.ref('unibest'),
              o = e.ref('/static/logo.svg'),
              n = e.computed(() => new Date().getFullYear())
            return (t, a) => {
              const i = R(e.resolveDynamicComponent('wd-img'), St),
                s = R(e.resolveDynamicComponent('wd-icon'), yt),
                l = e.resolveComponent('layout-default-uni')
              return (
                e.openBlock(),
                e.createBlock(l, null, {
                  default: e.withCtx(() => [
                    e.createElementVNode('view', { class: 'about-container' }, [
                      e.createElementVNode('view', { class: 'about-card' }, [
                        e.createElementVNode('view', { class: 'app-info' }, [
                          e.createElementVNode('view', { class: 'logo-wrapper' }, [
                            e.createVNode(
                              i,
                              { src: o.value, width: '120px', height: '120px', radius: '24rpx' },
                              null,
                              8,
                              ['src'],
                            ),
                          ]),
                          e.createElementVNode(
                            'view',
                            { class: 'app-name' },
                            e.toDisplayString(r.value),
                            1,
                          ),
                          e.createElementVNode(
                            'view',
                            { class: 'app-version' },
                            '版本 ' + e.toDisplayString(e.unref(Et).version),
                            1,
                          ),
                        ]),
                        e.createElementVNode('view', { class: 'info-section' }, [
                          e.createElementVNode('view', { class: 'section-title' }, '联系我们'),
                          e.createElementVNode('view', { class: 'section-content' }, [
                            e.createElementVNode('view', { class: 'contact-item' }, [
                              e.createVNode(s, {
                                name: 'phone',
                                size: '20px',
                                class: 'contact-icon',
                              }),
                              e.createElementVNode(
                                'text',
                                { class: 'contact-text' },
                                '客服电话：400-XXX-XXXX',
                              ),
                            ]),
                            e.createElementVNode('view', { class: 'contact-item' }, [
                              e.createVNode(s, {
                                name: 'mail',
                                size: '20px',
                                class: 'contact-icon',
                              }),
                              e.createElementVNode(
                                'text',
                                { class: 'contact-text' },
                                '邮箱：support@unibest.tech',
                              ),
                            ]),
                            e.createElementVNode('view', { class: 'contact-item' }, [
                              e.createVNode(s, {
                                name: 'location',
                                size: '20px',
                                class: 'contact-icon',
                              }),
                              e.createElementVNode(
                                'text',
                                { class: 'contact-text' },
                                '地址：中国·深圳',
                              ),
                            ]),
                          ]),
                        ]),
                        e.createElementVNode('view', { class: 'copyright' }, [
                          e.createElementVNode(
                            'text',
                            null,
                            'Copyright © 2025-' +
                              e.toDisplayString(n.value) +
                              ' ' +
                              e.toDisplayString(r.value),
                            1,
                          ),
                          e.createElementVNode('text', null, 'All Rights Reserved'),
                        ]),
                      ]),
                    ]),
                  ]),
                  _: 1,
                })
              )
            }
          },
        }),
        [['__scopeId', 'data-v-a9859df3']],
      )
    function Pt(t) {
      const r = e.inject(t, null)
      if (r) {
        const t = e.getCurrentInstance(),
          { link: o, unlink: n, internalChildren: a } = r
        o(t), e.onUnmounted(() => n(t))
        return { parent: r, index: e.computed(() => a.indexOf(t)) }
      }
      return { parent: null, index: e.ref(-1) }
    }
    const Bt = Symbol('wd-cell-group'),
      Ot = __spreadProps(__spreadValues({}, vt), {
        title: String,
        value: String,
        useSlot: dt(!1),
        border: dt(!1),
      })
    const At = Symbol('wd-form'),
      $t = __spreadProps(__spreadValues({}, vt), {
        model: ut(Object),
        rules: { type: Object, default: () => ({}) },
        resetOnChange: dt(!0),
        errorType: { type: String, default: 'message' },
      }),
      Tt = (e) => {
        const t = e ? e.replace(/-(\w)/g, (e, t) => t.toUpperCase()) + '.' : ''
        return {
          translate: (e, ...r) => {
            const o = at.messages(),
              n = Ue(o, t + e)
            return De(n) ? n(...r) : Ae(n) ? n : `${t}${e}`
          },
        }
      },
      It = __spreadProps(__spreadValues({}, vt), {
        customInputClass: mt(''),
        customLabelClass: mt(''),
        placeholder: String,
        placeholderStyle: String,
        placeholderClass: mt(''),
        cursorSpacing: pt(0),
        cursor: pt(-1),
        selectionStart: pt(-1),
        selectionEnd: pt(-1),
        adjustPosition: dt(!0),
        holdKeyboard: dt(!1),
        confirmType: mt('done'),
        confirmHold: dt(!1),
        focus: dt(!1),
        type: mt('text'),
        maxlength: { type: Number, default: -1 },
        disabled: dt(!1),
        alwaysEmbed: dt(!1),
        alignRight: dt(!1),
        modelValue: ft(''),
        showPassword: dt(!1),
        clearable: dt(!1),
        readonly: dt(!1),
        prefixIcon: String,
        suffixIcon: String,
        showWordLimit: dt(!1),
        label: String,
        labelWidth: mt(''),
        size: String,
        error: dt(!1),
        center: dt(!1),
        noBorder: dt(!1),
        required: dt(!1),
        prop: String,
        rules: { type: Array, default: () => [] },
        clearTrigger: mt('always'),
        focusWhenClear: dt(!0),
        ignoreCompositionEvent: dt(!0),
        inputmode: mt('text'),
      }),
      Mt = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-input',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: It,
              emits: [
                'update:modelValue',
                'clear',
                'blur',
                'focus',
                'input',
                'keyboardheightchange',
                'confirm',
                'clicksuffixicon',
                'clickprefixicon',
                'click',
              ],
              setup(t, { emit: r }) {
                const o = t,
                  n = r,
                  a = e.useSlots(),
                  { translate: i } = Tt('input'),
                  s = e.ref(!1),
                  l = e.ref(!1),
                  c = e.ref(!1),
                  u = e.ref(!1),
                  d = e.ref(
                    (function () {
                      const e = (function (e) {
                        const { maxlength: t } = o
                        if (Ae(t) && -1 !== t && String(e).length > t)
                          return e.toString().slice(0, t)
                        return e
                      })(o.modelValue)
                      ;(t = e),
                        (r = o.modelValue),
                        ((e, t) => {
                          if (e === t) return !0
                          if (!Array.isArray(e) || !Array.isArray(t)) return !1
                          if (e.length !== t.length) return !1
                          for (let r = 0; r < e.length; ++r) if (e[r] !== t[r]) return !1
                          return !0
                        })(String(t), String(r)) || n('update:modelValue', e)
                      var t, r
                      return e
                    })(),
                  ),
                  p = (function () {
                    const { parent: t, index: r } = Pt(Bt)
                    return { border: e.computed(() => t && t.props.border && r.value) }
                  })()
                e.watch(
                  () => o.focus,
                  (e) => {
                    c.value = e
                  },
                  { immediate: !0, deep: !0 },
                ),
                  e.watch(
                    () => o.modelValue,
                    (e) => {
                      d.value = Ae(e) ? String(e) : ''
                    },
                  )
                const { parent: f } = Pt(At),
                  m = e.computed(() => (Ae(o.placeholder) ? o.placeholder : i('placeholder'))),
                  v = e.computed(() => {
                    const { disabled: e, readonly: t, clearable: r, clearTrigger: n } = o
                    return !(
                      !r ||
                      t ||
                      e ||
                      !d.value ||
                      !('always' === n || ('focus' === o.clearTrigger && u.value))
                    )
                  }),
                  h = e.computed(() => {
                    const { disabled: e, readonly: t, maxlength: r, showWordLimit: n } = o
                    return Boolean(!e && !t && Ae(r) && r > -1 && n)
                  }),
                  y = e.computed(() =>
                    f && o.prop && f.errorMessages && f.errorMessages[o.prop]
                      ? f.errorMessages[o.prop]
                      : '',
                  ),
                  g = e.computed(() => {
                    let e = !1
                    if (f && f.props.rules) {
                      const t = f.props.rules
                      for (const r in t)
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          r === o.prop &&
                          Array.isArray(t[r]) &&
                          (e = t[r].some((e) => e.required))
                    }
                    return o.required || o.rules.some((e) => e.required) || e
                  }),
                  _ = e.computed(
                    () =>
                      `wd-input  ${o.label || a.label ? 'is-cell' : ''} ${o.center ? 'is-center' : ''} ${p.border.value ? 'is-border' : ''} ${o.size ? 'is-' + o.size : ''} ${o.error ? 'is-error' : ''} ${o.disabled ? 'is-disabled' : ''}  ${d.value && String(d.value).length > 0 ? 'is-not-empty' : ''}  ${o.noBorder ? 'is-no-border' : ''} ${o.customClass}`,
                  ),
                  w = e.computed(
                    () => `wd-input__label ${o.customLabelClass} ${g.value ? 'is-required' : ''}`,
                  ),
                  b = e.computed(() => `wd-input__placeholder  ${o.placeholderClass}`),
                  k = e.computed(() =>
                    o.labelWidth
                      ? Fe({ 'min-width': o.labelWidth, 'max-width': o.labelWidth })
                      : '',
                  )
                function x() {
                  s.value = !s.value
                }
                function C() {
                  return __async(this, null, function* () {
                    ;(l.value = !0),
                      (u.value = !1),
                      (d.value = ''),
                      o.focusWhenClear && (c.value = !1),
                      yield Re(),
                      o.focusWhenClear && ((c.value = !0), (u.value = !0)),
                      n('update:modelValue', d.value),
                      n('clear')
                  })
                }
                function V() {
                  return __async(this, null, function* () {
                    yield Re(150),
                      l.value ? (l.value = !1) : ((u.value = !1), n('blur', { value: d.value }))
                  })
                }
                function S({ detail: e }) {
                  ;(u.value = !0), n('focus', e)
                }
                function E({ detail: e }) {
                  n('update:modelValue', d.value), n('input', e)
                }
                function N({ detail: e }) {
                  n('keyboardheightchange', e)
                }
                function P({ detail: e }) {
                  n('confirm', e)
                }
                function B() {
                  n('clicksuffixicon')
                }
                function O() {
                  n('clickprefixicon')
                }
                function A(e) {
                  n('click', e)
                }
                return (t, r) => (
                  e.openBlock(),
                  e.createElementBlock(
                    'view',
                    {
                      class: e.normalizeClass(_.value),
                      style: e.normalizeStyle(t.customStyle),
                      onClick: A,
                    },
                    [
                      t.label || t.$slots.label
                        ? (e.openBlock(),
                          e.createElementBlock(
                            'view',
                            {
                              key: 0,
                              class: e.normalizeClass(w.value),
                              style: e.normalizeStyle(k.value),
                            },
                            [
                              t.prefixIcon || t.$slots.prefix
                                ? (e.openBlock(),
                                  e.createElementBlock(
                                    'view',
                                    { key: 0, class: 'wd-input__prefix' },
                                    [
                                      t.prefixIcon && !t.$slots.prefix
                                        ? (e.openBlock(),
                                          e.createBlock(
                                            yt,
                                            {
                                              key: 0,
                                              'custom-class': 'wd-input__icon',
                                              name: t.prefixIcon,
                                              onClick: O,
                                            },
                                            null,
                                            8,
                                            ['name'],
                                          ))
                                        : e.renderSlot(t.$slots, 'prefix', { key: 1 }, void 0, !0),
                                    ],
                                  ))
                                : e.createCommentVNode('', !0),
                              e.createElementVNode('view', { class: 'wd-input__label-inner' }, [
                                t.label && !t.$slots.label
                                  ? (e.openBlock(),
                                    e.createElementBlock(
                                      e.Fragment,
                                      { key: 0 },
                                      [e.createTextVNode(e.toDisplayString(t.label), 1)],
                                      64,
                                    ))
                                  : e.renderSlot(t.$slots, 'label', { key: 1 }, void 0, !0),
                              ]),
                            ],
                            6,
                          ))
                        : e.createCommentVNode('', !0),
                      e.createElementVNode('view', { class: 'wd-input__body' }, [
                        e.createElementVNode('view', { class: 'wd-input__value' }, [
                          (!t.prefixIcon && !t.$slots.prefix) || t.label
                            ? e.createCommentVNode('', !0)
                            : (e.openBlock(),
                              e.createElementBlock('view', { key: 0, class: 'wd-input__prefix' }, [
                                t.prefixIcon && !t.$slots.prefix
                                  ? (e.openBlock(),
                                    e.createBlock(
                                      yt,
                                      {
                                        key: 0,
                                        'custom-class': 'wd-input__icon',
                                        name: t.prefixIcon,
                                        onClick: O,
                                      },
                                      null,
                                      8,
                                      ['name'],
                                    ))
                                  : e.renderSlot(t.$slots, 'prefix', { key: 1 }, void 0, !0),
                              ])),
                          e.withDirectives(
                            e.createElementVNode(
                              'input',
                              {
                                class: e.normalizeClass([
                                  'wd-input__inner',
                                  t.prefixIcon ? 'wd-input__inner--prefix' : '',
                                  h.value ? 'wd-input__inner--count' : '',
                                  t.alignRight ? 'is-align-right' : '',
                                  t.customInputClass,
                                ]),
                                type: t.type,
                                password: t.showPassword && !s.value,
                                'onUpdate:modelValue': r[0] || (r[0] = (e) => (d.value = e)),
                                placeholder: m.value,
                                disabled: t.disabled || t.readonly,
                                maxlength: t.maxlength,
                                focus: c.value,
                                'confirm-type': t.confirmType,
                                'confirm-hold': t.confirmHold,
                                cursor: t.cursor,
                                'cursor-spacing': t.cursorSpacing,
                                'placeholder-style': t.placeholderStyle,
                                'selection-start': t.selectionStart,
                                'selection-end': t.selectionEnd,
                                'adjust-position': t.adjustPosition,
                                'hold-keyboard': t.holdKeyboard,
                                'always-embed': t.alwaysEmbed,
                                'placeholder-class': b.value,
                                ignoreCompositionEvent: t.ignoreCompositionEvent,
                                inputmode: t.inputmode,
                                onInput: E,
                                onFocus: S,
                                onBlur: V,
                                onConfirm: P,
                                onKeyboardheightchange: N,
                              },
                              null,
                              42,
                              [
                                'type',
                                'password',
                                'placeholder',
                                'disabled',
                                'maxlength',
                                'focus',
                                'confirm-type',
                                'confirm-hold',
                                'cursor',
                                'cursor-spacing',
                                'placeholder-style',
                                'selection-start',
                                'selection-end',
                                'adjust-position',
                                'hold-keyboard',
                                'always-embed',
                                'placeholder-class',
                                'ignoreCompositionEvent',
                                'inputmode',
                              ],
                            ),
                            [[e.vModelDynamic, d.value]],
                          ),
                          o.readonly
                            ? (e.openBlock(),
                              e.createElementBlock('view', {
                                key: 1,
                                class: 'wd-input__readonly-mask',
                              }))
                            : e.createCommentVNode('', !0),
                          v.value || t.showPassword || t.suffixIcon || h.value || t.$slots.suffix
                            ? (e.openBlock(),
                              e.createElementBlock('view', { key: 2, class: 'wd-input__suffix' }, [
                                v.value
                                  ? (e.openBlock(),
                                    e.createBlock(yt, {
                                      key: 0,
                                      'custom-class': 'wd-input__clear',
                                      name: 'error-fill',
                                      onClick: C,
                                    }))
                                  : e.createCommentVNode('', !0),
                                t.showPassword
                                  ? (e.openBlock(),
                                    e.createBlock(
                                      yt,
                                      {
                                        key: 1,
                                        'custom-class': 'wd-input__icon',
                                        name: s.value ? 'view' : 'eye-close',
                                        onClick: x,
                                      },
                                      null,
                                      8,
                                      ['name'],
                                    ))
                                  : e.createCommentVNode('', !0),
                                h.value
                                  ? (e.openBlock(),
                                    e.createElementBlock(
                                      'view',
                                      { key: 2, class: 'wd-input__count' },
                                      [
                                        e.createElementVNode(
                                          'text',
                                          {
                                            class: e.normalizeClass([
                                              d.value && String(d.value).length > 0
                                                ? 'wd-input__count-current'
                                                : '',
                                              String(d.value).length > t.maxlength
                                                ? 'is-error'
                                                : '',
                                            ]),
                                          },
                                          e.toDisplayString(String(d.value).length),
                                          3,
                                        ),
                                        e.createTextVNode(' /' + e.toDisplayString(t.maxlength), 1),
                                      ],
                                    ))
                                  : e.createCommentVNode('', !0),
                                t.suffixIcon && !t.$slots.suffix
                                  ? (e.openBlock(),
                                    e.createBlock(
                                      yt,
                                      {
                                        key: 3,
                                        'custom-class': 'wd-input__icon',
                                        name: t.suffixIcon,
                                        onClick: B,
                                      },
                                      null,
                                      8,
                                      ['name'],
                                    ))
                                  : e.renderSlot(t.$slots, 'suffix', { key: 4 }, void 0, !0),
                              ]))
                            : e.createCommentVNode('', !0),
                        ]),
                        y.value
                          ? (e.openBlock(),
                            e.createElementBlock(
                              'view',
                              { key: 0, class: 'wd-input__error-message' },
                              e.toDisplayString(y.value),
                              1,
                            ))
                          : e.createCommentVNode('', !0),
                      ]),
                    ],
                    6,
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-9e96ab80']],
      ),
      Dt = Symbol('wd-radio-group'),
      jt = __spreadProps(__spreadValues({}, vt), {
        modelValue: [String, Number, Boolean],
        shape: mt('check'),
        checkedColor: String,
        disabled: dt(!1),
        cell: dt(!1),
        size: mt(''),
        inline: dt(!1),
        iconPlacement: mt('auto'),
      }),
      Gt = __spreadProps(__spreadValues({}, vt), {
        value: ut([String, Number, Boolean]),
        shape: String,
        checkedColor: String,
        disabled: { type: [Boolean, null], default: null },
        cell: { type: [Boolean, null], default: null },
        size: String,
        inline: { type: [Boolean, null], default: null },
        maxWidth: String,
        iconPlacement: { type: String },
      }),
      zt = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-radio',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: Gt,
              setup(t) {
                const r = t,
                  { parent: o } = Pt(Dt),
                  n = e.computed(() => !!o && r.value === o.props.modelValue),
                  a = e.computed(() => r.shape || Ue(o, 'props.shape')),
                  i = e.computed(() => r.checkedColor || Ue(o, 'props.checkedColor')),
                  s = e.computed(() => (Ae(r.disabled) ? r.disabled : Ue(o, 'props.disabled'))),
                  l = e.computed(() => (Ae(r.inline) ? r.inline : Ue(o, 'props.inline'))),
                  c = e.computed(() => r.size || Ue(o, 'props.size')),
                  u = e.computed(() => (Ae(r.cell) ? r.cell : Ue(o, 'props.cell'))),
                  d = e.computed(() =>
                    Ae(r.iconPlacement) ? r.iconPlacement : Ue(o, 'props.iconPlacement'),
                  )
                function p() {
                  const { value: e } = r
                  !s.value && o && Ae(e) && o.updateValue(e)
                }
                return (
                  e.watch(
                    () => r.shape,
                    (e) => {
                      !e || ['check', 'dot', 'button'].indexOf(e)
                    },
                  ),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock(
                      'view',
                      {
                        class: e.normalizeClass(
                          `wd-radio ${u.value ? 'is-cell-radio' : ''} ${u.value && 'button' == a.value ? 'is-button-radio' : ''} ${c.value ? 'is-' + c.value : ''} ${l.value ? 'is-inline' : ''} ${n.value ? 'is-checked' : ''} ${'check' !== a.value ? 'is-' + a.value : ''} ${s.value ? 'is-disabled' : ''} icon-placement-${d.value} ${t.customClass}`,
                        ),
                        style: e.normalizeStyle(t.customStyle),
                        onClick: p,
                      },
                      [
                        e.createElementVNode(
                          'view',
                          {
                            class: 'wd-radio__label',
                            style: e.normalizeStyle(
                              `${t.maxWidth ? 'max-width:' + t.maxWidth : ''};  ${n.value && 'button' === a.value && !s.value ? 'color :' + i.value : ''}`,
                            ),
                          },
                          [e.renderSlot(t.$slots, 'default', {}, void 0, !0)],
                          4,
                        ),
                        e.createElementVNode(
                          'view',
                          {
                            class: 'wd-radio__shape',
                            style: e.normalizeStyle(n.value && !s.value ? 'color: ' + i.value : ''),
                          },
                          [
                            'check' === a.value
                              ? (e.openBlock(),
                                e.createBlock(
                                  yt,
                                  {
                                    key: 0,
                                    style: e.normalizeStyle(
                                      n.value && !s.value ? 'color: ' + i.value : '',
                                    ),
                                    name: 'check',
                                  },
                                  null,
                                  8,
                                  ['style'],
                                ))
                              : e.createCommentVNode('', !0),
                          ],
                          4,
                        ),
                      ],
                      6,
                    )
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-66db7d09']],
      )
    const Ft = (e, t) => {
      const r = e.indexOf(t)
      return -1 === r
        ? e.findIndex(
            (e) => void 0 !== t.key && null !== t.key && e.type === t.type && e.key === t.key,
          )
        : r
    }
    function Rt(e, t, r) {
      const o =
        e && e.subTree && e.subTree.children
          ? (function (e) {
              const t = [],
                r = (e) => {
                  Array.isArray(e) &&
                    e.forEach((e) => {
                      var o, n
                      ;(n = e) &&
                        !0 === n.__v_isVNode &&
                        (t.push(e),
                        (null == (o = e.component) ? void 0 : o.subTree) &&
                          (t.push(e.component.subTree), r(e.component.subTree.children)),
                        e.children && r(e.children))
                    })
                }
              return r(e), t
            })(e.subTree.children)
          : []
      r.sort((e, t) => Ft(o, e.vnode) - Ft(o, t.vnode))
      const n = r.map((e) => e.proxy)
      t.sort((e, t) => n.indexOf(e) - n.indexOf(t))
    }
    function qt(t) {
      const r = e.reactive([]),
        o = e.reactive([]),
        n = e.getCurrentInstance()
      return {
        children: r,
        linkChildren: (a) => {
          e.provide(
            t,
            Object.assign(
              {
                link: (e) => {
                  e.proxy && (o.push(e), r.push(e.proxy), Rt(n, r, o))
                },
                unlink: (e) => {
                  const t = o.indexOf(e)
                  r.splice(t, 1), o.splice(t, 1)
                },
                children: r,
                internalChildren: o,
              },
              a,
            ),
          )
        },
      }
    }
    const Qt = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-radio-group',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: jt,
              emits: ['change', 'update:modelValue'],
              setup(t, { emit: r }) {
                const o = t,
                  n = r,
                  { linkChildren: a } = qt(Dt)
                return (
                  a({
                    props: o,
                    updateValue: function (e) {
                      n('update:modelValue', e), n('change', { value: e })
                    },
                  }),
                  e.watch(
                    () => o.shape,
                    (e) => {
                      ;['check', 'dot', 'button'].indexOf(e)
                    },
                    { deep: !0, immediate: !0 },
                  ),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock(
                      'view',
                      {
                        class: e.normalizeClass(
                          `wd-radio-group  ${t.customClass} ${t.cell && 'button' === t.shape ? 'is-button' : ''}`,
                        ),
                        style: e.normalizeStyle(t.customStyle),
                      },
                      [e.renderSlot(t.$slots, 'default', {}, void 0, !0)],
                      6,
                    )
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-87ff328b']],
      ),
      Lt = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-cell-group',
                options: { addGlobalClass: !0, virtualHost: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: Ot,
              setup(t) {
                const r = t,
                  { linkChildren: o } = qt(Bt)
                return (
                  o({ props: r }),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock(
                      'view',
                      {
                        class: e.normalizeClass([
                          'wd-cell-group',
                          t.border ? 'is-border' : '',
                          t.customClass,
                        ]),
                        style: e.normalizeStyle(t.customStyle),
                      },
                      [
                        t.title || t.value || t.useSlot
                          ? (e.openBlock(),
                            e.createElementBlock(
                              'view',
                              { key: 0, class: 'wd-cell-group__title' },
                              [
                                e.createElementVNode('view', { class: 'wd-cell-group__left' }, [
                                  t.$slots.title
                                    ? e.renderSlot(t.$slots, 'title', { key: 1 }, void 0, !0)
                                    : (e.openBlock(),
                                      e.createElementBlock(
                                        'text',
                                        { key: 0 },
                                        e.toDisplayString(t.title),
                                        1,
                                      )),
                                ]),
                                e.createElementVNode('view', { class: 'wd-cell-group__right' }, [
                                  t.$slots.value
                                    ? e.renderSlot(t.$slots, 'value', { key: 1 }, void 0, !0)
                                    : (e.openBlock(),
                                      e.createElementBlock(
                                        'text',
                                        { key: 0 },
                                        e.toDisplayString(t.value),
                                        1,
                                      )),
                                ]),
                              ],
                            ))
                          : e.createCommentVNode('', !0),
                        e.createElementVNode('view', { class: 'wd-cell-group__body' }, [
                          e.renderSlot(t.$slots, 'default', {}, void 0, !0),
                        ]),
                      ],
                      6,
                    )
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-2284820d']],
      ),
      Ut = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'],
      Wt = (e) => e.replace(/[+/]/g, (e) => ('+' === e ? '-' : '_')).replace(/=+\$/m, ''),
      Ht =
        'function' == typeof btoa
          ? (e) => btoa(e)
          : (e) => {
              if (e.charCodeAt(0) > 255)
                throw new RangeError('The string contains invalid characters.')
              return ((e, t = !1) => {
                let r = ''
                for (let o = 0, n = e.length; o < n; o += 3) {
                  const [t, n, a] = [e[o], e[o + 1], e[o + 2]],
                    i = (t << 16) | (n << 8) | a
                  ;(r += Ut[i >>> 18]),
                    (r += Ut[(i >>> 12) & 63]),
                    (r += void 0 !== n ? Ut[(i >>> 6) & 63] : '='),
                    (r += void 0 !== a ? Ut[63 & i] : '=')
                }
                return t ? Wt(r) : r
              })(Uint8Array.from(e, (e) => e.charCodeAt(0)))
            }
    function Kt(e, t = !1) {
      const r = Ht(((e) => unescape(encodeURIComponent(e)))(e))
      return t ? Wt(r) : r
    }
    const Yt = __spreadProps(__spreadValues({}, vt), {
        type: mt('ring'),
        color: mt('#4D80F0'),
        size: ft(''),
      }),
      Xt = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-loading',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: Yt,
              setup(t) {
                const r = Ie.id++,
                  o = Ie.id++,
                  n = Ie.id++,
                  a = {
                    outline: (e = '#4D80F0') =>
                      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="${r}"><stop stop-color="#FFF" offset="0%" stop-opacity="0"/><stop stop-color="#FFF" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#${r}) " stroke-width="3.5" stroke-linecap="round"/></g></svg>`,
                    ring: (e = '#4D80F0', t = '#a6bff7') =>
                      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><linearGradient id="${o}" gradientUnits="userSpaceOnUse" x1="50" x2="50" y2="180"><stop offset="0" stop-color="${e}"></stop> <stop offset="1" stop-color="${t}"></stop></linearGradient> <path fill="url(#${o})" d="M20 100c0-44.1 35.9-80 80-80V0C44.8 0 0 44.8 0 100s44.8 100 100 100v-20c-44.1 0-80-35.9-80-80z"></path> <linearGradient id="${n}" gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180"><stop offset="0" stop-color="#fff" stop-opacity="0"></stop> <stop offset="1" stop-color="${t}"></stop></linearGradient> <path fill="url(#${n})" d="M100 0v20c44.1 0 80 35.9 80 80s-35.9 80-80 80v20c55.2 0 100-44.8 100-100S155.2 0 100 0z"></path> <circle cx="100" cy="10" r="10" fill="${e}"></circle></svg>`,
                  },
                  i = t,
                  s = e.ref(''),
                  l = e.ref(''),
                  c = e.ref(null)
                e.watch(
                  () => i.size,
                  (e) => {
                    c.value = Pe(e)
                  },
                  { deep: !0, immediate: !0 },
                ),
                  e.watch(
                    () => i.type,
                    () => {
                      d()
                    },
                    { deep: !0, immediate: !0 },
                  )
                const u = e.computed(() => {
                  const e = {}
                  return (
                    Ae(c.value) && ((e.height = Pe(c.value)), (e.width = Pe(c.value))),
                    `${Fe(e)} ${i.customStyle}`
                  )
                })
                function d() {
                  const { type: e, color: t } = i
                  let r = Ae(e) ? e : 'ring'
                  const o = `"data:image/svg+xml;base64,${Kt('ring' === r ? a[r](t, l.value) : a[r](t))}"`
                  s.value = o
                }
                return (
                  e.onBeforeMount(() => {
                    ;(l.value = ((e, t, r = 2) => {
                      const o = Te(e),
                        n = Te(t),
                        a = (n[0] - o[0]) / r,
                        i = (n[1] - o[1]) / r,
                        s = (n[2] - o[2]) / r,
                        l = []
                      for (let c = 0; c < r; c++)
                        l.push(
                          $e(
                            parseInt(String(a * c + o[0])),
                            parseInt(String(i * c + o[1])),
                            parseInt(String(s * c + o[2])),
                          ),
                        )
                      return l
                    })(i.color, '#ffffff', 2)[1]),
                      d()
                  }),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock(
                      'view',
                      {
                        class: e.normalizeClass(`wd-loading ${i.customClass}`),
                        style: e.normalizeStyle(u.value),
                      },
                      [
                        e.createElementVNode('view', { class: 'wd-loading__body' }, [
                          e.createElementVNode(
                            'view',
                            {
                              class: 'wd-loading__svg',
                              style: e.normalizeStyle(`background-image: url(${s.value});`),
                            },
                            null,
                            4,
                          ),
                        ]),
                      ],
                      6,
                    )
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-4224d8d3']],
      ),
      Jt = __spreadProps(__spreadValues({}, vt), {
        show: dt(!1),
        duration: { type: [Object, Number, Boolean], default: 300 },
        lazyRender: dt(!1),
        name: [String, Array],
        destroy: dt(!0),
        enterClass: mt(''),
        enterActiveClass: mt(''),
        enterToClass: mt(''),
        leaveClass: mt(''),
        leaveActiveClass: mt(''),
        leaveToClass: mt(''),
      }),
      Zt = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-transition',
                options: { addGlobalClass: !0, virtualHost: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: Jt,
              emits: [
                'click',
                'before-enter',
                'enter',
                'before-leave',
                'leave',
                'after-leave',
                'after-enter',
              ],
              setup(t, { emit: r }) {
                const o = (e) => {
                    let t = `${n.enterClass} ${n.enterActiveClass}`,
                      r = `${n.enterToClass} ${n.enterActiveClass}`,
                      o = `${n.leaveClass} ${n.leaveActiveClass}`,
                      a = `${n.leaveToClass} ${n.leaveActiveClass}`
                    if (Array.isArray(e))
                      for (let n = 0; n < e.length; n++)
                        (t = `wd-${e[n]}-enter wd-${e[n]}-enter-active ${t}`),
                          (r = `wd-${e[n]}-enter-to wd-${e[n]}-enter-active ${r}`),
                          (o = `wd-${e[n]}-leave wd-${e[n]}-leave-active ${o}`),
                          (a = `wd-${e[n]}-leave-to wd-${e[n]}-leave-active ${a}`)
                    else
                      e &&
                        ((t = `wd-${e}-enter wd-${e}-enter-active ${t}`),
                        (r = `wd-${e}-enter-to wd-${e}-enter-active ${r}`),
                        (o = `wd-${e}-leave wd-${e}-leave-active ${o}`),
                        (a = `wd-${e}-leave-to wd-${e}-leave-active ${a}`))
                    return { enter: t, 'enter-to': r, leave: o, 'leave-to': a }
                  },
                  n = t,
                  a = r,
                  i = e.ref(!1),
                  s = e.ref(!1),
                  l = e.ref(''),
                  c = e.ref(!1),
                  u = e.ref(300),
                  d = e.ref(''),
                  p = e.ref(null),
                  f = e.ref(null),
                  m = e.ref(null),
                  v = e.computed(
                    () =>
                      `-webkit-transition-duration:${u.value}ms;transition-duration:${u.value}ms;${s.value || !n.destroy ? '' : 'display: none;'}${n.customStyle}`,
                  ),
                  h = e.computed(() => `wd-transition ${n.customClass}  ${d.value}`)
                function y() {
                  a('click')
                }
                function g() {
                  p.value = new Ne((e) =>
                    __async(null, null, function* () {
                      try {
                        const t = o(n.name),
                          r = Be(n.duration) ? n.duration.enter : n.duration
                        ;(l.value = 'enter'),
                          a('before-enter'),
                          (f.value = Re()),
                          yield f.value,
                          a('enter'),
                          (d.value = t.enter),
                          (u.value = r),
                          (f.value = Re()),
                          yield f.value,
                          (i.value = !0),
                          (s.value = !0),
                          (f.value = Re()),
                          yield f.value,
                          (f.value = null),
                          (c.value = !1),
                          (d.value = t['enter-to']),
                          e()
                      } catch (t) {}
                    }),
                  )
                }
                function _() {
                  c.value ||
                    ((c.value = !0),
                    'leave' === l.value
                      ? a('after-leave')
                      : 'enter' === l.value && a('after-enter'),
                    !n.show && s.value && (s.value = !1))
                }
                return (
                  e.onBeforeMount(() => {
                    n.show && g()
                  }),
                  e.watch(
                    () => n.show,
                    (e) => {
                      e
                        ? (Ge(p.value) && p.value.abort(),
                          Ge(f.value) && f.value.abort(),
                          Ge(m.value) && m.value.abort(),
                          (p.value = null),
                          (f.value = null),
                          (m.value = null),
                          g())
                        : (function () {
                            __async(this, null, function* () {
                              if (!p.value) return (c.value = !1), _()
                              try {
                                if ((yield p.value, !s.value)) return
                                const e = o(n.name),
                                  t = Be(n.duration) ? n.duration.leave : n.duration
                                ;(l.value = 'leave'),
                                  a('before-leave'),
                                  (u.value = t),
                                  (m.value = Re()),
                                  yield m.value,
                                  a('leave'),
                                  (d.value = e.leave),
                                  (m.value = Re()),
                                  yield m.value,
                                  (c.value = !1),
                                  (d.value = e['leave-to']),
                                  (m.value = (function (e) {
                                    return new Ne((t) => {
                                      const r = setTimeout(() => {
                                        clearTimeout(r), t()
                                      }, e)
                                    })
                                  })(u.value)),
                                  yield m.value,
                                  (m.value = null),
                                  _(),
                                  (p.value = null)
                              } catch (e) {}
                            })
                          })()
                    },
                    { deep: !0 },
                  ),
                  (t, r) =>
                    !t.lazyRender || i.value
                      ? (e.openBlock(),
                        e.createElementBlock(
                          'view',
                          {
                            key: 0,
                            class: e.normalizeClass(h.value),
                            style: e.normalizeStyle(v.value),
                            onTransitionend: _,
                            onClick: y,
                          },
                          [e.renderSlot(t.$slots, 'default', {}, void 0, !0)],
                          38,
                        ))
                      : e.createCommentVNode('', !0)
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-1fc69211']],
      ),
      er = __spreadProps(__spreadValues({}, vt), {
        show: dt(!1),
        duration: { type: [Object, Number, Boolean], default: 300 },
        lockScroll: dt(!0),
        zIndex: pt(10),
      }),
      tr = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-overlay',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: er,
              emits: ['click'],
              setup(t, { emit: r }) {
                const o = r
                function n() {
                  o('click')
                }
                function a() {}
                return (t, r) => (
                  e.openBlock(),
                  e.createBlock(
                    Zt,
                    {
                      show: t.show,
                      name: 'fade',
                      'custom-class': 'wd-overlay',
                      duration: t.duration,
                      'custom-style': `z-index: ${t.zIndex}; ${t.customStyle}`,
                      onClick: n,
                      onTouchmove:
                        r[0] ||
                        (r[0] = e.withModifiers(
                          (e) => (t.lockScroll ? a : ''),
                          ['stop', 'prevent'],
                        )),
                    },
                    {
                      default: e.withCtx(() => [e.renderSlot(t.$slots, 'default', {}, void 0, !0)]),
                      _: 3,
                    },
                    8,
                    ['show', 'duration', 'custom-style'],
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-3d3ab6e7']],
      ),
      rr = __spreadProps(__spreadValues({}, vt), {
        selector: mt(''),
        msg: { type: String, default: '' },
        direction: mt('horizontal'),
        iconName: { type: String, default: '' },
        iconSize: Number,
        loadingType: mt('outline'),
        loadingColor: { type: String, default: '#4D80F0' },
        loadingSize: Number,
        iconColor: String,
        position: mt('middle-top'),
        zIndex: { type: Number, default: 100 },
        cover: { type: Boolean, default: !1 },
        iconClass: { type: String, default: '' },
        classPrefix: { type: String, default: 'wd-icon' },
        opened: Function,
        closed: Function,
      }),
      or = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-toast',
                options: { addGlobalClass: !0, virtualHost: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: rr,
              setup(t) {
                const r = t,
                  o = e.ref(''),
                  n = e.ref(''),
                  a = e.ref('middle'),
                  i = e.ref(!1),
                  s = e.ref(100),
                  l = e.ref('outline'),
                  c = e.ref('#4D80F0'),
                  u = e.ref(),
                  d = e.ref(),
                  p = e.ref(''),
                  f = e.ref(!1),
                  m = e.ref('wd-icon'),
                  v = e.ref(''),
                  h = e.ref('horizontal')
                let y = null,
                  g = null
                const _ = Ze(r.selector),
                  w = e.inject(_, e.ref(Ye))
                e.watch(
                  () => w.value,
                  (e) => {
                    var t
                    ;(t = e),
                      (i.value = !!Ae(t.show) && t.show),
                      i.value &&
                        (function (e, t) {
                          ;(o.value = Ae(e.iconName) ? e.iconName : t.iconName),
                            (v.value = Ae(e.iconClass) ? e.iconClass : t.iconClass),
                            (n.value = Ae(e.msg) ? e.msg : t.msg),
                            (a.value = Ae(e.position) ? e.position : t.position),
                            (s.value = Ae(e.zIndex) ? e.zIndex : t.zIndex),
                            (l.value = Ae(e.loadingType) ? e.loadingType : t.loadingType),
                            (c.value = Ae(e.loadingColor) ? e.loadingColor : t.loadingColor),
                            (u.value = Ae(e.iconSize)
                              ? Pe(e.iconSize)
                              : Ae(t.iconSize)
                                ? Pe(t.iconSize)
                                : void 0),
                            (d.value = Ae(e.loadingSize)
                              ? Pe(e.loadingSize)
                              : Ae(t.loadingSize)
                                ? Pe(t.loadingSize)
                                : void 0),
                            (f.value = Ae(e.cover) ? e.cover : t.cover),
                            (m.value = Ae(e.classPrefix) ? e.classPrefix : t.classPrefix),
                            (h.value = Ae(e.direction) ? e.direction : t.direction),
                            (g = De(e.closed) ? e.closed : De(t.closed) ? t.closed : null),
                            (y = De(e.opened) ? e.opened : De(t.opened) ? t.opened : null)
                        })(t, r)
                  },
                  { deep: !0, immediate: !0 },
                ),
                  e.watch(
                    () => o.value,
                    () => {
                      S()
                    },
                    { deep: !0, immediate: !0 },
                  )
                const b = e.computed(() =>
                    Fe({
                      'z-index': s.value,
                      position: 'fixed',
                      top: '50%',
                      left: 0,
                      width: '100%',
                      transform: 'translate(0, -50%)',
                      'text-align': 'center',
                      'pointer-events': 'none',
                    }),
                  ),
                  k = e.computed(
                    () =>
                      `wd-toast ${r.customClass} wd-toast--${a.value} ${('loading' === o.value && !n.value) || (!o.value && !v.value) ? '' : 'wd-toast--with-icon'} ${'loading' !== o.value || n.value ? '' : 'wd-toast--loading'} ${'vertical' === h.value ? 'is-vertical' : ''}`,
                  ),
                  x = e.computed(() => {
                    const e = { backgroundImage: `url(${p.value})` }
                    return Ae(u.value) && ((e.width = u.value), (e.height = u.value)), Fe(e)
                  })
                function C() {
                  De(y) && y()
                }
                function V() {
                  De(g) && g()
                }
                function S() {
                  if (
                    'success' !== o.value &&
                    'warning' !== o.value &&
                    'info' !== o.value &&
                    'error' !== o.value
                  )
                    return
                  const e = `"data:image/svg+xml;base64,${Kt(et[o.value]())}"`
                  p.value = e
                }
                return (
                  e.onBeforeMount(() => {
                    S()
                  }),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock(
                      e.Fragment,
                      null,
                      [
                        f.value
                          ? (e.openBlock(),
                            e.createBlock(
                              tr,
                              {
                                key: 0,
                                'z-index': s.value,
                                'lock-scroll': '',
                                show: i.value,
                                'custom-style':
                                  'background-color: transparent;pointer-events: auto;',
                              },
                              null,
                              8,
                              ['z-index', 'show'],
                            ))
                          : e.createCommentVNode('', !0),
                        e.createVNode(
                          Zt,
                          {
                            name: 'fade',
                            show: i.value,
                            'custom-style': b.value,
                            onAfterEnter: C,
                            onAfterLeave: V,
                          },
                          {
                            default: e.withCtx(() => [
                              e.createElementVNode(
                                'view',
                                { class: e.normalizeClass(k.value) },
                                [
                                  'loading' === o.value
                                    ? (e.openBlock(),
                                      e.createBlock(
                                        Xt,
                                        {
                                          key: 0,
                                          type: l.value,
                                          color: c.value,
                                          size: d.value,
                                          'custom-class':
                                            'wd-toast__icon ' +
                                            ('vertical' === h.value ? 'is-vertical' : ''),
                                        },
                                        null,
                                        8,
                                        ['type', 'color', 'size', 'custom-class'],
                                      ))
                                    : 'success' === o.value ||
                                        'warning' === o.value ||
                                        'info' === o.value ||
                                        'error' === o.value
                                      ? (e.openBlock(),
                                        e.createElementBlock(
                                          'view',
                                          {
                                            key: 1,
                                            class: e.normalizeClass(
                                              'wd-toast__iconWrap wd-toast__icon ' +
                                                ('vertical' === h.value ? 'is-vertical' : ''),
                                            ),
                                          },
                                          [
                                            e.createElementVNode(
                                              'view',
                                              { class: 'wd-toast__iconBox' },
                                              [
                                                e.createElementVNode(
                                                  'view',
                                                  {
                                                    class: 'wd-toast__iconSvg',
                                                    style: e.normalizeStyle(x.value),
                                                  },
                                                  null,
                                                  4,
                                                ),
                                              ],
                                            ),
                                          ],
                                          2,
                                        ))
                                      : v.value
                                        ? (e.openBlock(),
                                          e.createBlock(
                                            yt,
                                            {
                                              key: 2,
                                              'custom-class':
                                                'wd-toast__icon ' +
                                                ('vertical' === h.value ? 'is-vertical' : ''),
                                              size: u.value,
                                              'class-prefix': m.value,
                                              name: v.value,
                                            },
                                            null,
                                            8,
                                            ['custom-class', 'size', 'class-prefix', 'name'],
                                          ))
                                        : e.createCommentVNode('', !0),
                                  n.value
                                    ? (e.openBlock(),
                                      e.createElementBlock(
                                        'view',
                                        { key: 3, class: 'wd-toast__msg' },
                                        e.toDisplayString(n.value),
                                        1,
                                      ))
                                    : e.createCommentVNode('', !0),
                                ],
                                2,
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ['show', 'custom-style'],
                        ),
                      ],
                      64,
                    )
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-d24ac773']],
      ),
      nr = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-form',
                options: { addGlobalClass: !0, virtualHost: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: $t,
              setup(t, { expose: r }) {
                const { show: o } = Je('wd-form-toast'),
                  n = t,
                  { children: a, linkChildren: i } = qt(At)
                let s = e.reactive({})
                function l(e) {
                  e
                    ? (s[e] = '')
                    : Object.keys(s).forEach((e) => {
                        s[e] = ''
                      })
                }
                return (
                  i({ props: n, errorMessages: s }),
                  e.watch(
                    () => n.model,
                    () => {
                      n.resetOnChange && l()
                    },
                    { immediate: !0, deep: !0 },
                  ),
                  r({
                    validate: function (e) {
                      return __async(this, null, function* () {
                        const t = []
                        let r = !0
                        const i = [],
                          c = (function () {
                            const e = qe(n.rules),
                              t = a.map((e) => e.prop)
                            return (
                              Object.keys(e).forEach((r) => {
                                t.includes(r) || delete e[r]
                              }),
                              a.forEach((t) => {
                                Ae(t.prop) &&
                                  Ae(t.rules) &&
                                  t.rules.length &&
                                  (e[t.prop]
                                    ? (e[t.prop] = [...e[t.prop], ...t.rules])
                                    : (e[t.prop] = t.rules))
                              }),
                              e
                            )
                          })(),
                          u = Me(e) ? e : Ae(e) ? [e] : [],
                          d = u.length > 0 ? u.reduce((e, t) => (c[t] && (e[t] = c[t]), e), {}) : c
                        for (const e in d) {
                          const o = d[e],
                            a = Ue(n.model, e)
                          if (o && o.length > 0)
                            for (const n of o) {
                              if (n.required && (!Ae(a) || '' === a)) {
                                t.push({ prop: e, message: n.message }), (r = !1)
                                break
                              }
                              if (n.pattern && !n.pattern.test(a)) {
                                t.push({ prop: e, message: n.message }), (r = !1)
                                break
                              }
                              const o = n,
                                { validator: s } = o,
                                l = __objRest(o, ['validator'])
                              if (s) {
                                const o = s(a, l)
                                Ge(o)
                                  ? i.push(
                                      o
                                        .then((o) => {
                                          'string' == typeof o
                                            ? (t.push({ prop: e, message: o }), (r = !1))
                                            : 'boolean' != typeof o ||
                                              o ||
                                              (t.push({ prop: e, message: n.message }), (r = !1))
                                        })
                                        .catch((o) => {
                                          const a = Ae(o)
                                            ? je(o)
                                              ? o
                                              : o.message || n.message
                                            : n.message
                                          t.push({ prop: e, message: a }), (r = !1)
                                        }),
                                    )
                                  : o || (t.push({ prop: e, message: n.message }), (r = !1))
                              }
                            }
                        }
                        return (
                          yield Promise.all(i),
                          (function (e) {
                            const t = a.map((e) => e.prop).filter(Boolean),
                              r = e.filter((e) => e.message && t.includes(e.prop))
                            r.length &&
                              (r.sort((e, r) => t.indexOf(e.prop) - t.indexOf(r.prop)),
                              'toast' === n.errorType
                                ? o(r[0].message)
                                : 'message' === n.errorType &&
                                  r.forEach((e) => {
                                    s[e.prop] = e.message
                                  }))
                          })(t),
                          r && (u.length ? u.forEach(l) : l()),
                          { valid: r, errors: t }
                        )
                      })
                    },
                    reset: function () {
                      l()
                    },
                  }),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock(
                      'view',
                      {
                        class: e.normalizeClass(`wd-form ${t.customClass}`),
                        style: e.normalizeStyle(t.customStyle),
                      },
                      [
                        e.renderSlot(t.$slots, 'default', {}, void 0, !0),
                        'toast' === n.errorType
                          ? (e.openBlock(),
                            e.createBlock(or, { key: 0, selector: 'wd-form-toast' }))
                          : e.createCommentVNode('', !0),
                      ],
                      6,
                    )
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-e513a788']],
      ),
      ar = __spreadProps(__spreadValues({}, vt), {
        plain: dt(!1),
        round: dt(!0),
        disabled: dt(!1),
        hairline: dt(!1),
        block: dt(!1),
        type: mt('primary'),
        size: mt('medium'),
        icon: String,
        classPrefix: mt('wd-icon'),
        loading: dt(!1),
        loadingColor: String,
        openType: String,
        hoverStopPropagation: Boolean,
        lang: String,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        appParameter: String,
        showMessageCard: Boolean,
        buttonId: String,
        scope: String,
      }),
      ir = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-button',
                options: { addGlobalClass: !0, virtualHost: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: ar,
              emits: [
                'click',
                'getuserinfo',
                'contact',
                'getphonenumber',
                'error',
                'launchapp',
                'opensetting',
                'chooseavatar',
                'agreeprivacyauthorization',
              ],
              setup(t, { emit: r }) {
                const o = t,
                  n = r,
                  a = e.ref(20),
                  i = e.ref(70),
                  s = e.ref(''),
                  l = e.computed(() => `background-image: url(${s.value});`)
                function c(e) {
                  o.disabled || o.loading || n('click', e)
                }
                function u(e) {
                  'phoneNumber' === o.scope ? f(e) : 'userInfo' === o.scope && d(e)
                }
                function d(e) {
                  n('getuserinfo', e.detail)
                }
                function p(e) {
                  n('contact', e.detail)
                }
                function f(e) {
                  n('getphonenumber', e.detail)
                }
                function m(e) {
                  n('error', e.detail)
                }
                function v(e) {
                  n('launchapp', e.detail)
                }
                function h(e) {
                  n('opensetting', e.detail)
                }
                function y(e) {
                  n('chooseavatar', e.detail)
                }
                function g(e) {
                  n('agreeprivacyauthorization', e.detail)
                }
                return (
                  e.watch(
                    () => o.loading,
                    () => {
                      !(function () {
                        const { loadingColor: e, type: t, plain: r } = o
                        let n = e
                        if (!n)
                          switch (t) {
                            case 'primary':
                              n = '#4D80F0'
                              break
                            case 'success':
                              n = '#34d19d'
                              break
                            case 'info':
                            case 'default':
                              n = '#333'
                              break
                            case 'warning':
                              n = '#f0883a'
                              break
                            case 'error':
                              n = '#fa4350'
                          }
                        const a = ((e = '#4D80F0', t = !0) =>
                          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="a"><stop stop-color="${t ? e : '#fff'}" offset="0%" stop-opacity="0"/><stop stop-color="${t ? e : '#fff'}" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${t ? '#fff' : e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#a)" stroke-width="3.5" stroke-linecap="round"/></g></svg>`)(
                          n,
                          !r,
                        )
                        s.value = `"data:image/svg+xml;base64,${Kt(a)}"`
                      })()
                    },
                    { deep: !0, immediate: !0 },
                  ),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock(
                      'button',
                      {
                        id: t.buttonId,
                        'hover-class': '' + (t.disabled || t.loading ? '' : 'wd-button--active'),
                        style: e.normalizeStyle(t.customStyle),
                        class: e.normalizeClass([
                          'wd-button',
                          'is-' + t.type,
                          'is-' + t.size,
                          t.round ? 'is-round' : '',
                          t.hairline ? 'is-hairline' : '',
                          t.plain ? 'is-plain' : '',
                          t.disabled ? 'is-disabled' : '',
                          t.block ? 'is-block' : '',
                          t.loading ? 'is-loading' : '',
                          t.customClass,
                        ]),
                        'hover-start-time': a.value,
                        'hover-stay-time': i.value,
                        'open-type': t.disabled || t.loading ? void 0 : t.openType,
                        'send-message-title': t.sendMessageTitle,
                        'send-message-path': t.sendMessagePath,
                        'send-message-img': t.sendMessageImg,
                        'app-parameter': t.appParameter,
                        'show-message-card': t.showMessageCard,
                        'session-from': t.sessionFrom,
                        lang: t.lang,
                        'hover-stop-propagation': t.hoverStopPropagation,
                        scope: t.scope,
                        onClick: c,
                        'on:getAuthorize': u,
                        onGetuserinfo: d,
                        onContact: p,
                        onGetphonenumber: f,
                        onError: m,
                        onLaunchapp: v,
                        onOpensetting: h,
                        onChooseavatar: y,
                        onAgreeprivacyauthorization: g,
                      },
                      [
                        e.createElementVNode('view', { class: 'wd-button__content' }, [
                          t.loading
                            ? (e.openBlock(),
                              e.createElementBlock(
                                'view',
                                { key: 0, class: 'wd-button__loading' },
                                [
                                  e.createElementVNode(
                                    'view',
                                    {
                                      class: 'wd-button__loading-svg',
                                      style: e.normalizeStyle(l.value),
                                    },
                                    null,
                                    4,
                                  ),
                                ],
                              ))
                            : t.icon
                              ? (e.openBlock(),
                                e.createBlock(
                                  yt,
                                  {
                                    key: 1,
                                    'custom-class': 'wd-button__icon',
                                    name: t.icon,
                                    classPrefix: t.classPrefix,
                                  },
                                  null,
                                  8,
                                  ['name', 'classPrefix'],
                                ))
                              : e.createCommentVNode('', !0),
                          e.createElementVNode('view', { class: 'wd-button__text' }, [
                            e.renderSlot(t.$slots, 'default', {}, void 0, !0),
                          ]),
                        ]),
                      ],
                      46,
                      [
                        'id',
                        'hover-class',
                        'hover-start-time',
                        'hover-stay-time',
                        'open-type',
                        'send-message-title',
                        'send-message-path',
                        'send-message-img',
                        'app-parameter',
                        'show-message-card',
                        'session-from',
                        'lang',
                        'hover-stop-propagation',
                        'scope',
                      ],
                    )
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-7f9ef195']],
      ),
      sr = ve(
        e.defineComponent({
          __name: 'index',
          setup(t) {
            const r = e.ref(),
              o = me(),
              { userInfo: n } = ce(o),
              a = e.ref({ id: n.value.id, name: n.value.name, sex: n.value.sex }),
              i = () =>
                __async(null, null, function* () {
                  if (!(yield r.value.validate())) return
                  const { message: e } = yield ((t = a.value), K.post('/user/updateInfo', t))
                  var t
                  yield me().getUserInfo(), de(e)
                })
            return (t, o) => {
              const n = R(e.resolveDynamicComponent('wd-input'), Mt),
                s = R(e.resolveDynamicComponent('wd-radio'), zt),
                l = R(e.resolveDynamicComponent('wd-radio-group'), Qt),
                c = R(e.resolveDynamicComponent('wd-cell-group'), Lt),
                u = R(e.resolveDynamicComponent('wd-form'), nr),
                d = R(e.resolveDynamicComponent('wd-button'), ir),
                p = e.resolveComponent('layout-default-uni')
              return (
                e.openBlock(),
                e.createBlock(p, null, {
                  default: e.withCtx(() => [
                    e.createElementVNode('view', { class: 'profile-info-container' }, [
                      e.createElementVNode('view', { class: 'profile-card' }, [
                        e.createElementVNode('view', { class: 'form-wrapper' }, [
                          e.createVNode(
                            u,
                            {
                              ref_key: 'formRef',
                              ref: r,
                              model: a.value,
                              'label-width': '160rpx',
                              class: 'profile-form',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  c,
                                  { class: 'form-group' },
                                  {
                                    default: e.withCtx(() => [
                                      e.createElementVNode('view', { class: 'sex-field' }, [
                                        e.createElementVNode(
                                          'text',
                                          { class: 'field-label' },
                                          '昵称',
                                        ),
                                        e.createVNode(
                                          n,
                                          {
                                            prop: 'name',
                                            clearable: '',
                                            modelValue: a.value.name,
                                            'onUpdate:modelValue':
                                              o[0] || (o[0] = (e) => (a.value.name = e)),
                                            placeholder: '请输入昵称',
                                            rules: [{ required: !0, message: '请填写昵称' }],
                                            class: 'form-input',
                                          },
                                          null,
                                          8,
                                          ['modelValue'],
                                        ),
                                      ]),
                                      e.createElementVNode('view', { class: 'sex-field' }, [
                                        e.createElementVNode(
                                          'text',
                                          { class: 'field-label' },
                                          '性别',
                                        ),
                                        e.createVNode(
                                          l,
                                          {
                                            modelValue: a.value.sex,
                                            'onUpdate:modelValue':
                                              o[1] || (o[1] = (e) => (a.value.sex = e)),
                                            shape: 'button',
                                            rules: [{ required: !0, message: '请选择性别' }],
                                          },
                                          {
                                            default: e.withCtx(() => [
                                              e.createVNode(
                                                s,
                                                { value: '1' },
                                                {
                                                  default: e.withCtx(() => [
                                                    e.createTextVNode('男'),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                              e.createVNode(
                                                s,
                                                { value: '0' },
                                                {
                                                  default: e.withCtx(() => [
                                                    e.createTextVNode('女'),
                                                  ]),
                                                  _: 1,
                                                },
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ['modelValue'],
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['model'],
                          ),
                          e.createElementVNode('view', { class: 'form-actions' }, [
                            e.createVNode(
                              d,
                              { type: 'primary', size: 'large', onClick: i },
                              { default: e.withCtx(() => [e.createTextVNode('保存修改')]), _: 1 },
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  _: 1,
                })
              )
            }
          },
        }),
        [['__scopeId', 'data-v-c326f868']],
      ),
      lr = ve(
        e.defineComponent({
          __name: 'index',
          setup(t) {
            const r = e.ref(),
              o = me(),
              { userInfo: n } = ce(o),
              a = e.ref({ id: n.value.id, oldPassword: '', newPassword: '', confirmPassword: '' }),
              i = () =>
                __async(null, null, function* () {
                  if (!(yield r.value.validate())) return
                  const { message: e } = yield ((t = a.value), K.post('/user/updatePassword', t))
                  var t
                  yield me().logout(), de('修改成功，请重新登录')
                })
            return (t, o) => {
              const n = R(e.resolveDynamicComponent('wd-input'), Mt),
                s = R(e.resolveDynamicComponent('wd-cell-group'), Lt),
                l = R(e.resolveDynamicComponent('wd-form'), nr),
                c = R(e.resolveDynamicComponent('wd-button'), ir),
                u = e.resolveComponent('layout-default-uni')
              return (
                e.openBlock(),
                e.createBlock(u, null, {
                  default: e.withCtx(() => [
                    e.createElementVNode('view', { class: 'profile-info-container' }, [
                      e.createElementVNode('view', { class: 'profile-card' }, [
                        e.createElementVNode('view', { class: 'form-wrapper' }, [
                          e.createVNode(
                            l,
                            {
                              ref_key: 'formRef',
                              ref: r,
                              model: a.value,
                              'label-width': '160rpx',
                              class: 'profile-form',
                            },
                            {
                              default: e.withCtx(() => [
                                e.createVNode(
                                  s,
                                  { class: 'form-group' },
                                  {
                                    default: e.withCtx(() => [
                                      e.createElementVNode('view', { class: 'sex-field' }, [
                                        e.createElementVNode(
                                          'text',
                                          { class: 'field-label' },
                                          '旧密码',
                                        ),
                                        e.createVNode(
                                          n,
                                          {
                                            prop: 'oldPassword',
                                            clearable: '',
                                            modelValue: a.value.oldPassword,
                                            'onUpdate:modelValue':
                                              o[0] || (o[0] = (e) => (a.value.oldPassword = e)),
                                            placeholder: '请输入旧密码',
                                            'show-password': '',
                                            rules: [{ required: !0, message: '请填写旧密码' }],
                                            class: 'form-input',
                                          },
                                          null,
                                          8,
                                          ['modelValue'],
                                        ),
                                      ]),
                                      e.createElementVNode('view', { class: 'sex-field' }, [
                                        e.createElementVNode(
                                          'text',
                                          { class: 'field-label' },
                                          '新密码',
                                        ),
                                        e.createVNode(
                                          n,
                                          {
                                            prop: 'newPassword',
                                            clearable: '',
                                            modelValue: a.value.newPassword,
                                            'onUpdate:modelValue':
                                              o[1] || (o[1] = (e) => (a.value.newPassword = e)),
                                            placeholder: '请输入新密码',
                                            'show-password': '',
                                            rules: [{ required: !0, message: '请填写新密码' }],
                                            class: 'form-input',
                                          },
                                          null,
                                          8,
                                          ['modelValue'],
                                        ),
                                      ]),
                                      e.createElementVNode('view', { class: 'sex-field' }, [
                                        e.createElementVNode(
                                          'text',
                                          { class: 'field-label' },
                                          '确认密码',
                                        ),
                                        e.createVNode(
                                          n,
                                          {
                                            prop: 'confirmPassword',
                                            clearable: '',
                                            modelValue: a.value.confirmPassword,
                                            'onUpdate:modelValue':
                                              o[2] || (o[2] = (e) => (a.value.confirmPassword = e)),
                                            placeholder: '请输入新密码',
                                            'show-password': '',
                                            rules: [{ required: !0, message: '请填写新密码' }],
                                            class: 'form-input',
                                          },
                                          null,
                                          8,
                                          ['modelValue'],
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ['model'],
                          ),
                          e.createElementVNode('view', { class: 'form-actions' }, [
                            e.createVNode(
                              c,
                              { type: 'primary', size: 'large', onClick: i },
                              { default: e.withCtx(() => [e.createTextVNode('保存修改')]), _: 1 },
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  _: 1,
                })
              )
            }
          },
        }),
        [['__scopeId', 'data-v-c027e74b']],
      )
    __definePage('pages/index/index', H),
      __definePage('pages/login/index', ke),
      __definePage('pages/mine/index', lt),
      __definePage('pages/sleep/index', bt),
      __definePage('pages/welcome/index', kt),
      __definePage('pages/login/account/index', xt),
      __definePage('pages/login/verification/index', Ct),
      __definePage('pages/mine/about/index', Nt),
      __definePage('pages/mine/info/index', sr),
      __definePage('pages/mine/password/index', lr)
    var cr = class {
        constructor() {
          ;(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this))
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe()
            }
          )
        }
        hasListeners() {
          return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
      },
      ur = 'undefined' == typeof window || 'Deno' in globalThis
    function dr() {}
    function pr(e, t) {
      return 'function' == typeof e ? e(t) : e
    }
    function fr(e, t) {
      const { type: r = 'all', exact: o, fetchStatus: n, predicate: a, queryKey: i, stale: s } = e
      if (i)
        if (o) {
          if (t.queryHash !== vr(i, t.options)) return !1
        } else if (!yr(t.queryKey, i)) return !1
      if ('all' !== r) {
        const e = t.isActive()
        if ('active' === r && !e) return !1
        if ('inactive' === r && e) return !1
      }
      return (
        ('boolean' != typeof s || t.isStale() === s) &&
        (!n || n === t.state.fetchStatus) &&
        !(a && !a(t))
      )
    }
    function mr(e, t) {
      const { exact: r, status: o, predicate: n, mutationKey: a } = e
      if (a) {
        if (!t.options.mutationKey) return !1
        if (r) {
          if (hr(t.options.mutationKey) !== hr(a)) return !1
        } else if (!yr(t.options.mutationKey, a)) return !1
      }
      return (!o || t.state.status === o) && !(n && !n(t))
    }
    function vr(e, t) {
      return ((null == t ? void 0 : t.queryKeyHashFn) || hr)(e)
    }
    function hr(e) {
      return JSON.stringify(e, (e, t) =>
        wr(t)
          ? Object.keys(t)
              .sort()
              .reduce((e, r) => ((e[r] = t[r]), e), {})
          : t,
      )
    }
    function yr(e, t) {
      return (
        e === t ||
        (typeof e == typeof t &&
          !(!e || !t || 'object' != typeof e || 'object' != typeof t) &&
          !Object.keys(t).some((r) => !yr(e[r], t[r])))
      )
    }
    function gr(e, t) {
      if (e === t) return e
      const r = _r(e) && _r(t)
      if (r || (wr(e) && wr(t))) {
        const o = r ? e : Object.keys(e),
          n = o.length,
          a = r ? t : Object.keys(t),
          i = a.length,
          s = r ? [] : {}
        let l = 0
        for (let c = 0; c < i; c++) {
          const n = r ? c : a[c]
          ;((!r && o.includes(n)) || r) && void 0 === e[n] && void 0 === t[n]
            ? ((s[n] = void 0), l++)
            : ((s[n] = gr(e[n], t[n])), s[n] === e[n] && void 0 !== e[n] && l++)
        }
        return n === i && l === n ? e : s
      }
      return t
    }
    function _r(e) {
      return Array.isArray(e) && e.length === Object.keys(e).length
    }
    function wr(e) {
      if (!br(e)) return !1
      const t = e.constructor
      if (void 0 === t) return !0
      const r = t.prototype
      return (
        !!br(r) &&
        !!r.hasOwnProperty('isPrototypeOf') &&
        Object.getPrototypeOf(e) === Object.prototype
      )
    }
    function br(e) {
      return '[object Object]' === Object.prototype.toString.call(e)
    }
    function kr(e, t, r) {
      return 'function' == typeof r.structuralSharing
        ? r.structuralSharing(e, t)
        : !1 !== r.structuralSharing
          ? gr(e, t)
          : t
    }
    function xr(e, t, r = 0) {
      const o = [...e, t]
      return r && o.length > r ? o.slice(1) : o
    }
    function Cr(e, t, r = 0) {
      const o = [t, ...e]
      return r && o.length > r ? o.slice(0, -1) : o
    }
    var Vr = Symbol()
    function Sr(e, t) {
      return !e.queryFn && (null == t ? void 0 : t.initialPromise)
        ? () => t.initialPromise
        : e.queryFn && e.queryFn !== Vr
          ? e.queryFn
          : () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    }
    var Er = new ((n = class extends cr {
        constructor() {
          super(),
            __privateAdd(this, t),
            __privateAdd(this, r),
            __privateAdd(this, o),
            __privateSet(this, o, (e) => {
              if (!ur && window.addEventListener) {
                const t = () => e()
                return (
                  window.addEventListener('visibilitychange', t, !1),
                  () => {
                    window.removeEventListener('visibilitychange', t)
                  }
                )
              }
            })
        }
        onSubscribe() {
          __privateGet(this, r) || this.setEventListener(__privateGet(this, o))
        }
        onUnsubscribe() {
          var e
          this.hasListeners() ||
            (null == (e = __privateGet(this, r)) || e.call(this), __privateSet(this, r, void 0))
        }
        setEventListener(e) {
          var t
          __privateSet(this, o, e),
            null == (t = __privateGet(this, r)) || t.call(this),
            __privateSet(
              this,
              r,
              e((e) => {
                'boolean' == typeof e ? this.setFocused(e) : this.onFocus()
              }),
            )
        }
        setFocused(e) {
          __privateGet(this, t) !== e && (__privateSet(this, t, e), this.onFocus())
        }
        onFocus() {
          const e = this.isFocused()
          this.listeners.forEach((t) => {
            t(e)
          })
        }
        isFocused() {
          var e
          return 'boolean' == typeof __privateGet(this, t)
            ? __privateGet(this, t)
            : 'hidden' !== (null == (e = globalThis.document) ? void 0 : e.visibilityState)
        }
      }),
      (t = new WeakMap()),
      (r = new WeakMap()),
      (o = new WeakMap()),
      n)(),
      Nr = new ((l = class extends cr {
        constructor() {
          super(),
            __privateAdd(this, a, !0),
            __privateAdd(this, i),
            __privateAdd(this, s),
            __privateSet(this, s, (e) => {
              if (!ur && window.addEventListener) {
                const t = () => e(!0),
                  r = () => e(!1)
                return (
                  window.addEventListener('online', t, !1),
                  window.addEventListener('offline', r, !1),
                  () => {
                    window.removeEventListener('online', t),
                      window.removeEventListener('offline', r)
                  }
                )
              }
            })
        }
        onSubscribe() {
          __privateGet(this, i) || this.setEventListener(__privateGet(this, s))
        }
        onUnsubscribe() {
          var e
          this.hasListeners() ||
            (null == (e = __privateGet(this, i)) || e.call(this), __privateSet(this, i, void 0))
        }
        setEventListener(e) {
          var t
          __privateSet(this, s, e),
            null == (t = __privateGet(this, i)) || t.call(this),
            __privateSet(this, i, e(this.setOnline.bind(this)))
        }
        setOnline(e) {
          __privateGet(this, a) !== e &&
            (__privateSet(this, a, e),
            this.listeners.forEach((t) => {
              t(e)
            }))
        }
        isOnline() {
          return __privateGet(this, a)
        }
      }),
      (a = new WeakMap()),
      (i = new WeakMap()),
      (s = new WeakMap()),
      l)()
    function Pr(e) {
      return Math.min(1e3 * __pow(2, e), 3e4)
    }
    function Br(e) {
      return 'online' !== (null != e ? e : 'online') || Nr.isOnline()
    }
    var Or = class extends Error {
      constructor(e) {
        super('CancelledError'),
          (this.revert = null == e ? void 0 : e.revert),
          (this.silent = null == e ? void 0 : e.silent)
      }
    }
    function Ar(e) {
      return e instanceof Or
    }
    function $r(e) {
      let t,
        r = !1,
        o = 0,
        n = !1
      const a = (function () {
          let e, t
          const r = new Promise((r, o) => {
            ;(e = r), (t = o)
          })
          function o(e) {
            Object.assign(r, e), delete r.resolve, delete r.reject
          }
          return (
            (r.status = 'pending'),
            r.catch(() => {}),
            (r.resolve = (t) => {
              o({ status: 'fulfilled', value: t }), e(t)
            }),
            (r.reject = (e) => {
              o({ status: 'rejected', reason: e }), t(e)
            }),
            r
          )
        })(),
        i = () => Er.isFocused() && ('always' === e.networkMode || Nr.isOnline()) && e.canRun(),
        s = () => Br(e.networkMode) && e.canRun(),
        l = (r) => {
          var o
          n || ((n = !0), null == (o = e.onSuccess) || o.call(e, r), null == t || t(), a.resolve(r))
        },
        c = (r) => {
          var o
          n || ((n = !0), null == (o = e.onError) || o.call(e, r), null == t || t(), a.reject(r))
        },
        u = () =>
          new Promise((r) => {
            var o
            ;(t = (e) => {
              ;(n || i()) && r(e)
            }),
              null == (o = e.onPause) || o.call(e)
          }).then(() => {
            var r
            ;(t = void 0), n || null == (r = e.onContinue) || r.call(e)
          }),
        d = () => {
          if (n) return
          let t
          const a = 0 === o ? e.initialPromise : void 0
          try {
            t = null != a ? a : e.fn()
          } catch (s) {
            t = Promise.reject(s)
          }
          Promise.resolve(t)
            .then(l)
            .catch((t) => {
              var a, s, l
              if (n) return
              const p = null != (a = e.retry) ? a : ur ? 0 : 3,
                f = null != (s = e.retryDelay) ? s : Pr,
                m = 'function' == typeof f ? f(o, t) : f,
                v =
                  !0 === p || ('number' == typeof p && o < p) || ('function' == typeof p && p(o, t))
              var h
              !r && v
                ? (o++,
                  null == (l = e.onFail) || l.call(e, o, t),
                  ((h = m),
                  new Promise((e) => {
                    setTimeout(e, h)
                  }))
                    .then(() => (i() ? void 0 : u()))
                    .then(() => {
                      r ? c(t) : d()
                    }))
                : c(t)
            })
        }
      return {
        promise: a,
        cancel: (t) => {
          var r
          n || (c(new Or(t)), null == (r = e.abort) || r.call(e))
        },
        continue: () => (null == t || t(), a),
        cancelRetry: () => {
          r = !0
        },
        continueRetry: () => {
          r = !1
        },
        canStart: s,
        start: () => (s() ? d() : u().then(d), a),
      }
    }
    var Tr = (function () {
        let e = [],
          t = 0,
          r = (e) => {
            e()
          },
          o = (e) => {
            e()
          },
          n = (e) => setTimeout(e, 0)
        const a = (o) => {
          t
            ? e.push(o)
            : n(() => {
                r(o)
              })
        }
        return {
          batch: (a) => {
            let i
            t++
            try {
              i = a()
            } finally {
              t--,
                t ||
                  (() => {
                    const t = e
                    ;(e = []),
                      t.length &&
                        n(() => {
                          o(() => {
                            t.forEach((e) => {
                              r(e)
                            })
                          })
                        })
                  })()
            }
            return i
          },
          batchCalls:
            (e) =>
            (...t) => {
              a(() => {
                e(...t)
              })
            },
          schedule: a,
          setNotifyFunction: (e) => {
            r = e
          },
          setBatchNotifyFunction: (e) => {
            o = e
          },
          setScheduler: (e) => {
            n = e
          },
        }
      })(),
      Ir =
        ((u = class {
          constructor() {
            __privateAdd(this, c)
          }
          destroy() {
            this.clearGcTimeout()
          }
          scheduleGc() {
            var e
            this.clearGcTimeout(),
              'number' == typeof (e = this.gcTime) &&
                e >= 0 &&
                e !== 1 / 0 &&
                __privateSet(
                  this,
                  c,
                  setTimeout(() => {
                    this.optionalRemove()
                  }, this.gcTime),
                )
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, null != e ? e : ur ? 1 / 0 : 3e5)
          }
          clearGcTimeout() {
            __privateGet(this, c) &&
              (clearTimeout(__privateGet(this, c)), __privateSet(this, c, void 0))
          }
        }),
        (c = new WeakMap()),
        u),
      Mr =
        ((_ = class extends Ir {
          constructor(e) {
            var t
            super(),
              __privateAdd(this, y),
              __privateAdd(this, d),
              __privateAdd(this, p),
              __privateAdd(this, f),
              __privateAdd(this, m),
              __privateAdd(this, v),
              __privateAdd(this, h),
              __privateSet(this, h, !1),
              __privateSet(this, v, e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              __privateSet(this, f, e.cache),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              __privateSet(
                this,
                d,
                (function (e) {
                  const t = 'function' == typeof e.initialData ? e.initialData() : e.initialData,
                    r = void 0 !== t,
                    o = r
                      ? 'function' == typeof e.initialDataUpdatedAt
                        ? e.initialDataUpdatedAt()
                        : e.initialDataUpdatedAt
                      : 0
                  return {
                    data: t,
                    dataUpdateCount: 0,
                    dataUpdatedAt: r ? (null != o ? o : Date.now()) : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: r ? 'success' : 'pending',
                    fetchStatus: 'idle',
                  }
                })(this.options),
              ),
              (this.state = null != (t = e.state) ? t : __privateGet(this, d)),
              this.scheduleGc()
          }
          get meta() {
            return this.options.meta
          }
          get promise() {
            var e
            return null == (e = __privateGet(this, m)) ? void 0 : e.promise
          }
          setOptions(e) {
            ;(this.options = __spreadValues(__spreadValues({}, __privateGet(this, v)), e)),
              this.updateGcTime(this.options.gcTime)
          }
          optionalRemove() {
            this.observers.length ||
              'idle' !== this.state.fetchStatus ||
              __privateGet(this, f).remove(this)
          }
          setData(e, t) {
            const r = kr(this.state.data, e, this.options)
            return (
              __privateMethod(this, y, g).call(this, {
                data: r,
                type: 'success',
                dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                manual: null == t ? void 0 : t.manual,
              }),
              r
            )
          }
          setState(e, t) {
            __privateMethod(this, y, g).call(this, {
              type: 'setState',
              state: e,
              setStateOptions: t,
            })
          }
          cancel(e) {
            var t, r
            const o = null == (t = __privateGet(this, m)) ? void 0 : t.promise
            return (
              null == (r = __privateGet(this, m)) || r.cancel(e),
              o ? o.then(dr).catch(dr) : Promise.resolve()
            )
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 })
          }
          reset() {
            this.destroy(), this.setState(__privateGet(this, d))
          }
          isActive() {
            return this.observers.some((e) => {
              return !1 !== ((t = e.options.enabled), (r = this), 'function' == typeof t ? t(r) : t)
              var t, r
            })
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === Vr ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount === 0
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            )
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(function (e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
              })(this.state.dataUpdatedAt, e)
            )
          }
          onFocus() {
            var e
            const t = this.observers.find((e) => e.shouldFetchOnWindowFocus())
            null == t || t.refetch({ cancelRefetch: !1 }),
              null == (e = __privateGet(this, m)) || e.continue()
          }
          onOnline() {
            var e
            const t = this.observers.find((e) => e.shouldFetchOnReconnect())
            null == t || t.refetch({ cancelRefetch: !1 }),
              null == (e = __privateGet(this, m)) || e.continue()
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              __privateGet(this, f).notify({ type: 'observerAdded', query: this, observer: e }))
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (__privateGet(this, m) &&
                  (__privateGet(this, h)
                    ? __privateGet(this, m).cancel({ revert: !0 })
                    : __privateGet(this, m).cancelRetry()),
                this.scheduleGc()),
              __privateGet(this, f).notify({ type: 'observerRemoved', query: this, observer: e }))
          }
          getObserversCount() {
            return this.observers.length
          }
          invalidate() {
            this.state.isInvalidated ||
              __privateMethod(this, y, g).call(this, { type: 'invalidate' })
          }
          fetch(e, t) {
            var r, o, n
            if ('idle' !== this.state.fetchStatus)
              if (void 0 !== this.state.data && (null == t ? void 0 : t.cancelRefetch))
                this.cancel({ silent: !0 })
              else if (__privateGet(this, m))
                return __privateGet(this, m).continueRetry(), __privateGet(this, m).promise
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              const e = this.observers.find((e) => e.options.queryFn)
              e && this.setOptions(e.options)
            }
            const a = new AbortController(),
              i = (e) => {
                Object.defineProperty(e, 'signal', {
                  enumerable: !0,
                  get: () => (__privateSet(this, h, !0), a.signal),
                })
              },
              s = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  const e = Sr(this.options, t),
                    r = { queryKey: this.queryKey, meta: this.meta }
                  return (
                    i(r),
                    __privateSet(this, h, !1),
                    this.options.persister ? this.options.persister(e, r, this) : e(r)
                  )
                },
              }
            i(s),
              null == (r = this.options.behavior) || r.onFetch(s, this),
              __privateSet(this, p, this.state),
              ('idle' !== this.state.fetchStatus &&
                this.state.fetchMeta === (null == (o = s.fetchOptions) ? void 0 : o.meta)) ||
                __privateMethod(this, y, g).call(this, {
                  type: 'fetch',
                  meta: null == (n = s.fetchOptions) ? void 0 : n.meta,
                })
            const l = (e) => {
              var t, r, o, n
              ;(Ar(e) && e.silent) ||
                __privateMethod(this, y, g).call(this, { type: 'error', error: e }),
                Ar(e) ||
                  (null == (r = (t = __privateGet(this, f).config).onError) || r.call(t, e, this),
                  null == (n = (o = __privateGet(this, f).config).onSettled) ||
                    n.call(o, this.state.data, e, this)),
                this.scheduleGc()
            }
            return (
              __privateSet(
                this,
                m,
                $r({
                  initialPromise: null == t ? void 0 : t.initialPromise,
                  fn: s.fetchFn,
                  abort: a.abort.bind(a),
                  onSuccess: (e) => {
                    var t, r, o, n
                    if (void 0 !== e) {
                      try {
                        this.setData(e)
                      } catch (a) {
                        return void l(a)
                      }
                      null == (r = (t = __privateGet(this, f).config).onSuccess) ||
                        r.call(t, e, this),
                        null == (n = (o = __privateGet(this, f).config).onSettled) ||
                          n.call(o, e, this.state.error, this),
                        this.scheduleGc()
                    } else l(new Error(`${this.queryHash} data is undefined`))
                  },
                  onError: l,
                  onFail: (e, t) => {
                    __privateMethod(this, y, g).call(this, {
                      type: 'failed',
                      failureCount: e,
                      error: t,
                    })
                  },
                  onPause: () => {
                    __privateMethod(this, y, g).call(this, { type: 'pause' })
                  },
                  onContinue: () => {
                    __privateMethod(this, y, g).call(this, { type: 'continue' })
                  },
                  retry: s.options.retry,
                  retryDelay: s.options.retryDelay,
                  networkMode: s.options.networkMode,
                  canRun: () => !0,
                }),
              ),
              __privateGet(this, m).start()
            )
          }
        }),
        (d = new WeakMap()),
        (p = new WeakMap()),
        (f = new WeakMap()),
        (m = new WeakMap()),
        (v = new WeakMap()),
        (h = new WeakMap()),
        (y = new WeakSet()),
        (g = function (e) {
          ;(this.state = ((t) => {
            var r, o, n, a
            switch (e.type) {
              case 'failed':
                return __spreadProps(__spreadValues({}, t), {
                  fetchFailureCount: e.failureCount,
                  fetchFailureReason: e.error,
                })
              case 'pause':
                return __spreadProps(__spreadValues({}, t), { fetchStatus: 'paused' })
              case 'continue':
                return __spreadProps(__spreadValues({}, t), { fetchStatus: 'fetching' })
              case 'fetch':
                return __spreadProps(
                  __spreadValues(
                    __spreadValues({}, t),
                    ((n = t.data),
                    (a = this.options),
                    __spreadValues(
                      {
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchStatus: Br(a.networkMode) ? 'fetching' : 'paused',
                      },
                      void 0 === n && { error: null, status: 'pending' },
                    )),
                  ),
                  { fetchMeta: null != (r = e.meta) ? r : null },
                )
              case 'success':
                return __spreadValues(
                  __spreadProps(__spreadValues({}, t), {
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: null != (o = e.dataUpdatedAt) ? o : Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: 'success',
                  }),
                  !e.manual && {
                    fetchStatus: 'idle',
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  },
                )
              case 'error':
                const i = e.error
                return Ar(i) && i.revert && __privateGet(this, p)
                  ? __spreadProps(__spreadValues({}, __privateGet(this, p)), {
                      fetchStatus: 'idle',
                    })
                  : __spreadProps(__spreadValues({}, t), {
                      error: i,
                      errorUpdateCount: t.errorUpdateCount + 1,
                      errorUpdatedAt: Date.now(),
                      fetchFailureCount: t.fetchFailureCount + 1,
                      fetchFailureReason: i,
                      fetchStatus: 'idle',
                      status: 'error',
                    })
              case 'invalidate':
                return __spreadProps(__spreadValues({}, t), { isInvalidated: !0 })
              case 'setState':
                return __spreadValues(__spreadValues({}, t), e.state)
            }
          })(this.state)),
            Tr.batch(() => {
              this.observers.forEach((e) => {
                e.onQueryUpdate()
              }),
                __privateGet(this, f).notify({ query: this, type: 'updated', action: e })
            })
        }),
        _)
    var Dr =
        ((b = class extends cr {
          constructor(e = {}) {
            super(), __privateAdd(this, w), (this.config = e), __privateSet(this, w, new Map())
          }
          build(e, t, r) {
            var o
            const n = t.queryKey,
              a = null != (o = t.queryHash) ? o : vr(n, t)
            let i = this.get(a)
            return (
              i ||
                ((i = new Mr({
                  cache: this,
                  queryKey: n,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(n),
                })),
                this.add(i)),
              i
            )
          }
          add(e) {
            __privateGet(this, w).has(e.queryHash) ||
              (__privateGet(this, w).set(e.queryHash, e), this.notify({ type: 'added', query: e }))
          }
          remove(e) {
            const t = __privateGet(this, w).get(e.queryHash)
            t &&
              (e.destroy(),
              t === e && __privateGet(this, w).delete(e.queryHash),
              this.notify({ type: 'removed', query: e }))
          }
          clear() {
            Tr.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e)
              })
            })
          }
          get(e) {
            return __privateGet(this, w).get(e)
          }
          getAll() {
            return [...__privateGet(this, w).values()]
          }
          find(e) {
            const t = __spreadValues({ exact: !0 }, e)
            return this.getAll().find((e) => fr(t, e))
          }
          findAll(e = {}) {
            const t = this.getAll()
            return Object.keys(e).length > 0 ? t.filter((t) => fr(e, t)) : t
          }
          notify(e) {
            Tr.batch(() => {
              this.listeners.forEach((t) => {
                t(e)
              })
            })
          }
          onFocus() {
            Tr.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus()
              })
            })
          }
          onOnline() {
            Tr.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline()
              })
            })
          }
        }),
        (w = new WeakMap()),
        b),
      jr =
        ((E = class extends Ir {
          constructor(e) {
            super(),
              __privateAdd(this, V),
              __privateAdd(this, k),
              __privateAdd(this, x),
              __privateAdd(this, C),
              (this.mutationId = e.mutationId),
              __privateSet(this, x, e.mutationCache),
              __privateSet(this, k, []),
              (this.state = e.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: 'idle',
                variables: void 0,
                submittedAt: 0,
              }),
              this.setOptions(e.options),
              this.scheduleGc()
          }
          setOptions(e) {
            ;(this.options = e), this.updateGcTime(this.options.gcTime)
          }
          get meta() {
            return this.options.meta
          }
          addObserver(e) {
            __privateGet(this, k).includes(e) ||
              (__privateGet(this, k).push(e),
              this.clearGcTimeout(),
              __privateGet(this, x).notify({ type: 'observerAdded', mutation: this, observer: e }))
          }
          removeObserver(e) {
            __privateSet(
              this,
              k,
              __privateGet(this, k).filter((t) => t !== e),
            ),
              this.scheduleGc(),
              __privateGet(this, x).notify({ type: 'observerRemoved', mutation: this, observer: e })
          }
          optionalRemove() {
            __privateGet(this, k).length ||
              ('pending' === this.state.status
                ? this.scheduleGc()
                : __privateGet(this, x).remove(this))
          }
          continue() {
            var e, t
            return null != (t = null == (e = __privateGet(this, C)) ? void 0 : e.continue())
              ? t
              : this.execute(this.state.variables)
          }
          execute(e) {
            return __async(this, null, function* () {
              var t, r, o, n, a, i, s, l, c, u, d, p, f, m, v, h, y, g, _, w, b
              __privateSet(
                this,
                C,
                $r({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(e)
                      : Promise.reject(new Error('No mutationFn found')),
                  onFail: (e, t) => {
                    __privateMethod(this, V, S).call(this, {
                      type: 'failed',
                      failureCount: e,
                      error: t,
                    })
                  },
                  onPause: () => {
                    __privateMethod(this, V, S).call(this, { type: 'pause' })
                  },
                  onContinue: () => {
                    __privateMethod(this, V, S).call(this, { type: 'continue' })
                  },
                  retry: null != (t = this.options.retry) ? t : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                  canRun: () => __privateGet(this, x).canRun(this),
                }),
              )
              const k = 'pending' === this.state.status,
                E = !__privateGet(this, C).canStart()
              try {
                if (!k) {
                  __privateMethod(this, V, S).call(this, {
                    type: 'pending',
                    variables: e,
                    isPaused: E,
                  }),
                    yield null == (o = (r = __privateGet(this, x).config).onMutate)
                      ? void 0
                      : o.call(r, e, this)
                  const t = yield null == (a = (n = this.options).onMutate) ? void 0 : a.call(n, e)
                  t !== this.state.context &&
                    __privateMethod(this, V, S).call(this, {
                      type: 'pending',
                      context: t,
                      variables: e,
                      isPaused: E,
                    })
                }
                const t = yield __privateGet(this, C).start()
                return (
                  yield null == (s = (i = __privateGet(this, x).config).onSuccess)
                    ? void 0
                    : s.call(i, t, e, this.state.context, this),
                  yield null == (c = (l = this.options).onSuccess)
                    ? void 0
                    : c.call(l, t, e, this.state.context),
                  yield null == (d = (u = __privateGet(this, x).config).onSettled)
                    ? void 0
                    : d.call(u, t, null, this.state.variables, this.state.context, this),
                  yield null == (f = (p = this.options).onSettled)
                    ? void 0
                    : f.call(p, t, null, e, this.state.context),
                  __privateMethod(this, V, S).call(this, { type: 'success', data: t }),
                  t
                )
              } catch (N) {
                try {
                  throw (
                    (yield null == (v = (m = __privateGet(this, x).config).onError)
                      ? void 0
                      : v.call(m, N, e, this.state.context, this),
                    yield null == (y = (h = this.options).onError)
                      ? void 0
                      : y.call(h, N, e, this.state.context),
                    yield null == (_ = (g = __privateGet(this, x).config).onSettled)
                      ? void 0
                      : _.call(g, void 0, N, this.state.variables, this.state.context, this),
                    yield null == (b = (w = this.options).onSettled)
                      ? void 0
                      : b.call(w, void 0, N, e, this.state.context),
                    N)
                  )
                } finally {
                  __privateMethod(this, V, S).call(this, { type: 'error', error: N })
                }
              } finally {
                __privateGet(this, x).runNext(this)
              }
            })
          }
        }),
        (k = new WeakMap()),
        (x = new WeakMap()),
        (C = new WeakMap()),
        (V = new WeakSet()),
        (S = function (e) {
          ;(this.state = ((t) => {
            switch (e.type) {
              case 'failed':
                return __spreadProps(__spreadValues({}, t), {
                  failureCount: e.failureCount,
                  failureReason: e.error,
                })
              case 'pause':
                return __spreadProps(__spreadValues({}, t), { isPaused: !0 })
              case 'continue':
                return __spreadProps(__spreadValues({}, t), { isPaused: !1 })
              case 'pending':
                return __spreadProps(__spreadValues({}, t), {
                  context: e.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: e.isPaused,
                  status: 'pending',
                  variables: e.variables,
                  submittedAt: Date.now(),
                })
              case 'success':
                return __spreadProps(__spreadValues({}, t), {
                  data: e.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: 'success',
                  isPaused: !1,
                })
              case 'error':
                return __spreadProps(__spreadValues({}, t), {
                  data: void 0,
                  error: e.error,
                  failureCount: t.failureCount + 1,
                  failureReason: e.error,
                  isPaused: !1,
                  status: 'error',
                })
            }
          })(this.state)),
            Tr.batch(() => {
              __privateGet(this, k).forEach((t) => {
                t.onMutationUpdate(e)
              }),
                __privateGet(this, x).notify({ mutation: this, type: 'updated', action: e })
            })
        }),
        E)
    var Gr =
      ((O = class extends cr {
        constructor(e = {}) {
          super(),
            __privateAdd(this, N),
            __privateAdd(this, P),
            __privateAdd(this, B),
            (this.config = e),
            __privateSet(this, N, new Set()),
            __privateSet(this, P, new Map()),
            __privateSet(this, B, 0)
        }
        build(e, t, r) {
          const o = new jr({
            mutationCache: this,
            mutationId: ++__privateWrapper(this, B)._,
            options: e.defaultMutationOptions(t),
            state: r,
          })
          return this.add(o), o
        }
        add(e) {
          __privateGet(this, N).add(e)
          const t = zr(e)
          if ('string' == typeof t) {
            const r = __privateGet(this, P).get(t)
            r ? r.push(e) : __privateGet(this, P).set(t, [e])
          }
          this.notify({ type: 'added', mutation: e })
        }
        remove(e) {
          if (__privateGet(this, N).delete(e)) {
            const t = zr(e)
            if ('string' == typeof t) {
              const r = __privateGet(this, P).get(t)
              if (r)
                if (r.length > 1) {
                  const t = r.indexOf(e)
                  ;-1 !== t && r.splice(t, 1)
                } else r[0] === e && __privateGet(this, P).delete(t)
            }
          }
          this.notify({ type: 'removed', mutation: e })
        }
        canRun(e) {
          const t = zr(e)
          if ('string' == typeof t) {
            const r = __privateGet(this, P).get(t),
              o = null == r ? void 0 : r.find((e) => 'pending' === e.state.status)
            return !o || o === e
          }
          return !0
        }
        runNext(e) {
          var t, r
          const o = zr(e)
          if ('string' == typeof o) {
            const n =
              null == (t = __privateGet(this, P).get(o))
                ? void 0
                : t.find((t) => t !== e && t.state.isPaused)
            return null != (r = null == n ? void 0 : n.continue()) ? r : Promise.resolve()
          }
          return Promise.resolve()
        }
        clear() {
          Tr.batch(() => {
            __privateGet(this, N).forEach((e) => {
              this.notify({ type: 'removed', mutation: e })
            }),
              __privateGet(this, N).clear(),
              __privateGet(this, P).clear()
          })
        }
        getAll() {
          return Array.from(__privateGet(this, N))
        }
        find(e) {
          const t = __spreadValues({ exact: !0 }, e)
          return this.getAll().find((e) => mr(t, e))
        }
        findAll(e = {}) {
          return this.getAll().filter((t) => mr(e, t))
        }
        notify(e) {
          Tr.batch(() => {
            this.listeners.forEach((t) => {
              t(e)
            })
          })
        }
        resumePausedMutations() {
          const e = this.getAll().filter((e) => e.state.isPaused)
          return Tr.batch(() => Promise.all(e.map((e) => e.continue().catch(dr))))
        }
      }),
      (N = new WeakMap()),
      (P = new WeakMap()),
      (B = new WeakMap()),
      O)
    function zr(e) {
      var t
      return null == (t = e.options.scope) ? void 0 : t.id
    }
    function Fr(e) {
      return {
        onFetch: (t, r) => {
          var o, n, a, i, s
          const l = t.options,
            c =
              null ==
              (a =
                null == (n = null == (o = t.fetchOptions) ? void 0 : o.meta) ? void 0 : n.fetchMore)
                ? void 0
                : a.direction,
            u = (null == (i = t.state.data) ? void 0 : i.pages) || [],
            d = (null == (s = t.state.data) ? void 0 : s.pageParams) || []
          let p = { pages: [], pageParams: [] },
            f = 0
          const m = () =>
            __async(null, null, function* () {
              var r
              let o = !1
              const n = Sr(t.options, t.fetchOptions),
                a = (e, r, a) =>
                  __async(null, null, function* () {
                    if (o) return Promise.reject()
                    if (null == r && e.pages.length) return Promise.resolve(e)
                    const i = {
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: a ? 'backward' : 'forward',
                      meta: t.options.meta,
                    }
                    var s
                    ;(s = i),
                      Object.defineProperty(s, 'signal', {
                        enumerable: !0,
                        get: () => (
                          t.signal.aborted
                            ? (o = !0)
                            : t.signal.addEventListener('abort', () => {
                                o = !0
                              }),
                          t.signal
                        ),
                      })
                    const l = yield n(i),
                      { maxPages: c } = t.options,
                      u = a ? Cr : xr
                    return { pages: u(e.pages, l, c), pageParams: u(e.pageParams, r, c) }
                  })
              if (c && u.length) {
                const e = 'backward' === c,
                  t = { pages: u, pageParams: d },
                  r = (e ? qr : Rr)(l, t)
                p = yield a(t, r, e)
              } else {
                const t = null != e ? e : u.length
                do {
                  const e = 0 === f ? (null != (r = d[0]) ? r : l.initialPageParam) : Rr(l, p)
                  if (f > 0 && null == e) break
                  ;(p = yield a(p, e)), f++
                } while (f < t)
              }
              return p
            })
          t.options.persister
            ? (t.fetchFn = () => {
                var e, o
                return null == (o = (e = t.options).persister)
                  ? void 0
                  : o.call(
                      e,
                      m,
                      { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                      r,
                    )
              })
            : (t.fetchFn = m)
        },
      }
    }
    function Rr(e, { pages: t, pageParams: r }) {
      const o = t.length - 1
      return t.length > 0 ? e.getNextPageParam(t[o], t, r[o], r) : void 0
    }
    function qr(e, { pages: t, pageParams: r }) {
      var o
      return t.length > 0
        ? null == (o = e.getPreviousPageParam)
          ? void 0
          : o.call(e, t[0], t, r[0], r)
        : void 0
    }
    var Qr =
      ((z = class {
        constructor(e = {}) {
          __privateAdd(this, A),
            __privateAdd(this, $),
            __privateAdd(this, T),
            __privateAdd(this, I),
            __privateAdd(this, M),
            __privateAdd(this, D),
            __privateAdd(this, j),
            __privateAdd(this, G),
            __privateSet(this, A, e.queryCache || new Dr()),
            __privateSet(this, $, e.mutationCache || new Gr()),
            __privateSet(this, T, e.defaultOptions || {}),
            __privateSet(this, I, new Map()),
            __privateSet(this, M, new Map()),
            __privateSet(this, D, 0)
        }
        mount() {
          __privateWrapper(this, D)._++,
            1 === __privateGet(this, D) &&
              (__privateSet(
                this,
                j,
                Er.subscribe((e) =>
                  __async(this, null, function* () {
                    e && (yield this.resumePausedMutations(), __privateGet(this, A).onFocus())
                  }),
                ),
              ),
              __privateSet(
                this,
                G,
                Nr.subscribe((e) =>
                  __async(this, null, function* () {
                    e && (yield this.resumePausedMutations(), __privateGet(this, A).onOnline())
                  }),
                ),
              ))
        }
        unmount() {
          var e, t
          __privateWrapper(this, D)._--,
            0 === __privateGet(this, D) &&
              (null == (e = __privateGet(this, j)) || e.call(this),
              __privateSet(this, j, void 0),
              null == (t = __privateGet(this, G)) || t.call(this),
              __privateSet(this, G, void 0))
        }
        isFetching(e) {
          return __privateGet(this, A).findAll(
            __spreadProps(__spreadValues({}, e), { fetchStatus: 'fetching' }),
          ).length
        }
        isMutating(e) {
          return __privateGet(this, $).findAll(
            __spreadProps(__spreadValues({}, e), { status: 'pending' }),
          ).length
        }
        getQueryData(e) {
          var t
          const r = this.defaultQueryOptions({ queryKey: e })
          return null == (t = __privateGet(this, A).get(r.queryHash)) ? void 0 : t.state.data
        }
        ensureQueryData(e) {
          const t = this.defaultQueryOptions(e),
            r = __privateGet(this, A).build(this, t),
            o = r.state.data
          return void 0 === o
            ? this.fetchQuery(e)
            : (e.revalidateIfStale && r.isStaleByTime(pr(t.staleTime, r)) && this.prefetchQuery(t),
              Promise.resolve(o))
        }
        getQueriesData(e) {
          return __privateGet(this, A)
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data])
        }
        setQueryData(e, t, r) {
          const o = this.defaultQueryOptions({ queryKey: e }),
            n = __privateGet(this, A).get(o.queryHash),
            a = (function (e, t) {
              return 'function' == typeof e ? e(t) : e
            })(t, null == n ? void 0 : n.state.data)
          if (void 0 !== a)
            return __privateGet(this, A)
              .build(this, o)
              .setData(a, __spreadProps(__spreadValues({}, r), { manual: !0 }))
        }
        setQueriesData(e, t, r) {
          return Tr.batch(() =>
            __privateGet(this, A)
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)]),
          )
        }
        getQueryState(e) {
          var t
          const r = this.defaultQueryOptions({ queryKey: e })
          return null == (t = __privateGet(this, A).get(r.queryHash)) ? void 0 : t.state
        }
        removeQueries(e) {
          const t = __privateGet(this, A)
          Tr.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e)
            })
          })
        }
        resetQueries(e, t) {
          const r = __privateGet(this, A),
            o = __spreadValues({ type: 'active' }, e)
          return Tr.batch(
            () => (
              r.findAll(e).forEach((e) => {
                e.reset()
              }),
              this.refetchQueries(o, t)
            ),
          )
        }
        cancelQueries(e, t = {}) {
          const r = __spreadValues({ revert: !0 }, t),
            o = Tr.batch(() =>
              __privateGet(this, A)
                .findAll(e)
                .map((e) => e.cancel(r)),
            )
          return Promise.all(o).then(dr).catch(dr)
        }
        invalidateQueries(e, t = {}) {
          return Tr.batch(() => {
            var r, o
            if (
              (__privateGet(this, A)
                .findAll(e)
                .forEach((e) => {
                  e.invalidate()
                }),
              'none' === (null == e ? void 0 : e.refetchType))
            )
              return Promise.resolve()
            const n = __spreadProps(__spreadValues({}, e), {
              type:
                null !=
                (o =
                  null != (r = null == e ? void 0 : e.refetchType)
                    ? r
                    : null == e
                      ? void 0
                      : e.type)
                  ? o
                  : 'active',
            })
            return this.refetchQueries(n, t)
          })
        }
        refetchQueries(e, t = {}) {
          var r
          const o = __spreadProps(__spreadValues({}, t), {
              cancelRefetch: null == (r = t.cancelRefetch) || r,
            }),
            n = Tr.batch(() =>
              __privateGet(this, A)
                .findAll(e)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  let t = e.fetch(void 0, o)
                  return (
                    o.throwOnError || (t = t.catch(dr)),
                    'paused' === e.state.fetchStatus ? Promise.resolve() : t
                  )
                }),
            )
          return Promise.all(n).then(dr)
        }
        fetchQuery(e) {
          const t = this.defaultQueryOptions(e)
          void 0 === t.retry && (t.retry = !1)
          const r = __privateGet(this, A).build(this, t)
          return r.isStaleByTime(pr(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(dr).catch(dr)
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = Fr(e.pages)), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(dr).catch(dr)
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = Fr(e.pages)), this.ensureQueryData(e)
        }
        resumePausedMutations() {
          return Nr.isOnline() ? __privateGet(this, $).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
          return __privateGet(this, A)
        }
        getMutationCache() {
          return __privateGet(this, $)
        }
        getDefaultOptions() {
          return __privateGet(this, T)
        }
        setDefaultOptions(e) {
          __privateSet(this, T, e)
        }
        setQueryDefaults(e, t) {
          __privateGet(this, I).set(hr(e), { queryKey: e, defaultOptions: t })
        }
        getQueryDefaults(e) {
          const t = [...__privateGet(this, I).values()],
            r = {}
          return (
            t.forEach((t) => {
              yr(e, t.queryKey) && Object.assign(r, t.defaultOptions)
            }),
            r
          )
        }
        setMutationDefaults(e, t) {
          __privateGet(this, M).set(hr(e), { mutationKey: e, defaultOptions: t })
        }
        getMutationDefaults(e) {
          const t = [...__privateGet(this, M).values()]
          let r = {}
          return (
            t.forEach((t) => {
              yr(e, t.mutationKey) && (r = __spreadValues(__spreadValues({}, r), t.defaultOptions))
            }),
            r
          )
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e
          const t = __spreadProps(
            __spreadValues(
              __spreadValues(
                __spreadValues({}, __privateGet(this, T).queries),
                this.getQueryDefaults(e.queryKey),
              ),
              e,
            ),
            { _defaulted: !0 },
          )
          return (
            t.queryHash || (t.queryHash = vr(t.queryKey, t)),
            void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = 'always' !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
            t.queryFn === Vr && (t.enabled = !1),
            t
          )
        }
        defaultMutationOptions(e) {
          return (null == e ? void 0 : e._defaulted)
            ? e
            : __spreadProps(
                __spreadValues(
                  __spreadValues(
                    __spreadValues({}, __privateGet(this, T).mutations),
                    (null == e ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                  ),
                  e,
                ),
                { _defaulted: !0 },
              )
        }
        clear() {
          __privateGet(this, A).clear(), __privateGet(this, $).clear()
        }
      }),
      (A = new WeakMap()),
      ($ = new WeakMap()),
      (T = new WeakMap()),
      (I = new WeakMap()),
      (M = new WeakMap()),
      (D = new WeakMap()),
      (j = new WeakMap()),
      (G = new WeakMap()),
      z)
    function Lr(t, r, o = '', n = 0) {
      if (r) {
        const a = r(t, o, n)
        if (void 0 === a && e.isRef(t)) return a
        if (void 0 !== a) return a
      }
      if (Array.isArray(t)) return t.map((e, t) => Lr(e, r, String(t), n + 1))
      if (
        'object' == typeof t &&
        (function (e) {
          if ('[object Object]' !== Object.prototype.toString.call(e)) return !1
          const t = Object.getPrototypeOf(e)
          return null === t || t === Object.prototype
        })(t)
      ) {
        const e = Object.entries(t).map(([e, t]) => [e, Lr(t, r, e, n + 1)])
        return Object.fromEntries(e)
      }
      return t
    }
    function Ur(t, r = !1) {
      return Lr(t, (t, o, n) =>
        1 === n && 'queryKey' === o
          ? Ur(t, !0)
          : r && 'function' == typeof t
            ? Ur(t(), r)
            : e.isRef(t)
              ? Ur(e.unref(t), r)
              : void 0,
      )
    }
    var Wr = class extends Dr {
        find(e) {
          return super.find(Ur(e))
        }
        findAll(e = {}) {
          return super.findAll(Ur(e))
        }
      },
      Hr = class extends Gr {
        find(e) {
          return super.find(Ur(e))
        }
        findAll(e = {}) {
          return super.findAll(Ur(e))
        }
      },
      Kr = class extends Qr {
        constructor(t = {}) {
          super({
            defaultOptions: t.defaultOptions,
            queryCache: t.queryCache || new Wr(),
            mutationCache: t.mutationCache || new Hr(),
          }),
            (this.isRestoring = e.ref(!1))
        }
        isFetching(e = {}) {
          return super.isFetching(Ur(e))
        }
        isMutating(e = {}) {
          return super.isMutating(Ur(e))
        }
        getQueryData(e) {
          return super.getQueryData(Ur(e))
        }
        ensureQueryData(e) {
          return super.ensureQueryData(Ur(e))
        }
        getQueriesData(e) {
          return super.getQueriesData(Ur(e))
        }
        setQueryData(e, t, r = {}) {
          return super.setQueryData(Ur(e), t, Ur(r))
        }
        setQueriesData(e, t, r = {}) {
          return super.setQueriesData(Ur(e), t, Ur(r))
        }
        getQueryState(e) {
          return super.getQueryState(Ur(e))
        }
        removeQueries(e = {}) {
          return super.removeQueries(Ur(e))
        }
        resetQueries(e = {}, t = {}) {
          return super.resetQueries(Ur(e), Ur(t))
        }
        cancelQueries(e = {}, t = {}) {
          return super.cancelQueries(Ur(e), Ur(t))
        }
        invalidateQueries(t = {}, r = {}) {
          var o, n
          const a = Ur(t),
            i = Ur(r)
          if (
            (super.invalidateQueries(
              __spreadProps(__spreadValues({}, a), { refetchType: 'none' }),
              i,
            ),
            'none' === a.refetchType)
          )
            return Promise.resolve()
          const s = __spreadProps(__spreadValues({}, a), {
            type: null != (n = null != (o = a.refetchType) ? o : a.type) ? n : 'active',
          })
          return e.nextTick().then(() => super.refetchQueries(s, i))
        }
        refetchQueries(e = {}, t = {}) {
          return super.refetchQueries(Ur(e), Ur(t))
        }
        fetchQuery(e) {
          return super.fetchQuery(Ur(e))
        }
        prefetchQuery(e) {
          return super.prefetchQuery(Ur(e))
        }
        fetchInfiniteQuery(e) {
          return super.fetchInfiniteQuery(Ur(e))
        }
        prefetchInfiniteQuery(e) {
          return super.prefetchInfiniteQuery(Ur(e))
        }
        setDefaultOptions(e) {
          super.setDefaultOptions(Ur(e))
        }
        setQueryDefaults(e, t) {
          super.setQueryDefaults(Ur(e), Ur(t))
        }
        getQueryDefaults(e) {
          return super.getQueryDefaults(Ur(e))
        }
        setMutationDefaults(e, t) {
          super.setMutationDefaults(Ur(e), Ur(t))
        }
        getMutationDefaults(e) {
          return super.getMutationDefaults(Ur(e))
        }
      },
      Yr = {
        install: (e, t = {}) => {
          const r = 'VUE_QUERY_CLIENT' + ((o = t.queryClientKey) ? `:${o}` : '')
          var o
          let n
          if ('queryClient' in t && t.queryClient) n = t.queryClient
          else {
            const e = 'queryClientConfig' in t ? t.queryClientConfig : void 0
            n = new Kr(e)
          }
          ur || n.mount()
          let a = () => {}
          if (t.clientPersister) {
            n.isRestoring.value = !0
            const [e, r] = t.clientPersister(n)
            ;(a = e),
              r.then(() => {
                var e
                ;(n.isRestoring.value = !1),
                  null == (e = t.clientPersisterOnSuccess) || e.call(t, n)
              })
          }
          const i = () => {
            n.unmount(), a()
          }
          if (e.onUnmount) e.onUnmount(i)
          else {
            const t = e.unmount
            e.unmount = function () {
              i(), t()
            }
          }
          e.provide(r, n)
        },
      },
      Xr =
        'undefined' != typeof globalThis
          ? globalThis
          : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
                ? self
                : {}
    function Jr(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
    }
    var Zr
    Zr ||
      ((Zr = 1),
      (function () {
        function e(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r]
          return o
        }
        function t(e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function r(e, t, r) {
          return (t = l(t)), d(e, u() ? Reflect.construct(t, [], l(e).constructor) : t.apply(e, r))
        }
        function o(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r]
            ;(o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, h(o.key), o)
          }
        }
        function a(e, t, r) {
          return (
            t && n(e.prototype, t),
            r && n(e, r),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          )
        }
        function i(e, t) {
          var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
          if (!r) {
            if (Array.isArray(e) || (r = y(e)) || t) {
              r && (e = r)
              var o = 0,
                n = function () {}
              return {
                s: n,
                n: function () {
                  return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }
                },
                e: function (e) {
                  throw e
                },
                f: n,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          var a,
            i = !0,
            s = !1
          return {
            s: function () {
              r = r.call(e)
            },
            n: function () {
              var e = r.next()
              return (i = e.done), e
            },
            e: function (e) {
              ;(s = !0), (a = e)
            },
            f: function () {
              try {
                i || null == r.return || r.return()
              } finally {
                if (s) throw a
              }
            },
          }
        }
        function s() {
          return (
            (s =
              'undefined' != typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (e, t, r) {
                    var o = f(e, t)
                    if (o) {
                      var n = Object.getOwnPropertyDescriptor(o, t)
                      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value
                    }
                  }),
            s.apply(null, arguments)
          )
        }
        function l(e) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              })(e)
        }
        function c(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && p(e, t)
        }
        function u() {
          try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
          } catch (t) {}
          return (u = function () {
            return !!e
          })()
        }
        function d(e, r) {
          if (r && ('object' == typeof r || 'function' == typeof r)) return r
          if (void 0 !== r)
            throw new TypeError('Derived constructors may only return object or undefined')
          return t(e)
        }
        function p(e, t) {
          return (p = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e
              })(e, t)
        }
        function f(e, t) {
          for (; !{}.hasOwnProperty.call(e, t) && null !== (e = l(e)); );
          return e
        }
        function m(e, t, r, o) {
          var n = s(l(e.prototype), t, r)
          return 'function' == typeof n
            ? function (e) {
                return n.apply(r, e)
              }
            : n
        }
        function v(e, t) {
          if ('object' != typeof e || !e) return e
          var r = e[Symbol.toPrimitive]
          if (void 0 !== r) {
            var o = r.call(e, t)
            if ('object' != typeof o) return o
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return String(e)
        }
        function h(e) {
          var t = v(e, 'string')
          return 'symbol' == typeof t ? t : t + ''
        }
        function y(t, r) {
          if (t) {
            if ('string' == typeof t) return e(t, r)
            var o = {}.toString.call(t).slice(8, -1)
            return (
              'Object' === o && t.constructor && (o = t.constructor.name),
              'Map' === o || 'Set' === o
                ? Array.from(t)
                : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                  ? e(t, r)
                  : void 0
            )
          }
        }
        function g(e) {
          var t
          try {
            t = new Event('abort')
          } catch (r) {
            'undefined' != typeof document
              ? document.createEvent
                ? (t = document.createEvent('Event')).initEvent('abort', !1, !1)
                : ((t = document.createEventObject()).type = 'abort')
              : (t = { type: 'abort', bubbles: !1, cancelable: !1 })
          }
          return (t.reason = e), t
        }
        function _(e) {
          if (void 0 === e)
            if ('undefined' == typeof document)
              (e = new Error('This operation was aborted')).name = 'AbortError'
            else
              try {
                ;(e = new DOMException('signal is aborted without reason')),
                  Object.defineProperty(e, 'name', { value: 'AbortError' })
              } catch (t) {
                ;(e = new Error('This operation was aborted')).name = 'AbortError'
              }
          return e
        }
        var w,
          b = (function () {
            function e() {
              o(this, e),
                Object.defineProperty(this, 'listeners', {
                  value: {},
                  writable: !0,
                  configurable: !0,
                })
            }
            return a(e, [
              {
                key: 'addEventListener',
                value: function (e, t, r) {
                  e in this.listeners || (this.listeners[e] = []),
                    this.listeners[e].push({ callback: t, options: r })
                },
              },
              {
                key: 'removeEventListener',
                value: function (e, t) {
                  if (e in this.listeners)
                    for (var r = this.listeners[e], o = 0, n = r.length; o < n; o++)
                      if (r[o].callback === t) return void r.splice(o, 1)
                },
              },
              {
                key: 'dispatchEvent',
                value: function (e) {
                  var t = this
                  if (e.type in this.listeners) {
                    for (
                      var r = this.listeners[e.type].slice(),
                        o = function () {
                          var o = r[n]
                          try {
                            o.callback.call(t, e)
                          } catch (a) {
                            Promise.resolve().then(function () {
                              throw a
                            })
                          }
                          o.options && o.options.once && t.removeEventListener(e.type, o.callback)
                        },
                        n = 0,
                        a = r.length;
                      n < a;
                      n++
                    )
                      o()
                    return !e.defaultPrevented
                  }
                },
              },
            ])
          })(),
          k = (function (e) {
            function t() {
              var e
              return (
                o(this, t),
                (e = r(this, t)).listeners || b.call(e),
                Object.defineProperty(e, 'aborted', { value: !1, writable: !0, configurable: !0 }),
                Object.defineProperty(e, 'onabort', {
                  value: null,
                  writable: !0,
                  configurable: !0,
                }),
                Object.defineProperty(e, 'reason', {
                  value: void 0,
                  writable: !0,
                  configurable: !0,
                }),
                e
              )
            }
            return (
              c(t, e),
              a(
                t,
                [
                  {
                    key: 'toString',
                    value: function () {
                      return '[object AbortSignal]'
                    },
                  },
                  {
                    key: 'dispatchEvent',
                    value: function (e) {
                      'abort' === e.type &&
                        ((this.aborted = !0),
                        'function' == typeof this.onabort && this.onabort.call(this, e)),
                        m(t, 'dispatchEvent', this)([e])
                    },
                  },
                  {
                    key: 'throwIfAborted',
                    value: function () {
                      var e = this.aborted,
                        t = this.reason
                      if (e) throw void 0 === t ? 'Aborted' : t
                    },
                  },
                ],
                [
                  {
                    key: 'timeout',
                    value: function (e) {
                      var t = new x()
                      return (
                        setTimeout(function () {
                          return t.abort(
                            new DOMException(
                              'This signal is timeout in '.concat(e, 'ms'),
                              'TimeoutError',
                            ),
                          )
                        }, e),
                        t.signal
                      )
                    },
                  },
                  {
                    key: 'any',
                    value: function (e) {
                      var t = new x()
                      function r() {
                        t.abort(this.reason), o()
                      }
                      function o() {
                        var t,
                          o = i(e)
                        try {
                          for (o.s(); !(t = o.n()).done; ) t.value.removeEventListener('abort', r)
                        } catch (n) {
                          o.e(n)
                        } finally {
                          o.f()
                        }
                      }
                      var n,
                        a = i(e)
                      try {
                        for (a.s(); !(n = a.n()).done; ) {
                          var s = n.value
                          if (s.aborted) {
                            t.abort(s.reason)
                            break
                          }
                          s.addEventListener('abort', r)
                        }
                      } catch (l) {
                        a.e(l)
                      } finally {
                        a.f()
                      }
                      return t.signal
                    },
                  },
                ],
              )
            )
          })(b),
          x = (function () {
            function e() {
              o(this, e),
                Object.defineProperty(this, 'signal', {
                  value: new k(),
                  writable: !0,
                  configurable: !0,
                })
            }
            return a(e, [
              {
                key: 'abort',
                value: function (e) {
                  var t = _(e),
                    r = g(t)
                  ;(this.signal.reason = t), this.signal.dispatchEvent(r)
                },
              },
              {
                key: 'toString',
                value: function () {
                  return '[object AbortController]'
                },
              },
            ])
          })()
        function C(e) {
          return (
            !!e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ||
            ('function' == typeof e.Request && !e.Request.prototype.hasOwnProperty('signal')) ||
            !e.AbortController
          )
        }
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          ((x.prototype[Symbol.toStringTag] = 'AbortController'),
          (k.prototype[Symbol.toStringTag] = 'AbortSignal')),
          C((w = 'undefined' != typeof self ? self : Xr)) &&
            ((w.AbortController = x), (w.AbortSignal = k))
      })())
    const eo = e.defineComponent({
        __name: 'App',
        setup: (e) => (
          U(() => {
            F('log', 'at App.vue:6', 'App Launch')
          }),
          Q(() => {
            F('log', 'at App.vue:9', 'App Show')
          }),
          L(() => {
            F('log', 'at App.vue:12', 'App Hide')
          }),
          () => {}
        ),
      }),
      to = {
        globalStyle: {
          navigationStyle: 'default',
          navigationBarTitleText: 'unibest',
          navigationBarBackgroundColor: '#F1F1F1',
          navigationBarTextStyle: 'black',
          backgroundColor: '#F3F3F3',
        },
        easycom: {
          autoscan: !0,
          custom: {
            '^fg-(.*)': '@/components/fg-$1/fg-$1.vue',
            '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
            '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
              'z-paging/components/z-paging$1/z-paging$1.vue',
          },
        },
        tabBar: {
          custom: !0,
          color: '#999999',
          selectedColor: '#018d71',
          backgroundColor: '#F8F8F8',
          borderStyle: 'black',
          height: '50px',
          fontSize: '10px',
          iconWidth: '24px',
          spacing: '3px',
          list: [
            {
              pagePath: 'pages/index/index',
              text: '睡眠大数据',
              normalIcon: '/static/images/tabBar/tabBar-normal1.png',
              selectIcon: '/static/images/tabBar/tabBar-selected1.png',
            },
            {
              pagePath: 'pages/sleep/index',
              text: '睡个好觉',
              normalIcon: '/static/images/tabBar/tabBar-normal2.png',
              selectIcon: '/static/images/tabBar/tabBar-selected2.png',
            },
            {
              pagePath: 'pages/mine/index',
              text: '我的资料',
              normalIcon: '/static/images/tabBar/tabBar-normal3.png',
              selectIcon: '/static/images/tabBar/tabBar-selected3.png',
            },
          ],
        },
        pages: [
          {
            path: 'pages/index/index',
            type: 'home',
            layout: 'tabbar',
            style: { navigationStyle: 'custom', navigationBarTitleText: '首页' },
          },
          {
            path: 'pages/login/index',
            type: 'page',
            style: { navigationBarTitleText: '', navigationStyle: 'custom' },
          },
          {
            path: 'pages/mine/index',
            type: 'page',
            layout: 'tabbar',
            style: { navigationBarTitleText: '' },
          },
          {
            path: 'pages/sleep/index',
            type: 'page',
            layout: 'tabbar',
            style: { navigationBarTitleText: '', navigationStyle: 'custom' },
          },
          {
            path: 'pages/welcome/index',
            type: 'page',
            layout: 'default',
            style: { navigationBarTitleText: '' },
          },
          {
            path: 'pages/login/account/index',
            type: 'page',
            style: { navigationBarTitleText: '', navigationStyle: 'custom' },
          },
          {
            path: 'pages/login/verification/index',
            type: 'page',
            layout: 'default',
            style: { navigationBarTitleText: '', navigationStyle: 'custom' },
          },
          {
            path: 'pages/mine/about/index',
            type: 'page',
            style: { navigationBarTitleText: '关于我们' },
          },
          {
            path: 'pages/mine/info/index',
            type: 'page',
            style: { navigationBarTitleText: '个人资料' },
          },
          {
            path: 'pages/mine/password/index',
            type: 'page',
            style: { navigationBarTitleText: '修改密码' },
          },
        ],
        subPackages: [],
      },
      ro = 'app'.startsWith('mp-weixin'),
      { pages: oo, subPackages: no, tabBar: ao = { list: [] } } = __spreadValues({}, to),
      io = (null == ao ? void 0 : ao.list) || [],
      so = ((e = 'needLogin') => {
        const t = [
            ...oo
              .filter((t) => !e || t[e])
              .map((e) => __spreadProps(__spreadValues({}, e), { path: `/${e.path}` })),
          ],
          r = []
        no.forEach((t) => {
          const { root: o } = t
          t.pages
            .filter((t) => !e || t[e])
            .forEach((e) => {
              r.push(__spreadProps(__spreadValues({}, e), { path: `/${o}/${e.path}` }))
            })
        })
        return [...t, ...r]
      })('needLogin').map((e) => e.path),
      lo = {
        invoke({ url: e }) {
          let t = e.split('?')[0]
          if (!t.startsWith('/')) {
            const e = (() => {
                const e = getCurrentPages()
                return e[e.length - 1]
              })().route,
              r = e.startsWith('/') ? e : `/${e}`
            t = `${r.substring(0, r.lastIndexOf('/'))}/${t}`
          }
          let r = []
          r = so
          if (!r.includes(t)) return !0
          if (!!me().userInfo.username) return !0
          const o = `/pages/login/index?redirect=${encodeURIComponent(e)}`
          return uni.navigateTo({ url: o }), !1
        },
      },
      co = {
        install() {
          uni.addInterceptor('navigateTo', lo),
            uni.addInterceptor('reLaunch', lo),
            uni.addInterceptor('redirectTo', lo),
            uni.addInterceptor('switchTab', lo)
        },
      }
    var uo, po, fo, mo, vo, ho, yo, go, _o, wo
    function bo() {
      if (po) return uo
      po = 1
      var e = Object.prototype.hasOwnProperty,
        t = (function () {
          for (var e = [], t = 0; t < 256; ++t)
            e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
          return e
        })(),
        r = function (e, t) {
          for (var r = t && t.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o)
            void 0 !== e[o] && (r[o] = e[o])
          return r
        }
      return (uo = {
        arrayToObject: r,
        assign: function (e, t) {
          return Object.keys(t).reduce(function (e, r) {
            return (e[r] = t[r]), e
          }, e)
        },
        compact: function (e) {
          for (var t = [{ obj: { o: e }, prop: 'o' }], r = [], o = 0; o < t.length; ++o)
            for (var n = t[o], a = n.obj[n.prop], i = Object.keys(a), s = 0; s < i.length; ++s) {
              var l = i[s],
                c = a[l]
              'object' == typeof c &&
                null !== c &&
                -1 === r.indexOf(c) &&
                (t.push({ obj: a, prop: l }), r.push(c))
            }
          return (function (e) {
            for (var t; e.length; ) {
              var r = e.pop()
              if (((t = r.obj[r.prop]), Array.isArray(t))) {
                for (var o = [], n = 0; n < t.length; ++n) void 0 !== t[n] && o.push(t[n])
                r.obj[r.prop] = o
              }
            }
            return t
          })(t)
        },
        decode: function (e) {
          try {
            return decodeURIComponent(e.replace(/\+/g, ' '))
          } catch (t) {
            return e
          }
        },
        encode: function (e) {
          if (0 === e.length) return e
          for (var r = 'string' == typeof e ? e : String(e), o = '', n = 0; n < r.length; ++n) {
            var a = r.charCodeAt(n)
            45 === a ||
            46 === a ||
            95 === a ||
            126 === a ||
            (a >= 48 && a <= 57) ||
            (a >= 65 && a <= 90) ||
            (a >= 97 && a <= 122)
              ? (o += r.charAt(n))
              : a < 128
                ? (o += t[a])
                : a < 2048
                  ? (o += t[192 | (a >> 6)] + t[128 | (63 & a)])
                  : a < 55296 || a >= 57344
                    ? (o += t[224 | (a >> 12)] + t[128 | ((a >> 6) & 63)] + t[128 | (63 & a)])
                    : ((n += 1),
                      (a = 65536 + (((1023 & a) << 10) | (1023 & r.charCodeAt(n)))),
                      (o +=
                        t[240 | (a >> 18)] +
                        t[128 | ((a >> 12) & 63)] +
                        t[128 | ((a >> 6) & 63)] +
                        t[128 | (63 & a)]))
          }
          return o
        },
        isBuffer: function (e) {
          return (
            null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
          )
        },
        isRegExp: function (e) {
          return '[object RegExp]' === Object.prototype.toString.call(e)
        },
        merge: function t(o, n, a) {
          if (!n) return o
          if ('object' != typeof n) {
            if (Array.isArray(o)) o.push(n)
            else {
              if (!o || 'object' != typeof o) return [o, n]
              ;((a && (a.plainObjects || a.allowPrototypes)) || !e.call(Object.prototype, n)) &&
                (o[n] = !0)
            }
            return o
          }
          if (!o || 'object' != typeof o) return [o].concat(n)
          var i = o
          return (
            Array.isArray(o) && !Array.isArray(n) && (i = r(o, a)),
            Array.isArray(o) && Array.isArray(n)
              ? (n.forEach(function (r, n) {
                  if (e.call(o, n)) {
                    var i = o[n]
                    i && 'object' == typeof i && r && 'object' == typeof r
                      ? (o[n] = t(i, r, a))
                      : o.push(r)
                  } else o[n] = r
                }),
                o)
              : Object.keys(n).reduce(function (r, o) {
                  var i = n[o]
                  return e.call(r, o) ? (r[o] = t(r[o], i, a)) : (r[o] = i), r
                }, i)
          )
        },
      })
    }
    function ko() {
      if (mo) return fo
      mo = 1
      var e = String.prototype.replace,
        t = /%20/g
      return (fo = {
        default: 'RFC3986',
        formatters: {
          RFC1738: function (r) {
            return e.call(r, t, '+')
          },
          RFC3986: function (e) {
            return String(e)
          },
        },
        RFC1738: 'RFC1738',
        RFC3986: 'RFC3986',
      })
    }
    function xo() {
      if (go) return yo
      go = 1
      var e = bo(),
        t = Object.prototype.hasOwnProperty,
        r = {
          allowDots: !1,
          allowPrototypes: !1,
          arrayLimit: 20,
          decoder: e.decode,
          delimiter: '&',
          depth: 5,
          parameterLimit: 1e3,
          plainObjects: !1,
          strictNullHandling: !1,
        },
        o = function (e, r, o) {
          if (e) {
            var n = o.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
              a = /(\[[^[\]]*])/g,
              i = /(\[[^[\]]*])/.exec(n),
              s = i ? n.slice(0, i.index) : n,
              l = []
            if (s) {
              if (!o.plainObjects && t.call(Object.prototype, s) && !o.allowPrototypes) return
              l.push(s)
            }
            for (var c = 0; null !== (i = a.exec(n)) && c < o.depth; ) {
              if (
                ((c += 1),
                !o.plainObjects &&
                  t.call(Object.prototype, i[1].slice(1, -1)) &&
                  !o.allowPrototypes)
              )
                return
              l.push(i[1])
            }
            return (
              i && l.push('[' + n.slice(i.index) + ']'),
              (function (e, t, r) {
                for (var o = t, n = e.length - 1; n >= 0; --n) {
                  var a,
                    i = e[n]
                  if ('[]' === i && r.parseArrays) a = [].concat(o)
                  else {
                    a = r.plainObjects ? Object.create(null) : {}
                    var s =
                        '[' === i.charAt(0) && ']' === i.charAt(i.length - 1) ? i.slice(1, -1) : i,
                      l = parseInt(s, 10)
                    r.parseArrays || '' !== s
                      ? !isNaN(l) &&
                        i !== s &&
                        String(l) === s &&
                        l >= 0 &&
                        r.parseArrays &&
                        l <= r.arrayLimit
                        ? ((a = [])[l] = o)
                        : '__proto__' !== s && (a[s] = o)
                      : (a = { 0: o })
                  }
                  o = a
                }
                return o
              })(l, r, o)
            )
          }
        }
      return (yo = function (n, a) {
        var i = a ? e.assign({}, a) : {}
        if (null !== i.decoder && void 0 !== i.decoder && 'function' != typeof i.decoder)
          throw new TypeError('Decoder has to be a function.')
        if (
          ((i.ignoreQueryPrefix = !0 === i.ignoreQueryPrefix),
          (i.delimiter =
            'string' == typeof i.delimiter || e.isRegExp(i.delimiter) ? i.delimiter : r.delimiter),
          (i.depth = 'number' == typeof i.depth ? i.depth : r.depth),
          (i.arrayLimit = 'number' == typeof i.arrayLimit ? i.arrayLimit : r.arrayLimit),
          (i.parseArrays = !1 !== i.parseArrays),
          (i.decoder = 'function' == typeof i.decoder ? i.decoder : r.decoder),
          (i.allowDots = 'boolean' == typeof i.allowDots ? i.allowDots : r.allowDots),
          (i.plainObjects = 'boolean' == typeof i.plainObjects ? i.plainObjects : r.plainObjects),
          (i.allowPrototypes =
            'boolean' == typeof i.allowPrototypes ? i.allowPrototypes : r.allowPrototypes),
          (i.parameterLimit =
            'number' == typeof i.parameterLimit ? i.parameterLimit : r.parameterLimit),
          (i.strictNullHandling =
            'boolean' == typeof i.strictNullHandling ? i.strictNullHandling : r.strictNullHandling),
          '' === n || null == n)
        )
          return i.plainObjects ? Object.create(null) : {}
        for (
          var s =
              'string' == typeof n
                ? (function (e, o) {
                    for (
                      var n = {},
                        a = o.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                        i = o.parameterLimit === 1 / 0 ? void 0 : o.parameterLimit,
                        s = a.split(o.delimiter, i),
                        l = 0;
                      l < s.length;
                      ++l
                    ) {
                      var c,
                        u,
                        d = s[l],
                        p = d.indexOf(']='),
                        f = -1 === p ? d.indexOf('=') : p + 1
                      ;-1 === f
                        ? ((c = o.decoder(d, r.decoder)), (u = o.strictNullHandling ? null : ''))
                        : ((c = o.decoder(d.slice(0, f), r.decoder)),
                          (u = o.decoder(d.slice(f + 1), r.decoder))),
                        t.call(n, c) ? (n[c] = [].concat(n[c]).concat(u)) : (n[c] = u)
                    }
                    return n
                  })(n, i)
                : n,
            l = i.plainObjects ? Object.create(null) : {},
            c = Object.keys(s),
            u = 0;
          u < c.length;
          ++u
        ) {
          var d = c[u],
            p = o(d, s[d], i)
          l = e.merge(l, p, i)
        }
        return e.compact(l)
      })
    }
    const Co = Jr(
        (function () {
          if (wo) return _o
          wo = 1
          var e = (function () {
              if (ho) return vo
              ho = 1
              var e = bo(),
                t = ko(),
                r = {
                  brackets: function (e) {
                    return e + '[]'
                  },
                  indices: function (e, t) {
                    return e + '[' + t + ']'
                  },
                  repeat: function (e) {
                    return e
                  },
                },
                o = Array.isArray,
                n = Array.prototype.push,
                a = function (e, t) {
                  n.apply(e, o(t) ? t : [t])
                },
                i = Date.prototype.toISOString,
                s = {
                  delimiter: '&',
                  encode: !0,
                  encoder: e.encode,
                  encodeValuesOnly: !1,
                  serializeDate: function (e) {
                    return i.call(e)
                  },
                  skipNulls: !1,
                  strictNullHandling: !1,
                },
                l = function t(r, n, i, l, c, u, d, p, f, m, v, h) {
                  var y = r
                  if (
                    ('function' == typeof d ? (y = d(n, y)) : y instanceof Date && (y = m(y)),
                    null === y)
                  ) {
                    if (l) return u && !h ? u(n, s.encoder) : n
                    y = ''
                  }
                  if (
                    'string' == typeof y ||
                    'number' == typeof y ||
                    'boolean' == typeof y ||
                    e.isBuffer(y)
                  )
                    return u
                      ? [v(h ? n : u(n, s.encoder)) + '=' + v(u(y, s.encoder))]
                      : [v(n) + '=' + v(String(y))]
                  var g,
                    _ = []
                  if (void 0 === y) return _
                  if (o(d)) g = d
                  else {
                    var w = Object.keys(y)
                    g = p ? w.sort(p) : w
                  }
                  for (var b = 0; b < g.length; ++b) {
                    var k = g[b]
                    ;(c && null === y[k]) ||
                      (o(y)
                        ? a(_, t(y[k], i(n, k), i, l, c, u, d, p, f, m, v, h))
                        : a(
                            _,
                            t(
                              y[k],
                              n + (f ? '.' + k : '[' + k + ']'),
                              i,
                              l,
                              c,
                              u,
                              d,
                              p,
                              f,
                              m,
                              v,
                              h,
                            ),
                          ))
                  }
                  return _
                }
              return (vo = function (n, i) {
                var c = n,
                  u = i ? e.assign({}, i) : {}
                if (null !== u.encoder && void 0 !== u.encoder && 'function' != typeof u.encoder)
                  throw new TypeError('Encoder has to be a function.')
                var d = void 0 === u.delimiter ? s.delimiter : u.delimiter,
                  p =
                    'boolean' == typeof u.strictNullHandling
                      ? u.strictNullHandling
                      : s.strictNullHandling,
                  f = 'boolean' == typeof u.skipNulls ? u.skipNulls : s.skipNulls,
                  m = 'boolean' == typeof u.encode ? u.encode : s.encode,
                  v = 'function' == typeof u.encoder ? u.encoder : s.encoder,
                  h = 'function' == typeof u.sort ? u.sort : null,
                  y = void 0 !== u.allowDots && u.allowDots,
                  g = 'function' == typeof u.serializeDate ? u.serializeDate : s.serializeDate,
                  _ =
                    'boolean' == typeof u.encodeValuesOnly ? u.encodeValuesOnly : s.encodeValuesOnly
                if (void 0 === u.format) u.format = t.default
                else if (!Object.prototype.hasOwnProperty.call(t.formatters, u.format))
                  throw new TypeError('Unknown format option provided.')
                var w,
                  b,
                  k = t.formatters[u.format]
                'function' == typeof u.filter
                  ? (c = (b = u.filter)('', c))
                  : o(u.filter) && (w = b = u.filter)
                var x,
                  C = []
                if ('object' != typeof c || null === c) return ''
                x =
                  u.arrayFormat in r
                    ? u.arrayFormat
                    : 'indices' in u
                      ? u.indices
                        ? 'indices'
                        : 'repeat'
                      : 'indices'
                var V = r[x]
                w || (w = Object.keys(c)), h && w.sort(h)
                for (var S = 0; S < w.length; ++S) {
                  var E = w[S]
                  ;(f && null === c[E]) || a(C, l(c[E], E, V, p, f, m ? v : null, b, h, y, g, k, _))
                }
                var N = C.join(d),
                  P = !0 === u.addQueryPrefix ? '?' : ''
                return N.length > 0 ? P + N : ''
              })
            })(),
            t = xo(),
            r = ko()
          return (_o = { formats: r, parse: t, stringify: e })
        })(),
      ),
      Vo = (() => {
        let e = 'http://47.119.191.194:5112'
        if (ro) {
          const {
            miniProgram: { envVersion: t },
          } = uni.getAccountInfoSync()
          switch (t) {
            case 'develop':
            case 'trial':
            case 'release':
              e = 'https://ukw0y1.laf.run'
          }
        }
        return e
      })(),
      So = {
        invoke(e) {
          if (e.query) {
            const t = Co.stringify(e.query)
            e.url.includes('?') ? (e.url += `&${t}`) : (e.url += `?${t}`)
          }
          e.url.startsWith('http') || (e.url = Vo + e.url),
            (e.timeout = 1e4),
            (e.header = __spreadValues({ platform: 'app' }, e.header))
          const t = me(),
            { token: r } = t.userInfo
          r && (e.header.Authorization = `Bearer ${r}`)
        },
      },
      Eo = {
        install() {
          uni.addInterceptor('request', So), uni.addInterceptor('uploadFile', So)
        },
      },
      No = {
        install() {
          'function' != typeof Array.prototype.at &&
            (Array.prototype.at = function (e) {
              return e < 0 ? this[this.length + e] : e >= this.length ? void 0 : this[e]
            })
        },
      },
      Po = __spreadProps(__spreadValues({}, vt), {
        transition: String,
        closable: dt(!1),
        position: mt('center'),
        closeOnClickModal: dt(!0),
        duration: { type: [Number, Boolean], default: 300 },
        modal: dt(!0),
        zIndex: pt(10),
        hideWhenClose: dt(!0),
        modalStyle: mt(''),
        safeAreaInsetBottom: dt(!1),
        modelValue: dt(!1),
        lazyRender: dt(!0),
        lockScroll: dt(!0),
      }),
      Bo = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-popup',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: Po,
              emits: [
                'update:modelValue',
                'before-enter',
                'enter',
                'before-leave',
                'leave',
                'after-leave',
                'after-enter',
                'click-modal',
                'close',
              ],
              setup(t, { emit: r }) {
                const o = t,
                  n = r,
                  a = e.computed(() =>
                    o.transition
                      ? o.transition
                      : 'center' === o.position
                        ? ['zoom-in', 'fade']
                        : 'left' === o.position
                          ? 'slide-left'
                          : 'right' === o.position
                            ? 'slide-right'
                            : 'bottom' === o.position
                              ? 'slide-up'
                              : 'top' === o.position
                                ? 'slide-down'
                                : 'slide-up',
                  ),
                  i = e.ref(0),
                  s = e.computed(
                    () => `z-index:${o.zIndex}; padding-bottom: ${i.value}px;${o.customStyle}`,
                  ),
                  l = e.computed(
                    () =>
                      `wd-popup wd-popup--${o.position} ${o.transition || 'center' !== o.position ? '' : 'is-deep'} ${o.customClass || ''}`,
                  )
                function c() {
                  n('click-modal'), o.closeOnClickModal && u()
                }
                function u() {
                  n('close'), n('update:modelValue', !1)
                }
                function d() {}
                return (
                  e.onBeforeMount(() => {
                    if (o.safeAreaInsetBottom) {
                      const {
                        safeArea: e,
                        screenHeight: t,
                        safeAreaInsets: r,
                      } = uni.getSystemInfoSync()
                      i.value = e && r ? r.bottom : 0
                    }
                  }),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock('view', { class: 'wd-popup-wrapper' }, [
                      t.modal
                        ? (e.openBlock(),
                          e.createBlock(
                            tr,
                            {
                              key: 0,
                              show: t.modelValue,
                              'z-index': t.zIndex,
                              'lock-scroll': t.lockScroll,
                              duration: t.duration,
                              'custom-style': t.modalStyle,
                              onClick: c,
                              onTouchmove: d,
                            },
                            null,
                            8,
                            ['show', 'z-index', 'lock-scroll', 'duration', 'custom-style'],
                          ))
                        : e.createCommentVNode('', !0),
                      e.createVNode(
                        Zt,
                        {
                          'lazy-render': t.lazyRender,
                          'custom-class': l.value,
                          'custom-style': s.value,
                          duration: t.duration,
                          show: t.modelValue,
                          name: a.value,
                          destroy: t.hideWhenClose,
                          onBeforeEnter: r[0] || (r[0] = (e) => n('before-enter')),
                          onEnter: r[1] || (r[1] = (e) => n('enter')),
                          onAfterEnter: r[2] || (r[2] = (e) => n('after-enter')),
                          onBeforeLeave: r[3] || (r[3] = (e) => n('before-leave')),
                          onLeave: r[4] || (r[4] = (e) => n('leave')),
                          onAfterLeave: r[5] || (r[5] = (e) => n('after-leave')),
                        },
                        {
                          default: e.withCtx(() => [
                            e.renderSlot(t.$slots, 'default', {}, void 0, !0),
                            t.closable
                              ? (e.openBlock(),
                                e.createBlock(yt, {
                                  key: 0,
                                  'custom-class': 'wd-popup__close',
                                  name: 'add',
                                  onClick: u,
                                }))
                              : e.createCommentVNode('', !0),
                          ]),
                          _: 3,
                        },
                        8,
                        [
                          'lazy-render',
                          'custom-class',
                          'custom-style',
                          'duration',
                          'show',
                          'name',
                          'destroy',
                        ],
                      ),
                    ])
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-974776cf']],
      ),
      Oo = __spreadProps(__spreadValues({}, vt), { selector: mt('') }),
      Ao = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'wd-message-box',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: Oo,
              setup(t) {
                const r = t,
                  { translate: o } = Tt('message-box'),
                  n = e.computed(() => `wd-message-box__container ${r.customClass}`),
                  a = e.computed(
                    () =>
                      `wd-message-box__body ${c.title ? '' : 'is-no-title'} ${'prompt' === c.type ? 'is-prompt' : ''}`,
                  ),
                  i = (s = r.selector) ? `${tt}${s}` : tt
                var s
                const l = e.inject(i, e.ref(rt)),
                  c = e.reactive({
                    msg: '',
                    show: !1,
                    title: '',
                    showCancelButton: !1,
                    closeOnClickModal: !0,
                    confirmButtonText: '',
                    cancelButtonText: '',
                    type: 'alert',
                    inputType: 'text',
                    inputValue: '',
                    inputPlaceholder: '',
                    inputError: '',
                    showErr: !1,
                    zIndex: 99,
                    lazyRender: !0,
                  }),
                  u = e.computed(() => {
                    const e = Le(
                      { block: !0 },
                      Ae(c.confirmButtonProps) ? He(c.confirmButtonProps, ze) : {},
                    )
                    return (e.customClass = `${e.customClass || ''} wd-message-box__actions-btn`), e
                  }),
                  d = e.computed(() => {
                    const e = Le(
                      { block: !0, type: 'info' },
                      Ae(c.cancelButtonProps) ? He(c.cancelButtonProps, ze) : {},
                    )
                    return (e.customClass = `${e.customClass || ''} wd-message-box__actions-btn`), e
                  })
                function p(e) {
                  if (
                    ('modal' !== e || c.closeOnClickModal) &&
                    ('prompt' !== c.type ||
                      'confirm' !== e ||
                      (function () {
                        if (c.inputPattern && !c.inputPattern.test(String(c.inputValue)))
                          return (c.showErr = !0), !1
                        if ('function' == typeof c.inputValidate) {
                          if (!c.inputValidate(c.inputValue)) return (c.showErr = !0), !1
                        }
                        return (c.showErr = !1), !0
                      })())
                  )
                    switch (e) {
                      case 'confirm':
                        c.beforeConfirm
                          ? c.beforeConfirm({
                              resolve: (t) => {
                                t && f({ action: e, value: c.inputValue })
                              },
                            })
                          : f({ action: e, value: c.inputValue })
                        break
                      case 'cancel':
                        m({ action: e })
                        break
                      default:
                        m({ action: 'modal' })
                    }
                }
                function f(e) {
                  ;(c.show = !1), De(c.success) && c.success(e)
                }
                function m(e) {
                  ;(c.show = !1), De(c.fail) && c.fail(e)
                }
                function v({ value: e }) {
                  '' !== e ? (c.inputValue = e) : (c.showErr = !1)
                }
                return (
                  e.watch(
                    () => l.value,
                    (e) => {
                      var t
                      ;(t = e) &&
                        ((c.title = Ae(t.title) ? t.title : ''),
                        (c.showCancelButton = !!Ae(t.showCancelButton) && t.showCancelButton),
                        (c.show = t.show),
                        (c.closeOnClickModal = t.closeOnClickModal),
                        (c.confirmButtonText = t.confirmButtonText),
                        (c.cancelButtonText = t.cancelButtonText),
                        (c.msg = t.msg),
                        (c.type = t.type),
                        (c.inputType = t.inputType),
                        (c.inputSize = t.inputSize),
                        (c.inputValue = t.inputValue),
                        (c.inputPlaceholder = t.inputPlaceholder),
                        (c.inputPattern = t.inputPattern),
                        (c.inputValidate = t.inputValidate),
                        (c.success = t.success),
                        (c.fail = t.fail),
                        (c.beforeConfirm = t.beforeConfirm),
                        (c.inputError = t.inputError),
                        (c.showErr = t.showErr),
                        (c.zIndex = t.zIndex),
                        (c.lazyRender = t.lazyRender),
                        (c.confirmButtonProps = t.confirmButtonProps),
                        (c.cancelButtonProps = t.cancelButtonProps))
                    },
                    { deep: !0, immediate: !0 },
                  ),
                  e.watch(
                    () => c.show,
                    (e) => {
                      !1 === !!e && (c.showErr = !1)
                    },
                    { deep: !0, immediate: !0 },
                  ),
                  (t, r) => (
                    e.openBlock(),
                    e.createElementBlock('view', null, [
                      e.createVNode(
                        Bo,
                        {
                          transition: 'zoom-in',
                          modelValue: c.show,
                          'onUpdate:modelValue': r[3] || (r[3] = (e) => (c.show = e)),
                          'close-on-click-modal': c.closeOnClickModal,
                          'lazy-render': c.lazyRender,
                          'custom-class': 'wd-message-box',
                          onClickModal: r[4] || (r[4] = (e) => p('modal')),
                          'z-index': c.zIndex,
                          duration: 200,
                        },
                        {
                          default: e.withCtx(() => [
                            e.createElementVNode(
                              'view',
                              { class: e.normalizeClass(n.value) },
                              [
                                e.createElementVNode(
                                  'view',
                                  { class: e.normalizeClass(a.value) },
                                  [
                                    c.title
                                      ? (e.openBlock(),
                                        e.createElementBlock(
                                          'view',
                                          { key: 0, class: 'wd-message-box__title' },
                                          e.toDisplayString(c.title),
                                          1,
                                        ))
                                      : e.createCommentVNode('', !0),
                                    e.createElementVNode(
                                      'view',
                                      { class: 'wd-message-box__content' },
                                      [
                                        'prompt' === c.type
                                          ? (e.openBlock(),
                                            e.createElementBlock(
                                              e.Fragment,
                                              { key: 0 },
                                              [
                                                e.createVNode(
                                                  Mt,
                                                  {
                                                    modelValue: c.inputValue,
                                                    'onUpdate:modelValue':
                                                      r[0] || (r[0] = (e) => (c.inputValue = e)),
                                                    type: c.inputType,
                                                    size: c.inputSize,
                                                    placeholder: c.inputPlaceholder,
                                                    onInput: v,
                                                  },
                                                  null,
                                                  8,
                                                  ['modelValue', 'type', 'size', 'placeholder'],
                                                ),
                                                c.showErr
                                                  ? (e.openBlock(),
                                                    e.createElementBlock(
                                                      'view',
                                                      {
                                                        key: 0,
                                                        class: 'wd-message-box__input-error',
                                                      },
                                                      e.toDisplayString(
                                                        c.inputError ||
                                                          e.unref(o)('inputNoValidate'),
                                                      ),
                                                      1,
                                                    ))
                                                  : e.createCommentVNode('', !0),
                                              ],
                                              64,
                                            ))
                                          : e.createCommentVNode('', !0),
                                        e.renderSlot(
                                          t.$slots,
                                          'default',
                                          {},
                                          () => [e.createTextVNode(e.toDisplayString(c.msg), 1)],
                                          !0,
                                        ),
                                      ],
                                    ),
                                  ],
                                  2,
                                ),
                                e.createElementVNode(
                                  'view',
                                  {
                                    class: e.normalizeClass(
                                      'wd-message-box__actions ' +
                                        (c.showCancelButton
                                          ? 'wd-message-box__flex'
                                          : 'wd-message-box__block'),
                                    ),
                                  },
                                  [
                                    c.showCancelButton
                                      ? (e.openBlock(),
                                        e.createBlock(
                                          ir,
                                          e.mergeProps({ key: 0 }, d.value, {
                                            onClick: r[1] || (r[1] = (e) => p('cancel')),
                                          }),
                                          {
                                            default: e.withCtx(() => [
                                              e.createTextVNode(
                                                e.toDisplayString(
                                                  c.cancelButtonText || e.unref(o)('cancel'),
                                                ),
                                                1,
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                          16,
                                        ))
                                      : e.createCommentVNode('', !0),
                                    e.createVNode(
                                      ir,
                                      e.mergeProps(u.value, {
                                        onClick: r[2] || (r[2] = (e) => p('confirm')),
                                      }),
                                      {
                                        default: e.withCtx(() => [
                                          e.createTextVNode(
                                            e.toDisplayString(
                                              c.confirmButtonText || e.unref(o)('confirm'),
                                            ),
                                            1,
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      16,
                                    ),
                                  ],
                                  2,
                                ),
                              ],
                              2,
                            ),
                          ]),
                          _: 3,
                        },
                        8,
                        ['modelValue', 'close-on-click-modal', 'lazy-render', 'z-index'],
                      ),
                    ])
                  )
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-05f973d9']],
      ),
      $o = ve(
        e.defineComponent(
          __spreadProps(
            __spreadValues(
              {},
              {
                name: 'privacy-popup',
                options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
              },
            ),
            {
              props: {
                title: { default: '用户隐私保护提示' },
                desc: { default: '感谢您使用本应用，您使用本应用的服务之前请仔细阅读并同意' },
                subDesc: {
                  default:
                    '。当您点击同意并开始时用产品服务时，即表示你已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法使用相应服务。',
                },
                protocol: { default: '《用户隐私保护指引》' },
              },
              emits: ['agree', 'disagree'],
              setup(t, { emit: r }) {
                const o = e.ref(!1),
                  n = e.ref(new Set()),
                  a = (e) => {
                    ;(o.value = !0), n.value.add(e)
                  },
                  i = r
                function s() {
                  ;(o.value = !1),
                    n.value.forEach((e) => {
                      e({ event: 'agree', buttonId: 'agree-btn' })
                    }),
                    n.value.clear(),
                    i('agree')
                }
                function l() {
                  ;(o.value = !1),
                    n.value.forEach((e) => {
                      e({ event: 'disagree' })
                    }),
                    n.value.clear()
                }
                function c() {
                  wx.openPrivacyContract({
                    success: (e) => {
                      F(
                        'log',
                        'at components/privacy-popup/privacy-popup.vue:126',
                        'openPrivacyContract success',
                      )
                    },
                    fail: (e) => {
                      F(
                        'error',
                        'at components/privacy-popup/privacy-popup.vue:129',
                        'openPrivacyContract fail',
                        e,
                      )
                    },
                  })
                }
                function u() {
                  n.value.clear()
                }
                return (
                  e.onBeforeMount(() => {
                    wx.onNeedPrivacyAuthorization &&
                      wx.onNeedPrivacyAuthorization((e) => {
                        a(e)
                      })
                  }),
                  (t, r) => {
                    const n = R(e.resolveDynamicComponent('wd-popup'), Bo)
                    return (
                      e.openBlock(),
                      e.createElementBlock('view', null, [
                        e.createVNode(
                          n,
                          {
                            modelValue: o.value,
                            'onUpdate:modelValue': r[0] || (r[0] = (e) => (o.value = e)),
                            'close-on-click-modal': !1,
                            'custom-class': 'wd-privacy-popup',
                            onClose: u,
                          },
                          {
                            default: e.withCtx(() => [
                              e.createElementVNode('view', { class: 'wd-privacy-popup__header' }, [
                                e.createElementVNode(
                                  'view',
                                  { class: 'wd-picker__title' },
                                  e.toDisplayString(t.title),
                                  1,
                                ),
                              ]),
                              e.createElementVNode(
                                'view',
                                { class: 'wd-privacy-popup__container' },
                                [
                                  e.createElementVNode('text', null, e.toDisplayString(t.desc), 1),
                                  e.createElementVNode(
                                    'text',
                                    { class: 'wd-privacy-popup__container-protocol', onClick: c },
                                    e.toDisplayString(t.protocol),
                                    1,
                                  ),
                                  e.createElementVNode(
                                    'text',
                                    null,
                                    e.toDisplayString(t.subDesc),
                                    1,
                                  ),
                                ],
                              ),
                              e.createElementVNode('view', { class: 'wd-privacy-popup__footer' }, [
                                e.createElementVNode(
                                  'button',
                                  {
                                    class:
                                      'wd-privacy-popup__footer-disagree wd-button is-block is-round is-medium is-plain',
                                    id: 'disagree-btn',
                                    onClick: l,
                                  },
                                  ' 拒绝 ',
                                ),
                                e.createElementVNode(
                                  'button',
                                  {
                                    class:
                                      'wd-privacy-popup__footer-agree wd-button is-primary is-block is-round is-medium',
                                    id: 'agree-btn',
                                    'open-type': 'agreePrivacyAuthorization',
                                    onAgreeprivacyauthorization: s,
                                  },
                                  ' 同意 ',
                                  32,
                                ),
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ['modelValue'],
                        ),
                      ])
                    )
                  }
                )
              },
            },
          ),
        ),
        [['__scopeId', 'data-v-033b1a26']],
      ),
      To = __spreadProps(__spreadValues({}, vt), {
        theme: mt('light'),
        themeVars: { type: Object, default: () => ({}) },
      }),
      Io = e.defineComponent(
        __spreadProps(
          __spreadValues(
            {},
            {
              name: 'wd-config-provider',
              options: { virtualHost: !0, addGlobalClass: !0, styleIsolation: 'shared' },
            },
          ),
          {
            props: To,
            setup(t) {
              const r = t,
                o = e.computed(() => `wot-theme-${r.theme} ${r.customClass}`),
                n = e.computed(() => {
                  const e = a(r.themeVars)
                  return e ? `${Fe(e)}${r.customStyle}` : r.customStyle
                }),
                a = (e) => {
                  if (!e) return
                  const t = {}
                  return (
                    Object.keys(e).forEach((r) => {
                      var o
                      t[
                        `--wot-${((o = r), (o = o.replace(o.charAt(0), o.charAt(0).toLocaleLowerCase())).replace(/([a-z])([A-Z])/g, (e, t, r) => t + '-' + r.toLowerCase()))}`
                      ] = e[r]
                    }),
                    t
                  )
                }
              return (t, r) => (
                e.openBlock(),
                e.createElementBlock(
                  'view',
                  { class: e.normalizeClass(o.value), style: e.normalizeStyle(n.value) },
                  [e.renderSlot(t.$slots, 'default')],
                  6,
                )
              )
            },
          },
        ),
      ),
      Mo = e.defineComponent({
        __name: 'default',
        setup(t) {
          const r = {}
          return (t, o) => {
            const n = R(e.resolveDynamicComponent('wd-toast'), or),
              a = R(e.resolveDynamicComponent('wd-message-box'), Ao),
              i = R(e.resolveDynamicComponent('privacy-popup'), $o),
              s = R(e.resolveDynamicComponent('wd-config-provider'), Io)
            return (
              e.openBlock(),
              e.createBlock(
                s,
                { themeVars: r },
                {
                  default: e.withCtx(() => [
                    e.renderSlot(t.$slots, 'default'),
                    e.createVNode(n),
                    e.createVNode(a),
                    e.createVNode(i),
                  ]),
                  _: 3,
                },
              )
            )
          }
        },
      }),
      Do = e.defineComponent({
        __name: 'demo',
        setup(t) {
          const r = {}
          return (t, o) => {
            const n = R(e.resolveDynamicComponent('wd-toast'), or),
              a = R(e.resolveDynamicComponent('wd-message-box'), Ao),
              i = R(e.resolveDynamicComponent('wd-config-provider'), Io)
            return (
              e.openBlock(),
              e.createBlock(
                i,
                { themeVars: r },
                {
                  default: e.withCtx(() => [
                    e.renderSlot(t.$slots, 'default'),
                    e.createVNode(n),
                    e.createVNode(a),
                  ]),
                  _: 3,
                },
              )
            )
          }
        },
      }),
      jo = e.reactive({
        curIdx: uni.getStorageSync('app-tabbar-index') || 0,
        setCurIdx(e) {
          ;(this.curIdx = e), uni.setStorageSync('app-tabbar-index', e)
        },
      }),
      Go = ve(
        e.defineComponent({
          __name: 'fg-tabbar',
          setup(t) {
            const r = io.map((e) =>
              __spreadProps(__spreadValues({}, e), {
                path: `/${e.pagePath}`,
                normalIcon: e.normalIcon,
                selectIcon: e.selectIcon,
              }),
            )
            return (
              W(() => {
                uni.hideTabBar({
                  fail(e) {
                    F('log', 'at components/fg-tabbar/fg-tabbar.vue:39', 'hideTabBar fail: ', e)
                  },
                  success(e) {
                    F('log', 'at components/fg-tabbar/fg-tabbar.vue:42', 'hideTabBar success: ', e)
                  },
                })
              }),
              (t, o) => (
                e.openBlock(),
                e.createElementBlock('view', { class: 'custom-tabBar' }, [
                  (e.openBlock(!0),
                  e.createElementBlock(
                    e.Fragment,
                    null,
                    e.renderList(
                      e.unref(r),
                      (t, o) => (
                        e.openBlock(),
                        e.createElementBlock(
                          'view',
                          {
                            key: t.path,
                            class: 'custom-tabBar-item',
                            onClick: e.withModifiers(
                              (e) =>
                                (function (e) {
                                  const t = r[e].path
                                  jo.setCurIdx(e), uni.switchTab({ url: t })
                                })(o),
                              ['stop'],
                            ),
                          },
                          [
                            e.createElementVNode(
                              'image',
                              {
                                class: 'custom-tabBar-item-icon',
                                src: e.unref(jo).curIdx === o ? t.selectIcon : t.normalIcon,
                              },
                              null,
                              8,
                              ['src'],
                            ),
                            e.createElementVNode(
                              'view',
                              { class: 'custom-tabBar-item-title' },
                              e.toDisplayString(t.text),
                              1,
                            ),
                          ],
                          8,
                          ['onClick'],
                        )
                      ),
                    ),
                    128,
                  )),
                ])
              )
            )
          },
        }),
        [['__scopeId', 'data-v-2dc2d2cf']],
      ),
      zo = e.defineComponent({
        __name: 'tabbar',
        setup(t) {
          const r = {}
          return (t, o) => {
            const n = R(e.resolveDynamicComponent('fg-tabbar'), Go),
              a = R(e.resolveDynamicComponent('wd-toast'), or),
              i = R(e.resolveDynamicComponent('wd-message-box'), Ao),
              s = R(e.resolveDynamicComponent('wd-config-provider'), Io)
            return (
              e.openBlock(),
              e.createBlock(
                s,
                { themeVars: r },
                {
                  default: e.withCtx(() => [
                    e.renderSlot(t.$slots, 'default'),
                    e.createVNode(n),
                    e.createVNode(a),
                    e.createVNode(i),
                  ]),
                  _: 3,
                },
              )
            )
          }
        },
      })
    const {
      app: Fo,
      Vuex: Ro,
      Pinia: qo,
    } = (function () {
      const t = e.createVueApp(eo)
      return (
        t.use(Ee),
        t.use(co),
        t.use(Eo),
        t.use(No),
        t.use(Yr),
        t.component('layout-default-uni', Mo),
        t.component('layout-demo-uni', Do),
        t.component('layout-tabbar-uni', zo),
        { app: t }
      )
    })()
    ;(uni.Vuex = Ro),
      (uni.Pinia = qo),
      Fo.provide('__globalStyles', __uniConfig.styles),
      (Fo._component.mpType = 'app'),
      (Fo._component.render = () => {}),
      Fo.mount('#app')
  })(Vue)
