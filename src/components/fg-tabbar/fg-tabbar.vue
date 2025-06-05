<template>
  <view class="custom-tabBar">
    <block v-for="(item, index) in tabBarList" :key="item.path">
      <view class="custom-tabBar-item" @tap.stop="selectTabBar(index)">
        <image
          class="custom-tabBar-item-icon"
          :src="tabbarStore.curIdx === index ? item.selectIcon : item.normalIcon"
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
  tabbarStore.setCurIdx(index)
  uni.switchTab({ url })
}
onLoad(() => {
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
})
</script>
<style lang="scss" scoped>
.custom-tabBar {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 84px;
  padding-bottom: calc(env(safe-area-inset-bottom));
  width: 100%;
  border-radius: 20px 20px 0 0;
  background: #fbfbfb;
  /* tab阴影 */
  box-shadow: 0 0 24px 0 rgba(177, 177, 177, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-icon {
      width: 25px;
      height: 25px;
    }
    &-title {
      margin-top: 5px;
      color: #4e5969;
      font-size: 12px;
    }
  }
}
</style>
