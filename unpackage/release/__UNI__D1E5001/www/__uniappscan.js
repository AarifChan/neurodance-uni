'use weex:vue'

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    const promise = this.constructor
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) =>
        promise.resolve(callback()).then(() => {
          throw reason
        }),
    )
  }
}

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
}

;(() => {
  var E = Object.create
  var g = Object.defineProperty
  var _ = Object.getOwnPropertyDescriptor
  var D = Object.getOwnPropertyNames
  var w = Object.getPrototypeOf,
    v = Object.prototype.hasOwnProperty
  var y = (e, a) => () => (a || e((a = { exports: {} }).exports, a), a.exports)
  var S = (e, a, s, o) => {
    if ((a && typeof a == 'object') || typeof a == 'function')
      for (let l of D(a))
        !v.call(e, l) &&
          l !== s &&
          g(e, l, { get: () => a[l], enumerable: !(o = _(a, l)) || o.enumerable })
    return e
  }
  var B = (e, a, s) => (
    (s = e != null ? E(w(e)) : {}),
    S(a || !e || !e.__esModule ? g(s, 'default', { value: e, enumerable: !0 }) : s, e)
  )
  var b = y((N, m) => {
    m.exports = Vue
  })
  var d = {
      data() {
        return {
          locale: 'en',
          fallbackLocale: 'en',
          localization: {
            en: { done: 'OK', cancel: 'Cancel' },
            zh: { done: '\u5B8C\u6210', cancel: '\u53D6\u6D88' },
            'zh-hans': {},
            'zh-hant': {},
            messages: {},
          },
          localizationTemplate: {},
        }
      },
      onLoad() {
        this.initLocale()
      },
      created() {
        this.initLocale()
      },
      methods: {
        initLocale() {
          if (this.__initLocale) return
          this.__initLocale = !0
          let e = (plus.webview.currentWebview().extras || {}).data || {}
          if ((e.messages && (this.localization.messages = e.messages), e.locale)) {
            this.locale = e.locale.toLowerCase()
            return
          }
          let a = {
              chs: 'hans',
              cn: 'hans',
              sg: 'hans',
              cht: 'hant',
              tw: 'hant',
              hk: 'hant',
              mo: 'hant',
            },
            s = plus.os.language.toLowerCase().split('/')[0].replace('_', '-').split('-'),
            o = s[1]
          o && (s[1] = a[o] || o),
            (s.length = s.length > 2 ? 2 : s.length),
            (this.locale = s.join('-'))
        },
        localize(e) {
          let a = this.locale,
            s = a.split('-')[0],
            o = this.fallbackLocale,
            l = (n) => Object.assign({}, this.localization[n], (this.localizationTemplate || {})[n])
          return l('messages')[e] || l(a)[e] || l(s)[e] || l(o)[e] || e
        },
      },
    },
    p = {
      onLoad() {
        this.initMessage()
      },
      methods: {
        initMessage() {
          let {
            from: e,
            callback: a,
            runtime: s,
            data: o = {},
            useGlobalEvent: l,
          } = plus.webview.currentWebview().extras || {}
          ;(this.__from = e),
            (this.__runtime = s),
            (this.__page = plus.webview.currentWebview().id),
            (this.__useGlobalEvent = l),
            (this.data = JSON.parse(JSON.stringify(o))),
            plus.key.addEventListener('backbutton', () => {
              typeof this.onClose == 'function'
                ? this.onClose()
                : plus.webview.currentWebview().close('auto')
            })
          let n = this,
            r = function (c) {
              let f = c.data && c.data.__message
              !f || (n.__onMessageCallback && n.__onMessageCallback(f.data))
            }
          if (this.__useGlobalEvent)
            weex.requireModule('globalEvent').addEventListener('plusMessage', r)
          else {
            let c = new BroadcastChannel(this.__page)
            c.onmessage = r
          }
        },
        postMessage(e = {}, a = !1) {
          let s = JSON.parse(
              JSON.stringify({ __message: { __page: this.__page, data: e, keep: a } }),
            ),
            o = this.__from
          if (this.__runtime === 'v8')
            this.__useGlobalEvent
              ? plus.webview.postMessageToUniNView(s, o)
              : new BroadcastChannel(o).postMessage(s)
          else {
            let l = plus.webview.getWebviewById(o)
            l && l.evalJS(`__plusMessage&&__plusMessage(${JSON.stringify({ data: s })})`)
          }
        },
        onMessage(e) {
          this.__onMessageCallback = e
        },
      },
    }
  var i = B(b())
  var C = (e, a) => {
    let s = e.__vccOpts || e
    for (let [o, l] of a) s[o] = l
    return s
  }
  var k = {
      content: {
        '': { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' },
      },
      barcode: { '': { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, zIndex: 1 } },
      'set-flash': {
        '': {
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(80px)',
          zIndex: 2,
        },
      },
      'image-flash': { '': { width: 26, height: 26, marginBottom: 2 } },
      'image-flash-text': { '': { fontSize: 10, color: '#FFFFFF' } },
    },
    t = plus.barcode,
    A = {
      qrCode: [t.QR, t.AZTEC, t.MAXICODE],
      barCode: [
        t.EAN13,
        t.EAN8,
        t.UPCA,
        t.UPCE,
        t.CODABAR,
        t.CODE128,
        t.CODE39,
        t.CODE93,
        t.ITF,
        t.RSS14,
        t.RSSEXPANDED,
      ],
      datamatrix: [t.DATAMATRIX],
      pdf417: [t.PDF417],
    },
    O = {
      [t.QR]: 'QR_CODE',
      [t.EAN13]: 'EAN_13',
      [t.EAN8]: 'EAN_8',
      [t.DATAMATRIX]: 'DATA_MATRIX',
      [t.UPCA]: 'UPC_A',
      [t.UPCE]: 'UPC_E',
      [t.CODABAR]: 'CODABAR',
      [t.CODE39]: 'CODE_39',
      [t.CODE93]: 'CODE_93',
      [t.CODE128]: 'CODE_128',
      [t.ITF]: 'CODE_25',
      [t.PDF417]: 'PDF_417',
      [t.AZTEC]: 'AZTEC',
      [t.RSS14]: 'RSS_14',
      [t.RSSEXPANDED]: 'RSSEXPANDED',
    },
    M = {
      mixins: [p, d],
      data: {
        filters: [0, 2, 1],
        backgroud: '#000000',
        frameColor: '#118ce9',
        scanbarColor: '#118ce9',
        enabledFlash: !1,
        flashImage0:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABjklEQVRoQ+1ZbVHEQAx9TwE4ABTcOQAknANQAKcAUAAOAAXgAHAACsDCKQiTmbYDzJZtNt2bFrJ/m6+Xl2yyU2LmhzOPH/8PgIjcADirxNyapNoffMwMiMgzgMPBHmyCLySPLCoBwJKtAbJbYaBmD1yRvBwAtBMxl5DF+DZkiwCIyBLAzsgBbki+Wm2WAlCaL6zOMvKnJO+sNksB7ALQbO1ZHfbIv5FUVs2nCIB6EZETALdmj2mFY5I6X8ynGEADQllYmL1+VzBfnV/VvQB0aj45ARyQ/Ci14QLQsOBZLe5JaikWnzEA7AN4L4hgA2Dpyb76dANwsOCq/TZhASAYKGie0a7R1lDPI0ebtF0NUi+4yfdAtxr3PEMnD6BbD0QkNfACQO05EAwMuaBqDrIVycdmTpwDuP4R0OR7QFftVRP0g+49cwOQq4DJMxAAchmofY3m/EcJBQOZbTRKKJeBKKEoIePvpFRJ1VzmciUccyCa+C81cerBkuuB7sGTE/zt+yhN7AnAqxsAvBn06n8CkyPwMZKwm+UAAAAASUVORK5CYII=',
        flashImage1:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAA3kvI3lfY2k/VAl+43k/U3k/Q4k/M3kvI3k/M4k/Q4lPU2lPU2k/Vdq843k/WWSpNKAAAAD3RSTlMAwD+QINCAcPBgUDDgoBAE044kAAAAdklEQVQ4y2OgOrD/DwffUSTkERIfyZXAtOMbca7iVoKDDSgSbAijJqBI8J2HiX9FM2s+TOITmgQrTEIATYIJJuEA5mJ68S+Gg/0hEi0YEoxQK2gs0WyPQyKBGYeEAhPtJRaw45AIccXpwVEJekuwQyQWMFAfAACeDBJY9aXa3QAAAABJRU5ErkJggg==',
        autoDecodeCharSet: !1,
        autoZoom: !0,
        localizationTemplate: {
          en: {
            fail: 'Recognition failure',
            'flash.on': 'Tap to turn light on',
            'flash.off': 'Tap to turn light off',
          },
          zh: {
            fail: '\u8BC6\u522B\u5931\u8D25',
            'flash.on': '\u8F7B\u89E6\u7167\u4EAE',
            'flash.off': '\u8F7B\u89E6\u5173\u95ED',
          },
        },
      },
      onLoad() {
        let e = this.data,
          a = e.scanType
        ;(this.autoDecodeCharSet = e.autoDecodeCharSet), (this.autoZoom = e.autoZoom)
        let s = []
        Array.isArray(a) &&
          a.length &&
          a.forEach((o) => {
            let l = A[o]
            l && (s = s.concat(l))
          }),
          s.length ||
            (s = s.concat(A.qrCode).concat(A.barCode).concat(A.datamatrix).concat(A.pdf417)),
          (this.filters = s),
          this.onMessage((o) => {
            this.gallery()
          })
      },
      onUnload() {
        this.cancel()
      },
      onReady() {
        setTimeout(() => {
          this.cancel(), this.start()
        }, 50)
      },
      methods: {
        start() {
          this.$refs.barcode.start({ sound: this.data.sound })
        },
        scan(e) {
          t.scan(
            e,
            (a, s, o, l) => {
              this.scanSuccess(a, s, o, l)
            },
            () => {
              plus.nativeUI.toast(this.localize('fail'))
            },
            this.filters,
            this.autoDecodeCharSet,
          )
        },
        cancel() {
          this.$refs.barcode.cancel()
        },
        gallery() {
          plus.gallery.pick(
            (e) => {
              this.scan(e)
            },
            (e) => {
              e.code !== (weex.config.env.platform.toLowerCase() === 'android' ? 12 : -2) &&
                plus.nativeUI.toast(this.localize('fail'))
            },
            {
              multiple: !1,
              system: !1,
              filename: '_doc/uniapp_temp/gallery/',
              permissionAlert: !0,
            },
          )
        },
        onmarked(e) {
          var a = e.detail
          this.scanSuccess(a.code, a.message, a.file, a.charSet)
        },
        scanSuccess(e, a, s, o) {
          this.postMessage({
            event: 'marked',
            detail: { scanType: O[e], result: a, charSet: o || 'utf8', path: s || '' },
          })
        },
        onerror(e) {
          this.postMessage({ event: 'fail', message: JSON.stringify(e) })
        },
        setFlash() {
          ;(this.enabledFlash = !this.enabledFlash), this.$refs.barcode.setFlash(this.enabledFlash)
        },
      },
    }
  function I(e, a, s, o, l, n) {
    return (
      (0, i.openBlock)(),
      (0, i.createElementBlock)(
        'scroll-view',
        {
          scrollY: !0,
          showScrollbar: !0,
          enableBackToTop: !0,
          bubble: 'true',
          style: { flexDirection: 'column' },
        },
        [
          (0, i.createElementVNode)('view', { class: 'content' }, [
            (0, i.createElementVNode)(
              'barcode',
              {
                class: 'barcode',
                ref: 'barcode',
                autostart: 'false',
                backgroud: e.backgroud,
                frameColor: e.frameColor,
                scanbarColor: e.scanbarColor,
                filters: e.filters,
                autoDecodeCharset: e.autoDecodeCharSet,
                autoZoom: e.autoZoom,
                onMarked: a[0] || (a[0] = (...r) => n.onmarked && n.onmarked(...r)),
                onError: a[1] || (a[1] = (...r) => n.onerror && n.onerror(...r)),
              },
              null,
              40,
              [
                'backgroud',
                'frameColor',
                'scanbarColor',
                'filters',
                'autoDecodeCharset',
                'autoZoom',
              ],
            ),
            (0, i.createElementVNode)(
              'view',
              {
                class: 'set-flash',
                onClick: a[2] || (a[2] = (...r) => n.setFlash && n.setFlash(...r)),
              },
              [
                (0, i.createElementVNode)(
                  'u-image',
                  {
                    class: 'image-flash',
                    src: e.enabledFlash ? e.flashImage1 : e.flashImage0,
                    resize: 'stretch',
                  },
                  null,
                  8,
                  ['src'],
                ),
                (0, i.createElementVNode)(
                  'u-text',
                  { class: 'image-flash-text' },
                  (0, i.toDisplayString)(
                    e.enabledFlash ? e.localize('flash.off') : e.localize('flash.on'),
                  ),
                  1,
                ),
              ],
            ),
          ]),
        ],
      )
    )
  }
  var h = C(M, [
    ['render', I],
    ['styles', [k]],
  ])
  var u = plus.webview.currentWebview()
  if (u) {
    let e = parseInt(u.id),
      a = 'template/__uniappscan',
      s = {}
    try {
      s = JSON.parse(u.__query__)
    } catch (l) {}
    h.mpType = 'page'
    let o = Vue.createPageApp(h, {
      $store: getApp({ allowDefault: !0 }).$store,
      __pageId: e,
      __pagePath: a,
      __pageQuery: s,
    })
    o.provide('__globalStyles', Vue.useCssStyles([...__uniConfig.styles, ...(h.styles || [])])),
      o.mount('#root')
  }
})()
