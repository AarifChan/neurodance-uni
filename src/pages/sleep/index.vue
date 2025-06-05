<route lang="json5">
{
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom', // 开启自定义导航栏
  },
}
</route>

<template>
  <view>
    <fg-navbar>睡个好觉</fg-navbar>
  </view>
</template>

<script lang="ts" setup>
import RequestComp from './components/request.vue'
import UploadComp from './components/upload.vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const toSubPage = () => {
  uni.navigateTo({
    url: '/pages-sub/demo/index',
  })
}
</script>

<style lang="scss" scoped>
.test-css {
  // 16rpx=>0.5rem
  padding-bottom: 16rpx;
  // mt-4=>1rem=>16px;
  margin-top: 16px;
  text-align: center;
}
</style>
