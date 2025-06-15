<template>
  <view class="custom-tabBar">
    <block v-for="(item, index) in tabBarList" :key="item.path">
      <view class="custom-tabBar-item" @tap.stop="selectTabBar(index)">
        <image
          v-show="tabbarStore.curIdx === index"
          class="custom-tabBar-item-icon"
          :src="item.selectIcon"
        />
        <image
          v-show="tabbarStore.curIdx !== index"
          class="custom-tabBar-item-icon"
          :src="item.normalIcon"
        />
        <view class="custom-tabBar-item-title">{{ item.text }}</view>
      </view>
    </block>
  </view>
</template>

<script setup lang="ts">
// unocss icon 默认不生效，需要在这里写一遍才能生效！注释掉也是生效的，但是必须要有！
// i-carbon-code
import { tabBarList as _tabBarList } from '@/utils/index'
import { tabbarStore } from './tabbar'
/** tabbarList 里面的 path 从 pages.config.ts 得到 */
const tabBarList = _tabBarList.map((item) => ({
  ...item,
  path: `/${item.pagePath}`,
  normalIcon: item.normalIcon,
  selectIcon: item.selectIcon,
}))

function selectTabBar(index: number) {
  const url = tabBarList[index].path
  if (tabbarStore.curIdx === index) return
  tabbarStore.setCurIdx(index) // 提前设置 index
  // 加延迟避免页面跳动影响 UI
  setTimeout(() => {
    uni.switchTab({ url })
  }, 10)
}
const setCurrentTabIndex = () => {
  const pages = getCurrentPages()
  const route = pages[pages.length - 1].route

  const tabList = tabBarList.map((item) => item.pagePath)
  console.log('currentRoute:', tabList)
  let pageIndex = tabList.indexOf(route)
  tabbarStore.setCurIdx(pageIndex)
}
onLoad((e: any) => {
  // 解决原生 tabBar 未隐藏导致有2个 tabBar 的问题

  // #ifdef APP-PLUS | H5
  uni.hideTabBar({
    fail(err) {
      console.log('hideTabBar fail: ', err)
    },
    success(res) {
      console.log('hideTabBar success: ', res)
    },
  })
  // #endif
  setCurrentTabIndex()
})
</script>
<style lang="scss" scoped>
.custom-tabBar {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 148rpx;
  padding-bottom: calc(env(safe-area-inset-bottom));
  width: 100%;
  gap: 150rpx;
  border-radius: 40rpx 40rpx 0 0;
  background-color: #fff;
  overflow: hidden;
  /* tab阴影 */
  box-shadow: 0 0 24px 0 rgba(177, 177, 177, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 999;

  .custom-tabBar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateZ(0);
    backface-visibility: hidden;
    .custom-tabBar-item-icon {
      width: 25px;
      height: 25px;
    }
    .custom-tabBar-item-title {
      margin-top: 5px;
      color: #4e5969;
      font-size: 12px;
    }
  }
}
</style>
