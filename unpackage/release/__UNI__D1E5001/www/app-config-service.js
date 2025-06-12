;(function () {
  let u = void 0,
    isReady = false,
    onReadyCallbacks = [],
    isServiceReady = false,
    onServiceReadyCallbacks = []
  const __uniConfig = {
    pages: [],
    globalStyle: {
      backgroundColor: '#F3F3F3',
      navigationBar: {
        backgroundColor: '#F1F1F1',
        titleText: 'unibest',
        style: 'default',
        type: 'default',
        titleColor: '#000000',
      },
      isNVue: false,
    },
    nvue: { compiler: 'uni-app', styleCompiler: 'uni-app', 'flex-direction': 'column' },
    renderer: 'auto',
    appname: '神舞科技',
    splashscreen: { alwaysShowBeforeRender: true, autoclose: true },
    compilerVersion: '4.66',
    entryPagePath: 'pages/index/index',
    entryPageQuery: '',
    realEntryPagePath: '',
    networkTimeout: {
      request: 60000,
      connectSocket: 60000,
      uploadFile: 60000,
      downloadFile: 60000,
    },
    tabBar: {
      position: 'bottom',
      color: '#999999',
      selectedColor: '#018d71',
      borderStyle: 'black',
      blurEffect: 'none',
      fontSize: '10px',
      iconWidth: '24px',
      spacing: '3px',
      height: '50px',
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
      custom: true,
      backgroundColor: '#F8F8F8',
      selectedIndex: 0,
      shown: true,
    },
    locales: {},
    darkmode: false,
    themeConfig: {},
  }
  const __uniRoutes = [
    {
      path: 'pages/index/index',
      meta: {
        isQuit: true,
        isEntry: true,
        isTabBar: true,
        tabBarIndex: 0,
        navigationBar: { titleText: '首页', style: 'custom', type: 'default' },
        isNVue: false,
      },
    },
    {
      path: 'pages/login/index',
      meta: { navigationBar: { titleText: '', style: 'custom', type: 'default' }, isNVue: false },
    },
    {
      path: 'pages/mine/index',
      meta: {
        isQuit: true,
        isTabBar: true,
        tabBarIndex: 2,
        navigationBar: { titleText: '', type: 'default' },
        isNVue: false,
      },
    },
    {
      path: 'pages/sleep/index',
      meta: {
        isQuit: true,
        isTabBar: true,
        tabBarIndex: 1,
        navigationBar: { titleText: '', style: 'custom', type: 'default' },
        isNVue: false,
      },
    },
    {
      path: 'pages/welcome/index',
      meta: { navigationBar: { titleText: '', type: 'default' }, isNVue: false },
    },
    {
      path: 'pages/login/account/index',
      meta: { navigationBar: { titleText: '', style: 'custom', type: 'default' }, isNVue: false },
    },
    {
      path: 'pages/login/verification/index',
      meta: { navigationBar: { titleText: '', style: 'custom', type: 'default' }, isNVue: false },
    },
    {
      path: 'pages/mine/about/index',
      meta: { navigationBar: { titleText: '关于我们', type: 'default' }, isNVue: false },
    },
    {
      path: 'pages/mine/info/index',
      meta: { navigationBar: { titleText: '个人资料', type: 'default' }, isNVue: false },
    },
    {
      path: 'pages/mine/password/index',
      meta: { navigationBar: { titleText: '修改密码', type: 'default' }, isNVue: false },
    },
  ].map(
    (uniRoute) => (
      (uniRoute.meta.route = uniRoute.path),
      __uniConfig.pages.push(uniRoute.path),
      (uniRoute.path = '/' + uniRoute.path),
      uniRoute
    ),
  )
  __uniConfig.styles = [] //styles
  __uniConfig.onReady = function (callback) {
    if (__uniConfig.ready) {
      callback()
    } else {
      onReadyCallbacks.push(callback)
    }
  }
  Object.defineProperty(__uniConfig, 'ready', {
    get: function () {
      return isReady
    },
    set: function (val) {
      isReady = val
      if (!isReady) {
        return
      }
      const callbacks = onReadyCallbacks.slice(0)
      onReadyCallbacks.length = 0
      callbacks.forEach(function (callback) {
        callback()
      })
    },
  })
  __uniConfig.onServiceReady = function (callback) {
    if (__uniConfig.serviceReady) {
      callback()
    } else {
      onServiceReadyCallbacks.push(callback)
    }
  }
  Object.defineProperty(__uniConfig, 'serviceReady', {
    get: function () {
      return isServiceReady
    },
    set: function (val) {
      isServiceReady = val
      if (!isServiceReady) {
        return
      }
      const callbacks = onServiceReadyCallbacks.slice(0)
      onServiceReadyCallbacks.length = 0
      callbacks.forEach(function (callback) {
        callback()
      })
    },
  })
  service.register('uni-app-config', {
    create(a, b, c) {
      if (!__uniConfig.viewport) {
        var d = b.weex.config.env.scale,
          e = b.weex.config.env.deviceWidth,
          f = Math.ceil(e / d)
        Object.assign(__uniConfig, { viewport: f, defaultFontSize: 16 })
      }
      return {
        instance: {
          __uniConfig: __uniConfig,
          __uniRoutes: __uniRoutes,
          global: u,
          window: u,
          document: u,
          frames: u,
          self: u,
          location: u,
          navigator: u,
          localStorage: u,
          history: u,
          Caches: u,
          screen: u,
          alert: u,
          confirm: u,
          prompt: u,
          fetch: u,
          XMLHttpRequest: u,
          WebSocket: u,
          webkit: u,
          print: u,
        },
      }
    },
  })
})()
