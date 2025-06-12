import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '#f1f1f1',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f1f1f1',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^fg-(.*)': '@/components/fg-$1/fg-$1.vue',
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  // 如果不需要tabBar，推荐使用 spa 模板。（pnpm create xxx -t spa）
  tabBar: {
    custom: true,
    color: '#999999',
    selectedColor: '#018d71',
    backgroundColor: '#ffffff',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      // 注意tabbar路由需要使用 layout:tabbar 布局
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
  },
})
