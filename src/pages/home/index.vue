<route lang="json5" type="page">
{
  layout: 'tabbar',
  style: {
    disableScroll: true,
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="common-bg">
    <view class="home">
      <view class="custom-btn"><button @click="handleClick">睡眠详情</button></view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const current = ref<number>(0)

const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
function handleClick(e) {
  console.log(e)
  uni.navigateTo({
    url: '/pages-sub/sleep/index',
  })
}
function onChange(e) {
  console.log(e)
}
</script>

<style lang="scss" scoped>
//
.home {
  width: 100%;
}
.custom-btn {
  margin: 8rpx auto;
  width: 80%;
}
.card-swiper {
  width: 100%;
  height: 100%;
  --wot-swiper-radius: 0;
  --wot-swiper-item-padding: 0 0;
  --wot-swiper-nav-dot-color: gray;
  --wot-swiper-nav-dot-active-color: #4d80f0;
  padding-bottom: 24rpx;
  :deep(.custom-indicator-class) {
    bottom: -16px;
  }
  :deep(.custom-image) {
    // border-radius: 12rpx;
  }
  :deep(.custom-image-prev) {
    height: 168px !important;
    padding: 64rpx;
  }
}
</style>
