;(function () {
  let u = void 0,
    isReady = false,
    onReadyCallbacks = [],
    isServiceReady = false,
    onServiceReadyCallbacks = []
  const __uniConfig = {
    pages: [],
    globalStyle: {
      backgroundColor: '#f1f1f1',
      navigationBar: {
        backgroundColor: '#f1f1f1',
        titleText: '',
        style: 'default',
        type: 'default',
        titleColor: '#000000',
      },
      isNVue: false,
    },
    nvue: { compiler: 'uni-app', styleCompiler: 'uni-app', 'flex-direction': 'column' },
    renderer: 'auto',
    appname: 'NeuroDance',
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
          pagePath: 'pages/data/index',
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
      backgroundColor: '#ffffff',
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
        navigationBar: { titleText: '', style: 'custom', type: 'default' },
        isNVue: false,
      },
    },
    {
      path: 'pages/data/index',
      meta: {
        isQuit: true,
        isTabBar: true,
        tabBarIndex: 0,
        disableScroll: true,
        navigationBar: { titleText: '', style: 'custom', type: 'default' },
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
        disableScroll: true,
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
        disableScroll: true,
        navigationBar: { titleText: '', style: 'custom', type: 'default' },
        isNVue: false,
      },
    },
    {
      path: 'pages/welcome/index',
      meta: { navigationBar: { titleText: '', type: 'default' }, isNVue: false },
    },
    { path: 'pages/data/disc/index-test', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/disc/index', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/disc/index2', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/professional/index', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/sleep/index', meta: { navigationBar: {}, isNVue: false } },
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
      meta: {
        disableScroll: true,
        navigationBar: { titleText: '', style: 'custom', type: 'default' },
        isNVue: false,
      },
    },
    {
      path: 'pages/mine/protocol/index',
      meta: { navigationBar: { titleText: '', type: 'default' }, isNVue: false },
    },
    { path: 'pages/data/data/day/day', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/data/moon/moon', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/data/week/week', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/data/year/year', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/disc/component/circularSet', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/disc/component/sleepLog', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/disc/component/sleepPosition', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/disc/component/starlitSky', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/disc/component/wakeUp', meta: { navigationBar: {}, isNVue: false } },
    {
      path: 'pages/data/professional/component/bodyStand',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/professional/component/eegChart',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/professional/component/eegScreen',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/professional/component/sleepChart',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/professional/component/snoreChart',
      meta: { navigationBar: {}, isNVue: false },
    },
    { path: 'pages/data/sleep/line/eeg', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/sleep/line/eog', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/sleep/line/snore', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/data/day/component/clock', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/data/day/component/sleepData', meta: { navigationBar: {}, isNVue: false } },
    { path: 'pages/data/data/day/component/sleepLong', meta: { navigationBar: {}, isNVue: false } },
    {
      path: 'pages/data/data/day/component/sleepRating',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/day/component/sleepStudy',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/day/component/suggestionsLogs',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/alarmClock',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/averageBreathe',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/averageSleepPosition',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/averageStartUp',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/averageTimeSleep',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/deepSleepAverage',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/deepSleepLong',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/sleepData',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/sleepRating',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/moon/component/suggestionExplain',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/alarmClock',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/averageBreathe',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/averageSleepPosition',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/averageStartUp',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/averageTimeSleep',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/deepSleepAverage',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/deepSleepLong',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/sleepData',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/sleepRating',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/week/component/suggestionExplain',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/alarmClock',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/averageBreathe',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/averageSleepPosition',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/averageStartUp',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/averageTimeSleep',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/deepSleepAverage',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/deepSleepLong',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/sleepData',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/sleepRating',
      meta: { navigationBar: {}, isNVue: false },
    },
    {
      path: 'pages/data/data/year/component/suggestionExplain',
      meta: { navigationBar: {}, isNVue: false },
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
